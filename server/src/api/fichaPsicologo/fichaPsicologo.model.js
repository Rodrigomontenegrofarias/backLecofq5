const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const fichaPsicologoSchema = new mongoose.Schema({
    idFichaPsicologo: {
        type: Number,
        unique: true
    },
    rut: {
        type: String,
        // required: true
    },
    ocupacion: {
        type: String,
        // required: true
    },
    escolaridad: {
        type: String,
        // required: true
    },
    telefono: {
        type: String,
        // required: true
    },
    ocupacionActual: {
        type: String,
        // required: true
    },
    razonesConsulta: {
        type: String,
        // required: true
    },
    causasConsulta: {
        type: String,
        // required: true
    },
    psicologoAnteriorRazon: {
        type: String,
        // required: true
    },
    antecedentePrenatal: {
        type: String,
        // required: true
    },
    tipoParto: {
        type: String,
        // required: true
    },
    antecedentePerinatal: {
        type: String,
        // required: true
    },
    antecedenteNacido: {
        type: String,
        // required: true
    },
    nacimineto: {
        type: String,
        // required: true
    },
    antecedenteDesarrollo: {
        type: String,
        // required: true
    },
    dificultadesAprender: {
        type: String,
        // required: false
    },
    enfermedades: {
        type: String,
        // required: true
    },
    datosEscolar: {
        type: String,
        // required: true
    },
    conductaEscolar: {
        type: String,
        // required: true
    },
    adaptacionEscolar: {
        type: String,
        // required: true
    },
    remuneracion: {
        type: String,
        // required: true
    },
    tipoTrabajo: {
        type: String,
        // required: true
    },
    calidadTrabajo: {
        type: String,
        // required: true
    },
    relacionCompañeros: {
        type: String,
        // required: true
    },
    calidadLaboral: {
        type: String,
        // required: true
    },
    relacionSuperior: {
        type: String,
        // required: true
    },
    estabilidadLaboral: {
        type: String,
        // required: true
    },
    perspectivaDesarrollo: {
        type: String,
        // required: true
    },
    tipoPersona: {
        type: String,
        // required: true
    },
    balanceSocial: {
        type: String,
        // required: true
    },
    estadoAnimo: {
        type: String,
        // required: true
    },
    situacionUltimoAño: {
        type: String,
        // required: true
    },
    tiempoPareja: {
        type: String,
        // required: true
    },
    nombrePareja: {
        type: String,
        // required: true
    },
    edadPareja: {
        type: String,
        // required: true
    },
    nivelEducacionalPareja: {
        type: String,
        // required: true
    },
    ocupacionActualPareja: {
        type: String,
        // required: true
    },
    relacionPareja: {
        type: String,
        // required: true
    },
    metasVida: {
        type: String,
        // required: true
    },
    sintomas: {
        type: String,
        // required: true
    },
    miedosDesproporcionados: {
        type: String,
        // required: true
    },
    otrosMiedos: {
        type: String,
        // required: true
    },
    

});

const fichaPsicologo = mongoose.model("FichaPsicologo", fichaPsicologoSchema);
module.exports = fichaPsicologo;
