// display and hide education details
const aboveBox = document.getElementById('aboveBox1');
const belowBox = document.getElementById('belowBox1');
const plus = document.getElementById('plus1');
const minus = `<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="#000000" color="#000000" class="bi bi-dash" viewBox="0 0 16 16">
<path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
</svg>`;

// denotes original plus symbol
const oplus = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" color="#000000" class="bi bi-plus" viewBox="0 0 16 16">
    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg>`;

const aboveBox2 = document.getElementById('aboveBox2');
const belowBox2 = document.getElementById('belowBox2');
const plus2 = document.getElementById('plus2');
const minus2 = `<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="#000000" color="#000000" class="bi bi-dash" viewBox="0 0 16 16">
<path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
</svg>`;


// toggling features of eduaction button1
aboveBox.addEventListener('click', function () {
    if (belowBox.style.display === "none") {
        if (belowBox2.style.display !== "none") {
            plus2.innerHTML = oplus;
        }
        belowBox.style.display = "block";
        aboveBox.style.backgroundColor = "rgb(97,151,238)";
        aboveBox.style.color = "white";
        plus.style.filter = 'invert(1)';
        belowBox2.style.display = "none";
        aboveBox2.style.backgroundColor = "rgb(242, 243, 244)";
        aboveBox2.style.color = "black";
        plus2.style.filter = 'invert(0)';
        plus.innerHTML = minus;
    } else {
        belowBox.style.display = "none";
        aboveBox.style.backgroundColor = "rgb(242, 243, 244)";
        aboveBox.style.color = "black";
        plus.style.filter = 'invert(0)';
        plus.innerHTML = oplus;
    }
});

// toggling features of eduaction button2
aboveBox2.addEventListener('click', function () {
    if (belowBox2.style.display === "none") {
        if (belowBox.style.display !== "none") {
            plus.innerHTML = oplus;
        }
        belowBox2.style.display = "block";
        aboveBox2.style.backgroundColor = "rgb(97,151,238)";
        aboveBox2.style.color = "white";
        plus2.style.filter = 'invert(1)';
        belowBox.style.display = "none";
        aboveBox.style.backgroundColor = "rgb(242, 243, 244)";
        aboveBox.style.color = "black";
        plus.style.filter = 'invert(0)';
        plus2.innerHTML = minus2;
    } else {
        belowBox2.style.display = "none";
        aboveBox2.style.backgroundColor = "rgb(242, 243, 244)";
        aboveBox2.style.color = "black";
        plus2.style.filter = 'invert(0)';
        plus2.innerHTML = oplus;
    }
});

// hiding and unhiding left bar using hamburger symbol
const ham = document.getElementById('Ham');
const Left = document.getElementById('left');
const Close = document.getElementById('close')
let isHidden = true;

ham.addEventListener('click', function () {
    if (Left.style.left !== '0') {
        Left.style.left = '0';
        Close.style.display = "block";
    }
    else {
        Left.style.left = '-120%';
        Close.style.display = "none";
    }
})


// hiding left bar using close symbol
Close.addEventListener('click', function () {
    Left.style.left = '-120%';
    Close.style.display = "none";
})

// function to check screen size and adjust left bar
function checkScreenSize() {
    const Left1 = document.getElementById('left');

    // If the screen width is greater than 1200px, don't hide the SVG
    if (window.innerWidth > 1200) {
        Left1.style.left = '0';
        Close.style.display = "none";  //to hide close button when window size is greater than 1200 px
    } else if (window.innerWidth < 1200) {
        Left1.style.left = '-120%';
    }
}

// Run the function when the page loads
window.onload = checkScreenSize;

// Run the function whenever the window is resized
window.onresize = checkScreenSize;

// after clicking change the link's colour.
function changeColor(link) {
    var links = document.querySelectorAll('a');
    links.forEach(function (item) {
        item.classList.remove('clicked');
    });
    link.classList.add('clicked');
}


const features = document.getElementsByClassName('nav-link');
for (let i = 0; i < features.length; i++) {

    features[i].addEventListener('click', function () {
        // Hide the left bar when any feature is clicked
        if (window.innerWidth < 1200) {
            Left.style.display = 'none';
        }
    });
}

ham.addEventListener('click', function () {
    Left.style.display = 'block';  // Show the left bar when the hamburger is clicked
});