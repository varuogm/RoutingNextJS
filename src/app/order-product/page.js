"use client"; // This is a client component

import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();
  const handlePlaceOrder = () => {
    console.log("Order placed");
    router.push("/order-success");
  };

  return (
    <main>
      <h1>Order Product</h1>
      <button onClick={handlePlaceOrder}> Place order</button>
    </main>
  );
}
