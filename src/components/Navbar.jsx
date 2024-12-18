const Navbar = () => {
  return (
    <nav className="fixed top-0 p-4  w-full backdrop-blur-md flex">
      <a href="/" className="w-1/2  text-3xl">
        Firelink
      </a>
      <div className="w-1/2 flex justify-end space-x-5 items-center">
        <a href="https://edenxrana.vercel.app/" target="_blank">
          Portfolio
        </a>
        <a href="https://github.com/edenx909" target="_blank">
          Github
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
