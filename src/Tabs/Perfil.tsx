import { VStack, Text, ScrollView, Avatar, Divider } from "native-base";
import { Titulo } from "../componentes/titulo";
import { Temas } from "../estilos/temas";

export default function Perfil() {
    return (
        <ScrollView flex={1}>
            <VStack flex={1} alignItems="center" p={5}>
                <Titulo color={"blue.500"}>Meu Perfil</Titulo>
                <Avatar size="xl" source={{ uri: "https://github.com/belira13.png" }} mt={5} />

                <Titulo color={"blue.500"}>Informações Pessoais</Titulo>
                <Titulo fontSize="lg">Bruno Oliveira</Titulo>
                <Titulo>31/07/2004</Titulo>
                <Titulo>Votuporanga / SP</Titulo>

                <Divider mt={5} />

                <Titulo color={"blue.500"}>Histórico Médico</Titulo>
                <Text fontSize={18}>Miopia</Text>
                <Text fontSize={18}>Asma</Text>
            </VStack>
        </ScrollView>
    )
}