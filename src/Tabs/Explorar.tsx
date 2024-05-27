import { VStack, Text, ScrollView } from "native-base";
import { CardConsulta } from "../componentes/CardConsulta";
import { EntradaTexto } from "../componentes/EntradaTexto";
import { Botao } from "../componentes/Botao";
import { Titulo } from "../componentes/titulo";

export default function ExplorarComp() {
    return (
        <ScrollView flex={1}>
            <VStack p={7} flex={1}>

                <VStack p={5} w="100%" bg={'white'} borderRadius="lg" shadow="2">
                    <EntradaTexto placeholder="digite sua especialidade"></EntradaTexto>
                    <EntradaTexto placeholder="digite sua localizacao"></EntradaTexto>
                    <Botao>buscar</Botao>
                </VStack>

                <Titulo color={"blue.500"} alignSelf="center" mb={5}>Resultado da Pesquisa</Titulo>

                {[1, 2, 3, 4].map((_, index) => (
                    <VStack flex={1} alignItems="center" justifyContent="center" mb={4}>
                        <CardConsulta
                            nome='Dr.Bruno'
                            especialidade='Oftalmologista'
                            foto='https://github.com/belira13.png'
                            data='22/03/2004'
                        />
                    </VStack>
                ))}


            </VStack>
        </ScrollView>
    )
}