// import Logo from "./Logo";
// const Navbar = () => {
//   return (
//     <div className="flex bg-[#34C94B] h-[68px] justify-around items-center">
//       <Logo />
//       {/* <div className="w-[40%] relative"> */}
//       <input
//         placeholder="Search a album of your choice"
//         className="h-10 w-[40%] rounded-xl p-5 border-2 border-black border-solid"
//         // value="Sample Text"
//       />
//       {/* <input
//           type="button"
//           value="🔍"
//           className="absolute right-2 top-2 hover:cursor-pointer"
//         />
//       </div> */}
//       <button className="bg-[#121212] text-[#34C94B] font-Poppins rounded-xl p-3">
//         Give Feedback
//       </button>
//     </div>
//   );
// };

// export default Navbar;
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="navbar bg-[#34C94B] h-[68px] flex justify-between items-center">
      <div className="logo ml-4 flex items-center">
        {" "}
        {/* Adjust margin as needed */}
        <Logo />
      </div>
      <input
        placeholder="Search an album of your choice"
        className="search-input h-10 w-[40%] rounded-xl p-5 border-2 border-black border-solid"
      />
      <button className="feedback-btn bg-[#121212] text-[#34C94B] font-Poppins rounded-xl p-3 mr-4">
        {" "}
        {/* Adjust margin */}
        Give Feedback
      </button>
    </div>
  );
};

export default Navbar;
