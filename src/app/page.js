// "use client";
// import { getData } from "@/api/fetchData";
import Benefits from "@/components/benefits/Benefits";
import Hero from "@/components/hero/Hero";
import Popular from "@/components/popular/Popular";
import Products from "@/components/products/Products";
import Users from "@/components/users/Users";
// import { useGetProductsQuery } from "@/lib/api/productApi";
// import Image from "next/image";

export default async function Home() {
    // let productData = await getData("products?limit=8");
    // let { data } = useGetProductsQuery();
    return (
        <div>
            <Hero />
            <Products />
            <Benefits />
            <Users />
            <Popular />
        </div>
    );
}
