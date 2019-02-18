import Julie from './photos/Julie.png';
import Julie2 from './photos/Julie2.jpg';
import Joy from './photos/Joy3.jpg';
import Joy2 from './photos/Joy2.jpg';
import Minna from './photos/Minna1.jpg';
import Minna2 from './photos/Minna2.jpg';
import Kerry from './photos/Kerry.jpg';
import Kerry2 from './photos/Kerry2.jpg';
import Mai from './photos/Mai1.jpg';
import Mai2 from './photos/Mai2.jpg';
import Allen from './photos/Allen.png';
import Allen2 from './photos/Allen2.jpg';
import Allen3 from './photos/Allen3.jpg';
import Allen4 from './photos/Allen4.jpg';
import Russell from './photos/Russell.jpeg';
import Russell2 from './photos/Russell2.jpg';
import Russell3 from './photos/Russell3.png';
import Michael from './photos/Michael.jpeg';
import Michael2 from './photos/Michael2.jpg';
import Michael3 from './photos/Michael3.jpg';
import Dave from './photos/Dave.jpeg';
import Dave2 from './photos/Dave2.jpg';
import Dave3 from './photos/Dave3.jpg';
import Al from './photos/Al.jpg';
import Al2 from './photos/Al2.jpeg';
import Al3 from './photos/Al3.jpg';

const kerry = {
  name: 'Kerry Yang',
  distance: '3093 miles away',
  relation: 'Sister, and the one who inspires us to cook',
  then: 'Assistant to the principal of AK Daycare™, a summer school we created for our brothers Derick & Jason',
  now: 'PhD candidate at Columbia Business School',
  images: [Kerry, Kerry2],
  title: 'Maid of Honor',
};

const mai = {
  name: 'Mai Tsukikawa',
  distance: '857 miles away',
  relation: 'College roommate, and the one who handles all medical questions',
  then: 'Eating 50 chicken nuggets after Penn Spring Fling 2011 and then proceeding to cook omelets',
  now: 'Resident Ophthalmologist at U of Washington',
  images: [Mai, Mai2],
};

const julie = {
  name: 'Julie Xu',
  distance: '2925 miles away',
  relation: 'College roommate, and the one who made me like dogs',
  then: 'Spending almost all Thanksgiving weekends together and sleeping in until mid-afternoon',
  now: 'COO at Stae',
  images: [Julie, Julie2],
};

const joy = {
  name: 'Joy Xu',
  distance: '2924 miles away',
  relation: 'College roommate, and the one who’s not afraid to say what we’re all thinking',
  then: 'Dancing to Usher songs at summer camp and eating nutella straight from the jar',
  now: 'Director at New Mountain Capital',
  images: [Joy, Joy2],
};

const minna = {
  name: 'Minna Zhang',
  distance: '1 mile away',
  relation: 'Childhood friend, and the one who’s never lived more than 5 miles away (except for those 2 years at Duke)',
  then: 'Permanent wedding +1 and honeymoon destination travel companion',
  now: 'Senior Manager at Genentech',
  images: [Minna, Minna2],
};

const allen = {
  name: 'Allen Czerwinksi',
  distance: '816 miles away',
  relation: 'Former coworker and the one who’s most likely got an opinionated story to tell about any subject',
  then: '',
  now: 'iOS Developer, AIM Consulting Group',
  images: [Allen, Allen2, Allen3, Allen4],
};

const russell = {
  name: 'Russell Salerno',
  distance: '572 miles away',
  relation: 'SF Magic best-bud and the one who’s most likely to be "feelin’ it"',
  then: '',
  now: 'Technical Project Lead, Intellum',
  images: [Russell, Russell2, Russell3],
};

const michael = {
  name: 'Michael Yau',
  distance: '19 miles away',
  relation: 'College friend and the one who’s most likely not to pay extra for guacamole at Chipotle',
  then: '',
  now: 'Analyst at Mercator Fund, Sycale Advisors',
  images: [Michael, Michael2, Michael3],
};

const dave = {
  name: 'Dave Lee',
  distance: '3 miles away',
  relation: 'College friend and the one who’s most likely down for Vegas on short notice',
  then: '',
  now: 'Director of Product Engineering, BuildZoom',
  images: [Dave, Dave2, Dave3],
};

const al = {
  name: 'Alexander Lee',
  distance: '1774 miles away',
  relation: 'College roommate and the one who almost certainly needs to stay-in and study tonight',
  then: '',
  now: 'Gastroenterologist, Texas Digestive Disease Consultants',
  images: [Al, Al2, Al3],
};

export const bridesmaids = [
  kerry,
  minna,
  julie,
  mai,
  joy,
];

export const groomsmen = [
  allen,
  russell,
  michael,
  dave,
  al,
];

export const ourStory = [
  'In 2006, Andy drives from Ithaca, NY to San Francisco, CA.',
  'In 2016, Alicia decides to temporarily part ways with her East Coast life, relocating to San Francisco “for six months to a year, tops.“',
  'Andy matches Alicia on a dating website and invites her out for a drink.',
  'They find out they have many things in common: they were both born in Louisiana, both have 1 sister and 2 brothers, and both are science PhD drop-outs.',
  'Andy starts clearing all weekends to hang out with her.',
  'Alicia decides to stay.',
];

const friday = {
  date: 'Friday, November 1, 2019',
  time: '8pm EDT',
  location: 'TBD',
  attire: 'Cocktail',
  title: 'Welcome Drinks',
};

const saturday = {
  date: 'Saturday, November 2, 2019',
  time: '4pm EDT',
  location: 'Island House at Belle Mer',
  attire: 'Formal',
  title: 'Ceremony',
  subtitle: 'Cocktail Hour & Reception Immediately Following',
};

const sunday = {
  date: 'Sunday, November 3, 2019',
  time: '10am EST',
  location: 'TBD',
  attire: 'Casual',
  title: 'Farewell Brunch',
};

export const events = [
  friday,
  saturday,
  sunday,
];

export default {
  bridesmaids,
  groomsmen,
};
