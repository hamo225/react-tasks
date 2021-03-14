import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <header>
      <h1>Task Tracker</h1>
      <h1>This is a default prop {title}</h1>
      <h1>{title}</h1>
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
export default Header;
