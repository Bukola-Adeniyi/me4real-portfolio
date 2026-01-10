
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents= document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab");
}

// Mobile menu
    var sidemenu = document.getElementById("sidemenu");

    function openmenu() {
        sidemenu.style.right = "0";
    }

    function closemenu() {
        sidemenu.style.right = "-200px";
    }


document.addEventListener("DOMContentLoaded", function() {
    const scriptURL = 'https://docs.google.com/spreadsheets/d/1ht0DWzcoDhP3lh0b7NFF1xGCGnJmwqpJ_SWlMCXGy3E/edit?usp=sharing';
    const form = document.forms['submit-to-google-sheet'];
    const msg = document.getElementById("msg");

    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(() => {
                    msg.innerHTML = "Message sent successfully ✔";
                    msg.style.color = "#00ff88";
                    setTimeout(() => msg.innerHTML = "", 5000);
                    form.reset();
                })
                .catch(error => {
                    console.error('Error!', error.message);
                    msg.innerHTML = "Something went wrong. Please try again.";
                    msg.style.color = "red";
                });
        });
    }
});