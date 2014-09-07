/**
 * Created by cai on 2014/7/28 22:45.
 */
Ext.define('Orochi.view.ThemeSwitcher', {
    extend: 'Ext.container.Container',
    alias: 'widget.themeSwitcher',
    id: 'options-toolbar',
    margin: '0 10 0 0',


    initComponent: function() {
        function makeItem(value, text, paramName) {
            paramName = paramName || "theme";

            return {
                text: text,
                value: value,
                group: (paramName == 'theme' ? 'themeGroup' : 'localeGroup'),
                checked: true
            }
        }

        var menu = Ext.create('Ext.menu.Menu', {
            items: [
                makeItem('neptune',       'Neptune'),
                makeItem('neptune-touch', 'Neptune Touch'),
                makeItem('crisp',         'Crisp'),
                makeItem('crisp-touch',   'Crisp Touch'),
                makeItem('classic',       'Classic'),
                makeItem('gray',          'Gray'),
                '-',
                makeItem('en',            'English',    'locale'),
                makeItem('he',            'Hebrew',     'locale')
            ],
            listeners: {
                scope: false,
                click: function(e, node) {
                    alert(node.value + "-" + node.text);
                }
            }
        });

        this.layout = ['hbox'],
        this.items = [{
            xtype: 'component',
            id: 'theme-switcher',
            cls: 'ks-theme-switcher',
            margin: '0 5 0 0',
            listeners: {
                scope: false,
                click: function (e) {
                    menu.showBy(this);
                },
                element: 'el'
            }
        }];

        this.callParent();
    }
});