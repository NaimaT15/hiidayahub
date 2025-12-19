package com.hiidayahub.hiidayahub.controller;

import com.hiidayahub.hiidayahub.entity.Teacher;
import com.hiidayahub.hiidayahub.repository.TeacherRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/teachers")
public class TeacherController {
    private final TeacherRepository teacherRepository;

    public TeacherController(TeacherRepository teacherRepository) {
        this.teacherRepository = teacherRepository;
    }

    @PostMapping
    public ResponseEntity<?> create(@RequestBody Teacher t) {
        Teacher saved = teacherRepository.save(t);
        return ResponseEntity.ok(saved);
    }

    @GetMapping
    public ResponseEntity<List<Teacher>> list(@RequestParam(required = false) String language) {
        if (language != null) {
            return ResponseEntity.ok(teacherRepository.findByLanguageContainingIgnoreCase(language));
        }
        return ResponseEntity.ok(teacherRepository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> get(@PathVariable Long id) {
        return ResponseEntity.of(teacherRepository.findById(id));
    }
}
