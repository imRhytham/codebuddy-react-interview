import { PropTypes } from "prop-types";

const TextField = ({
  name,
  type,
  value,
  onChange,
  label,
  placeholder,
  required,
  error,
  ...props
}) => {
  return (
    <div>
      <label htmlFor={name} className="mb-2 inline-block font-bold text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="block
        			w-full
        			rounded
        			border
        			border-solid
        			border-gray-300
     			 bg-white
       		   bg-clip-padding px-3
        			py-1.5 text-base font-normal
        			text-gray-700
        			transition
        			ease-in-out
       		 focus:border-[#6A62E6] focus:bg-white focus:text-gray-700 focus:outline-none"
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        {...props}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};

TextField.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired | PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.string,
};

export default TextField;
