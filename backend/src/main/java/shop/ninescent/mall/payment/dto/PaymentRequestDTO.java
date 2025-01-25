package shop.ninescent.mall.payment.dto;

import lombok.Data;

@Data
public class PaymentRequestDTO {

    private Long paymentNo;

    private String paymentId;

    private String paymentMethod;

    private Long totalAmount;
}
