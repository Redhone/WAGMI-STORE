import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { useState } from "react";
import VariantSelector from "../components/VariantSelector";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Product() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <p className="p-6">Product not found</p>;
  }

  // STATE
  const [activeImage, setActiveImage] = useState(product.images[0]);
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [quantity, setQuantity] = useState(1);

  // CAROUSEL LOGIC
  const currentIndex = product.images.indexOf(activeImage);

  const nextImage = () => {
    setActiveImage(
      product.images[(currentIndex + 1) % product.images.length]
    );
  };

  const prevImage = () => {
    setActiveImage(
      product.images[
        (currentIndex - 1 + product.images.length) %
          product.images.length
      ]
    );
  };

  // QUANTITY
  const increaseQty = () => setQuantity((q) => q + 1);
  const decreaseQty = () =>
    setQuantity((q) => (q > 1 ? q - 1 : 1));

  // ORDER
  const handleOrder = () => {
    navigate("/checkout", {
      state: {
        product,
        size,
        color,
        quantity
      }
    });
  };

  return (
    <section className="pt-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 bg-gray-950 text-white">
      
      {/* IMAGE CAROUSEL */}
      <div>
        <div className="relative w-full h-96 rounded-xl overflow-hidden bg-gray-100">
          <img
            src={activeImage}
            alt={product.name}
            className="w-full h-full object-cover transition-all duration-300"
          />

          <button
            onClick={prevImage}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur p-2 rounded-full shadow hover:bg-black"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur p-2 rounded-full shadow hover:bg-black"
          >
            <ChevronRight />
          </button>
        </div>

        {/* THUMBNAILS */}
        <div className="flex gap-3 mt-4">
          {product.images.map((img, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(img)}
              className={`w-20 h-20 rounded-lg overflow-hidden border
                ${
                  activeImage === img
                    ? "border-gray-200"
                    : "border-black"
                }
              `}
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover hover:scale-105 transition"
              />
            </button>
          ))}
        </div>
      </div>

      {/* PRODUCT INFO */}
      <div>
        <h1 className="text-3xl font-bold mb-2">
          {product.name}
        </h1>

        <p className="text-gray-600 mb-4">
          {product.description}
        </p>

        <p className="text-xl font-semibold mb-6">
          {product.price} DA
        </p>

        <VariantSelector
          label="Size"
          options={product.sizes}
          selected={size}
          setSelected={setSize}
        />

        <VariantSelector
          label="Color"
          options={product.colors}
          selected={color}
          setSelected={setColor}
        />

        {/* QUANTITY */}
        <div className="mt-6">
          <p className="font-medium mb-2">Quantity</p>

          <div className="flex items-center gap-4">
            <button
              onClick={decreaseQty}
              className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100 hover:text-black font-bold"
            >
              −
            </button>

            <span className="w-10 text-center text-lg font-medium">
              {quantity}
            </span>

            <button
              onClick={increaseQty}
              className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100 hover:text-black font-bold"
            >
              +
            </button>
          </div>
        </div>

        {/* ORDER BUTTON */}
        <button
          onClick={handleOrder}
          disabled={!size || !color}
          className="mt-8 w-full bg-white text-black px-6 py-3 rounded-xl cursor-pointer disabled:opacity-50 disabled:cursor-auto"
        >
          Order Now – Pay on Delivery
        </button>
      </div>
    </section>
  );
}
