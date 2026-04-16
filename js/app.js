// Data (Bundled for local file:// access)
const materials = ["Leather", "Silk", "Denim", "Velvet", "Linen"];
const colors = [
    { name: "Midnight Black", hex: "#000000" },
    { name: "Neon Lime", hex: "#ccff00" },
    { name: "Electric Blue", hex: "#0066ff" },
    { name: "Hot Pink", hex: "#ff0099" },
    { name: "Pure White", hex: "#ffffff" }
];

const trends = [
    {
        id: "t1",
        title: "Oversized Cyber-Y2K Jacket",
        title_zh: "超大号赛博Y2K夹克",
        category: "Outerwear",
        category_zh: "外套",
        material: "Leather",
        material_zh: "皮革",
        colors: ["Midnight Black", "Electric Blue"],
        colors_zh: ["午夜黑", "电光蓝"],
        popularity: 98,
        growth: "+45%",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1000&auto=format&fit=crop",
        tags: ["Cyberpunk", "Streetwear"],
        tags_zh: ["赛博朋克", "街头服饰"]
    },
    {
        id: "t2",
        title: "Liquid Metal Slip Dress",
        title_zh: "液态金属吊带裙",
        category: "Dresses",
        category_zh: "连衣裙",
        material: "Silk",
        material_zh: "丝绸",
        colors: ["Pure White", "Neon Lime"],
        colors_zh: ["纯白", "霓虹莱姆"],
        popularity: 92,
        growth: "+28%",
        image: "https://images.unsplash.com/photo-1604644401890-0bd678c83788?q=80&w=1000&auto=format&fit=crop",
        tags: ["Evening", "Metallic"],
        tags_zh: ["晚装", "金属感"]
    },
    {
        id: "t3",
        title: "Deconstructed Denim Blazer",
        title_zh: "解构主义牛仔西装",
        category: "Outerwear",
        category_zh: "外套",
        material: "Denim",
        material_zh: "牛仔布",
        colors: ["Electric Blue"],
        colors_zh: ["电光蓝"],
        popularity: 85,
        growth: "+15%",
        image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=1000&auto=format&fit=crop",
        tags: ["Avant-Garde", "Casual"],
        tags_zh: ["前卫", "休闲"]
    },
    {
        id: "t4",
        title: "Velvet Wide-Leg Trousers",
        title_zh: "丝绒阔腿裤",
        category: "Bottoms",
        category_zh: "下装",
        material: "Velvet",
        material_zh: "丝绒",
        colors: ["Hot Pink", "Midnight Black"],
        colors_zh: ["亮粉色", "午夜黑"],
        popularity: 76,
        growth: "+12%",
        image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?q=80&w=1000&auto=format&fit=crop",
        tags: ["Retro", "Comfort"],
        tags_zh: ["复古", "舒适"]
    },
    {
        id: "t5",
        title: "Neo-Gothic Corset Top",
        title_zh: "新哥特式束胸上衣",
        category: "Tops",
        category_zh: "上装",
        material: "Leather",
        material_zh: "皮革",
        colors: ["Midnight Black", "Hot Pink"],
        colors_zh: ["午夜黑", "亮粉色"],
        popularity: 89,
        growth: "+32%",
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1000&auto=format&fit=crop",
        tags: ["Goth", "Party"],
        tags_zh: ["哥特", "派对"]
    },
    {
        id: "t6",
        title: "Sheer Organza Trench",
        title_zh: "透明欧根纱风衣",
        category: "Outerwear",
        category_zh: "外套",
        material: "Linen",
        material_zh: "亚麻",
        colors: ["Pure White", "Electric Blue"],
        colors_zh: ["纯白", "电光蓝"],
        popularity: 64,
        growth: "+8%",
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop",
        tags: ["Layering", "Spring"],
        tags_zh: ["叠穿", "春季"]
    },
    {
        id: "t7",
        title: "Chunky Knit Balaclava",
        title_zh: "粗针织巴拉克拉法帽",
        category: "Accessories",
        category_zh: "配饰",
        material: "Velvet",
        material_zh: "丝绒",
        colors: ["Neon Lime", "Hot Pink"],
        colors_zh: ["霓虹莱姆", "亮粉色"],
        popularity: 82,
        growth: "+55%",
        image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=1000&auto=format&fit=crop",
        tags: ["Winter", "Statement"],
        tags_zh: ["冬季", "个性宣言"]
    },
    {
        id: "t8",
        title: "Cargo Maxi Skirt",
        title_zh: "工装长裙",
        category: "Bottoms",
        category_zh: "下装",
        material: "Denim",
        material_zh: "牛仔布",
        colors: ["Midnight Black", "Pure White"],
        colors_zh: ["午夜黑", "纯白"],
        popularity: 91,
        growth: "+40%",
        image: "https://images.unsplash.com/photo-1577900232427-18219b9166a0?q=80&w=1000&auto=format&fit=crop",
        tags: ["Y2K", "Utility"],
        tags_zh: ["Y2K", "实用风"]
    }
];

