const Navbar = () => {
    return (
      <div className="flex justify-between items-center w-full max-w-5xl px-4 py-6 mx-auto">
        <button className="text-gray-600 hover:text-black font-semibold px-4 py-2 border border-gray-300 rounded-md shadow-sm hover:bg-gray-100">
          &lt; Prev
        </button>
        <button className="text-gray-600 hover:text-black font-semibold px-4 py-2 border border-gray-300 rounded-md shadow-sm hover:bg-gray-100">
          Next &gt;
        </button>
      </div>
    );
  };
  
  export default Navbar;
  