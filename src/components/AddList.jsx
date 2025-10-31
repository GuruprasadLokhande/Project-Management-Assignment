import { useState } from 'react';

const AddList = ({ onAddList }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAddList(title.trim());
      setTitle('');
      setIsAdding(false);
    }
  };

  if (!isAdding) {
    return (
      <button
        onClick={() => setIsAdding(true)}
        className="flex-shrink-0 w-72 bg-gray-200 rounded-lg p-4 hover:bg-gray-300 text-gray-600"
      >
        + Add List
      </button>
    );
  }

  return (
    <div className="flex-shrink-0 w-72 bg-gray-200 rounded-lg p-4">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter list title"
          className="w-full p-2 rounded mb-2"
          autoFocus
        />
        <div className="flex gap-2">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
          >
            Add
          </button>
          <button
            type="button"
            onClick={() => setIsAdding(false)}
            className="px-4 py-1 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddList;