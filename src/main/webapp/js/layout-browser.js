/**
 * Created by Cai on 2014/5/20.
 */
Ext.require([
    'Ext.tip.QuickTipManager',
    'Ext.container.Viewport',
    'Ext.layout.*',
    'Ext.form.Panel',
    'Ext.form.Label',
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.tree.*',
    'Ext.selection.*',
    'Ext.tab.Panel',
    'Ext.ux.layout.Center',
    'Ext.ux.TabReorderer'
]);

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
        xtype: 'reorderable-tabs',

        plugins: 'tabreorderer',

        activeTab: 0,
        items: [{
            title: '首页',
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
                    html:'<iframe src="' + contextPath + '/user/list" width="100%" height="100%"></iframe>',// frameborder="0"
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
//        title: 'Accordion-折叠窗口',
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

    // Finally, build the main layout once all the pieces are ready. This is also a good
    // example of putting together a full-screen BorderLayout within a Viewport.
    Ext.create('Ext.Viewport', {
        layout: 'border',
        title: 'Ext Layout Browser',
        items: [{
            xtype: 'box',
            id: 'header',
            region: 'north',
            html: '<h1> Ext.Layout.Browser</h1>',
            height: 30
        }, accordionLayouts,
            contentPanel
        ]
    });
});