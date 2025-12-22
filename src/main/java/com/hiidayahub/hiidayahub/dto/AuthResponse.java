package com.hiidayahub.hiidayahub.dto;

public class AuthResponse {

    private String token;

    // ✅ constructor with String
    public AuthResponse(String token) {
        this.token = token;
    }

    public String getToken() {
        return token;
    }
}
