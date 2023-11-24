package com.ecom.dto;

import java.math.BigDecimal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderDetails {

    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    //private Long SerialProductId;
    
    private Long productId;
    private String productName;
    private BigDecimal productPrice;
    private BigDecimal productDiscount;
    private String productDescription;
    private String productCategory;

    @Column(columnDefinition = "LONGTEXT")
    private String productPhoto;
}

