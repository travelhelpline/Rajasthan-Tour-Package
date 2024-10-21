import { FaSuitcase, FaUserTie, FaHeadset, FaMap } from "react-icons/fa";

const WhyUs = () => {
  return (
    <>
      <div className="container why-us py-5" id="why-us">
        <div className="row mb-3">
          <p className="text-uppercase mb-0 text-center text-uppercase sec-heading">
            about us
          </p>
          <h2 className="text-center text-capitalize sec-subhead">
            why choose us
          </h2>
        </div>
        <div className="row py-4">
          <div className="col-lg-6 col-md-6 col-12 px-0 d-flex my-2 justify-content-between align-items-center">
            <div className="col1 d-flex w-100 justify-content-between align-items-start gap-4">
              <div className="icon">
                <FaSuitcase className="about-icon about-icon1" />
              </div>
              <div className="content">
                <h3 className="text-capitalize">Tour Packages</h3>
                <p className="text-capitalize mb-0">
                  Every element with a perfect plan for the entire trip.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 px-0 d-flex my-2 justify-content-between align-items-center">
            <div className="col2 d-flex w-100 justify-content-between align-items-start gap-4">
              <div className="icon">
                <FaUserTie className="about-icon about-icon2" />
              </div>
              <div className="content">
                <h3 className="text-capitalize">Expert Travel Guides</h3>
                <p className="text-capitalize mb-0">
                  Knowledgeable guides to enhance your journey.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 px-0 d-flex my-2 justify-content-between align-items-center">
            <div className="col2 d-flex w-100 justify-content-between align-items-start gap-4">
              <div className="icon">
                <FaHeadset className="about-icon about-icon2" />
              </div>
              <div className="content">
                <h3 className="text-capitalize">24/7 Trip Support</h3>
                <p className="text-capitalize mb-0">
                  Assistance available around the clock for any issues.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 px-0 d-flex my-2 justify-content-between align-items-center">
            <div className="col1 d-flex w-100 justify-content-between align-items-start gap-4">
              <div className="icon">
                <FaMap className="about-icon about-icon1" />
              </div>
              <div className="content">
                <h3 className="text-capitalize">Personalized Itineraries</h3>
                <p className="text-capitalize mb-0">
                  Custom travel plans tailored to your preferences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
