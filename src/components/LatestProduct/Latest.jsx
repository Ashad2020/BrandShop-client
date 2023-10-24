export default function Latest() {
  return (
    <>
      <div className="min-h-screen bg-base-200">
        <h2 className="text-4xl font-bold text-center py-16">NEW ARRIVAL</h2>
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/zmGZ2Nq/latest1.webp"
            alt="latest1"
            border="0"
            className="max-w-sm rounded-lg shadow-2xl"
          ></img>

          <div>
            <h2 className="text-4xl font-bold">LUMIX G9II</h2>
            <p className="py-6">
              Our first Micro Four Thirds camera in the LUMIX G Series to
              feature phase-detect autofocus technology.
            </p>
            <button className="btn btn-ghost">Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
}
