const coinCounterClosure = (amount) => {
    const coins = [25, 10, 5, 1];
    const coinNames = ["quarters", "dimes", "nickels", "pennies"];

    const createCounter = (coinValue, coinName) => {
        return (remaining) => {
            const coinCount = Math.floor(remaining / coinValue);
            const newRemaining = remaining % coinValue;
            return {
                count: coinCount,
                remaining: newRemaining,
                coinName: coinName
            };
        };
    };

    const countCoins = (remaining) => {
        return coins.reduce((acc, coinValue, index) => {
            const counter = createCounter(coinValue, coinNames[index]);
            const result = counter(remaining);
            acc[result.coinName] = result.count;
            remaining = result.remaining;
            return acc;
        }, {});
    };

    return countCoins(Math.round(amount * 100));
};

console.log(coinCounterClosure(4.99)); // { quarters: 19, dimes: 2, nickels: 0, pennies: 4 }
