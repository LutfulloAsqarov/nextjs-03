"use client";
import { useGetProductByIdQuery } from "@/lib/api/productApi";
import Image from "next/image";
// import Link from "next/link";
import React, { useState } from "react";

const DetailProduct = ({ id }) => {
    const [count, setCount] = useState(1);
    const { data: product } = useGetProductByIdQuery(id);
    // console.log(product);
    return (
        <div className="container detail">
            <div className="detail__left">
                <Image
                    width={200}
                    height={200}
                    src={product?.images[0]}
                    alt="img"
                />
                <div>
                    <p>
                        All hand-made with natural soy wax, Candleaf is made for
                        your pleasure moments.
                    </p>
                    <div className="detail__left__ship">
                        <span>🚚</span> FREE SHIPPING
                    </div>
                </div>
            </div>
            <div className="detail__info">
                <h2 className="detail__title">{product?.title}</h2>
                <div className="detail__info__wrapper">
                    <div className="detail__info__right">
                        <p className="detail__price">
                            {(product?.price * count).toFixed(2)}$
                        </p>
                        <div className="detail__count">
                            <button
                                disabled={count === 1}
                                onClick={() => setCount((p) => p - 1)}
                            >
                                -
                            </button>
                            <span className="w-5 text-center">{count}</span>
                            <button onClick={() => setCount((p) => p + 1)}>
                                +
                            </button>
                        </div>
                    </div>
                    <div className="detail__info__left">
                        <div className="detail__inp1">
                            <input type="radio" id="inp1" name="radio" />
                            <label htmlFor="inp1">One time purchase</label>
                        </div>
                        <div className="detail__inp2">
                            <div className="detail__inp2__top">
                                <input type="radio" id="inp2" name="radio" />
                                <label htmlFor="inp2">
                                    Subscribe and delivery every{" "}
                                </label>
                                <select name="" id="">
                                    <option value="">1 weeks</option>
                                    <option value="">2 weeks</option>
                                    <option value="">3 weeks</option>
                                    <option value="">4 weeks</option>
                                </select>
                            </div>
                            <p>
                                Subscribe now and get the 10% of discount on
                                every recurring order. The discount will be
                                applied at checkout. See details
                            </p>
                        </div>
                        <button className="detail__btn">+ Add to cart</button>
                    </div>
                </div>
                <div className="detail__bot">
                    <span>Wax:</span> Top grade Soy wax that delivers a smoke
                    less, consistent burn <span>Fragrance:</span> Premium
                    quality ingredients with natural essential oils Burning
                    <span> Time:</span> 70-75 hours <span>Dimension:</span> 10cm
                    x 5cm Weight: 400g
                </div>
            </div>
        </div>
    );
};

export default DetailProduct;
