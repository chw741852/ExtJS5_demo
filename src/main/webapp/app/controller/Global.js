/**
 * Created by Cai on 2014/8/27 16:45.
 */
Ext.define('Orochi.controller.Global', {
    extend: 'Ext.app.Controller',

    stores: [
        'Navigation'
    ],

    views: [
        'main.Main',
        'Header',
        'ThemeSwitcher',
        'navigation.AccordingPanel',
        'ContentPanel',
        'navigation.Tree'
    ],

    refs: [
        {
            ref: 'contentPanel',
            selector: 'contentPanel'
        }
    ],

    init: function() {
        this.control({
            'navigation-tree': {
                itemdblclick: this.treeLeafDbClick
            }
        });
    },

    treeLeafDbClick: function(selModel, record) {
        var tabLayouts = this.getContentPanel();

        if (record.get('leaf')) {
            var selTab = Ext.getCmp(record.getId());
            if (selTab == undefined) {
                selTab = tabLayouts.add({
                    id: record.getId(),
                    title: record.getId() + '-panel',
//                    html: record.getId(),// frameborder="0"
//                    xtype: 'userlist',
                    items: {
                        xtype: 'userlist'
                    },
                    closable: true
                });
            }
            tabLayouts.setActiveTab(selTab);
        }
    }
});