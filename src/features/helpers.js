export function fixColour(colour) {
		if (colour[0] !== '#') {
			colour = '#' + colour
		}
		if (colour.length === 7) {
			return colour
		} else {
			return false
		}
}


export default fixColour;
