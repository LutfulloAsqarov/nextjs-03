"use client";
import { addToCart } from "@/lib/features/cartSlice";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "@/components/products/products.scss";
import { toggleHeart } from "@/lib/features/wishlistSlice";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";

const WishlistWrapper = () => {
    let dispatch = useDispatch();
    let data = useSelector((state) => state.wishlist.value);
    let cartData = useSelector((state) => state.cart.value);
    let productsItems = data?.map((product) => (
        <div key={product.id} className="products__card relative">
            <div className="products__card__img">
                <Link href={`/product/${product.id}`}>
                    <Image
                        width={200}
                        height={200}
                        alt="Product-image"
                        src={product.images[0]}
                    />
                </Link>
            </div>
            <div className="products__card__info">
                <h3>{product.title}</h3>
                <p>{product.price}$</p>
                <button onClick={() => dispatch(toggleHeart(product))}>
                    <IoIosHeart
                        color="#56b280"
                        className="size-5 absolute top-2 right-2"
                    />
                </button>
                <button onClick={() => dispatch(addToCart(product))}>
                    {cartData?.some((el) => el.id === product.id) ? (
                        <IoCart
                            color="#56b280"
                            className="size-5 absolute bottom-2 left-2"
                        />
                    ) : (
                        <IoCartOutline className="size-5 absolute bottom-2 left-2" />
                    )}
                </button>
            </div>
        </div>
    ));
    return (
        <div id="products">
            <div className="container products">
                {cartData.length ? (
                    <div>
                        <div>
                            <h2 className="section__title pb-8">Wishlist</h2>
                        </div>
                        <div className="products__cards">{productsItems}</div>
                    </div>
                ) : (
                    <div className="h-96 text-center w-full mt-20">
                        <h1 className="size-16 w-full">No Liked Products</h1>
                        <Link href={"/"}>Go Home</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WishlistWrapper;
