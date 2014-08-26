/**
 * Created by Cai on 2014/4/25.
 */

Ext.define('AM.controller.Users', {
    extend: 'Ext.app.Controller',

    stores: [
        'Users'
    ],

    views: [
        'user.List',
        'user.Edit'
    ],

    init: function() {
//        console.log('Initialized User! This happens before the Application launch function is called.');
        this.control({
//            'viewport > panel': {
//                render: this.onPanelRendered
//            }
            'viewport > userlist': {
                itemdblclick: this.editUser
            },
            'useredit button[action=save]': {
                click: this.updateUser
            }
        });
    },

    onPanelRendered: function() {
        console.log('The panel wad rendered.');
    },

    editUser: function(grid, record) {
        var view = Ext.widget('useredit');
        view.down('form').loadRecord(record);
    },

    updateUser: function(button) {
        var win = button.up('window'),
            form = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();

        record.set(values);
        win.close();
        this.getUsersStore().sync();
    }
});