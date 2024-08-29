function toadd(value) {
    document.getElementById('display').value += value;
}

function todelete() {
    document.getElementById('display').value = '';
}

function delete1() {
    let currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
}

function result() {
    let result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
}
