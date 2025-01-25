package shop.ninescent.mall.payment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import shop.ninescent.mall.payment.domain.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Long> {
}
