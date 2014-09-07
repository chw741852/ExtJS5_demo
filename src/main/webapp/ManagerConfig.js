/**
 * Created by Cai on 2014/9/1 14:57.
 */
Ext.define('ManagerConfig', {
    'Orochi.controller.user.UserController': {
        name: '用户管理',
        author: 'cai',
        models: ['user.UserModel'],
        stores: ['user.UserStore'],
        views: ['user.UserList'],
        controller: ['user.UserController']
    }
});