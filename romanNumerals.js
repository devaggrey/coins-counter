const romanNumerals = (num) => {
    const romanMap = [
        { value: 1000, symbol: "M" },
        { value: 900, symbol: "CM" },
        { value: 500, symbol: "D" },
        { value: 400, symbol: "CD" },
        { value: 100, symbol: "C" },
        { value: 90, symbol: "XC" },
        { value: 50, symbol: "L" },
        { value: 40, symbol: "XL" },
        { value: 10, symbol: "X" },
        { value: 9, symbol: "IX" },
        { value: 5, symbol: "V" },
        { value: 4, symbol: "IV" },
        { value: 1, symbol: "I" }
    ];

    const toRoman = (n, result = "") => {
        if (n === 0) return result;
        for (let i = 0; i < romanMap.length; i++) {
            if (n >= romanMap[i].value) {
                return toRoman(n - romanMap[i].value, result + romanMap[i].symbol);
            }
        }
    };

    return toRoman(num);
};

console.log(romanNumerals(1999)); // "MCMXCIX"

console.log(romanNumerals(10)); 
