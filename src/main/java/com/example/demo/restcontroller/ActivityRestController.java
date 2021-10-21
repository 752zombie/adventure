package com.example.demo.restcontroller;

import com.example.demo.model.Activity;
import com.example.demo.model.Equipment;
import com.example.demo.repository.ActivityRepository;
import com.example.demo.repository.EquipmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@RestController
public class ActivityRestController {

    @Autowired
    ActivityRepository activityRepository;

    @Autowired
    EquipmentRepository equipmentRepository;


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
        Set<Equipment> equipment = activity.getEquipment();

        for (Equipment equipment1 : equipment) {
            equipmentRepository.save(equipment1);
        }
        activityRepository.save(activity);

        return new ResponseEntity<Activity>(activity, HttpStatus.CREATED);
    }


    @PostMapping(path = "/activity",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Activity> createActivity(@RequestBody Activity newActivity) throws Exception {
        Activity activity = activityRepository.save(newActivity);
        if (activity == null) {
            throw new Exception();
        } else {
            return new ResponseEntity<>(activity, HttpStatus.CREATED);
        }
    }

    @GetMapping("api/get-activities")
    public ResponseEntity<List<Activity>> getActivities() {
        List<Activity> activities = activityRepository.findAll();

        return new ResponseEntity<>(activities,HttpStatus.FOUND);
    }

    @PostMapping("api/delete-activity/{id}")
    public ResponseEntity<Activity> deleteActivity(@PathVariable("id") Integer id) {
        activityRepository.deleteById(id);
        return new ResponseEntity<>(null, HttpStatus.ACCEPTED);
    }


}




