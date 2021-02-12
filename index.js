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


$('.seperating-bar').append(`
<div class="bottom-bar font-light row" style="width: 100%;height: 100%;">
    <div class="col-sm-5"></div>
    <div class="col-sm-2">
        <img src="img/StayINLogoWhite.png"  class="center-image" width="70vw">
    </div>
    <div class="col-sm-2"></div>
    <div class="col-sm-3">
        <a  href="#" style="color:white;"   class="back-button">Zurück zum Anfang</a>
    </div>
</div >`);

$('#student-feature-0').append(
    getFeatureDescription("Nachhilfe über Video-Calls",
        `Deine Nachhilfestunden bekommst Du direkt per Smartphone oder PC als Video-Meeting. So kannst Du von jedem beliebigen Ort teilnehmen, z.B. von zu Hause aus.`,
        "img/Screens/Fächer.png")
);

$('#student-feature-1').append(
    getFeatureDescription("Kontrolle über Deine Fächer",
        "Du bestimmst, in welchen Fächern Du gerne Nachhilfe bekommen möchtest. Und wenn Dein Mentor doch nicht zu Dir passt, kannst Du jederzeit einen neuen suchen.",
        "img/Screens/Fächer.png")
);
//
$('#student-feature-2').append(getFeatureDescription("Such’ Dir Deinen Mentor aus",
    ` Bei StayIN findest Du nur sorgfältig ausgewählte Mentoren, die Spaß daran haben,
Schülern etwas beizubringen. Du wählst einfach Deinen Mentor aus.
`,
    "img/Screens/Matching.png"));

$('#student-feature-3').append(
    getFeatureDescription("Deine Woche im Überblick",
        ` Hier verpasst Du keinen Termin! Auf Deinem Dashboard siehst Du alle Termine und
Benachrichtigungen auf einen Blick.
Zusätzlich erhältst Du Push-Notifications als Erinnerung. </p>
`,
        "img/Screens/Dashboard.png"));

$('#mentor-feature-0').append(
    getFeatureDescription("Nachhilfe über Video-Calls",
        `Die Nachhilfestunden laufen direkt per Smartphone oder PC über Video-Calls. So kannst Du von jedem beliebigen Ort teilnehmen, z.B. von zu Hause aus. Persönlich und remote zugleich.`, 
        "img/Screens/Fächer.png")
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
    <div class="col-sm-1"></div>
    <div class="feature-description col-sm-5 ">
        <p class="bold-text font-20">${title}
        </p>
        <p class="font-18 d-none d-md-block">
        ${text}
        </p>
    </div>
    <div class="col-sm-4" style="position: relative; text-align: center;">
        <img src="${imgSrc}" style="margin: auto;height: 50vh;position: absolute;top: 20%;">
    </div>
</div>
    `;
}