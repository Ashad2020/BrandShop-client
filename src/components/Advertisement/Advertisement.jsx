export default function Advertisement() {
  return (
    <div className="flex justify-center py-12 w-full border-4">
      <div className="carousel max-h-full w-full md:w-1/2">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/HrSNb3Z/ad.jpg" alt="ad" border="0"></img>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/MMYpqqd/2.jpg"
            className="w-full"
            alt="2"
            border="0"
          ></img>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            className="object-cover"
            src="https://i.ibb.co/tzY75qn/Offer.jpg"
            alt="Offer"
            border="0"
          />

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/QHgmyKr/Offer-2.jpg"
            alt="Offer-2"
            border="0"
          />

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /* <img src="https://i.ibb.co/QHgmyKr/Offer-2.jpg" alt="Offer-2" border="0"></img> */
}
