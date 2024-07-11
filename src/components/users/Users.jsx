"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

import user1 from "@/assets/users/user.svg";
import star from "@/assets/users/star.svg";
import "./users.scss";
import Image from "next/image";

const Users = () => {
    return (
        <section id="users">
            <div className="container users">
                <h2 className="section__title">Testimonials</h2>
                <p className="section__desc">
                    Some quotes from our happy customers
                </p>
                {/* <div className="users__cards"> */}
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    modules={[Pagination, Autoplay]}
                    className="users__cards"
                >
                    {Array(5)
                        .fill()
                        .map((_, index) => (
                            <SwiperSlide key={index}>
                                <div className="users__card">
                                    <Image
                                        width={84}
                                        height={84}
                                        alt="user-img"
                                        src={user1}
                                    />
                                    <div className="users__card__stars flex">
                                        {Array(5)
                                            .fill()
                                            .map((_, starIndex) => (
                                                <Image
                                                    key={starIndex}
                                                    width={24}
                                                    height={24}
                                                    alt="star"
                                                    src={star}
                                                />
                                            ))}
                                    </div>
                                    <h3>“I love it! No more air fresheners”</h3>
                                    <p>Luisa</p>
                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>
                {/* </div> */}
            </div>
        </section>
    );
};

export default Users;
