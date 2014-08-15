/**
 * Created by Cai on 2014/8/13 9:58.
 */
(function() {
    Ext.onReady(function() {
        Ext.define('User', {
            extend: 'Ext.data.Model',
            fields: [
                { name: 'name', type: 'string' },
                { name: 'age', type: 'int', convert: null },
                { name: 'phone', type: 'string' },
                { name: 'alive', type: 'boolean', defaultValue: true, convert: null }
            ],

            changeName: function() {
                var oldName = this.get('name'),
                    newName = oldName + ' The Barbarian';

                this.set('name', newName);
            }
        });

        var user = Ext.create('User', {
            id: 'abcd1234',
            name: 'Conan',
            age: 24,
            phone: '555-555555'
        });

        user.changeName();
        alert(user.get('name'));
    });
})();
