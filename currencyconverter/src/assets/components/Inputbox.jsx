import { useId } from "react";
import PropTypes from "prop-types"; // If using PropTypes

const Inputbox = ({
  label,
  amount,
  setAmount,
  currency = "usd",
  setCurrency,
  currencyOptions = [],
  className = "",
}) => {
  const amountId = useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        {label && (
          <label htmlFor={amountId} className="text-black/40 mb-2 inline-block">
            {label}
          </label>
        )}
        <input
          id={amountId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount && setAmount(e.target.value)}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={currency}
          onChange={(e) => setCurrency && setCurrency(e.target.value)}
        >
          {currencyOptions.map((option) => (
            <option key={option} value={option}>
              {option.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

// If using PropTypes for type checking
Inputbox.propTypes = {
  label: PropTypes.string,
  amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  setAmount: PropTypes.func.isRequired,
  currency: PropTypes.string,
  setCurrency: PropTypes.func.isRequired,
  currencyOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
};

export default Inputbox;
