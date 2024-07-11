"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "@/assets/logo.svg";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { FaBarsStaggered } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";

import "./header.scss";

const Header = () => {
    const [menuShow, setMenuShow] = useState(false);
    return (
        <header>
            <nav className="container header flex items-center justify-between py-4 ">
                <div className="header__logo">
                    <Link href={"/"}>
                        <Image width={""} height={""} src={logo} alt="logo" />
                    </Link>
                </div>
                <ul
                    className={`header__list flex gap-10 ${
                        menuShow ? "show" : ""
                    }`}
                >
                    <li className="header__list__item">
                        <Link href={""}>Discovery</Link>
                    </li>
                    <li className="header__list__item">
                        <Link href={""}>About</Link>
                    </li>
                    <li className="header__list__item">
                        <Link href={""}>Contact us</Link>
                    </li>
                </ul>
                <div className="header__icons flex gap-5">
                    <CiUser className="size-5" />
                    <Link href={"/wishlist"}>
                        <CiHeart className="size-5" />
                    </Link>
                    <Link href={"/cart"}>
                        <CiShoppingCart className="size-5" />
                    </Link>
                    <FaBarsStaggered
                        className={`header__bar size-5`}
                        onClick={() => setMenuShow(true)}
                    />
                </div>
                {menuShow ? (
                    <div
                        className="overlay"
                        onClick={() => setMenuShow(false)}
                    ></div>
                ) : (
                    <></>
                )}
            </nav>
        </header>
    );
};

export default Header;
