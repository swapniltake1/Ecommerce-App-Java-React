package com.ecom.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class PaymentType {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String googlePay;
	private String phonePay;
	private String paytm;
	private String cashOnDelivery;
	private String creditCard;
	private String applyPay;
	private String payPal;
	private String easyEMI;
}
