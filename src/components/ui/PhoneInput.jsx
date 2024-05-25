import { PropTypes } from "prop-types";
import TextField from "./TextField";

const countryCodes = [
  { code: "+1", name: "US" },
  { code: "+91", name: "IN" },
];

const PhoneInputWithCountryCode = ({
  phoneNumber,
  countryCode,
  onPhoneNumberChange,
  onCountryCodeChange,
  error,
}) => {
  const handleCountryChange = (country) => {
    onCountryCodeChange(country.code);
  };

  const handlePhoneNumberChange = (event) => {
    onPhoneNumberChange(event.target.value);
  };

  return (
    <div>
      <div className="flex  justify-center space-x-4">
        {/* Country Code Dropdown */}
        <div className="flex space-x-2">
          <select
            value={countryCode}
            onChange={handleCountryChange}
            className="rounded border bg-[#6A26EF] px-4 py-2 text-white outline-none "
          >
            {countryCodes.map((country) => (
              <option key={country.code} value={country.code}>
                {country.code} {country.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          <TextField
            type="number"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="Phone number"
            max={10}
            error={error}
          />
        </div>
      </div>
      {/* {error && <p className="text-xs text-red-500">{error}</p>} */}
    </div>
  );
};

PhoneInputWithCountryCode.propTypes = {
  phoneNumber: PropTypes.string.isRequired,
  countryCode: PropTypes.string.isRequired,
  onPhoneNumberChange: PropTypes.func.isRequired,
  onCountryCodeChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default PhoneInputWithCountryCode;
