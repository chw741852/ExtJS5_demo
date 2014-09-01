/**
 * Created by cai on 2014/7/27 10:17.
 */
Ext.application({
    name: 'Orochi',
    appFolder: 'app',

    controllers: [
        'Global'
    ],

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

    launch: function() {
        Ext.tip.QuickTipManager.init();
//        Ext.create('Ext.container.Viewport', {
//            items: [{
//                xtype: 'accordionLayouts'
//            }]
//        });
        Ext.create('Orochi.view.main.Main');
    }
});