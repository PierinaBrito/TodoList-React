import React, { useState } from "react";

//include images into your bundle

//create your first component

const Home = () => {
	const [ inputValue, setInputValue ] = useState("");
	const [ todo, setTodo ] = useState([]);


	// Add into array ~> concat
	// Delete from array ~> filter
	// Update ~> map

	return (
		<div className="container">
			<h1>My TodoList</h1>
			<ul>
				<li>
					<input 
						type="text" 
						onChange={(e) => setInputValue(e.target.value)}
						value={inputValue}
						onKeyPress={(e) => {
							if (e.key === "Enter") {
								setTodo(todo.concat(inputValue));
								setInputValue("");
							}
						}}
						placeholder="What do yo need to do?"></input>
				</li>
				{todo.map((item, index) => (
					<li>
						{item} {""} 
						<i
						 class="fa-solid fa-xmark float-end" 
						 onClick={() => 
							setTodo(
								todo.filter(
									(t, currentIndex) => 
										index != currentIndex
								)
							)
						}></i>
					</li>
				))}
			</ul>
			<div><strong>{todo.length} Task</strong></div>
			
		</div>
	);
};

export default Home;
