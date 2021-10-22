package com.example.demo.restcontroller;


import com.example.demo.model.Activity;
import com.example.demo.model.Booking;
import com.example.demo.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
public class BookingRestController {


    @Autowired
    BookingRepository bookingRepository;
    @GetMapping("/api/get-booking/{id}")
    public ResponseEntity<Booking> getBooking(@PathVariable Integer id) {
        Optional<Booking> booking = bookingRepository.findById(id);
        if (booking.isPresent()) {
            return new ResponseEntity<Booking>(booking.get(), HttpStatus.FOUND);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping(path = "/booking",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Booking> createBooking(@RequestBody Booking newBooking) throws Exception {
        Booking booking = bookingRepository.save(newBooking);
        if (booking== null) {
            throw new Exception();
        } else {
            return new ResponseEntity<>(booking, HttpStatus.CREATED);
        }
    }

    @GetMapping("api/get-bookings")
    public ResponseEntity<List<Booking>> getBookings() {
        List<Booking> bookings = bookingRepository.findAll();

        return new ResponseEntity<>(bookings,HttpStatus.FOUND);
    }

    @PostMapping("/api/delete-booking/{id}")
    public ResponseEntity<Booking> deleteBooking(@PathVariable("id") Integer id) {
        bookingRepository.deleteById(id);
        return new ResponseEntity<Booking>(HttpStatus.ACCEPTED);
    }

}
