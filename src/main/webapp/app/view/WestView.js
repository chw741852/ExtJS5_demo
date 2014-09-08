/**
 * Created by cai on 2014/9/6 19:09.
 */
Ext.define('Orochi.view.WestView', {
    extend: 'Ext.panel.Panel',
    id: 'app-wester',
    region: 'west',
    layout: 'accordion',
    collapsible: true,
    split: true,
    width: 240,

    initComponent: function() {
        this.title = 'Accordion-折叠窗口';
        this.items = [{
            xtype: 'navTree',
            title: '功能'
        }, {
            xtype: 'panel',
            title: '系统菜单管理 - menu'
        }, {
            xtype: 'panel',
            title: '内部雇员管理 - menu'
        }];

        var ajaxItems = {
            title: '动态according1'
        };
        this.items.push(ajaxItems);
        this.setItems();
        this.callParent(arguments);
    },

    setItems: function() {
        var me = this;
        var ajaxItems = {
            title: '动态according3333'
        };
        me.items.push(ajaxItems);

        Ext.Ajax.request({
            async: false,
            url: contextPath + '/data/according.json',
            timeout: 600000,
            success: function(response) {
                var json = Ext.JSON.decode(response.responseText);
//                for (var i = 0; i<json.results.length; i++) {
//                    me.items.push(json.results[i]);
//                }
                $.each(json.results, function(i, result) {
                    me.items.push(result);
                });
            }
        });
    }
});