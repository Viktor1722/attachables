"use client";
import React, { useEffect, useState } from "react";
import supabase from "../app/utils/supabaseClient";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

const productCard = ({ productId }) => {
  const [product, setProduct] = useState(null);

  // The fetchProductById function is defined within the ProductComponent
  const fetchProductById = async (productId) => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", productId);

    if (error) {
      console.error("Error fetching product:", error);
    } else {
      setProduct(data[0]); // Directly setting the product state
    }
  };

  useEffect(() => {
    if (productId) {
      fetchProductById(productId);
    }
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem className="flex flex-row gap-5">
          {" "}
          <div className="mt-4 w-full max-w-md mx-auto flex flex-col items-center justify-center shadow rounded-lg border-black p-4">
            <div className="flex flex-col items-center justify-center rounded-lg p-4 w-42">
              <a href="#" className="w-full">
                <div className="w-44 h-40 bg-gray-300 flex items-center justify-center p-2"></div>
              </a>
              <div className="w-full text-center mt-4">
                <h3 className="text-gray-800 text-lg font-semibold"></h3>
                <p className="text-gray-800 text-lg"></p>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>${product.price.toFixed(2)}</p>
                <img
                  src={product.image_url}
                  alt={product.title}
                  style={{ width: "200px" }}
                />
              </div>
            </div>
          </div>
          <div className="mt-4 w-full max-w-md mx-auto flex flex-col items-center justify-center shadow rounded-lg border-black p-4">
            <div className="flex flex-col items-center justify-center rounded-lg p-4 w-42">
              <a href="#" className="w-full">
                <div className="w-44 h-40 bg-gray-300 flex items-center justify-center p-2"></div>
              </a>
              <div className="w-full text-center mt-4">
                <h3 className="text-gray-800 text-lg font-semibold"></h3>
                <p className="text-gray-800 text-lg"></p>
              </div>
            </div>
          </div>
          <div className="mt-4 w-full max-w-md mx-auto flex flex-col items-center justify-center shadow rounded-lg border-black p-4">
            <div className="flex flex-col items-center justify-center rounded-lg p-4 w-42">
              <a href="#" className="w-full">
                <div className="w-44 h-40 bg-gray-300 flex items-center justify-center p-2"></div>
              </a>
              <div className="w-full text-center mt-4">
                <h3 className="text-gray-800 text-lg font-semibold"></h3>
                <p className="text-gray-800 text-lg"></p>
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>...</CarouselItem>
        <CarouselItem>...</CarouselItem>
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default productCard;
