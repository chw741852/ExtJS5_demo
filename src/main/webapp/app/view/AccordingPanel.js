/**
 * Created by Cai on 2014/8/27 16:31.
 */
Ext.define('Orochi.view.AccordingPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'accordionLayouts',
    layout: 'accordion',
    title: 'Accordion-折叠窗口',
    split: true,
    width: 240,
    items: [{
        xtype: 'panel',
        title: '系统菜单管理 - menu'
    }, {
        xtype: 'panel',
        title: '内部雇员管理 - menu'
    }]
});