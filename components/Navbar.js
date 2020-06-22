const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="container">
          <div>
            <a href="/" className="title">
              joemccann.dev
            </a>
            <ul className="right sectionNavs">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
              <li>
                <button>
                  <i className="material-icons">brightness_high</i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .container {
          width: 100%;
          max-width: 700px;
          margin: 0 auto;
          padding: 0 1.4em;
        }

        nav {
          background-color: #202020;
          box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.2);
        }

        .title {
          color: #fff;
          font-size: 20px;
          font-weight: 300;
        }

        ul li button {
          height: 100%;
        }

        ul li button i {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        ul li a {
          background-color: transparent;
          color: #fff;
          font-size: 14.4px;
        }

        button {
          background-color: transparent;
          border: none;
          cursor: pointer;
        }

        .material-icons {
          font-size: 1.3rem;
          color: #fff;
        }

        @media (min-width: 576px) {
          .material-icons {
          }
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
