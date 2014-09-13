/**
 * Created by cai on 2014/8/31 20:20.
 */
Ext.define('Orochi.view.user.UserList', {
    extend: 'Ext.panel.Panel',
    requires: ['Ext.form.Panel', 'Ext.form.FieldSet'],
    alias: 'widget.userList',
    itemId: 'UserList',
    title: '用户管理',
//    closable: true,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    bodyPadding: 10,

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                itemId: 'queryUserListForm',
                title: '查询信息',
                collapsible: true,
                autoScroll: true,
                border: true,
                layout: 'column',
                defaults: {
                    margin: '10 20 10',
                    columnWidth: 0.25,
                    labelWidth: 40
                },
                items: [
                    {
                        xtype: 'textfield',
                        name: 'name',
                        fieldLabel: '姓名'
                        // So that the Controller can access it easily
                        // 在viewController中可以使用filterField = this.lookupReference('nameFilterField')轻松获取值，filterField.value
//                        reference: 'nameFilterField',
                    },
                    {
                        xtype: 'textfield',
                        name: 'email',
                        fieldLabel: 'Email'
                    }
                ],
                buttonAlign: 'center',
                buttons: [
                    {
                        name: 'queryBtn',
                        text: '查 询'
                    },
                    {
                        name: 'resetBtn',
                        text: '重 置'
                    }
                ]
            },
            {
                xtype: 'grid',
                title: '用户列表',
                itemId: 'userList',
                collapsible: true,
                border: true,
                store: 'user.UserStore',
                columns: [
                    {header: '姓名', dataIndex: 'name', flex: 1},
                    {header: 'Email', dataIndex: 'email', flex: 1}
                ],
                tools: [
                    {
                        name: 'refreshUserList',
                        type: 'refresh',
                        tooltip: function(event, toolEl, panel) {
                            alert('adduser');   // TODO 单击新增user，应该弹出windows窗口
                        }
                    },
                    {
                        type: 'add',
                        tooltip: '删除',
                        handler: function(event, toolEl, panel) {
                            alert('adduser');   // TODO 单击删除选中的user，应该可以批量删除
                        }
                    }
                ]
            }
        ];

//        this.columns = [
//            {header: '姓名', dataIndex: 'name', flex: 1},
//            {header: 'Email', dataIndex: 'email', flex: 1}
//        ];

        this.callParent();
    }
});