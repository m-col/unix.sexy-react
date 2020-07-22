import React from 'react';
import { useSelector } from 'react-redux';

import { selectWidgets } from './slice';
import './index.css';


export default function Widgets(props) {
  const widgets = useSelector(selectWidgets)[props.id];

	return (
		<>
			{Object.keys(widgets).map(key => {
				return (
					<div className="widget-block">
					{widgets[key].map(widget => {
						return (
							<div
								className="widget"
								style={{
									backgroundColor: widget.backgroundColor,
									color: widget.color,
									padding: `0 ${widget.padding}px`,
								}}
							>
								{widget.text}
							</div>
						)
					})}
					</div>
				)
			})}
		</>
	)
}
