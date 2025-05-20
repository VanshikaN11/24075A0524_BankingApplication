import React, { useState } from 'react';

const BalanceEnquiry = ({ balance }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [verified, setVerified] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation for demo purposes
    if (cardNumber.length === 16 && expiryDate && cvv.length === 3) {
      setVerified(true);
    } else {
      alert('Please enter valid card details.');
    }
  };

  if (!verified) {
    return (
      <div className="form-container">
        <h2>Balance Enquiry - Enter Card Details</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Card Number (16 digits)"
            value={cardNumber}
            onChange={e => setCardNumber(e.target.value)}
            maxLength={16}
            required
          />
          <input
            type="text"
            placeholder="Expiry Date (MM/YY)"
            value={expiryDate}
            onChange={e => setExpiryDate(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="CVV (3 digits)"
            value={cvv}
            onChange={e => setCvv(e.target.value)}
            maxLength={3}
            required
          />
          <button type="submit">Check Balance</button>
        </form>
      </div>
    );
  }

  return (
    <div className="balance-container">
      <h2>Balance Enquiry</h2>
      <p>Your current balance is: <strong>${balance.toFixed(2)}</strong></p>
    </div>
  );
};

export default BalanceEnquiry;


