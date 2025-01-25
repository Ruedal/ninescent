package shop.ninescent.mall.payment.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import shop.ninescent.mall.payment.PaymentVerificationException;
import shop.ninescent.mall.payment.PortOneClient;
import shop.ninescent.mall.payment.domain.Payment;
import shop.ninescent.mall.payment.dto.PaymentResponseDTO;
import shop.ninescent.mall.payment.dto.PortOnePaymentResponseDTO;
import shop.ninescent.mall.payment.repository.PaymentRepository;

import java.sql.Date;
import java.text.SimpleDateFormat;

@Service
@RequiredArgsConstructor
public class PaymentService {

    private final PaymentRepository paymentRepository;
    private final PortOneClient portOneClient;
    private final ObjectMapper objectMapper;

    @Transactional
    public PaymentResponseDTO verifyPayment(String portOnePaymentId) {

        PortOnePaymentResponseDTO portOnePaymentResponseDTO = portOneClient.getPaymentDetails(portOnePaymentId);

        System.out.println("Received payment details: " + portOnePaymentResponseDTO);

        if (!"PAID".equals(portOnePaymentResponseDTO.getStatus())) {
            throw new PaymentVerificationException("Payment verification failed");
        }

        verifyPaymentAmount(portOnePaymentResponseDTO);

        Payment payment = new Payment();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String formattedDate = sdf.format(new Date(System.currentTimeMillis()));
        payment.setPaymentId(getPaymentId(portOnePaymentResponseDTO.getCustomData()));
        payment.setOrderId(getOrderId(portOnePaymentResponseDTO.getCustomData()));
        payment.setUserNo(getUserNo(portOnePaymentResponseDTO.getCustomData()));
        payment.setPaymentStatus("COMPLETED");
        payment.setPaymentMethod(getPayMethod(portOnePaymentResponseDTO.getCustomData()));
        payment.setPaymentDate(formattedDate);
        payment.setTotalAmount(getTotalAmount(portOnePaymentResponseDTO.getCustomData()));

        System.out.println("Payment details: PaymentMethod = " + payment.getPaymentMethod() + ", TotalAmount = " + payment.getTotalAmount());

        paymentRepository.save(payment);

        return new PaymentResponseDTO(payment.getPaymentNo(), payment.getPaymentId(), "PAID");
    }

    private void verifyPaymentAmount(PortOnePaymentResponseDTO portOnePaymentResponseDTO) {

        if (!isValidPaymentAmount(portOnePaymentResponseDTO)) {
            throw new PaymentVerificationException("Invalid amount");
        }
    }

    private boolean isValidPaymentAmount(PortOnePaymentResponseDTO portOnePaymentResponseDTO) {

        return true;
    }

    private Long getOrderId(String customData) {
        try {
            JsonNode node = objectMapper.readTree(customData);
            return node.get("orderId").asLong();
        } catch (Exception e) {
            throw new PaymentVerificationException("Invalid custom data");
        }
    }

    private Long getUserNo(String customData) {
        try {
            JsonNode node = objectMapper.readTree(customData);
            return node.get("userNo").asLong();
        } catch (Exception e) {
            throw new PaymentVerificationException("Invalid custom data");
        }
    }

    private Long getTotalAmount(String customData) {
        try {
            JsonNode node = objectMapper.readTree(customData);
            return node.get("totalAmount").asLong();
        } catch (Exception e) {
            throw new PaymentVerificationException("Invalid custom data");
        }
    }

    private String getPayMethod(String customData) {
        try {
            JsonNode node = objectMapper.readTree(customData);
            return node.get("payMethod").asText();
        } catch (Exception e) {
            throw new PaymentVerificationException("Invalid custom data");
        }
    }

    private String getPaymentId(String customData) {
        try {
            JsonNode node = objectMapper.readTree(customData);
            return node.get("paymentId").asText();
        } catch (Exception e) {
            throw new PaymentVerificationException("Invalid custom data");
        }
    }
}
