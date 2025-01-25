package shop.ninescent.mall.payment.domain;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Date;

@Entity
@Data
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long paymentNo;

    @Column(nullable = false)
    private String paymentId;

    @Column(nullable = false)
    private Long orderId;

    @Column(nullable = false)
    private Long userNo;

    @Column(nullable = false)
    private String paymentStatus;

    @Column(nullable = false)
    private String paymentMethod;

    @Column(nullable = false)
    private String paymentDate;

    @Column(nullable = false)
    private Long totalAmount;
}
