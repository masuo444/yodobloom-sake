# Netlify環境変数設定ガイド

## 🎯 目的
yodobloom SAKE チャットボットのAPIキーをNetlifyの環境変数に設定して、多言語対応を有効にします。

## 🔧 設定手順

### 1. Netlifyダッシュボードにアクセス
1. [Netlify Dashboard](https://app.netlify.com/) にログイン
2. yodobloom-sake サイトを選択

### 2. 環境変数の設定
1. **Site settings** をクリック
2. 左サイドバーの **Environment variables** を選択
3. **Add a variable** をクリック

### 3. OpenAI APIキーの設定
- **Key**: `OPENAI_API_KEY`
- **Value**: `[YOUR_OPENAI_API_KEY]`
- **Save** をクリック

### 4. DeepL APIキーの設定
- **Key**: `DEEPL_API_KEY`
- **Value**: `[YOUR_DEEPL_API_KEY]`
- **Save** をクリック

### 5. デプロイの実行
1. **Deploys** タブに移動
2. **Deploy site** をクリック
3. または、GitHubにプッシュして自動デプロイ

## ✅ 設定確認

### 環境変数が正しく設定されているか確認：
1. Site settings > Environment variables
2. 以下の2つの変数が表示されていることを確認：
   - `OPENAI_API_KEY` (値は `sk-proj-...` で始まる)
   - `DEEPL_API_KEY` (値は `d266de28-...` で始まる)

### 動作テスト：
1. デプロイ完了後、サイトにアクセス
2. チャットボットを開く
3. 英語で質問: "What kind of sake do you recommend? I prefer something dry."
4. 適切な英語応答が返ってくることを確認

## 🔍 トラブルシューティング

### 問題1: "API キーが無効です" エラー
**解決方法:**
- 環境変数が正しく設定されているか確認
- 変数名にタイポがないか確認
- 再デプロイを実行

### 問題2: 英語質問でローカル応答のみ
**解決方法:**
- Netlify Functions が正しく動作しているか確認
- ブラウザの開発者ツールでネットワークエラーを確認
- Functions タブでログを確認

### 問題3: 翻訳が動作しない
**解決方法:**
- DeepL API の使用制限を確認
- API キーの有効性を確認
- 月間制限（50万文字）を超えていないか確認

## 📊 使用量監視

### OpenAI API
- 使用量確認: https://platform.openai.com/usage
- 予算制限設定を推奨

### DeepL API
- 使用量確認: https://www.deepl.com/account/usage
- 無料プランは月50万文字まで

## 🚀 期待される動作

設定完了後、チャットボットは以下のように動作します：

### 日本語での質問例：
**質問**: "おすすめの日本酒を教えて"
**応答**: "こんにちは！🌸 yodobloom SAKEでは、季節ごとに厳選された100種類の日本酒をご用意しております..."

### 英語での質問例：
**質問**: "What kind of sake do you recommend? I prefer something dry."
**応答**: "Hello! 🌸 At yodobloom SAKE, we offer 100 carefully selected seasonal Japanese sakes. For dry sake preferences, I recommend..."

### 中国語での質問例：
**質問**: "推荐什么日本酒？"
**応答**: "您好！🌸 在yodobloom SAKE，我们提供100种精心挑选的季节性日本酒..."

## 🔐 セキュリティ注意事項

1. **APIキーの管理**
   - 環境変数にのみ保存
   - 定期的にローテーション
   - 使用量を監視

2. **アクセス制御**
   - 不正使用の監視
   - 予算制限の設定

---

**重要**: 環境変数設定後は必ず再デプロイを実行してください。設定が反映されるまで数分かかる場合があります。