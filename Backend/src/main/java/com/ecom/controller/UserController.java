package com.ecom.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.ecom.entity.User;
import com.ecom.service.UserService;

@RestController
@RequestMapping("/techhub")
@CrossOrigin
public class UserController {

	@Autowired
	private UserService userService;

	// http://localhost:8080/techhub/createuser
	@PostMapping("/createuser")
	public ResponseEntity<String> createUser(@RequestBody User user) {

		User saveUser = userService.saveUser(user);

		if (saveUser != null) {
			return new ResponseEntity<String>("User created Successfully", HttpStatus.OK);
		} else {
			return new ResponseEntity<String>("Internal Server Error", HttpStatus.INTERNAL_SERVER_ERROR);
		}

	

	@PostMapping("/add")
	public ResponseEntity<String> addUserLogin(@RequestParam String email, @RequestParam String password){
		userService.validateLogin(email,password);
		return new ResponseEntity<String>(userService.addUserLogin(login), HttpStatus.CREATED);
}
	}
