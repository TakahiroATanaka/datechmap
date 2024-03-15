# テクノロジーマップ (PoC)

## リポジトリへのアクセス権限追加方法

開発をベンダーのかたに行なっていただく場合は、こちらのデジタル庁githubリポジトリ (https://github.com/digital-go-jp/da-web-experimental) を利用していただきます。

### デジタル庁以外の方へのリポジトリへのアクセス権限付与手順

- slackの #ask-github チャンネルにて申請を行います
    - まずchannelのcanvasをご覧ください: https://digital-agency.enterprise.slack.com/docs/T01EZME6Y7M/F060EFFPHEE
    - まずGSSへ外部ゲスト登録依頼を行なっていただきます
        - こちらもご覧ください: https://digital-go-jp.slack.com/archives/C04T3HQT61H/p1706500660407979
    - その上で、outside collaboratorとして登録を進めていただく形になりますので、同チャンネルのworkflowにて依頼を行なっていただきます
        - 申請時に @ふじもと もmentionをしていただければ、詳細フォローさせていただきます

## 開発環境

### 必須

- Node.js v18.x (w/ npm)

### 推奨

- Visual Studio Code (w/ [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers))
- Docker

## 開発環境構築

- (vscode/docker環境の場合 -- nodeが動作する環境で直接開発を行う場合は以下の手順は不要です)
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

### xlsx → json変換方法

- 事前にxlsxファイルを、src/data/technology-map-data.xlsx にコピーしておきます

```
$ cd [project-root]
$ node src/cli/xlsx-to-json.js -i src/data/technology-map-data.xlsx -o public/data
```


### シート名

- map-[id]
    - テクノロジーマップのデータを定義しています
    - [id]の部分は任意の英数字を設定してください
    - [id]は、ソースコードにてテクノロジーマップを表示するタグへの引数として利用されます (e.g. `<TechnologyMap data={technologyMap3 === undefined ? [] : technologyMap3} categories={technologyMapCategories === undefined ? [] : technologyMapCategories} id={'3'} />`)
- categories
    - 製品に紐づくカテゴリを設定します (製品とカテゴリは1:nの関係で、1つの製品に対して複数のカテゴリを設定することができます)
- offers
    - 公募結果ページのデータを設定します
- products-[key]
    - 公募単位ごとの製品データを定義します
    - [key]は任意の文字列を設定可能です (システムでは利用されません)
- relations
    - 製品とカテゴリの関連付けを定義します
- news
    - お知らせとして表示されるデータを定義します

### マークダウン記法

- news, offersシート等に記載するコンテンツデータは、マークダウン記法で記述することができます
    - マークダウン記法については、各種リファレンス (e.g. https://qiita.com/tbpgr/items/989c6badefff69377da7) を参照してください

### リンク記載方法

開発環境のベースとなるURL (http://localhost:3000/technology-map/) と、本番環境のベースとなるURL (https://www.digital.go.jp/experimental/technology-map/) が異なるため、xlsxに記載されたリンクは以下のように自動的に変換されます

従って、**デジタル庁ウェブサイトの他のコンテンツへのリンクを記載する場合は、https://www.digital.go.jp/path/to/page のように、絶対URLで記載してください**

| xlsxに記載されたリンク | 開発環境でのリンク | 本番環境でのリンク |
| --- | --- | --- |
| /path/to/page | /technology-map/path/to/page | /experimental/technology-map/path/to/page |
| https://example.com/path/to/page | https://example.com/path/to/page | https://example.com/path/to/page |

### アセット等の配置とリンク先

- アセット等は、ソースコードリポジトリの public/ 以下に配置することでアクセス可能です
    - public/pdf/example.pdf を配置した場合、xlsxでのリンク先は /pdf/example.pdf となります (前述の通り、本番環境ではリンク先が自動的に /experimental/pdf/example.pdf へ変換されます)
