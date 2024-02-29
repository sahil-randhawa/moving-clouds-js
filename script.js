// Write JavaScript code here

const clouds = document.getElementsByClassName("cloud");
const cloud = clouds[0];
// cloud.style.top = `${(Math.random() * 100)}%`;
// cloud.style.left = `${(Math.random() * 100)}%`;
// cloud.style.transform = `scale(${(Math.random() * 0.7) + 0.3})`;

cloud.style.opacity = (Math.random() * 0.5) + 0.5;
cloud.style.top = `200px`;
cloud.style.left = `200px`;
cloud.style.transform = `scale(0.5)`;
cloud.style.transition = `all linear 15s`;

window.onload = () => {
    cloud.style.transform = `translateX(100vw)`;
}