package com.ecom.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ecom.dto.OrderEntity;
import com.ecom.entity.Cart;
import com.ecom.entity.User;
import com.ecom.service.OrdersService;
import com.ecom.service.UserService;

@RestController
@RequestMapping("/shoppinghub")
@CrossOrigin
public class UserController {

	@Autowired
	private UserService userService;
	
	@Autowired
	private OrdersService ordersService;

	// http://localhost:8081/shoppinghub/createuser
	@PostMapping("/createuser")
	public ResponseEntity<String> createUser(@RequestBody User user) {

		User saveUser = userService.saveUser(user);

		if (saveUser != null) {
			return new ResponseEntity<String>("User created Successfully", HttpStatus.OK);
		} else {
			return new ResponseEntity<String>("Internal Server Error", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// http://localhost:8081/shoppinghub/validateuser
	@PostMapping("/validateuser")
	public ResponseEntity<User> userLogin(@RequestParam String email, @RequestParam String password) {
		User validatedUser = userService.validateLogin(email, password);

		if (validatedUser != null) {
			return new ResponseEntity<User>(validatedUser, HttpStatus.OK);
		} else {
			return new ResponseEntity<User>(HttpStatus.NOT_ACCEPTABLE);
		}
	}
	
	// http://localhost:8081/shoppinghub/{userId}/cart
	@GetMapping("/{userId}/cart")
    public ResponseEntity<User> getUserCart(@PathVariable(required = false) int userId) {
		
		
		User userById = userService.getUserById(userId);
		
		System.out.println(userById);
		
	    return new ResponseEntity<User>(userById, HttpStatus.OK);
			
	
	}
	
	// http://localhost:8081/shoppinghub//user/getprofiledetails/ 'email'
	@GetMapping("/user/getprofiledetails/{email}")
	public ResponseEntity<List<OrderEntity>> getOrders(@PathVariable String email) {
	    List<OrderEntity> findOrders = ordersService.findOrdersByEmail(email);

	    if (findOrders != null && !findOrders.isEmpty()) {
	        return new ResponseEntity<>(findOrders, HttpStatus.OK);
	    } else {
	        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }
	}
	
	 // http://localhost:8081/shoppinghub/user/cart/add
	@PostMapping("user/cart/add")
	public ResponseEntity<Cart> addToUserCart(@RequestBody Cart cart){
		     
		     Cart savedToCart = userService.saveToCart(cart);
		            
		     if (savedToCart != null) {
		    	 System.out.println("Order is daved to cart");
		    	    return new ResponseEntity<>(savedToCart, HttpStatus.OK);
		    	  } 
		     else {
		    	    return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		    	    
		     }     
	}
	
	// http://localhost:8081/shoppinghub/
	@GetMapping("user/cart/fetch/{userId}")
	public ResponseEntity<List<Cart>> getCart(@PathVariable long userId) {
	    List<Cart> userCart = userService.getUserCart(userId);

	    if (userCart != null && !userCart.isEmpty()) {
	        System.out.println("User cart fetch successfully.");
	        return new ResponseEntity<>(userCart, HttpStatus.OK);
	    } else {
	        return new ResponseEntity<>(HttpStatus.NOT_FOUND);     }
	}

	}

