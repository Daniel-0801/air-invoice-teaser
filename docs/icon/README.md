## アイコンコンポーネントの作成

SVG ファイルを[SVGOMG](https://jakearchibald.github.io/svgomg/)にて最適化します。

1. 画面左側メニューの [ Paste markup ] に SVG コードを貼り付ける
2. 画面右側に表示される設定リストの [ Remove viewBox ] を OFF にする
3. プレビューの右下に表示されているダウンロードボタンをクリックする

次に、ダウンロードした SVG ファイルを適切な名前にし、`src/images/icon/`配下に配置してください (ファイル名を CamelCase にしたものがコンポーネントの名前となります)。

この際、`<path>`に`fill`属性が指定されている場合、削除してください (`props`でアイコンの色を指定できるようにするため)。

ファイルを配置したあと、以下のコマンドを実行し、`src/components/atoms/Icon/`配下にコンポーネントファイルを出力します。

```sh
$ npm run icons  # -> src/components/atoms/Icon/ 配下にtsxファイルが出力される
```

コンポーネントを自動生成したあとは、`src/components/atoms/Icon/index.stories.tsx`に追記することで、Storybook 上のアイコンリストに新たなアイコンを追加してください。

### 使い方

色は`props`にて`fill`を渡すことで指定できます。

```tsx
import { DocsIcon } from "components/atoms/Icon"

return <DocsIcon size={32} fill={COLOR.main} />
```

もしくは、コンポーネント内部で`<svg fill=currentColor ...>`としているため、親要素の CSS で`color`を指定することでも変更可能です。

```tsx
import { DocsIcon } from "components/atoms/Icon"

const IconWrapper = styled.div`
  color: ${COLOR.main};
`

return (
  <IconWrapper>
    <DocsIcon size={32} />
  </IconWrapper>
)
```
