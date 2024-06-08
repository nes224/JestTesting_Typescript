// describe function can group different tests together.

import { toUpperCase } from "../app/Utils";

describe('Utils test suite', () => {
    test("should return uppercase", () => {
        const result = toUpperCase('abc');
        expect(result).toBe('ABC');
    });
});