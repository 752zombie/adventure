package com.example.demo.model;

import javax.persistence.*;

@Entity
public class Equipment {

    @Id
    @GeneratedValue
    Integer equipment_id;
    String name;

    @ManyToOne
    @JoinColumn(name = "activity_id")
    private Activity activity;

    public Integer getId() {
        return equipment_id;
    }

    public void setId(Integer id) {
        this.equipment_id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
