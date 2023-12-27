import { useEffect } from "react"

/*
 * scriptタグをbodyの末尾に追加し、スクリプトを実行するhooks
 */
export const usePostBodyScript = (src: string, async = false, defer = false) => {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = src
    // falseの場合は非同期読み込みとなり実行順序が保証されないため注意
    script.async = async
    script.defer = defer

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])
}
