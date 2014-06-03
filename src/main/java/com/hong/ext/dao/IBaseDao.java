package com.hong.ext.dao;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

/**
 * Created by Cai on 2014/6/3 11:23.
 */
public interface IBaseDao<T extends Serializable, PK extends Serializable> {
    /**
     * hql获取数量
     * @param hql
     * @return
     */
    public long getHqlRecordCount(final String hql);

    /**
     * hql分页查询数据list
     * @param hql
     * @param position
     * @param length
     * @return
     */
    public List<T> executeHql(final String hql, final int position, final int length);

    /**
     * hql查询数据list
     * @param hql
     * @return
     */
    public List<T> executeHql(final String hql);

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
    public T updateObject(final T t);

    /**
     * 删除对象
     * @param t
     * @return
     */
    public boolean deleteObject(final T t);

    /**
     * 批量执行hql
     * @param hql
     * @return
     */
    public int batchExecuteHql(final String hql);

    /**
     * 删除list集合中所有对象
     * @param list
     * @return
     */
    public boolean deleteList(List<T> list);

    /**
     * 按ID查询对象
     * @param objClass
     * @param id
     * @return
     */
    public T findObjectById(Class<T> objClass, PK id);

    /**
     * 刷新缓存
     */
    public void refreshCache();
    // TODO
    public List executeReportSql(final String sql, final int position,final int length,final Object[] returnParams);
    public List<Map> executeSqlToRecordMap(final String sql, final int position,final int length,final Object[] returnParams);
    public List getTableSchemas();
    public List getTablesInSchema(final String schema, final String tableName);
    public List getColumnsInTable(final String table, final String column);

    /**
     * 原生sql获取数量
     * @param sql
     * @return
     */
    public long getSqlRecordCount(final String sql);

    /**
     * 原生sql分页查询数据list
     * @param sql
     * @param position
     * @param length
     * @return
     */
    public List<T> executeSql(final String sql, final int position,final int length);

    /**
     * 原生sql查询数据list
     * @param sql
     * @return
     */
    public List<T> executeSql(final String sql);
    public boolean execute(final String sql);
}
