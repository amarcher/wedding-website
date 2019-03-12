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
  logo: 'https://161a422rnzmd251lsc3ltokz-wpengine.netdna-ssl.com/vanderbilt/wp-content/uploads/sites/9/2019/01/VAN-logo-vertical-color-large.png',
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

export const transportationInfo = 'The closest major airport to Newport, Rhode Island is Boston’s Logan International (BOS). You can either rent a car from that airport or take a train (Amtrack).';

export default [
  holidayInn,
  homewoodSuites,
  vanderbilt,
  gurneys,
];
