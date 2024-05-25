import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import TextField from "./TextField";
import Button from "./Button";

const countryCodes = [
  { code: "+1", name: "US" },
  { code: "+91", name: "IN" },
];

const PhoneInputWithCountryCode = ({
  phoneNumber,
  countryCode,
  onPhoneNumberChange,
  onCountryCodeChange,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(
    countryCodes.find((country) => country.code === countryCode) || countryCodes[0],
  );

  useEffect(() => {
    setSelectedCountry(
      countryCodes.find((country) => country.code === countryCode) || countryCodes[0],
    );
  }, [countryCode]);

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    onCountryCodeChange(country.code);
    setIsDropdownOpen(false);
  };

  const handlePhoneNumberChange = (event) => {
    onPhoneNumberChange(event.target.value);
  };

  return (
    <div>
      <div className="flex  justify-center space-x-4">
        {/* Country Code Dropdown */}
        <div className="relative">
          <Button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            {selectedCountry.name} {selectedCountry.code}
          </Button>
          {isDropdownOpen && (
            <div
              id="dropdown-phone"
              className="absolute left-0 z-20  w-full divide-y divide-gray-200 rounded-lg border border-gray-300 bg-[#6A26EF] shadow-lg"
            >
              {countryCodes.map((country) => (
                <button
                  key={country.code}
                  className="block w-full px-4 py-2 text-left text-sm text-white hover:opacity-50 "
                  onClick={() => handleCountryChange(country)}
                >
                  {country.flag} {country.name} ({country.code})
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="flex-1">
          <TextField
            type="number"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="Phone number"
            max={10}
          />
        </div>
      </div>
    </div>
  );
};

PhoneInputWithCountryCode.propTypes = {
  phoneNumber: PropTypes.string.isRequired,
  countryCode: PropTypes.string.isRequired,
  onPhoneNumberChange: PropTypes.func.isRequired,
  onCountryCodeChange: PropTypes.func.isRequired,
};

export default PhoneInputWithCountryCode;
