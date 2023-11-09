package com.ecom.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecom.entity.Product;
import com.ecom.service.ProductService;

@RestController
@RequestMapping("/shoppinghub")
@CrossOrigin
public class ProductController {

	@Autowired
	ProductService productService;

	@PostMapping("/addproduct")
	public ResponseEntity<String> addProduct(@RequestBody Product product) {

		Product addProduct = productService.addProduct(product);

		if (addProduct != null) {
			return new ResponseEntity<String>("Product added Successfully", HttpStatus.CREATED);
		} else {
			return new ResponseEntity<String>("Internal Server Error", HttpStatus.BAD_REQUEST);
		}
	}

	@GetMapping("/getproduct")
	public ResponseEntity<List<Product>> getProduct() {
		List<Product> getProduct = productService.getProduct();
		if (getProduct != null) {
			return new ResponseEntity<List<Product>>(getProduct, HttpStatus.OK);
		} else {
			return new ResponseEntity<List<Product>>(HttpStatus.BAD_REQUEST);
		}
	}

	@DeleteMapping("/deleteproduct/{productId}")
	public boolean deleteProductById(@PathVariable int productId) {
		return productService.deleteProductById(productId);
	}

	@PutMapping("/updateproduct")
	public Product updateProduct(@RequestBody Product product) {
		return productService.updateProduct(product);
	}

}
