import HolidayInn from './photos/HolidayInn.png';

const holidayInnImages = [
  'https://ihg.scene7.com/is/image/ihg/holiday-inn-express-middletown-5585325070-2x1?wid=940&hei=470',
];

const homewoodSuitesImages = [
  'https://homewoodsuites3.hilton.com/resources/media/hw/NPTMIHW/en_US/img/shared/full_page_image_gallery/main/HG_hotelexterior01_505x305_FitToBoxSmallDimension_Center.jpg',
];

const vanderbiltImages = [
  'https://d12qhwfffa1f42.cloudfront.net/images/van/van-gallery-gardenterrace.jpg',
];

const gurneysImages = [
  'https://www.gurneysresorts.com/content/slides/updated-aerial1.jpg',
];

const holidayInn = {
  link: 'https://www.ihg.com/holidayinnexpress/hotels/us/en/middletown/mwnri/hoteldetail?newRedirect=true&qIta=99801505&icdv=99801505&qSlH=MWNRI&qGrpCd=YAW&setPMCookies=true&qDest=855%20West%20Main%20Road,%20Middletown,%20RI,%20US&srb_u=1',
  logo: HolidayInn,
  name: 'Holiday Inn',
  images: holidayInnImages,
};

const homewoodSuites = {
  link: 'https://homewoodsuites.hilton.com/en/hw/groups/personalized/N/NPTMIHW-YAW-20191101/index.jhtml',
  logo: 'https://homewoodsuites.hilton.com/en/hw/media/images/logos/hdr_logo.gif',
  name: 'Homewood Suites',
  images: homewoodSuitesImages,
};

const vanderbilt = {
  link: 'https://aubergeresorts.com/vanderbilt/',
  logo: 'https://www.spaindex.com/wp-content/uploads/spaindex_vanderbilt-grace-hotel-spa.jpg',
  name: 'Vanderbilt',
  images: vanderbiltImages,
};

const gurneys = {
  link: 'https://www.gurneysresorts.com/newport',
  logo: 'http://www.ldvhospitality.com/wp-content/uploads/2017/05/Gurneys_Newport_Primary_Green.png',
  name: 'Gurney’s',
  images: gurneysImages,
  rate: '$219/night + $25 resort fee.',
  instructions: 'Call 401-851-3332. Ask for Yang/Archer group rate.',
  terms: 'Two-Night Stay: Friday & Saturday. Standard King or Double/Double.',
};

export const hotelInfo = 'For your convenience, blocks of rooms at special rates have been reserved at several hotels near the wedding venue.';

export const airportInfo = [
  'The two closest airports to Newport are Providence’s T.F. Green Airport (PVD) and Boston’s Logan Airport (BOS).',
  'The drive from the Providence airport to Newport is roughly 40 minutes and the drive from Boston’s airport to Newport is approximately 1.5 hours.',
  'From either airport, you can rent a car, take a taxi, or order an Uber/Lyft.',
  'Additionally, there are Airport Shuttles from T.F. Green to Newport: Orange Cab 401-841-0200',
];

export const trainInfo = [
  'Amtrak runs from Penn Station in New York; South Station in Boston; and Providence Station in Providence, Rhode Island.',
  'From the Providence train station, a car service can take you to Newport (45 minutes away).',
  'Alternatively, certain Amtrak lines stop in West Kingston, Rhode Island, which is 25 minutes from Newport.',
  'If you are traveling from NYC, you can easily take Amtrak from Penn Station right to West Kingston.',
];

export default [
  holidayInn,
  homewoodSuites,
  vanderbilt,
  gurneys,
];
