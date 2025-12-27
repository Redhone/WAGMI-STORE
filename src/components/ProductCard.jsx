import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="bg-gray-900 text-white rounded-xl p-4 hover:shadow-lg transition">
        <img src={product.images[0]} className="rounded-lg" />
        <h2 className="mt-3 font-semibold">{product.name}</h2>
        <p className="text-gray-800">{product.price} DZD</p>
      </div>
    </Link>
  );
}
