import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import ReadMoreToggle from "@/components/ReadMore";
import TourCarousel from "@/components/TourCarousel";
import TourPackages from "@/components/TourPackages";
import { tourFromPune } from "@/data/CitiesData";
import { puneFaq } from "@/data/faqData";
import { allStatesImages } from "@/data/imageData";
import { Pune } from "@/data/tourByCitiesData";

export const metadata = {
  title: 'Rajasthan Trip from Pune | Book Now | Rajasthan Tour Packages',
  description: "Embark on a Rajasthan trip from Pune. Enjoy royal forts, rich culture, and luxurious stays. Plan your royal adventure with our tailored packages. Book today.",
  keywords: [''],
  alternates: {
    canonical: "https://www.rajasthantourpackages.in/rajasthan-tour-from-pune",
  },
  openGraph: {
    title: 'Rajasthan Trip from Pune | Book Now | Rajasthan Tour Packages',
    description: "Embark on a Rajasthan trip from Pune. Enjoy royal forts, rich culture, and luxurious stays. Plan your royal adventure with our tailored packages. Book today.",
    url: "https://www.rajasthantourpackages.in/rajasthan-tour-from-pune",
    image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    siteName: 'Rajasthan Tour Packages',
    type: 'website',
  },
};

const RajasthanTourFromPune = () => {
  const images = [
    { src: allStatesImages.pune.puneBanner.src },
  ];

  const content = [
    {
      duration: '',
      title: 'Rajasthan Tour From pune',
    },
  ];
  return (
    <>
      {/* bread crumb */}
      <Breadcrumb breadcrumbKey="rajasthanTourFromPune" />
      {/* banner */}
      <div className="container-fluid home-banner days-banner-container destination-banner position-relative px-0">
        <TourCarousel images={images} content={content} />
      </div>
      {/* data */}
      <div className="container-fluid">
        <div className="container py-5">
          <div className="row px-2">
            <p className="home-para cities-para">
              <span
                className="home-para d-block"
                dangerouslySetInnerHTML={{ __html: tourFromPune.intro }}
              ></span>
              <ReadMoreToggle>
                <>
                  {tourFromPune.showMoreContent.map((content, index) => (
                    <span
                      className="home-para d-block"
                      key={index}
                      dangerouslySetInnerHTML={{ __html: content }}
                    ></span>
                  ))}
                </>   </ReadMoreToggle>
              <span className="py-4 d-block"></span>
            </p>
          </div>
        </div>
      </div>

      {/* packages */}
      <div className="container-fluid section-02 py-4">
        <div className="container packages py-2">
          <div className="row">
            <h2
              className="fw-normal text-capitalize"
              dangerouslySetInnerHTML={{ __html: tourFromPune.package }}
            ></h2>
          </div>
          <div className="row py-4 d-flex align-items-stretch px-2">
            {Pune.slice(0, 3).map((pkg, index) => (
              <TourPackages key={index} pkg={pkg} />
            ))}
          </div>
        </div>
      </div>
      {/* faq's */}
      <div className="container-fluid px-0 section-03">
        <div className="container py-5">
          <div className="row">
            <h3 className="mb-4">
              Frequently <span className="fw-normal">Asked Questions</span>
            </h3>
            <Faq faqs={puneFaq.questions} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RajasthanTourFromPune;
