const assert = require('assert');
const isPalindrome = require('../palindrome.js');
describe("Palindrome tests", function () {

    it("recognizes a non-palindrome", function () {
        expect(isPalindrome("Hello")).toBe(false);
    });
    it("knows that an empty string is a palindrome", function () {
        expect(isPalindrome("")).toBe(true);
    });
    it("knows that an entirely non-alphanumeric string is not a palindrome", function () {
        expect(isPalindrome("!@# #@!")).toBe(true);
    });
    it("should return true for a single letter", function(){
        assert.strictEqual(isPalindrome("a"), true);
    });
    it("should return true for a single letter repeated", function(){
        assert.strictEqual(isPalindrome("aaa"), true);
    });
    it("should be case-sensitive", function(){
        assert.strictEqual(isPalindrome("abA"), false);
    });
    it("should consider whitespace", function(){
        assert.strictEqual(isPalindrome("so many dynamos"), false);
    });
});