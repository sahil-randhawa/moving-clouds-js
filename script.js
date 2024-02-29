// Write JavaScript code here

const clouds = document.getElementsByClassName("cloud");
const cloud = clouds[0];
// cloud.style.top = `${(Math.random() * 100)}%`;
// cloud.style.left = `${(Math.random() * 100)}%`;
// cloud.style.transform = `scale(${(Math.random() * 0.7) + 0.3})`;

cloud.style.top = `200px`;
cloud.style.left = `200px`;
cloud.style.transform = `scale(0.5)`;
cloud.style.transition = `all linear 3s`;

setInterval(() => {
    if (cloud.style.left === `100%`) {
        cloud.style.left = `-100px`;
    } else {
        cloud.style.left = `100%`;
    }
}, 3000);