function FetchData() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  xhr.send();
  xhr.onload = () => {
    let response = xhr.responseText;
    let arr = JSON.parse(localStorage.getItem("users"));
    if (!arr) {
      localStorage.setItem("users", response);
    }
    // DisplayData();
  };
}

function DisplayData() {
  let users = JSON.parse(localStorage.getItem("users"));
  let html = ` <center>
    <table border='2px'>
        <thead>
            <tr>
                <th>
                    Name
                </th>
                <th>
                    Phone-Number
                </th>
                <th>
                    Division
                </th>
                <th>
                    email
                </th>
                <th>
                    CGPA
                </th>
                <th>
                    branch
                </th>
            </tr>
        </thead>
        <tbody>
    `;
  users.forEach((element) => {
    html += `
        <tr>
        <td>${element?.name}</td>
        <td>${element?.phone}</td>
        <td>${element?.div || "11"}</td>
        <td>${element?.email}</td>
        <td>${element?.cgpa}</td>
        <td>${element?.branch}</td>
        </tr>
        `;
  });

  html += "</tbody> </table></center>";

  const w = open();
  w.document.body.innerHTML = html;
}

FetchData();

document.forms.registrationForm.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let div = document.getElementById("div").value;
  let email=document.getElementById("email").value;
  let cgpa = document.getElementById("cgpa").value;
  let branch = document.getElementById("branch").value;

  let postObj = { name, phone, div ,email,cgpa,branch };

  $.ajax({
    type: "POST",
    url: "https://jsonplaceholder.typicode.com/users",
    data: JSON.stringify(postObj),
    contentType: "application/json; charset=utf-8",

    success: function (newUser) {
      let arr = JSON.parse(localStorage.getItem("users"));
      arr.unshift(newUser);
      localStorage.setItem("users", JSON.stringify(arr));
      DisplayData();
    },
    error: function (error) {
      console.log(error);
      DisplayData();
    },
  });
}
