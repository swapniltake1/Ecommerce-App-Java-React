package com.ecom.controller;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecom.entity.Product;
import com.ecom.service.DealsService;

@RestController
@RequestMapping("/shoppinghub")
@CrossOrigin
public class DealsController {

	@Autowired
	DealsService dealsService;

	// http://localhost:8081/shoppinghub/discount/60
	@GetMapping("/discount/{discountvalue}")
	public ResponseEntity<List<Product>> discount(@PathVariable String discountvalue) {
	    try {
	        BigDecimal discount = new BigDecimal(discountvalue);
	        List<Product> discountedProducts = dealsService.getDiscountedProducts(discount);

	        if (discountedProducts != null && !discountedProducts.isEmpty()) {
	            return new ResponseEntity<>(discountedProducts, HttpStatus.OK);
	        } else {
	            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	        }
	    } catch (NumberFormatException e) {
	        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
	    }
	}
	@GetMapping("/category/{productCategory}")
	public ResponseEntity<List<Product>> getProductsByCategory(@PathVariable String productCategory) {
	    try {
	        List<Product> products = dealsService.getProductCategory(productCategory);

	        if (products != null && !products.isEmpty()) {
	            return new ResponseEntity<>(products, HttpStatus.OK);
	        } else {
	            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	        }
	    } catch (Exception e) {
	        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	}

	
}
