package com.ecom.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecom.dto.OrderDetails;
import com.ecom.dto.OrderEntity;

@Repository
public interface OrderDetailsRepository extends JpaRepository<OrderEntity, Long> {

	OrderDetails save(OrderDetails orderDetails);

	
   
}