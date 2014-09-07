/**
 * Created by cai on 2014/8/31 20:20.
 */
Ext.define('Orochi.view.user.UserList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.userlist',
    store: 'user.UserStore',
    title: 'UserList',
//    hideHeaders: true,

    initComponent: function() {
            this.columns = [
            {header: '姓名', dataIndex: 'name', flex: 1},
            {header: 'Email', dataIndex: 'email', flex: 1}
        ];

        this.dockedItems = [{
            dock: 'bottom',
            xtype: 'toolbar',
            layout: {
                type: 'hbox',       // 见 Ext.layout.container.HBox 容器
                align: 'middle',
                pack: 'center'
            },
            items: [{
                xtype: 'button',
                text: 'Settings',
                action: 'settings'
            }, {
                xtype: 'buttongroup',
                items: [{
                    text: 'By Date',
                    action: 'filter-date'
                }, {
                    text: 'ABC',
                    action: 'filter-name'
                }]
            }]
        }];

        this.callParent();
    }
});