// Print
function printPage() {
  var printWindow = window.open("", "_blank");
  printWindow.document.write("<html><head><title>فرم پرینت</title><style>");
  printWindow.document.write(
    "@page {margin: 0;padding: 0;} body { font-family: IRANYEKAN;padding:0mm;margin:0;width: 210mm;margin: 0 auto !important; text-align: right;direction:rtl} .inner{padding:8mm;text-align: right}"
  );
  printWindow.document.write(
    "h6{font-size:13px;font-weight: 800;text-align:justify;color:'#000';line-height: normal;display: inline-block;margin:0}",
    "p { font-size:13px;font-weight: 400;text-align:justify;color:'#111';line-height: normal;display: inline-block;margin:1.5mm 0}"
  );
  printWindow.document.write("</style></head><body>");

  printWindow.document.write(
    '<img src="images/print-header.jpg" style="display: block; margin: 0 auto;width:100%">'
  );

  printWindow.document.write("<div class='inner'>");
  // اینپوت‌ها
  var inputs = document.querySelectorAll(".inputgroup input.input");
  inputs.forEach(function (input) {
    var label = input.parentElement.querySelector(".input-label").innerText;
    var value = input.value;
    printWindow.document.write(
      "<h6>- " + label + ": " + "</h6>" + " <p>" + value + "</p>" + "</br>"
    );
  });

  // چک باکس‌های فعال در کمیته ایرانی
  var checkboxLabels = document.querySelectorAll(
    ".inputgroup .form-check-label"
  );
  var checkboxTitle = document.querySelector(".check-label").innerText;
  printWindow.document.write("<h6>- " + checkboxTitle + "</h6>" + "</br>");
  checkboxLabels.forEach(function (label) {
    var checkbox = label.parentElement.querySelector(".form-check-input");
    if (checkbox.checked) {
      var labelText = label.innerText;
      printWindow.document.write(
        "<h6>" + labelText + ": " + "</h6>" + " <p> فعال </p>" + "</br>"
      );
    }
  });

  var textInline = document.querySelector(".text-inline");
  var textLabel = textInline.querySelector(".input-label").innerText;
  var textValue = textInline.querySelector(".input").value;
  var textParagraph = textInline.querySelector("p").innerText;
  printWindow.document.write(
    "<p>" +
      textLabel +
      " " +
      "<h6 style='margin:0 10px'>" +
      textValue +
      "</h6>" +
      " " +
      textParagraph +
      "</p>"
  );
  printWindow.document.write(
    "<div style='margin-top:3mm;font-size:13px;font-weight: 800;'>تاریخ : </div>"
  );
  printWindow.document.write(
    "<div style='margin-top:2mm;text-align:left;font-size:13px;font-weight: 800;'>مدير عامل/دبیرکل/رئیس</br>امضا و مهر</div>"
  );
  printWindow.document.write("</div>");
  printWindow.document.write(
    '<img src="images/print-footer.jpg" style="display: block; margin: 0 auto;width:100%">'
  );
  printWindow.document.write("</body></html>");
  printWindow.document.close();
  printWindow.print();
}

// Listen for Ctrl + P key combination
window.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key === "p") {
    event.preventDefault();
    printPage();
  }
});
