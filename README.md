# テクノロジーマップ (PoC)

## 開発環境

### 必須

- Node.js v18.x (w/ npm)

### 推奨

- Visual Studio Code (w/ [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers))
- Docker

## 開発環境構築

- (vscode/docker環境の場合)
    - `Remote-Containers: Reopen in Container` を実行してコンテナ環境を構築します

### node moduleインストール

```
$ npm install
```

### 開発サーバ実行

```
$ npm run dev
```

- http://localhost:3000/technology-map/ にアクセスします

### アセット生成

```
$ npm run build
```

- `out/` 以下にアセットが生成されます

## デプロイ

- デプロイは、github actionsにより自動的に行われます
    - 詳細は、`.github/workflows/deploy-prod.yml` `.github/workflows/deploy-stg.yml` を参照してください

- プロダクションURL: https://www.digital.go.jp/experimental/technology-map/
- ステージングURL: https://www.daw-stg.gov-web.com/experimental/technology-map/

## xlsxデータ

(TBD)