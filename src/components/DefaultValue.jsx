"use client";
import { defaultCart } from "@/lib/features/cartSlice";
import { defaultWishlist } from "@/lib/features/wishlistSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const DefaultValue = () => {
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(defaultCart(JSON.parse(localStorage.getItem("cart")) || []));
        dispatch(
            defaultWishlist(JSON.parse(localStorage.getItem("wishlist")) || [])
        );
    }, []);
    return;
};

export default DefaultValue;
