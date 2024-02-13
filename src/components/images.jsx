const images = {
  logo: new URL("../assets/images/logo.svg", import.meta.url).href,
  logoFooter: new URL("../assets/images/logo-footer.png", import.meta.url).href,
  homeBanner: new URL("../assets/images/home-banner.webp", import.meta.url)
    .href,
  aboutBanner: new URL("../assets/images/about-banner.webp", import.meta.url)
    .href,
  leftArrow: new URL("../assets/images/icones/arrow_left.svg", import.meta.url)
    .href,
  rightArrow: new URL(
    "../assets/images/icones/arrow_right.svg",
    import.meta.url
  ).href,
  emptyStar: new URL("../assets/images/icones/emptyStar.svg", import.meta.url)
    .href,
  filledStar: new URL("../assets/images/icones/filledStar.svg", import.meta.url)
    .href,
};

export default images;
