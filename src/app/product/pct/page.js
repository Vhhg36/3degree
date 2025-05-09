import React from "react";
import { products } from "@/app/data/products";
import { ProductCard } from "@/app/components/ProductCard";

function page() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Ultimate PCT Stack: Goodbye to Gynaecomastia
        </h1>
        <p className="text-lg text-gray-600">
          Explore our top-quality, clinically-tested steroids to help you
          achieve your fitness and performance goals safely and effectively.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products
          ?.filter((item) => item?.code === "CODE3")
          ?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}

export default page;
