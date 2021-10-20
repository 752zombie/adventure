package com.example.demo.controller;

import com.example.demo.model.Activity;
import com.example.demo.repository.ActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

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

/*
    @Autowired
    ActivityRepository activityRepository;

    @GetMapping("/activities")
    public String createActivity() {
        Activity activity = new Activity();
        activityRepository.save(activity);

        List<Activity> activities = activityRepository.findAll();

        return "activities";
    }*/
}

