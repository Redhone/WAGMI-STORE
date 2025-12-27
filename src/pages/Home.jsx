import Hero from "../components/Hero";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import About from "../components/About";
import Socials from "../components/Socials";
export default function Home() {
  return (
    <>
    <Hero/>
    <section id="products" className="bg-gray-950 text-white p-4">
      <h1 className="text-center text-2xl font-bold m-6">Our Products</h1>
      <div id="products" className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
    <section id="about">
      <About />
    </section>
    <section id="socials">
      <Socials />
    </section>

    </>

  );
}
