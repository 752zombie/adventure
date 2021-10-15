package com.example.demo.restcontroller;

import com.example.demo.model.Activity;
import com.example.demo.repository.ActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class ActivityRestController {

    @Autowired
    ActivityRepository activityRepository;


    @GetMapping("/api/get-activity/{id}")
    public ResponseEntity<Activity> getActivity(@PathVariable Integer id) {
        Optional<Activity> activity = activityRepository.findById(id);
        if (activity.isPresent()) {
            return new ResponseEntity<Activity>(activity.get(), HttpStatus.FOUND);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping(value = "/api/save-activity", consumes = "application/json")
    public ResponseEntity<Activity> saveActivity(@RequestBody Activity activity) {
        activityRepository.save(activity);

        return new ResponseEntity<Activity>(activity, HttpStatus.CREATED);
    }


}
