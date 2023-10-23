import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import BrandCard from "../../components/BrandCard/BrandCard";

export default function Home() {
  const loadedBrand = useLoaderData();

  console.log("Loaded brand", loadedBrand);
  return (
    <>
      <Banner></Banner>
      <h2>Home</h2>
      <h2 className="text-5xl font-bold text-center">Top Brands</h2>

      <div className="grid grid-cols-3 max-w-3xl mx-auto gap-4 my-8">
        {loadedBrand.map((brand) => {
          return <BrandCard key={brand._id} brand={brand}></BrandCard>;
        })}
      </div>
    </>
  );
}
