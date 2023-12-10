package com.ecom.controller;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.Base64;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import com.ecom.entity.Product;
import com.ecom.service.ProductService;

@RestController
@RequestMapping("/shoppinghub")
@CrossOrigin
public class ProductController {

	@Autowired
	ProductService productService;
		
	// http://localhost:8081/shoppinghub/addproduct
	@PostMapping("/addproduct")
	public ResponseEntity<Product> uploadFiles(@RequestParam("productName") String productName,
	                                          @RequestParam("productPrice") String productPrice,
	                                          @RequestParam("productDiscount") String productDiscount,
	                                          @RequestParam("productCategory") String productCategory,
	                                          @RequestParam("productDescription") String productDescription,
	                                          @RequestPart("productPhoto") MultipartFile productPhoto) throws IOException {

	    // Parse the string values to BigDecimal
	    BigDecimal parsedProductPrice = new BigDecimal(productPrice);
	    BigDecimal parsedProductDiscount = new BigDecimal(productDiscount);

	    // Convert image bytes to base64-encoded string
	    String base64EncodedPhoto = Base64.getEncoder().encodeToString(productPhoto.getBytes());

	    // Create the Product object
	    Product product = new Product();
	    product.setProductName(productName);
	    product.setProductPrice(parsedProductPrice);
	    product.setProductDiscount(parsedProductDiscount);
	    product.setProductCategory(productCategory);
	    product.setProductDescription(productDescription);
	    product.setProductPhoto(base64EncodedPhoto); 

	    // Call the service method to add the product
	    Product addedProduct = productService.addProduct(product);

	    if (addedProduct != null) {
	        return new ResponseEntity<Product>(addedProduct, HttpStatus.CREATED);
	    } else {
	        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
	    }
	}


	// http://localhost:8081/shoppinghub/getallproduct
	@GetMapping("/getallproduct")
	public ResponseEntity<List<Product>> getProduct() {
		List<Product> getProduct = productService.getProduct();
		if (getProduct != null) {
			return new ResponseEntity<List<Product>>(getProduct, HttpStatus.OK);
		} else {
			return new ResponseEntity<List<Product>>(HttpStatus.BAD_REQUEST);
		}
	}
	
	// not tested 
	@DeleteMapping("/deleteproduct/{productId}")
	public boolean deleteProductById(@PathVariable int productId) {
		return productService.deleteProductById((long) productId);
	}

	// not tested
	@PutMapping("/updateproduct")
	public Product updateProduct(@RequestBody Product product) {
		return productService.updateProduct(product);
	}
	
	// http://localhost:8081/shoppinghub/searchproducts
	// ok testing working fine
	@GetMapping("/searchproducts")
    public ResponseEntity<List<Product>> searchProducts(@RequestParam String searchTerm) {
        List<Product> matchingProducts = productService.findOrdersByTerm(searchTerm);
        return ResponseEntity.ok(matchingProducts);
    }
	
	@GetMapping("/getProduct/{productId}")
	public Optional<Product> getProductById(@PathVariable Long productId) {
		return productService.getProductById(productId);
	}
}


