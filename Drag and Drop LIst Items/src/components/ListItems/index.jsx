import React, { useState } from "react";

const ListItems = ({ item }) => {
  const { id, name } = item;

  const [listItems, setListItems] = useState(item);
  const [isDragging, setIsDragging] = useState(false); // State to track if the item is being dragged
  const [draggedItem, setDraggedItem] = useState(null); // State to store the currently dragged item
  const dragOverItemIndex = useRef(null); // Ref to store the index of the item being dragged over
  const listRef = useRef(null); // Ref to the list container
  
  const onDragStart = (id) => {
    dragOverItemIndex.current = id;
  };

  const handleDragEnter = (index) => {
    dragOverItemIndex.current = index;
  };

  const handleDragEnd = () => {
    const newListItems = [...listItems];

    // const targetItem = newListItems;
}

  return (
    <li
      draggable
      onDragStart={() => onDragStart(id)}
      onDragEnter={() => handleDragEnter(id)}
    onDragEnd={handleDragEnd}
      className="bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-lg shadow-md p-4 cursor-pointer text-white hover:bg-[#f0f0e8] transition-colors duration-300"
    
    >
      {name}
    </li>
  );
};

export default ListItems;
