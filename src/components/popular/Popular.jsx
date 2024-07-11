import { PRODUCTS } from "@/static";
import Image from "next/image";
import React from "react";
import "../products/products.scss";

const Popular = () => {
    let productsItems = PRODUCTS?.slice(0, 4).map((product) => (
        <div key={product.id} className="products__card">
            <div className="products__card__img">
                <Image
                    width={""}
                    height={""}
                    alt="Product-image"
                    src={product.img}
                />
            </div>
            <div className="products__card__info">
                <h3>{product.title}</h3>
                <p>{product.price}$</p>
            </div>
        </div>
    ));
    return (
        <div id="products">
            <div className="container products">
                <div>
                    <h2 className="section__title">Popular</h2>
                    <p className="section__desc">
                        Order it for you or for your beloved ones{" "}
                    </p>
                </div>
                <div className="products__cards">{productsItems}</div>
            </div>
        </div>
    );
};

export default Popular;
