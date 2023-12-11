package com.ecom.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecom.dao.CartRepo;
import com.ecom.dao.UserRepo;
import com.ecom.entity.Cart;
import com.ecom.entity.User;

@Service
public class UserService {

	@Autowired
	private UserRepo userRepository;
	
	@Autowired
	private CartRepo cartRepo;

	public User saveUser(User user) {
		User savedUser = userRepository.save(user);
		return savedUser;
	}

	public User validateLogin(String email, String newPassword) {
		User user = userRepository.findByEmail(email);
		String oldPassword = user.getPassword();

		if (oldPassword.equals(newPassword)) {
			return user;
		} else {
			return null;
		}
	}

	public User getUserById(int userId) {
		User user = userRepository.findByid(userId);
		return user;	
	}

	// save order to cart - Tested ok 
	public Cart saveToCart(Cart cart) {
		Cart savedToCart = cartRepo.save(cart);
		return savedToCart;
	}

	// fetch for user cart
	public List<Cart> getUserCart(long userId) {
		List<Cart> userCart = cartRepo.findAllByUserId(userId);
		return userCart;
	}

}
