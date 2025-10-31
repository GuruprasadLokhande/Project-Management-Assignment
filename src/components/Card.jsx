const Card = ({ card, listId, onDelete }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData(
      'text/plain',
      JSON.stringify({ fromListId: listId, cardId: card.id })
    );
  };

  const handleDragEnd = (e) => {
    if (e.dataTransfer.dropEffect === 'none') {
      // Card was dropped outside a valid drop target
      // No action needed as the card will stay in its original position
    }
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      className="bg-white rounded p-3 shadow cursor-move"
    >
      <div className="flex justify-between items-start">
        <h3 className="font-medium">{card.title}</h3>
        <button
          onClick={onDelete}
          className="text-gray-400 hover:text-red-500 text-sm"
        >
          ✕
        </button>
      </div>
      <p className="text-gray-600 text-sm mt-2">{card.description}</p>
      <p className="text-gray-400 text-xs mt-2">
        {new Date(card.createdAt).toLocaleString()}
      </p>
    </div>
  );
};

export default Card;