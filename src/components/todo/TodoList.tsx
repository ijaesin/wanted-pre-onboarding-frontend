import TodoTemplate from "./TodoTemplate";
import TodoItem from "./TodoItem";
import { CgAddR } from "react-icons/cg";
import { getTodos, createTodo } from "../../api/todo/todo";
import React, { useEffect, useCallback, useState } from "react";
import { TodoParams } from "../../types/todo";

export default function TodoList() {
  const [todos, setTodos] = useState<TodoParams[]>([]);
  const [newTodo, setNewTodo] = useState("");

  const onChangeNewTodo = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setNewTodo(e.target.value);
    },
    []
  );

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      createTodo(newTodo);
    },
    [newTodo]
  );

  useEffect(() => {
    getTodos()
      .then((data: TodoParams[]) => {
        setTodos([...data]);
      })
      .catch((e) => {
        throw new Error(e);
      });
  }, [todos]);

  return (
    <TodoTemplate>
      <div className="mb-5 text-2xl font-bold text-center text-green-500">
        Todo List
      </div>
      <form
        onSubmit={onSubmit}
        className="flex px-3 py-1 mb-5 text-lg font-bold text-green-600"
      >
        <input
          type="text"
          name="new-todo"
          placeholder="새로운 할 일을 입력해주세요."
          data-testid="new-todo-input"
          className="w-full bg-gray-100 border-b-2 outline-none"
          value={newTodo}
          onChange={onChangeNewTodo}
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
        {todos.length !== 0 &&
          todos.map((todoItem) => (
            <TodoItem key={todoItem.id} todoItem={todoItem} />
          ))}
      </ul>
    </TodoTemplate>
  );
}
