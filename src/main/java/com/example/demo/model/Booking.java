package com.example.demo.model;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;
@Entity
public class Booking {

    @Id
    @GeneratedValue
    Integer booking_no;
    String activity_name;
    String instructor;
    Date date;
    String time;
    Integer participants;
    String name;
    String lastName;


    public Booking(String activity_name ) {
        this.activity_name = activity_name;
    }

    public Booking() {
    }

    public String getActivity_name() {
        return activity_name;
    }

    public void setActivity_name(String activity_name) {
        this.activity_name = activity_name;
    }

    public Integer getBooking_no() {
        return booking_no;
    }

    public void setBooking_no(Integer booking_no) {
        this.booking_no = booking_no;
    }

    public String getInstructor() {
        return instructor;
    }

    public void setInstructor(String instructor) {
        this.instructor = instructor;
    }

    public Date getDate() {
        return date;
    }
    public void setDate(Date date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public Integer getParticipants() {
        return participants;
    }

    public void setParticipants(Integer participants) {
        this.participants = participants;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
}