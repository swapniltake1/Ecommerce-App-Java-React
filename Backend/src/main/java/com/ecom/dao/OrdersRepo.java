package com.ecom.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecom.entity.OrdersDetails;

public interface OrdersRepo extends JpaRepository<OrdersDetails, Long>{

}
