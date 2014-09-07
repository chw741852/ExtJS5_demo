/**
 * Created by cai on 2014/9/6 19:17.
 */
Ext.define('Orochi.view.SouthView', {
    extend: 'Ext.toolbar.Toolbar',
    id: 'app-footer',
    region: 'south',
    height: 35,

    initComponent: function() {
        this.layout = {
            pack: 'center'
        };
        this.items = [
//            {
//                xtype: 'button',
//                text: '退出系统',
//                x: 35,
//                y: 26,
//                iconCls: 'btn-logout',
//                handler: function () {
//                    alert('ajax退出，跳转到login页面');
//                }
//            },
//            '|',
//            {
//                xtype: 'displayfield',
//                fieldLabel: '当前用户',
//                labelWidth: 60,
//                id: 'current_user'
//            },
//            '->',
            '技术支持：Orochi Company'
//            '->'
        ];
        this.callParent(arguments);
    }
});