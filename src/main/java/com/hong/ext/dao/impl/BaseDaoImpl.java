package com.hong.ext.dao.impl;

import com.hong.ext.dao.IBaseDao;
import com.hong.ext.domain.User;
import org.hibernate.Session;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.orm.hibernate4.SessionFactoryUtils;
import org.springframework.orm.hibernate4.support.HibernateDaoSupport;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.io.Serializable;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

/**
 * Created by Cai on 2014/6/3 13:57.
 * TODO
 */
public abstract class BaseDaoImpl<T extends Serializable, PK extends Serializable> extends HibernateDaoSupport implements IBaseDao<T, PK> {
    private final static Logger logger = LoggerFactory.getLogger(BaseDaoImpl.class);

    @PersistenceContext
    private EntityManager em;

    private Connection getConnection() throws SQLException {
        Session session = em.unwrap(Session.class);

        return SessionFactoryUtils.getDataSource(session.getSessionFactory()).getConnection();
    }

    @Override
    public long getHqlRecordCount(String hql) {
        User user = new User();

        return 0;
    }

    @Override
    public List executeHql(String hql, int position, int length) {
        return null;
    }

    @Override
    public List executeHql(String hql) {
        return null;
    }

    @Override
    public void saveObject(T o) {
        getHibernateTemplate().persist(o);
    }

    @Override
    public T updateObject(T o) {
        return null;
    }

    @Override
    public boolean deleteObject(T o) {
        return false;
    }

    @Override
    public int batchExecuteHql(String hql) {
        return 0;
    }

    @Override
    public boolean deleteList(List list) {
        return false;
    }

    @Override
    public T findObjectById(Class<T> objClass, PK id) {
        return getHibernateTemplate().get(objClass, id);
    }

    @Override
    public void refreshCache() {
        getHibernateTemplate().flush();
        getHibernateTemplate().clear();
    }

    @Override
    public List executeReportSql(String sql, int position, int length, Object[] returnParams) {
        return null;
    }

    @Override
    public List<Map> executeSqlToRecordMap(String sql, int position, int length, Object[] returnParams) {
        return null;
    }

    @Override
    public List getTableSchemas() {
        return null;
    }

    @Override
    public List getTablesInSchema(String schema, String tableName) {
        return null;
    }

    @Override
    public List getColumnsInTable(String table, String column) {
        return null;
    }

    @Override
    public long getSqlRecordCount(String sql) {
        return 0;
    }

    @Override
    public List executeSql(String sql, int position, int length) {
        return null;
    }

    @Override
    public List executeSql(String sql) {
        return null;
    }

    @Override
    public boolean execute(String sql) {
        return false;
    }
}
