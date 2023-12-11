package com.ecom.controller;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecom.dto.OrderEntity;
import com.ecom.service.OrdersService;
import com.ecom.service.ProductService;

@RestController
@CrossOrigin
@RequestMapping("/shoppinghub/order")
public class OrdersController {

	@Autowired
	private OrdersService ordersService;
	
	@Autowired
	private ProductService productService;
	
	/*
	 * public ResponseEntity<String> createOrderDetails(@RequestBody OrdersDetails
	 * details){
	 * 
	 * OrdersDetails saveDetails = ordersService.saveDetails(details);
	 * 
	 * if (saveDetails != null) { return new
	 * ResponseEntity<String>("Details created Successfully", HttpStatus.OK); } else
	 * { return new ResponseEntity<String>("Internal Server Error",
	 * HttpStatus.INTERNAL_SERVER_ERROR); } }
	 */
	
	
	@PostMapping("/create")
	public ResponseEntity<Object> createOrder(@RequestBody OrderEntity order) {

		/*
		 * System.out.println(order.getOrderDetails());
		 * System.out.println(order.getUserAddress());
		 * System.out.println(order.getMethodName()); System.out.println(order);
		 */
		
		
		order.setDate(LocalDate.now());
		
		System.out.println(" Order Created " + order.getDate());
		
	    OrderEntity savedOrder = ordersService.saveOrderDetails(order); 
	    
	    if (savedOrder != null && savedOrder.getOrderId() > 0) {
	    	System.out.println(" Order created succesfully....");
	    	productService.deleteProductById(order.getOrderDetails().getProductId());
	    	System.out.println("Product Deleted Successfully from database :: ProductID::"+order.getOrderDetails().getProductId());
	        return ResponseEntity.ok(savedOrder); 
	        
	    } else {
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to save order");
	        
	    }
	}
}


