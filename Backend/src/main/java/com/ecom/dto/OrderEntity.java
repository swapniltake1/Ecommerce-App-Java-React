package com.ecom.dto;
import java.time.LocalDate;
import java.util.Date;

import jakarta.persistence.Embedded;
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
public class OrderEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long orderId;

    @Embedded
    private OrderDetails orderDetails;

    @Embedded
    private UserAddress userAddress;

    private String methodName;
    
    private String purchasedUserId;
    
    private String purchasedUserName;
    
    private String purchasedUserPhone;
    
    private String purchasedUserEmail;
    
    private Date date;
    

    public void setDate(LocalDate now) {
       
        this.date = java.sql.Date.valueOf(now);
    }

    public Date getDate() {
        return date;
    }
    
    
}

