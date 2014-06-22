/**
 * Created by Cai on 2014/6/11 9:57.
 */
Ext.define('Orochi.model.User', {
    extend: 'Ext.data.Model',
    alias: 'userModel',
    requires: [
        'Ext.data.*'
    ],
    fields: ['name', 'email', 'phone']
});

Ext.define('Orochi.view.user', {
    extend: 'Ext.grid.Panel',

    requires: [
        'Ext.data.*',
        'Ext.grid.*',
        'Ext.util.*',
        'Ext.toolbar.Paging',
        'Ext.ux.ProgressBarPager',
        'Orochi.model.User'
    ],
//    xtype: 'progress-bar-pager',
    title: 'Progress Bar Pager',
    initComponent: function() {
        this.renderTo = 'container';
        this.columnLines = true;
        this.collapsible = true;
        this.multiSelect = true;
        var userStore = new Ext.data.Store({
            model: 'Orochi.model.User',
//            remoteSort: true,
            autoLoad: true,
            pageSize: 4,
            proxy: {
                type: 'ajax',
                enablePaging: true,
                url: '/ext5/user/user.json',
                reader: {
                    type: 'json',
                    root: 'users',
                    totalProperty: 'total'
                }
            }
        });

        Ext.apply(this, {
            store: userStore,
            columns: [{
                xtype: 'rownumberer'
            },{
                text: 'name',
                sortable: false,
                hideable: false,
                flex: 1,
                dataIndex: 'name'
            }, {
                text: 'Email Address',
                dataIndex: 'email',
                flex: 1,
                hidden: true
            }, {
                text: 'Phone Number',
                flex: 1,
                dataIndex: 'phone'
            }],
            bbar: {
                xtype: 'pagingtoolbar',
                pageSize: 4,
                store: userStore,
                displayInfo: true,
                plugins: new Ext.ux.ProgressBarPager()
            }
        });
        this.callParent();
    },

    afterRender: function() {
        this.callParent(arguments);
        this.getStore().load();
    }
});