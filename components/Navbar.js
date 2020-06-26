const Navbar = ({ darkMode, toggleMode }) => {
  return (
    <>
      <nav>
        <div className="container">
          <div className="navbar-alignment">
            <a href="/" className="title">
              joemccann.dev
            </a>
            <div className="section-navs">
              <a href="#">About</a>
              <a href="/projects">Projects</a>
              <button onClick={toggleMode}>
                <i className="material-icons">
                  {!darkMode ? 'brightness_2' : 'brightness_high'}
                </i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <style jsx>{`
        nav {
          background-color: var(--bg-color);
          box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.2);
          position: fixed;
          width: 100%;
          top: 0 !important;
          z-index: 1000;
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
          color: var(--font-color);
          font-size: 20px;
          font-weight: 300;
        }

        a {
          background-color: transparent;
          color: var(--font-color);
          font-size: 14.4px;
          margin-left: 10px;
        }

        button {
          background-color: transparent;
          border: none;
          cursor: pointer;
          margin-left: 6px;
        }

        button:focus {
          outline: none;
          box-shadow: none;
        }

        .material-icons {
          font-size: 1.3rem;
          color: var(--font-color);
        }
      `}</style>
    </>
  );
};

export default Navbar;
