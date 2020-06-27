export function fixColour(colour) {
		if (colour[0] !== '#') {
			colour = '#' + colour
		}
		return colour
}
