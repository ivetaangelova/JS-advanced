import { mathEnforcer } from "./04.mathEnforcer.js";
import { expect } from "chai";

describe("testing functionality", () => {
    it("test with invalid value", () => {
        expect(mathEnforcer.addFive("a")).to.undefined
        expect(mathEnforcer.subtractTen("a")).to.undefined
        expect(mathEnforcer.sum("a", 1)).to.undefined
        expect(mathEnforcer.sum(2, "1")).to.undefined

        expect(mathEnforcer.addFive("5")).to.undefined;
        expect(mathEnforcer.subtractTen("10")).to.undefined;
        expect(mathEnforcer.sum("10", 10)).to.undefined;
        expect(mathEnforcer.sum("10", "10")).to.undefined;
        expect(mathEnforcer.sum(10, "10")).to.undefined;



        expect(mathEnforcer.addFive([1])).to.undefined
        expect(mathEnforcer.subtractTen([1])).to.undefined
        expect(mathEnforcer.sum([1], 1)).to.undefined
        expect(mathEnforcer.sum(1, [1])).to.undefined

        expect(mathEnforcer.addFive({ num: 1 })).to.undefined
        expect(mathEnforcer.subtractTen({ num: 1 })).to.undefined
        expect(mathEnforcer.sum({ num: 1 }, 1)).to.undefined
        expect(mathEnforcer.sum(1, { num: 1 })).to.undefined

        expect(mathEnforcer.addFive(null)).to.undefined
        expect(mathEnforcer.subtractTen(null)).to.undefined
        expect(mathEnforcer.sum(null, 1)).to.undefined
        expect(mathEnforcer.sum(1, null)).to.undefined

        expect(mathEnforcer.addFive(undefined)).to.undefined
        expect(mathEnforcer.subtractTen(undefined)).to.undefined
        expect(mathEnforcer.sum(undefined, 1)).to.undefined
        expect(mathEnforcer.sum(1, undefined)).to.undefined

        expect(mathEnforcer.addFive(true)).to.undefined
        expect(mathEnforcer.subtractTen(true)).to.undefined
        expect(mathEnforcer.sum(true, true)).to.undefined
        expect(mathEnforcer.sum(1, true)).to.undefined

        expect(mathEnforcer.addFive(false)).to.undefined
        expect(mathEnforcer.subtractTen(false)).to.undefined
        expect(mathEnforcer.sum(false, false)).to.undefined
        expect(mathEnforcer.sum(1, false)).to.undefined

        expect(mathEnforcer.addFive()).to.undefined
        expect(mathEnforcer.subtractTen()).to.undefined
        expect(mathEnforcer.sum()).to.undefined
        expect(mathEnforcer.sum()).to.undefined

    })
    it("works with valid value", () => {
        expect(mathEnforcer.addFive(5)).to.equal(10)
        expect(mathEnforcer.addFive(-5)).to.equal(0)
        expect(mathEnforcer.addFive(-6)).to.equal(-1)

        expect(mathEnforcer.subtractTen(11)).to.equal(1)
        expect(mathEnforcer.subtractTen(-11)).to.equal(-21)

        expect(mathEnforcer.sum(1, 1)).to.equal(2)
        expect(mathEnforcer.sum(-1, 1)).to.equal(0)
        expect(mathEnforcer.sum(5, 6)).to.equal(11)
        expect(mathEnforcer.sum(-11, -1)).to.equal(-12)

        expect(mathEnforcer.addFive(0.5)).to.equal(5.5);
        expect(mathEnforcer.addFive(-0.5)).to.equal(4.5);
        expect(mathEnforcer.subtractTen(0.5)).to.equal(-9.5);
        expect(mathEnforcer.subtractTen(-0.5)).to.equal(-10.5);
        expect(mathEnforcer.sum(0.1, 0.2)).to.be.closeTo(0.3, 0.0001); 


    })
    it("works with zero", () => {
        expect(mathEnforcer.addFive(0)).to.equal(5);
        expect(mathEnforcer.subtractTen(0)).to.equal(-10);
        expect(mathEnforcer.sum(0, 0)).to.equal(0);
    })
    it("works with NaN", () => {
        expect(mathEnforcer.addFive(NaN)).to.be.NaN;
        expect(mathEnforcer.subtractTen(NaN)).to.be.NaN;
        expect(mathEnforcer.sum(NaN, 1)).to.be.NaN;
        expect(mathEnforcer.sum(1, NaN)).to.be.NaN;
    });
    it("works with large numbers", () => {
        expect(mathEnforcer.addFive(Number.MAX_SAFE_INTEGER)).to.equal(Number.MAX_SAFE_INTEGER + 5);
        expect(mathEnforcer.subtractTen(Number.MAX_SAFE_INTEGER)).to.equal(Number.MAX_SAFE_INTEGER - 10);
        expect(mathEnforcer.sum(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)).to.equal(Number.MAX_SAFE_INTEGER * 2);
    });

})