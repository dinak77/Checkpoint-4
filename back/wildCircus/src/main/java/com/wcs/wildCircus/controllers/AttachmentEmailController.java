package com.wcs.wildCircus.controllers;

import java.io.File;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import com.wcs.wildCircus.config.ConstantConfig;
import com.wcs.wildCircus.entities.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin("*")
public class AttachmentEmailController {

    public AttachmentEmailController() {}

    @Autowired
    public JavaMailSender emailSender;

    @PostMapping("/sendAttachmentEmail")
    public String sendAttachmentEmail(@RequestBody Member member) throws MessagingException {

        MimeMessage message = emailSender.createMimeMessage();

        boolean multipart = true;

        MimeMessageHelper helper = new MimeMessageHelper(message, multipart);

        helper.setTo(ConstantConfig.FRIEND_EMAIL);
        helper.setSubject("Test email with attachments from " + member.getFirstName());

        helper.setText("Hello, Im testing email!" + "\n" +
                "Fisrtname: " + member.getFirstName() + "\n" +
                "Lastname: " + member.getLastName() + "\n" +
                "phoneNumber: " + member.getPhoneNumber() + "\n" +
                "email: " + member.getEmail() + "\n" +
                "comment:" + member.getComment() +"."
        );


        emailSender.send(message);

        return "Email Sent!";
    }

}
