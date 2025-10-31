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
      className={`flex-shrink-0 w-72 bg-gray-200 rounded-lg p-4 ${
        isDragOver ? 'bg-gray-300' : ''
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">{list.title}</h2>
        <button
          onClick={() => onDeleteList(list.id)}
          className="text-gray-500 hover:text-red-500"
        >
          ✕
        </button>
      </div>

      <div className="space-y-2">
        {list.cards.map(card => (
          <Card
            key={card.id}
            card={card}
            listId={list.id}
            onDelete={() => onDeleteCard(list.id, card.id)}
          />
        ))}
      </div>

      <AddCard onAdd={(cardData) => onAddCard(list.id, cardData)} />
    </div>
  );
};

export default List;