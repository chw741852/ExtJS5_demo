/**
 * Created by Cai on 2014/8/11 17:15.
 */
(function() {
    Ext.onReady(function() {
        // model DB person(name, age, email)
        Ext.define('Person', {
            extend: 'Ext.data.Model',
            fields: [
                { name: 'name', type: 'auto' },
                { name: 'age', type: 'int' },
                { name: 'email', type: 'auto' }
            ]
        });

        // instantiate person
        // 1.new 关键字
        var p = new Person({
            name: 'orochi.me',
            age: 1,
            email: 'caihongwei2008@gmail.com'
        });
        alert(p.get('age'));

        // 2.create
        var p2 = Ext.create('Person', {
            name: 'orochi.me',
            age: 0.5,
            email: 'caihongwei2008@gmail.com'
        });
        alert(p2.get('email'));

        alert(Person.getName());
    });
})();