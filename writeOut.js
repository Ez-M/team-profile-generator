
const htmlTempFirst = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    <link rel="stylesheet" href="output.css">
    <title>Document</title>
</head>

<body>

    <header class="col-12 bg-secondary">`
    
    
    const htmlTempSecond = `</header>


    <div class="mainDiv fluid-container">

        <div class="row">+`

const htmlTempLast = `







        </div>
    </div>



    <script src="https://code.jquery.com/jquery-3.5.0.js"></script>
    <script src="./output.js"></script>
</body>

</html>


`




module.exports.htmlTempFirst = htmlTempFirst;
module.exports.htmlTempSecond = htmlTempSecond;
module.exports.htmlTempLast = htmlTempLast;