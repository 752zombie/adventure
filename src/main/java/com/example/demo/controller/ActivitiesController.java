package com.example.demo.controller;

import com.example.demo.model.Activity;
import com.example.demo.model.Equipment;
import com.example.demo.repository.ActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;
import java.util.Set;

@Controller
public class ActivitiesController {

        @Autowired
        ActivityRepository activityRepository;
        @GetMapping("/activities")
        public String activities()
        {
            Activity activity = new Activity("hugo", 5);
            activityRepository.save(activity);
            List<Activity> activities = activityRepository.findAll();
            for (Activity activity2 : activities) {
                Set<Equipment> equipment = activity2.getEquipment();
                for (Equipment equipment1 : equipment) {
                    System.out.println(equipment1.getName());
                }
            }
            return "activities";
        }
}
