package SpendSense.Backend.security;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

import org.springframework.lang.NonNull;

public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtTokenUtil jwtTokenUtil;

    // Constructor to accept both AuthenticationManager and JwtTokenUtil
    public JwtAuthenticationFilter(AuthenticationManager authenticationManager, JwtTokenUtil jwtTokenUtil) {
        this.jwtTokenUtil = jwtTokenUtil;
    }

    @Override
    protected void doFilterInternal(@NonNull HttpServletRequest request,
                                    @NonNull HttpServletResponse response,
                                    @NonNull FilterChain filterChain) throws ServletException, IOException {

        // Get the token from the Authorization header
        String token = request.getHeader("Authorization");

        // Check if token exists and starts with "Bearer "
        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7); // Remove "Bearer " prefix

            // Extract username from the token
            String username = jwtTokenUtil.extractUsername(token);

            // If username exists and authentication context is not already set
            if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
                // Validate token and if valid, set authentication
                if (jwtTokenUtil.validateToken(token, username)) {
                    Authentication authentication = new UsernamePasswordAuthenticationToken(
                            username, null, null);  // Create a token without credentials
                    SecurityContextHolder.getContext().setAuthentication(authentication); // Set the authentication in the context
                }
            }
        }

        // Continue the filter chain
        filterChain.doFilter(request, response);
    }
}
