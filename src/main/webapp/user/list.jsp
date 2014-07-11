<%--
  Created by Cai on 2014/6/4 17:40.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>用户列表</title>
</head>
<jsp:include page="../common/head.jsp"></jsp:include>
<script type="text/javascript" charset="UTF-8" src="${pageContext.request.contextPath}/script/ext5/ux/ProgressBarPager.js"></script>
<script type="text/javascript" charset="UTF-8" src="${pageContext.request.contextPath}/user/user.js"></script>
<script type="text/javascript">
    var contextPath = '${pageContext.request.contextPath}';
    Ext.onReady(function() {
        var userView = new Orochi.view.user();  // 自动运行initComponent方法
        var queryForm = new Orochi.view.QueryForm();
//        userView.initComponent();
    });

    <%--Ext.onReady(function () {--%>
        <%--Ext.define('User', {--%>
            <%--extend: 'Ext.data.Model',--%>
            <%--fields: [ 'name', 'email', 'phone' ]--%>
        <%--});--%>

        <%--var userStore = Ext.create('Ext.data.Store', {--%>
            <%--model: 'User',--%>
            <%--autoLoad: true,--%>
            <%--pageSize: 4,--%>
            <%--proxy: {--%>
                <%--type: 'ajax',--%>
                <%--enablePaging: true,--%>
                <%--url: '${pageContext.request.contextPath}/user/user.json',--%>
                <%--reader: {--%>
                    <%--type: 'json',--%>
                    <%--root: 'users',--%>
                    <%--totalProperty: 'total'--%>
                <%--}--%>
            <%--}--%>
        <%--});--%>

        <%--Ext.create('Ext.grid.Panel', {--%>
            <%--renderTo: 'container',--%>
            <%--store: userStore,--%>
            <%--title: 'Application Users',--%>
            <%--columnLines: true,--%>
            <%--collapsible: true,--%>
            <%--multiSelect: true,--%>
            <%--frame: true,--%>
            <%--width: 500,--%>
            <%--height: 300,--%>
<%--//            padding: 5,--%>
            <%--columns: [--%>
                <%--{--%>
                    <%--xtype: 'rownumberer'--%>
                <%--},--%>
                <%--{--%>
                    <%--text: 'Name',--%>
<%--//                    width: 100,--%>
                    <%--sortable: false,--%>
                    <%--hideable: false,--%>
                    <%--flex: 1,--%>
                    <%--dataIndex: 'name'--%>
                <%--},--%>
                <%--{--%>
                    <%--text: 'Email Address',--%>
<%--//                    width: 150,--%>
                    <%--dataIndex: 'email',--%>
                    <%--flex: 1,--%>
                    <%--hidden: true--%>
                <%--},--%>
                <%--{--%>
                    <%--text: 'Phone Number',--%>
                    <%--flex: 1,--%>
                    <%--dataIndex: 'phone'--%>
                <%--}--%>
            <%--],--%>
            <%--bbar: {--%>
                <%--xtype: 'pagingtoolbar',--%>
                <%--pageSize: 2,--%>
                <%--store: userStore,--%>
                <%--displayInfo: true,--%>
                <%--plugins: new Ext.ux.ProgressBarPager()      // TODO 解决查询form--%>
            <%--}--%>
        <%--});--%>
    <%--});--%>
</script>
<body style="text-align: center">
<div id="condition"></div>
<div id="container" style="text-align: center"></div>
</body>
</html>
