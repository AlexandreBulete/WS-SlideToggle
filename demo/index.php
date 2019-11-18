<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Demo WS SlideToggle</title>
    <script src="slideToggle.js"></script>
    <style lang="css">
        #wrap-btn {
            margin: 0;
            background: #136e59;
            color: white;
            padding: 5px 15px;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
        }
        #wrap-btn:hover {
            cursor: pointer;
        }
        #wrap-content {
            background-color: #f6f6f6;
        }
        #wrap-content p {
            /* border: 1px solid lightgrey; */
            padding: 5px 15px;
            margin: 0;
        }
    </style>
</head>
<body>
    <h1>Demo WS-SlideToggle</h1>
    <p id="wrap-btn">Click here</p>
    <div id="wrap-content">
        <p>ligne 1</p>
        <p>ligne 2</p>
        <p>ligne 3</p>
        <p>ligne 4</p>
        <p>ligne 5</p>
    </div>
    
    <script>
        slideToggle(
            document.getElementById('wrap-btn'), 
            document.getElementById('wrap-content'),
            100
        );
    </script>
</body>
</html>