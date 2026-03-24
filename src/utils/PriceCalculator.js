// src/utils/PriceCalculator.js

class PriceCalculator {
    constructor() {}

    calculatePositionSize(accountBalance, riskPercentage, entryPrice, stopLossPrice) {
        const riskAmount = accountBalance * (riskPercentage / 100);
        const pipLoss = Math.abs(entryPrice - stopLossPrice);
        return riskAmount / pipLoss;
    }

    calculateRiskRewardRatio(entryPrice, stopLossPrice, takeProfitPrice) {
        const risk = Math.abs(entryPrice - stopLossPrice);
        const reward = Math.abs(takeProfitPrice - entryPrice);
        return reward / risk;
    }

    calculateProfitLoss(entryPrice, exitPrice, positionSize) {
        return (exitPrice - entryPrice) * positionSize;
    }

    calculatePipValue(entryPrice, positionSize) {
        // Assuming standard lots where 1 pip = 0.0001 for most currency pairs
        return (positionSize * 0.0001) / entryPrice;
    }

    calculatePositionPercentage(accountBalance, entryPrice, positionSize) {
        const totalInvestment = entryPrice * positionSize;
        return (totalInvestment / accountBalance) * 100;
    }
}

module.exports = PriceCalculator;