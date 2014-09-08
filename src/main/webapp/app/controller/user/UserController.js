/**
 * Created by cai on 2014/8/31 20:20.
 */
Ext.define('Orochi.controller.user.UserController', {
    extend: 'Ext.app.Controller',
    stores: ['user.UserStore'],
    views: [
        'user.UserList'
    ],

    refs: [
        {
            ref: 'queryUserListForm',
            selector: 'form'
        },
        {
            ref: 'userList',
            selector: '#user_userList'
        },
        {
            ref: 'userList',
            selector: 'grid'
        }
    ],

    init: function() {
        var coll = new Ext.util.MixedCollection();  // 记录过滤器，当为空值时，删除
        this.control({
            'button[name=resetBtn]': {
                click: function() {
                    this.getQueryUserListForm().reset();
                }
            },
            'button[name=queryBtn]': {
                click: function() {
                    // 此处用了gird自带过滤器过滤数据，这里只试了fieldset格式的数据，后期如果要添加时间，可以考虑 store.loadDate
                    var fields = this.getQueryUserListForm().getForm().getFields();
                    var gridFilters = this.getUserList().store.getFilters();
                    fields.each(function() {
                        var fieldName = this.getName();
                        var fieldValue = this.getValue();
                        if (fieldValue) {
                            var gridFilter = gridFilters.add({
                                property: fieldName,
                                value: fieldValue,
                                anyMatch: true
                            });
                            coll.add(fieldName, gridFilter);
                        } else if (coll.getByKey(fieldName)) {
                            gridFilters.remove(coll.getByKey(fieldName));
                            coll.removeAtKey(fieldName);
                        }
                    });
                }
            }
        });
    },
    addUser: function(event, toolEl, panel) {
        alert('adduser');
    }
});