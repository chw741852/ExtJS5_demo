/**
 * Created by Cai on 2014/8/26 17:34.
 */
Ext.define('Orochi.view.Header', {
    extend: 'Ext.Container',
    xtype: 'appHeader',
    id: 'app-header',
    title: 'Ext JS Orochi',
    height: 52,
    layout: {
        type: 'hbox',
        aligh: 'middle'
    },

    initComponent: function() {
        document.title = this.title;

        this.items = [{
            xtype: 'component',
            id: 'app-header-logo'
        }, {
            xtype: 'component',
            id: 'app-header-title',
            html: this.title,
            flex: 1
        }];

        if (!Ext.getCmp('options-toolbar')) {
            this.items.push({
                xtype: 'themeSwitcher'
            });
        }

        this.callParent();
    }
});