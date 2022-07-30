import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import Unity, { UnityContext } from "react-unity-webgl";
import { selectUser,selectState } from "../slices/userSlice";

export default function ViewGallery() {
    const user = useSelector(selectUser);
    const isLoggedIn = useSelector(selectState);
    const ViewData = () => {
        return (<div id="wrapper">
            <main className="container-fluid gallery" style={{ backgroundImage: `url("../img/bg.jpg")` }} >
                <div className="mx-auto max-w-7xl px-4">
                    <div className="header">
                        <div className="left-box">
                            <Link to={'/'} className="box-url-label">leave <img src="../img/icon-back.png" /></Link>
                        </div>
                        <div className="right-box">

                            <div className="md:flex-1 md:flex md:items-center md:justify-end">
                                <div className="flex items-center md:ml-12 gap-2">
                                    <nav className="flex space-x-10"><a className="btn-gallery-icon" href="#"><img src="../img/icon-other.png" /></a></nav>
                                    <nav className="flex space-x-10"><a className="btn-gallery-icon" href="#"><img src="../img/icon-setting.png" /></a></nav>
                                    <nav className="flex space-x-10"><Link to = {'/login'} className="btn-gallery-wallet">Connect Wallet</Link></nav>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="gallery-body">

                        <div className="gallery-user">
                            <img src="../img/user.png" />
                        </div>
                        <div className="gallery-content">
                            <h2 className="mt-6">Mikeys NFT Gallery</h2>
                            <p>@Anonx568x4882...</p>
                            <h4> Welcome to my Nft art collection...</h4>
                            <div className="mt-4">
                                <Link to={'/unity'} className="gallery-content-btn">Share</Link>
                                <Link to={'/unity'} className="gallery-content-btn">Enter</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>)
    }

    const LoginUser = () => {
        return (<div id="wrapper">
        <main className="container-fluid gallery" style={{ backgroundImage: `url("../img/bg.jpg")` }} >
            <div className="mx-auto max-w-7xl px-4">
                <div className="header">
                    <div className="left-box">
                    <Link to={'/'} className="box-url-label">leave <img src="../img/icon-back.png" /></Link>
                    </div>
                    <div className="right-box">

                    <div className="md:flex-1 md:flex md:items-center md:justify-end">
                            <div className="flex items-center md:ml-12 gap-2">
                                <nav className="flex space-x-10"><a className="btn-gallery-icon" href="#"><img src="../img/icon-other.png" /></a></nav>
                                <nav className="flex space-x-10"><a className="btn-gallery-icon" href="#"><img src="../img/icon-setting.png" /></a></nav>
                                <nav className="flex space-x-10"><a className="de-menu-profile close" href="#"><img src="../img/author_thumbnail.jpg" /></a></nav>
                                <div id="setting" className="de-submenu">
                                    <div className="heading">Setting</div>

                                    <form>
                                        <div className="form-group">
                                            <label>Graphics Quality :</label>
                                            <select name="" className="form-control">
                                                <option value="">low  </option>
                                                <option value="">medium</option>
                                                <option value="">high</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label>Render Res :</label>
                                            <select name="" className="form-control">
                                                <option value="">low  </option>
                                                <option value="">medium</option>
                                                <option value="">high</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label>Music :</label>
                                            <div className="switch-with-title">
                                                <div className="de-switch">
                                                    <input type="checkbox" id="switch-unlock" className="checkbox"/>
                                                        <label for="switch-unlock"></label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label>Volume :</label>
                                            <div id="player">
                                                <div id="volume" className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"><div className="ui-slider-range ui-widget-header ui-corner-all ui-slider-range-min" style={{width: '30%'}}></div><span className="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" style={{left: '0%'}} ></span></div>
                                            </div>
                                        </div>
                                    </form>
                                    

                                    <a href="#" className="btn-help">Help ( Faq ) </a>
                                </div>

                                <div id="user" className="de-submenu">
                                    <div className="heading">Info</div>

                                    <div className="content">
                                        <span>Creator : Metamikey</span>
                                        <span>Total Visits : 10K +</span>
                                        <span>Nfts in Gallery : 24</span>
                                        <span>Gallery Worth : 13.087 ETH</span>
                                        <span>Ratings : 4523</span>
                                        <span>Date Created : 11/02/2022</span>
                                    </div>
                                    <div className="social-media">
                                        <img src="../img/icon-f.png" />
                                        <img src="../img/icon-t.png" />
                                        <img src="../img/icon-g.png" />
                                        <img src="../img/icon-i.png" />
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="gallery-body">

                    <div className="gallery-user">
                        <img src="../img/user.png" />
                    </div>
                    <div className="gallery-content">
                        <h2 className="mt-6">Mikeys NFT Gallery</h2>
                        <p>@Anonx568x4882...</p>
                        <h4> Welcome to my Nft art collection...</h4>
                        <div className="mt-4">
                            <Link to={'/unity'} className="gallery-content-btn">Share</Link>
                            <Link to={'/create-unity-gallery'} className="gallery-content-btn">Enter</Link>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    </div>)
    }
    return (
        <>
         {isLoggedIn ? <LoginUser /> : <ViewData />}
        </>
    )
}