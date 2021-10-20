package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class NavigationController {

    @GetMapping("/login")
    public String get_user(){
        return "login";
    }

    @GetMapping("/create_booking")
    public String create_reservation(){
        return "create_booking";
    }

    @GetMapping("/")
    public String index(){
        return "index";
    }
}

