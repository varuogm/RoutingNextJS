import { notFound } from "next/navigation";

export default function SIngleProductReview({ params }) {
  if (parseInt(params.reviewId) > 1000) {
    return notFound();
  }
  return (
    <h2>
      Review about product with product id as {params.productId} and review Id
      ad {params.reviewId}
    </h2>
  );
}
