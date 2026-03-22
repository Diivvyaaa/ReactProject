import ProductCard from "./ProductCard";

function ProductListings({ products }) {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-10 pb-20 pt-2 max-sm:px-4 max-sm:pb-14">
      {products.length > 0 ? (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-6 max-sm:grid-cols-[repeat(auto-fill,minmax(150px,1fr))] max-sm:gap-4">
          {products.map((product, index) => (
            <ProductCard key={product.productId} product={product} index={index} />
          ))}
        </div>
      ) : (
        <p className="text-base text-[#888880] text-center py-16 font-light tracking-[0.02em]">
          No Products Found
        </p>
      )}
    </section>
  );
}

export default ProductListings;
