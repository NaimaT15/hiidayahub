package com.hiidayahub.hiidayahub.repository;

import com.hiidayahub.hiidayahub.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Long> {
    List<Booking> findByStudentId(Long studentId);
    List<Booking> findByTeacherId(Long teacherId);
}