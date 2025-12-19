package com.hiidayahub.hiidayahub.repository;

import com.hiidayahub.hiidayahub.entity.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TeacherRepository extends JpaRepository<Teacher, Long> {
    List<Teacher> findByLanguageContainingIgnoreCase(String language);
}
