import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import BrandCard from "../../components/BrandCard/BrandCard";
import Latest from "../../components/LatestProduct/Latest";
import Review from "../../components/CustomerReview/Review";

export default function Home() {
  const loadedBrand = useLoaderData();

  // console.log("Loaded brand", loadedBrand);
  return (
    <>
      <Banner></Banner>

      <h2 className="text-4xl font-bold text-center  py-8">Shop by Brand</h2>

      <div className="grid grid-cols-3 max-w-3xl mx-auto gap-4 my-8">
        {loadedBrand.map((brand) => {
          return <BrandCard key={brand._id} brand={brand}></BrandCard>;
        })}
      </div>
      <Latest></Latest>
      <Review></Review>
    </>
  );
}
