const URL_BASE = "http://localhost:3001";

window.onload = function () {
    readAll();
}

function callAPI(url, method, callback, data) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open(method, url, true);
    if (method == 'POST' || method == 'PATCH' || method == 'PUT') {
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    }
    xhr.onload = function () {
        callback(xhr.status, xhr.response);
    }
    if (data) {
        xhr.send(JSON.stringify(data));
    } else {
        xhr.send();
    }
}

function readAll() {
    const url = URL_BASE + "/teacher";
    callAPI(url, 'GET', function (status, response) {
        if (status === 200) {
            var content = document.getElementById('content');
            content.innerHTML = "";
            for (var i = 0; i < response.length; i++) {
                var str = createCard(response[i]);
                content.innerHTML += str;
            }

        } else {
            alert("Erro ao contatar o servidor. Tente novamente mais tarde!");
        }
    });
}

function insertTeacher() {
    event.preventDefault();
    var teacher = {
        name: document.getElementById('name').value,
        tia: document.getElementById('tia').value,
        course: document.getElementById('course').value,
        img: document.getElementById('img').value
    }

    const url = URL_BASE + "/teacher";

    callAPI(url, "POST", function (status, response) {
        if (status === 200 || status === 201) {
            readAll();
            clear();
        } else {
            alert("ERRO: " + status);
        }
    }, teacher);
}

function deleteTeacher(tia) {
    const resp = confirm('Deseja realmente apagar o professor com tia ' + tia + '?');
    if (resp) {
        const url = URL_BASE + "/teacher/" + tia;
        callAPI(url, "DELETE", function () {
            readAll();
        });
    }
}

function findTeacher(tia) {
    const url = URL_BASE + "/teacher/" + tia;
    callAPI(url, "GET", function (status, response) {
        if (status === 200 || status === 201) {
            document.getElementById('name').value = response.name;
            document.getElementById('tia').value = response.tia;
            document.getElementById('course').value = response.course;
            document.getElementById('img').value = response.img;
            document.getElementById('button').innerHTML = "Atualizar";
            document.getElementById('button').onclick = updateTeacher;
        } else {
            alert("ERRO: " + status);
        }
    });
}

function updateTeacher() {
    event.preventDefault();
    var teacher = {
        name: document.getElementById('name').value,
        tia: document.getElementById('tia').value,
        course: document.getElementById('course').value,
        img: document.getElementById('img').value
    }

    const url = URL_BASE + "/teacher";

    callAPI(url, "PATCH", function (status, response) {
        if (status === 200 || status === 201) {
            readAll();

            clear();

            document.getElementById('button').innerHTML = "Inserir";
            document.getElementById('button').onclick = insertTeacher;

        } else {
            alert("ERRO: " + status);
        }
    }, teacher);
}

function clear() {
    document.getElementById('name').value = "";
    document.getElementById('tia').value = "";
    document.getElementById('course').value = "";
    document.getElementById('img').value = "";
}

function createCard(teacher) {
    var str = "<article>";
    str += "<p><img src='" + teacher.img + "' class='perfil'></p>";
    str += "<h1>" + teacher.name + "</h1>";
    str += "<p>" + teacher.tia + "</p>";
    str += "<p>" + teacher.course + "</p>";
    str += "<div class='botoes'><button onclick='findTeacher(" + teacher.tia + ")'>Editar</button>";
    str += "<button onclick='deleteTeacher(" + teacher.tia + ")'>X</button></div>";
    str += "</article>";
    return str;
}
