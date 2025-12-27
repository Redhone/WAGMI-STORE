import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import logoImg from "../assets/logo.png";
import {
  ShoppingCart,
  Menu,
  X,
  Info,
  Share2
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  const menuRef = useRef(null);

  // Navbar entrance animation
  useEffect(() => {
    if (!navRef.current) return;

    gsap.fromTo(
      navRef.current,
      { y: -20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        clearProps: "all"
      }
    );
  }, []);

  // Mobile menu animation
  useEffect(() => {
    if (open && menuRef.current) {
      gsap.fromTo(
        menuRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <nav ref={navRef} className="sticky top-0 z-50 bg-black border-b">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={logoImg} className="w-20 h-9" alt="store logo" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">

          <a href="#products" className="text-sm text-white hover:font-medium transition">
            Products
          </a>

          <a href="#about" className="flex items-center gap-1 text-sm text-white hover:font-medium transition">
            <Info size={18} />
            About
          </a>

          <a href="#socials" className="flex items-center gap-1 text-sm text-white hover:font-medium transition">
            <Share2 size={18} />
            Socials
          </a>

          {/* Cart tooltip */}
          <div className="relative group cursor-pointer">
            <ShoppingCart size={20} color="white" />
            <span
              className="absolute left-1/2 -translate-x-1/2 top-7
              opacity-0 group-hover:opacity-100 transition
              bg-white text-black text-xs px-3 py-1 rounded-md whitespace-nowrap"
            >
              Payment on delivery
            </span>
          </div>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X size={26} color="white" /> : <Menu size={26} color="white" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div ref={menuRef} className="md:hidden border-t overflow-hidden">
          <div className="px-4 py-6 flex flex-col gap-4 text-white">

            <a href="#products" onClick={closeMenu}>
              Products
            </a>

            <a href="#about" onClick={closeMenu} className="flex items-center gap-2">
              <Info size={18} /> About
            </a>

            <a href="#socials" onClick={closeMenu} className="flex items-center gap-2">
              <Share2 size={18} /> Socials
            </a>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <ShoppingCart size={18} />
              <span>Payment on delivery</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
