package com.hiidayahub.hiidayahub.controller;

import com.hiidayahub.hiidayahub.config.JwtUtil;
import com.hiidayahub.hiidayahub.dto.AuthRequest;
import com.hiidayahub.hiidayahub.dto.AuthResponse;
//import com.hiidayahub.hiidayahub.entity.User;
import com.hiidayahub.hiidayahub.entity.User;
import com.hiidayahub.hiidayahub.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;
    private final UserService userService;
    private final com.hiidayahub.hiidayahub.repository.TeacherRepository teacherRepository;

    public AuthController(AuthenticationManager authenticationManager, JwtUtil jwtUtil, UserService userService,
            com.hiidayahub.hiidayahub.repository.TeacherRepository teacherRepository) {
        this.authenticationManager = authenticationManager;
        this.jwtUtil = jwtUtil;
        this.userService = userService;
        this.teacherRepository = teacherRepository;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        user.setRole("STUDENT");
        User saved = userService.register(user);
        return ResponseEntity.ok(saved);
    }

    @PostMapping("/register-teacher")
    public ResponseEntity<?> registerTeacher(
            @RequestBody com.hiidayahub.hiidayahub.dto.TeacherRegistrationRequest req) {
        // 1. Create User
        User user = new User();
        user.setEmail(req.getEmail());
        user.setPassword(req.getPassword());
        user.setRole("TEACHER");
        User savedUser = userService.register(user);

        // 2. Create Teacher linked to User
        com.hiidayahub.hiidayahub.entity.Teacher teacher = com.hiidayahub.hiidayahub.entity.Teacher.builder()
                .user(savedUser)
                .bio(req.getBio())
                .country(req.getCountry())
                .language(req.getLanguage())
                .experience(req.getExperience())
                .hourlyRate(req.getHourlyRate())
                .build();

        teacherRepository.save(teacher);

        return ResponseEntity.ok(savedUser);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest req) {
        Authentication auth = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(req.getEmail(), req.getPassword()));
        String token = jwtUtil.generateToken(req.getEmail());
        return ResponseEntity.ok(new AuthResponse(token));
    }
}