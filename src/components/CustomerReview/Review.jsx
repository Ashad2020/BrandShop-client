export default function Review() {
  return (
    <div className="py-12 px-4">
      <h2 className="text-4xl font-bold text-center  py-8">Reviews</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card  text-xl border-4">
          <div className="card-body">
            <div className="avatar flex justify-center">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src="https://i.ibb.co/ZmJHMJB/guest2.jpg"
                  alt="guest2"
                  border="0"
                />
              </div>
            </div>
            <p>
              I love my Mibro Lite Smart Watch in black! The AMOLED screen is
              gorgeous, and the SpO2 monitoring adds a valuable health feature.
            </p>
          </div>
        </div>
        <div className="card  text-xl border-4">
          <div className="card-body">
            <div className="avatar flex justify-center">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src="https://i.ibb.co/BLCq1B4/guest8.jpg"
                  alt="guest8"
                  border="0"
                />
              </div>
            </div>
            <p>
              The Multimode Rechargeable Wireless Mouse is a versatile and
              convenient device that adapts to various modes seamlessly. It
              simplifies my tech life with its flexibility and long-lasting
              battery
            </p>
          </div>
        </div>
        <div className="card  text-xl border-4">
          <div className="card-body">
            <div className="avatar flex justify-center">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src="https://i.ibb.co/rdPSLpn/guest6.jpg"
                  alt="guest6"
                  border="0"
                />
              </div>
            </div>
            <p>
              The black Wireless Mouse Lite is a solid, no-frills option. Its
              comfortable to use and gets the job done with ease.
            </p>
          </div>
        </div>
        <div className="card  text-xl border-4">
          <div className="card-body">
            <div className="avatar flex justify-center">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src="https://i.ibb.co/N9wWKHm/guest1.jpg"
                  alt="guest1"
                  border="0"
                />
              </div>
            </div>
            <p>
              The Haylou RS4 Plus Smart Watch in black is fantastic! Its Retina
              AMOLED FHD screen is stunning, and the SpO2 feature adds a
              health-conscious edge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
