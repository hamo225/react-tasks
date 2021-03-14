import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => {
    alert("Hello");
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={onClick}></Button>
    </header>
  );
};

// Deault props
Header.defaultProps = {
  title: "Task Tracker",
};

// Prop types validation
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// css in JS
// const headerstyle = {
//   color: "orangered",
//   backgroundColor: "blue",
// };

export default Header;
