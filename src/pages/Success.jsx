import { useLocation, useNavigate } from "react-router-dom";

export default function Success() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    navigate("/");
    return null;
  }

  return (
    <section className="pt-24 px-6 max-w-xl mx-auto text-center text-white">
      <h1 className="text-3xl font-bold mb-4">
        Order Confirmed 🎉
      </h1>

      <p className="text-gray-600 mb-6">
        Thank you <strong>{state.customer.name}</strong>!  
        Your order has been received.
      </p>

      <div className="border rounded-xl p-6 text-left mb-6">
        <p><strong>Product:</strong> {state.product}</p>
        <p><strong>Size:</strong> {state.size}</p>
        <p><strong>Color:</strong> {state.color}</p>
        <p><strong>Quantity:</strong> {state.quantity}</p>
        <p><strong>Total:</strong> {state.totalPrice} DA</p>
      </div>

      <button
        onClick={() => navigate("/")}
        className="bg-black text-white px-6 py-3 rounded-xl"
      >
        Back to Home
      </button>
    </section>
  );
}
