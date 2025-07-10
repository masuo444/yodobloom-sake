// Mobile Translation Fix for yodobloom SAKE
// 最高レベルのモバイル翻訳体験を提供

class MobileTranslateFix {
    constructor() {
        this.isMobile = window.innerWidth <= 768;
        this.isInitialized = false;
        this.currentLanguage = 'ja';
        this.supportedLanguages = {
            'ja': { name: '日本語', flag: '🇯🇵' },
            'en': { name: 'English', flag: '🇺🇸' },
            'zh-cn': { name: '简体中文', flag: '🇨🇳' },
            'zh-tw': { name: '繁體中文', flag: '🇹🇼' },
            'ko': { name: '한국어', flag: '🇰🇷' },
            'fr': { name: 'Français', flag: '🇫🇷' },
            'es': { name: 'Español', flag: '🇪🇸' },
            'de': { name: 'Deutsch', flag: '🇩🇪' }
        };
        
        this.init();
    }
    
    init() {
        if (!this.isMobile) return;
        
        this.createMobileTranslateUI();
        this.setupGoogleTranslate();
        this.bindEvents();
        this.isInitialized = true;
        
        console.log('✅ Mobile Translate Fix initialized');
    }
    
    createMobileTranslateUI() {
        // 既存の翻訳UIを削除
        const existingUI = document.querySelector('.premium-translate-container');
        if (existingUI) {
            existingUI.remove();
        }
        
        // モバイル専用翻訳UIを作成
        const mobileTranslateHTML = `
            <div class="mobile-translate-container">
                <button class="mobile-translate-btn" id="mobileTranslateBtn">
                    <span class="mobile-flag">🇯🇵</span>
                    <span class="mobile-lang-text">日本語</span>
                    <span class="mobile-arrow">▼</span>
                </button>
                <div class="mobile-translate-dropdown" id="mobileTranslateDropdown">
                    <div class="mobile-lang-header">
                        <span>🌐 言語選択</span>
                        <button class="mobile-close-btn" id="mobileCloseBtn">×</button>
                    </div>
                    <div class="mobile-lang-list">
                        ${Object.entries(this.supportedLanguages).map(([code, lang]) => `
                            <button class="mobile-lang-option" data-lang="${code}">
                                <span class="mobile-lang-flag">${lang.flag}</span>
                                <span class="mobile-lang-name">${lang.name}</span>
                            </button>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', mobileTranslateHTML);
        
        // モバイル専用CSS
        this.addMobileStyles();
    }
    
    addMobileStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .mobile-translate-container {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 999999;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            }
            
            .mobile-translate-btn {
                background: rgba(255, 255, 255, 0.98);
                border: 2px solid rgba(255, 182, 193, 0.8);
                border-radius: 12px;
                padding: 8px 12px;
                display: flex;
                align-items: center;
                gap: 6px;
                cursor: pointer;
                font-size: 12px;
                font-weight: 500;
                color: #2d3748;
                backdrop-filter: blur(20px);
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
                transition: all 0.3s ease;
                min-width: 120px;
                justify-content: space-between;
            }
            
            .mobile-translate-btn:hover {
                background: rgba(255, 255, 255, 1);
                border-color: rgba(255, 182, 193, 1);
                transform: translateY(-2px);
                box-shadow: 0 6px 25px rgba(0, 0, 0, 0.2);
            }
            
            .mobile-flag {
                font-size: 16px;
            }
            
            .mobile-lang-text {
                flex: 1;
                text-align: left;
            }
            
            .mobile-arrow {
                font-size: 10px;
                color: rgba(255, 182, 193, 0.8);
                transition: transform 0.3s ease;
            }
            
            .mobile-translate-dropdown {
                position: absolute;
                top: 100%;
                right: 0;
                margin-top: 8px;
                background: rgba(255, 255, 255, 0.98);
                border-radius: 16px;
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
                backdrop-filter: blur(20px);
                border: 2px solid rgba(255, 182, 193, 0.3);
                min-width: 280px;
                max-width: calc(100vw - 40px);
                opacity: 0;
                visibility: hidden;
                transform: translateY(-10px) scale(0.95);
                transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
            }
            
            .mobile-translate-dropdown.active {
                opacity: 1;
                visibility: visible;
                transform: translateY(0) scale(1);
            }
            
