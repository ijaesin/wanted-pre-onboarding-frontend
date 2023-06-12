import React, { useCallback, useState } from "react";
import { BiPencil } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import { TiCancel } from "react-icons/ti";
import { TodoParams } from "../../types/todo";
import { updateTodo, deleteTodo } from "../../api/todo/todo";

export default function TodoItem({ todoItem }: { todoItem: TodoParams }) {
  const [modifyMode, setModifyMode] = useState(false);
  const [modified, setModified] = useState(todoItem.todo);

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

  const onModifyMode = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      setModifyMode(!modifyMode);
    },
    [modifyMode]
  );

  const onChangeTodo = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setModified(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      updateTodo(todoItem.id, modified, todoItem.isCompleted);
      setModifyMode(false);
    },
    [todoItem, modified]
  );

  return (
    <li className="px-3 py-1 mb-2 text-lg font-bold text-green-600 rounded-lg ">
      {modifyMode ? (
        <div>
          <form className="flex justify-between">
            <label>
              <input
                type="checkbox"
                onChange={onChangeCheck}
                checked={todoItem.isCompleted}
              />
              <input
                type="text"
                name="todo"
                className="mx-4 bg-gray-100 border-b-2 outline-none"
                autoFocus
                onChange={onChangeTodo}
                value={modified}
              />
            </label>
            <div>
              <button
                className="mr-2 "
                data-testid="submit-button"
                name="modify"
                onClick={onSubmit}
              >
                <span className="hidden">제출</span>
                <BiPencil />
              </button>
              <button
                data-testid="cancel-button"
                name="delete"
                onClick={onModifyMode}
              >
                <span className="hidden">취소</span>
                <TiCancel />
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="flex justify-between">
          <label className="cursor-pointer">
            <input
              type="checkbox"
              onChange={onChangeCheck}
              checked={todoItem.isCompleted}
            />
            <span className="w-full mx-4">{todoItem.todo}</span>
          </label>
          <div>
            <button
              className="mr-2 "
              data-testid="modify-button"
              name="modify"
              onClick={onModifyMode}
            >
              <span className="hidden">수정</span>
              <BiPencil />
            </button>
            <button
              data-testid="delete-button"
              name="delete"
              onClick={onRemove}
            >
              <span className="hidden">삭제</span>
              <RiDeleteBinLine />
            </button>
          </div>
        </div>
      )}
    </li>
  );
}
