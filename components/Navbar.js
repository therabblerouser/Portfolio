const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="container">
          <div className="navbar-alignment">
            <a href="/" className="title">
              joemccann.dev
            </a>
            <div className="section-navs">
              <a href="#">About</a>
              <a href="/projects">Projects</a>
              <button>
                <i className="material-icons">brightness_high</i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <style jsx>{`
        nav {
          background-color: #202020;
          box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.2);
        }
        .container {
          width: 100%;
          max-width: 700px;
          margin: 0 auto;
          padding: 0 1.4em;
        }

        .navbar-alignment {
          display: flex;
          height: 55px;
          width: 100%;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.5em;
        }

        .section-navs {
          display: flex;
          align-items: center;
        }

        .title {
          color: #fff;
          font-size: 20px;
          font-weight: 300;
        }

        a {
          background-color: transparent;
          color: #fff;
          font-size: 14.4px;
          margin-left: 10px;
        }

        button {
          background-color: transparent;
          border: none;
          cursor: pointer;
          margin-left: 10px;
        }

        .material-icons {
          font-size: 1.3rem;
          color: #fff;
        }
      `}</style>
    </div>
  );
};

export default Navbar;

// body.dark {
//   --bg-color: #202020;
//   --font-color-body: #fff;
//   --tag-bg: #131313;
//   --tag-color: #f2f2f2;
//   --contact-bg: #1c1c1c;
//   --contact-color: #fff;
//   --form-bg: #131313;
//   --form-button-bg: #0e0e0e;
//   --form-button-color: var(--font-color-accent);
//   --hr-bg: #fff;
//   --blockquote-color: hsla(0,0%,100%,0.8);
// }
