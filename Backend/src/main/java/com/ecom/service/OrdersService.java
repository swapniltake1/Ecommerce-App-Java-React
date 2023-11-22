package com.ecom.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecom.dao.OrdersRepo;
import com.ecom.entity.OrdersDetails;

@Service
public class OrdersService {

	@Autowired
	private OrdersRepo ordersRepo;
	
	public OrdersDetails saveDetails(OrdersDetails details) {
		
		return ordersRepo.save(details);
	}

}
