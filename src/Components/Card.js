const Card = ({ albumDetails }) => {
  return (
    <div className="flex flex-col">
      <div className="bg-white h-[300px] w-[200px] flex flex-col rounded-lg m-2 ">
        <img 
          src={albumDetails.image}
          alt="Bollywood Hits"
          className="rounded-t-lg h-[250px]"
        />
        <button className="text-white font-Poppins bg-black p-2 w-[105px] rounded-3xl mt-1 ml-2">
          {albumDetails.follows}
        </button>
      </div>
      <p className="text-white font-Poppins">{albumDetails.title}</p>
    </div>
  );
};

export default Card;
