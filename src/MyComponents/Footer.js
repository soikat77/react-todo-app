import React from "react";
import PropTypes from "prop-types";

export default function Footer(props) {
  return (
    <footer className="footer mt-auto bg-light p-2">
      <div className="container">
        <p className="text-center">
          Made with_
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-heart-fill"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
            />
          </svg>
          _by {props.userName}
        </p>
      </div>
    </footer>
  );
}
Footer.defaultProps = {
  userName: "Your Name",
};

Footer.prototype = {
  userName: PropTypes.string,
};
