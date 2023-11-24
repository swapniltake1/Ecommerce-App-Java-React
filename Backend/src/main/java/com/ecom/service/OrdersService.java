package com.ecom.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ecom.dao.OrderDetailsRepository;
import com.ecom.dao.OrderEntityRepo;
import com.ecom.dto.OrderDetails;
import com.ecom.dto.OrderEntity;
import com.ecom.dto.UserAddress;

@Service
public class OrdersService {
    
    private final OrderDetailsRepository orderDetailsRepository;
    
    @Autowired
    private OrderEntityRepo orderEntityRepo;

    @Autowired // Or use constructor injection
    public OrdersService(OrderDetailsRepository orderDetailsRepository) {
        this.orderDetailsRepository = orderDetailsRepository;
    }

    public OrderEntity saveOrderDetails(OrderEntity order) {
        OrderDetails orderDetails = order.getOrderDetails(); 
        OrderDetails savedOrderDetails = orderDetailsRepository.save(orderDetails);
        
        UserAddress userAddress = order.getUserAddress();
        userAddress.setCity(order.getUserAddress().getCity());
        userAddress.setCountry(order.getUserAddress().getCountry());
        userAddress.setPincode(order.getUserAddress().getPincode());
        userAddress.setState(order.getUserAddress().getState());
        userAddress.setStreet(order.getUserAddress().getStreet());
        
        System.out.println("User Address "+userAddress);
        
        

        
        order.setOrderDetails(savedOrderDetails);

        OrderEntity savedOrder = orderDetailsRepository.save(order); 
        return savedOrder;
    }

    // Other methods in your OrdersService class
}
