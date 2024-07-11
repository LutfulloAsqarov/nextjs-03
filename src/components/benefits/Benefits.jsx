import Image from "next/image";
import React from "react";
import check from "@/assets/benefits/check.png";
import benefitsImg from "@/assets/benefits/image.png";
import "./benefits.scss";

const Benefits = () => {
    return (
        <section>
            <div className="container benefits">
                <div className="benefits__left">
                    <h2 className="section__title">
                        Clean and fragrant soy wax
                    </h2>
                    <p className="section__desc">
                        Made for your home and for your wellness
                    </p>
                    <div className="benefits__info">
                        <p>
                            <Image
                                width={"14px"}
                                height={"14px"}
                                alt="icon"
                                src={check}
                            />
                            <span>
                                Eco-sustainable:All recyclable materials, 0% CO2
                                emissions
                            </span>
                        </p>
                        <p>
                            <Image
                                width={"14px"}
                                height={"14px"}
                                alt="icon"
                                src={check}
                            />
                            <span>
                                Hyphoallergenic: 100% natural, human friendly
                                ingredients
                            </span>
                        </p>
                        <p>
                            <Image
                                width={"14px"}
                                height={"14px"}
                                alt="icon"
                                src={check}
                            />
                            <span>
                                Handmade: All candles are craftly made with
                                love.
                            </span>
                        </p>
                        <p>
                            <Image
                                width={"14px"}
                                height={"14px"}
                                alt="icon"
                                src={check}
                            />
                            <span>
                                Long burning: No more waste. Created for last
                                long.
                            </span>
                        </p>
                    </div>
                    <button>Learn more</button>
                </div>
                <div className="benefits__right">
                    <Image
                        width={""}
                        height={""}
                        alt="benefits-image"
                        src={benefitsImg}
                    />
                </div>
            </div>
        </section>
    );
};

export default Benefits;
