/**
 * Created by Cai on 2014/8/26 15:41.
 */
Ext.define('Orochi.view.main.Main', {
    extend: 'Ext.container.Viewport',
    layout: 'broder',
    stateful: true,
    stateId: 'orochi-viewport',

    items: [{
        region: 'north',
        xtype: 'appHeader'
    }, {
        region: 'west',
        xtype: 'accordionLayouts'
    }, {
        region: 'center',
        xtype: 'contentPanel'
    }]
});