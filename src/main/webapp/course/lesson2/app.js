/**
 * Created by Cai on 2014/8/8 18:48.
 */
(function(){
    Ext.onReady(function() {
//        var win = new Ext.window.Window({
//            width: 400,
//            height: 300,
//            title: 'orochi'
//        });
//        Ext.get('btn').on('click', function() {
//            win.show();
//        });

        /* Ext alias */
//        var o = {
//            say: function() {
//                alert(11);
//            }
//        };
//        var o_alias = Ext.Function.alias(o, 'say');
//        o_alias();

        Ext.get('btn').on('click', function() {
            var win = Ext.create('ux.mywin', {
                title: 'my win',
                price: 600,
                requires: ['ux.mywin']
            });

            win.show();
            alert(win.getPrice());
        });


        /*
         * Ext 混合类型 mixins，一般实现多继承时使用
         */
        Ext.define('CanSing', {
            sing: function() {
                alert('sing');
            }
        });
        Ext.define('Musician', {
//            mixins: ['CanSing'],
            mixins: {
                canSing: 'CanSing'
            },
            sing: function() {
                this.mixins.canSing.sing();
                alert('my sing');
            }
        });

        var musician = Ext.create('Musician', {});
        musician.sing();
    });
})();