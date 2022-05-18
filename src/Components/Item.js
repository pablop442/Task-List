import React, { useState } from "react";
import Proptypes from "prop-types";
import { BsFillTrashFill } from "react-icons/bs";

const Item = props => {
	return (
		<>
			<li key={props.key} className="list-element">
				{props.todo}
				<button className="close-btn" onClick={props.removeTodo}>
					<BsFillTrashFill />
				</button>
			</li>
		</>
	);
};

Item.propTypes = {
	key: Proptypes.number,
	todo: Proptypes.string,
	removeTodo: Proptypes.func
};

export default Item;
