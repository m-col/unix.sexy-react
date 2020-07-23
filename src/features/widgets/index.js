import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { enable } from 'features/context_menus/slice';
import { selectWidgets } from './slice';
import './index.css';


export default function Widgets(props) {
  const dispatch = useDispatch();
  const widgets = useSelector(selectWidgets)[props.id];

	return (
		<>
			{Object.keys(widgets).map(pos => {
				return (
					<div className="widget-block">
					{widgets[pos].map((widget, id) => {
						return (
							<div
								className="widget"
								onContextMenu={
									e => dispatch(
										enable({id: "widget", e: e, details: {bar: props.id, pos: pos, id: id}})
									)
								}
								style={{
									backgroundColor: widget.backgroundColor,
									color: widget.color,
									padding: `0 ${widget.padding}px`,
								}}
							>
								{widget.content}
							</div>
						)
					})}
					</div>
				)
			})}
		</>
	)
}
