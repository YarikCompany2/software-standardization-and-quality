import {
    describe,
    expect,
    test,
} from 'vitest';

import {
    calculateDiscount,
    validateQuantity,
    getShippingCost,
} from '../src/shop-utils.js';

describe('calculateDiscount', () => {
    test(
        'returns 90 for price 100 and discount 10%',
        () => {
            // Arrange
            const price = 100;
            const percent = 10;

            // Act
            const result = calculateDiscount(
                price,
                percent
            );

            // Assert
            expect(result).toBe(90);
        }
    );

    test('returns 100 for price 100 and discount 0%', () => {
        const price = 100;
        const percent = 0;

        const result = calculateDiscount(price, percent);

        expect(result).toBe(100);
    });

    test('returns 0 for price 100 and discount 100%', () => {
        const price = 100;
        const percent = 100;

        const result = calculateDiscount(price, percent);

        expect(result).toBe(0);
    });

    test('throws error for negative price', () => {
        const price = -10;
        const percent = 10;
        const errorMessage = 'Price must be a non-negative number'

        expect(() => calculateDiscount(price, percent)).toThrow(errorMessage);
    });

    test('throws error when price is not a finite number', () => {
        const percent = 10;
        const errorMessage = 'Price must be a non-negative number';

        expect(() => calculateDiscount(NaN, percent)).toThrow(errorMessage);
        expect(() => calculateDiscount(Infinity, percent)).toThrow(errorMessage);
    });

    test('throws error when percent is out of range or not finite', () => {
        const price = 100;
        const errorMessage = 'Discount must be between 0 and 100';

        expect(() => calculateDiscount(100, -1)).toThrow(errorMessage);
        expect(() => calculateDiscount(100, 101)).toThrow(errorMessage);
        expect(() => calculateDiscount(100, NaN)).toThrow(errorMessage);
        expect(() => calculateDiscount(100, Infinity)).toThrow(errorMessage);
    })
});

describe('validateQuantity', () => {
    test.for([
        { quantity: 0, expected: false },
        { quantity: 1, expected: true },
        { quantity: 2, expected: true },
        { quantity: 9, expected: true },
        { quantity: 10, expected: true },
        { quantity: 11, expected: false },
        { quantity: 1.5, expected: false },
    ]) ('validateQuantity($quantity) returns $expected', ({ quantity, expected }) => {
        const result = validateQuantity(quantity);

        expect(result).toBe(expected);
    });
});

describe('getShippingCost', () => {
    test('returns 100 for total below 1000', () => {
        const total = 999;

        const result = getShippingCost(total);

        expect(result).toBe(100);
    })

    test('returns 0 for total equal to 1000', () => {
        const total = 1000;

        const result = getShippingCost(total);

        expect(result).toBe(0);
    });

    test('throws an error for a negative or not finite number', () => {
        const negativeNumber = -1;
        const notFiniteNumber = NaN;
        const errorMessage = 'Total must be a non-negative number';

        const resultNegativeNumber = getShippingCost(negativeNumber);
        const resultNotFiniteNumber = getShippingCost(notFiniteNumber);

        expect(resultNegativeNumber).toThrow(errorMessage);
        expect(resultNotFiniteNumber).toThrow(errorMessage);
    })
});