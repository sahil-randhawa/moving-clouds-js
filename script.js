// Write JavaScript code here

const conatinerElement = document.getElementById("container");

conatinerElement.innerHTML = '<div class="cloud"><div class="cloudBubble1" ></div><div class="cloudBubble2"></div></div > '.repeat(8);


const clouds = document.getElementsByClassName("cloud");
// const cloud = clouds[0];

for (let cloud of clouds) {

    cloud.style.top = `${(Math.random() * 100)}%`;
    cloud.style.left = `${(Math.random() * 100)}%`;
    cloud.style.transform = `scale(${(Math.random() * 0.7) + 0.3})`;
    cloud.style.opacity = (Math.random() * 0.5) + 0.5;

    // cloud.style.top = `200px`;
    // cloud.style.left = `200px`;
    // cloud.style.transform = `scale(0.5)`;

    const intervalTimeInSeconds = (Math.random() * 12) + 12;

    cloud.style.transition = `all linear ${intervalTimeInSeconds}s`;

    setTimeout(() => {
        cloud.style.left = `-50%`;
    }, 100);

    let x = 0;
    setInterval(() => {
        if (x % 2 === 0) cloud.style.left = `100%`;
        else cloud.style.left = `-50%`;
        x += 1;
    }, intervalTimeInSeconds * 1000);

}