import Breadcrumb from "@/components/Breadcrumb";
import ItineraryAccordion from "@/components/ItineraryAccordion";
import SideNavigation from "@/components/SideNavigation";
import TourCarousel from "@/components/TourCarousel";
import { about, excursions, fairandfestivals, museumsandart, restaurantsandmore, shopping, sightseeing } from "@/data/Destination Data/udaipur";
import { allCitiesImages } from "@/data/imageData";
export const metadata = {
  title: 'udaipur',
  description: "",
  keywords: [''],
  alternates: {
    canonical: "https://www.rajasthantourpackages.in/udaipur",
  },
  openGraph: {
    title: 'udaipur',
    description: "",
    url: "https://www.rajasthantourpackages.in/udaipur",
    image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    siteName: 'Rajasthan Tour Packages',
    type: 'website',
  },
};


const Udaipur = () => {
  const sections = [
    { id: 'about', label: 'About udaipur' },
    { id: 'historical-attractions', label: 'udaipur Sightseeing' },
    { id: 'cultural-experiences', label: 'Museums & Art Galleries' },
    { id: 'modern-attractions', label: 'Fairs & Festivals' },
    { id: 'excursions', label: 'Excursions' },
    { id: 'restaurantsandmore', label: 'restaurants &  Local Cuisine' },
  ];
  const images = [
    { src: allCitiesImages.udaipur.udaipurBanner.src },
  ];

  const content = [
    {
      duration: '',
      title: 'udaipur',
    },
  ];
  return (
    <>
      <Breadcrumb breadcrumbKey="udaipur" />
      <div className="container-fluid home-banner days-banner-container destination-banner position-relative px-0">
        <TourCarousel images={images} content={content} />
      </div>
      {/* Main Content */}
      <div className="container px-0 py-4 days-container overview destination">
        <div className="row d-flex justify-content-start align-items-start days-overview px-2">
          <div className="col-12 col-lg-9 col-sm-12 px-3">
            {/* About Section */}
            <div className="w-100 insider section-offset mb-4" id="about">
              <h2 className="text-capitalize px-3 mb-3 text-center fw-normal">
                about
              </h2>
              <p className="text-justify home-para px-3">
                {about.content}
              </p>
            </div>
            {/* Sightseeing Section */}
            <div className="w-100 insider section-offset mb-4" id="historical-attractions">
              <h2 className="text-capitalize px-3 mb-3 text-center fw-normal">
                sightseeing
              </h2>
              <div className="col-12 px-2">
                <ItineraryAccordion tourItinerary={sightseeing} stylePara='destination-accordion-para' style="destination-accordion-head" showIcon={true} more={true} />
              </div>
            </div>
            {/* Museums & Art Galleries Section */}
            <div className="w-100 insider section-offset mb-4" id="cultural-experiences">
              <h2 className="text-capitalize px-3 mb-3 text-center fw-normal">
                Museums & Art Galleries
              </h2>
              <div className="col-12 px-2">
                <ItineraryAccordion tourItinerary={museumsandart} stylePara='destination-accordion-para' style="destination-accordion-head" showIcon={true} />
              </div>
            </div>
            {/* Fairs & Festivals Section */}
            <div className="w-100 insider section-offset mb-4" id="modern-attractions">
              <h2 className="text-capitalize px-3 mb-3 text-center fw-normal">
                Fairs & Festivals
              </h2>
              <div className="col-12 px-2">
                <ItineraryAccordion tourItinerary={fairandfestivals} stylePara='destination-accordion-para' style="destination-accordion-head" showIcon={true} />
              </div>
            </div>
            <div className="w-100 insider section-offset mb-4" id="excursions">
              <h2 className="text-capitalize px-3 mb-3 text-center fw-normal">
                Excursions
              </h2>
              <div className="col-12 px-2">
                <ItineraryAccordion tourItinerary={excursions} stylePara='destination-accordion-para' style="destination-accordion-head" showIcon={true} />
              </div>
            </div>
            <div className="w-100 insider section-offset mb-4" id="restaurantsandmore">
              <h2 className="text-capitalize px-3 mb-3 text-center fw-normal">
                restaurants &  Local Cuisine
              </h2>
              <div className="col-12 px-2">
                <ItineraryAccordion tourItinerary={restaurantsandmore} stylePara='destination-accordion-para' style="destination-accordion-head" showIcon={true} />
              </div>
            </div>
          </div>
          {/* Sidebar Navigation */}
          <div className="col-lg-3 col-sm-12 col-md-12 side-nav">
            <SideNavigation sections={sections} offset={80} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Udaipur;
