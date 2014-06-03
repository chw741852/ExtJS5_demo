package com.hong.ext.dao.impl;

import com.hong.ext.dao.IUserDao;
import com.hong.ext.domain.User;
import org.springframework.stereotype.Repository;

/**
 * Created by Cai on 2014/6/3 18:27.
 */
@Repository("userDao")
public class UserDaoImpl extends BaseDaoImpl<User, String> implements IUserDao {

}
