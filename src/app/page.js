import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <h1>Home Page</h1>
        <h3>HIii baby.</h3>
        <Link href="/blogs">blogs</Link>
        <Link href="/products">products</Link>
        <Link href="/order-product">Order</Link>
      </main>
    </>
  );
}
