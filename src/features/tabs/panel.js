import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectTab, setTab } from './slice';


export default function Tabs(props) {
  const active = useSelector(selectTab);

	return (
		<div className="tabs">
			<TabList
				active={active}
				children={props.children}
			/>

			<div className="tab-content">
				{props.children[active]}
			</div>
		</div>
	);
}


function TabList(props) {
  const dispatch = useDispatch();

	return (
		<ol className="tab-list">
			{props.children.map((child, i) => {
				const { label } = child.props;
				console.log(child)

				let className = 'tab-list-item';
				if (props.active === i) {
					className += ' tab-list-active';
				}

				return (
					<li
						className={className}
						onClick={() => dispatch(setTab(i))}
						key={label}
					>
						{label}
					</li>
				);
			})}
		</ol>
	)
}
