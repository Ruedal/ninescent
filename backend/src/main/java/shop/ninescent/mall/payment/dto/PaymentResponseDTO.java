package shop.ninescent.mall.payment.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class PaymentResponseDTO {

    private Long paymentNo;

    private String paymentId;

    private String status;

}
