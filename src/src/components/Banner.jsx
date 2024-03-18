function Banner(props) {
  return (
    //  Props allowing to personalize the fiels in  order to personalize the banner depending on the page it is called
    <div className={props.bannerClassName}>
      <img src={props.image} alt={props.alt} className={props.imgClassName} />
      <h1 className={props.titleClassName}>{props.title} </h1>
    </div>
  );
}

export default Banner;
