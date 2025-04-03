
let datos = JSON.parse(localStorage.getItem('datos')) || [];

function renderizarTabla() {
    const tablaBody = document.getElementById('tabla-body');
    tablaBody.innerHTML = '';
    datos.forEach((dato, index) => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${dato.banco}</td>
            <td>${dato.persona}</td>
            <td>${dato.monto}</td>
            <td>
                <button onclick="editar(${index})">Editar</button>
                <button onclick="eliminar(${index})">Eliminar</button>
            </td>
        `;
        tablaBody.appendChild(fila);
    });
}

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const nuevoDato = {
        banco: document.getElementById('banco').value,
        persona: document.getElementById('persona').value,
        monto: document.getElementById('monto').value
    };
    datos.push(nuevoDato);
    localStorage.setItem('datos', JSON.stringify(datos));
    renderizarTabla();
    this.reset();
});

function editar(index) {
    const dato = datos[index];
    document.getElementById('banco').value = dato.banco;
    document.getElementById('persona').value = dato.persona;
    document.getElementById('monto').value = dato.monto;
    eliminar(index);
}

function eliminar(index) {
    datos.splice(index, 1);
    localStorage.setItem('datos', JSON.stringify(datos));
    renderizarTabla();
}

renderizarTabla();
