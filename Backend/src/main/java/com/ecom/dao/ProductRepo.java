package com.ecom.dao;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ecom.entity.Product;

@Repository
public interface ProductRepo extends JpaRepository<Product, Long> {
	@Query("SELECT p FROM Product p WHERE p.productDiscount = :discount")
    List<Product> findAllByProductDiscount(@Param("discount") BigDecimal discount);

}
