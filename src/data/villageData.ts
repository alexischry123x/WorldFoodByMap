export interface Village {
  id: number;
  name: string;
  district: string;
  population: number;
  product: string;
  price: string;
  description: string;
  villageInfo: string;
  story: string;
  storyteller: string;
}

export const villageData: Record<string, Village> = {
  '1': {
    id: '1',
    name: 'Lefkara',
    product: 'Traditional Lace',
    villageInfo: 'Lefkara is a small village in Cyprus, in the Larnaca district. It has a population of 1,100. Lefkara is famous for their traditional lace because this product has been made in Lefkara since the 15th century, when Leonardo da Vinci visited and bought lace for the altar of Milan Cathedral.',
    population: 1100,
    district: 'Larnaca',
    description: 'Famous for its intricate handmade lace, a UNESCO recognized craft passed down through generations.',
    price: '€45-150',
    story: 'My grandmother taught me when I was just 8 years old. Each pattern tells a story of our village...',
    storyteller: 'Maria Constantinou, 78'
  },
  '2': {
    id: '2',
    name: 'Omodos',
    product: 'Wine & Zivania',
    villageInfo: 'Omodos is a small village in Cyprus, in the Limassol district. It has a population of 300. Omodos is famous for their wine and zivania because this product has been made in Omodos since ancient times, with vineyards dating back over 1000 years in the Troodos Mountains.',
    population: 300,
    district: 'Limassol',
    description: 'Traditional Cypriot wine and zivania (grape brandy) made from ancient vine varieties.',
    price: '€15-35',
    story: 'Our family has been making wine for over 200 years. The secret is in the mountain soil...',
    storyteller: 'Andreas Kyprianou, 65'
  },
  '3': {
    id: '3',
    name: 'Kakopetria',
    product: 'Honey & Preserves',
    villageInfo: 'Kakopetria is a small village in Cyprus, in the Nicosia district, nestled in the Troodos Mountains. It has a population of 1,200. Kakopetria is famous for their honey because this product has been made in Kakopetria since old age, with beekeepers using traditional methods passed down for centuries.',
    population: 1200,
    district: 'Nicosia',
    description: 'Pure mountain honey and traditional fruit preserves made from local orchards.',
    price: '€8-25',
    story: 'The bees know the best flowers in our mountains. This honey tastes like sunshine...',
    storyteller: 'Eleni Georgiou, 72'
  },
  '4': {
    id: '4',
    name: 'Platres',
    product: 'Rose Products',
    villageInfo: 'Platres is a small village in Cyprus, in the Limassol district, located in the Troodos Mountains. It has a population of 250. Platres is famous for their rose products because roses have been cultivated in Platres since the Ottoman period, with the mountain climate creating perfect conditions for fragrant roses.',
    population: 250,
    district: 'Limassol',
    description: 'Rose water, oils, and cosmetics from the famous Platres mountain roses.',
    price: '€12-40',
    story: 'Every morning at dawn, we pick roses when the dew is still fresh...',
    storyteller: 'Sophia Panayiotou, 69'
  },
  '5': {
    id: '5',
    name: 'Lania',
    product: 'Olive Oil',
    villageInfo: 'Lania is a small village in Cyprus, in the Limassol district. It has a population of 50. Lania is famous for their olive oil because this product has been made in Lania since old age, with olive groves that have been in families for generations and some trees over 500 years old.',
    population: 50,
    district: 'Limassol',
    description: 'Extra virgin olive oil from centuries-old olive groves in the Troodos mountains.',
    price: '€18-30',
    story: 'These olive trees were planted by my great-grandfather. They know our family...',
    storyteller: 'Costas Michaelis, 74'
  }
  // Add more villages/products if you have them
};
