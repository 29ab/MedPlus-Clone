
let image = ["https://static2.medplusmart.com/live/bannerImage/Mart/55519bfa3e6de316be1d90982fca1c3c.jpg",
    "https://static2.medplusmart.com/live/bannerImage/Mart/ffa9aa12a0c9d05a55690583e614e28b.jpg",
    "https://static2.medplusmart.com/live/bannerImage/Mart/1d0399c83b9a416e21e8a4c200bb843a.jpg",
    "https://static2.medplusmart.com/live/bannerImage/Mart/6c542b55fd53749dcdbc75aa0ee87729.jpg",
    "https://static2.medplusmart.com/live/bannerImage/Mart/09a9949f5a36c00ffb857b7b62973d7d.jpg",
    "https://static2.medplusmart.com/live/bannerImage/Mart/0a9a7f6fce7bdfb4cf297da89860057f.jpg",
    "https://static2.medplusmart.com/live/bannerImage/Mart/55519bfa3e6de316be1d90982fca1c3c.jpg",
    "https://static2.medplusmart.com/live/bannerImage/Mart/1d0399c83b9a416e21e8a4c200bb843a.jpg"]

let container = document.getElementById("Slidshow");

function startSlidshow() {
    let counter = 0;

    let interval = setInterval(function () {

        container.innerHTML = null;

        if (counter === image.length) {
            counter = 0;
        }
        let img = document.createElement("img");

        img.src = image[counter];
        container.append(img);
        counter++;
    }, 1500);

}

startSlidshow();


// // feedback details 


// function feedback(e) {
//     e.preventDefault();


//     let feedback = document.getElementById("feedback");

//     let name = feedback.name.value;
//     let email = feedback.email.value;
//     let city = feedback.city.value;
//     let para = feedback.feedbackRv.value;
//     console.log(name, email, city, para);

//     if (localStorage.getItem("data") === null) {
//         localStorage.setItem("data", JSON.stringify([]));
//     }

//     //1. send user data

//     let datalist = {
//         name,
//         email,
//         city,
//         para
//     }
//     console.log("user:", name, email, city, para);
//     let arr = JSON.parse(localStorage.getItem("data"));

//     //2. push new user to array

//     arr.push(datalist);//added a new user
//     console.log(arr)

//     localStorage.setItem("data", JSON.stringify(arr));

//     document.getElementById('name').value = '';
//     document.getElementById('email').value = '';
//     document.getElementById('city').value = '';
//     document.getElementById('feedbackRv').value = '';
// }

// let parent = document.getElementById("feedbackDetails");

// let feedbackDetails = JSON.parse(localStorage.getItem("data"));
// console.log("data---:", feedbackDetails);


// function showReview() {
//     feedbackDetails.forEach(function (d) {
//         // console.log(product.name);

//         let div = document.createElement("div");

//         let h3 = document.createElement("h3");

//         h3.textContent = d.name;

//         let emails = document.createElement("p");

//         emails.textContent = d.email;

//         let citys = document.createElement("p");

//         citys.textContent = d.city;

//         let paras = document.createElement("p");

//         paras.textContent = d.para;

//         div.append(h3, emails, citys, paras);

//         parent.append(div);
//     });
// }

// showReview();

// // best seller


