import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Checkout() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    navigate("/");
    return null;
  }

  const { product, size, color, quantity } = state;
  const totalPrice = product.price * quantity;

  // FORM STATE
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // For now we just simulate success
    const orderData = {
      product: product.name,
      size,
      color,
      quantity,
      totalPrice,
      customer: {
        name,
        phone,
        address
      }
    };

    console.log("ORDER DATA:", orderData);

    // Redirect to success page
    navigate("/success", { state: orderData });
  };

  return (
    <section className="pt-24 px-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Checkout
      </h1>

      <form
        
        onSubmit={handleSubmit}
        className="bg-white border rounded-xl p-6 space-y-6"
      >
        {/* PRODUCT SUMMARY */}
        <div className="flex gap-4">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-24 h-24 object-cover rounded-lg"
          />

          <div>
            <h2 className="font-semibold text-lg">
              {product.name}
            </h2>
            <p className="text-gray-600">Size: {size}</p>
            <p className="text-gray-600">Color: {color}</p>
            <p className="text-gray-600">Quantity: {quantity}</p>
          </div>
        </div>

        <hr />

        {/* CUSTOMER INFO */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm mb-1">
              Full Name
            </label>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">
              Phone Number
            </label>
            <input
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border rounded-lg px-4 py-2"
              placeholder="05xxxxxxxx"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">
              Address
            </label>
            <textarea
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full border rounded-lg px-4 py-2"
              placeholder="City, street, details..."
            />
          </div>
        </div>

        <hr />

        {/* TOTAL */}
        <div className="flex justify-between text-lg font-semibold">
          <span>Total</span>
          <span>{totalPrice} DA</span>
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-xl"
        >
          Confirm Order (Pay on Delivery)
        </button>

        <p className="text-sm text-gray-500 text-center">
          You will pay when the product arrives
        </p>
      </form>
    </section>
  );
}
