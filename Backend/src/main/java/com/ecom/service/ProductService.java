package com.ecom.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecom.dao.ProductRepo;
import com.ecom.entity.Product;

@Service
public class ProductService {

	@Autowired
	ProductRepo productRepo;

	public Product addProduct(Product product) {
		Product saveProduct = productRepo.save(product);
		return saveProduct;
	}

	public List<Product> getProduct() {
		List<Product> getProduct = productRepo.findAll();
		return getProduct;
	}

	public boolean deleteProductById(Long long1) {
		productRepo.deleteById((long) long1);
		return true;
	}

	public Product updateProduct(Product product) {
		return productRepo.save(product);
	}

	// find order with search
	public List<Product> findOrdersByTerm(String searchTerm) {
		
		return productRepo.findByProductName(searchTerm);
	}

	public Optional<Product> getProductById(Long productId) {
		
		return  productRepo.findById(productId);
	}

}
