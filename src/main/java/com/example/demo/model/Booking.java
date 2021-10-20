package com.example.demo.model;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

public class Booking {

    @Id
    @GeneratedValue
    String activity_name;
    Integer booking_no;
    Date date;
    String name;
    String lastName;

    public Booking(String activity_name) {
        this.activity_name = activity_name;
    }

    public Booking() {
    }





}