# yodobloom SAKE チャットボット API設定ガイド

## 🚨 重要：API キー設定が必要です

現在のチャットボットは実装されていますが、**API キーが設定されていない**ため、適切に動作していません。
英語での質問に対してローカルフォールバック応答しか返さない問題を解決するには、以下の設定が必要です。

## 📋 必要なAPI サービス

### 1. OpenAI API (GPT-4)
- **目的**: 高品質な AI 応答生成
- **使用モデル**: GPT-4
- **取得方法**: [OpenAI Platform](https://platform.openai.com/api-keys)
- **料金**: 従量課金制（約$0.03/1000トークン）

### 2. DeepL API (翻訳)
- **目的**: 高品質な多言語翻訳
- **使用用途**: 応答の翻訳、多言語対応
- **取得方法**: [DeepL API](https://www.deepl.com/pro-api)
- **料金**: 無料枠あり（月50万文字）

## 🔧 設定手順

### ステップ1: Netlify環境変数の設定

Netlifyの管理画面で以下の環境変数を設定してください：

```bash
# Netlify Dashboard > Site settings > Environment variables

OPENAI_API_KEY=sk-your-openai-api-key-here
DEEPL_API_KEY=your-deepl-api-key-here
```

### ステップ2: API キーの取得

#### OpenAI API キー取得
1. [OpenAI Platform](https://platform.openai.com/api-keys) にアクセス
2. アカウント作成またはログイン
3. 「Create new secret key」をクリック
4. キーをコピーして保存（再表示されません）

#### DeepL API キー取得
1. [DeepL API](https://www.deepl.com/pro-api) にアクセス
2. 「API プラン」を選択（無料プランあり）
3. アカウント作成後、API キーを取得
4. 「Authentication Key」をコピー

### ステップ3: Netlify Functions の確認

以下のファイルが正しく配置されていることを確認：

- `/functions/chat.js` - OpenAI GPT-4 API integration
- `/functions/translate.js` - DeepL translation API integration

### ステップ4: デプロイ後の動作確認

1. Netlifyで再デプロイ
2. チャットボットを開く
3. 英語で質問してみる：「What kind of sake do you recommend?」
4. 適切な英語応答が返ってくるか確認

## 🔍 トラブルシューティング

### よくある問題と解決方法

#### 1. 「API キーが無効です」エラー
**原因**: API キーが正しく設定されていない
**解決**: 
- Netlify環境変数を再確認
- API キーの有効性を確認
- キーにプレフィックス（`sk-`など）が含まれているか確認

#### 2. 翻訳が動作しない
**原因**: DeepL API キーの問題
**解決**:
- DeepL API の利用制限を確認
- API キーが正しく設定されているか確認
- 無料プランの制限を超えていないか確認

#### 3. 英語で質問してもローカル応答のみ
**原因**: API接続の失敗
**解決**:
- ブラウザの開発者ツールでネットワークエラーを確認
- Netlify Functions のログを確認
- CORS設定を確認

#### 4. 応答が遅い
**原因**: API のタイムアウト
**解決**:
- OpenAI API の応答時間を確認
- タイムアウト設定を調整（現在30秒）
- 使用量制限を確認

## 📊 API使用量の監視

### OpenAI API
- [OpenAI Usage Dashboard](https://platform.openai.com/usage) で使用量を確認
- 予算制限を設定することを推奨

### DeepL API
- [DeepL Account](https://www.deepl.com/account/usage) で使用量を確認
- 無料プランは月50万文字まで

## 🔐 セキュリティ考慮事項

1. **API キーの管理**
   - 絶対にコードに直接書き込まない
   - 環境変数のみで管理
   - 定期的にローテーション

2. **アクセス制限**
   - OpenAI API の IP制限設定（可能な場合）
   - 不正使用の監視

3. **使用量制限**
   - 予算制限の設定
   - 異常な使用量の監視

## 🚀 改善された機能

新しい `improved-chatbot.js` では以下の機能が追加されています：

### 1. 自動言語検出
- ユーザーの入力言語を自動判別
- 適切な言語で応答

### 2. 強化されたローカルフォールバック
- API接続失敗時の多言語対応
- 具体的な情報提供

### 3. エラーハンドリング改善
- 詳細なエラーメッセージ
- 適切な復旧処理

### 4. パフォーマンス向上
- 応答時間の最適化
- キャッシュ機能

## 💡 推奨設定

### 開発環境
```bash
# .env.local (開発用)
OPENAI_API_KEY=sk-your-dev-key
DEEPL_API_KEY=your-dev-key
```

### 本番環境
```bash
# Netlify環境変数 (本番用)
OPENAI_API_KEY=sk-your-prod-key
DEEPL_API_KEY=your-prod-key
```

## 📞 サポート

設定でお困りの場合は：

1. **Netlify Functions ログ**を確認
2. **ブラウザの開発者ツール**でエラーを確認
3. **API プロバイダーのドキュメント**を参照

---

**重要**: API キーの設定が完了すれば、チャットボットは英語・中国語・韓国語など12言語に対応し、高品質な応答を提供できます。

設定完了後は、ユーザーが「What kind of sake do you recommend? I prefer something dry.」と英語で質問すると、適切な英語応答が返ってくるはずです。