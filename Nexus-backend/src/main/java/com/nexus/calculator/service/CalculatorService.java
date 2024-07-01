package com.nexus.calculator.service;

import com.nexus.calculator.api.controller.ExpressionConverter;
import com.nexus.calculator.api.controller.ExpressionEvaluator;
import org.springframework.stereotype.Service;

@Service
public class CalculatorService {

    public float calculate(String expression) throws Exception {
        String postfix = ExpressionConverter.infixToPostfix(expression);
        return ExpressionEvaluator.evaluatePostfix(postfix);
    }
}
