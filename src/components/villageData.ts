// src/components/villageData.ts
export interface Village {
  id: string;
  name: string;
  product: string;
  description: string;
  villageInfo: string;
  population: number;
  district: string;
  price: string;
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
    villageInfo: 'Lefkara is a small village in Cyprus, in the Larnaca district. It has a population of 1,100. Lefkara is famous for their traditional lace because this product has been made in Lefkara since the 15th century, when Leonardo da Vinci visited and bought lace for the altar of Milan Cathedral.',
    population: 1100,
    district: 'Larnaca',
    description: 'Famous for its intricate handmade lace, a UNESCO recognized craft passed down through generations.',
    price: '€45-150',
    story: 'My grandmother taught me when I was just 8 years old. Each pattern tells a story of our village...',
    storyteller: 'Maria Constantinou, 78',
    fullStory: `I was just eight years old when my grandmother first placed the needle in my small hands. "Patience, my child," she would say, "each stitch carries the soul of our village."

The art of Lefkara lace, or 'Lefkaritika' as we call it, has been passed down through generations of women in our family. Legend says that even Leonardo da Vinci visited our village and was so impressed by our lace that he bought some for the altar of Milan Cathedral.

Every morning, I would sit beside my grandmother on the wooden chair that had been worn smooth by generations of lacemakers. She taught me that each pattern has meaning - the geometric designs represent the mountains that surround our village, while the floral motifs celebrate the wildflowers that bloom in spring.

The work is meticulous. A single tablecloth can take months to complete, with thousands of tiny stitches creating intricate patterns that seem to dance in the light. But it's not just about the technique - it's about preserving our heritage, our identity as Cypriot women.

Today, I teach my granddaughter the same way my grandmother taught me. When I see her small fingers learning to guide the thread, I know that our tradition will continue, carrying the stories of Lefkara into the future.`,
    photosLeft: ['/images/lefkara-left-1.jpg', '/images/lefkara-left-2.jpg'],
    photosRight: ['/images/lefkara-right-1.jpg', '/images/lefkara-right-2.jpg'],
    videoUrl: '/videos/lefkara-story.mp4'
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
    storyteller: 'Andreas Kyprianou, 65',
    fullStory: `Our family vineyard sits on the slopes above Omodos, where the soil is rich with limestone and the mountain air carries the scent of wild herbs. My great-great-grandfather planted the first vines here in 1820, and we've been tending them ever since.

The secret to our wine isn't just in the grapes - it's in understanding the land. Each vine has its own personality, and you learn to read the signs. The way the leaves curl in the morning sun, the color of the grapes as they ripen, the feel of the soil between your fingers.

Making zivania is an art that requires patience and intuition. We use the traditional copper still that my grandfather built with his own hands. The process hasn't changed in centuries - we ferment the grape pomace for weeks, then distill it slowly, tasting and adjusting until we achieve that perfect balance of strength and smoothness.

During harvest season, the whole village comes together. Children run between the vines, their laughter mixing with the songs of the workers. In the evening, we gather to taste the new wine, sharing stories and planning for the year ahead.

This isn't just a business for us - it's our connection to the land, to our ancestors, and to each other. Every bottle carries the essence of Omodos, the spirit of our mountains, and the love of our people.`,
    photosLeft: ['/images/omodos-left-1.jpg', '/images/omodos-left-2.jpg'],
    photosRight: ['/images/omodos-right-1.jpg', '/images/omodos-right-2.jpg'],
    videoUrl: '/videos/omodos-story.mp4'
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
    storyteller: 'Eleni Georgiou, 72',
    fullStory: `The bees in Kakopetria know secrets that we humans have forgotten. They know which wildflowers bloom at dawn, which herbs carry the sweetest nectar, and how to find the hidden springs that feed our mountain meadows.

My husband and I started our apiary fifty years ago with just three hives. Back then, the mountains were wilder, and the bees had to travel farther for their treasures. But they always returned, heavy with the essence of our Troodos peaks.

Each season brings different flavors to our honey. In spring, it tastes of cherry blossoms and wild thyme. Summer honey carries the warmth of lavender and sage, while autumn brings the deep, rich notes of pine and oak. The bees are our teachers - they show us how to live in harmony with nature.

Making our preserves is a family tradition. My grandmother taught me to pick fruit at the perfect moment - when it's ripe but still firm, when the morning dew enhances its natural sweetness. We use old copper pots and wooden spoons, stirring slowly while sharing stories and laughter.

Every jar we make carries the love of our family and the purity of our mountains. When you taste our honey, you taste the freedom of our bees and the ancient wisdom of Kakopetria.`,
    photosLeft: ['/images/kakopetria-left-1.jpg'],
    photosRight: ['/images/kakopetria-right-1.jpg'],
    videoUrl: '/videos/kakopetria-story.mp4'
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
    storyteller: 'Sophia Panayiotou, 69',
    fullStory: `Before sunrise, when the mountain mist still clings to the valleys, I walk among my roses. This is the sacred hour, when the petals hold the night's moisture and the fragrance is at its purest. My grandmother taught me this - "Pick roses like you're gathering prayers, child."

Our rose gardens have been in the family for four generations. The variety we grow is special - Rosa damascena - brought to Cyprus by the Crusaders centuries ago. These aren't ordinary roses; they're living perfume, each bloom a treasure of essential oils and healing properties.

The distillation process is an art passed down through generations. We use a traditional copper still, heating the petals gently with mountain spring water. The first drops of rose water are like liquid gold - pure, potent, and filled with the soul of our mountains.

Making rose oil requires patience that young people today struggle to understand. It takes thousands of rose petals to produce just one small bottle of oil. But when you smell it, when you feel its healing touch on your skin, you understand why we call it "liquid love."

My roses have witnessed births, weddings, and farewells. They've comforted the sick and celebrated the joyful. In every bottle of rose water, in every bar of rose soap, lives the heart of Platres and the devotion of our family.`,
    photosLeft: ['/images/platres-left-1.jpg'],
    photosRight: ['/images/platres-right-1.jpg'],
    videoUrl: '/videos/platres-story.mp4'
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
    storyteller: 'Costas Michaelis, 74',
    fullStory: `These olive trees know my family better than I know myself. Some were planted by my great-great-grandfather in 1850, their gnarled trunks telling stories of droughts survived, storms weathered, and harvests celebrated through five generations.

In Lania, we don't just grow olives - we nurture relationships. Each tree has its own personality, its own needs. This one prefers morning sun, that one needs extra water during the dry months. After seventy years among these groves, I can tell you which tree will give the best oil just by touching its bark.

The harvest is our village's greatest celebration. Families come together, spreading nets beneath the ancient branches, using the same wooden ladders my grandfather carved. We pick by hand, never rushing, never forcing. The olives tell us when they're ready - their color deepens, their oil content peaks, and they practically fall into our hands.

Our oil mill is over 200 years old, its stone wheels worn smooth by countless harvests. We press the olives within hours of picking, preserving every drop of flavor and nutrition. The first pressing - what we call "liquid gold" - has a peppery bite that makes your throat tingle. That's how you know it's alive, full of antioxidants and love.

Every bottle of our olive oil carries the essence of Lania - the mountain air, the limestone soil, and the dedication of generations who understood that some things cannot be rushed, only respected.`,
    photosLeft: ['/images/lania-left-1.jpg'],
    photosRight: ['/images/lania-right-1.jpg'],
    videoUrl: '/videos/lania-story.mp4'
  }
};
