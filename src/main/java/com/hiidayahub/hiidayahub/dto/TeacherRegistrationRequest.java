package com.hiidayahub.hiidayahub.dto;

import lombok.Data;

@Data
public class TeacherRegistrationRequest {
    private String email;
    private String password;
    private String bio;
    private String country;
    private String language;
    private String experience;
    private Double hourlyRate;
}
