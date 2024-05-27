import { Paciente  } from "../interfaces/Paciente";
import api from "./api";

export async function cadastraPaciente(paciente: Paciente) {
    if(!paciente) return null;

    try {
        const resultado = await api.post ('/Paciente', paciente)
        console.log(resultado.data)
        return resultado.data
    }
    catch(error){
        console.log(error)
        return null
    }
}