<%--
  Created by IntelliJ IDEA.
  User: Cai
  Date: 2014/6/4
  Time: 17:40
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>用户列表</title>
</head>
<script type="text/javascript" charset="UTF-8" src="${pageContext.request.contextPath}/script/ext5/shared/include-ext.js"></script>
<script type="text/javascript" charset="UTF-8" src="${pageContext.request.contextPath}/script/ext5/shared/options-toolbar.js"></script>
<script type="text/javascript" charset="UTF-8" src="${pageContext.request.contextPath}/script/ext5/ux/ProgressBarPager.js"></script>
<script type="text/javascript">
    Ext.onReady(function () {
        Ext.define('User', {
            extend: 'Ext.data.Model',
            fields: [ 'name', 'email', 'phone' ]
        });

        var userStore = Ext.create('Ext.data.Store', {
            model: 'User',
            autoLoad: true,
            pageSize: 4,
            proxy: {
                type: 'ajax',
                enablePaging: true,
                url: '${pageContext.request.contextPath}/user/user.json',
                reader: {
                    type: 'json',
                    root: 'users',
                    totalProperty: 12
                }
            }
        });

//        Ext.create('Ext.data.Store', {
//            model: 'User',
//            autoLoad: true,
//            pageSize: 4,
//            proxy: {
//                type: 'ajax',
//                url : 'data/users.json',
//                reader: {
//                    type: 'json',
//                    root: 'users',
//                    totalProperty: 'total'
//                }
//            }
//        });

        Ext.create('Ext.grid.Panel', {
            renderTo: 'container',
            store: userStore,
            title: 'Application Users',
            columnLines: true,
            collapsible: true,
            multiSelect: true,
//            padding: 5,
            columns: [
                {
                    xtype: 'rownumberer'
                },
                {
                    text: 'Name',
//                    width: 100,
                    sortable: false,
                    hideable: false,
                    flex: 1,
                    dataIndex: 'name'
                },
                {
                    text: 'Email Address',
//                    width: 150,
                    dataIndex: 'email',
                    flex: 1,
                    hidden: true
                },
                {
                    text: 'Phone Number',
                    flex: 1,
                    dataIndex: 'phone'
                }
            ],
            bbar: {
                xtype: 'pagingtoolbar',
                stroe: userStore,
                displayInfo: true,
                plugins: new Ext.ux.ProgressBarPager()      // TODO 先解决分页，再解决查询form
            }
        });
    });
</script>
<body>
<div>查询</div>
<div id="container"></div>
</body>
</html>
