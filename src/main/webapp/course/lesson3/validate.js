/**
 * Created by Cai on 2014/8/12 9:51.
 */
(function() {
    Ext.onReady(function() {
        Ext.define('Person', {
            extend: 'Ext.data.Model',
            fields: [
                { name: 'name', type: 'string' },
                { name: 'age', type: 'int' },
                { name: 'gender', type: 'string' },
                { name: 'phone', type: 'string' },
                { name: 'email', type: 'string' },
                { name: 'username', type: 'string' }
            ],

            validators: {
                age: 'presence',
                name: { type: 'length', min: 2, max: 10 },
                gender: { type: 'inclusion', list: ['Male', 'Female'] },
                username: [
                    { type: 'exclusion', list: ['Admin', 'Operator'] },
                    { type: 'format', matcher: /([a-z]+)[0-9]{2,3}/i}
                ]
            }
        });

        var p = Ext.create('Person', {
            name: 'f',
            gender: 'Males',
            username: '45asdf'
        });

        var validates = p.getValidation();
        var d = validates.getData();
        alert(d);
    });
})();