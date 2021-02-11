function renderHtml(data){
    let conglomerate =``;

    for (i=0; i<data.length; i++){
        conglomerate +=`
        <h2> Title: ${data[i].getRole()} </h2>
        <h2> Name: ${data[i].name} </h2>
        <h2> ID: ${data[i].id} </h2>
        <h2> Email: ${data[i].email} </h2>
        <a href="https://www.google.com"> Github: ${data[i].github} </h2
        `
    }

    return`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    ${conglomerate}
</body>
</html>`
}

module.exports = renderHtml