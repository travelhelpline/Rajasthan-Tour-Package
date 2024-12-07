import Breadcrumb from "@/components/Breadcrumb";
export const metadata = {
    title: 'Religious Tour Spiritual Journeys | Rajasthan Tour Packages',
    description: "",
    keywords: [''],
    alternates: {
        canonical: "https://www.rajasthantourpackages.in/religious-tour-packages",
    },
    openGraph: {
        title: 'Religious Tour Spiritual Journeys | Rajasthan Tour Packages',
        description: "",
        url: "https://www.rajasthantourpackages.in/religious-tour-packages",
        images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        site_name: 'Rajasthan Tour Packages',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: "summary_large_image",
        site: "@rajasthantourpackages",
        title: 'Religious Tour Spiritual Journeys | Rajasthan Tour Packages',
        description: "",
        images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    },
};

const ReligiousTourPackages = () => {
    return (
        <>
            <Breadcrumb breadcrumbKey="religiousTour" />
            <div className="container-fluid py-4 bg-black text-white">
                <div className="row">
                    <h1 className="text-5">religious tour packages</h1>
                </div>
            </div>
        </>
    );
};

export default ReligiousTourPackages;
