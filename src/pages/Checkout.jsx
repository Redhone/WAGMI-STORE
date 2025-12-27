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
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("");

    const formData = new FormData();
    formData.append("access_key", "d28e45b7-2d4d-4e62-b80d-2f4b54232016");

    // Customer info
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("address", address);

    // Order info
    formData.append("product", product.name);
    formData.append("size", size);
    formData.append("color", color);
    formData.append("quantity", quantity);
    formData.append("total_price", `${totalPrice} DA`);

    // Message (email body)
    formData.append(
      "message",
      `
NEW ORDER RECEIVED

Product: ${product.name}
Size: ${size}
Color: ${color}
Quantity: ${quantity}
Total: ${totalPrice} DA

Customer:
Name: ${name}
Phone: ${phone}
Address: ${address}
      `
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData
        }
      );

      const data = await response.json();

      if (data.success) {
        navigate("/success", {
          state: {
            product: product.name,
            size,
            color,
            quantity,
            totalPrice,
            customer: { name, phone, address }
          }
        });
      } else {
        setResult("❌ Failed to send order. Please try again.");
      }
    } catch (error) {
      setResult("❌ Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="pt-24 px-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-950 text-white border rounded-xl p-6 space-y-6"
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
          <input
            required
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-lg px-4 py-2"
          />

          <input
            required
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border rounded-lg px-4 py-2"
          />

          <textarea
            required
            placeholder="Delivery Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border rounded-lg px-4 py-2"
          />
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
          disabled={loading}
          className="w-full bg-black text-white hover:bg-white hover:text-black font-bold py-3 rounded-xl disabled:opacity-50 cursor-pointer"
        >
          {loading ? "Sending Order..." : "Confirm Order"}
        </button>

        {/* RESULT */}
        {result && (
          <p className="text-center text-sm text-red-500">
            {result}
          </p>
        )}

        <p className="text-sm text-gray-500 text-center">
          Payment on delivery
        </p>
      </form>
    </section>
  );
}
