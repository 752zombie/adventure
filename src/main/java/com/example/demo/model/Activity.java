package com.example.demo.model;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Activity {


     @Id
     @GeneratedValue
     Integer activity_id;
     String name;
     String description;
     Integer ageLimit;
     Integer userCapacity;
     Integer heightLimit;
     Integer duration;

     @OneToMany
     @JoinColumn(name = "activity_id")
     private Set<Equipment> equipment = new HashSet<>();

     public Activity() {
     }

     public Activity(String name, Integer ageLimit) {
          this.name = name;
          this.ageLimit = ageLimit;
     }

     public Integer getId() {
          return activity_id;
     }

     public void setId(Integer activity_id) {
          this.activity_id = activity_id;
     }

     public String getName() {
          return name;
     }

     public void setName(String name) {
          this.name = name;
     }

     public Integer getAgeLimit() {
          return ageLimit;
     }

     public void setAgeLimit(Integer ageLimit) {
          this.ageLimit = ageLimit;
     }

     public Integer getUserCapacity() {
          return userCapacity;
     }

     public void setUserCapacity(Integer userCapacity) {
          this.userCapacity = userCapacity;
     }

     public Integer getHeightLimit() {
          return heightLimit;
     }

     public void setHeightLimit(Integer heighLimit) {
          this.heightLimit = heighLimit;
     }

     public Integer getDuration() {
          return duration;
     }

     public void setDuration(Integer duration) {
          this.duration = duration;
     }

     public Integer getActivity_id() {
          return activity_id;
     }

     public void setActivity_id(Integer activity_id) {
          this.activity_id = activity_id;
     }

     public Set<Equipment> getEquipment() {
          return equipment;
     }

     public void setEquipment(Set<Equipment> equipment) {
          this.equipment = equipment;
     }

     public String getDescription() {
          return description;
     }

     public void setDescription(String description) {
          this.description = description;
     }
}
