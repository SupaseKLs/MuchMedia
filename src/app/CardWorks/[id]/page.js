"use client";
import { useEffect, useState } from "react";

// Modify the getData function to load the entire JSON and filter by ID
const getData = async () => {
  const res = await fetch("/data/sourceProject.json"); // Fetch the entire JSON file

  if (!res.ok) {
    throw new Error("Failed to fetch product data");
  }

  return await res.json(); // Return the entire product list
};

const ProductPage = ({ params }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState(null);

  useEffect(() => {
    const resolveParams = async () => {
      const { id: resolvedId } = await params; // Extract the id from params
      setId(resolvedId); // Set the id state
    };

    resolveParams();
  }, [params]);

  useEffect(() => {
    if (id) {
      const fetchProductData = async () => {
        try {
          const data = await getData(); // Get all products from the local JSON file
          const product = data.find((item) => item.id === parseInt(id)); // Find product by ID
          setProduct(product);
        } catch (error) {
          console.error("Error fetching product:", error);
          setProduct(null); // In case of error, set product to null
        } finally {
          setLoading(false);
        }
      };

      fetchProductData();
    }
  }, [id]);

  if (loading) return <div>Loading...</div>; // Show loading state while fetching
  if (!product) return <div>Product not found</div>; // Show message if product is not found

  return (
    <div>
      <div className="relative">
        <img
          src={product.banner}
          alt={product.title.title1}
          className="w-full h-screen object-cover bg-center"
        />
        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-[#040404] to-transparent" />
      </div>

      <div className="md:hidden">
        <div className="flex-col py-20 w-11/12 mx-auto flex justify-between">
          <div>
            <h1 className="text-white font-semibold text-6xl">
              {product.created}
            </h1>
            <h1 className="text-gray-400 pb-2 text-xl font-semibold">Created by</h1>
          </div>
          <div>
            <div className="py-10 md:py-0">
              <h1 className="text-white font-semibold text-6xl">
                {product.price} <span>Baht</span>
              </h1>
              <h1 className="text-white font-semibold text-xl">Price</h1>
            </div>
            <div>
              <h1 className="text-white font-semibold text-6xl">
                {product.developed} <span>Month</span>
              </h1>
              <h1 className="text-white font-semibold text-xl">Development</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="md:block hidden">
        <div className="py-20 w-11/12 mx-auto flex justify-between">
          <div>
            <h1 className="text-white font-semibold text-4xl xl:text-6xl">
              {product.created}
            </h1>
            <h1 className="text-gray-400 font-semibold pb-2 text-xl">Created by</h1>
          </div>
          <div>
            <h1 className="text-white font-semibold text-4xl xl:text-6xl">
              {product.price} <span>Baht</span>
            </h1>
            <h1 className="text-white font-semibold text-xl">Price</h1>
          </div>
          <div>
            <h1 className="text-white font-semibold text-4xl xl:text-6xl">
              {product.developed}<span> Month</span>
            </h1>
            <h1 className="text-white font-semibold text-xl">Development</h1>
          </div>
        </div>
      </div>


      <div className="w-11/12 mx-auto">
        <div className="w-9/12">
          <h1 className="font-bold text-7xl text-white">
            {product.header.header1}
          </h1>
          <p className="py-10 text-xl text-white">{product.title.title1}</p>
        </div>

        <div>
          <video
            className="w-11/12 mx-auto h-auto border-2 rounded-lg" // Tailwind classes for styling
            controls
            autoPlay
            loop
          >
            <source src={product.video} type="video/mp4" />
          </video>
        </div>

        <div className="w-9/12">
          <h1 className="pt-10 font-bold text-7xl text-white">{product.header.header2}</h1>
          <p className="py-10 text-xl text-white">{product.title.title2}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;