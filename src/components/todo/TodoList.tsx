import TodoTemplate from "./TodoTemplate";
import TodoItem from "./TodoItem";
import { CgAddR } from "react-icons/cg";

export default function TodoList() {
  return (
    <TodoTemplate>
      <div className="mb-5 text-2xl font-bold text-center text-green-500">
        Todo List
      </div>
      <form className="flex px-3 py-1 mb-5 text-lg font-bold text-green-600">
        <input
          type="text"
          placeholder="새로운 할 일을 입력해주세요."
          data-testid="new-todo-input"
          className="w-full bg-gray-100 border-b-2 outline-none"
        />
        <button
          data-testid="new-todo-add-button"
          name="add"
          className="text-xl"
        >
          <span className="hidden">추가</span>
          <CgAddR />
        </button>
      </form>
      <ul>
        <TodoItem />
      </ul>
    </TodoTemplate>
  );
}
