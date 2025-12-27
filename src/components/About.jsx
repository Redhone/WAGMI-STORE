import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import logoImg from '../assets/logo.png'
export default function About() {
  const sectionRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" }
    });

    tl.fromTo(
      logoRef.current,
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8 }
    ).fromTo(
      textRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
      "-=0.3"
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-gray-950"
    >
      {/* Logo */}
      <img
        ref={logoRef}
        src={logoImg}
        alt="Store Logo"
        className="w-48 md:w-64 mb-8"
      />

      {/* About Text */}
      <div ref={textRef} className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-300">
          About Our Store
        </h2>

        <p className="text-gray-200 text-lg leading-relaxed">
          We create hoodies designed for everyday comfort, modern style,
          and premium quality. Each piece is crafted using high-quality
          fabric that feels soft, durable, and perfect for all seasons.
          Our mission is to combine clean design with exceptional comfort,
          so you can look good and feel even better.
        </p>
      </div>
    </section>
  );
}
