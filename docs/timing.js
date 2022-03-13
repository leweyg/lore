
var _sDaysInformation = [
    { name:"Sunday", planet:"Sun", index:0, desc:"experiments regarding temporal wealth, hope, gain, fortune, divination, the favour of princes, to dissolve hostile feeling, and to make friends." },
    { name:"Monday", planet:"Moon", index:1, desc:"embassies, voyages, envoys, messages, navigation; reconciliation, love, and the acquisition of merchandise by water; in the hours of the Moon: making trial of experiments relating to recovery of stolen property, for obtaining nocturnal visions, for summoning Spirits in sleep, and for preparing anything relating to Water." },
    { name:"Tuesday", planet:"Mars", index:2, desc:"experiments regarding War, to arrive at military honour, acquire courage, overthrow enemies, etc. in the hours of Mars: summoning Souls, especially of those slain in battle" },
    { name:"Wednesday", planet:"Mercury", index:3, desc:"eloquence and intelligence, promptitude in business, science and divination, etc.; in the Hours of Mercury: undertaking experiments relating to games, raillery jests, sports, etc." },
    { name:"Thursday", planet:"Jupiter", index:4, desc:"obtaining honours, acquiring riches, contracting friendships, preserving health" },
    { name:"Friday", planet:"Venus", index:5, desc:"forming friendships, for kindness and love, joyous and pleasant undertakings, travelling; in the hours of Venus: lots, poisons, preparing powders provocative of madness, etc." },
    { name:"Saturday", planet:"Saturn", index:6, desc:"the summoning of Souls, but only of those who have died a natural death" }
];

var _sMainTime = new Date();

function planetInfoByIndex(n) {
    n = Math.floor(n);
    while (n < 0) {
        n += _sDaysInformation.length;
    }
    n = n % _sDaysInformation.length;
    var item = _sDaysInformation[n];
    return item;
}

function hoursPastSunRise(d) {
    var dayMins = (d.getHours() * 60) + d.getMinutes();
    var dawnMins = (6 * 60) + 49; // 6:49 AM, TODO: make this dynamic
    var deltaMins = (dayMins - dawnMins);
    if (deltaMins < 0) {
        deltaMins += (24 * 60);
    }
    var deltaHours = (deltaMins / 60);
    return deltaHours;
}

function dayOfTheWeek(d) {
    var n = d.getDay();
    var name = _sDaysOfTheWeek[n];
    return name;
}

function titleLocalTime() {
    var d = _sMainTime;
    var datestring = d.getDate() + "d " + (d.getMonth()+1) + "m " + d.getFullYear();
    datestring += "<br/>" + planetInfoByIndex(d.getDay()).name;
    datestring += "<br/>" + d.getHours() + ":" + ("0" + d.getMinutes()).slice(-2);
    datestring += "<br/>" + hoursPastSunRise(d).toFixed(1) + "h past sunrise";
    return datestring;
}

function timingDetails() {
    var items = [];
    var d = _sMainTime;

    var dayInfo = planetInfoByIndex(d.getDay());
    items.push({
        title : "Day",
        icon : "calendar",
        subtitle : dayInfo.planet,
        desc : dayInfo.desc,
    });

    var pastSunrise = hoursPastSunRise(d);
    var curHour = planetInfoByIndex(pastSunrise + d.getDay());
    items.push({
        title : "Hour",
        icon : "hourglass-start",
        subtitle : curHour.planet,
        desc : curHour.desc,
    });
    var nextHour = planetInfoByIndex(pastSunrise + 1.0 + d.getDay());
    items.push({
        title : "Next Hour",
        icon : "hourglass-end",
        subtitle : nextHour.planet,
        desc : nextHour.desc,
    });
    return items;
}

