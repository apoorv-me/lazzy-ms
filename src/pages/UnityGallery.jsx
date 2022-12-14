import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "/metaframe/assets/view/Build/webgl.loader.js",
  dataUrl: "/metaframe/assets/view/Build/webgl.data.unityweb",
  frameworkUrl: "/metaframe/assets/view/Build/webgl.framework.js.unityweb",
  codeUrl: "/metaframe/assets/view/Build/webgl.wasm.unityweb",
});

const UnityGallery = () => {
  const params = useParams();

  useEffect(() => {
    setTimeout(() => {
      unityContext.send("GameObject", "galleryvalue", params.id);
    }, 8000);
  });

  console.log(params);
  return (
    <Unity
      unityContext={unityContext}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default UnityGallery;
