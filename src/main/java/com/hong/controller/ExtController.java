package com.hong.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by Cai on 2014/5/19 11:54.
 */
@Controller
public class ExtController {
    @RequestMapping("/index")
    public String index() {
        return "/index";
    }
}
