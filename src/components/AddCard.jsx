import { useState } from 'react';

const AddCard = ({ onAdd }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd({
        id: Date.now(),
        title: title.trim(),
        description: description.trim(),
        createdAt: Date.now()
      });
      setTitle('');
      setDescription('');
      setIsAdding(false);
    }
  };

  if (!isAdding) {
    return (
      <button
        onClick={() => setIsAdding(true)}
        className="w-full mt-3 p-2 text-gray-600 hover:bg-gray-300 rounded text-sm"
      >
        + Add Card
      </button>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-3">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter card title"
        className="w-full p-2 rounded mb-2 text-sm"
        autoFocus
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter card description"
        className="w-full p-2 rounded mb-2 text-sm"
        rows="3"
      />
      <div className="flex gap-2">
        <button
          type="submit"
          className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
        >
          Add
        </button>
        <button
          type="button"
          onClick={() => setIsAdding(false)}
          className="px-3 py-1 rounded text-sm hover:bg-gray-300"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AddCard;