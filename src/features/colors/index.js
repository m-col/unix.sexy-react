import { useSelector } from 'react-redux';

import { selectColors } from './slice';


export default function Colors() {
  const colors = useSelector(selectColors);
	const style = document.createElement('style')
	document.head.append(style)
	style.innerHTML 
		= "html {"
		+ Object.keys(colors).map(key => `--${key}: ${colors[key]};`).join("")
		+ "}";
}
