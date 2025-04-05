const Navbar = () => {
    return (
      <div className="w-full flex justify-between items-center p-4 border-b bg-white">
        <h2 className="text-lg font-bold items-center">Dashboard / Default</h2>
        <input type="text" placeholder="Search" className="border p-2 rounded-md w-1/3" />
      </div>
    );
  };
  
  export default Navbar;
  