import React from "react";
import Proptypes from "prop-types";
import { BsFillTrashFill, BsFillExclamationCircleFill, BsFillCheckCircleFill } from "react-icons/bs";

const Item = props => {
	return (
		<>
			<li className={props.className}>
				{props.todo}
				<button className="close-btn" onClick={props.removeTodo}>
					<BsFillTrashFill />
				</button>
				<button className="close-btn" onClick={props.importantTodo}>
					<BsFillExclamationCircleFill />
				</button>
				<button className="close-btn" onClick={props.completedTodo}>
					<BsFillCheckCircleFill />
				</button>
			</li>
		</>
	);
};

Item.propTypes = {

	todo: Proptypes.string,
	removeTodo: Proptypes.func,
	importantTodo: Proptypes.func,
	className: Proptypes.string,
	completedTodo: Proptypes.func,
};

export default Item;
