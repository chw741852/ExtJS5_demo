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
    extends: 'Ext.grid.Panel',

    requires: [
        'Ext.data.*',
        'Ext.grid.*',
        'Ext.util.*',
        'Ext.toolbar.Paging',
        'Ext.ux.ProgressBarPager',
        'KitchenSink.model.Company'
    ],
    xtype: 'progress-bar-pager',
    frame: true,
    title: 'Progress Bar Pager',
    initComponent: function() {
        this.width = 650;

        var userStore = new Ext.data.Store({
            model: 'userModel',
            autoLoad: true,
            pageSize: 4,
            proxy: {
                type: 'ajax',
                enablePaging: true,
                url: baseUrl + '/user/user.json',
                reader: {
                    type: 'json',
                    root: 'users',
                    totalProperty: 'total'
                }
            }
        });
    }

});