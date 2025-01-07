package shop.ninescent.mall.item.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;


@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                // CSRF 설정 (비활성화)
                .csrf(csrf -> csrf.csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
                        .ignoringRequestMatchers("/api/**"))

                // 권한 설정
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/", "/items/**", "/api/**", "/css/**", "/js/**", "/images/**").permitAll() // 허용 경로
                        .anyRequest().authenticated() // 그 외 요청은 인증 필요
                )

                // 기본 로그인 폼 비활성화
                .formLogin(formLogin -> formLogin.disable());

        return http.build();
    }
}