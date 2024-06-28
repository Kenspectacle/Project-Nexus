package com.nexus.calculator.api.controller;

import java.util.Stack;

public class ExpressionEvaluator {
    public static float evaluatePostfix(String expression) {
        Stack<Float> stack = new Stack<>();
        for (String token : expression.split(" ")) {
            if (token.isEmpty()) continue;
            if (isNumber(token)) {
                stack.push(Float.parseFloat(token));
            } else if (isOperator(token.charAt(0))) {
                float b = stack.pop();
                float a = stack.pop();
                float result = applyOperator(token.charAt(0), a, b);
                stack.push(result);
            }
        }
        return stack.pop();
    }

    private static boolean isNumber(String token) {
        try {
            Float.parseFloat(token);
            return true;
        } catch (NumberFormatException e) {
            return false;
        }
    }

    private static boolean isOperator(char c) {
        return c == '+' || c == '-' || c == '*' || c == '/';
    }

    private static float applyOperator(char operator, float a, float b) {
        switch (operator) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                if (b == 0) {
                    throw new ArithmeticException("Division by zero");
                }
                return a / b;
        }
        throw new IllegalArgumentException("Invalid operator: " + operator);
    }
}
