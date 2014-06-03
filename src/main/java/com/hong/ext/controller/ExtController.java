package com.hong.ext.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Cai on 2014/5/19 11:54.
 */
@RestController
public class ExtController {
    @RequestMapping("/index")
    public String index() {
        return "/index";
    }
}
