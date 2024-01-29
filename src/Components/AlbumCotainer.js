import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const AlbumCotainer = ({ apiurl, title }) => {
  const [topAlbum, setTopAlbum] = useState([]);
  console.log(title);
  const performAPICall = async (url) => {
    try {
      const response = await axios.get(url);
      // console.log(response.data);
      setTopAlbum(response.data);
    } catch (error) {
      console.log("There is some error fetching data from top api");
    }
  };

  useEffect(() => {
    performAPICall(apiurl);
  }, []);

  return (
    <>
      <h1 className="font-Poppins text-white text-3xl mt-5 ml-5">{title}</h1>
      <div className="flex flex-row flex-wrap justify-left">
        {topAlbum.length
          ? topAlbum.map((albumDetails, idx) => (
              <Card albumDetails={albumDetails} key={albumDetails.id} />
            ))
          : null}
      </div>
    </>
  );
};

export default AlbumCotainer;
