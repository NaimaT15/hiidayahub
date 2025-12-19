package com.hiidayahub.hiidayahub.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private User student;

    @ManyToOne
    private Teacher teacher;

    private LocalDateTime schedule;
    private String meetingLink;
    private String status; // PENDING, CONFIRMED, DONE, CANCELLED
}
