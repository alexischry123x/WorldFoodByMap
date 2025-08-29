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
    fullStory: `Our family vineyard sits on the slopes above Omodos...`,
    videoUrl: '/videos/omodos-story.mp4',
  },
  '3': {
    title: 'Mountain Honey Traditions',
    storyteller: 'Eleni Georgiou',
    age: 72,
    fullStory: `The bees in Kakopetria know secrets that we humans have forgotten...`,
    videoUrl: '/videos/kakopetria-story.mp4',
  },
  '4': {
    title: 'The Rose Gardens of Platres',
    storyteller: 'Sophia Panayiotou',
    age: 69,
    fullStory: `Before sunrise, when the mountain mist still clings to the valleys...`,
    videoUrl: '/videos/platres-story.mp4',
  },
  '5': {
    title: 'Ancient Olive Groves',
    storyteller: 'Costas Michaelis',
    age: 74,
    fullStory: `These olive trees know my family better than I know myself...`,
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
