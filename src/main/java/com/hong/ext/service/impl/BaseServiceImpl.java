package com.hong.ext.service.impl;

import com.hong.ext.dao.IBaseDao;
import com.hong.ext.service.IBaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.Serializable;

/**
 * Created by Cai on 2014/6/4 9:50.
 */
@Service("baseService")
public abstract class BaseServiceImpl<T extends Serializable, PK extends Serializable> implements IBaseService<T, PK> {
    @Autowired
    private IBaseDao baseDao;

    @Override
    public void saveObject(T t) {
        baseDao.saveObject(t);
    }

    @Override
    public void updateObject(T t) {
        baseDao.updateObject(t);
    }

    @Override
    public boolean deleteObject(T t) {
        return baseDao.deleteObject(t);
    }

    @Override
    public T findObjectById(Class<T> objClass, PK id) {
        return (T) baseDao.findObjectById(objClass, id);
    }
}
