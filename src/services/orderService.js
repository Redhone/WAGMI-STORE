export async function createOrder(orderData) {
  return fetch("https://api.example.com/orders", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(orderData)
  });
}
