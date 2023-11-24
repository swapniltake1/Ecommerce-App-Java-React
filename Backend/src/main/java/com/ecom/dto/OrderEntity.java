package com.ecom.dto;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long orderId;

    @OneToOne
    private OrderDetails orderDetails;

    @Embedded
    private UserAddress userAddress;

    private String methodName;
    
    private String purchasedUserId;
    
    private String purchasedUserName;
    
    private String purchasedUserPhone;
    
    private String purchasedUserEmail;
    
    
}

