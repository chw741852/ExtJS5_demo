/**
 * Created by Cai on 2014/8/26 18:11.
 */
Ext.define('Orochi.view.ContentPanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.contentPanel',
    id: 'content-panel',
    plugins: Ext.create('Ext.ux.TabReorderer'),
//    items: [{
//        title: '首页',
//        html: '这里是首页'
//    }],
    initComponent: function() {
        this.items = [{
            title: '首页',
            reorderable: false,
            html: '这里是首页'
        }, {
            title: 'index',
            tabConfig: {
                title: 'index2',
                tooltip: '这里是注释'
            },
            closable: true
        }];

        this.callParent(arguments);
    }
});