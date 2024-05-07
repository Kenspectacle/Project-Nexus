package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HTMLController {
	
	@GetMapping("/CalcApp")
	public ModelAndView startCalculator() {
		
		ModelAndView calculatorMV = new ModelAndView("CalculatorApplication");
		
		return calculatorMV;
	}
}
