/**
 * Created by Cai on 2014/4/25.
 */

Ext.define('AM.store.Users', {
    extend: 'Ext.data.Store',
    model: 'AM.model.User',
    autoLoad: true,

    proxy: {
        type: 'ajax',
        api: {
            read: 'data/users.json',
            update: 'data/updateUsers.json'
        },
        reader: {
            type: 'json',
            root: 'users',
            successProperty: 'success'
        }
    }
//    fields: ['name', 'email'],
//    data: [
//        {name: 'Cai', email: 'cai@sencha.com'},
//        {name: 'Tommy', email: 'tommy@sencha.com'}
//    ]
});