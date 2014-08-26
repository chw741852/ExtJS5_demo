<!DOCTYPE html>
<html>
<head>
    <title>Ext JS Layout Browser Examples</title>

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/layout-browser.css">
    <style type="text/css">
        #app-header-title {
            padding: 15px 0 10px 0;
            color: #fff;
            font-size: 18px;
            font-weight: bold;
            text-shadow: 0 1px 0 #4e691f;
        }
        #app-header {
            background-color:#81af34;
            background-image:-webkit-gradient(linear,50% 0,50% 100%,color-stop(0%,#8fc33a),color-stop(100%,#739b2e));
            background-image:-webkit-linear-gradient(top,#8fc33a,#739b2e);
            background-image:-moz-linear-gradient(top,#8fc33a,#739b2e);
            background-image:-o-linear-gradient(top,#8fc33a,#739b2e);
            background-image:-ms-linear-gradient(top,#8fc33a,#739b2e);
            background-image:linear-gradient(top,#8fc33a,#739b2e);
            border-bottom:1px solid #567422
        }
        .ks-theme-switcher {
            background-image: url(images/options.png);
            width: 22px;
            height: 22px;
        }
    </style>
    <!-- Ext -->
    <jsp:include page="/common/head.jsp"></jsp:include>
    <script charset="UTF-8" src="${pageContext.request.contextPath}/script/ext5/ux/TabReorderer.js"></script>
    <script charset="UTF-8" src="${pageContext.request.contextPath}/js/layouts/basic.js"></script>
    <script charset="UTF-8" src="${pageContext.request.contextPath}/js/layouts/custom.js"></script>
    <script charset="UTF-8" src="${pageContext.request.contextPath}/js/layouts/combination.js"></script>
    <%--<script charset="UTF-8" src="${pageContext.request.contextPath}/js/layout-browser.js"></script>--%>
    <script charset="UTF-8" src="${pageContext.request.contextPath}/app.js"></script>
    <script>
//        Ext.onReady(function() {
//            new Orochi.Application();
//        });
    </script>
</head>
<body>
<a href="${pageContext.request.contextPath}/course/lesson1/lesson1.jsp">lesson1</a>
<a href="${pageContext.request.contextPath}/course/lesson2/lesson2.jsp">lesson2</a>
<a href="${pageContext.request.contextPath}/course/mvc/index.jsp">mvc</a>
</body>
</html>
