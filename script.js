// Available Time Zones
const timeZones = [
    { "name": "Pacific Standard Time", "value": "PST", "utc_offset": "-08:00" },
    { "name": "Mountain Standard Time", "value": "MST", "utc_offset": "-07:00" },
    { "name": "Central Standard Time", "value": "CST", "utc_offset": "-06:00" },
    { "name": "Eastern Standard Time", "value": "EST", "utc_offset": "-05:00" },
    { "name": "Greenwich Mean Time", "value": "GMT", "utc_offset": "+00:00" },
    { "name": "Central European Time", "value": "CET", "utc_offset": "+01:00" },
    { "name": "India Standard Time", "value": "IST", "utc_offset": "+05:30" },
    { "name": "Japan Standard Time", "value": "JST", "utc_offset": "+09:00" },
    { "name": "Australian Eastern Standard Time", "value": "Australia/Sydney", "utc_offset": "+10:00" }
];


// Populate time zone dropdowns
const fromTimeZoneSelect = document.getElementById('from-timezone');
const toTimeZoneSelect = document.getElementById('to-timezone');

// Function to populate the select options for time zones
function populateTimeZones() {
    timeZones.forEach(zone => {
        const optionFrom = document.createElement("option");
        optionFrom.value = zone.value;
        optionFrom.textContent = zone.name;
        fromTimeZoneSelect.appendChild(optionFrom);

        const optionTo = document.createElement("option");
        optionTo.value = zone.value;
        optionTo.textContent = zone.name;
        toTimeZoneSelect.appendChild(optionTo);
    });
}

populateTimeZones();

// Convert time from one time zone to another
document.getElementById('convert-button').addEventListener('click', function () {
    const fromTimeZone = fromTimeZoneSelect.value;
    const toTimeZone = toTimeZoneSelect.value;
    const time = document.getElementById('time').value;

    if (!time || !fromTimeZone || !toTimeZone) {
        alert("Please fill in all fields.");
        return;
    }

    const date = new Date(time); // Create a Date object from the input

    // Format the time in the "from" time zone
    const fromTimeZoneTime = new Date(date.toLocaleString('en-US', { timeZone: fromTimeZone }));

    // Convert to the "to" time zone
    const toTimeZoneTime = new Date(fromTimeZoneTime.toLocaleString('en-US', { timeZone: toTimeZone }));

    // Display the result
    document.getElementById('result-title').textContent = `Converted Time in ${toTimeZone}:`;
    document.getElementById('result').textContent = toTimeZoneTime.toLocaleString();
});
