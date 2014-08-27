/**
 * Created by Cai on 2014/4/25.
 */

Ext.define('AM.view.user.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.userlist',

    store: 'Users',

    title: '用户列表',

    initComponent: function() {
//        this.store = {
//            fields: ['name', 'email'],
//            data: [
//                {name: 'Ed', email: 'ed@sencha.com'},
//                {name: 'Tommy', email: 'tommy@sencha.com'}
//            ]
//        };

        this.columns = [
            {header: '姓名', dataIndex: 'name', flex: 1},
            {header: 'Email', dataIndex: 'email', flex: 1}
        ];

        this.callParent(arguments);
    }
});