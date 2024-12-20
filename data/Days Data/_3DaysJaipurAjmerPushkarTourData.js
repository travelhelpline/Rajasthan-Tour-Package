import { FaCheckCircle, FaFileContract, FaTimesCircle } from 'react-icons/fa';
const temp = {
  bold: (text) => `<span class='fw-bold'>${text}</span>`,
  link: (text, url) =>
    `<a class='text-web' target='_blank' href='${url}'>${text}</a>`,
};
// Destination Covered by the tour
export const destinationCovered = {
  title: 'Destination Covered',
  destinations: ['Jaipur', 'Ajmer', 'Pushkar'],
};
// Days Covered by the tour
export const tourItinerary = {
  title: `Tour <strong>Itinerary</strong>`,
  content: [
    {
      day: 'Day 01',
      title:
        'Jaipur: Arrival at Jaipur, Half-Day Jaipur City Tour, and Rajasthani Dinner at Chokhi Dhani',
      content: `
              <span class='itinerary-pts'>On arrival at Jaipur Airport / Railway Station / Bus Stand, you are greeted by a Rajasthan Tour Packages representative and transferred to your Hotel.</span>
              <span class='itinerary-pts'>Immediately after finishing the check-in procedure and freshening up, we will start our 2 Days Jaipur Pushkar Tour itinerary.</span>
              <span class='itinerary-pts'>The first day of your tour will cover some of Jaipur's most popular attractions: City Palace, Observatory (Jantar Mantar), Hawa Mahal (Wind Palace), Walled Pink City, Albert Hall Museum, Birla Mandir, and Patrika Gate.</span>
              <span class='itinerary-pts'>In the evening, we enjoy an authentic Rajasthani dinner in an ethnic village for an enjoyable, relaxing dining experience and overnight at our hotel.</span>
              <span class='itinerary-pts'>Overnight stay at Jaipur Hotel.</span>
            `,
    },
    {
      day: 'Day 02',
      title:
        'Jaipur: Jhalana Leopard Safari, Full Day Jaipur City Tour, Elephant Village Visit, and Sunset from Nahargarh Fort',
      content: `
              <span class='itinerary-pts'>The Second Day of your 2 Days Jaipur Tour Package starts early in the morning when we wake up and go for Jungle Safari by Open Gypsy at Jhalana Leopard Safari Park, this is one of the best & different experiences of your Jaipur Stay.</span>
              <span class='itinerary-pts'>After coming back to Hotel, we will get ready and have our delicious breakfast.</span>
              <span class='itinerary-pts'>Later we start full day Jaipur City Tour covering Jal Mahal (Water Palace), Amer Fort (Amber Fort), and Elephant Village (Hathi Gaon), Local Markets, Jaigarh Fort & Nahargarh Fort.</span>
              <span class='itinerary-pts'>Evening free for self-exploration.</span>
              <span class='itinerary-pts'>Overnight stay at Jaipur Hotel.</span>
            `,
    },
    {
      day: 'Day 03',
      title:
        'Jaipur: Day trip to Ajmer & Pushkar, Camel Safari over Sand Dunes and Drop',
      content: `
              <span class='itinerary-pts'>After breakfast, checkout from Hotel and drive to Pushkar.</span>
              <span class='itinerary-pts'>Before reaching Pushkar, we'll visit Mesmerizing Marble Dumping Yard, also known as "Rajasthan ka Switzerland" at Kishangarh.</span>
              <span class='itinerary-pts'>We also visit Dargah of Khwaja Moinuddin Chishti at Ajmer.</span>
              <span class='itinerary-pts'>At Pushkar, we will worship at the World Only Temple of Lord Bramha (Creator of the universe) and explore the spiritual facts of this holy town.</span>
              <span class='itinerary-pts'>After lunch, enjoy an exciting camel or jeep safari in the unique landscape of Pushkar.</span>
              <span class='itinerary-pts'>By the evening, we will come back to Jaipur Airport / Railway Station to connect your onward journey.</span>
              <span class='itinerary-pts itinerary-end'>Your 03 Days Jaipur - Ajmer - Pushkar Package Tour Ends with all the pleasant memories you made during the trip.</span>
            `,
    },
  ],
};
// Tour Overview Data
export const tourOverview = {
  title: `Tour <strong>Overview</strong>`,
  content: [
    `The ${temp.bold(
      `Jaipur, Ajmer & Pushkar Tour`
    )} offers an ideal family weekend package that combines sightseeing with cultural and spiritual experiences for every member of your party - be they children, parents, or grandparents! This tour promises unforgettable memories for every family member involved.`,
    `Your journey starts in Jaipur, known as the Pink City. Here, you'll experience iconic landmarks such as Amber Fort, City Palace and Hawa Mahal; along with a vibrant ${temp.bold(
      `Pushkar Market`
    )} offering traditional handicrafts and textiles for purchase. On day 2, visit Pushkar for its beautiful sacred lake and Brahma Temple; spend a relaxing and spiritually rejuvenating day relaxing by its shore while appreciating this holy town's spiritual vibes; further enjoy Ajmer Sharif Dargah for insight into Rajasthan's rich spiritual legacy - making this tour perfectly tailored towards suit every family!`,
  ],
};
// Tour Highlights
export const tourHighlights = {
  title: `Tour <strong>Highlights</strong>`,
  content: [
    'Jaipur City Tour with Guide',
    'Visit Iconic Amber Fort - A UNESCO World Heritage Site.',
    'Panoramic View of Pinkcity & Sunset from Nahargarh Fort.',
    'Explore Pink Walled City & Stroll in Local Markets.',
    'See the Largest Wheeled Cannon at Jaigarh Fort.',
    'Leopard Safari at Jhalana Leopard Park',
    'Fun & Adventure with Elephants at Elephant Village Jaipur.',
    'Experience the Rural Side of Rajasthan with Rajasthani Cuisine at Chokhi Dhani.',
    'Visit "Rajasthan ka Switzerland".',
    'Visit Dargah Sharif at Ajmer & World Only Lord Brahma Temple at Pushkar.',
    'An exciting camel safari in the unique landscape of Pushkar.',
  ],
};

