import { expect } from "chai";
import { createCalculator } from "./app.js"; // Adjust the import path based on your project structure

describe("createCalculator", function() {
    it("should initialize with value 0", function() {
        const calculator = createCalculator();
        expect(calculator.get()).to.equal(0);
    });

    it("should add numbers correctly", function() {
        const calculator = createCalculator();
        calculator.add(5);
        calculator.add(10);
        calculator.add(-3);
        expect(calculator.get()).to.equal(12);
    });

    it("should subtract numbers correctly", function() {
        const calculator = createCalculator();
        calculator.subtract(5);
        calculator.subtract(10);
        calculator.subtract(-3);
        expect(calculator.get()).to.equal(8);
    });

    it("should handle adding and subtracting together", function() {
        const calculator = createCalculator();
        calculator.add(5);
        calculator.subtract(3);
        calculator.add(10);
        expect(calculator.get()).to.equal(12);
    });

    it("should handle subtracting and adding together", function() {
        const calculator = createCalculator();
        calculator.subtract(5);
        calculator.add(3);
        calculator.subtract(10);
        expect(calculator.get()).to.equal(-12);
    });

    it("should handle adding and subtracting non-numeric values", function() {
        const calculator = createCalculator();
        calculator.add("5");
        calculator.subtract("abc");
        expect(calculator.get()).to.be.NaN;
    });

    it("should handle chained operations", function() {
        const calculator = createCalculator();
        calculator.add(5).subtract(3).add(10);
        expect(calculator.get()).to.equal(12);
    });
    it("should handle subtracting more than the current value", function() {
        const calculator = createCalculator();
        calculator.subtract(5);
        calculator.subtract(10);
        expect(calculator.get()).to.equal(-15);
    });

    it("should handle adding and subtracting with decimal numbers", function() {
        const calculator = createCalculator();
        calculator.add(5.5);
        calculator.subtract(2.2);
        calculator.add(1.1);
        expect(calculator.get()).to.be.closeTo(4.4, 0.001);
    });

    it("should handle subtracting and adding with decimal numbers", function() {
        const calculator = createCalculator();
        calculator.subtract(5.5);
        calculator.add(2.2);
        calculator.subtract(1.1);
        expect(calculator.get()).to.be.closeTo(-4.4, 0.001);
    });

    it("should handle adding and subtracting with zero", function() {
        const calculator = createCalculator();
        calculator.add(0);
        calculator.subtract(0);
        calculator.add(0);
        expect(calculator.get()).to.equal(0);
    });

    it("should handle consecutive operations", function() {
        const calculator = createCalculator();
        calculator.add(5).subtract(3).add(10).subtract(2);
        expect(calculator.get()).to.equal(10);
    });

    it("should handle negative values", function() {
        const calculator = createCalculator();
        calculator.subtract(5);
        calculator.add(-3);
        calculator.subtract(-10);
        expect(calculator.get()).to.equal(2);
    });

    it("should handle very large numbers", function() {
        const calculator = createCalculator();
        calculator.add(1e20);
        calculator.subtract(1e10);
        calculator.add(1e15);
        expect(calculator.get()).to.equal(1e20 - 1e10 + 1e15);
    });
});

