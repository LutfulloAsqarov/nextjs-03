"use client";
// import { PRODUCTS } from "@/static";
import Image from "next/image";
import React from "react";
import "./products.scss";
import Link from "next/link";
import { useGetProductsQuery } from "@/lib/api/productApi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/lib/features/cartSlice";
import { toggleHeart } from "@/lib/features/wishlistSlice";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";

const Products = () => {
    let { data } = useGetProductsQuery();
    let wishlistData = useSelector((state) => state.wishlist.value);
    let cartData = useSelector((state) => state.cart.value);
    let dispatch = useDispatch();
    // console.log(data);
    let productsItems = data?.products?.map((product) => (
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
                    {wishlistData?.some((el) => el.id === product.id) ? (
                        <IoIosHeart
                            color="#56b280"
                            className="size-5 absolute top-2 right-2"
                        />
                    ) : (
                        <IoIosHeartEmpty className="size-5 absolute top-2 right-2" />
                    )}
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
                <div>
                    <h2 className="section__title">Products</h2>
                    <p className="section__desc">
                        Order it for you or for your beloved ones{" "}
                    </p>
                </div>
                <div className="products__cards">{productsItems}</div>
            </div>
        </div>
    );
};

export default Products;
