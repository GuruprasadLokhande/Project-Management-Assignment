import { useState, useEffect } from 'react';
import List from './List';
import AddList from './AddList';

const Board = () => {
  const [lists, setLists] = useState(() => {
    const savedLists = localStorage.getItem('lists');
    return savedLists ? JSON.parse(savedLists) : [];
  });

  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(lists));
  }, [lists]);

  const addList = (title) => {
    const newList = {
      id: Date.now(),
      title,
      cards: []
    };
    setLists([...lists, newList]);
  };

  const deleteList = (listId) => {
    setLists(lists.filter(list => list.id !== listId));
  };

  const addCard = (listId, card) => {
    setLists(lists.map(list => {
      if (list.id === listId) {
        return {
          ...list,
          cards: [...list.cards, { ...card, createdAt: Date.now() }]
        };
      }
      return list;
    }));
  };

  const deleteCard = (listId, cardId) => {
    setLists(lists.map(list => {
      if (list.id === listId) {
        return {
          ...list,
          cards: list.cards.filter(card => card.id !== cardId)
        };
      }
      return list;
    }));
  };

  const moveCard = (fromListId, toListId, cardId) => {
    const fromList = lists.find(list => list.id === fromListId);
    const card = fromList.cards.find(card => card.id === cardId);
    
    setLists(lists.map(list => {
      if (list.id === fromListId) {
        return {
          ...list,
          cards: list.cards.filter(c => c.id !== cardId)
        };
      }
      if (list.id === toListId) {
        const updatedCards = [...list.cards, { ...card, createdAt: Date.now() }];
        // Sort cards in reverse chronological order
        updatedCards.sort((a, b) => b.createdAt - a.createdAt);
        return {
          ...list,
          cards: updatedCards
        };
      }
      return list;
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex gap-4 overflow-x-auto min-h-[calc(100vh-4rem)]">
        {lists.map(list => (
          <List
            key={list.id}
            list={list}
            onDeleteList={deleteList}
            onAddCard={addCard}
            onDeleteCard={deleteCard}
            onMoveCard={moveCard}
          />
        ))}
        <AddList onAddList={addList} />
      </div>
    </div>
  );
};

export default Board;