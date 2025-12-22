package com.hiidayahub.hiidayahub.entity;

import jakarta.persistence.*;

@Entity
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String status; // PENDING, APPROVED, CANCELLED

    public Booking() {
    }

    // ✅ REQUIRED methods
    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
