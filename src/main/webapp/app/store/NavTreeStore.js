/**
 * Created by cai on 2014/9/7 12:19.
 */
Ext.define('Orochi.store.NavTreeStore', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.navTree',
    root: {
        expanded: true
    },
    proxy: {
        type: 'ajax',
        url: contextPath + '/data/tree-data.json'
    }
});