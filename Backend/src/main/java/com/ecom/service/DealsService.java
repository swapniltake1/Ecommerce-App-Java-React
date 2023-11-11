package com.ecom.service;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecom.dao.ProductRepo;
import com.ecom.entity.Product;

@Service
public class DealsService {

	@Autowired
	ProductRepo productRepo;

	// get product with diffrent discounnt price
	public List<Product> getDiscountedProducts(BigDecimal discountValue) {
		List<Product> findAllByDiscount = productRepo.findAllByProductDiscount(discountValue);
		System.out.println(findAllByDiscount);
		return findAllByDiscount;
	 
	}

}
