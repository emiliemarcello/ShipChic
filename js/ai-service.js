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

    /**
     * Fetch trend analysis for AI Trend Scout
     */
    async fetchTrendAnalysis() {
        const prompt = `You are a fashion trend analyst. Generate ONE trending fashion item with market data.

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

        const text = await this.callOpenAI(prompt);
        return this.parseJSON(text);
    },

    /**
     * Fetch market news headlines
     */
    async fetchMarketNews() {
        const prompt = `You are a fashion industry news writer. Generate 3 realistic fashion news headlines.

Return ONLY a valid JSON array in this exact format (no extra text):
[
    {"title": "Headline 1", "source": "Vogue", "time": "2h", "tag": "Industry", "icon": "📰"},
    {"title": "Headline 2", "source": "WWD", "time": "4h", "tag": "Trends", "icon": "🔥"},
    {"title": "Headline 3", "source": "BoF", "time": "6h", "tag": "Sustainability", "icon": "🌿"}
]`;

        const text = await this.callOpenAI(prompt);
        return this.parseJSON(text);
    }
};

// Expose globally
window.AIService = AIService;

console.log('[AIService] Loaded and ready');
