import { expect } from "chai";
import { rgbToHexColor } from "./app.js"; // Adjust the import path based on your project structure

describe("rgbToHexColor", function() {
    it("should convert valid RGB values to hex format", function() {
        expect(rgbToHexColor(255, 0, 0)).to.equal("#FF0000");
        expect(rgbToHexColor(0, 255, 0)).to.equal("#00FF00");
        expect(rgbToHexColor(0, 0, 255)).to.equal("#0000FF");
        expect(rgbToHexColor(128, 128, 128)).to.equal("#808080");
        expect(rgbToHexColor(255, 255, 255)).to.equal("#FFFFFF");
    });

    it("should handle lower bounds of valid RGB values", function() {
        expect(rgbToHexColor(0, 0, 0)).to.equal("#000000");
    });

    it("should handle upper bounds of valid RGB values", function() {
        expect(rgbToHexColor(255, 255, 255)).to.equal("#FFFFFF");
    });

    it("should return undefined for invalid red value", function() {
        expect(rgbToHexColor(-1, 0, 0)).to.equal(undefined);
        expect(rgbToHexColor(256, 0, 0)).to.equal(undefined);
    });

    it("should return undefined for invalid green value", function() {
        expect(rgbToHexColor(0, -1, 0)).to.equal(undefined);
        expect(rgbToHexColor(0, 256, 0)).to.equal(undefined);
    });

    it("should return undefined for invalid blue value", function() {
        expect(rgbToHexColor(0, 0, -1)).to.equal(undefined);
        expect(rgbToHexColor(0, 0, 256)).to.equal(undefined);
    });

    it("should return undefined for non-integer red, green, and blue values", function() {
        expect(rgbToHexColor("255", 0, 0)).to.equal(undefined);
        expect(rgbToHexColor(255, "0", 0)).to.equal(undefined);
        expect(rgbToHexColor(255, 0, "0")).to.equal(undefined);
    });
});