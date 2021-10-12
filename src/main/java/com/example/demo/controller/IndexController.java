package com.example.demo.controller;

import com.example.demo.model.Activity;
import com.example.demo.model.Equipment;
import com.example.demo.repository.ActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Set;

@Controller
public class IndexController {

    @Autowired
    ActivityRepository activityRepository;
    @GetMapping("/test")
    public String index()
    {
        List<Activity> activities = activityRepository.findAll();
        for (Activity activity : activities) {
            Set<Equipment> equipment = activity.getEquipment();
            for (Equipment equipment1 : equipment) {
                System.out.println(equipment1.getName());
            }
        }
        return "index2";
    }
}
