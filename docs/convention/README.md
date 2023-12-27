## 使用言語、フレームワーク

言語: [TypeScript](https://www.typescriptlang.org/)  
フレームワーク: [Gatsby](https://www.gatsbyjs.com/)

## CSS 設計

[styled-components](https://styled-components.com/) によってスタイルを記述する。  
styled されたコンポーネントに対して、`styled()`コンストラクタでラップすることによって、スタイルを拡張することができる。
`styled-components`では`className`を使ってスタイルを継承させるので、`className`プロパティが設定されていないとスタイルを拡張することができないので注意。

### 画像タグ

レイアウトシフトを防ぐために画像タグ`imgタグ`の`width, heigth属性`を明示的に指定する。  
画像幅をレスポンシブに変えたい場合は、`imgタグ`の`width, height属性`を指定した上で、
CSS で `width` もしくは `max-width` を指定し、 `height` は `auto` にすることで`width` を可変にした上でアスペクト比から高さを自動で計算できるようになる。

```tsx
const Img = styled.img`
  max-width: 100%;
  height: auto;
`

return (
  <Img width={100} height={100}>
)
```

#### ref:

- https://web.dev/i18n/en/optimize-cls/
- https://www.aleksandrhovhannisyan.com/blog/setting-width-and-height-on-images/

## コンポーネント設計

Atomic Design を採用。  
それぞれのコンポーネントは自身以下の粒度のコンポーネントを呼び出しが可能。

| 要素      | 説明                                            |
| --------- | ----------------------------------------------- |
| pages     | ページ単位                                      |
| organisms | セクション単位 (文言などのデータはこの層で管理) |
| molecules | セクションを跨いで使い回されるコンポーネント    |
| atoms     | 最小単位のコンポーネント（ボタンなど）          |

[補足]  
セクション: 内容が完結している独立したコンポーネント

## 命名規則

### HTML カラーコード

命名規則: 色 + [このサイト](https://chir.ag/projects/name-that-color)で命名されているカラー名 (透明度を指定されているときは命名の最後にパーセンテージを追加)
例: `#EEEEEE` -> `grayGallery`, `#6E9BC5` -> `blueGlacier`, `#00000099` -> `black60`
