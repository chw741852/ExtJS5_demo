/**
 * Created by cai on 2014/7/28 23:00.
 */
Ext.define('Orochi.store.Navigation', {
    extend: 'Ext.data.TreeStore',
    xtype: 'navigation',
    alias: 'widget.navigation',
    root: {
        expanded: true
    },
    proxy: {
        type: 'ajax',
        url: contextPath + '/js/tree-data.json'
    }
});