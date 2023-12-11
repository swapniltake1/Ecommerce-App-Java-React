package com.ecom.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecom.entity.Cart;

@Repository
public interface CartRepo extends JpaRepository<Cart, Long>{

	List<Cart> findAllByUserId(long userId);

}
