import React, { useEffect, useState } from "react";
import supabase from "../app/utils/supabaseClient";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

export default function ImageCarousel() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data, error } = await supabase.from("products").select("*");

    if (error) {
      console.error("Error fetching products:", error);
    } else {
      setProducts(data);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem className="flex gap-5 flex-wrap justify-center">
          {products.map((product) => (
            <div key={product.id} className="w-44 m-9  flex flex-wrap">
              <a href="#" className="w-full">
                <div className="w-full h-50 flex items-center bg-gray-300 justify-center p-3">
                  <img
                    src={product.image_url}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </a>
              <div className="w-full text-center mt-4">
                <h3 className="text-gray-800 text-lg font-semibold">
                  {product.title}
                </h3>
                <p className="text-gray-800 text-lg">{`€${product.price.toFixed(
                  2
                )}`}</p>
                {/* Render other product information here */}
              </div>
            </div>
          ))}
        </CarouselItem>
        <CarouselItem className="flex gap-5 flex-wrap justify-center">
          {products.map((product) => (
            <div key={product.id} className="w-44 m-9  flex flex-wrap">
              <a href="#" className="w-full">
                <div className="w-full h-50 flex items-center bg-gray-300 justify-center p-3">
                  <img
                    src={product.image_url}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </a>
              <div className="w-full text-center mt-4">
                <h3 className="text-gray-800 text-lg font-semibold">
                  {product.title}
                </h3>
                <p className="text-gray-800 text-lg">{`€${product.price.toFixed(
                  2
                )}`}</p>
                {/* Render other product information here */}
              </div>
            </div>
          ))}
        </CarouselItem>
      </CarouselContent>
      <div className="absolute bottom-4 inset-x-1/2 flex justify-center">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}
