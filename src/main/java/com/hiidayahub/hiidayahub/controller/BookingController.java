package com.hiidayahub.hiidayahub.controller;
import com.hiidayahub.hiidayahub.entity.Booking;
import com.hiidayahub.hiidayahub.repository.BookingRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
public class BookingController {
    private final BookingRepository bookingRepository;

    public BookingController(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }

    @PostMapping
    public ResponseEntity<?> book(@RequestBody Booking booking) {
        booking.setStatus("PENDING");
        Booking saved = bookingRepository.save(booking);
        return ResponseEntity.ok(saved);
    }

    @GetMapping("/student/{id}")
    public ResponseEntity<List<Booking>> byStudent(@PathVariable Long id) {
        return ResponseEntity.ok(bookingRepository.findByStudentId(id));
    }

    @GetMapping("/teacher/{id}")
    public ResponseEntity<List<Booking>> byTeacher(@PathVariable Long id) {
        return ResponseEntity.ok(bookingRepository.findByTeacherId(id));
    }
}
