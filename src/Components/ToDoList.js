import React, { useState, useEffect } from "react";
import Item from "./Item";
import Form from "./Form";

const ToDoList = () => {
	//States
	const [input, setInput] = useState("");
	const [todos, setTodo] = useState([]);

	//Hooks
	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/pablo442", {
			method: "GET",
			headers: { "Content-Type": "application/json" }
		})
			.then(response => {
				return response.json();
			})
			.then(data => {
				setTodo(data);
			})
			.catch(error => {
				console.log("Error", error);
			});
	}, []);

	//Functions
	const uptdateAPI = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/pablo442", {
			method: "PUT",
			body: JSON.stringify(todos),
			headers: { "Content-Type": "application/json" }
		})
			.then(response => {
				return response.json();
			})
			.then(data => {
				console.log(data);
			})
			.catch(error => {
				console.log("Error", error);
			});
	};

	const inputTextChanger = ev => {
		setInput(ev.target.value);
	};

	const addTodo = ev => {
		setTodo([...todos, { label: input, done: false }]);
		setInput("");
		uptdateAPI();
	};

	const deleteTodo = () => {
		let delTodo = todos?.splice(todos.length);

		setTodo(delTodo);
		uptdateAPI();
	};

	const removeTodo = index => {
		const newArray = todos.filter((item, i) => i != index);
		setTodo(newArray);
		uptdateAPI();
	};

	return (
		<>
			<Form
				input={input}
				inputTextChanger={inputTextChanger}
				addTodo={addTodo}
				deleteTodo={deleteTodo}
			/>
			<div className="list">
				<ul>
					{todos.map((todo, i) => (
						<Item
							key={i}
							todo={todo.label}
							removeTodo={() => removeTodo(i)}
						/>
					))}
				</ul>
			</div>
		</>
	);
};

export default ToDoList;