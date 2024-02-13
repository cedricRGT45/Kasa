

function Banner(props) {
  return (
    <div className={props.bannerClassName}>
      <img src={props.image}  alt={props.alt} className={props.imgClassName} />
      <h1 className={props.titleClassName}>{props.title} </h1>
    </div>
  );
}

export default Banner;
