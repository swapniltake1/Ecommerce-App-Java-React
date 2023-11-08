package com.ecom.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ecom.entity.Login;
import com.ecom.service.LoginService;

@RestController
public class LoginController {

	@Autowired
	LoginService loginService;
	 
	@PostMapping("/add")
	public ResponseEntity<String> addUserLogin(@RequestParam String email, @RequestParam String password){
		loginService.validateLogin(email,password);
		return new ResponseEntity<String>(loginService.addUserLogin(login), HttpStatus.CREATED);
	}
	
	
}
