# 🚀 yodobloom SAKE デプロイメントガイド

## 🎯 推奨デプロイ方法

### ❌ GitHub Pagesでは使用不可
OpenAI/DeepL APIはCORS制限のため、GitHub Pagesでは動作しません。

### ✅ 推奨プラットフォーム
1. **Netlify** (最推奨) - 無料プランあり
2. **Vercel** (推奨) - 無料プランあり  
3. **従来のWebホスティング** (cPanel/Plesk等)

---

## 🌟 方法1: Netlify（最推奨）

### 特徴
- ✅ 完全無料（月125,000リクエストまで）
- ✅ 自動HTTPS
- ✅ サーバーレス関数対応
- ✅ GitHub連携自動デプロイ

### 手順

#### ステップ1: アカウント作成
1. [Netlify](https://netlify.com) でアカウント作成
2. GitHubアカウントと連携

#### ステップ2: 環境変数設定
Netlify管理画面で設定:
```
OPENAI_API_KEY = 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
DEEPL_API_KEY = d266de28-0978-4216-bb9d-17f137f6e904:fx
```

#### ステップ3: デプロイ
1. GitHubリポジトリ作成
2. プロジェクトフォルダをプッシュ
3. Netlifyで「New site from Git」
4. リポジトリを選択
5. **メインHTMLファイル**: `index-netlify.html`を`index.html`にリネーム

#### ステップ4: 動作確認
- `https://[your-site].netlify.app/` でアクセス
- AIチャットボタンをクリックして動作確認

### 必要ファイル
```
netlify/functions/openai-chat.js
netlify/functions/deepl-translate.js
js/netlify-api-service.js
index-netlify.html (index.htmlにリネーム)
package.json
```

---

## ⚡ 方法2: Vercel

### 特徴
- ✅ 完全無料（Hobby Plan）
- ✅ 自動HTTPS
- ✅ Edge Functions対応
- ✅ GitHub連携自動デプロイ

### 手順

#### ステップ1: アカウント作成
1. [Vercel](https://vercel.com) でアカウント作成
2. GitHubアカウントと連携

#### ステップ2: 環境変数設定
Vercel管理画面で設定:
```
OPENAI_API_KEY = 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
DEEPL_API_KEY = d266de28-0978-4216-bb9d-17f137f6e904:fx
```

#### ステップ3: APIサービス更新
`js/netlify-api-service.js`を修正:
```javascript
this.baseUrl = window.location.hostname === 'localhost' 
    ? 'http://localhost:3000/api' 
    : '/api';
```

#### ステップ4: デプロイ
1. GitHubリポジトリにプッシュ
2. Vercelで「Import Project」
3. リポジトリを選択
4. 自動デプロイ開始

### 必要ファイル
```
api/openai-chat.js
api/deepl-translate.js
js/netlify-api-service.js (修正版)
vercel.json
package.json
```

---

## 🖥️ 方法3: 従来のWebホスティング

### 対応ホスティング
- さくらレンタルサーバー
- ロリポップ
- エックスサーバー
- その他PHP対応サーバー

### 手順

#### ステップ1: PHP版API作成
サーバーにPHP版APIをアップロード（別途作成必要）

#### ステップ2: 設定ファイル修正
APIエンドポイントをPHPファイルに変更

#### ステップ3: FTPアップロード
1. FileZillaなどでサーバー接続
2. 全ファイルをアップロード
3. HTTPS環境で動作確認

---

## 📋 デプロイ前チェックリスト

### 必須ファイル確認
- [ ] `index.html` (またはindex-netlify.html)
- [ ] `config/ai-config.js`
- [ ] APIサービスファイル
- [ ] CSS/JSファイル一式
- [ ] 画像ファイル (`ai-sakura-icon.png`等)

### 環境変数確認
- [ ] `OPENAI_API_KEY` 設定済み
- [ ] `DEEPL_API_KEY` 設定済み
- [ ] APIキーが正しく動作することを確認

### セキュリティ確認
- [ ] `.env`ファイルはアップロードしない
- [ ] `.gitignore`でAPIキーファイルを除外
- [ ] HTTPS環境での動作確認

---

## 🎯 推奨デプロイフロー

### 1. Netlify（最も簡単）
```bash
# 1. GitHubリポジトリ作成
git init
git add .
git commit -m "Initial commit"
git remote add origin [your-repo-url]
git push -u origin main

# 2. Netlifyで環境変数設定
# 3. 自動デプロイ完了
```

### 2. 動作確認
1. `https://[your-site].netlify.app/` でアクセス
2. AIチャットボタンをクリック
3. 「こんにちは」と入力してテスト
4. 「Hello」と英語で入力してテスト

### 3. カスタムドメイン設定（オプション）
Netlify/Vercelの管理画面でカスタムドメインを設定可能

---

## 🛠️ トラブルシューティング

### よくある問題

#### 1. CORS エラー
- **原因**: HTTP環境で実行
- **解決**: HTTPS環境に移行

#### 2. APIキーエラー
- **原因**: 環境変数が設定されていない
- **解決**: プラットフォームの管理画面で環境変数を設定

#### 3. 関数が見つからない
- **原因**: ファイル配置が間違っている
- **解決**: 
  - Netlify: `netlify/functions/`フォルダ
  - Vercel: `api/`フォルダ

#### 4. チャットボットが動作しない
- **原因**: APIサービスが読み込まれていない
- **解決**: HTMLでAPIサービスのスクリプトが正しく読み込まれているか確認

### デバッグ方法
1. ブラウザの開発者ツールでコンソール確認
2. Networkタブでリクエスト状況確認
3. プラットフォームのログ確認

---

## 📊 コスト比較

| プラットフォーム | 初期費用 | 月額費用 | APIリクエスト制限 |
|---|---|---|---|
| Netlify | 無料 | 無料 | 125,000/月 |
| Vercel | 無料 | 無料 | 100,000/月 |
| 従来ホスティング | 無料〜 | 100円〜 | 無制限 |

---

## 🎉 成功後の確認事項

### 基本機能
- [ ] チャットボット開閉
- [ ] 日本語での質問・回答
- [ ] 英語での質問・回答
- [ ] 中国語での質問・回答
- [ ] モバイル対応

### 高度な機能
- [ ] 自動言語検出
- [ ] リアルタイム翻訳
- [ ] タイピングインジケーター
- [ ] エラーハンドリング

---

## 📞 サポート

問題が発生した場合:
1. このガイドのトラブルシューティングを確認
2. `api-test.html`で個別API動作を確認
3. プラットフォームのログを確認

**推奨**: まずはNetlifyでの実装をお試しください。最も簡単で確実です。