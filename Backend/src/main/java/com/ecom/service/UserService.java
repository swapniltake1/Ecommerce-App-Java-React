package com.ecom.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecom.dao.UserRepo;
import com.ecom.entity.User;

@Service
public class UserService {

	@Autowired
	private UserRepo userRepository;
	
	public User saveUser(User user) {
		User savedUser = userRepository.save(user);
		return savedUser;
	}

}
