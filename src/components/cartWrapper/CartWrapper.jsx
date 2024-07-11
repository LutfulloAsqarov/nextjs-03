"use client";
import React from "react";

import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./cart.scss";
import {
    decrementCart,
    removeFromCart,
    incrementCart,
} from "@/lib/features/cartSlice";
import Link from "next/link";

const CartWrapper = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [inputValue, setInputValue] = useState("");
    const [voucher, setVoucher] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    let dispatch = useDispatch();
    let cartData = useSelector((state) => state.cart.value);
    console.log(cartData);

    useEffect(() => {
        if (openModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [openModal]);

    useEffect(() => {
        let total = cartData.reduce(
            (sum, el) => sum + el.price * el.quantity,
            0
        );
        setTotalPrice(+total.toFixed(2));
    }, [cartData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setVoucher(
            inputValue === "laylo"
                ? (totalPrice + Math.ceil(totalPrice * 0.02)) * 0.2
                : 0
        );
        setInputValue("");
    };
    return (
        <>
            {cartData.length ? (
                <div className="cart container">
                    <h2 className="section__title">CART</h2>
                    <div className="cart__table">
                        <table>
                            <thead>
                                <tr>
                                    <th>PRODUCT</th>
                                    <th>PRICE</th>
                                    <th>QTY</th>
                                    <th>UNIT PRICE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartData?.map((cart) => (
                                    <tr key={cart.id} className="cart__row">
                                        <td>
                                            <div className="cart__product">
                                                <button
                                                    onClick={() =>
                                                        dispatch(
                                                            removeFromCart(
                                                                cart.id
                                                            )
                                                        )
                                                    }
                                                >
                                                    <IoClose />
                                                </button>
                                                <img
                                                    src={cart.images[0]}
                                                    width={50}
                                                    alt=""
                                                />
                                                <p>{cart.title}</p>
                                            </div>
                                        </td>
                                        <td>
                                            <span>Price: </span> $
                                            {(
                                                cart.price * cart.quantity
                                            ).toFixed(2)}
                                        </td>
                                        <td>
                                            <span>Qty:</span>
                                            <div className="cart__counter">
                                                <button
                                                    onClick={() =>
                                                        dispatch(
                                                            decrementCart(cart)
                                                        )
                                                    }
                                                >
                                                    -
                                                </button>
                                                <div>{cart.quantity}</div>
                                                <button
                                                    onClick={() =>
                                                        dispatch(
                                                            incrementCart(cart)
                                                        )
                                                    }
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </td>
                                        <td>
                                            <span>Unit price:</span>
                                            <div>${cart.price}</div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="cart__shopping">
                        <form onSubmit={handleSubmit} action="">
                            <input
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                type="text"
                                placeholder="Voucher code"
                            />
                            <button>Redeem</button>
                        </form>
                        <div className="cart__totalPrice">
                            <ul>
                                <li>
                                    <span>Subtotal</span>
                                    <span>${totalPrice}</span>
                                </li>
                                <li>
                                    <span>Shipping fee (2%)</span>
                                    <span>${Math.ceil(totalPrice * 0.02)}</span>
                                </li>
                                <li>
                                    <span>Coupon (20%)</span>
                                    <span>{(+voucher).toFixed(2)}</span>
                                </li>
                            </ul>

                            <div>
                                <p>TOTAL</p>
                                <p>
                                    $
                                    {(
                                        totalPrice +
                                        Math.ceil(totalPrice * 0.02) -
                                        +voucher
                                    ).toFixed(2)}
                                </p>
                            </div>
                            <button onClick={() => setOpenModal(true)}>
                                Check out
                            </button>
                        </div>
                    </div>
                    {openModal ? (
                        <CartModal setOpenModal={setOpenModal} />
                    ) : (
                        <></>
                    )}
                </div>
            ) : (
                <div
                    style={{
                        height: "400px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        gap: "30px",
                    }}
                >
                    <h1>No carts yet !</h1>
                    <Link
                        href={"/"}
                        style={{
                            padding: "10px",
                            background: "#33a0ff",
                            color: "#fff",
                        }}
                    >
                        Go home
                    </Link>
                </div>
            )}
        </>
    );
};

export default CartWrapper;
