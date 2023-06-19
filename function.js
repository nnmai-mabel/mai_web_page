/* I got the idea from this link, and I have modified the image, id, and content according to what I need
https://www.geeksforgeeks.org/how-to-change-the-text-and-image-by-just-clicking-a-button-in-javascript/ */
function changeAvatar() {
    image2 = document.getElementById('avatar').src = "image/atunisaflag.jpg";
    document.getElementById('avatartaken').innerHTML = "Photo taken by Mai Huyen Linh Le";
}
function changeSunset() {
    document.getElementById('sunsetquote').innerHTML = "Sunset taken by Ngoc Mai Nguyen";
    image2 = document.getElementById('sunset').src = "image/sunset2.jpg";    
}
function changeJetty() {
    document.getElementById('jettyquote').innerHTML = "Lego Jetty taken by Ngoc Mai Nguyen";
    image2 = document.getElementById('jetty').src = "image/jettylego.jpg";  
}
function changeSoh() {
    document.getElementById('sohquote').innerHTML = "Sydney Opera House taken by Ngoc Mai Nguyen";
    image2 = document.getElementById('soh').src = "image/soh.jpg";  
}
function changeHellophoto() {
    document.getElementById('helloquote').innerHTML = "Me taken by Yunmei Ye";
    image2 = document.getElementById('hellophoto').src = "image/coverphoto.jpg";  
}
/* Add function to toggle between light and dark theme, I got the idea from the link below, and modified it by adding
if statement to check for the current theme
https://jsfiddle.net/tomik23/vk61pjdq/ */
function darkMode() {
    const container = document.getElementById('webPage');

    var dataTheme = container.getAttribute('data-theme');
    localStorage.setItem("theme", dataTheme);

    if (localStorage.theme === 'dark') {
        container.setAttribute('data-theme', 'light');
        localStorage.setItem("theme", 'light');
    }
    else {
        container.setAttribute('data-theme', 'dark');
        localStorage.setItem("theme", 'dark');
    }
}
/* Get username from URL, I have read the articles below, which are also suggested in the assignment 3 specification
I have added if statement to check for the username 
https://www.sitepoint.com/get-url-parameters-with-javascript/
https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage */
function userName() {
    const queryString = window.location.search;

    const urlParams = new URLSearchParams(queryString);
    const new_user = urlParams.get('user_name')
    /* Check if there is any current username in local storage */
    if (new_user === null) {
        if (localStorage.getItem("user_name")) {
            let name = localStorage.getItem("user_name");
            let output = "Hello, " + name;
            let element = document.getElementById("user");
            element.innerHTML = output;
        } else {
            let output = "Hello World!";
            let element = document.getElementById("user");
            element.innerHTML = output;
        }
    } else {
        let output = "Hello, " + new_user;
        let element = document.getElementById("user")
        element.innerHTML = output;
        localStorage.setItem("user_name", new_user);
    }
}
/* Check the current theme in the local storage */
function checkTheme() {
    const container = document.getElementById('webPage');

    if (localStorage.getItem("theme")) {
        var dataTheme = localStorage.getItem("theme");
        container.setAttribute('data-theme', dataTheme);
    }
}
/* I learned from the link below and adjusted to get what I need for this web page
https://www.w3schools.com/jsref/event_onload.asp */
window.onload = function () {
    userName();
    checkTheme();
}
/* I got the way to have tabs on my web page from the link below
 https://www.w3schools.com/howto/howto_js_full_page_tabs.asp */
function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default 
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    
    tablinks = document.getElementsByClassName("tablinkHome");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();