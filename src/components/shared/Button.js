import propTypes from 'prop-types';

const Button = ({ children, version, type, isDisabled }) => {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
};

//button properties if no props are passed in
Button.defaultProps = {
  version: 'primary',
  type: 'button',

};

Button.propTypes = {
  children: propTypes.node.isRequired,
  version: propTypes.string,
  type: propTypes.string,
  isDisabled: propTypes.bool,
};

export default Button;
