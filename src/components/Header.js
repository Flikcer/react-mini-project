import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "./Button";

const Header = (props) => {
  return (
    <header className="header">
      <Header1>{props.title}</Header1>
      <Button color="lightblue" text="Add" />
    </header>
  );
};

Header.defaultProps = {
  title: "TaskTracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

const Header1 = styled.h1`
  /* background-color: steelblue;
  color: #fff; */
`;

export default Header;
