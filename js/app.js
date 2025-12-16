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
        category: "Outerwear",
        material: "Leather",
        colors: ["Midnight Black", "Electric Blue"],
        popularity: 98,
        growth: "+45%",
        image: "https://images.unsplash.com/photo-1551028919-ac66e624ec95?q=80&w=1000&auto=format&fit=crop",
        tags: ["Cyberpunk", "Streetwear"]
    },
    {
        id: "t2",
        title: "Liquid Metal Slip Dress",
        category: "Dresses",
        material: "Silk",
        colors: ["Pure White", "Neon Lime"],
        popularity: 92,
        growth: "+28%",
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000&auto=format&fit=crop",
        tags: ["Evening", "Metallic"]
    },
    {
        id: "t3",
        title: "Deconstructed Denim Blaze",
        category: "Outerwear",
        material: "Denim",
        colors: ["Electric Blue"],
        popularity: 85,
        growth: "+15%",
        image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=1000&auto=format&fit=crop",
        tags: ["Avant-Garde", "Casual"]
    },
    {
        id: "t4",
        title: "Velvet Wide-Leg Trousers",
        category: "Bottoms",
        material: "Velvet",
        colors: ["Hot Pink", "Midnight Black"],
        popularity: 76,
        growth: "+12%",
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000&auto=format&fit=crop",
        tags: ["Retro", "Comfort"]
    }
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

    if (data.length === 0) {
        gridContainer.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 4rem; color: var(--text-muted);">
            <h3>No trends found matching your criteria.</h3>
        </div>`;
        return;
    }

    gridContainer.innerHTML = data.map((item, index) => `
        <div class="trend-card" style="animation-delay: ${index * 100}ms">
            <img src="${item.image}" alt="${item.title}" class="card-image" loading="lazy">
            <div class="card-content">
                <div class="card-header">
                    <h3 class="card-title">${item.title}</h3>
                    <span class="popularity-badge">${item.popularity}%</span>
                </div>
                <div style="font-size: 0.85rem; color: rgba(255,255,255,0.7); margin-bottom: 8px;">
                    ${item.material} • ${item.colors[0]}
                </div>
                <div class="card-meta">
                    <span>${item.category}</span>
                    <span class="growth-stat">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                        ${item.growth}
                    </span>
                </div>
            </div>
        </div>
    `).join('');
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

    // Loading State
    newsContainer.innerHTML = `
        <div style="padding: 20px; text-align: center; color: var(--md-sys-color-outline);">
            <div class="loading-pulse" style="margin-bottom: 8px;">🔮</div>
            <small>Scanning Global Markets...</small>
        </div>
    `;

    try {
        const stories = await window.AIService.fetchMarketNews();

        newsContainer.innerHTML = stories.map(story => `
            <div class="news-item">
                <div class="news-content">
                    <span class="news-tag">${story.tag}</span>
                    <h4>${story.title}</h4>
                    <div class="news-meta">
                        <span class="source">${story.source}</span>
                        <span class="dot">•</span>
                        <span class="time">${story.time}</span>
                    </div>
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error("News Error:", error);
        newsContainer.innerHTML = `
            <div style="padding: 20px; text-align: center; color: var(--md-sys-color-error);">
                <small>Unable to fetch news.<br>Check API Key in Settings.</small>
            </div>
        `;
    }
}

async function renderSuggestions() {
    const container = document.getElementById('ai-suggestion-content');
    if (!container) return;

    // Loading State
    container.innerHTML = `
        <div style="height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; color: var(--md-sys-color-on-primary-container);">
            <div class="spinner"></div> <!-- CSS Spinner needed -->
            <p style="margin-top: 16px; opacity: 0.8;">Analyzing Social Signals...</p>
        </div>
    `;

    try {
        const suggestion = await window.AIService.fetchTrendAnalysis();

        container.innerHTML = `
            <div class="suggestion-card">
                <div class="suggestion-header" style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 12px;">
                    <div>
                        <p class="suggestion-reason" style="margin-bottom: 4px;">🔥 AI Detected Trend</p>
                        <h4 class="suggestion-topic" style="margin: 0; font-size: 1.5rem;">${suggestion.topic}</h4>
                    </div>
                </div>
                
                <div class="confidence-bar-container">
                    <div class="confidence-label">
                        <span>AI Confidence</span>
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
                            <span class="metric-label">Volume</span>
                            <span class="metric-value">${suggestion.marketData.searchVolume}</span>
                        </div>
                    </div>
                    <div class="metric">
                        <span class="metric-icon">💬</span>
                        <div class="metric-info">
                            <span class="metric-label">Buzz</span>
                            <span class="metric-value">${suggestion.marketData.socialMentions}</span>
                        </div>
                    </div>
                    <div class="metric">
                        <span class="metric-icon">⏰</span>
                        <div class="metric-info">
                            <span class="metric-label">Peak</span>
                            <span class="metric-value">${suggestion.marketData.peakWindow}</span>
                        </div>
                    </div>
                </div>
                
                <div class="ai-insight-box">
                    <div class="insight-header">
                        <span class="insight-icon">💡</span>
                        <span class="insight-title">Market Insight</span>
                    </div>
                    <p class="insight-text">${suggestion.insight}</p>
                </div>
                
                <div class="action-recommendation">
                    <span class="action-icon">⚡</span>
                    <strong>Action:</strong> ${suggestion.action}
                </div>
            </div>
        `;
    } catch (error) {
        console.error("Trend Error:", error);
        container.innerHTML = `
            <div style="height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; color: var(--md-sys-color-error);">
                <p>⚠️ Analysis Failed</p>
                <small>Please check your API Key</small>
            </div>
        `;
    }
}

function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;

    const projects = [
        { name: "Fall 2025 Capsule", status: "In Progress", color: "orange" },
        { name: "Denim Line Refresh", status: "Review", color: "purple" },
        { name: "Accessories Drop", status: "Planning", color: "blue" }
    ];

    container.innerHTML = projects.map(p => `
        <div class="project-item">
            <div class="project-info">
                <div class="project-icon" style="background: var(--md-sys-color-surface-container-high)">📂</div>
                <span>${p.name}</span>
            </div>
            <span class="status-pill ${p.color}">${p.status}</span>
        </div>
    `).join('');
}
