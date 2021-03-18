import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      ></Button>
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
