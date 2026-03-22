import Price from "./Price";

function ProductCard({ product, index = 0 }) {
  return (
    <div
      className="animate-card-entrance group relative bg-white/75 border border-black/[0.07] rounded-2xl overflow-hidden backdrop-blur-[10px] shadow-[0_4px_20px_rgba(0,0,0,0.06)] cursor-pointer transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(201,80,42,0.18)]"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {/* Image */}
      <div className="overflow-hidden aspect-square">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
      </div>

      {/* Shimmer overlay on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-[linear-gradient(105deg,transparent_40%,rgba(255,255,255,0.15)_50%,transparent_60%)] bg-[length:200%_100%] group-hover:[animation:shimmer_0.8s_ease_forwards]" />

      {/* Details */}
      <div className="px-[18px] pt-4 pb-2">
        <h2 className="font-brand text-[1.05rem] font-bold text-[#1a1a1a] mb-1.5 tracking-tight leading-snug">
          {product.name}
        </h2>
        <p className="text-[0.82rem] text-[#888880] font-light leading-[1.5] line-clamp-2">
          {product.description}
        </p>
      </div>

      {/* Footer */}
      <div className="px-[18px] pb-4 pt-2 flex items-center justify-between">
        <Price currency="$" price={product.price} />

        {/* Add to Cart button */}
        <button className="text-[0.78rem] font-medium font-body px-3 py-1.5 rounded-lg bg-[#c9502a] text-white opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 hover:bg-[#a83d1e] active:scale-95 shadow-[0_2px_8px_rgba(201,80,42,0.30)]">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
