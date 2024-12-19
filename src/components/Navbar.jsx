import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <nav className="fixed top-4 px-8 w-full backdrop-blur-md flex z-50 bg-black text-white">
      <a
        href="/"
        className={`w-1/2 text-3xl bg-transparent ${
          location.pathname !== "/" ? "" : "invisible"
        }`}
      >
        Firelink
      </a>
      <div className="w-1/2 flex justify-end space-x-5 items-center bg-transparent">
        <a href="https://edenxrana.vercel.app/" target="_blank">
          Portfolio ↗
        </a>
        <a href="https://github.com/edenx909" target="_blank">
          Github ↗
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
