package com.hiidayahub.hiidayahub.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Teacher {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    private User user;

    private String bio;
    private String country;
    private String language; // e.g., Amharic, Afaan Oromo
    private String experience; // text or years
    private Double hourlyRate;
}
