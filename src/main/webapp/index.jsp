<!DOCTYPE html>
<html>
<head>
    <title>ExtJS Border</title>

    <!-- Ext -->
    <script type="text/javascript" src="${pageContext.request.contextPath}/script/ext5/shared/include-ext.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/script/ext5/shared/options-toolbar.js"></script>
</head>
<script>
Ext.onReady(function() {
    Ext.create('Ext.panel.Panel', {
        width: 1900,
        height: 900,
//        title: 'Border Layout',
        layout: 'border',
        items: [{
//            title: 'North Region is resizable',
            region: 'north',     // position for region
            xtype: 'panel',
            height: 100,
            split: true,         // enable resizing
            margins: '5 5 0 5'
        },{
//            title: 'South Region is resizable',
            region: 'south',     // position for region
            xtype: 'panel',
            height: 100,
            split: true,         // enable resizing
            margins: '0 5 5 5'
        },{
//            xtype: 'panel' implied by default
            title: 'West Region is collapsible',
            region:'west',
            xtype: 'panel',
            margins: '5 0 0 5',
            width: 200,
            split: true,
            collapsible: true,   // make collapsible
            id: 'west-region-container',
            layout: 'fit'
        },{
//            title: 'Center Region',
            region: 'center',     // center region is required, no width/height specified
            xtype: 'panel',
            layout: 'fit',
            margins: '5 5 0 0'
        }],
        renderTo: Ext.getBody()
    });
});
</script>
<body>
<%--<h2>Hello World!</h2>--%>
</body>
</html>
