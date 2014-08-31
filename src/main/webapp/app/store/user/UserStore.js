/**
 * Created by cai on 2014/8/31 20:15.
 */
Ext.define('Orochi.store.user.UserStore', {
    extend: 'Ext.data.Store',
    requires: 'Orochi.model.user.UserModel',
    model: 'Orochi.model.user.UserModel',
    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: contextPath + '/data/users.json',
        reader: {
            type: 'json',
            successProperty: 'success',
            rootProperty: 'users',
            totalProperty: 'total'
        }
    }
});