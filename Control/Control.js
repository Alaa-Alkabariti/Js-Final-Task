//Profile

//Update profile details starts here
let profileData = document.getElementById("profileForm");
//to check if the page has a form html code
if (profileData) {
  profileData.addEventListener("submit", handleEventListener);
}

function handleEventListener(e) {
  e.preventDefault();
  let nameProperty = document.getElementById("userName").value;
  let titleProperty = document.getElementById("userTitle").value;
  let descProperty = document.getElementById("userdesc").value;
  let imageProperty = document.getElementById("userImage").value;

  fetch(`https://61bf323ab25c3a00173f4cff.mockapi.io/profile/2`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: nameProperty,
      title: titleProperty,
      discription: descProperty,
      img: imageProperty,
    }),
  }).then((response) => response.json());
}
//Update profile details ends here




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//Skills

//Skills section starts here
//get the form element and assign it into the   >>>> Done
function handleSkillsForm() {
  fetch("https://61bf323ab25c3a00173f4cff.mockapi.io/profileSkills", {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let userProfileSkills = data.map((skill) => {
        return `
        <div class="skill">
        <div class="s1">
            <p id="skill" class="skillItem"> Skill Name:  ${skill.skill}</p>
        </div>
        <div class="s2">
            <p id="expe" class="skillItem"> Experience: ${skill.Experience}</p>
        </div>  
        <button id="Update" class="updateSkillBtn" onclick="updateSkill(${skill.id})">Update</button>
        <button id="Delete" class="deleteSkillBtn" onclick="deleteSkill(${skill.id})">Delete</button>
    </div>`;
      });

      document.querySelector(".viewSkills").innerHTML = userProfileSkills;
      //Why I had an error when I I used getElementByClassName
      Object.values(document.getElementsByClassName("viewSkills")).map((el) => {
        el.style.width = "100%";
        el.style.minWidth = "200px";
        el.style.border = "2px solid #eeeeee";
        el.style.margin = "10px"; /* 
          el.style.padding = "10px" */
        el.style.display = "flex";
        el.style.flexDirection = "row";
        el.style.justifyContent = "center";
        el.style.alignItems = "start";
        el.style.boxShadow = "3px 3px 3px 0px rgba(227,222,222,0.75)";
        el.style.boxShadow = "3px 3px 3px 0px rgba(227,222,222,0.75)";
        el.style.backgroundColor = "transparent";
      }); /* .join("") */
    });
}
handleSkillsForm();
//Get all the skills and display them ends here

//Create new skill and display it in the skills list
let skillsForm = document.getElementById("skillsForm");
if (skillsForm) {
  skillsForm.addEventListener("submit", addSkill);
}

function addSkill(e) {
  e.preventDefault();

  let newSkill = document.getElementById("skill").value;
  let newExp = document.getElementById("expe").value;

  fetch("https://61bf323ab25c3a00173f4cff.mockapi.io/profileSkills", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      skill: newSkill,
      Experience: newExp,
    }),
  })
    .then((response) => response.json())
    .then((skill) => handleSkillsForm());
}

function deleteSkill(id) {  
  fetch(`https://61bf323ab25c3a00173f4cff.mockapi.io/profileSkills/${id} `, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((skill) => handleSkillsForm());
}

function updateSkill(id) {
  let newSkill = document.getElementById("skill").value;
  let newExp = document.getElementById("expe").value;

  fetch(`https://61bf323ab25c3a00173f4cff.mockapi.io/profileSkills/${id} `, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      skill: newSkill,
      Experience: newExp,
    }),
  })
    .then((response) => response.json())
    .then((skill) => handleSkillsForm());
}

//Skills section ends here

/*more than one button in form:   https://eloquentjavascript.net/15_event.html*/
/* } */




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




//Gallery

//Update gallery details starts here

let galleryForm = document.getElementById("galleryForm");
if (galleryForm) {
  galleryForm.addEventListener("submit", updateImageOfGallery);
}

function updateImageOfGallery(e) {
  e.preventDefault();

  let imageLink = document.getElementById("galleryImg").value;
  let imageDescription = document.getElementById("galleryDescription").value;

  fetch("https://61bf323ab25c3a00173f4cff.mockapi.io/gallery/28", {
    method: "PUT",

    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      img: imageLink,
      description: imageDescription,
    }),
  }).then((response) => {
    return response.json();
  });
}
//Update gallery details ends here

function AddNewImg() {
  let imageLink = document.getElementById("galleryImg").value;
  let imageDescription = document.getElementById("galleryDescription").value;

  fetch("https://61bf323ab25c3a00173f4cff.mockapi.io/gallery", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      img: imageLink,
      description: imageDescription,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}

/* AddNewImg(); */




/*File uploading starts here*/
/*File uploading ends here*/