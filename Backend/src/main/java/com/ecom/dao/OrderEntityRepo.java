package com.ecom.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecom.dto.OrderEntity;

public interface OrderEntityRepo extends JpaRepository<OrderEntity, Long> {

}
