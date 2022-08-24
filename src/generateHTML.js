
const generateHTML = ({ name, id, email, role }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${name}</h1>
    <p class="lead">I am from ${id}.</p>
    <p class="lead">My email is ${email}.</p>
    <p class="lead">My role is ${role}.</p>
  </div>
</div>
</body>
</html>`;

module.exports = generateHTML;