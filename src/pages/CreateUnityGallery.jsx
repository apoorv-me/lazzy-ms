import React, { useEffect } from 'react';
import Unity, { UnityContext } from "react-unity-webgl";
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../slices/userSlice';

const unityContext = new UnityContext({
    loaderUrl: "/metaframe/assets/create/Build/Createwebgl.loader.js",
    dataUrl: "/metaframe/assets/create/Build/Createwebgl.data.unityweb",
    frameworkUrl: "/metaframe/assets/create/Build/Createwebgl.framework.js.unityweb",
    codeUrl: "/metaframe/assets/create/Build/Createwebgl.wasm.unityweb",
});


const CreateUnityGallery = () => {
    const user = useSelector(selectUser);
    const {isLoggedIn} = useSelector(state => state.user);
    useEffect(() => {
        if(isLoggedIn){
            unityContext.send('settingUimanger', 'tokenvalue',user.authToken);
        }
        
    },[isLoggedIn])
    return <Unity unityContext={unityContext} style={{ width:'100%' ,height:'100%'}}/>;
};

export default CreateUnityGallery;