export const RULES = {
	UPPERCASE: {
		message: "Must have at least 1 uppercase character",
		pattern: /([A-Z]+)/
	},
	LOWERCASE: {
		message: "Must have at least 1 lowercase character",
		pattern: /([a-z]+)/
	},
	NUMBERS: {
		message: "Must have at least 1 Number",
		pattern: /([0-9]+)/
	},
	SPECIALS: {
		message: "Must have at least 1 special Character",
		pattern: /([\!\@\#\$\%\^\&\*\(\)\_\+\{\}\:\"\<\>\?\\|\[\]\/'\,\.\`\~]+)/,
	},
	OVER_6: {
		message: "Must have more than 6 chars",
		pattern: /(.{6,})/
	}
}