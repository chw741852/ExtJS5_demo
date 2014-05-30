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
    'Ext.ux.layout.Center'
]);

Ext.onReady(function() {
    Ext.tip.QuickTipManager.init();

    var detailsCmp;

    // Gets all layouts examples
    var layoutExamples = [];
    Ext.Object.each(getBasicLayouts(), function(name, example) {
        layoutExamples.push(example);
    });

    Ext.Object.each(getCustomLayouts(), function(name, example) {
        layoutExamples.push(example);
    });

    Ext.Object.each(getCombinationLayouts(), function(name, example) {
        layoutExamples.push(example);
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
        items: layoutExamples
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
        region: 'north',
        split: true,
        height: 360,
        width: 150,
        rootVisible: false,
        autoScroll: true,
        store: store
    });

    // Assign the changeLayout function to be called on tree node click.
    treePanel.getSelectionModel().on('select', function(selModel, record) {
        if (record.get('leaf')) {
            Ext.getCmp('content-panel').layout.setActiveItem(record.getId() + '-panel');

            detailsCmp = Ext.getCmp('details-panel');
            detailsCmp.body.hide().slideIn('l', { stopAnimation: true, duration: 200 });
            detailsCmp.update(Ext.getDom(record.getId() + '-details').innerHTML);
            detailsCmp.doLayout();
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
    }

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
        }, {
            layout: 'border',
            id: 'layout-browser',
            region: 'west',
            border: false,
            split: true,
            margins: '2 0 5 5',
            width: 290,
            minSize: 100,
            maxSize: 500,
            items: [ treePanel, detailsPanel ]
        },
            contentPanel
        ]
    });
});