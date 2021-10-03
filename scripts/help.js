$(function() {
    // show the initial dialog
    $( "#dialog" ).dialog();
});

function LogInMain() {
    showHeader("login");
    document.getElementById("subhead").innerHTML = "Log In Panel";
    document.getElementById("subtext").innerHTML = "You can log in using this panel." +
        " You can also reset your password if you forgot it If you are not a registered user, " + 
        "then you can also reset your password. People new to the platform can also create a new account.";
}
function LogInVideo() {
    showHeader("login");
    document.getElementById("subhead").innerHTML = "Embedded Youtube Video";
    document.getElementById("subtext").innerHTML = "This is the section where a YouTube video is embedded." +
        " You can play, pause, skip and seek the video. You can also change the audio volume and video quality." + 
        " YouTube also lets us turn on captions for videos if they are available and watch in fullscreen mode as well.";
}
function MainTabs() {
    showHeader("main");
    document.getElementById("subhead").innerHTML = "Notification Tabs";
    document.getElementById("subtext").innerHTML = "This is the section where important notices and alerts will pop up," +
        " such as quiz announcements and registration forms etc. You can click the tab to follow the link to its destination.";
}
function MainGroups() {
    showHeader("main");
    document.getElementById("subhead").innerHTML = "Group Tiles View";
    document.getElementById("subtext").innerHTML = "This is the section where all your groups show up as tiles." +
        " There is also a search bar at the top which can help you navigate through your groups. You can click any" +
        " of the group tiles to display its detailed information and join the group.";
}
function MainDetails() {
    showHeader("main");
    document.getElementById("subhead").innerHTML = "Groups Details";
    document.getElementById("subtext").innerHTML = "This section shows all the group details of the current selection." +
        " At the top you can see the title, the middle section shows detailed information about group theme, group members," +
        " instructors and so on, depending on type of group. At the bottom there is an animated join group button.";
}
function error() {
    showHeader("error");
    document.getElementById("subhead").innerHTML = "Error Button";
    document.getElementById("subtext").innerHTML = "This page will show up when you cause the application to malfunction or," +
        " try to access some functionality that has not been developed yet. There is a button in the middle that takee you back" +
        " to the page from where you were redirected to this error page.";
}
function AboutMain() {
    showHeader("about");
    document.getElementById("subhead").innerHTML = "About Us";
    document.getElementById("subtext").innerHTML = "This section tells you more about the Educordis team and our vision." +
    " You can take a quick look at who we are and how we want to impact the world with our technology.";
}
function AboutContact() {
    showHeader("about");
    document.getElementById("subhead").innerHTML = "Contact Us";
    document.getElementById("subtext").innerHTML = "You can use the contact details provided here to contact us with your queries.";
}
function AboutSocial() {
    showHeader("about");
    document.getElementById("subhead").innerHTML = "Socials";
    document.getElementById("subtext").innerHTML = "You can also follow us on our socials to stay up to date on the latest trends in " +
    " education empowerment and updates on our services and products, including educordis.";
}

function showHeader(page) {
    var head, text;
    switch (page) {
        case "login":
            head = "Log In";
            text = "The log in page has the following key areas:\n" + 
                "\n\t\t=> Log In Panel\n" +
                "\n\t\t=> Embedded Youtube Video";
            break;
        case "main":
            head = "Main Page";
            text = "The main page has the following key areas:\n" + 
                "\n\t\t=> Notification Tabs (left)\n" + 
                "\n\t\t=> Group Tiles View (middle)\n" + 
                "\n\t\t=> Groups Details (right)";
            break;
        case "about":
            head = "About Us Page";
            text = "The about us page has the following key areas:\n" + 
                "\n\t\t=> About Us\n" + 
                "\n\t\t=> Contact Us\n" + 
                "\n\t\t=> Socials";
            break;
        case "error":
            head = "Error Page";
            text = "The main page has the following key area:\n" + 
                "\n\t\t=> Error button";
            break;
        default:
            alert("wrong function parameters used for: showHeader()")
            break;
    }
    document.getElementById("head").innerHTML = head;
    document.getElementById("text").innerHTML = text;
}