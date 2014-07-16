/**
 * Created by Cai on 2014/5/20.
 */
Ext.require([
    'Ext.tip.QuickTipManager',
    'Ext.container.Viewport',
    'Ext.layout.*',
    'Ext.form.Panel',
    'Ext.form.Label',
    'Ext.panel.Panel',
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.tree.*',
    'Ext.selection.*',
    'Ext.tab.Panel',
    'Ext.ux.layout.Center',
    'Ext.ux.TabReorderer'
]);

Ext.define('Orochi.view.ThemeSwitcher', {
    extend: 'Ext.Container',
    xtype: 'themeSwitcher',
    id: 'theme-switcher-btn',
    margin: '0 10 0 0',
    layout: 'hbox',

    initComponent: function() {
        function setQueryParam(name, value) {
            var query = Ext.Object.fromQueryString(location.search);
            query[name] = value;
            location.search = Ext.Object.toQueryString(query);
        }

        function makeItem(value, text, paramName) {
            paramName = paramName || "theme";

//            var checked = value === (paramName == 'theme' ? theme : local)
            return {
                text: text,
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
                makeItem('he',            'Hebrew',     'locale'),
                '-',
                makeItem('en', 'locale'),
                makeItem('he', 'locale')
            ]
        });

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

Ext.onReady(function() {
    Ext.tip.QuickTipManager.init();

    var detailsCmp;

    // Gets all layouts examples
    var layoutExamples = [];

    Ext.Object.each(getBasicLayouts(), function(name, example) {
        layoutExamples.push(example);
    });

    Ext.Object.each(getCombinationLayouts(), function(name, example) {
        layoutExamples.push(example);
    });

    Ext.Object.each(getCustomLayouts(), function(name, example) {
        layoutExamples.push(example);
    });

    var tabLayouts = new Ext.TabPanel ({
        id: 'tab-layouts',
//        xtype: 'reorderable-tabs',

        plugins: Ext.create('Ext.ux.TabReorderer'),

        activeTab: 0,
        items: [{
            title: '首页',
            reorderable: false,
            html: '这里是首页'
        }, {
            title: '面板2',
            html: '这里是面板2',
            closable: true
        }],
        renderTo: Ext.getBody()
    });

    // This is the main content center region that will contain each example layout panel.
    // It will be implemented as a CardLayout since it will contain multiple panels with
    // only one being visible at any given time.

    var contentPanel = {
        id: 'content-panel',
        region: 'center',   // this is what makes this panel into a region within the containing layout
        layout: 'card',
        margins: '2 5 5 0',
        activeItem: 0,
        border: false,
        items: [
            tabLayouts
        ]
    };

    var store = Ext.create('Ext.data.TreeStore', {
        root: {
            expanded: true
        },
        proxy: {
            type: 'ajax',
            url: contextPath + '/js/tree-data.json'
        }
    });

    // Go ahead and create the TreePanel now so that we can use it below
    var treePanel = Ext.create('Ext.tree.Panel', {
        id: 'tree-panel',
        title: 'Sample Layouts',
        region: 'west',
        split: true,
//        height: 360,
        width: 240,
        rootVisible: false,
        autoScroll: true,
        useArrows: true,
        store: store
    });

    // Assign the changeLayout function to be called on tree node click.
    treePanel.getSelectionModel().on('select', function(selModel, record) {
        var selTab = Ext.getCmp(record.getId());
        if (record.get('leaf')) {
            if (selTab == undefined) {
                var addTab = tabLayouts.add({
                    id: record.getId(),
                    title: record.getId() + '-panel',
                    html:'<iframe src="' + contextPath + '/user/list" width="100%" height="100%" frameborder="0"></iframe>',// frameborder="0"
                    closable: true
                });
                tabLayouts.setActiveTab(addTab);

//            Ext.getCmp('content-panel').layout.setActiveItem(record.getId() + '-panel');

//            detailsCmp = Ext.getCmp('details-panel');
//            detailsCmp.body.hide().slideIn('l', { stopAnimation: true, duration: 200 });
//            detailsCmp.update(Ext.getDom(record.getId() + '-details').innerHTML);
//            detailsCmp.doLayout();
            } else {
                tabLayouts.setActiveTab(selTab);
            }
        }
    });

    // This is the Details Panel that contains the description for each example layout.
    var detailsPanel = {
        id: 'details-panel',
        title: 'Details',
        region: 'center',
        style: 'background:#fff',
        bodyStyle: 'padding-bottom:15px;background:#fff;',
        autoScroll: true,
        html: '<p class="details-info">When you select a layout from the tree, additional details will display here.</p>'
    };

    var accordionLayouts = {
        id: 'accordion-layouts',
        title: 'Accordion-折叠窗口',
        region: 'west',
        split: true,
//        height: 360,
        width: 240,
        layout: 'accordion',
        items: [
            treePanel,
            new Ext.Panel({
                title: '系统菜单管理 - menus'
            }),
            new Ext.Panel({
                title: '内部雇员管理 - employee'
            })
        ]
    };

    // TODO 修改标题样式
    var titlePanel = Ext.create('Ext.Container', {
        id: 'app-header',
        region: 'north',
        height: 52,
//        bodyPadding: 5,
//        bodyStyle: 'background-color: #81af34; background-image:-webkit-gradient(linear,50% 0,50% 100%,color-stop(0%,#8fc33a),color-stop(100%,#739b2e));',
//        split: true,
        layout: {
            type: 'hbox',
            align: 'middle'
        },

        items: [{
            xtype: 'component',
            id: 'app-header-logo'
        }, {
            xtype: 'component',
            id: 'app-header-title',
            html: 'Ext JS Kitchen Sink',
            flex: 1
        }, {
            xtype: 'themeSwitcher'
        }]
//        html: '<div class="app-header-title"> Ext.Layout.Browser</div>'
    });

    // Finally, build the main layout once all the pieces are ready. This is also a good
    // example of putting together a full-screen BorderLayout within a Viewport.
    Ext.create('Ext.Viewport', {
        layout: {
            type: 'border'
//            padding: 5
        },
        title: 'Ext Layout Browser',
        items: [
            titlePanel,
            accordionLayouts,
            contentPanel
        ]
    });
});