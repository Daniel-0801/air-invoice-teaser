import * as React from "react"
import { Helmet } from "react-helmet"

export const AdobeTargetTag = () => {
  return (
    <Helmet>
      <script>{`
        !function(e,n,t,i){var a="at-body-style";function o(){return n.getElementsByTagName("head")[0]}!function e(t,i,a){if(t){var o=n.createElement("style");o.id=i,o.innerHTML=a,t.appendChild(o)}}(o(),a,t),setTimeout(function(){!function e(t,i){if(t){var a=n.getElementById(i);a&&t.removeChild(a)}}(o(),a)},3e3)}(window,document,"body {opacity: 0 !important}",3e3);
    `}</script>
      {/* 検品と本番環境で読み込むAdobeスクリプトを変更 */}
      <script>{`const adobeTarget = document.createElement('script');
    adobeTarget.src ='https://assets.adobedtm.com/34da4c9e17fc/dd8b8ccd1cd6/launch-798495433d6f.min.js';
    if(location.href.indexOf("recruit.co.jp")>-1)adobeTarget.src='https://assets.adobedtm.com/34da4c9e17fc/dd8b8ccd1cd6/launch-dd5130e85b19-staging.min.js';
    adobeTarget.async = true;
    document.head.appendChild(adobeTarget);`}</script>
    </Helmet>
  )
}
