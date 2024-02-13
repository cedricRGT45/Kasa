import Banner from "../components/Banner";
import Card from "../components/Card";
import images from "../components/images";

const Home = () => {
  return (
    <div>
      <Banner
        image={images.homeBanner}
        bannerClassName="banner banner__home"
        imgClassName="banner__img banner__home-img"
        titleClassName="banner__home-title"
        title="Chez vous,
partout et ailleurs"
        alt="Photo de falaises en bord de mer"
      />
      <Card />
    </div>
  );
};

export default Home;
