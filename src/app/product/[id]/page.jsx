import React from "react";
import "./detail.scss";
import DetailProduct from "@/components/details/DetailProduct";
import { useGetProductByIdQuery } from "@/lib/api/productApi";

const Detail = async ({ params }) => {
    let { id } = params;
    // let { data } = useGetProductByIdQuery(`/products${id}`);

    return (
        <>
            <DetailProduct id={id} />
        </>
    );
};

export default Detail;
