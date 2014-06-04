package com.hong.ext.service.impl;

import com.hong.ext.domain.User;
import com.hong.ext.service.IUserService;
import org.springframework.stereotype.Service;

/**
 * Created by Cai on 2014/6/4 10:01.
 */
@Service("userService")
public class UserServiceImpl extends BaseServiceImpl<User, String> implements IUserService {
}
