/**
 * Created by Cai on 2014/8/28 17:38.
 */
Ext.define('Orochi.view.navigation.TreeNav', {
    extend: 'Ext.tree.Panel',
    xtype: 'tree-nav',
    width: 240,
    rootVisible: false,
    autoScroll: true,
    useArrows: true,
    store: 'navigation'
});
