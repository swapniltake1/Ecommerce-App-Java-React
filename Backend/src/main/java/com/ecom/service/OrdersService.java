package com.ecom.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecom.dao.OrderEntityRepo;
import com.ecom.dto.OrderEntity;

@Service
public class OrdersService {
    
	@Autowired
    private OrderEntityRepo orderEntityRepo;


    public OrderEntity saveOrderDetails(OrderEntity order) {

            OrderEntity savedOrderDetails = orderEntityRepo.save(order);
        
            return savedOrderDetails;
    }


	
		public List<OrderEntity> findOrdersByEmail(String email) {
	        return orderEntityRepo.findByPurchasedUserEmail(email);
	    }
	


}