const featuredTrend = {
    title: "Digital Lavender Aesthetics",
    title_zh: "数字薰衣草美学",
    desc: "The color of 2026 evoking stability, serenity, and digital escapism. Dominating knitwear and loungewear categories.",
    desc_zh: "唤起稳定、宁静和数字逃避主义的2026年度代表色。主导针织品和家居服品类。",
    image: "https://images.unsplash.com/photo-1468327768560-75b778cbb551?q=80&w=1400&auto=format&fit=crop",
    growth: "+210%"
};

const collections = [
    { title: "Summer 2026", title_zh: "2026夏季系列", count: "12 Items", count_zh: "12件商品", img: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop" },
    { title: "Denim Textures", title_zh: "牛仔纹理", count: "45 Items", count_zh: "45件商品", img: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=800&auto=format&fit=crop" },
    { title: "Neon Punk", title_zh: "霓虹朋克", count: "8 Items", count_zh: "8件商品", img: "https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=800&auto=format&fit=crop" },
    { title: "Minimalist Edit", title_zh: "极简编辑", count: "24 Items", count_zh: "24件商品", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop" }
];

const projects = [
    { name: "Fall 2025 Capsule", name_zh: "2025秋季胶囊系列", status: "In Progress", status_zh: "进行中", color: "orange" },
    { name: "Denim Line Refresh", name_zh: "牛仔线更新", status: "Review", status_zh: "审核中", color: "purple" },
    { name: "Accessories Drop", name_zh: "配饰上新", status: "Planning", status_zh: "规划中", color: "blue" }
];

// State
let activeFilters = {
    material: null,
    color: null,
    search: ''
};

// DOM Elements
const gridContainer = document.getElementById('trend-grid');
const materialContainer = document.getElementById('material-filters');
const colorContainer = document.getElementById('color-filters');
const searchInput = document.querySelector('.search-bar input');
const sortSelect = document.getElementById('sort-select');

// Initialization
function init() {
    renderFilters();
    renderGrid(trends);
    setupEventListeners();

    // Dashboard Components
    renderNews();
    renderSuggestions();
    renderProjects();
    renderExplore();
    renderCollections();
}

function renderExplore() {
    const hero = document.getElementById('explore-hero');
    const isZh = localStorage.getItem('sc_lang') === 'zh';

    if (hero && featuredTrend) {
        hero.style.display = 'block';
        const titleEl = document.getElementById('hero-title');
        const descEl = document.getElementById('hero-desc');
        const tagEl = hero.querySelector('.explore-hero-tag');
        const growthEl = document.getElementById('hero-growth');

        if (titleEl) titleEl.textContent = isZh ? featuredTrend.title_zh : featuredTrend.title;
        if (descEl) descEl.textContent = isZh ? featuredTrend.desc_zh : featuredTrend.desc;
        if (tagEl) tagEl.textContent = isZh ? "特色趋势" : "Featured Trend";
        if (growthEl) growthEl.textContent = featuredTrend.growth;
    }
}

// ---------------------------------------------------------
// Rendering Logic
// ---------------------------------------------------------

function renderFilters() {
    // Materials
    if (materialContainer) {
        materialContainer.innerHTML = materials.map(mat => `
            <button class="filter-tag" data-type="material" data-value="${mat}">
                ${mat}
            </button>
        `).join('') + `<button class="filter-tag" data-type="material" data-value="all">All</button>`;
    }

    // Colors
    if (colorContainer) {
        colorContainer.innerHTML = colors.map(col => `
            <div class="color-dot" 
                 style="background-color: ${col.hex}" 
                 data-type="color" 
                 data-value="${col.name}"
                 title="${col.name}">
            </div>
        `).join('');
    }
}

function renderGrid(data) {
    if (!gridContainer) return;
    const isZh = localStorage.getItem('sc_lang') === 'zh';

    if (data.length === 0) {
        gridContainer.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 4rem; color: var(--text-muted);">
            <h3>${isZh ? '没有找到符合条件的趋势。' : 'No trends found matching your criteria.'}</h3>
        </div>`;
        return;
    }

    // Update count
    const countEl = document.getElementById('trend-count');
    if (countEl) countEl.textContent = `${data.length} trend${data.length !== 1 ? 's' : ''}`;

    gridContainer.innerHTML = data.map((item, index) => {
        const title = isZh ? item.title_zh : item.title;
        const category = isZh ? item.category_zh : item.category;
        const material = isZh ? item.material_zh : item.material;
        const color = isZh ? item.colors_zh[0] : item.colors[0];
        const tags = isZh ? (item.tags_zh || []) : (item.tags || []);

        return `
        <div class="trend-card" style="animation-delay: ${index * 60}ms" data-id="${item.id}">
            <img src="${item.image}" alt="${title}" class="card-image" loading="lazy"
                 onerror="this.style.background='var(--md-sys-color-surface-container-high)'; this.style.display='none';">
            <div class="card-content">
                <div class="card-header">
                    <h3 class="card-title">${title}</h3>
                    <span class="popularity-badge">${item.popularity}%</span>
                </div>
                <div class="card-tags">
                    ${tags.map(t => `<span class="card-tag">${t}</span>`).join('')}
                </div>
                <div style="font-size: 0.82rem; color: var(--md-sys-color-on-surface-variant);">
                    ${material} · ${color}
                </div>
                <div class="card-meta">
                    <span>${category}</span>
                    <span class="growth-stat">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                        ${item.growth}
                    </span>
                </div>
            </div>
        </div>
    `}).join('');
}

function renderCollections() {
    const container = document.querySelector('.collections-grid');
    if (!container) return;
    const isZh = localStorage.getItem('sc_lang') === 'zh';
    const newBoardText = isZh ? "创建新看板" : "Create New Board";

    const addCard = `
        <div class="collection-card collection-add">
            <div class="add-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"
                    stroke-linejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
            </div>
            <span>${newBoardText}</span>
        </div>`;

    const cards = collections.map(col => `
        <div class="collection-card" style="background-image: url('${col.img}');">
            <div class="collection-overlay">
                <span class="collection-count">${isZh ? col.count_zh : col.count}</span>
                <h3>${isZh ? col.title_zh : col.title}</h3>
            </div>
        </div>
    `).join('');

    container.innerHTML = addCard + cards;
}

// ---------------------------------------------------------
// Filter Logic
// ---------------------------------------------------------

function filterData() {
    let filtered = trends;

    // Filter by Material
    if (activeFilters.material && activeFilters.material !== 'all') {
        filtered = filtered.filter(item => item.material === activeFilters.material);
    }

    // Filter by Color
    if (activeFilters.color) {
        filtered = filtered.filter(item => item.colors.includes(activeFilters.color));
    }

    // Filter by Search
    if (activeFilters.search) {
        const term = activeFilters.search.toLowerCase();
        filtered = filtered.filter(item =>
            item.title.toLowerCase().includes(term) ||
            item.tags.some(tag => tag.toLowerCase().includes(term))
        );
    }

    // Sort
    if (sortSelect) {
        const sortMode = sortSelect.value;
        if (sortMode === 'popularity') {
            filtered.sort((a, b) => b.popularity - a.popularity);
        }
        // (Add more sort logic if needed)
    }

    renderGrid(filtered);
}

// ---------------------------------------------------------
// Navigation & Views
// ---------------------------------------------------------

function setupNavigation() {
    console.log("Setting up navigation...");
    const links = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.view-section');

    if (links.length === 0) console.warn("No nav-links found!");

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            console.log("Nav link clicked:", link.getAttribute('href'));

            // 1. Update Active Link
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // 2. Switch View (Read id from href, e.g. #dashboard -> dashboard)
            const targetId = link.getAttribute('href').substring(1); // e.g. "explore"
            const viewName = `view-${targetId}`; // e.g. "view-explore"

            console.log("Switching to view:", viewName);

            // Hide all
            sections.forEach(section => {
                section.style.display = 'none';
                section.classList.remove('active');
            });

            // Show target
            const targetSection = document.getElementById(viewName);
            if (targetSection) {
                targetSection.style.display = 'block';
                // Small delay to allow display:block to apply before opacity transition
                setTimeout(() => targetSection.classList.add('active'), 10);
            } else {
                console.error("View section not found:", viewName);
            }
        });
    });

    // Settings Form Logic
    const saveBtn = document.getElementById('save-settings');
    if (saveBtn) {
        saveBtn.addEventListener('click', () => {
            const googleKey = document.getElementById('api-google').value;
            const tiktokKey = document.getElementById('api-tiktok').value;
            const openaiKey = document.getElementById('api-openai').value;

            if (openaiKey) localStorage.setItem('sc_openai_key', openaiKey);
            localStorage.setItem('sc_google_key', googleKey);
            localStorage.setItem('sc_tiktok_key', tiktokKey);

            alert('Settings Saved!');
        });
    }

    // Load saved keys
    const savedOpenAI = localStorage.getItem('sc_openai_key');
    const savedGoogle = localStorage.getItem('sc_google_key');
    const savedTikTok = localStorage.getItem('sc_tiktok_key');

    if (savedOpenAI && document.getElementById('api-openai')) {
        document.getElementById('api-openai').value = savedOpenAI;
    }

    if (savedGoogle && document.getElementById('api-google')) {
        document.getElementById('api-google').value = savedGoogle;
    }
    if (savedTikTok && document.getElementById('api-tiktok')) {
        document.getElementById('api-tiktok').value = savedTikTok;
    }

    // Dark Mode Toggle Logic
    const themeToggle = document.getElementById('theme-toggle-dropdown');
    const body = document.body;

    // Check saved
    if (localStorage.getItem('sc_theme') === 'dark') {
        body.classList.add('dark-mode');
        updateToggleIcon(true);
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', (e) => {
            e.preventDefault();
            console.log("Toggle clicked");
            body.classList.toggle('dark-mode');
            const isDark = body.classList.contains('dark-mode');
            localStorage.setItem('sc_theme', isDark ? 'dark' : 'light');
        });
    }

    // DEBUG BUTTON
    const debugToggle = document.getElementById('debug-theme-toggle');
    if (debugToggle) {
        debugToggle.addEventListener('click', () => {
            alert("JS IS WORKING: Toggling Dark Mode class now.");
            body.classList.toggle('dark-mode');
            const isDark = body.classList.contains('dark-mode');
            localStorage.setItem('sc_theme', isDark ? 'dark' : 'light');
            updateToggleIcon(isDark);
        });
    }

    setupLanguageToggle();

    function updateToggleIcon(isDark) {
        if (!themeToggle) return;

        // Define Icon Paths
        const iconPaths = isDark
            ? '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>' // Sun
            : '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>'; // Moon (Default)

        // Find the SVG inside the link and update its contents
        const svg = themeToggle.querySelector('svg');
        if (svg) {
            svg.innerHTML = iconPaths;
        }

        // Update Text
        const textSpan = themeToggle.querySelector('span');
        if (textSpan) {
            textSpan.textContent = isDark ? 'Light Mode' : 'Dark Mode';
        }
    }
}

// Language Toggle Logic
const translations = {
    en: {
        dashboard: "Dashboard",
        explore: "Explore",
        collections: "Collections",
        settings: "Settings",
        marketPulse: "Market Pulse",
        myStuff: "My Stuff",
        recentProjects: "Recent Projects",
        topStories: "Top Stories",
        aiTrendScout: "AI Trend Scout",
        latestDrops: "Latest Drops",
        filterTrends: "Filter Trends",
        switchLang: "Switch to Chinese"
    },
    zh: {
        dashboard: "仪表盘",
        explore: "探索",
        collections: "收藏夹",
        settings: "设置",
        marketPulse: "市场脉搏",
        myStuff: "我的内容",
        recentProjects: "最近项目",
        topStories: "头条新闻",
        aiTrendScout: "AI 趋势侦察",
        latestDrops: "最新发布",
        filterTrends: "筛选趋势",
        switchLang: "切换回英语"
    }
};

function setupLanguageToggle() {
    const langToggle = document.getElementById('lang-toggle-dropdown');
    const langText = document.getElementById('lang-text');
    let currentLang = localStorage.getItem('sc_lang') || 'en';

    // Initial Apply
    if (currentLang === 'zh') {
        applyLanguage('zh');
    }

    if (langToggle) {
        langToggle.addEventListener('click', (e) => {
            e.preventDefault();
            currentLang = currentLang === 'en' ? 'zh' : 'en';
            localStorage.setItem('sc_lang', currentLang);
            applyLanguage(currentLang);
        });
    }

    function applyLanguage(lang) {
        const t = translations[lang];

        // Update Nav Links
        document.querySelectorAll('.nav-link .link-text').forEach(el => {
            if (el.textContent === translations.en.dashboard || el.textContent === translations.zh.dashboard) el.textContent = t.dashboard;
            if (el.textContent === translations.en.explore || el.textContent === translations.zh.explore) el.textContent = t.explore;
            if (el.textContent === translations.en.collections || el.textContent === translations.zh.collections) el.textContent = t.collections;
            if (el.textContent === translations.en.settings || el.textContent === translations.zh.settings) el.textContent = t.settings;
        });

        // Dashboard Headers
        const marketPulse = document.querySelector('#view-dashboard .section-title');
        if (marketPulse) marketPulse.textContent = t.marketPulse;

        const myStuff = document.querySelectorAll('.section-title')[1]; // Fragile but works for now
        if (myStuff) myStuff.textContent = t.myStuff;

        const recentProjects = document.querySelector('.projects-list-panel h3');
        if (recentProjects) recentProjects.textContent = t.recentProjects;

        const topStories = document.querySelector('.news-feed h3');
        if (topStories) topStories.textContent = t.topStories;

        const aiTitle = document.querySelector('.ai-header h3');
        if (aiTitle) aiTitle.textContent = t.aiTrendScout;

        // Explore Headers
        const latestDrops = document.querySelector('.feed-header h2');
        if (latestDrops) latestDrops.textContent = t.latestDrops;

        const filterHeader = document.querySelector('.filters-panel h3');
        if (filterHeader) filterHeader.textContent = t.filterTrends;

        // Button Text
        if (langText) langText.textContent = t.switchLang;

        // Refresh Content
        renderNews();
        renderSuggestions();
        renderProjects();
        renderExplore();
        renderCollections();
        renderGrid(trends); // Refresh Explore Grid
    }
}

// ---------------------------------------------------------
// Event Listeners
// ---------------------------------------------------------

function setupEventListeners() {
    setupNavigation();

    // Material Filter Clicks
    if (materialContainer) {
        materialContainer.addEventListener('click', (e) => {
            const btn = e.target.closest('.filter-tag');
            if (btn) {
                document.querySelectorAll('.filter-tag').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const val = btn.dataset.value;
                activeFilters.material = val === 'all' ? null : val;
                filterData();
            }
        });
    }

    // Color Filter Clicks
    if (colorContainer) {
        colorContainer.addEventListener('click', (e) => {
            const dot = e.target.closest('.color-dot');
            if (dot) {
                document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
                dot.classList.add('active');
                const val = dot.dataset.value;
                if (activeFilters.color === val) {
                    activeFilters.color = null;
                    dot.classList.remove('active');
                } else {
                    activeFilters.color = val;
                }
                filterData();
            }
        });
    }

    // Search Input
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            activeFilters.search = e.target.value;
            filterData();
        });
    }

    // Sort
    if (sortSelect) {
        sortSelect.addEventListener('change', () => {
            filterData();
        });
    }

    // Generic Card/Button Interactions (Stub)
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        mainContent.addEventListener('click', (e) => {
            // Trend Cards
            const card = e.target.closest('.trend-card');
            if (card) {
                console.log("Trend Card Clicked");
                // Optional: visual feedback or modal
                card.style.transform = "scale(0.98)";
                setTimeout(() => card.style.transform = "", 150);
            }

            // Collection Cards
            const col = e.target.closest('.collection-card');
            if (col && !col.classList.contains('collection-add')) {
                console.log("Collection Clicked");
                alert("Opening collection details...");
            }
            // Add Collection
            if (col && col.classList.contains('collection-add')) {
                const title = prompt("Enter collection name:");
                if (title) alert(`Created new collection: ${title}`);
            }

            // View Analysis Button -> Open Modal
            const btn = e.target.closest('.btn-primary');
            if (btn && !btn.id && !btn.classList.contains('full-width')) { // Exclude settings/modal actions
                const modal = document.getElementById('analysis-modal');
                if (modal) {
                    modal.classList.add('active');
                }
            }
        });
    }

    // Modal Interaction Logic
    const modal = document.getElementById('analysis-modal');
    if (modal) {
        // Close Button
        const closeBtn = modal.querySelector('.modal-close-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                modal.classList.remove('active');
            });
        }

        // Close on Overlay Click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }
}

// Start
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM Loaded. Initializing app...");
    init();
});

/* --- Dashboard Feature Logic --- */

async function renderNews() {
    const newsContainer = document.getElementById('news-container');
    if (!newsContainer) return;
    const isZh = localStorage.getItem('sc_lang') === 'zh';

    // Loading State
    newsContainer.innerHTML = `
        <div style="padding: 20px; text-align: center; color: var(--md-sys-color-outline);">
            <div class="loading-pulse" style="margin-bottom: 8px;">🔮</div>
            <small>${isZh ? '正在扫描全球市场...' : 'Scanning Global Markets...'}</small>
        </div>
    `;

    try {
        const stories = await window.AIService.fetchMarketNews();

        newsContainer.innerHTML = stories.map(story => `
            <div class="news-item">
                <div class="news-icon-circle">${story.icon || '📰'}</div>
                <div class="news-content">
                    <div class="news-header-row">
                        <span class="news-tag">${story.tag}</span>
                        <span class="news-time">${story.time}</span>
                    </div>
                    <h4>${story.title}</h4>
                    <div class="news-meta">
                        <span class="source">${story.source}</span>
                        <a href="#" class="read-more">${isZh ? '阅读分析' : 'Read Analysis'} &rarr;</a>
                    </div>
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error("News Error:", error);
        newsContainer.innerHTML = `
            <div style="padding: 20px; text-align: center; color: var(--md-sys-color-error);">
                <small>${isZh ? '无法获取新闻。检查API Key。' : 'Unable to fetch news.<br>Check API Key in Settings.'}</small>
            </div>
        `;
    }
}

async function renderSuggestions() {
    const container = document.getElementById('ai-suggestion-content');
    if (!container) return;
    const isZh = localStorage.getItem('sc_lang') === 'zh';

    // Loading State
    container.innerHTML = `
        <div style="height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; color: var(--md-sys-color-on-primary-container);">
            <div class="spinner"></div> <!-- CSS Spinner needed -->
            <p style="margin-top: 16px; opacity: 0.8;">${isZh ? '正在分析社交信号...' : 'Analyzing Social Signals...'}</p>
        </div>
    `;

    try {
        const suggestion = await window.AIService.fetchTrendAnalysis();

        container.innerHTML = `
            <div class="suggestion-card">
                <div class="suggestion-header" style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 12px;">
                    <div>
                        <p class="suggestion-reason" style="margin-bottom: 4px;">${isZh ? '🔥 AI 检测到的趋势' : '🔥 AI Detected Trend'}</p>
                        <h4 class="suggestion-topic" style="margin: 0; font-size: 1.5rem;">${suggestion.topic}</h4>
                    </div>
                </div>
                
                <div class="confidence-bar-container">
                    <div class="confidence-label">
                        <span>${isZh ? 'AI 置信度' : 'AI Confidence'}</span>
                        <span class="confidence-value">${suggestion.confidence}%</span>
                    </div>
                    <div class="confidence-bar">
                        <div class="confidence-fill" style="width: ${suggestion.confidence}%"></div>
                    </div>
                </div>
                
                <div class="market-metrics">
                    <div class="metric">
                        <span class="metric-icon">📊</span>
                        <div class="metric-info">
                            <span class="metric-label">${isZh ? '搜索量' : 'Volume'}</span>
                            <span class="metric-value">${suggestion.marketData.searchVolume}</span>
                        </div>
                    </div>
                    <div class="metric">
                        <span class="metric-icon">💬</span>
                        <div class="metric-info">
                            <span class="metric-label">${isZh ? '热度' : 'Buzz'}</span>
                            <span class="metric-value">${suggestion.marketData.socialMentions}</span>
                        </div>
                    </div>
                    <div class="metric">
                        <span class="metric-icon">⏰</span>
                        <div class="metric-info">
                            <span class="metric-label">${isZh ? '峰值' : 'Peak'}</span>
                            <span class="metric-value">${suggestion.marketData.peakWindow}</span>
                        </div>
                    </div>
                </div>
                
                <div class="ai-insight-box">
                    <div class="insight-header">
                        <span class="insight-icon">💡</span>
                        <span class="insight-title">${isZh ? '市场洞察' : 'Market Insight'}</span>
                    </div>
                    <p class="insight-text">${suggestion.insight}</p>
                </div>

                <!-- NEW: Sentiment Analysis Visualizer -->
                <div class="sentiment-section" style="margin: 20px 0;">
                    <h5 style="margin: 0 0 10px 0; font-size: 0.85rem; opacity: 0.8; text-transform: uppercase; letter-spacing: 1px;">${isZh ? '情绪分析' : 'Sentiment Analysis'}</h5>
                    <div class="sentiment-bars" style="display: flex; gap: 4px; height: 8px; border-radius: 4px; overflow: hidden;">
                        <div style="width: 65%; background: #a3e635;" title="Positive"></div>
                        <div style="width: 20%; background: #fbbf24;" title="Neutral"></div>
                        <div style="width: 15%; background: #f87171;" title="Negative"></div>
                    </div>
                    <div style="display: flex; justify-content: space-between; font-size: 0.75rem; margin-top: 6px; opacity: 0.7;">
                        <span>${isZh ? '积极 65%' : 'Positive 65%'}</span>
                        <span>${isZh ? '中立 20%' : 'Neutral 20%'}</span>
                        <span>${isZh ? '消极 15%' : 'Negative 15%'}</span>
                    </div>
                </div>

                <!-- NEW: Related Tags -->
                 <div class="related-tags" style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 24px;">
                    <span class="ai-tag">#Streetwear</span>
                    <span class="ai-tag">#GenZ</span>
                    <span class="ai-tag">#Sustainability</span>
                    <span class="ai-tag">#DigitalFashion</span>
                </div>
                
                <div class="action-recommendation">
                    <span class="action-icon">⚡</span>
                    <strong>${isZh ? '行动:' : 'Action:'}</strong> ${suggestion.action}
                </div>
            </div>
        `;
    } catch (error) {
        console.error("Trend Error:", error);
        container.innerHTML = `
            <div style="height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; color: var(--md-sys-color-error);">
                <p>⚠️ ${isZh ? '分析失败' : 'Analysis Failed'}</p>
                <small>${isZh ? '请检查 API Key' : 'Please check your API Key'}</small>
            </div>
        `;
    }
}

function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;
    const isZh = localStorage.getItem('sc_lang') === 'zh';

    const projects = [
        { name: "Fall 2025 Capsule", name_zh: "2025秋季胶囊系列", status: "In Progress", status_zh: "进行中", color: "orange", img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=200&auto=format&fit=crop" },
        { name: "Denim Line Refresh", name_zh: "牛仔线更新", status: "Review", status_zh: "审核中", color: "purple", img: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=200&auto=format&fit=crop" },
        { name: "Accessories Drop", name_zh: "配饰上新", status: "Planning", status_zh: "规划中", color: "blue", img: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=200&auto=format&fit=crop" }
    ];

    container.innerHTML = projects.map(p => `
        <div class="project-item">
            <div class="project-info">
                <img class="project-thumb" src="${p.img}" alt="${isZh ? p.name_zh : p.name}" loading="lazy">
                <span>${isZh ? p.name_zh : p.name}</span>
            </div>
            <span class="status-pill ${p.color}">${isZh ? p.status_zh : p.status}</span>
        </div>
    `).join('');
}
