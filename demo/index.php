<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Demo WS SlideToggle</title>
    <script src="slideToggle.js"></script>
</head>
<body>
    <h1>Demo WS-SlideToggle</h1>
    <button id="elem">Click here</button>
    <div id="wrap-content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vel ullam ab voluptatum velit natus nihil. Omnis culpa mollitia, dolorem enim totam itaque architecto eos labore soluta! Quam, eum illo?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vel ullam ab voluptatum velit natus nihil. Omnis culpa mollitia, dolorem enim totam itaque architecto eos labore soluta! Quam, eum illo?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vel ullam ab voluptatum velit natus nihil. Omnis culpa mollitia, dolorem enim totam itaque architecto eos labore soluta! Quam, eum illo?</p>
    </div>
    
    <script>
        slideToggle(
            document.getElementById('elem'), 
            document.getElementById('wrap-content'),
            100
        );
    </script>
</body>
</html>