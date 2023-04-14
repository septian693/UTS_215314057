function generate_input_field() {
    var output = document.getElementById("output");
    output.classList.add("container","border","text-white","mt-4","p-3","border-light","rounded");
    var much_field = parseInt(document.getElementById("jumlahHobi").value);
    var namaDepan_field = document.getElementById("namaDepan").value;
    var namaBelakang_field = document.getElementById("namaBelakang").value;
    var email = document.getElementById("email").value;
    var inputValues = []; // tambahkan array untuk menyimpan inputan
    document.getElementById("submitBtn").disabled = true;
    document.getElementById("namaDepan").disabled = true;
    document.getElementById("namaBelakang").disabled = true;
    document.getElementById("jumlahHobi").disabled = true;
    document.getElementById("email").disabled = true;
    for (var i = 0; i < much_field; i++) {
        var row = document.createElement("div");
        row.classList.add("row", "mb-2");
        var col1 = document.createElement("div");
        col1.classList.add("col-2");
        var col2 = document.createElement("div");
        col2.classList.add("col");
        var textLabel = document.createElement("label");
        textLabel.innerHTML = "Pilihan Hobi Ke - " + (i + 1) + " : ";
        var textField = document.createElement("input");
        textField.type = "text";
        textField.placeholder = "Masukan Data";
        textField.classList.add("form-control", "form-control-sm");
        //Append
        col1.appendChild(textLabel);
        col2.appendChild(textField);

        row.appendChild(col1);
        row.appendChild(col2);

        output.appendChild(row);
        inputValues.push(textField); // tambahkan setiap input ke dalam array
    }
    var makeNewButtonOk = document.createElement("button");
    makeNewButtonOk.innerHTML = "Oke";
    makeNewButtonOk.classList.add("btn", "btn-success", "border", "border-white");
    makeNewButtonOk.type = "submit";
    makeNewButtonOk.onclick = function () {
        buttonNewOkFunction(inputValues, namaDepan_field, namaBelakang_field, email); // panggil sf dengan array input sebagai argumen
    };
    output.appendChild(makeNewButtonOk);
}

function buttonNewOkFunction(inputValues, namaDepan, namaBelakang, email) {

    event.preventDefault();
    var output = document.getElementById("output");
    output.innerHTML = "";
    var labelnew = document.createElement("label");
    labelnew.innerHTML = "Pilih Hobi : ";

    var numFields = inputValues.length;
    var checkboxFieldset = document.createElement("fieldset");
    checkboxFieldset.id = "checkboxes";
    for (var i = 0; i < numFields; i++) {
        var checkboxDiv = document.createElement("div");
        checkboxDiv.classList.add("form-check");

        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("form-check-input");
        checkbox.value = "";
        checkbox.id = "checkbox" + (i + 1);

        var label = document.createElement("label");
        label.classList.add("form-check-label");
        label.setAttribute("for", "checkbox" + (i + 1));
        label.innerHTML = inputValues[i].value;

        checkboxDiv.appendChild(checkbox);
        checkboxDiv.appendChild(label);

        checkboxFieldset.appendChild(checkboxDiv);
    }
    output.appendChild(labelnew);
    output.appendChild(checkboxFieldset);

    var makeNewButtonOk = document.createElement("button");
    makeNewButtonOk.innerHTML = "Oke";
    makeNewButtonOk.classList.add("btn", "btn-success", "border", "border-white");
    makeNewButtonOk.type = "submit";
    makeNewButtonOk.onclick = function () {
        showResult(inputValues, namaDepan, namaBelakang, email);
    };
    output.appendChild(makeNewButtonOk);
}

function showResult(inputValues, namaDepan, namaBelakang, email) {
    var checkedItems = [];
    var values = [];
    var checkboxes = document.querySelectorAll("#checkboxes input[type=checkbox]");
    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            checkedItems.push(checkbox.nextElementSibling.textContent);
        }
    });
    for (var i = 0; i < inputValues.length; i++) {
        values.push(inputValues[i].value);
    }
    var output = document.getElementById("output");
    output.innerHTML = "Hallo, nama saya " + namaDepan + " " + namaBelakang + ", dengan email " + email + ", saya mempunyai sejumlah " + inputValues.length + " pilihan hobi yaitu " + values.join(", ") + " dan saya menyukai " + checkedItems.join(", ");
}