package com.ecom.service;

import java.util.List;

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

	public boolean deleteProductById(int productId) {
		productRepo.deleteById((long) productId);
		return true;
	}

	public Product updateProduct(Product product) {
		return productRepo.save(product);
	}

}
