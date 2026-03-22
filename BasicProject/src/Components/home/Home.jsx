import PageHeading from "./PageHeading";
import ProductListings from "./ProductListings";
import products from "../../Data/Products";

function Home() {
  return (
    <div className="min-h-screen w-full bg-[#faf7f2] [background-image:radial-gradient(ellipse_70%_50%_at_80%_20%,rgba(201,80,42,0.07)_0%,transparent_60%),radial-gradient(ellipse_50%_40%_at_10%_80%,rgba(201,80,42,0.05)_0%,transparent_55%)] font-body flex flex-col items-center">
      <PageHeading>
        Add a touch of creativity to your space with our wide range of fun and
        unique stickers. Perfect for any occasion!
      </PageHeading>
      <ProductListings products={products} />
    </div>
  );
}

export default Home;
