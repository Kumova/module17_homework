const {getMonth} = require('./month');

describe('getMonth function', () => {
    it('should return correct month for valid input', () => {
        expect(getMonth(1)).toBe('январь');
        expect(getMonth(2)).toBe('февраль');
        expect(getMonth(3)).toBe('март');
        expect(getMonth(4)).toBe('апрель');
        expect(getMonth(5)).toBe('май');
        expect(getMonth(6)).toBe('июнь');
        expect(getMonth(7)).toBe('июль');
        expect(getMonth(8)).toBe('август');
        expect(getMonth(9)).toBe('сентябрь');
        expect(getMonth(10)).toBe('октябрь');
        expect(getMonth(11)).toBe('ноябрь');
        expect(getMonth(12)).toBe('декабрь');
    });

    it('should return "такого месяца нет" for invalid input', () => {
        expect(getMonth(13)).toBe('такого месяца нет');
        expect(getMonth(0)).toBe('такого месяца нет');
        expect(getMonth(-1)).toBe('такого месяца нет');
    });
});