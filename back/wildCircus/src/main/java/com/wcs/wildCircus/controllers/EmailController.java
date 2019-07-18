package com.wcs.wildCircus.controllers;

import com.wcs.wildCircus.config.ConstantConfig;
import com.wcs.wildCircus.entities.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Controller;


@CrossOrigin(origins = "*")
@RestController
public class EmailController {

    @Autowired
    public JavaMailSender emailSender;

    @ResponseBody
    @PostMapping(value = "/sendSimpleEmail")
    public String sendSimpleEmail(@RequestBody  Member contact) {

        String msg = contact.getLastName() + "\n";
        msg += contact.getFirstName() + "\n";
        msg += contact.getPhoneNumber() + "\n";
        msg += contact.getEmail() + "\n";
        msg += contact.getComment() + "\n";

        System.out.println(msg);

        SimpleMailMessage message = new SimpleMailMessage();

        message.setTo(ConstantConfig.FRIEND_EMAIL);
        message.setSubject("Un nouveau client c'est inscrit !");
        message.setText(msg);


        this.emailSender.send(message);

        return "Email sent!";
    }
}