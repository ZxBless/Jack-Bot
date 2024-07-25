// historialCuriosidades.js
const fs = require('fs');
const curiosidades = require('./curiosidades');

let historial = [];

const cargarHistorial = () => {
    try {
        const data = fs.readFileSync('historial.json', 'utf8');
        historial = JSON.parse(data);
    } catch (error) {
        historial = [];
    }
};

const guardarHistorial = () => {
    fs.writeFileSync('historial.json', JSON.stringify(historial));
};

const obtenerCuriosidadAleatoria = () => {
    if (historial.length === curiosidades.length) {
        historial = [];
    }
    let curiosidad;
    do {
        curiosidad = curiosidades[Math.floor(Math.random() * curiosidades.length)];
    } while (historial.includes(curiosidad));
    historial.push(curiosidad);
    guardarHistorial();
    return curiosidad;
};

cargarHistorial();

module.exports = obtenerCuriosidadAleatoria;
