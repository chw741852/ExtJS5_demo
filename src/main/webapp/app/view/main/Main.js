/**
 * Created by Cai on 2014/8/26 15:41.
 */
Ext.define('Orochi.view.main.Main', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.OrochiMain',
    layout: 'border',
    stateful: true,
    stateId: 'orochi-viewport',

    initComponent:function() {
        this.items = [{
            region: 'north',
            xtype: 'appHeader'
        }, {
            region: 'west',
            xtype: 'accordionLayouts'
        }, {
            region: 'center',
            xtype: 'contentPanel'
        }];

        this.callParent(arguments);
    }
});