


//---------------------------------------------------------------------------
// UFO [Query 1] Calls

// Function to populate UFO state dropdown menu
$(function () {
    $.ajax({
        type: "GET",
        url: 'api/nso/state',
        data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            $.each(r, function (key, state) {
                $('#ufoState').append($('<option></option>').val(state.$id).html(state.State));
            });
        }
    });
});

// Button Click
function GetUFOs() {
    var select = document.querySelector("#ufoState");
    var id = select.options[select.selectedIndex].text;
    console.log(id);

    $(function () {
        $.ajax({
            type: "GET",
            url: 'api/nso/GetUFOsByState?id=' + id,
            data: '{}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (ufo) {
                console.log(ufo)
                UFOSuccess(ufo);
            }
        });
    });
}

function UFOSuccess(ufo) {
    // Iterate over the collection of data
    $.each(ufo, function (index, ufo) {
        // Add a row to the Order Detail table
        UFOTable(ufo);
        console.log(ufo);
    });
}

function UFOTable(ufo) {
    // Check if <tbody> tag exists, add one if not
    if ($("#ufoTable tbody").length == 0) {
        $("#ufoTable").append("<tbody></tbody>");
        console.log(ufo);
    }
    // Append row to <table>
    $("#ufoTable tbody").append(
        UFOTableRow(ufo));
}

function UFOTableRow(ufo) {
    var row =
        "<tr>" +
        "<td>" + ufo.Year + "</td>" +
        "<td>" + ufo.City + "</td>" +
        "<td>" + ufo.Shape + "</td>" +
        "<td>" + ufo.Duration + "</td>"
    "</td>"
    "</tr>";
    return row;
}


//---------------------------------------------------------------------------
// Meteorite [Query 2] Calls

// Function to populate Meteorite classification dropdown menu
$(function () {
    $.ajax({
        type: "GET",
        url: 'api/nso/classification',
        data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            $.each(r, function (key, meteorite) {
                $('#metClassification').append($('<option></option>').val(meteorite.$id).html(meteorite.Classification));
            });
        }
    });
});

function GetMeteorites() {
    var select = document.querySelector("#metClassification");
    var classification = select.options[select.selectedIndex].text;
    console.log(classification);

    $(function () {
        $.ajax({
            type: "GET",
            url: 'api/nso/meteoriteclassification?id=' + classification,
            data: '{}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (met) {
                console.log(met)
                MetSuccess(met);
            }
        });
    });
}

function MetSuccess(met) {
    // Iterate over the collection of data
    $.each(met, function (index, met) {
        // Add a row to the Order Detail table
        MetTable(met);
        console.log(met);
    });
}

function MetTable(met) {
    // Check if <tbody> tag exists, add one if not
    if ($("#metTable tbody").length == 0) {
        $("#metTable").append("<tbody></tbody>");
        console.log(met);
    }
    // Append row to <table>
    $("#metTable tbody").append(
        metTableRow(met));
}

function metTableRow(met) {
    var row =
        "<tr>" +
        "<td>" + met.Name + "</td>" +
        "<td>" + met.Year + "</td>" +
        "<td>" + met.Fall + "</td>" +
        "<td>" + met.Mass + "</td>"
    "</td>"
    "</tr>";
    return row;
}

//---------------------------------------------------------------------------
// Year [Query 3] Calls

// Function to popoulate Year dropdown menu
$(function () {
    $.ajax({
        type: "GET",
        url: 'api/nso/year',
        data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            $.each(r, function (key, year) {
                $('#yearSelect').append($('<option></option>').val(year.$id).html(year.Year1));
            });
        }
    });
});

function GetYearComparison() {

    var select = document.querySelector("#yearSelect");
    var id = select.options[select.selectedIndex].text;
    console.log(id);

    $(function () {
        $.ajax({
            type: "GET",
            url: 'api/nso/year?id=' + id,
            data: '{}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (year) {
                console.log(year)
            }
        });
    });
}
