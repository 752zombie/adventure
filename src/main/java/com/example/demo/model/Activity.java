package com.example.demo.model;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Activity {

     @Id
     Integer activity_id;
     String name;
     Integer ageLimit;
     Integer userCapacity;
     Integer heighLimit;
     Integer duration;

     @OneToMany
     @JoinColumn(name = "equipment_id")
     private Set<Equipment> equipment = new HashSet<>();


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

     public Integer getHeighLimit() {
          return heighLimit;
     }

     public void setHeighLimit(Integer heighLimit) {
          this.heighLimit = heighLimit;
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
}
