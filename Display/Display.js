//Update user profile details starts  here
const userNameD = document.getElementById("userName");
const userTitleD = document.getElementById("userTitle");
const userDescD = document.getElementById("userDescription");
const userImageD = document.getElementById("userImage");

function getUserData() {
  // fetch("https://61bf323ab25c3a00173f4cff.mockapi.io/profile", {
  fetch("https://61bf323ab25c3a00173f4cff.mockapi.io/profile/2", {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      userNameD.innerHTML = data.name;
      userTitleD.innerHTML = data.title;
      userImageD.src = data.img;
      userDescD.innerHTML = data.discription;
    });
}

getUserData();
//Update user profile details ends here

///////////////////////////////////////////////////////////////////////////

//Skills sections strts here

// const skill1 = document.getElementById("skill1");
const skillId = document.getElementById("skillId");
const skillExperience = document.getElementById("skillExperience");
const skillName = document.getElementById("skillName");


function getSkills() {
  fetch("https://61bf323ab25c3a00173f4cff.mockapi.io/profileSkills", {
    method: "GET",
  })
    .then((response) => {return response.json();})
    .then((data) => {
      let userProfileSkills = data.map((skill) => {
        return `
        <div style="min-width:200px; margin:10px; width:50%; background-color:#eeeeee; color:#ffffff border="10px solid #ff0000; box-shadow:3px 3px 3px #ff0000" class="skillItem">
                <p id="skillName">Skill Name: ${skill.skill}</p>
                <p id="skillExperience">Experience:${skill.Experience}</p>
            </div>`;
      });

      document.querySelector(".skillItem").innerHTML = userProfileSkills;
      //Why I had an error when I I used getElementByClassName
      Object.values(document.getElementsByClassName("skillsSection")).map((el) => {
        el.style.width = "100%";
        el.style.height = "auto";
        el.style.minWidth = "200px";
        el.style.border = "2px solid #eeeeee";
        el.style.margin = "10px"; /* 
          el.style.padding = "10px" */
        el.style.display = "flex";
        el.style.flexDirection = "row";
        el.style.justifyContent = "center";
        el.style.alignItems = "start";
        el.style.flexWrap = "wrap";
        el.style.boxShadow = "3px 3px 3px 0px rgba(227,222,222,0.75)";
        el.style.boxShadow = "3px 3px 3px 0px rgba(227,222,222,0.75)";
        /* el.style.backgroundColor = "transparent"; */
      });   
    });
}

getSkills();

//Skills sections ends here

//Display the new added skill starts here

// const newSkill = document.getElementById("newSkill");

// function displayNewSkill() {
//   fetch("https://61bf323ab25c3a00173f4cff.mockapi.io/profileSkills", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {

//       `<div>
//       <p id="skillName"></p> <button onclick="deleteSkill()" id="del">Delete</button>
//       <p id="skillExperience"></p> <button onclick="deleteSkill()" id="del">Delete</button>
//       <p id="skillId"></p> <button onclick="deleteSkill()" id="del">Delete</button>
//       </div>`

//       newSkill.innerHTML = data[0].skill;
//     });
// }

// displayNewSkill();

//Display the new added skill ends here

//delete skill starts here
/* document.getElementById('del').addEventListener('click',deleteSkill);
 */
function deleteSkill(id) {
  fetch(`https://61bf323ab25c3a00173f4cff.mockapi.io/profileSkills/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function getAllGalleryImages() {
  fetch("https://61bf323ab25c3a00173f4cff.mockapi.io/gallery", {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let userProfileDisplaying = data.map((user) => {
        return `
        <div class="imageHere" style="margin-top:100px"> 
        <button style="height:20px; width:30px; text-align:center; margin-left:-20px"  onclick="deleteOneUserFunc(${user.id})" class="btn"><i style="color:white" class="fas fa-trash-alt"></i></button>    
        <img style="width:100%; height:200px;" src="${user.img}"/>
        </div>`;
      });

      document.querySelector(".gallerySection").innerHTML =
        userProfileDisplaying;
      //Why I had an error when I I used getElementByClassName
      Object.values(document.getElementsByClassName("imageHere")).map((el) => {
        el.style.width = "20%";
        el.style.minWidth = "200px";
        el.style.border = ".5px solid #eeeeee";
        el.style.margin = "10px"; /* 
          el.style.padding = "10px" */
        el.style.display = "flex";
        el.style.flexDirection = "row";
        el.style.justifyContent = "end";
        el.style.alignItems = "start";
        el.style.boxShadow = "3px 3px 3px 0px rgba(227,222,222,0.75)";
        el.style.boxShadow = "3px 3px 3px 0px rgba(227,222,222,0.75)";
        el.style.backgroundColor = "transparent";
      }); /* .join("") */
    });
}

getAllGalleryImages();

function deleteOneUserFunc(id) {
  fetch(`https://61bf323ab25c3a00173f4cff.mockapi.io/gallery/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => getAllGalleryImages());
}
