# 東大阪マッチング — フロントエンド (Next.js + Tailwind)

## 準備と実行

前提:
- Node.js (v18以上推奨)
- npm

1. 依存関係をインストール:
   ```
   npm install
   ```

2. 開発サーバを起動:
   ```
   npm run dev
   ```

3. ブラウザで開く:
   http://localhost:3000

## 補足
- Tailwind のビルドは `postcss` 経由で実行されます（設定ファイルは同梱）。
- 必要に応じて `lucide-react` や `react-leaflet` を追加してください:
  ```
  npm install lucide-react
  npm install react-leaflet leaflet
  ```

## 使い方
- `pages/index.tsx` が今回作成した主要なモックUIです。
- 実際に動く検索やメッセージは入っていません。API接続が必要です。