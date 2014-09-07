/**
 * Created by cai on 2014/9/6 12:10.
 */
Ext.define('Orochi.controller.NavTreeController', {
    extend: 'Ext.app.Controller',
//    requires: ['Orochi.core.ImgButton', 'Orochi.core.ImgBigButton'],
    views: ['NavTreeView'],

    init: function() {
        this.control({
            'navTree': {
                itemdblclick: this.treeLeafDbClick      // 树形菜单双击事件
            }
        });
    },

    refs: [
        {
            ref: 'contentPanel',
            selector: '#app-center'
        }
    ],

    treeLeafDbClick: function(selModel, record) {
        var tabLayouts = this.getContentPanel();

        if (record.get('leaf')) {
            var selTab = Ext.getCmp(record.getId());
            if (selTab == undefined) {
                Manager.create('Orochi.controller.user.UserController', {
                    id: record.getId(),
                    title: '用户列表',
                    closable: true
                });
//                selTab = tabLayouts.add({
//                    id: record.getId(),
//                    title: record.getId() + '-panel',
//                    html: record.getId(),    // frameborder="0"
//                    xtype: 'userlist',
//                    items: {
//                        xtype: 'userlist'
//                    },
//                    closable: true
//                });
            }
            tabLayouts.setActiveTab(selTab);
        }
    }
});