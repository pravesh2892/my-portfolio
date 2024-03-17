const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social">
          <a
            aria-label="linkedin"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/pravesh-meena-042b5210a/"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/pravesh2892"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
        <div className="resume">
          {" "}
          <a href="https://drive.google.com/file/d/1HAp0r-3vLxHk7nAyDkc0jK3LYyqetP_m/view?usp=sharing" download="">
            <span>
              <i className="fa-solid fa-file"></i>
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
