import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { villageData } from './villageData';

const VillageDetail: React.FC = () => {
  const { villageId } = useParams();
  const navigate = useNavigate();
  const village = villageId ? villageData[villageId] : undefined;

  if (!village) return <div>Village not found</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{village.name}</h1>
      <p className="mb-2">{village.villageInfo}</p>
      <p className="mb-2 font-semibold">Product: {village.product} ({village.price})</p>
      <p className="mb-4">{village.story}</p>

      <div className="flex gap-4">
        <button
          onClick={() => navigate(`/story/${village.id}`)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Read Full Story
        </button>
        <button
          onClick={() => navigate(`/purchase/${village.id}`)}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Buy Product
        </button>
      </div>
    </div>
  );
};

export default VillageDetail;
