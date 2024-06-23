package com.nexus.calculator;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OperationRESTController {
	
	@GetMapping("/calculateJSON")
	public String calculate(@RequestParam(name = "input") String expression) {
		// TODO: Calculation
		/*
		 * - Operation: PLUS, MINUS, MULTIPLY, DIVISION
		 * - String to Integer => Integer operandAsInt1 = Integer.valueOf(operand1);
		 * if("PLUS".equals(operation)) {
		 * 		return int(operand1 + operand2
		 * }
		 * 
		 * if("MINUS".....
		 * return ....
		 * 
		 * 
		 * return "Calculation Failed: Not recognized Operation";
		 */
		try {
			String postfix = ExpressionConverter.infixToPostfix(expression);
			float result = ExpressionEvaluator.evaluatePostfix(postfix);
			return Float.toString(result);
		} catch (Exception e) {
			return "Calculation Failed: Not recognized Operation";
		}

//		final Float OPERAND1 = Float.valueOf(operand1);
//		final Float OPERAND2 = Float.valueOf(operand2);
//
//		// URL Encodings for Operators
//		final String PLUS = "+";
//		final String DIVIDE = "/";
//		final String MINUS = "-";
//		final String MULTIPLY = "*";
//
//		if (PLUS.equals(operation)) {
//			result = new Plus().operate(OPERAND1, OPERAND2);
//		} else if (MINUS.equals(operation)) {
//			result = new Minus().operate(OPERAND1, OPERAND2);
//		} else if (DIVIDE.equals(operation)) {
//			result = new Divide().operate(OPERAND1, OPERAND2);
//		} else if (MULTIPLY.equals(operation)) {
//			result = new Multiple().operate(OPERAND1, OPERAND2);
//		} else {
//			return "INVALID OPERATION" + operation;
//		}
////		operand1 + operation + operand2
//		return Float.toString(result);
	}
}


// float numbers verarbeiten 
// Modulo
// Jede operation eigene Klasse

//result = Operation.Plus(OPERAND_AS_INT1 + OPERAND_AS_INT2;)
