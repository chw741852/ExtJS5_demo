/**
 * Created by cai on 2014/9/1 21:28.
 */
Ext.define('Manager', {
    mixins: {
        ManagerConfig: 'ManagerConfig'
    },
    name: 'Orochi',

    /**
     * 获取配置名
     * @param ctrlName
     */
    getViewName: function(ctrlName) {
        var items = this[ctrlName];
        if (items != undefined) {
            return items.view[0].toString();
        } else {
            return null;
        }
    },

    /**
     * 获取页面类对象
     * @param type
     * @param refs
     */
    getViewFnName: function(type, refs) {
        var type = Ext.String.capitalize(type);
        var fn = 'get',
            parts = refs.split('.');
        for (var i = 0; i < parts.length; i++) {
            fn += Ext.String.capitalize(parts[i]);
        }
        fn += type;
        return fn;
    }
});