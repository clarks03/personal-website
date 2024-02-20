let animation = document.getElementById('sphealAnimation');
let count = 0;
const sensitivity = 70;
const NUM_FRAMES = 213;

function positiveModulo(a, b) {
    return ((a % b) + b) % b;
}

window.addEventListener('wheel', function(event) {
    count = positiveModulo((count + Math.floor((event.deltaY) / sensitivity)), NUM_FRAMES);
    animation.seek(count);
    console.log(count);
});
