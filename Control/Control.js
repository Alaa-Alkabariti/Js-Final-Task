/* let formData = document.getElementById('inputs');

if (formData) {
    formData.addEventListener('submit' , handling);
}


function handling(e) {
    e.preventDefault();

    let inputOne = document.getElementById('name').value;
    let inputTwo = document.getElementById('desc').value;

    fetch('https://61bf323ab25c3a00173f4cff.mockapi.io/profile/4' , {
        method : 'PUT',
        body : JSON.stringify({
            name : inputOne,
            discription : inputTwo,
        }),
        headers : {
            'Content-Type' : 'application/json'
        }
    }).then(response => response.json())
} */

let profileData = document.getElementById("profileForm");
//to check if the page has a form html code
if (profileData) {
  profileData.addEventListener("submit", handleEventListener);

  /*    let addNew = document.getElementById("two")
    addNew.addEventListener("click", btnClick, false) */
}

function handleEventListener(e) {
  e.preventDefault();
  let nameProperty = document.getElementById("userName").value;
  let idProperty = document.getElementById("userId").value;
  let titleProperty = document.getElementById("userTitle").value;
  let descProperty = document.getElementById("userdesc").value;
  let imageProperty = document.getElementById("userImage").value;

  const userProfileDetails = [
    nameProperty,
    idProperty,
    titleProperty,
    descProperty,
    imageProperty,
  ];

  /*  const profileValues = [nameProperty , titleProperty , descProperty , imageProperty]; */

  /* console.log(imageProperty); */
  fetch(`https://61bf323ab25c3a00173f4cff.mockapi.io/profile/1`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: userProfileDetails[0],
      id: userProfileDetails[1],
      title: userProfileDetails[2],
      discription: userProfileDetails[3],
      img: userProfileDetails[4],
    }),
  })
    .then((response) => response.json())
  //without another then or even catch, we dont need to handle with the return data m just display them
}

//////////////////////////////////////////////////////////////////////////////////////////

//Skills section starts here
//get the form element and assign it into the
let skillsForm = document.getElementById("skillsForm");
if (skillsForm) {
  skillsForm.addEventListener("submit", handleSkillsForm);
}

function handleSkillsForm(e) {
  e.preventDefault(); //to prevent the browser auto refresh
  let skillName = document.getElementById("skill").value;
  let skillExperience = document.getElementById("Experience").value;
  let skillId = document.getElementById("id").value;

  const skillItem = [skillName, skillExperience, skillId];

  console.log(skillName);
  console.log(skillExperience);
  console.log(skillId);

  fetch("https://61bf323ab25c3a00173f4cff.mockapi.io/profileSkills/55", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      skill: skillItem[0],
      experience: skillItem[1],
      id: skillItem[2],
    }),
  })
    .then((response) => response.json())

  function addSkill(/* e */) {
    /* e.preventDefault(); */

    fetch("https://61bf323ab25c3a00173f4cff.mockapi.io/profileSkills", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        skill: "jquery",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        //for testing
        let newSkill = document.createElement("p");
        skillsForm.appendChild(newSkill);
        newSkill.innerHTML = data.skill;
      });
  }

  function deleteSkill() {
    fetch("https://61bf323ab25c3a00173f4cff.mockapi.io/profileSkills/54 ", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  deleteSkill();

  //Skills section ends here

  /*more than one button in form:   https://eloquentjavascript.net/15_event.html*/

  ///////////////////////////////////////////////////////////////////////////

}



let gallaeryForm = document.getElementById("galForm");
if (gallaeryForm) {
  gallaeryForm.addEventListener("submit", addImageToGallery);
}

function addImageToGallery(e) {
  e.preventDefault();

  let imageLink = document.getElementById("imageLink").value;
  let imageDescription = document.getElementById("description").value;
  let imageId = document.getElementById("id").value;



  const arrayOfImage = [imageLink, imageDescription, imageId];

  console.log(arrayOfImage)

  fetch("https://61bf323ab25c3a00173f4cff.mockapi.io/gallery/1  ", {
    method: "PUT",
    
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      img: arrayOfImage[0],
      description: arrayOfImage[1],
      id: arrayOfImage[2],
    }),
  })
    .then(response => { return response.json()})
}




function AddNewImg() {
    fetch('https://61bf323ab25c3a00173f4cff.mockapi.io/gallery' , {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(
            {
                img: "https://www.google.com/search?q=images&sxsrf=AOaemvLUNBF1wQNsQwhekTM36LI0c5A0UQ:1641936967220&tbm=isch&source=iu&ictx=1&vet=1&fir=v1A5vQPzRgfCGM%252C7T8fKkixbRnWvM%252C_%253BL8xfQakH9a8tJM%252CBa_eiczVaD9-zM%252C_%253B2eIb5BjhQiiZzM%252CnBiD9BWYMB87aM%252C_%253BLK6S_eMkLDVwQM%252CB51x0PBR9KNzvM%252C_%253BarFfSjMu_GX7sM%252CUkcvm3PybD5jEM%252C_%253BITUG1uFAV1aQ9M%252CX9GBbDAacv-dWM%252C_%253BOFjLbX408Yt9iM%252CjMPx2dPKbYbCVM%252C_%253BtTplitM2kjOQtM%252C-UStXW0dQEx4SM%252C_%253BeXUC-3WyVcZa-M%252CfcNz05h1Ca2eyM%252C_%253B2DNOEjVi-CBaYM%252CAOz9-XMe1ixZJM%252C_%253B8EekYKjMUCitwM%252CUkcvm3PybD5jEM%252C_%253BsSAWficq0VlQLM%252CG9GbNX6HcZ2O_M%252C_%253Bwp1tdfttzeGYZM%252CZaycYywhXLmIVM%252C_&usg=AI4_-kRNhU4YWdoQJrqkzp7F_5496CF8Gw&sa=X&ved=2ahUKEwigr7Lt06r1AhURSvEDHSCXDJAQ9QF6BAgKEAE#imgrc=L8xfQakH9a8tJM",
                description:"Description text",
                id: '2'
            }
        )
    }).then(response => response.json())
    .then(data => console.log(data))
}

