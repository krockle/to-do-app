import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import Todo, { TodoStatus, TodoProps } from "./todos/todo/todo";

const logo = require("./logo.svg") as string;

function App() {
  const [message, setMessage] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const [url, setUrl] = useState("/api");

  const fetchData = useCallback(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        setMessage(json.message);
        setIsFetching(false);
      })
      .catch((e) => {
        setMessage(`API call failed: ${e}`);
        setIsFetching(false);
      });
  }, [url]);

  useEffect(() => {
    setIsFetching(true);
    fetchData();
  }, [fetchData]);

  const todoProps: TodoProps[] = [
    {todoId: 1, title: 'test1', description: '', createdUtc: new Date(), dueUtc: undefined, children: [], status: TodoStatus.ARCHIVED},
    {todoId: 2, title: 'test2', description: '', createdUtc: new Date(), dueUtc: undefined, children: [], status: TodoStatus.COMPLETE},
    {todoId: 3, title: 'test3', description: '', createdUtc: new Date(), dueUtc: undefined, children: [], status: TodoStatus.INCOMPLETE}
  ]

  const todos = todoProps.map((todo) => 
    <li>
      <Todo 
        key={todo.todoId} 
        {...todo} />
    </li>)

  return (
    <div className="App">
      <ul className="fa-ul">
          {todos}
        </ul>
    </div>
  );
}

export default App;
