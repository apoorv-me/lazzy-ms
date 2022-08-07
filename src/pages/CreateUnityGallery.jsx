import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Unity, { UnityContext } from "react-unity-webgl";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../slices/userSlice";

const unityContext = new UnityContext({
  loaderUrl: "/metaframe/assets/create/Build/Createwebgl.loader.js",
  dataUrl: "/metaframe/assets/create/Build/Createwebgl.data.unityweb",
  frameworkUrl:
    "/metaframe/assets/create/Build/Createwebgl.framework.js.unityweb",
  codeUrl: "/metaframe/assets/create/Build/Createwebgl.wasm.unityweb",
});

const CreateUnityGallery = () => {
  const location = useLocation();
  const user = useSelector(selectUser);
  const { isLoggedIn } = useSelector((state) => state.user);
  useEffect(() => {
    if (isLoggedIn) {
      console.log(location.state);
      setTimeout(() => {
        unityContext.send("GameObject", "tokenvalue", user.authToken);
        unityContext.send("GameObject", "galleryvalue", location.state);
      }, 8000);
    }
  }, [isLoggedIn]);

  return (
    <Unity
      unityContext={unityContext}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default CreateUnityGallery;