            .mobile-lang-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 16px 20px;
                border-bottom: 1px solid rgba(255, 182, 193, 0.2);
                font-weight: 600;
                color: #2d3748;
            }
            
            .mobile-close-btn {
                background: none;
                border: none;
                font-size: 18px;
                cursor: pointer;
                color: #666;
                padding: 0;
                width: 24px;
                height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .mobile-lang-list {
                padding: 16px;
                max-height: 300px;
                overflow-y: auto;
            }
            
            .mobile-lang-option {
                width: 100%;
                background: rgba(255, 255, 255, 0.8);
                border: 1px solid rgba(255, 182, 193, 0.2);
                border-radius: 12px;
                padding: 12px 16px;
                display: flex;
                align-items: center;
                gap: 12px;
                cursor: pointer;
                font-size: 14px;
                font-weight: 500;
                color: #2d3748;
                transition: all 0.2s ease;
                margin-bottom: 8px;
                min-height: 44px;
                -webkit-tap-highlight-color: transparent;
            }
            
            .mobile-lang-option:last-child {
                margin-bottom: 0;
            }
            
            .mobile-lang-option:hover {
                background: rgba(255, 182, 193, 0.2);
                border-color: rgba(255, 182, 193, 0.5);
                transform: translateY(-1px);
            }
            
            .mobile-lang-flag {
                font-size: 18px;
                flex-shrink: 0;
            }
            
            .mobile-lang-name {
                flex: 1;
                text-align: left;
            }
            
            /* 小さなスマートフォン対応 */
            @media (max-width: 480px) {
                .mobile-translate-container {
                    top: 16px;
                    right: 16px;
                }
                
                .mobile-translate-btn {
                    min-width: 100px;
                    padding: 6px 10px;
                }
                
                .mobile-translate-dropdown {
                    min-width: 260px;
                    max-width: calc(100vw - 32px);
                    right: -8px;
                }
            }
        `;
        
        document.head.appendChild(style);
    }
    
    setupGoogleTranslate() {
        // Google Translate要素が存在しない場合は作成
        if (!document.getElementById('google_translate_element')) {
            const googleTranslateDiv = document.createElement('div');
            googleTranslateDiv.id = 'google_translate_element';
            googleTranslateDiv.style.display = 'none';
            document.body.appendChild(googleTranslateDiv);
        }
        
        // Google Translate初期化
        window.googleTranslateElementInit = () => {
            if (typeof google !== 'undefined' && google.translate) {
                new google.translate.TranslateElement({
                    pageLanguage: 'ja',
                    includedLanguages: 'ja,en,zh-cn,zh-tw,ko,fr,es,de',
                    layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                    autoDisplay: false
                }, 'google_translate_element');
                
                console.log('✅ Google Translate initialized for mobile');
            }
        };
        
        // Google Translateスクリプトを読み込み
        if (!document.querySelector('script[src*="translate.google.com"]')) {
            const script = document.createElement('script');
            script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            script.async = true;
            document.head.appendChild(script);
        } else {
            // 既にスクリプトが読み込まれている場合
            if (typeof google !== 'undefined' && google.translate) {
                window.googleTranslateElementInit();
            }
        }
    }
    
    bindEvents() {
        const btn = document.getElementById('mobileTranslateBtn');
        const dropdown = document.getElementById('mobileTranslateDropdown');
        const closeBtn = document.getElementById('mobileCloseBtn');
        const langOptions = document.querySelectorAll('.mobile-lang-option');
        
        if (btn) {
            btn.addEventListener('click', () => {
                dropdown.classList.toggle('active');
            });
        }
        
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                dropdown.classList.remove('active');
            });
        }
        
        langOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                const langCode = e.currentTarget.dataset.lang;
                this.translateToLanguage(langCode);
                dropdown.classList.remove('active');
            });
        });
        
        // 外部クリックで閉じる
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.mobile-translate-container')) {
                dropdown.classList.remove('active');
            }
        });
    }
    
    translateToLanguage(langCode) {
        if (!this.supportedLanguages[langCode]) return;
        
        const lang = this.supportedLanguages[langCode];
        const btn = document.getElementById('mobileTranslateBtn');
        
        if (btn) {
            btn.querySelector('.mobile-flag').textContent = lang.flag;
            btn.querySelector('.mobile-lang-text').textContent = lang.name;
        }
        
        // Google Translateを使用して翻訳
        if (typeof google !== 'undefined' && google.translate) {
            const selectElement = document.querySelector('.goog-te-combo');
            if (selectElement) {
                selectElement.value = langCode;
                selectElement.dispatchEvent(new Event('change'));
            }
        }
        
        this.currentLanguage = langCode;
        console.log(`🌐 Language changed to: ${lang.name}`);
    }
}

// モバイルデバイスの場合のみ初期化
document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth <= 768) {
        try {
            window.mobileTranslateFix = new MobileTranslateFix();
            console.log('✅ Mobile Translate Fix loaded successfully');
        } catch (error) {
            console.error('❌ Failed to load Mobile Translate Fix:', error);
        }
    }
});

// リサイズイベントでモバイル対応を動的に切り替え
window.addEventListener('resize', () => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile && !window.mobileTranslateFix) {
        window.mobileTranslateFix = new MobileTranslateFix();
    } else if (!isMobile && window.mobileTranslateFix) {
        const mobileContainer = document.querySelector('.mobile-translate-container');
        if (mobileContainer) {
            mobileContainer.remove();
        }
        window.mobileTranslateFix = null;
    }
});