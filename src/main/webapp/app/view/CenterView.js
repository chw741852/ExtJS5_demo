/**
 * Created by cai on 2014/9/6 16:43.
 */
Ext.define('Orochi.view.CenterView', {
    extend: 'Ext.tab.Panel',
    requires: ['Ext.ux.TabReorderer'],
    id: 'app-center',
    region: 'center',
    defaults: {
        autoScroll: true
    },
    plugins: Ext.create('Ext.ux.TabReorderer'),
    activeTab: 0,
    border: false

//    initComponent: function() {
//        Ext.apply(this, {
//            items: []
//        });
//        this.callParent(arguments);

//        var me = this;
//        this.on('afterrender', function() {
//            var el = me.getTabBar().body;
//            el.setStyle('background-color', 'rgb(248, 248, 237)');
//        });
//    }
});