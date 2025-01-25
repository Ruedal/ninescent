package shop.ninescent.mall.payment;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@ConfigurationProperties(prefix = "portone")
@Component
@Data
public class PortOneProperties {

    private String apiUrl;

    private String apiSecret;
}
