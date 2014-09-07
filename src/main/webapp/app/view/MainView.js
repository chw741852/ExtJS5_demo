/**
 * Created by cai on 2014/9/6 19:28.
 */
Ext.define('Orochi.view.MainView', {
    extend: 'Ext.container.Viewport',
    requires: [
        'Ext.layout.container.Border', 'Ext.layout.container.Absolute',
        'Orochi.view.NorthView', 'Orochi.view.WestView', 'Orochi.view.CenterView', 'Orochi.view.SouthView'
    ],
    layout: 'border',
//    renderTo: Ext.getBody(),

    initComponent: function() {
        this.items = [
            Ext.create('Orochi.view.NorthView'),
            Ext.create('Orochi.view.WestView'),
            Ext.create('Orochi.view.CenterView')
//            Ext.create('Orochi.view.SouthView')
        ],

        this.callParent(arguments);
    }
});