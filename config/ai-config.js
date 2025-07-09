// AI Configuration for yodobloom SAKE
// yodobloom SAKE専用 AI設定ファイル

window.aiConfig = {
    // OpenAI Configuration
    openai: {
        apiKey: 'YOUR_OPENAI_API_KEY_HERE', // GitHub Pagesで動作させるにはAPIキーを直接入力する必要があります
        model: 'gpt-4',
        maxTokens: 1000,
        temperature: 0.7
    },
    
    // DeepL Configuration
    deepl: {
        apiKey: 'YOUR_DEEPL_API_KEY_HERE', // GitHub Pagesで動作させるにはAPIキーを直接入力する必要があります
        apiUrl: 'https://api-free.deepl.com/v2/translate'
    },
    
    // AI Chatbot Settings - yodobloom SAKE専用
    chatbot: {
        systemPrompt: `あなたは「yodobloom SAKE AIサポート」です。yodobloom SAKE専用のアシスタントとして、以下の役割を担います：

【yodobloom SAKEについて】
- 所在地: 大阪市北区大深町1-1 2階
- 電話: 06-4802-1010
- コンセプト: 日本酒テーマパーク
- 営業時間: 平日 12:00-22:00、土日祝日 10:00-22:00（最終入場21:00）
- 特徴: 季節ごとに厳選された100種類の日本酒を試飲しながら唎酒師®がガイド

【サービス内容】
1. 100種類の季節限定日本酒セレクション
2. 唎酒師®による専門ガイド付き試飲体験
3. 30分間の個人化された日本酒推薦体験
4. モバイルアプリでの予約と酒チャレンジ

【専門知識】
1. 日本酒の幅広い知識（全国の優秀な蔵元から厳選）
2. 唎酒師®による専門的なテイスティング指導
3. 個人の好みに合わせたカスタマイズ推薦
4. 日本酒テーマパークならではの体験型サービス

【重要な制約】
- yodobloom SAKEの情報のみ回答する
- 他の酒蔵や企業の詳細については言及しない
- 日本酒テーマパークとしての体験価値を重視
- 唎酒師®ガイドの専門性をアピール

回答スタイル：
- 親しみやすく専門的な知識を提供
- 日本酒テーマパークの魅力を積極的にPR
- 大阪・北区の立地とアクセスの良さも交えて説明
- 絵文字（🍶✨🎌🗾）を適度に使用`,
        
        welcomeMessage: 'こんにちは！yodobloom SAKE AIサポートです🍶\n日本酒テーマパークについて何でもお聞きください！',
        
        fallbackMessage: '申し訳ございません。yodobloom SAKEに関することでしたら、別の表現で質問していただけますか？🍶',
        
        supportedLanguages: [
            { code: 'ja', name: '日本語' },
            { code: 'en', name: 'English' },
            { code: 'zh-cn', name: '简体中文' },
            { code: 'zh-tw', name: '繁體中文' },
            { code: 'ko', name: '한국어' },
            { code: 'th', name: 'ไทย' },
            { code: 'vi', name: 'Tiếng Việt' },
            { code: 'fr', name: 'Français' },
            { code: 'es', name: 'Español' },
            { code: 'de', name: 'Deutsch' },
            { code: 'it', name: 'Italiano' },
            { code: 'pt', name: 'Português' }
        ]
    },
    
    // Company Configuration - yodobloom SAKE専用
    company: {
        id: 'yodobloom_sake',
        name: 'yodobloom SAKE',
        businessType: 'sake_theme_park',
        knowledgeBase: {
            company: {
                name: 'yodobloom SAKE (ヨドブルーム サケ)',
                location: '大阪市北区大深町',
                address: '大阪市北区大深町1-1 2階',
                phone: '06-4802-1010',
                motto: '季節ごとに厳選された１００種類の日本酒テーマパーク',
                description: '季節ごとに厳選された１００種類の日本酒を試飲しながら唎酒師®がガイドしてくれる日本酒テーマパーク',
                features: ['唎酒師®ガイド付き', 'アプリ連動', '個人化推薦', '100種類季節限定'],
                specialties: ['唎酒師ガイド付き試飲', 'カスタマイズ推薦', '季節限定100種類', 'アプリベース酒チャレンジ'],
                philosophy: '個人の好みに合わせた日本酒体験の提供',
                concept: '日本酒テーマパーク',
                experience: '30分間の個人化された日本酒推薦体験',
                app: 'モバイルアプリでの予約と酒チャレンジ',
                hours: '平日 12:00-22:00、土日祝日 10:00-22:00（最終入場21:00）'
            },
            products: [
                {
                    name: '季節限定100種類日本酒セレクション',
                    type: '試飲体験',
                    description: '全国の優秀な蔵元から季節ごとに厳選された100種類の日本酒をお楽しみいただけます。',
                    features: ['季節限定', '全国蔵元厳選', '100種類']
                },
                {
                    name: '唎酒師®ガイド付き体験',
                    type: '専門サービス',
                    description: '認定唎酒師®による専門的なガイド付きで、日本酒の奥深さを学びながら試飲できます。',
                    features: ['専門ガイド', '教育的体験', '個別対応']
                },
                {
                    name: 'カスタマイズ推薦体験',
                    type: '個人化サービス',
                    description: '30分間の個人の好みに合わせたカスタマイズされた日本酒推薦体験。',
                    features: ['個人化', '30分体験', 'カスタマイズ']
                },
                {
                    name: 'アプリ連動酒チャレンジ',
                    type: 'デジタル体験',
                    description: 'モバイルアプリを使った予約システムと酒チャレンジゲーム。',
                    features: ['アプリ連動', 'ゲーム要素', '予約システム']
                }
            ],
            regions: {
                osaka: '大阪は関西の中心都市で、食文化が豊かな地域として知られています',
                kitaku: '北区は大阪市の中心部で、ビジネス街としても観光地としても人気のエリアです',
                ofukacho: '大深町は梅田の中心部に位置し、アクセス抜群の立地です',
                access: '梅田駅から徒歩圏内でアクセス良好'
            }
        },
        allowedTopics: [
            'yodobloom SAKE', 'ヨドブルーム サケ', '日本酒テーマパーク', '唎酒師', '大阪', '北区', '梅田', '日本酒',
            '試飲体験', 'アプリ', 'カスタマイズ', '季節限定', '100種類', 'ガイド付き', '個人化推薦'
        ],
        blockedCompanies: ['他社', '他のテーマパーク', '競合', '別の酒蔵', '他のワイナリー']
    },
    
    // Quick Reply Templates - yodobloom SAKE専用
    quickReplies: {
        yodobloom: [
            'yodobloom SAKEについて教えて',
            '唎酒師®ガイド付き試飲について',
            '100種類の日本酒について',
            '営業時間とアクセス方法',
            'アプリの使い方を教えて',
            'カスタマイズ推薦とは？',
            '予約方法について',
            '料金システムについて'
        ],
        sake_general: [
            '日本酒の基礎知識',
            '日本酒の種類について',
            'テイスティングのコツ',
            '日本酒の楽しみ方',
            '季節と日本酒の関係',
            '日本酒に合う料理'
        ]
    },
    
    // Error Messages
    errorMessages: {
        apiError: 'AIサービスに一時的な問題が発生しています。しばらくお待ちください。',
        networkError: 'ネットワーク接続に問題があります。接続を確認してください。',
        rateLimitError: 'しばらく時間をおいてから再度お試しください。',
        unknownError: '予期しないエラーが発生しました。ページを再読み込みしてください。',
        outOfScope: '申し訳ございませんが、yodobloom SAKEに関する質問にのみお答えできます。🍶'
    }
};

