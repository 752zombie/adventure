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

    @GetMapping("/create_reservation")
    public String create_reservation(){
        return "create_reservation";
    }

    @GetMapping("/delete_reservation")
    public String delete_reservation(){
        return "delete_reservation";
    }

    @GetMapping("/reservation_list")
    public String show_reservation_list(){
        return "reservation_list";
    }

    @GetMapping("/create_activity")
    public String create_activity(){
        return "create_activity";
    }

    @GetMapping("/delete_activity")
    public String delete_activity(){
        return "delete_activity";
    }

    @GetMapping("/activity_list")
    public String show_activity_list(){
        return "activity_list";
    }

    @GetMapping("/")
    public String index(){
        return "index";
    }
}

