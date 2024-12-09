document.getElementById("form-medico").addEventListener("submit", (e) => {
    e.preventDefault();
    
    const nome = document.getElementById("nome").value.trim();
    const especialidade = document.getElementById("especialidade").value.trim();
    const crm = document.getElementById("crm").value.trim();

    if (!nome || !especialidade || !crm) {
        alert("Preencha todos os campos!");
        return;
    }

    const medico = { Nome: nome, Especialidade: especialidade, CRM: crm };
    adicionarMedicoTabela(medico);
    limparCampos();
});

function criarCabecalho(medico) {
    const thead = document.getElementById("table-head");
    thead.innerHTML = "";

    const headerRow = document.createElement("tr");
    Object.keys(medico).forEach((key) => {
        const th = document.createElement("th");
        th.textContent = key;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
}

function adicionarMedicoTabela(medico) {
    const tbody = document.getElementById("table-body");

    if (tbody.rows.length === 0) {
        criarCabecalho(medico);
    }

    const row = document.createElement("tr");
    Object.values(medico).forEach((value) => {
        const td = document.createElement("td");
        td.textContent = value;
        row.appendChild(td);
    });
    tbody.appendChild(row);
}

function limparCampos() {
    document.getElementById("nome").value = "";
    document.getElementById("especialidade").value = "";
    document.getElementById("crm").value = "";
}
