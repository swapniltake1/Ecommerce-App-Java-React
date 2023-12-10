package com.ecom.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecom.dto.OrderEntity;

public interface OrderEntityRepo extends JpaRepository<OrderEntity, Long> {

	List<OrderEntity> findByPurchasedUserEmail(String email);

}
