import { lookupChar } from "./03.CharLookUp.js";
import { expect } from "chai";

describe("suite", function () {
    it("works with correct inputs", () => {
        expect(lookupChar("iveta", 0)).to.equal("i")
        expect(lookupChar("iveta", 4)).to.equal("a")
        expect(lookupChar("should return u", 3)).to.equal("u");
        expect(lookupChar("should return space", 6)).to.equal(" ");
        expect(lookupChar("should return y", 14)).to.equal("y");
    })
    it("dont work with incorrect  input for string", () => {
        expect(lookupChar(123, 2)).to.undefined
    })
    it("dont work with incorrect  input for index", () => {
        expect(lookupChar("iveta", "a")).to.undefined
    })
    it("dont work with first parameter arr", () => {
        expect(lookupChar(["iveta"], "a")).to.undefined
    })
    it("dont work with second parameter arr", () => {
        expect(lookupChar("iveta", [2])).to.undefined
    })
    it("dont work with first parameter obj", () => {
        expect(lookupChar({ name: "iveta" }, 5)).to.undefined
    })
    it("dont work with empty string", () => {
        expect(lookupChar("", 0)).to.equal("Incorrect index");
    })
    it("works with string of numbers", () => {
        expect(lookupChar("01234", 0)).to.equal("0");
    })

    it("dont work with incorect index length input", () => {
        expect(lookupChar("qwer", 5)).to.equal("Incorrect index");
        expect(lookupChar("qwerty", 15)).to.equal("Incorrect index");
        expect(lookupChar("should return y", -5)).to.equal("Incorrect index");
        expect(lookupChar("01234", "0")).to.undefined
        expect(lookupChar("qwer", 3.6)).to.undefined
    })
})