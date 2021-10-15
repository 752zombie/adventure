package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class ActivityController {

    @GetMapping("/activity/{id}")
    public String activityPage(@PathVariable("id") Integer id) {
        return "activity";
    }

    @GetMapping("/test2")
    public String testPage() {
        return "test";
    }
}
