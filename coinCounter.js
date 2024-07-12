const coinCounter = (amount) => {
    const coins = [25, 10, 5, 1];
    const coinNames = ["quarters", "dimes", "nickels", "pennies"];

    const countCoins = (remaining, index, result) => {
        if (index >= coins.length) return result;
        const coinValue = coins[index];
        const coinCount = Math.floor(remaining / coinValue);
        result[coinNames[index]] = coinCount;
        return countCoins(remaining % coinValue, index + 1, result);
    };

    return countCoins(Math.round(amount * 100), 0, {});
};

console.log(coinCounter(4.99)); // { quarters: 19, dimes: 2, nickels: 0, pennies: 4 }

console.log(coinCounter(5.99)); // { quarters: 19, dimes: 2, nickels: 0, pennies: 4 }
