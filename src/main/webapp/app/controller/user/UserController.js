/**
 * Created by cai on 2014/8/31 20:20.
 */
Ext.define('Orochi.controller.user.UserController', {
    extend: 'Ext.app.Controller',
    stores: ['user.UserStore'],
    views: [
        'user.UserList'
    ]
});