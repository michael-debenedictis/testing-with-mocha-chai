const expect = require("chai").expect

const averageScore = require("../src/main.js");

describe('averageScore', () => {
    it("should output avg score", () => {
        const input = [
            { name: "Shane Carey", score: 9.5 },
            { name: "Rebecca Mills", score: 8.7 },
            { name: "Catarina Lima", score: 9.7 },
          ];
          const expected = 9.7;
          const actual = averageScore(input);
          expect(actual).to.equal(expected)
    })
})