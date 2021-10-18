package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.ObjectProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import java.util.Optional;

@Controller
public class LoginController {

    @Autowired
    UserRepository userRepository;

    @PostMapping(value ="/user_login", consumes = "application/json")
    public String userLogin(@RequestBody User user) {
        Optional<User> user1 = userRepository.findByUserNameAndPassword(user.getUserName(), user.getPassword());
        user1.ifPresent(value -> System.out.println(value.getEmail()));
        if (user1.isPresent()){
            System.out.println('H');
            return "index";
        }
        else return "login";
    }

    @PostMapping(value ="/createUser", consumes = "application/json")
    public String createUser(@RequestBody User user) {
        userRepository.save(user);

        return "index";
    }


}

