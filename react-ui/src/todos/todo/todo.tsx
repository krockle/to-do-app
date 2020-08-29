import React, { Props } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faMinusSquare,
  faSquare,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import "./todo.css";

export type TodoProps = {
  todoId: number;
  title: string;
  description: string;
  createdUtc: Date;
  dueUtc?: Date;
  children: TodoProps[];
  status: TodoStatus;
};

export enum TodoStatus {
  COMPLETE,
  INCOMPLETE,
  ARCHIVED,
}

function getIcon(todoStatus: TodoStatus): IconDefinition {
  switch (todoStatus) {
    case TodoStatus.INCOMPLETE: {
      return faSquare;
    }
    case TodoStatus.COMPLETE: {
      return faCheckSquare;
    }
    case TodoStatus.ARCHIVED: {
      return faMinusSquare;
    }
  }
}

function Todo(props: TodoProps): JSX.Element {
  const { title, status } = props;

  return (
    <div className="todo">
      <FontAwesomeIcon icon={getIcon(status)} className="todo-icon" listItem />
      <div className="todo-title">{title}</div>
    </div>
  );
}

export default Todo;
