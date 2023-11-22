package com.ecom.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ecom.entity.OrdersDetails;
import com.ecom.service.OrdersService;

@RestController
@CrossOrigin
public class OrdersController {

	@Autowired
	private OrdersService ordersService;
	
	public ResponseEntity<String> createOrderDetails(@RequestBody OrdersDetails details){
		
		OrdersDetails saveDetails = ordersService.saveDetails(details);
		
		if (saveDetails != null) {
			return new ResponseEntity<String>("Details created Successfully", HttpStatus.OK);
		} else {
			return new ResponseEntity<String>("Internal Server Error", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
