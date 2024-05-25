import { PropTypes } from "prop-types";

const Button = ({ children, onClick, disabled, ...props }) => {
  return (
    <div>
      <button
        className="inline-block 
				rounded bg-[#6A62E6] 
			   px-6 
			   py-2
			   text-sm 
				font-medium uppercase 
				leading-tight text-white 
				shadow-md 
				transition duration-150 
				ease-in-out hover:bg-[#6A26EF] hover:shadow-lg 
				focus:bg-[#6A26EF] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#6A26EF] active:shadow-lg
        disabled:cursor-not-allowed disabled:opacity-50"
        onClick={onClick}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.element,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default Button;
