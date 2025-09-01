// src/components/villageData.ts

export interface VillageInfo {
  id: string;
  title: string;
  story: string;
  photosLeft: string[];
  photosRight: string[];
}

export const villages: Record<string, VillageInfo> = {
  lefkara: {
    id: "lefkara",
    title: "Lefkara Village Story",
    story: `
Lefkara is famous for its handmade lace and silverware.
The tradition of Lefkara lace (Lefkaritika) dates back centuries
and has been recognized by UNESCO as intangible cultural heritage.

Strolling through the stone-paved alleys you can see women creating
lacework on their doorsteps and silversmiths working in their shops.

Lefkara is also connected to Leonardo da Vinci, who is said to have
visited the village in 1481 and purchased a lace cloth for the altar
of Milan Cathedral.

Discover more by visiting the village, where tradition meets history.
    `,
    photosLeft: [
      "/images/lefkara1.jpg",
      "/images/lefkara2.jpg",
    ],
    photosRight: [
      "/images/lefkara3.jpg",
      "/images/lefkara4.jpg",
    ],
  },

  omodos: {
    id: "omodos",
    title: "Omodos Village Story",
    story: `
Omodos is a charming wine-producing village located in the Troodos Mountains.
It is famous for its cobbled streets, traditional houses, and the Monastery of the Holy Cross.

The village square is one of the largest in Cyprus and is surrounded by cafes,
tavernas, and shops selling local products such as wine, zivania, and handmade sweets.

Omodos is also a cultural hub, hosting festivals and events that celebrate
Cypriot heritage, crafts, and gastronomy.
    `,
    photosLeft: [
      "/images/omodos1.jpg",
      "/images/omodos2.jpg",
    ],
    photosRight: [
      "/images/omodos3.jpg",
      "/images/omodos4.jpg",
    ],
  },

  kakopetria: {
    id: "kakopetria",
    title: "Kakopetria Village Story",
    story: `
Kakopetria is a picturesque mountain village located at the foothills of the Troodos range.
It is well-known for its preserved old quarter, traditional architecture, and fresh mountain air.

The village is crossed by two rivers, Kargotis and Garillis, which merge nearby,
creating a lush green environment with wooden bridges and walking trails.

Kakopetria also hosts beautiful Byzantine churches, traditional watermills,
and is a popular weekend escape for both locals and visitors.
    `,
    photosLeft: [
      "/images/kakopetria1.jpg",
      "/images/kakopetria2.jpg",
    ],
    photosRight: [
      "/images/kakopetria3.jpg",
      "/images/kakopetria4.jpg",
    ],
  },
};
