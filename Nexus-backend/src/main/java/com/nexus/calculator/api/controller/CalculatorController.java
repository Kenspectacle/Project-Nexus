package com.nexus.calculator.api.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class CalculatorController {
	
	@GetMapping("/CalcApp")
	public ModelAndView startCalculator() {
		
		ModelAndView calculatorMV = new ModelAndView("CalculatorView");
		
		return calculatorMV;
	}
}
