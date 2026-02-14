package com.labact.service;


import com.labact.entity.UserEntity;
import com.labact.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.time.LocalDateTime;

@Service
@Transactional
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }
    //Register
    public UserEntity registerUser(String email, String password){
        if(userRepository.existsByEmail(email)){
            throw new RuntimeException("Email already exists!");
        }
        UserEntity user = new UserEntity(email, password);
        return userRepository.save(user);
    }
    //Login user and update lastlogin
    public UserEntity loginUser(String email, String password){
        UserEntity user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found!"));
        if(!user.getPassword().equals(password)){
            throw new RuntimeException("Invalid password!");
        }
        user.setLastLogin(LocalDateTime.now());
        return userRepository.save(user);
    }
    //Update user email and password
    public UserEntity updateUser(Long id, String email, String password){
        UserEntity user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found!"));
        if(email != null && !email.isEmpty()){
            user.setEmail(email);
        }
        if(password != null && !password.isEmpty()){
            user.setPassword(password);
        }
        return userRepository.save(user);
    }
    //Get all users
    public List<UserEntity> getAllUsers(){
        return userRepository.findAll();
    }
    //Delete user
    public void deleteUser(Long id){
        if(!userRepository.existsById(id)){
            throw new RuntimeException("User not found!");
        }
        userRepository.deleteById(id);
    }
    //Get user by id
    public UserEntity getUserById(Long id){
        return userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found!"));
    }
}