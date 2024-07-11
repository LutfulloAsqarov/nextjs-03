import React from "react";
import "./loading.scss";

const loading = () => {
    return (
        <div>
            <div className="container loading">
                <div className="loading__left">
                    <div className="loading__left__img"></div>
                    <div className="loading__left__text"></div>
                    <div className="loading__left__text"></div>
                    <div className="loading__left__text"></div>
                </div>
                <div className="loading__right">
                    <div className="loading__right__title"></div>
                    <div className="loading__right__mid"></div>
                    <div className="loading__right__bot"></div>
                </div>
            </div>
        </div>
    );
};

export default loading;
