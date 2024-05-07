package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RESTController {
	
	@GetMapping("/calculateJSON")
	public String calculate(@RequestParam(name = "operand1") String operand1, @RequestParam(name = "operand2") String operand2, @RequestParam(name = "operation") String operation) {
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
		
		
		return operand1 + operation + operand2;
	}
}
