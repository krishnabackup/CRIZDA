import { ProductType } from "@/types/products.type";


export default function ProductReviewSummary({
  product,
}: {
  product: ProductType;
}) {
  return (
    <div className="rounded-3xl bg-[#f5f2ec] p-6 md:p-10">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[220px_1fr]">
        
        {/* Score */}
        <div className="text-center md:text-left">
          <p className="text-5xl font-semibold text-gray-900">
            {product.rating}
          </p>

          <div className="mt-2 text-xl text-yellow-500">
            ★★★★★
          </div>

          <p className="mt-2 text-sm text-gray-500">
            Based on {product.reviewCount} reviews
          </p>
        </div>

        {/* Breakdown */}
        <div className="space-y-4">
          <ReviewBar
            label="Excellent"
            percentage={82}
          />

          <ReviewBar
            label="Good"
            percentage={12}
          />

          <ReviewBar
            label="Average"
            percentage={4}
          />

          <ReviewBar
            label="Poor"
            percentage={2}
          />
        </div>
      </div>
    </div>
  );
}

function ReviewBar({
  label,
  percentage,
}: {
  label: string;
  percentage: number;
}) {
  return (
    <div className="flex items-center gap-3 text-sm">
      <span className="w-20 text-gray-600">
        {label}
      </span>

      <div className="h-2 flex-1 overflow-hidden rounded-full bg-white">
        <div
          className="h-full rounded-full bg-gray-800"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <span className="w-10 text-right text-gray-500">
        {percentage}%
      </span>
    </div>
  );
}