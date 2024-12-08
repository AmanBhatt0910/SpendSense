package SpendSense.Backend.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.Claims;
import java.security.Key;
import javax.crypto.spec.SecretKeySpec;
import java.util.Date;

import org.springframework.stereotype.Component;

@Component
public class JwtTokenUtil {

    private final String SECRET_KEY = "Ck9HxmQa7BIo8EcyIn3H9xlqk96PFCeU9pP+y4KITQk=";

    // Generate JWT token for a given username
    public String generateToken(String username) {
        Key key = new SecretKeySpec(SECRET_KEY.getBytes(), SignatureAlgorithm.HS512.getJcaName());

        // Token expiration time (24 hours)
        long EXPIRATION_TIME = 86400000L;
        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(key, SignatureAlgorithm.HS512)
                .compact();
    }

    // Extract username from the token
    public String extractUsername(String token) {
        Claims claims = extractClaims(token);  // Reuse method to extract claims
        return claims.getSubject();
    }

    // Validate the token
    public boolean validateToken(String token, String username) {
        return username.equals(extractUsername(token)) && !isTokenExpired(token);
    }

    // Check if the token is expired
    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    // Extract expiration date from the token
    private Date extractExpiration(String token) {
        Claims claims = extractClaims(token);  // Reuse method to extract claims
        return claims.getExpiration();
    }

    // Extract claims from the token
    private Claims extractClaims(String token) {
        return Jwts.parserBuilder()  // Use parserBuilder() for newer versions
                .setSigningKey(SECRET_KEY.getBytes())  // Use the byte array of the secret key
                .build()
                .parseClaimsJws(token)
                .getBody();
    }
}
