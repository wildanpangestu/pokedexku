import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import { FaArrowLeft } from "react-icons/fa";

const Error = (props) => {
  const { img } = props;
  const { message } = props;
  const { backHome } = props;

  const history = useHistory();

  const handlerBackHome = () => {
    history.push("/pokedexku");
  };

  return (
    <>
      <section className="error-content">
        <p className="error-content__message">{message}</p>
        <img
          className="error-content__img"
          src={img}
          alt="Referensi Pokemon pada kesalahan pada halaman"
        />
        {backHome && (
          <button
            type="button"
            className="error-content__button"
            onClick={handlerBackHome}
          >
            <FaArrowLeft /> <p> Kembali ke Beranda Pokedexku </p>
          </button>
        )}
      </section>
    </>
  );
};

Error.defaultProps = {
  img: null,
  message: "Error Page",
  backHome: false,
};

Error.propTypes = {
  img: PropTypes.node,
  message: PropTypes.node,
  backHome: PropTypes.bool,
};

export default Error;
