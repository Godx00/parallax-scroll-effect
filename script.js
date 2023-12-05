const frames = 50;
const img = new Image();
const source = index => `/frames/ezgif-frame-${index.toString().padStart(3, '0')}.png`;
const myElement = document.getElementById('canvas1');
const context = myElement.getContext('2d');
myElement.height = 1080;
myElement.width = 1920;

const update = index => {
    img.src = source(index);
    img.onload = function () {
        context.drawImage(img, 0, 0);
    };
}

window.addEventListener('scroll', () => {
    const top = window.scrollY;
    const topMax = document.documentElement.scrollHeight - window.innerHeight;
    const fraction = top / topMax;
    const frameIndex = Math.min(frames - 1, Math.floor(fraction * frames));
    console.log(frameIndex);
    update(frameIndex);
});
