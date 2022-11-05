import React, { FC } from "react";
import PropTypes from "prop-types";
// import "./GlobalStyle.css";

declare interface GlobalStylesProps {
  children?: JSX.Element | JSX.Element[];
}
const GlobalStyles: FC<GlobalStylesProps> = ({ children }) => {
  return <>{children}</>;
};

export default GlobalStyles;
GlobalStyles.propTypes = {
  children: PropTypes.element.isRequired,
};
