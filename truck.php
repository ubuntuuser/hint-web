
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="">
        <link rel="shortcut icon" href="../../assets/ico/favicon.ico">

        <title>Theme Template for Bootstrap</title>

        <!-- Bootstrap core CSS -->
        <link href="./css/bootstrap.min.css" rel="stylesheet">
        <!-- Bootstrap theme -->
        <link href="./css/bootstrap-theme.min.css" rel="stylesheet">

        <!-- Custom styles for this template -->
        <!--<link href="theme.css" rel="stylesheet">-->

        <!-- Just for debugging purposes. Don't actually copy this line! -->
        <!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->

        <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
          <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
        <![endif]-->
        
    </head>

    <body role="document">

        <div class="container theme-showcase" role="main">
            <div class="jumbotron" id="contentdiv">
                
            </div>
        </div>
        <!-- Bootstrap core JavaScript
        ================================================== -->
        <!-- Placed at the end of the document so the pages load faster -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
        <script src="./js/bootstrap.min.js"></script>
        <script src="./js/jquery.rest.min.js"></script>
        <script lang="text/js">
        $host = "10.0.0.2";
        $("#contentdiv").load("sub/controltruck.html", function() {
            $("#toloading").click(function() {
                alert("LKW got clicked");
                $.get("http://" + $host + ":8000/DEMOService/truck/goto/loading", function() {
                    alert("LKW was performed.");
                });
            });
            $("#tostart").click(function() {
                alert("LKW got clicked");
                $.get("http://" + $host + ":8000/DEMOService/truck/goto/start", function() {
                    alert("LKW was performed.");
                });
            });
        });
        </script>
        <!--<script src="./js/docs.min.js"></script>-->
    </body>
</html>
