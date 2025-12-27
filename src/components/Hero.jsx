import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import hero1 from "../assets/hero-1.jpg";
import hero2 from "../assets/hero-2.jpg";
import hero3 from "../assets/hero-3.jpg";
import hero4 from "../assets/hero-4.jpg";

const images = [hero1, hero2, hero3, hero4];

export default function Hero() {
  const heroRef = useRef(null);
  const [current, setCurrent] = useState(0);

  // Scroll to products section
  const handleScroll = () => {
    const section = document.getElementById("products");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  // Initial zoom-fade animation on refresh
  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, scale: 1.08 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out"
      }
    );
  }, []);

  // Background carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[85vh] overflow-hidden">
      
      {/* Background images */}
      {images.map((img, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: index === current ? 1 : 0
          }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex items-center min-h-[85vh]">
        <div className="max-w-6xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-xl">
            Premium Style. <br /> Pay on Delivery.
          </h1>

          <p className="mt-4 text-gray-200 max-w-md">
            High-quality products delivered to your door.
            Pay only when you receive your order.
          </p>

          <button
            onClick={handleScroll}
            className="cursor-pointer mt-6  bg-white text-black font-medium px-8 py-4 rounded-xl text-lg hover:bg-black hover:text-white transition"
          >
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}
