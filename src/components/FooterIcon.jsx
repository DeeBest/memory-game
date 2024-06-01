/* eslint-disable react/prop-types */

const FooterIcon = (props) => {
  return (
    <a href={props.link}>
      <img
        src={props.imgPath}
        alt={props.imgAltText}
        className={props.imgClass}
      />
    </a>
  );
};

export default FooterIcon;
