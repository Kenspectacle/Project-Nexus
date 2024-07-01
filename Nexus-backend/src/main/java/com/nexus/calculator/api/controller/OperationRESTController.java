package com.nexus.calculator.api.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class OperationRESTController {
	
	@GetMapping("/calculateJSON")
	public String calculate(@RequestParam(name = "input") String expression) {
		try {
			String postfix = ExpressionConverter.infixToPostfix(expression);
			float result = ExpressionEvaluator.evaluatePostfix(postfix);
			return Float.toString(result);
		} catch (Exception e) {
			return "Calculation Failed: Not recognized Operation";
		}

	}
}
