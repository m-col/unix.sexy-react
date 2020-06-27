import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectTab, setTab } from './slice';
import { selectWindowContentCSS } from 'features/window_content/slice';
import './index.css';


export default function Tabs(props) {
  const active = useSelector(selectTab);
	const style = useSelector(selectWindowContentCSS);

	return (
		<div className="tabs">
			<TabList
				active={active}
				children={props.children}
			/>

		{React.cloneElement(props.children[active], {
			className: 'tab-content',
			style: style
		})}
		</div>
	);
}


function TabList(props) {
  const dispatch = useDispatch();
	const style = useSelector(selectWindowContentCSS);

	return (
		<ol className="tab-list">
			{props.children.map((child, i) => {
				const { label } = child.props;

				let className = 'tab-list-item';
				if (props.active === i) {
					className += ' tab-list-active';
				}

				return (
					<li
						className={className}
						onClick={() => dispatch(setTab(i))}
						style={style}
						key={label}
					>
						{label}
					</li>
				);
			})}
		</ol>
	)
}
