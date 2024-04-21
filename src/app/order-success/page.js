"use client"; // This is a client component

import { useRouter } from "next/navigation";

export default function ReRoute() {
  const router = useRouter();

  setTimeout(() => {
    rerouteToHome();
  }, 2000);


  const rerouteToHome = () => {
    console.log("rerouting to home page");
    router.push("/");
  };

 
  return (
    <main>
      <h1>Order Success.lol</h1>
    </main>
  );
}
