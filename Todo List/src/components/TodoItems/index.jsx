import { parse } from "uuid";
import "./index.css";
import { useEffect, useState } from "react";

const CreateTodoListItems = (props) => {
  const { eachTodoListItem, onDeleteTodoItem } = props;
  const { id, input } = eachTodoListItem;

  const [isChecked, setIsChecked] = useState(false);
  const onChangeApplyLineThrough = () => {
    setIsChecked(!isChecked);
  };

  const onDeleteTodoItemButton = () => {
    onDeleteTodoItem(id);
  };

  // useEffect(() => {
  //   localStorage.setItem("isChecked", JSON.stringify(isChecked));
  // }, [isChecked]);

  return (
    <li className="todo-list-item bg-[#2E2E4D] p-[10px_14px] rounded-[18px] ">
      <div className="checkbox-input">
        <input
          className="border-none h-[25px] w-[25px] mx-[8px]"
          type="checkbox"
          id={id}
          onChange={onChangeApplyLineThrough}
        />
      </div>
      <div className="label-container flex items-center justify-between">
        <label
          htmlFor={id}
          className={`label-todo-item font-[450] ${
            isChecked && "line-through text-[#7C7C8A]"
          }`}
        >
          {input}
        </label>
        <button className="delete-button" onClick={onDeleteTodoItemButton}>
          <i class="fa-solid fa-trash-arrow-up delete-icon"></i>
        </button>
      </div>
    </li>
  );
};

export default CreateTodoListItems;
