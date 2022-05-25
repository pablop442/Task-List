import React, { useState, useEffect } from "react";
import Item from "./Item";
import Form from "./Form";

const ToDoList = () => {
  //States
  const [input, setInput] = useState("");
  const [todos, setTodo] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // UseEffect

 
  useEffect(() => {
    getList();
  }, []);

 
  
  useEffect(() => {
    filterHandler();
    saveList();
  }, [todos, status]);

  

  //Save and get data to local storage

  const saveList = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getList = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let allTodos = JSON.parse(localStorage.getItem("todos"));
        if(allTodos.length === 0){
          return null
        }
      setTodo(allTodos);
      console.log(allTodos)
      
    }
  };

  //Functions
  const inputTextChanger = (ev) => {
    setInput(ev.target.value);
  };

  const addTodo = (text) => {
    if (text !== "") {
      setTodo([
        ...todos,
        {
          label: input,
          done: false,
          id: Math.random() * 1000,
          important: false,
        },
      ]);
      setInput("");
    } else {
      alert("Please type something");
    }
  };

  const deleteTodo = () => {
    let updatedList = todos.splice(todos.length);

    setTodo(updatedList);
  };

  const removeTodo = (index) => {
    const newArray = todos.filter((item) => item.id !== index);
    setTodo(newArray);
  };

  const importantItem = (index) => {
    setTodo(
      todos.map((item) => {
        if (item.id === index) {
          return {
            ...item,
            important: !item.important,
          };
        }
        return item;
      })
    );
  };

  const completedItem = (index) => {
    setTodo(
      todos.map((item) => {
        if (item.id === index) {
          return {
            ...item,
            done: !item.done,
          };
        }
        return item;
      })
    );
  };

  const statusChanger = (ev) => {
    ev.preventDefault();
    setStatus(ev.target.value);
  };

  const filterHandler = () => {
    switch (status) {
      case "important":
        setFilteredTodos(todos.filter((todo) => todo.important === true));
        break;
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.done === true));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  return (
    <>
      <header className="title">
        <h1>To Do List</h1>
      </header>
      <Form
        input={input}
        inputTextChanger={inputTextChanger}
        addTodo={() => addTodo(input)}
        deleteTodo={deleteTodo}
        onChange={statusChanger}
      />
      <div className="container">
        <ul>
          {filteredTodos.map((todo) => (
            <Item
              key={todo.id}
              todo={todo.label}
              removeTodo={() => removeTodo(todo.id)}
              importantTodo={() => importantItem(todo.id)}
              completedTodo={() => completedItem(todo.id)}
              className={`list-element ${
                todo.important ? "highlight-element" : ""
              } ${todo.done ? "completed-element" : ""}`}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default ToDoList;
