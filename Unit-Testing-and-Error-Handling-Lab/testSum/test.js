import { sum } from "../app.js";
import { expect } from "chai";

describe("Suit", function () {
    it("it works with number array", () => {
        let arr = [1, 1, 1];
        expect(sum(arr)).to.equal(3);
    });

    it("It works with array with one parameter", () => {
        expect(sum([1])).to.equal(1);
    });
    it("works with empty array", () => {
        expect(sum([])).to.equal(0)
    })
    it("not working with non-array",()=>{
        expect(()=>{sum(1)}).to.throw();
    })
});
