// 
const generateHTML = (employees) => {
  let employeeHtml = ""
  for (let index = 0; index < employees.length; index++) {
    const employee = employees[index];
    if (employee.getRole()=== "Manager") {
    employeeHtml = employeeHtml + `<div class="card" style="width: 18rem;">
    <div class="card-header">
    <p>${employee.getName()}</p>
    <p>${employee.getRole()}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Id: ${employee.getId()}</li>
      <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
      <li class="list-group-item">Office number: ${employee.getOfficeNumber()}</li>
    </ul>
  </div>
  </div>`      
    } else if (employee.getRole() === "Engineer") {
      employeeHtml = employeeHtml + `<div class="card" style="width: 18rem;">
      <div class="card-header">
      <p>${employee.getName()}</p>
      <p>${employee.getRole()}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Id: ${employee.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
        <li class="list-group-item">GitHub username:<a href = "https://github.com/${employee.getGithub()}" target="_blank"> ${employee.getGithub()}</a></li>
      </ul>
    </div>
    </div>`    
    } else {
      employeeHtml = employeeHtml + `<div class="card" style="width: 18rem;">
      <div class="card-header">
      <p>${employee.getName()}</p>
      <p>${employee.getRole()}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Id: ${employee.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
        <li class="list-group-item">Office number: ${employee.getSchool()}</li>
      </ul>
    </div>
    </div>`    
    }
    
  }
 return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="./style.css">
  <title>Team Profile</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4 text-center">My Team</h1>
  </div>
  </div>
  <div>${employeeHtml}</div>
</body>
</html>`};

module.exports = generateHTML;
