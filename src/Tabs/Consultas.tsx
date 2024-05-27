import { VStack, Text } from "native-base";
import { CardConsulta } from "../componentes/CardConsulta";

export default function Consultas(){
    return(
        <VStack p={5}>
            <CardConsulta
            nome='Dr.Roberto'
            especialidade='Oftalmologista'
            foto='https://github.com/robertomoraesjunior.png'
            data='20/06/2004'
            foiAtendido
            foiAgendado
            />
        </VStack>
    )
}