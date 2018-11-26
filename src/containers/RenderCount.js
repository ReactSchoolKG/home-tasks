import React, { Component } from 'react';

const renderCount = ({...props}) => {
	const {items, tick} = props
	return(
		<div>
			{items.map((el, index) =>
				<div key={index}>
					<h2>{el}</h2>
				</div>
			)}
		</div>
	)
}

export default renderCount