import React from 'react';

import './index.css';


var nameCounter = 0;

export default function Option(props) {
	nameCounter += 1;

	return (
		<div className="switch">

			{
				props.options.map((option, id) => {

				var checked = "";
				if (option.key === props.value) {
					checked = "checked";
				};

				return (
					<>

						<input
							id={option.key}
							className={option.key}
							name={nameCounter}
							type="radio"
							checked={checked}
						/>

						<label
							htmlFor={option.key}
							onClick={option.callback}
						>
						{option.key}
						</label>

					</>
				)})
			}

		</div>
	);
}

