import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__draw">
        <div className="footer__draw__circle1">
          <div className="footer__draw__circle1__circle2">
            <div className="footer__draw__circle1__circle2__inner" />
          </div>
        </div>
        <div className="footer__draw__line" />
      </div>

      <section className="footer__copyright">
        <p>
          {" "}
          Data Supply by&nbsp;
          <a
            href="https://github.com/mazipan/graphql-pokeapi"
            target="_blank"
            rel="noopener noreferrer"
          >
            GraphQL PokeApi
          </a>
        </p>
      </section>
    </footer>
  );
};

export default Footer;
