/**
 * Created by cai on 2014/9/1 21:28.
 */
Ext.define('Manager', {
    mixins: {
        ManagerConfig: 'ManagerConfig'
    },
    name: 'Orochi',

    /**
     * 获取短路径view名称  xx.xxx.Xxx
     * @param ctrlName
     */
    getShortViewName: function(ctrlName) {
        var items = this[ctrlName];
        if (items != undefined) {
            return items.views[0].toString();   // 获取应用第一个view
        } else {
            return null;
        }
    },

    /**
     * 获取view名称 Xxx
     * @param str
     */
    getViewName: function(str) {
        var splitStr = str.split('.');
        return splitStr[splitStr.length - 1];
    },

    /**
     * 获取全路径view名称
     * @param str
     * @returns {string}
     */
    getFullViewName: function(str) {
        return 'Orochi.view.' + str;
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
    },

    /**
     * 创建应用
     * @param ctrlName controller 名称
     * @param viewCfg  view 属性
     */
    create: function(ctrlName, viewCfg) {
        var ctrl = Application.getController(ctrlName);    // 如果名称为ctrlName的controller不存在，则创建
        var shortViewName = Manager.getShortViewName(ctrlName);

        var center = Ext.getCmp('app-center');
        var viewName = Manager.getViewName(shortViewName);
        var itemId = '[itemId=' + viewName + ']';
        var item = center.down(itemId);
        if (item != null) {
            center.getLayout().setActiveItem(item);
            return;
        }

        var viewFn = Manager.getViewFnName('view', shortViewName);
        var view = ctrl[viewFn]();  // 获取controller中的view
        if (view.$isClass) {
            view = Ext.create(Manager.getFullViewName(shortViewName), viewCfg);
        }
        if (!center) {
            view.render(Ext.getBody());
        } else {
            if (view instanceof Ext.window.Window) {
                view.show();
            } else {
                center.add(view);
                center.setActiveTab(view);
            }
        }
    }
});