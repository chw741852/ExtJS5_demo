/**
 * Created by Cai on 2014/8/27 16:31.
 */
Ext.define('Orochi.view.navigation.AccordingPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.accordionLayouts',
    layout: 'accordion',
    split: true,
    width: 240,
//    height: 600,

    initComponent: function() {
        this.title = 'Accordion-折叠窗口';
        this.items = [{
            xtype: 'navigation-tree',
            title: '功能'
        }, {
            xtype: 'panel',
            title: '系统菜单管理 - menu'
        }, {
            xtype: 'panel',
            title: '内部雇员管理 - menu'
        }];

        this.callParent(arguments);
    }
});