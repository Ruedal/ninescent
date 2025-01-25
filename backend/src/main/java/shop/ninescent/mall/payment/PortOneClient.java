package shop.ninescent.mall.payment;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import shop.ninescent.mall.payment.dto.PortOnePaymentResponseDTO;

@Component
@RequiredArgsConstructor
public class PortOneClient {

    private final WebClient webClient;
    private final PortOneProperties portOneProperties;

    public PortOnePaymentResponseDTO getPaymentDetails(String paymentId) {
        return webClient.get()
                .uri(portOneProperties.getApiUrl() + "/payments/" + paymentId)
                .header("Authorization", "PortOne " + portOneProperties.getApiSecret())
                .retrieve()
                .bodyToMono(PortOnePaymentResponseDTO.class)
                .block();
    }
}
