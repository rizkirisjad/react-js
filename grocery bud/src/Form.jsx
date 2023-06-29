/** @format */

import { useState } from 'react';
import { toast } from 'react-toastify';

const Form = ({ addItem }) => {
  const [newItemName, setNewItemNAme] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItemName) {
      toast.error('please provide value');
      return;
    }
    addItem(newItemName);
    setNewItemNAme('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItemName}
          onChange={(event) => setNewItemNAme(event.target.value)}
        />
        <button type="submit" className="btn">
          add item
        </button>
      </div>
    </form>
  );
};
export default Form;
