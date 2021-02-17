$("#nav-students").click(function () {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#students-page").offset().top
    }, 2000);
});

$("#nav-trailer").click(function () {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#trailer-page").offset().top
    }, 2000);
});
$("#nav-parents").click(function () {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#parents-page").offset().top
    }, 2000);
});
$("#nav-mentors").click(function () {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#mentors-page").offset().top
    }, 2000);
});


$(".back-button").click(function () {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("body").offset().top
    }, 2000);
});

//style="display:flex;align-items: center;"

$('.seperating-bar').append(`
<div class="bottom-bar font-light row" style="width:100%;height:100%;">
<div class="col-md-0 col-lg-2"></div>
<div class="col-lg-4 col-md-12" align="center">
    <img src="img/StayINLogoWhite.png" width="50vw" style="position:relative;">
</div>
<div class="col-md-0 col-lg-2"></div>
<div class="col-lg-4 col-md-12 text-center">
    <br>
    <a href="#" class="back-button">Zurück zum Anfang</a>
</div>
</div>`);

$('#student-feature-0').append(
    getFeatureDescription("Nachhilfe über Video-Calls",
        `Deine Nachhilfestunden bekommst Du direkt per Smartphone oder PC als Video-Meeting. So kannst Du von jedem beliebigen Ort teilnehmen, z.B. von zu Hause aus.`,
        "img/Screens/Meeting_new.png")
);

$('#student-feature-1').append(
    getFeatureDescription("Kontrolle über Deine Fächer",
        "Du bestimmst, in welchen Fächern Du gerne Nachhilfe bekommen möchtest. Und wenn Dein Mentor doch nicht zu Dir passt, kannst Du jederzeit einen neuen suchen.",
        "img/Screens/Fächer.png")
);
//
$('#student-feature-2').append(getFeatureDescription("Such’ Dir Deinen Mentor aus",
    ` Bei StayIN findest Du nur sorgfältig ausgewählte Mentoren, die Spaß daran haben, Schülern etwas beizubringen. Du wählst einfach Deinen Mentor aus.`,
    "img/Screens/Matching.png"));

$('#student-feature-3').append(
    getFeatureDescription("Deine Woche im Überblick",
        ` Hier verpasst Du keinen Termin! Auf Deinem Dashboard siehst Du alle Termine und Benachrichtigungen auf einen Blick. Zusätzlich erhältst Du Push-Notifications als Erinnerung. </p>
`,
        "img/Screens/Dashboard.png"));

$('#mentor-feature-0').append(
    getFeatureDescription("Nachhilfe über Video-Calls",
        `Die Nachhilfestunden laufen direkt per Smartphone oder PC über Video-Calls. So kannst Du von jedem beliebigen Ort teilnehmen, z.B. von zu Hause aus. Persönlich und remote zugleich.`,
        "img/Screens/Meeting_new.png")
);
$('#mentor-feature-1').append(
    getFeatureDescription("Alle Termine im Blick",
        `Auf Deinem Home-Screen findest Du alle Termine und Benachrichtigungen. Zusätzlich erhältst Du Push-Notifications zur Erinnerung an Deine Termine.`,
        "img/Screens/DashboardMentor.png")
);
$('#mentor-feature-2').append(
    getFeatureDescription("Mehrere Schüler? Gerne!",
        `Du entscheidest, wie viele Schüler Du insgesamt unterrichten möchtest. Alle Nachhilfestunden sind Einzeltermine. Ein Überblick über Deine Schüler hilft Dir, Deine Woche zu planen.`,
        "img/Screens/Schüler.png")
);

$('#mentor-feature-3').append(
    getFeatureDescription("Account erstellen",
        `Um bei uns Mentor zu werden, bewirb Dich einfach über die App. Wir kommen dann auf Dich zu und erstellen einen Account für Dich.

        Wir freuen uns auf Dich!`,
        "img/Screens/Start.png")
);


$('#parent-feature-0').append(
    getFeatureDescription("Nachhilfe über Video-Calls",
        `Dein Kind erhält Nachhilfe über sein Smartphone oder PC per Video-Call.

        Sicherheit ist uns wichtig! Du hast immer die Möglichkeit, den Video-Calls Deines Kindes als passiver Beobachter beizutreten.`,
        "img/Screens/DashboardMentor.png")
);
$('#parent-feature-1').append(
    getFeatureDescription("Ausgewählte Mentoren",
        `Bei StayIN findest Du nur sorgfältig ausgewählte Mentoren, die Spaß daran haben, Schülern etwas beizubringen. Dein Kind entscheidet, bei wem es Nachhilfe erhalten möchte.`,
        "img/Screens/Matching.png")
);

$('#parent-feature-2').append(
    getFeatureDescription("Account erstellen",
        `Um für Dein Kind und Dich einen Account zu erhalten, kontaktiere uns einfach unter

        000 - 123 456 78
       
       
       
       Wir freuen uns auf Dich!`,
        "img/Screens/Start.png")
);

function getFeatureDescription(title, text, imgSrc) {
    return `
    <div class="row">
    <div class="col-md-1 col-sm-0"></div>
    <div class="feature-description col-md-5 col-sm-12 ">
        <p class="bold-text font-20" style="letter-spacing:1px;">${title}
        </p>
        <p class="font-18 d-none d-md-block">
        ${text}
        </p>
    </div>
    <div class="col-md-3 col-sm-12" style="text-align:center;">
        <img src="${imgSrc}" style="height: 45vh;position: relative;top:7vh;">
    </div>
    <div class="col-md-1 col-sm-0"></div>
</div>
    `;
}

// function getBackgroundTitle(title) {
//     return `
//     <div class="col-lg-4 col-md-0">
//                 <div class="caption d-none d-lg-block">
//                     <span class="border">$title</span>
//                 </div>
//             </div>
//     `;
// }