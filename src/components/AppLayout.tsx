import GoogleMapsCyprus from "./GoogleMapsCyprus";

const AppLayout: React.FC = () => {
  return (
    <div>
      <header className="p-4 flex justify-between items-center bg-white shadow">
        <h1 className="text-xl font-bold">🌎 World Food Map</h1>
      </header>

      <div className="flex flex-col md:flex-row max-w-6xl mx-auto my-6">
        {/* Left description */}
        <div className="md:w-1/5 p-4 bg-gradient-to-b from-blue-400 via-blue-300 to-green-300 text-white rounded-l-2xl text-center mb-4 md:mb-0">
          <h2 className="font-bold mb-2">Handpicked Quality</h2>
          <p>All items are personally selected by us directly from the villages, ensuring the best quality and proper quantity.</p>
        </div>

        {/* Map */}
        <div className="md:flex-1 md:mx-4">
          <GoogleMapsCyprus onVillageClick={(village) => console.log(village)} />
        </div>

        {/* Right description */}
        <div className="md:w-1/5 p-4 bg-gradient-to-b from-blue-400 via-blue-300 to-green-300 text-white rounded-r-2xl text-center mt-4 md:mt-0">
          <h2 className="font-bold mb-2">Authentic Experience</h2>
          <p>Visit villages virtually, learn their stories, and get products crafted by local artisans.</p>
        </div>
      </div>
    </div>
  );
};
