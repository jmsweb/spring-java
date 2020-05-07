<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta charset="UTF-8">
        <title>Home</title>
        <script src='/test-web/resources/js/code-rain.js' type="text/javascript" async=true></script>
        <style type="text/css">
            body {
                padding: 0;
                margin: 0;
                overflow: hidden;
            }
        </style>
    </head>
    <body>
        <spring:message code="site.home.welcome"/>
        <div><canvas id="matrix"></canvas></div>
    </body>
</html>