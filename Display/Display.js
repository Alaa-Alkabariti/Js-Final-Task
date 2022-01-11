/* function getUserName() {
    fetch('https://61bf323ab25c3a00173f4cff.mockapi.io/profile' , {
        method : 'GET'
    }).then(response => {return response.json()})
    .then((data) => {
        userName.innerHTML = data[0].name,
        discription.innerHTML = data[0].discription
    })

}

getUserName(); */

const userNameD = document.getElementById("userName");
const userTitleD = document.getElementById("userTitle");
const userDescD = document.getElementById("userDescription");
const userImageD = document.getElementById("userImage");

function getUserData() {
  fetch("https://61bf323ab25c3a00173f4cff.mockapi.io/profile", {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      userNameD.innerHTML = data[0].name;
      userTitleD.innerHTML = data[0].title;
      userImageD.src = data[0].img;
      userDescD.innerHTML = data[0].discription;

      console.log(userImageD.src);
    });
}

getUserData();

///////////////////////////////////////////////////////////////////////////

//Skills sections strts here

const skill1 = document.getElementById("skill1");

const skillId = document.getElementById("skillId");
const skillExperience = document.getElementById("skillExperience");
const skillName = document.getElementById("skillName");

const alluserSkillDetails = [skillId, skillExperience, skillName];

function getSkills() {
  fetch("https://61bf323ab25c3a00173f4cff.mockapi.io/profileSkills", {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      (skillId.innerHTML = data[1].skill),
        (skillExperience.innerHTML = data[0].experience);
      skillName.innerHTML = data[0].id;
    });
}

getSkills();

//Skills sections ends here

//Display the new added skill starts here
const newSkill = document.getElementById("newSkill");

function displayNewSkill() {
  fetch("https://61bf323ab25c3a00173f4cff.mockapi.io/profileSkills", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      newSkill.innerHTML = data[0].skill;
    });
}

displayNewSkill();
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

/* fetch the gallery images starts here*/
const galleryImg1 = document.getElementById("gal1");
const galleryImg2 = document.getElementById("gal2");
const galleryImg3 = document.getElementById("gal3");
function getGalleryImage() {
  fetch("https://61bf323ab25c3a00173f4cff.mockapi.io/gallery", {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      galleryImg1.src = data[0].img;
      galleryImg2.src = data[0].img;
      galleryImg3.src = data[0].img;

      console.log(userImageD.src);
    });
}

getGalleryImage();
/*fethch the gallery images ends here*/
