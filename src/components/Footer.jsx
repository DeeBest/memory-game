import FooterIcon from './FooterIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="contact-icons">
        <FooterIcon
          link="mailto:simphiwedladla8@gmail.com"
          imgPath="/icons/gmail.png"
          imgAltText="gmail-icon"
          imgClass="contact-icon"
        />
        <FooterIcon
          link="https://www.linkedin.com/in/dladla-simphiwe-89061a20a/"
          imgPath="/icons/linkedin.png"
          imgAltText="linkedin-icon"
          imgClass="contact-icon"
        />
        <FooterIcon
          link="https://github.com/DeeBest"
          imgPath="/icons/github.webp"
          imgAltText="github-icon"
          imgClass="contact-icon"
        />
      </div>
      <small>Created By &copy;Simphiwe {currentYear}.</small>
    </footer>
  );
};
export default Footer;
