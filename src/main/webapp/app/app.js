/**
 * Created by cai on 2014/7/27 10:17.
 */
Ext.define('Orochi.Application', {
    extend: 'Ext.app.Application',
    namespace: 'Orochi',

    requires: [
        'Ext.tip.QuickTipManager',
        'Ext.container.Viewport',
        'Ext.layout.*',
        'Ext.form.*',
        'Ext.panel.Panel',
        'Ext.grid.*',
        'Ext.data.*',
        'Ext.tree.*',
        'Ext.selection.*',
        'Ext.tab.Panel',
        'Ext.ux.layout.Center',
        'Ext.ux.TabReorderer',
        'Orochi.*'
    ],

    controllers: [

    ],

    init: function() {
        Ext.tip.QuickTipManager.init();

        var titlePanel = Ext.create('Ext.Container', {
            id: 'app-header',
            region: 'north',
            height: 52,
            layout: {
                type: 'hbox',
                align: 'middle'
            },

            items: [{
                xtype: 'component',
                id: 'app-header-logo'
            }, {
                xtype: 'component',
                id: 'app-header-title',
                html: 'Ext JS Kitchen Sink',
                flex: 1
            }, {
                xtype: 'themeSwitcher'
            }]
        });

        var tabLayouts = new Ext.TabPanel ({
            id: 'tab-layouts',

            plugins: Ext.create('Ext.ux.TabReorderer'),

            activeTab: 0,
            items: [{
                title: '首页',
                reorderable: false,
                html: '这里是首页'
            }, {
                title: '面板2',
                html: '这里是面板2',
                closable: true
            }],
            renderTo: Ext.getBody()
        });

        // Go ahead and create the TreePanel now so that we can use it below
        var treePanel = Ext.create('Ext.tree.Panel', {
            id: 'tree-panel',
            title: 'Sample Layouts',
            region: 'west',
            split: true,
//        height: 360,
            width: 240,
            rootVisible: false,
            autoScroll: true,
            useArrows: true,
            store: navigation
        });

        // Assign the changeLayout function to be called on tree node click.
        treePanel.getSelectionModel().on('select', function(selModel, record) {
            var selTab = Ext.getCmp(record.getId());
            if (record.get('leaf')) {
                if (selTab == undefined) {
                    var addTab = tabLayouts.add({
                        id: record.getId(),
                        title: record.getId() + '-panel',
                        html: record.getId() + '-panel',
                        closable: true
                    });
                    tabLayouts.setActiveTab(addTab);
                } else {
                    tabLayouts.setActiveTab(selTab);
                }
            }
        });

        var accordionLayouts = {
            id: 'accordion-layouts',
            title: 'Accordion-折叠窗口',
            region: 'west',
            split: true,
//        height: 360,
            width: 240,
            layout: 'accordion',
            items: [
                treePanel,
                new Ext.Panel({
                    title: '系统菜单管理 - menus'
                }),
                new Ext.Panel({
                    title: '内部雇员管理 - employee'
                })
            ]
        };

        Ext.create('Ext.Viewport', {
            layout: {
                type: 'border',
                padding: 5
            },
            title: 'Ext Layout Browser',
            items: [
                titlePanel,
                accordionLayouts,
                contentPanel
            ]
        });
    }
});