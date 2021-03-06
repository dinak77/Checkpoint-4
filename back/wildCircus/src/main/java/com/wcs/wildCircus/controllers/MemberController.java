package com.wcs.wildCircus.controllers;

import com.wcs.wildCircus.entities.Member;
import com.wcs.wildCircus.repository.MemberDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class MemberController {
    @Autowired
    private MemberDAO dao;
    @GetMapping(value = "/member")
    public List<Member> getAll() {
        return dao.findAll();
    }
    @PostMapping(value = "/member")
    public Member create(@RequestBody Member p_member) throws Exception{
        return dao.save(p_member);
    }
    @DeleteMapping(value = "/member/{id}")
    public boolean delete(@PathVariable("id") Long p_id) throws Exception{
        dao.deleteById(p_id);
        return true;

    }
}