// More Info about the tour
export const packageData = [
  {
    title: 'Package Inclusions',
    icon: 'FaCheckCircle',
    content: `
            <span class='itinerary-pts'>02 Nights / 03 Days Air-Conditioned Accommodation in Deluxe Category Hotel.</span>
            <span class='itinerary-pts'>Daily Breakfast.</span>
            <span class='itinerary-pts'>All Sightseeing and transfers by an Exclusive Air-Conditioned Vehicle.</span>
            <span class='itinerary-pts'>Driver Allowance, Fuel, Parking Charges, Toll Taxes and Interstate Taxes.</span>
            <span class='itinerary-pts'>Local Guide Services during Jaipur Sightseeing.</span>
            <span class='itinerary-pts'>Packaged Drinking Water Bottles during Travel.</span>
            <span class='itinerary-pts'>Farewell Gift on Departure.</span>
            <span class='itinerary-pts'>Child below 5 years is complimentary (without extra bed & seat).</span>
            <span class='itinerary-pts'>All Taxes.</span>
          `,
  },
  {
    title: 'Package Exclusions',
    icon: 'FaTimesCircle',
    content: `
            <span class='itinerary-pts'>Anything not mentioned under ‘Package Inclusions’.</span>
            <span class='itinerary-pts'>Meals & drinks other than specified in inclusions.</span>
            <span class='itinerary-pts'>Expenses of personal nature such as travel insurance, portages, laundry expenses etc.</span>
            <span class='itinerary-pts'>Monument tourist entrance & camera fees, guide & driver tippings.</span>
            <span class='itinerary-pts'>Jhalana Leopard Safari, Elephant Village Visit, Chokhi Dhani Charges & Camel Ride Charges.</span>
          `,
  },
  {
    title: 'Terms & Conditions',
    icon: 'FaFileContract',
    content: `
            <span class='itinerary-pts'>Tour Prices are Per Person.</span>
            <span class='itinerary-pts'>Package Costs may change during the Weekends, Festivals & New Year Period.</span>
            <span class='itinerary-pts'>Above Tour Rates are in Indian Rupees.</span>
            <span class='itinerary-pts'>Hotel Upgradation is available at Additional Cost.</span>
            <span class='itinerary-pts'>With Single Occupancy Room, package cost will be 50% additional.</span>
            <span class='itinerary-pts'>Child Above 6 Years and Additional Adult sharing same room will cost 75% of Tour Cost, including Extra Bed, Transportation, and Meals.</span>
            <span class='itinerary-pts'>All payments to be made by Cheque / Demand Draft / QR Code are only payable at Jaipur in the name of our firm “Rajasthan Travel Helpline”.</span>
            <span class='itinerary-pts'>All disputes subject to jurisdiction of Jaipur Court only.</span>
            <span class='itinerary-pts'>E. & O. E.</span>
          `,
  },
];

// faq
export const tourFaq = {
  questions: [
    {
      question: `What can you expect on our 3 Days Jaipur Ajmer Pushkar Tour?`,
      answer: `Our three-day ${temp.bold(
        `Jaipur, Ajmer & Pushkar tour`
      )} covers major tourist sites such as ${temp.bold(
        `Ajmer Sharif Dargah`
      )}, Pushkar Lake & Market as well as accommodation and transportation arrangements. Additionally, accommodation will also be included along the route. `,
    },
    {
      question: `What must-visit places exist around Pushkar Lake?`,
      answer: `Pushkar Lake provides visitors with plenty of sightseeing opportunities. Notable landmarks include Brahma Temple and ${temp.bold(
        `Pushkar Market`
      )} as well as local cuisine at nearby eateries.`,
    },
    {
      question: `How can I visit Ajmer Sharif Dargah during my tour?`,
      answer: `This 3 Day ${temp.bold(
        `Jaipur Ajmer Pushkar Tour`
      )} includes comfortable transportation to make reaching Ajmer Sharif Dargah easy from Jaipur and Pushkar.`,
    },
    {
      question: `What items can I find for sale at Pushkar Market?`,
      answer: `${temp.bold(
        `Pushkar Market`
      )} is famous for its stunning selection of handicrafts, traditional clothing, jewelry, and souvenirs; an essential stop during any trip to Pushkar.`,
    },
    {
      question: `Does the 3 Days Jaipur Ajmer Pushkar Tour cater to families? `,
      answer: `Yes, this trip offers something for all age groups in its itinerary: cultural experiences at ${temp.bold(
        `Pushkar Lake`
      )} and Ajmer Sharif Dargah as well as fun shopping trips at Pushkar Market.`,
    },
  ],
};
