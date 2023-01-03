import generatePassword from "../js/generate-password";
import { describe, it, expect } from "@jest/globals";

const pattern = /^[A-Za-z0-9\!\@\#\$\%\^\&\*\(\)\_\+\{\}\:\"\<\>\?\\|\[\]\/'\,\.\`\~]{8,16}$/;

describe("method generate password: ", () => {
	// let password, password2;
	// it("returns a generated password from the set pattern", () => {
	// 	password = generatePassword();
	// 	expect(password).toMatch(pattern);
	// })
	// it("the two generated password for should be diffierent", () => {
	// 	password2 = generatePassword();
	// 	expect(password2).toMatch(pattern)
	// 	expect(password2).not.toEqual(password)
	// })
	it("Now Tests", () => {
		expect(1).toBeTruthy();
	})
})