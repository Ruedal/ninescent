package shop.ninescent.mall.payment.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import shop.ninescent.mall.payment.PaymentVerificationException;
import shop.ninescent.mall.payment.dto.PaymentRequestDTO;
import shop.ninescent.mall.payment.dto.PaymentResponseDTO;
import shop.ninescent.mall.payment.service.PaymentService;

@RestController
@RequestMapping("/api/payment")
@RequiredArgsConstructor
public class PaymentController {

    private final PaymentService paymentService;

    @PostMapping("/complete")
    public ResponseEntity<?> completePayment(@RequestBody PaymentRequestDTO request) {
        System.out.println("Received paymentId: " + request.getPaymentId());
        try {
            PaymentResponseDTO paymentResponseDTO = paymentService.verifyPayment(request.getPaymentId());
            return ResponseEntity.ok(paymentResponseDTO);
        } catch (PaymentVerificationException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

}
