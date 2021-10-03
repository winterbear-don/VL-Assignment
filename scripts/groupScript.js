$(function() {
    // SCRIPTS FOR INFOPANE
    // General function to Animate Button
    function AnimateButton(button) {
        button.attr({"class":"tag groupButton"});
        button.css({"margin-right":"30%","border-radius":"0px 30px 30px 0px"});
        button.animate({
            "margin-right": "20px",
            "border-top-right-radius": "10px",
            "border-bottom-right-radius": "10px"
        }, 500);
        button.html("Join Group >>>");
    }
    // General function to Animate title
    function AnimateTitle(title, color) {
        title.attr({"class":"tag groupTitle"});
        title.animate({"background-color": color}, 500);
    }
    // When svvproject is clicked
    $("#svvproject").click(function() {
        var title = $("#groupTitle");
        var details = $("#groupDetails");
        AnimateTitle(title, $(this).css("background-color"));
        details.attr({"class":"tag tagNotice groupDetails"});
        title.html("SVV Project");
        details.html("Instructor:<br>Ali Javed<br><br>Project title:<br>Vericordis<br><br>Project Members:<br>Talha Salman<br>Kainat Gul<br>Muntaha Rashid");
        AnimateButton($("#groupButton"));
    });
    // When weproject is clicked
    $("#weproject").click(function() {
        var title = $("#groupTitle");
        var details = $("#groupDetails");
        AnimateTitle(title, $(this).css("background-color"));
        details.attr({"class":"tag tagNotice groupDetails"});
        title.html("WE Project");
        details.html("Instructor:<br>Mubashir Ayub<br><br>Project title:<br>Educordis<br><br>Project Members:<br>Talha Salman<br>Kainat Gul<br>Muntaha Rashid");
        AnimateButton($("#groupButton"));
    });
    // When ooseass is clicked
    $("#ooseass").click(function() {
        var title = $("#groupTitle");
        var details = $("#groupDetails");
        AnimateTitle(title, $(this).css("background-color"));
        details.attr({"class":"tag tagNotice groupDetails"});
        title.html("OOSE Assignment");
        details.html("Instructor:<br>Arta Iftikhar<br><br>Assignment title:<br>UML Diagrams<br><br>Assignment Group Members:<br>Muhammad Ali<br>Saad Qatari<br>Ali Ahmed");   
        AnimateButton($("#groupButton"));
    });
    // When gdd is clicked
    $("#gdd").click(function() {
        var title = $("#groupTitle");
        var details = $("#groupDetails");
        AnimateTitle(title, $(this).css("background-color"));
        details.attr({"class":"tag tagNotice groupDetails"});
        title.html("Game Dev Diary");
        details.html("Author:<br>Talha Salman<br><br>Group Focus:<br>Game Dev Progress<br><br>Group Members:<br>Aziz Rehman<br>Fahd Shahab<br>3 more...");   
        AnimateButton($("#groupButton"));
    });
    // When edcrddsgn is clicked
    $("#edcrddsgn").click(function() {
        var title = $("#groupTitle");
        var details = $("#groupDetails");
        AnimateTitle(title, $(this).css("background-color"));
        details.attr({"class":"tag tagNotice groupDetails"});
        title.html("Educordis Design");
        details.html("Author:<br>Kainat Gul<br><br>Group Focus:<br>Adobe XD UI/UX Design<br><br>Group Members:<br>Talha Salman<br>Kainat Gul<br>Muntaha Rashid");   
        AnimateButton($("#groupButton"));
    });
    // When rsc is clicked
    $("#rsc").click(function() {
        var title = $("#groupTitle");
        var details = $("#groupDetails");
        AnimateTitle(title, $(this).css("background-color"));
        details.attr({"class":"tag tagNotice groupDetails"});
        title.html("2K18 Resources");
        details.html("Administrator:<br>Dr. Tabassam Nawaz<br><br>Group Features:<br>Important links and Resources<br><br>Group Members:<br>Theeta 1<br>Theeta 2<br>98 more theetas...");   
        AnimateButton($("#groupButton"));
    });
    // When unity is clicked
    $("#unity").click(function() {
        var title = $("#groupTitle");
        var details = $("#groupDetails");
        AnimateTitle(title, $(this).css("background-color"));
        details.attr({"class":"tag tagNotice groupDetails"});
        title.html("Unity Animation");
        details.html("Author:<br>Zain Ahsan<br><br>Group Focus:<br>Fluid Animations in Unity3D<br><br>Group Members:<br>Fasih Mubashir<br>Zainab Iftikhar<br>Luqman Rizvi");   
        AnimateButton($("#groupButton"));
    });
    // When brhelp is clicked
    $("#brhelp").click(function() {
        var title = $("#groupTitle");
        var details = $("#groupDetails");
        AnimateTitle(title, $(this).css("background-color"));
        details.attr({"class":"tag tagNotice groupDetails"});
        title.html("Coding Help");
        details.html("Author:<br>Muhammad Dawood<br><br>Group Focus:<br>Helping Freshies to get started<br><br>Group Members:<br>Junior 1<br>Junior 2<br>Senior who failed twice");   
        AnimateButton($("#groupButton"));
    });
    // When gdsgn is clicked
    $("#gdsgn").click(function() {
        var title = $("#groupTitle");
        var details = $("#groupDetails");
        AnimateTitle(title, $(this).css("background-color"));
        details.attr({"class":"tag tagNotice groupDetails"});
        title.html("Graphics and Logos");
        details.html("Author:<br>Aisha Kasuri<br><br>Group Focus:<br>Graphics Freelance Work<br><br>Group Members:<br>Amjad Hussain<br>Zameer Akhtar Nepali<br>Ahmed Imran Hashmi");   
        AnimateButton($("#groupButton"));
    });
    // -----------------------------------------------------------------

});

// dummy button alert for non-working features
function DummyButton() {
    window.open("error.html", "_self")
}