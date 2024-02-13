import Navigation from "./Navigation";
import images from "./images";



function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={images.logo} alt="logo de Kasa"></img>
     <Navigation />
    </div>
  );
}

export default Header;
