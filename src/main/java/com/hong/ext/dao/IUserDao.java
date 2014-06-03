package com.hong.ext.dao;

import com.hong.ext.domain.User;

/**
 * Created by Cai on 2014/6/3 18:16.
 */
public interface IUserDao extends IBaseDao<User, String> {
    @Override
    User findObjectById(Class<User> objClass, String id);
}
