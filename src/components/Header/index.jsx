import "./index.css";

const Header = ({ setIsLoggedIn }) => {
  return (
    <header>
      <div className="header__container">
        <h1 className="font-title-2 color-grey-4">
          <span className="color-primary">Nu</span> Kenzie
        </h1>
        <button
          onClick={() => setIsLoggedIn(false)}
          type="button"
          className="font-text-1 color-grey-4 bg-color-grey-2"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
