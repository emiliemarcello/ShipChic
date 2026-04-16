/**
 * ShipChic AI Service
 * Clean implementation using Google Gemini API
 */

const AIService = {
    // API Configuration
    API_URL: 'https://api.openai.com/v1/chat/completions',

    /** Retrieve API Key from LocalStorage */
    getApiKey() {
        const key = localStorage.getItem('sc_openai_key');
        if (!key) {
            console.warn('[AIService] No API Key found in settings');
            throw new Error('Missing OpenAI Key');
        }
        return key;
    },

    /** Core method to call OpenAI API */
    async callOpenAI(prompt) {
        const apiKey = this.getApiKey();
        const url = this.API_URL;
        const requestBody = {
            model: 'gpt-3.5-turbo',
            messages: [
                { role: 'system', content: 'You are a helpful assistant that returns ONLY valid JSON as specified in the prompt.' },
                { role: 'user', content: prompt }
            ],
            temperature: 0.7,
            max_tokens: 1024
        };

        console.log('[AIService] Calling OpenAI API...');

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('[AIService] API Error:', response.status, errorText);
            throw new Error(`API Error ${response.status}: ${errorText}`);
        }

        const data = await response.json();
        console.log('[AIService] Raw response:', data);

        const text = data.choices?.[0]?.message?.content;
        if (!text) {
            throw new Error('No text in API response');
        }

        return text;
    },



    /**
     * Parse JSON from AI response (handles markdown code blocks)
     */
    parseJSON(text) {
        // Remove markdown code block markers if present
        let cleaned = text.trim();
        if (cleaned.startsWith('```json')) {
            cleaned = cleaned.slice(7);
        } else if (cleaned.startsWith('```')) {
            cleaned = cleaned.slice(3);
        }
        if (cleaned.endsWith('```')) {
            cleaned = cleaned.slice(0, -3);
        }
        cleaned = cleaned.trim();

        return JSON.parse(cleaned);
    },

    // Backup Data Constants (English)
    BACKUP_TREND: {
        "topic": "Digital Lavender Aesthetics",
        "prediction": "Digital pastel hues dominating Q3 2026 streetwear",
        "confidence": 92,
        "marketData": {
            "searchVolume": "+210%",
            "socialMentions": "Viral on TikTok/IG",
            "peakWindow": "Late 2025"
        },
        "insight": "Consumers seeking calming tech-integrated optimism",
        "action": "Incorporate lavender accents in outerwear collection"
    },

    // Backup Data Constants (Chinese)
    BACKUP_TREND_ZH: {
        "topic": "数字薰衣草美学",
        "prediction": "数字柔和色调将主导2026年第三季度的街头服饰",
        "confidence": 92,
        "marketData": {
            "searchVolume": "+210%",
            "socialMentions": "TikTok/IG 病毒式传播",
            "peakWindow": "2025年底"
        },
        "insight": "消费者寻求平静且融合科技的乐观主义",
        "action": "在成衣系列中加入薰衣草色点缀"
    },

    BACKUP_NEWS: [
        { "title": "Global Supply Chain Shifts", "source": "Business of Fashion", "time": "1h", "tag": "Logistics", "icon": "🌍" },
        { "title": "Sustainable Fabrics on Rise", "source": "Vogue Business", "time": "3h", "tag": "Sustainability", "icon": "🌱" },
        { "title": "Digital Fashion Week Recap", "source": "WWD", "time": "5h", "tag": "Tech", "icon": "👾" },
        { "title": "Luxury Resale Market Booms", "source": "The RealReal", "time": "6h", "tag": "Resale", "icon": "♻️" },
        { "title": "Pantone's New Color of the Year", "source": "Hypebeast", "time": "8h", "tag": "Design", "icon": "🎨" }
    ],

    BACKUP_NEWS_ZH: [
        { "title": "全球供应链转移", "source": "Business of Fashion", "time": "1小时前", "tag": "物流", "icon": "🌍" },
        { "title": "可持续面料兴起", "source": "Vogue Business", "time": "3小时前", "tag": "可持续性", "icon": "🌱" },
        { "title": "数字时装周回顾", "source": "WWD", "time": "5小时前", "tag": "科技", "icon": "👾" },
        { "title": "奢品转售市场繁荣", "source": "The RealReal", "time": "6小时前", "tag": "转售", "icon": "♻️" },
        { "title": "潘通发布年度代表色", "source": "Hypebeast", "time": "8小时前", "tag": "设计", "icon": "🎨" }
    ],

    getLanguage() {
        return localStorage.getItem('sc_lang') || 'en';
    },

    /**
     * Fetch trend analysis for AI Trend Scout
     */
    async fetchTrendAnalysis() {
        const lang = this.getLanguage();
        const isZh = lang === 'zh';

        const prompt = `You are a fashion trend analyst. Generate ONE trending fashion item with market data.
        Respond in ${isZh ? 'SIMPLIFIED CHINESE' : 'ENGLISH'}.

Return ONLY valid JSON in this exact format (no extra text):
{
    "topic": "Trend Name Here",
    "prediction": "One sentence prediction",
    "confidence": 85,
    "marketData": {
        "searchVolume": "+150%",
        "socialMentions": "Trending on TikTok",
        "peakWindow": "Next 3 months"
    },
    "insight": "Why this trend is emerging",
    "action": "Recommended action for retailers"
}`;

        try {
            const text = await this.callOpenAI(prompt);
            return this.parseJSON(text);
        } catch (error) {
            console.warn('[AIService] API Call Failed, using backup data for Trend Analysis:', error);
            return isZh ? this.BACKUP_TREND_ZH : this.BACKUP_TREND;
        }
    },

    /**
     * Fetch market news headlines
     */
    async fetchMarketNews() {
        const lang = this.getLanguage();
        const isZh = lang === 'zh';

        const prompt = `You are a fashion industry news writer. Generate 5 realistic fashion news headlines.
        Respond in ${isZh ? 'SIMPLIFIED CHINESE' : 'ENGLISH'}.

Return ONLY a valid JSON array in this exact format (no extra text):
[
    {"title": "Headline 1", "source": "Vogue", "time": "2h", "tag": "Industry", "icon": "📰"},
    {"title": "Headline 2", "source": "WWD", "time": "4h", "tag": "Trends", "icon": "🔥"},
    {"title": "Headline 3", "source": "BoF", "time": "6h", "tag": "Sustainability", "icon": "🌿"},
    {"title": "Headline 4", "source": "Hypebeast", "time": "7h", "tag": "Streetwear", "icon": "👟"},
    {"title": "Headline 5", "source": "Forbes", "time": "8h", "tag": "Business", "icon": "💼"}
]`;

        try {
            const text = await this.callOpenAI(prompt);
            return this.parseJSON(text);
        } catch (error) {
            console.warn('[AIService] API Call Failed, using backup data for Market News:', error);
            return isZh ? this.BACKUP_NEWS_ZH : this.BACKUP_NEWS;
        }
    }
};

// Expose globally
window.AIService = AIService;

console.log('[AIService] Loaded and ready');
