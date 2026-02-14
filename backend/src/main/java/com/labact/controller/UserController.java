package com.labact.controller;


import com.labact.entity.UserEntity;
import com.labact.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    //Register
    @PostMapping("/register")
    public ResponseEntity<UserEntity> register(@RequestParam String email, @RequestParam String password){
        return ResponseEntity.ok(userService.registerUser(email, password));
    }
    //Login
    @PostMapping("/login")
    public ResponseEntity<UserEntity> login(@RequestParam String email, @RequestParam String password){
        return ResponseEntity.ok(userService.loginUser(email, password));
    }
    //Update user
    @PutMapping("update/{id}")
    public ResponseEntity<UserEntity> update(@PathVariable Long id, @RequestParam(required = false) String email, @RequestParam(required = false) String password){
        return ResponseEntity.ok(userService.updateUser(id, email, password));
    }
    //Get all users
    @GetMapping
    public ResponseEntity<List<UserEntity>> getAll(){
        return ResponseEntity.ok(userService.getAllUsers());
    }
    //Get user by id
    @GetMapping("search/{id}")
    public ResponseEntity<UserEntity> getById(@PathVariable Long id){
        return ResponseEntity.ok(userService.getUserById(id));
    }
    //Delete user
    @DeleteMapping("delete/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id){
        userService.deleteUser(id);
        return ResponseEntity.ok("User Delete Successfully!");
    }
}