import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import ReadMoreToggle from "@/components/ReadMore";
import TourCarousel from "@/components/TourCarousel";
import TourPackages from "@/components/TourPackages";
import { tourFromOdisha } from "@/data/CitiesData";
import { odishaFaq } from "@/data/faqData";
import { allStatesImages } from "@/data/imageData";
import { Odisha } from "@/data/tourByCitiesData";

export const metadata = {
  title: 'Rajasthan Tour from Odisha | Rajasthan Tour Packages',
  description: "Embark on a Rajasthan Tour from Odisha and yourself in its timeless beauty, historic sites, and cultural treasures. Book your tailored tour package today.",
  keywords: [''],
  alternates: {
    canonical: "https://www.rajasthantourpackages.in/rajasthan-tour-from-odisha",
  },
  openGraph: {
    title: 'Rajasthan Tour from Odisha | Rajasthan Tour Packages',
    description: "Embark on a Rajasthan Tour from Odisha and yourself in its timeless beauty, historic sites, and cultural treasures. Book your tailored tour package today.",
    url: "https://www.rajasthantourpackages.in/rajasthan-tour-from-odisha",
    image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    siteName: 'Rajasthan Tour Packages',
    type: 'website',
  },
};


const RajasthanTourFromOdisha = () => {
  const images = [
    { src: allStatesImages.odisha.odishaBanner.src },
  ];

  const content = [
    {
      duration: '',
      title: 'Rajasthan Tour From odisha',
    },
  ];
  return (
    <>
      {/* bread crumb */}
      <Breadcrumb breadcrumbKey="rajasthanTourFromOdisha" />
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
                dangerouslySetInnerHTML={{ __html: tourFromOdisha.intro }}
              ></span>
              <ReadMoreToggle>
                <>
                  {tourFromOdisha.showMoreContent.map((content, index) => (
                    <span
                      className="home-para d-block"
                      key={index}
                      dangerouslySetInnerHTML={{ __html: content }}
                    ></span>
                  ))}
                </>
              </ReadMoreToggle>
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
              dangerouslySetInnerHTML={{ __html: tourFromOdisha.package }}
            ></h2>
          </div>
          <div className="row py-4 d-flex align-items-stretch px-2">
            {Odisha.slice(0, 3).map((pkg, index) => (
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
            <Faq faqs={odishaFaq.questions} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RajasthanTourFromOdisha;
