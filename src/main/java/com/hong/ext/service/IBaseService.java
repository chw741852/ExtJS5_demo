package com.hong.ext.service;

import java.io.Serializable;

/**
 * Created by Cai on 2014/6/3 18:56.
 */
public interface IBaseService<T extends Serializable, PK extends Serializable> {
    /**
     * 保存对象
     * @param t
     * @return
     */
    public void saveObject(final T t);

    /**
     * 更新对象
     * @param t
     * @return
     */
    public void updateObject(final T t);

    /**
     * 删除对象
     * @param t
     * @return
     */
    public boolean deleteObject(final T t);

//    public T
}
