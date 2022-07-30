import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export default function UnityGallery() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/metaframe/assets/view/Build/webgl.loader.js",
    dataUrl: "/metaframe/assets/view/Build/webgl.data.unityweb",
    frameworkUrl: "/metaframe/assets/view/Build/webgl.framework.js.unityweb",
    codeUrl: "/metaframe/assets/view/Build/webgl.wasm.unityweb",
  });

  return <Unity unityProvider={unityProvider} />;
}