import { isOddOrEven } from "./02.EvenOrOdd.js";
import { expect } from "chai";

describe("asd", function(){
    it("returns undefined when not string", ()=>{
        expect(isOddOrEven(123)).to.undefined;
    })
    it("returns odd when length is odd",()=>{
expect(isOddOrEven("lorep")).to.equal("odd")
    })
    it("retunrs even when length is even", ()=>{
        expect(isOddOrEven("isEven")).to.equal("even")
    })
    it("expect working with string of numbers",()=>{
        expect(isOddOrEven("123456789")).to.equal("odd")
    })
    it("should return undefind with null", ()=>{
        expect(isOddOrEven(null)).to.undefined
    })
    it("should return undefinde with undifined", ()=>{
        expect(isOddOrEven(undefined)).to.undefined
    })
    it("should return undefined with array", ()=>{
        expect(isOddOrEven(["asd", "qwe", "123"])).to.undefined
    })
    it("should return undefinde with object", ()=>{
        expect(isOddOrEven({name:"asd", age:22})).to.undefined
    })

})