/**
 * @jest-environment jsdom
 */

const { describe, it, beforeEach, afterEach, expect } = require("@jest/globals");
import React from "react";
import renderer from "react-test-renderer";
import TestUtils from "react-dom/test-utils";
import { act } from "@testing-library/react";
import { createRoot } from "react-dom/client";

import { Password } from "../jsx/Password";
import { PasswordGenerate } from "../jsx/PasswordGenerate";
import { PasswordInfo } from "../jsx/PasswordInfo";
import { PasswordInput } from "../jsx/PasswordInput";
import { PasswordVisibility } from "../jsx/PasswordVisibility";

let container;
let listitems;
let listItem;
let button;
let input;

describe("Checking Password Component", () => {
	beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		act(() => {
			createRoot(container).render(<Password uppercase lowercase numbers specials over_6 />);
		});
		listitems = container.querySelector("ul");
		listItem = listitems.childNodes[0];
		input = container.querySelector('.form-control[type]');
	})
	afterEach(() => {
		document.body.removeChild(container);
		container = null;
	})
	it("rules list should contain 5 elements", () => {
		expect(listitems.childNodes.length).toEqual(5);
		expect(listitems.childNodes[0]).not.toBeFalsy();
	})
	it("First element should have have test \"Must have at least 1 Number\"", () => {
		let listItemText = listItem.textContent;
		expect(listItemText).toBe("Must have at least 1 uppercase character")
	})
	it("Generate button is there and clicking it will generate password", () => {
		act(() => {
			let button = container.querySelector(".generate-btn");
			expect(button.classList.length).toBe(3);
			TestUtils.Simulate.click(button);
		});
		console.log(input);
		expect(input.value).toMatch(/^[A-Za-z0-9\!\@\#\$\%\^\&\*\(\)\_\+\{\}\:\"\<\>\?\\|\[\]\/'\,\.\`\~]{8,16}$/)
		expect(listItem.firstChild.nodeName.toLowerCase()).toBe("s");
	})
})