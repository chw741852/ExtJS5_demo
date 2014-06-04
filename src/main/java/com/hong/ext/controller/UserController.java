package com.hong.ext.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by Cai on 2014/6/4 17:34.
 */
@Controller
@RequestMapping("/user")
public class UserController {
    @RequestMapping("/list")
    public String list() {

        return "/user/list";
    }
}
