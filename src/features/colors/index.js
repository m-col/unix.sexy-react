import { useSelector } from 'react-redux';

import { selectColors } from './slice';


export default function Colors() {
  const colors = useSelector(selectColors);
	const style = document.createElement('style')
	document.head.append(style)
	style.innerHTML 
		= "html {"
		+ colors.map((color, i) => `--color${i}: ${color};`).join("")
		+ "}";
}
