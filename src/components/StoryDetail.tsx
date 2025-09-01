import React from 'react';
import { ArrowLeft, Heart, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { villageData } from './villageData';

interface Props {
  villageId: string;
  onBack: () => void;
}

const StoryDetail: React.FC<Props> = ({ villageId, onBack }) => {
  const village = villageData[villageId];
  if (!village) return null;

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
            <h1 className="text-4xl font-bold text-purple-800 mb-4">{village.name}: {village.product}</h1>
            <div className="flex items-center justify-center space-x-6 text-gray-600">
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                <span>{village.storyteller}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>{village.age} years old</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl">
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              {village.fullStory.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6 text-justify">{paragraph}</p>
              ))}
            </div>

            {village.videoUrl && (
              <div className="mt-8">
                <h2 className="text-2xl font-semibold text-purple-800 mb-4">Watch the Story</h2>
                <video controls className="w-full rounded-xl shadow-lg">
                  <source src={village.videoUrl} type="video/mp4" />
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
