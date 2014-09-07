/**
 * Created by cai on 2014/9/6 18:57.
 */
Ext.define('Orochi.view.NorthView', {
    extend: 'Ext.container.Container',
    id: 'app-header',
    region: 'north',
    title: 'Ext JS Orochi',
    height: 52,

    initComponent: function() {
        document.title = this.title;

        this.layout = {
            type: 'hbox',
            align: 'middle'
        },
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

        this.callParent(arguments);
    }
});