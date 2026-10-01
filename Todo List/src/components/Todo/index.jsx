import { useEffect, useState } from "react";
import CreateTodoListItems from "../TodoItems";
import { v4 as uuidv4 } from "uuid";
import "./index.css";

const TodoList = () => {
  const getTodoList = JSON.parse(localStorage.getItem("todoList"));
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState(getTodoList || []);

  const onClickAddTodoTask = (event) => {
    event.preventDefault();

    if (input === "") {
      return;
    }

    const newTodoList = {
      id: uuidv4(),
      input,
    };

    setTodoList((prevState) => [...prevState, newTodoList]);
    setInput("");
  };

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const onChangeAddTodoUserInput = (event) => {
    setInput(event.target.value);
  };

  const onDeleteTodoItem = (todoId) => {
    const deleteTodoList = todoList.filter(
      (eachTodo) => eachTodo.id !== todoId
    );
    setTodoList(deleteTodoList);
  };

  return (
    <div className="bg-[#1A1A2E] min-h-screen max-w-full">
      <div className="flex justify-center py-[50px]">
        <div className="todo-container bg-[#222244] w-full max-w-[800px] p-[30px_35px] rounded-[10px]">
          <h1 className="todo-title font-[750] text-white text-center">
            Todos
          </h1>
          <form>
            <div className="flex flex-col">
              <label
                className="font-[690] text-white create-task-title my-[11px]"
                id="todoItemAddInputField"
              >
                Create <span className="font-[450] text-[#00C9A7]">Task</span>
              </label>
              <input
                placeholder="Enter Your Task here..."
                className="todo-add-input  max-w-full bg-[#2E2E4D] p-[15px_25px] border-none outline-none rounded-[8px] font-[400] text-white"
                type="text"
                id="todoItemAddInputField"
                onChange={onChangeAddTodoUserInput}
              />
            </div>
            <button
              type="submit"
              className= "add-task-btn my-[16px] cursor-pointer  w-full text-white font-[500]  rounded-[8px]"
              onClick={onClickAddTodoTask}
            >
              Add Task
            </button>
          </form>

          <div className="todo-list-wrapper">
            <h1 className="font-[600] text-white add-todo-list-title my-[11px]">
              My <span className="font-[450] text-[#00C9A7]">Tasks</span>
            </h1>
            <ul className="todo-list-container flex flex-col gap-[16px]">
              {todoList.map((eachTodoListItem) => (
                <CreateTodoListItems
                  eachTodoListItem={eachTodoListItem}
                  key={eachTodoListItem.id}
                  onDeleteTodoItem={onDeleteTodoItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
