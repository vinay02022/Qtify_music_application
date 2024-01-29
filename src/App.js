import "./App.css";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import AlbumCotainer from "./Components/AlbumCotainer";
import API from "./utils/contants";

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <AlbumCotainer apiurl={API.top_album} title="Top Albums" />
      <AlbumCotainer apiurl={API.new_album} title="New Albums" />
    </div>
  );
}

export default App;
