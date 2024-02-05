import { expect } from "chai";
import { isSymmetric } from "./app.js"; // Adjust the import path based on your project structure

describe("isSymmetric", function() {
    it("should return true for a symmetric array", function() {
        let symmetricArray = [1, 2, 3, 2, 1];
        expect(isSymmetric(symmetricArray)).to.equal(true);
    });

    it("should return true for an empty array", function() {
        let emptyArray = [];
        expect(isSymmetric(emptyArray)).to.equal(true);
    });

    it("should return true for an array with a single element", function() {
        let singleElementArray = [42];
        expect(isSymmetric(singleElementArray)).to.equal(true);
    });

    it("should return true for an array with repeated elements", function() {
        let repeatedElementsArray = [1, 2, 3, 3, 2, 1];
        expect(isSymmetric(repeatedElementsArray)).to.equal(true);
    });

    it("should return false for a non-symmetric array", function() {
        let nonSymmetricArray = [1, 2, 3, 4, 5];
        expect(isSymmetric(nonSymmetricArray)).to.equal(false);
    });

    it("should return false for a non-array input", function() {
        let nonArrayInput = "not an array";
        expect(isSymmetric(nonArrayInput)).to.equal(false);
    });

    it("should return false for an array with different data types", function() {
        let mixedTypeArray = [1, "2", 3, "4", 5];
        expect(isSymmetric(mixedTypeArray)).to.equal(false);
    });
    it("should handle arrays with mixed data types", function() {
        let mixedDataArray = [1, "2", 3, "2", 1];
        expect(isSymmetric(mixedDataArray)).to.equal(true);
    });

    it("should handle arrays with complex objects", function() {
        let complexObjectArray = [{ key: "value" }, 42, { key: "value" }];
        expect(isSymmetric(complexObjectArray)).to.equal(true);
    });

    it("should handle arrays with nested arrays", function() {
        let nestedArray = [1, [2, 3], [3, 2], 1];
        expect(isSymmetric(nestedArray)).to.equal(true);
    });

    it("should return false for arrays with nested non-symmetric arrays", function() {
        let nestedNonSymmetricArray = [1, [2, 3], [4, 5], 6];
        expect(isSymmetric(nestedNonSymmetricArray)).to.equal(false);
    });
});
