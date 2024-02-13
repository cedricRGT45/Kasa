import Banner from "../components/Banner";
import images from "../components/images";

const Apropos = () => {
  return (
    <div>
      <Banner
        image={images.aboutBanner}
        bannerClassName="banner banner__about"
        imgClassName="banner__img banner__about-img "
      />
    </div>
  );
};

export default Apropos;
