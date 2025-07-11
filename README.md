# yodobloom SAKE - AI Chatbot Integration

## 🍶 概要

yodobloom SAKE 日本酒テーマパークのウェブサイトに、OpenAI GPT-4とDeepL APIを統合した多言語対応AIチャットボットを実装しました。

## 🚀 実装された機能

### AI機能
- **OpenAI GPT-4** による高品質な対話
- **DeepL API** による高精度翻訳（12言語対応）
- **自動言語検出** 
- **リアルタイム翻訳** (ユーザー言語 ↔ 日本語 ↔ GPT)

### 対応言語
🇯🇵 日本語 | 🇺🇸 English | 🇨🇳 简体中文 | 🇹🇼 繁體中文 | 🇰🇷 한국어 | 🇫🇷 Français | 🇪🇸 Español | 🇩🇪 Deutsch | 🇮🇹 Italiano | 🇵🇹 Português | 🇹🇭 ไทย | 🇻🇳 Tiếng Việt

### チャットボット機能
- プレミアムUI/UX
- タイピングインジケーター
- メッセージステータス表示
- 音声フィードバック
- キーボードショートカット (Ctrl+K)
- モバイル最適化

## 📁 ファイル構成

```
yodobloom-sake/
├── config/
│   └── ai-config.js          # AI設定とAPIキー
├── js/
│   ├── openai-service.js     # OpenAI GPT API サービス
│   ├── deepl-service.js      # DeepL API サービス
│   └── premium-chatbot.js    # メインチャットボット
├── index.html                # メインページ
├── api-test.html            # API動作テストページ
├── .env                     # 環境変数（本番用）
├── .gitignore              # Git除外設定
└── README.md               # このファイル
```

## 🔧 セットアップ

### 1. APIキーの設定

現在のAPIキー設定:
- **OpenAI API**: `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`
- **DeepL API**: `d266de28-0978-4216-bb9d-17f137f6e904:fx`

### 2. 本番環境へのデプロイ

#### GitHub Pages / Netlify / Vercel の場合:
1. リポジトリをプッシュ
2. 自動デプロイが実行される
3. HTTPS環境で動作確認

#### 従来のWebサーバーの場合:
1. 全ファイルをサーバーにアップロード
2. HTTPS接続を確認
3. CORS設定を確認

### 3. 動作テスト

`api-test.html` でAPI動作を確認:
- GPT API接続テスト
- DeepL翻訳テスト
- 言語検出テスト
- 統合機能テスト

## 🌐 公式サイトでの使用

### HTTPS要件
OpenAI とDeepL APIはHTTPS環境でのみ動作します：
- ✅ `https://example.com` - 動作
- ❌ `http://example.com` - CORS エラー

### ブラウザ対応
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## 💡 使用方法

### 基本使用
1. 右下のAIサポートボタンをクリック
2. 任意の言語でメッセージを入力
3. AIが自動で言語を検出し、適切に回答

### キーボードショートカット
- `Ctrl + K` : チャット開く
- `Enter` : メッセージ送信
- `Esc` : チャット閉じる

### モバイル
- タップでチャット開始
- スワイプで閉じる
- 音声フィードバック対応

## 🛠️ カスタマイズ

### AI設定の変更
`config/ai-config.js` で以下を変更可能:
- GPTモデル設定
- システムプロンプト
- 対応言語
- クイックアクション

### UI/UXのカスタマイズ
`css/premium-chatbot.css` で見た目を変更可能

## 🔒 セキュリティ

### APIキー保護
- `.gitignore` でAPIキーファイルを除外
- クライアントサイドでのキー露出は避けられないため、以下を推奨:
  - APIキーの使用量制限設定
  - リファラー制限の設定
  - 定期的なキーローテーション

### 本番環境推奨設定
1. OpenAI APIの使用量制限設定
2. DeepL APIの月間制限監視
3. HTTPSのみでのアクセス制限
4. CDN経由での配信

## 📊 監視とメンテナンス

### API使用量監視
- OpenAI Dashboard で使用量確認
- DeepL コンソールで翻訳量確認
- エラーログの定期確認

### トラブルシューティング
- API接続エラー → キー有効性確認
- CORS エラー → HTTPS確認
- 翻訳精度問題 → DeepL API制限確認

## 🎯 今後の拡張可能性

- 音声入力/出力対応
- チャット履歴の永続化
- A/Bテスト機能
- 分析・レポート機能
- 多言語SEO最適化

---

## 🆘 サポート

問題が発生した場合:
1. `api-test.html` で動作確認
2. ブラウザの開発者ツールでエラー確認
3. API使用量制限確認
4. HTTPS環境での動作確認

**連絡先**: yodobloom SAKE 開発チーム