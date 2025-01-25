package shop.ninescent.mall.payment.dto;

import lombok.Data;

@Data
public class PortOnePaymentResponseDTO {

    private Long paymentNo;

    private String status;

    private String payMethod;

    private Long totalAmount;

    private String customData;
}
