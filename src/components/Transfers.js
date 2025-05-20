import React, { useState } from 'react';

const Transfers = ({ balance, onTransfer }) => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const amt = parseFloat(amount);
    if (amt > 0 && amt <= balance) {
      onTransfer(recipient, amt);
      setRecipient('');
      setAmount('');
    } else {
      alert('Invalid amount or insufficient balance');
    }
  };

  return (
    <div className="form-container">
      <h2>Transfers</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Recipient"
          value={recipient}
          onChange={e => setRecipient(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          required
          min="0.01"
          step="0.01"
        />
        <button type="submit">Send Money</button>
      </form>
    </div>
  );
};

export default Transfers;
