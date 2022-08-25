
const generateHTML = ({ name, id, email, number, options, github, school }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Team Profile</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Name: ${name}</h1>
    <p class="lead">Employee Id: ${id}</p>
    <p class="lead"><a href="mailto:${email}">Send email</a></p>
    <p class="lead">Office number: ${number}</p>
    <p class="lead">Team member: ${options}</p>
    <p class="lead">GitHub username:<a href = "https://github.com/${github}" target="_blank"> ${github}</a></p>
    <p class="lead">School name: ${school}</p>
  </div>
  <div class="card" style="width: 18rem;">
  <div class="card-header">
  <p>${name}</p>
  <p>${options}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Id: ${id}</li>
    <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
    <li class="list-group-item">Office number: ${number}</li>
    <li class="list-group-item">GitHub: <a href = "https://github.com/${github}" target="_blank">${github}</a></li>
    <li class="list-group-item">School: ${school}</li>
  </ul>
</div>
</div>
</body>
</html>`;

module.exports = generateHTML;
