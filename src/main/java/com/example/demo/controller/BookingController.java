package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class BookingController {

    @GetMapping("/booking/{id}")
    public String bookingPage(@PathVariable("id") Integer id) {
        return "booking";
    }


    @GetMapping("/bookings")
    public String createBooking() {return "bookings";}

}