# Technical Indicators Reference Guide

This document provides a complete reference guide for all technical indicators available in the trading signal indicator system, including their parameters, interpretation, and signal generation logic.

## 1. Moving Average (MA)
 - **Parameters:**  
   - `period`: The number of periods to calculate the average.  
  
 - **Interpretation:**  
   - A moving average smooths out price data by creating a constantly updated average price. 
   - Used to identify the direction of the trend.  

 - **Signal Generation Logic:**
   - Buy Signal: Price crosses above the MA.  
   - Sell Signal: Price crosses below the MA.

## 2. Relative Strength Index (RSI)
 - **Parameters:**  
   - `period`: The number of periods for calculating the RSI.  
  
 - **Interpretation:**  
   - RSI measures the speed and change of price movements.  
   - Values above 70 indicate overbought conditions, while values below 30 indicate oversold conditions.  

 - **Signal Generation Logic:**
   - Buy Signal: RSI crosses above 30.  
   - Sell Signal: RSI crosses below 70.

## 3. Moving Average Convergence Divergence (MACD)
 - **Parameters:**  
   - `fast_period`: The short-term EMA period.  
   - `slow_period`: The long-term EMA period.  
   - `signal_period`: The period for the signal line.  

 - **Interpretation:**  
   - MACD is the difference between two EMAs and is used to identify changes in the strength, direction, momentum, and duration of a trend.  

 - **Signal Generation Logic:**
   - Buy Signal: MACD crosses above the signal line.  
   - Sell Signal: MACD crosses below the signal line.

... (additional indicators can be added here) ...

## Note
This document is a work in progress and will be updated as more indicators are developed and incorporated into the trading signal indicator system.