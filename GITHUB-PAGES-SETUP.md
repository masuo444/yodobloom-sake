# GitHub Pages での API キー設定ガイド

## 🚨 重要な制約事項

GitHub Pages は**静的サイトホスティング**のため、以下の制約があります：
- サーバーレス関数（Netlify Functions）が使用不可
- 環境変数が使用不可
- APIキーをクライアントサイドで管理する必要がある

## 🔧 推奨解決策

### オプション 1: API キーを直接設定（簡単・即効性）⭐推奨

#### 手順：
1. **config/ai-config.js** を直接編集
2. APIキーを設定ファイルに直接記載
3. GitHubにプッシュして公開

#### 実装：

```javascript
// config/ai-config.js
window.aiConfig = {
    openai: {
        apiKey: '[YOUR_OPENAI_API_KEY]',
        model: 'gpt-4',
        maxTokens: 1000,
        temperature: 0.7
    },
    deepl: {
        apiKey: '[YOUR_DEEPL_API_KEY]',
        apiUrl: 'https://api-free.deepl.com/v2/translate'
    },
    // ... rest of config
};
```

**⚠️ セキュリティ注意事項：**
- APIキーがクライアントサイドで見える
- 使用量制限・監視が重要
- 定期的なキーローテーションを推奨

### オプション 2: 外部プロキシサービス利用（セキュア）

#### 無料プロキシサービス：
1. **Vercel** - 無料でサーバーレス関数提供
2. **Railway** - 簡単なAPI プロキシ
3. **Heroku** - 無料枠でAPI プロキシ

#### 設定例（Vercel使用）：
```javascript
// Vercelにデプロイするプロキシ関数
export default async function handler(req, res) {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(req.body)
    });
    
    const data = await response.json();
    res.json(data);
}
```

### オプション 3: GitHub Actions利用（上級者向け）

#### 概要：
- GitHub Actionsで定期的にAPIキーを更新
- Secretsを使用してキーを管理
- 自動ビルド・デプロイ

## 🚀 即座に動作させる方法（推奨）

最も簡単で即効性のある方法：

### 1. config/ai-config.js を直接編集

```bash
# 現在の設定を確認
cat config/ai-config.js
```

### 2. APIキーを設定ファイルに直接記載

以下のコマンドで設定を更新：

```javascript
// config/ai-config.js の該当部分を以下に変更：
openai: {
    apiKey: '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',
    model: 'gpt-4',
    maxTokens: 1000,
    temperature: 0.7
},
deepl: {
    apiKey: 'd266de28-0978-4216-bb9d-17f137f6e904:fx',
    apiUrl: 'https://api-free.deepl.com/v2/translate'
},
```

### 3. 直接API呼び出し用のチャットボット修正

既存のNetlify Functions部分を直接API呼び出しに変更：

```javascript
// js/improved-chatbot.js の getGPTResponse メソッドを修正
async getGPTResponse(message) {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.config.openai.apiKey}`
        },
        body: JSON.stringify({
            model: this.config.openai.model,
            messages: [
                { role: 'system', content: this.config.chatbot.systemPrompt },
                ...this.conversationHistory.slice(-6),
                { role: 'user', content: message }
            ],
            max_tokens: this.config.openai.maxTokens,
            temperature: this.config.openai.temperature
        }),
        signal: AbortSignal.timeout(30000)
    });
    
    const data = await response.json();
    return data.choices[0]?.message?.content;
}
```

### 4. GitHubにプッシュ

```bash
git add .
git commit -m "Add API keys for chatbot functionality"
git push origin main
```

## 🔐 セキュリティ対策

### 1. 使用量監視
- OpenAI Dashboard で使用量を定期確認
- DeepL Account で翻訳量を確認

### 2. 予算制限
- OpenAI API の使用量制限を設定
- 異常な使用パターンを監視

### 3. キーローテーション
- 定期的にAPIキーを更新
- 古いキーを無効化

### 4. ドメイン制限
- 可能な場合、特定ドメインからのみ使用許可

## 🎯 動作確認

設定完了後の確認手順：

1. **GitHub Pages サイトにアクセス**
2. **チャットボットを開く**
3. **英語で質問**: "What kind of sake do you recommend? I prefer something dry."
4. **適切な英語応答**が返ってくることを確認

## 📊 コスト予測

### OpenAI API (GPT-4)
- 約 $0.03/1000トークン
- 1回の質問応答 ≈ 200-500トークン
- 月1000回の使用で約$6-15

### DeepL API
- 月50万文字まで無料
- 超過分は有料プラン

---

**最も簡単な方法**: 設定ファイルに直接APIキーを記載して、GitHubにプッシュするだけで動作します！