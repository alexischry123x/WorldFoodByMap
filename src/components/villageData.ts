export interface Village {
  id: string;
  name: string;
  product: string;
  description: string;
  villageInfo: string;
  population: number;
  district: string;
  price: string;         // original string for display
  minPrice: number;      // numeric price for calculations
  story: string;
  storyteller: string;
  fullStory: string;
  photosLeft?: string[];
  photosRight?: string[];
  videoUrl?: string;
}

export const villageData: Record<string, Village> = {
  '1': {
    id: '1',
    name: 'Lefkara',
    product: 'Traditional Lace',
    villageInfo: 'Lefkara is a small village in Cyprus, in the Larnaca district...',
    population: 1100,
    district: 'Larnaca',
    description: 'Famous for its intricate handmade lace...',
    price: '€45-150',
    minPrice: 45,
    story: 'My grandmother taught me when I was just 8 years old...',
    storyteller: 'Maria Constantinou, 78',
    fullStory: `I was just eight years old when my grandmother first placed the needle in my small hands...`,
    photosLeft: ['/images/lefkara-left-1.jpg', '/images/lefkara-left-2.jpg'],
    photosRight: ['/images/lefkara-right-1.jpg', '/images/lefkara-right-2.jpg'],
    videoUrl: '/videos/lefkara-story.mp4'
  },
  '2': {
    id: '2',
    name: 'Omodos',
    product: 'Wine & Zivania',
    villageInfo: 'Omodos is a small village in Cyprus, in the Limassol district...',
    population: 300,
    district: 'Limassol',
    description: 'Traditional Cypriot wine and zivania...',
    price: '€15-35',
    minPrice: 15,
    story: 'Our family has been making wine for over 200 years...',
    storyteller: 'Andreas Kyprianou, 65',
    fullStory: `Our family vineyard sits on the slopes above Omodos...`,
    photosLeft: ['/images/omodos-left-1.jpg', '/images/omodos-left-2.jpg'],
    photosRight: ['/images/omodos-right-1.jpg', '/images/omodos-right-2.jpg'],
    videoUrl: '/videos/omodos-story.mp4'
  }
  // add remaining villages similarly...
};
