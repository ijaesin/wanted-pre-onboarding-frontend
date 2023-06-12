import React, { useCallback } from "react";
import { BiPencil } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import { TodoParams } from "../../types/todo";
import { updateTodo, deleteTodo } from "../../api/todo/todo";

export default function TodoItem({ todoItem }: { todoItem: TodoParams }) {
  const onChangeCheck = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      updateTodo(todoItem.id, todoItem.todo, !todoItem.isCompleted);
    },
    [todoItem]
  );

  const onRemove = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      deleteTodo(todoItem.id);
    },
    [todoItem]
  );

  return (
    <li className="flex justify-between px-3 py-1 mb-2 text-lg font-bold text-green-600 rounded-lg">
      <div>
        <label className="">
          <input
            type="checkbox"
            onChange={onChangeCheck}
            checked={todoItem.isCompleted}
          />
          <span className="w-full mx-4">{todoItem.todo}</span>
        </label>
      </div>
      <div>
        <button className="mr-2 " data-testid="modify-button" name="modify">
          <span className="hidden">수정</span>
          <BiPencil />
        </button>
        <button data-testid="delete-button" name="delete" onClick={onRemove}>
          <span className="hidden">삭제</span>
          <RiDeleteBinLine />
        </button>
      </div>
    </li>
  );
}
