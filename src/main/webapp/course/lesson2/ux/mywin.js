/**
 * Created by Cai on 2014/8/11 14:59.
 */
Ext.define('ux.mywin', {
    extend: 'Ext.window.Window',
    title: 'orochi',
    width: 400,
    height: 300,
    newtitle: 'new orochi',

    config: {
        price: 500
    },

    mySetTitle: function() {
        this.title = this.newtitle;
    },

    initComponent: function () {
        this.mySetTitle();
        this.callParent(arguments);
    }
});