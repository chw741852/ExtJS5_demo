/**
 * Created by cai on 2014/7/27 10:17.
 */
Ext.onReady(function() {
    Ext.BLANK_IMAGE_URL = contextPath + '/images/s.gif';
    Manager = Ext.create('Manager');    /* 主控制器 */
    Application = null;
    Ext.application({
        name: 'Orochi',     /* 项目名 */
        appFolder: 'app',   /* 路径 */
//        autoCreateMainView: true,
        controllers: ['MainController', 'NavTreeController'],
        launch: function() {
            Ext.create('Orochi.view.MainView');
            Application = this;
            Application.controllers.addListener('add', this.newControllerAdded, this);
        },
        newControllerAdded: function(idx, ctrl, token) {
            // nothing
        }
    });
});
//Ext.application({
//    name: 'Orochi',
//    appFolder: 'app',
//
//    controllers: [
//        'Global'
//    ],
//
//    requires: [
//        'Ext.tip.QuickTipManager',
//        'Ext.container.Viewport',
//        'Ext.layout.*',
//        'Ext.form.*',
//        'Ext.panel.Panel',
//        'Ext.grid.*',
//        'Ext.data.*',
//        'Ext.tree.*',
//        'Ext.selection.*',
//        'Ext.tab.Panel',
//        'Ext.ux.layout.Center',
//        'Ext.ux.TabReorderer',
//        'Orochi.*'
//    ],
//
//    launch: function() {
//        Ext.tip.QuickTipManager.init();
////        Ext.create('Ext.container.Viewport', {
////            items: [{
////                xtype: 'accordionLayouts'
////            }]
////        });
//        Ext.create('Orochi.view.main.Main');
//    }
//});