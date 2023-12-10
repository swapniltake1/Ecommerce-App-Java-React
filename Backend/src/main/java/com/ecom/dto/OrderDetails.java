package com.ecom.dto;

import java.math.BigDecimal;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Embeddable
@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderDetails {
    
    private Long productId;
    private String productName;
    private BigDecimal productPrice;
    private BigDecimal productDiscount;
    private String productDescription;
    private String productCategory;

    @Column(columnDefinition = "LONGTEXT")
    private String productPhoto;
}

