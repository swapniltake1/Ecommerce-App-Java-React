package com.ecom.controller;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ecom.entity.Product;
import com.ecom.service.DealsService;

@RestController
@RequestMapping("/shoppinghub")
@CrossOrigin
public class DealsController {
 
	@Autowired
	DealsService dealsService;
	@GetMapping("/discount/{discountvalue}")
	public List<Product> discount(@RequestParam(required = false) BigDecimal discountValue){
		return dealsService.discount(discountValue);
	}	
}