// yodobloom SAKE専用の企業分離チェック
window.companyFilter = {
    isAllowedTopic: function(question) {
        const allowedTopics = window.aiConfig.company.allowedTopics;
        const blockedCompanies = window.aiConfig.company.blockedCompanies;
        
        // 許可されたトピックのチェック
        const hasAllowedTopic = allowedTopics.some(topic => 
            question.toLowerCase().includes(topic.toLowerCase())
        );
        
        // ブロックされた企業名のチェック
        const hasBlockedCompany = blockedCompanies.some(company => 
            question.toLowerCase().includes(company.toLowerCase())
        );
        
        return hasAllowedTopic && !hasBlockedCompany;
    },
    
    filterResponse: function(response) {
        const blockedCompanies = window.aiConfig.company.blockedCompanies;
        
        // 他社名が含まれていないかチェック
        for (let company of blockedCompanies) {
            if (response.toLowerCase().includes(company.toLowerCase())) {
                return window.aiConfig.errorMessages.outOfScope;
            }
        }
        
        return response;
    }
};

// 設定の妥当性チェック
function validateConfig() {
    const config = window.aiConfig;
    
    if (!config.openai.apiKey || config.openai.apiKey === 'YOUR_OPENAI_API_KEY_HERE') {
        console.warn('OpenAI API key is not configured');
    }
    
    if (!config.deepl.apiKey || config.deepl.apiKey === 'YOUR_DEEPL_API_KEY_HERE') {
        console.warn('DeepL API key is not configured');
    }
    
    console.log('yodobloom SAKE AI Configuration loaded successfully');
    console.log('Company:', config.company.name);
    console.log('Business Type:', config.company.businessType);
}

// 設定の初期化
document.addEventListener('DOMContentLoaded', validateConfig);