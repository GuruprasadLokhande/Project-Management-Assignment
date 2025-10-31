import { useState } from 'react';
import Card from './Card';
import AddCard from './AddCard';

const List = ({ list, onDeleteList, onAddCard, onDeleteCard, onMoveCard }) => {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const { fromListId, cardId } = JSON.parse(e.dataTransfer.getData('text/plain'));
    if (fromListId !== list.id) {
      onMoveCard(fromListId, list.id, cardId);
    }
  };

  return (
    <div
      className={`flex-shrink-0 h-[500px] mt-3 w-72 bg-gray-100 rounded-lg p-4 flex flex-col justify-between ${
        isDragOver ? 'ring-2 ring-blue-500' : ''
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {/* Header */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <h2 className="text-lg font-semibold text-gray-900">{list.title}</h2>
            <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-blue-600 bg-blue-100 rounded-full">
              {list.cards.length}
            </span>
          </div>
          <button
            onClick={() => onDeleteList(list.id)}
            className="text-gray-500 hover:text-blue-500"
          >
            ✕
          </button>
        </div>

        {/* Cards */}
        <div className="space-y-2 overflow-y-auto max-h-[370px] pr-1">
          {list.cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              listId={list.id}
              onDelete={() => onDeleteCard(list.id, card.id)}
            />
          ))}
        </div>
      </div>

      {/* Add Card Button fixed at bottom */}
      <div className="mt-3">
        <AddCard onAdd={(cardData) => onAddCard(list.id, cardData)} />
      </div>
    </div>
  );
};

export default List;
