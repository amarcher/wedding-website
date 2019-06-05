import HolidayInn from './photos/HolidayInn.png';
import VanderbiltGrace from './photos/Vanderbiltgrace.png';
import Gurneys from './photos/Gurneys_Newport_Primary_Green.png';

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
  instructions: 'Call 401-848-7128. Ask for Yang/Archer group rate.',
  nightlyPrice: '$119/night',
};

const homewoodSuites = {
  link: 'https://homewoodsuites.hilton.com/en/hw/groups/personalized/N/NPTMIHW-YAW-20191101/index.jhtml',
  logo: 'https://homewoodsuites.hilton.com/en/hw/media/images/logos/hdr_logo.gif',
  name: 'Homewood Suites',
  images: homewoodSuitesImages,
  instructions: 'Call 401-848-2700 and mention group code "YAW".',
  nightlyPrice: '$139/night',
};


const gurneys = {
  link: 'https://www.gurneysresorts.com/newport',
  logo: Gurneys,
  name: 'Gurney’s',
  images: gurneysImages,
  instructions: 'Call 401-851-3332. Ask for Yang/Archer group rate.',
  nightlyPrice: '$219/night + $25 resort fee',
};

const vanderbilt = {
  link: 'https://aubergeresorts.com/vanderbilt/',
  logo: VanderbiltGrace,
  name: 'Vanderbilt',
  images: vanderbiltImages,
  instructions: 'Call 401-846-6200. Ask for Yang/Archer group rate.',
  nightlyPrice: '$199/night + $50 resort fee',
};

export const hotelInfo = 'For your convenience, blocks of rooms at special rates have been reserved at several hotels near the wedding venue.';

export const airportInfo = [
  'The two closest airports to Newport are Providence’s T.F. Green Airport (PVD) and Boston’s Logan Airport (BOS).',
  'The drive from the Providence airport to Newport is roughly 30 minutes and the drive from Boston’s airport to Newport is approximately 1.5 hours.',
  'From either airport, you can rent a car, take a taxi, or order an Uber/Lyft.',
];

export const trainInfo = [
  'The two closest Amtrak train stations are Providence (PVD) and Kingston station (KIN).',
  'Both stations are about a 30 minute drive from Newport.',
  'If you are traveling from NYC, Philadelphia, New Haven, or Boston, you can easily take Amtrak to either station.',
];

export default [
  holidayInn,
  homewoodSuites,
  gurneys,
  vanderbilt,
];
