# Air Invoice Promotion

Air インボイスのプロモーションサイト

## ブランチ運用

GitHub Flow

```
master            本番環境に反映されるブランチ
　　\__ <type>/* 　案件ブランチ
　　\__ hotfix/* 　緊急で修正が必要な場合に作成するブランチ
```

- type:
  - feature : 新しい機能
  - fix : 修正
  - docs : ドキュメントの更新
  - style : フォーマットの修正
  - chore : .gitignore の修正など プロダクションコード以外の修正

## コミットメッセージフォーマット

format:

```
<type>: <subject>
```

- type:
  - feat : 新しい機能
  - fix : 修正
  - docs : ドキュメントの更新
  - style : フォーマットの修正
  - chore : .gitignore の修正など プロダクションコード以外の修正
- subject: 何をコミットするかを簡潔に書く

## ディレクトリ構成

```
├── @types                 # 型定義
├── htdocs                 # デプロイ用のビルド成果物が出力される
├── node_modules           # すべての npm package
├── public                 # ローカル開発用ビルド成果物が出力される (git管理しない)
├── src
│   ├── pages              # Page コンポーネント
│   ├── components         # React コンポーネント
│   ├── hooks              # React カスタムフック関数
│   ├── functions          # パッケージを跨いで利用される状態を持たない関数
│   ├── images             # 画像ファイル
│   └── styles             # グローバルスタイル(リセットCSSなど)
└── static                 # 静的なアセットを配置
    ├── script             # 静的なスクリプト
    └── terms              # 利用規約ページの静的なアセット
```

## 環境構築

本プロジェクトでは[Gatsby](https://www.gatsbyjs.com/)を使用しています。以下の手順に従い、環境構築を行ってください。

なお、node と Gatsby CLI のバージョンについては、記載しているバージョンにおいて正常に動作することを確認していますが、
それ以外のバージョンにおける動作は保証していません (アップデートする場合は各種パッケージのアップデートも必要となる可能性があります)。

```sh
# npmを最新バージョンにアップグレード
$ npm install -g npm
8.1.0

# nodeのバージョン管理ツールnをインストール
$ npm install -g n
$ n --version
v8.0.0

# node v16.13.0 (動作確認済バージョン) をインストール
$ n install 16.13.0
$ node --version
v16.13.0

# Gastby CLIv v4.2.0 (動作確認済バージョン) をインストール
$ npm install -g gatsby-cli@4.2.0
$ gatsby --version
Gatsby CLI version: 4.2.0

# 初回のみ
$ npm install

# 開発用サーバを起動
$ npm run develop  # -> http://localhost:8000/
```

## 開発用コマンド

| コマンド                | 説明                                                                                                                              |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `npm run build`         | `htdocs/invoice/`配下にビルド成果物を出力する                                                                                     |
| `npm run develop`       | 開発用サーバを起動する (`gatsby develop`でも同様)                                                                                 |
| `npm run serve`         | ローカルのビルド成果物(`public/`)を用いてサーバを起動する                                                                         |
| `npm run clean`         | ビルド成果物 (`htdocs/invoice/`, `public/`)、中間成果物(`.cache/`)を削除する                                                      |
| `npm run lint`          | 各種静的チェック(型チェック、ESLint、Stylelint、Prettier)を実行                                                                   |
| `npm run fix:eslint`    | フォーマッタ ESLint を実行                                                                                                        |
| `npm run fix:prettier`  | フォーマッタ Prettier を実行                                                                                                      |
| `npm run fix:stylelint` | フォーマッタ Stylelint を実行                                                                                                     |
| `npm run storybook`     | Storybook を起動                                                                                                                  |
| `npm run icons`         | `src/images/icon/`配下の SVG ファイルを`src/components/atoms/Icon/`にコンポーネントとして出力する ([詳細](./docs/icon/README.md)) |

### 注

#### 環境変数の扱いと検品、本番環境へのデプロイ

開発、検品、本番環境ごとの変数はそれぞれルートディレクトリの `.env.development`, `.env.staging`, `.env.production`に定義されています。

これらはビルド時(もしくは `npm run develop`実行時)に`ENV`という環境変数の値をもとにいずれかが読み込まれます。
(`ENV`を指定しない場合、`.env.development`が読み込まれます。)

そのため、検品、本番環境にデプロイする際には以下のように`ENV`を指定した上でビルドを行ってください。

```sh
# 検品環境
$ ENV=staging npm run build

# 本番環境
$ ENV=production npm run build
```
