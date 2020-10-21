var _row = null;

$(function() {
  formClear();
  $("#addBtn").click(productUpdate);
  $("#updateBtn").click(productUpdateInTable);
  $("#resetBtn").click(formClear);
});

function productUpdate() {
  if ($("#name").val() != null && $("#name").val() != '') {
    // Add product to Table
    productAddToTable();

    // Focus to product name field
    $("#name").focus();
  }
}

function productAddToTable() {
  // First check if a <tbody> tag exists, add one if not
  if ($("#pTable tbody").length == 0) {
    $("#pTable").append("<tbody></tbody>");
  }

  // Append product to the table
  $("#pTable tbody").append("<tr>" +
    "<td>" + $("#name").val() + "</td>" +
    "<td>" + $(".sex:checked").val() + "</td>" +
    "<td>" + $("#age").val() + "</td>" +
    "<td>" + $("#city").val() + "</td>" +
    "<td>" +

    "<button type='button' onclick='productDisplay(this)'; class='btn btn-default'>" +
    // Update Button
    "Update" + "</button>" +

    "<span>" + "/" + "</span>" +

    // Remove Button
    "<button type='button' onclick='productDelete(this);' class='btn btn-default'>" +
    "Remove" + "</button>" +
    "</td>" +

    "</tr>");
}

function productBuildTableRow() {
  var ret = "<tr>" +
    "<td>" + $("#name").val() + "</td>" +
    "<td>" + $(".sex:checked").val() + "</td>" +
    "<td>" + $("#age").val() + "</td>" +
    "<td>" + $("#city").val() + "</td>" +

    "<td>" +
    "<button type='button' onclick='productDisplay(this);' class='btn btn-default'>" +
    // Update Button
    "Update" + "</button>" +

    "<span>" + "/" + "</span>" +

    // Remove Button
    "<button type='button' onclick='productDelete(this);' class='btn btn-default'>" +
    "Remove" + "</button>" +
    "</td>" +

    "</tr>"
  return ret;
}

function productDisplay(ctl) {
  _row = $(ctl).parents("tr");
  var cols = _row.children("td");
  $("#name").val($(cols[0]).text());
  $(".sex:checked").val($(cols[1]).text());
  $("#age").val($(cols[2]).text());
  $("#city").val($(cols[3]).text());
  $("#addBtn").attr("disabled", true);
}

function productUpdateInTable() {
  // Add changed product to table
  $(_row).after(productBuildTableRow());

  // Remove old product row
  $(_row).remove();
  $('#addBtn').removeAttr("disabled");
}


function formClear() {
  $("#name").val("");
  $("#age").val("");
  $("#city").val("");
  // $(".sex:checked").val("");
}

function productDelete(ctl) {
  $(ctl).parents("tr").fadeOut();
}
