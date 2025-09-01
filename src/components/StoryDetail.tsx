
import React from 'react';
import { ArrowLeft, Heart, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const storyData: Record<string, any> = {
  '1': {
    title: 'The Art of Lefkara Lace',
    storyteller: 'Maria Constantinou',
    age: 78,
    fullStory: `I was just eight years old when my grandmother first placed the needle in my small hands. "Patience, my child," she would say, "each stitch carries the soul of our village."

The art of Lefkara lace, or 'Lefkaritika' as we call it, has been passed down through generations of women in our family. Legend says that even Leonardo da Vinci visited our village and was so impressed by our lace that he bought some for the altar of Milan Cathedral.

Every morning, I would sit beside my grandmother on the wooden chair that had been worn smooth by generations of lacemakers. She taught me that each pattern has meaning - the geometric designs represent the mountains that surround our village, while the floral motifs celebrate the wildflowers that bloom in spring.

The work is meticulous. A single tablecloth can take months to complete, with thousands of tiny stitches creating intricate patterns that seem to dance in the light. But it's not just about the technique - it's about preserving our heritage, our identity as Cypriot women.

Today, I teach my granddaughter the same way my grandmother taught me. When I see her small fingers learning to guide the thread, I know that our tradition will continue, carrying the stories of Lefkara into the future.`,
    videoUrl: '/videos/lefkara-story.mp4', // Add the video URL here
  },
  '2': {
    title: 'Generations of Wine Making',
    storyteller: 'Andreas Kyprianou',
    age: 65,
    fullStory: `Our family vineyard sits on the slopes above Omodos, where the soil is rich with limestone and the mountain air carries the scent of wild herbs. My great-great-grandfather planted the first vines here in 1820, and we've been tending them ever since.

The secret to our wine isn't just in the grapes - it's in understanding the land. Each vine has its own personality, and you learn to read the signs. The way the leaves curl in the morning sun, the color of the grapes as they ripen, the feel of the soil between your fingers.

Making zivania is an art that requires patience and intuition. We use the traditional copper still that my grandfather built with his own hands. The process hasn't changed in centuries - we ferment the grape pomace for weeks, then distill it slowly, tasting and adjusting until we achieve that perfect balance of strength and smoothness.

During harvest season, the whole village comes together. Children run between the vines, their laughter mixing with the songs of the workers. In the evening, we gather to taste the new wine, sharing stories and planning for the year ahead.

This isn't just a business for us - it's our connection to the land, to our ancestors, and to each other. Every bottle carries the essence of Omodos, the spirit of our mountains, and the love of our people.`,
    videoUrl: '/videos/omodos-story.mp4',
  },
  '3': {
    title: 'Mountain Honey Traditions',
    storyteller: 'Eleni Georgiou',
    age: 72,
    fullStory: `The bees in Kakopetria know secrets that we humans have forgotten. They know which wildflowers bloom at dawn, which herbs carry the sweetest nectar, and how to find the hidden springs that feed our mountain meadows.

My husband and I started our apiary fifty years ago with just three hives. Back then, the mountains were wilder, and the bees had to travel farther for their treasures. But they always returned, heavy with the essence of our Troodos peaks.

Each season brings different flavors to our honey. In spring, it tastes of cherry blossoms and wild thyme. Summer honey carries the warmth of lavender and sage, while autumn brings the deep, rich notes of pine and oak. The bees are our teachers - they show us how to live in harmony with nature.

Making our preserves is a family tradition. My grandmother taught me to pick fruit at the perfect moment - when it's ripe but still firm, when the morning dew enhances its natural sweetness. We use old copper pots and wooden spoons, stirring slowly while sharing stories and laughter.

Every jar we make carries the love of our family and the purity of our mountains. When you taste our honey, you taste the freedom of our bees and the ancient wisdom of Kakopetria.`,
    videoUrl: '/videos/kakopetria-story.mp4',
  },
  '4': {
    title: 'The Rose Gardens of Platres',
    storyteller: 'Sophia Panayiotou',
    age: 69,
    fullStory: `Before sunrise, when the mountain mist still clings to the valleys, I walk among my roses. This is the sacred hour, when the petals hold the night's moisture and the fragrance is at its purest. My grandmother taught me this - "Pick roses like you're gathering prayers, child."

Our rose gardens have been in the family for four generations. The variety we grow is special - Rosa damascena - brought to Cyprus by the Crusaders centuries ago. These aren't ordinary roses; they're living perfume, each bloom a treasure of essential oils and healing properties.

The distillation process is an art passed down through generations. We use a traditional copper still, heating the petals gently with mountain spring water. The first drops of rose water are like liquid gold - pure, potent, and filled with the soul of our mountains.

Making rose oil requires patience that young people today struggle to understand. It takes thousands of rose petals to produce just one small bottle of oil. But when you smell it, when you feel its healing touch on your skin, you understand why we call it "liquid love."

My roses have witnessed births, weddings, and farewells. They've comforted the sick and celebrated the joyful. In every bottle of rose water, in every bar of rose soap, lives the heart of Platres and the devotion of our family.`,
    videoUrl: '/videos/platres-story.mp4',
  },
  '5': {
    title: 'Ancient Olive Groves',
    storyteller: 'Costas Michaelis',
    age: 74,
    fullStory: `These olive trees know my family better than I know myself. Some were planted by my great-great-grandfather in 1850, their gnarled trunks telling stories of droughts survived, storms weathered, and harvests celebrated through five generations.

In Lania, we don't just grow olives - we nurture relationships. Each tree has its own personality, its own needs. This one prefers morning sun, that one needs extra water during the dry months. After seventy years among these groves, I can tell you which tree will give the best oil just by touching its bark.

The harvest is our village's greatest celebration. Families come together, spreading nets beneath the ancient branches, using the same wooden ladders my grandfather carved. We pick by hand, never rushing, never forcing. The olives tell us when they're ready - their color deepens, their oil content peaks, and they practically fall into our hands.

Our oil mill is over 200 years old, its stone wheels worn smooth by countless harvests. We press the olives within hours of picking, preserving every drop of flavor and nutrition. The first pressing - what we call "liquid gold" - has a peppery bite that makes your throat tingle. That's how you know it's alive, full of antioxidants and love.

Every bottle of our olive oil carries the essence of Lania - the mountain air, the limestone soil, and the dedication of generations who understood that some things cannot be rushed, only respected.`,
    videoUrl: '/videos/lania-story.mp4',
  },
};

interface Props {
  villageId: string;
  onBack: () => void;
}

const StoryDetail: React.FC<Props> = ({ villageId, onBack }) => {
  const story = storyData[villageId];
  if (!story) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-rose-100 p-6">
      <div className="max-w-4xl mx-auto">
        <Button 
          onClick={onBack}
          variant="outline" 
          className="mb-6 bg-white/80 hover:bg-white"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Village
        </Button>

        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-purple-800 mb-4">{story.title}</h1>
            <div className="flex items-center justify-center space-x-6 text-gray-600">
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                <span>{story.storyteller}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>{story.age} years old</span>
              </div>
            </div>
          </div>

          {/* Story content */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl">
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              {story.fullStory.split('\n\n').map((paragraph: string, index: number) => (
                <p key={index} className="mb-6 text-justify">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Video */}
            {story.videoUrl && (
              <div className="mt-8">
                <h2 className="text-2xl font-semibold text-purple-800 mb-4">Watch the Story</h2>
                <video controls className="w-full rounded-xl shadow-lg">
                  <source src={story.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>

          <div className="mt-8 text-center">
            <Button 
              onClick={onBack}
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-3"
            >
              <Heart className="mr-2 h-5 w-5" />
              Thank you for sharing
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryDetail;
