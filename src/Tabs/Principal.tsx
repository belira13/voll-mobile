    import { VStack, Text, ScrollView, Image, Divider } from "native-base";
    import { EntradaTexto } from "../componentes/EntradaTexto";
    import { Botao } from "../componentes/Botao";
    import { Titulo } from "../componentes/titulo";
    import Logo from '../assets/Logo.png';

    export default function Principal() {
        return (
            <ScrollView flex={1}>
                <Image source={Logo} alt='Login' mt={5}></Image>
                <Titulo color={"blue.500"} mb={5} >Boas Vindas</Titulo>
                <VStack p={7} flex={1}>

                    <VStack p={5} w="100%" bg={'white'} borderRadius="lg" shadow="2" mb={3}>
                        <EntradaTexto placeholder="digite sua especialidade"></EntradaTexto>
                        <EntradaTexto placeholder="digite sua localizacao"></EntradaTexto>
                        <Botao>Buscar</Botao>
                    </VStack>

                    <Titulo color={"blue.800"} alignSelf="center" mb={5}>Depoimentos</Titulo>


                        <VStack flex={1} alignItems="center" justifyContent="center" mb={4}>
                            
                            <Text mb={5}>Maecenas eu libero id massa sollicitudin imperdiet. Curabitur ac sagittis velit, non malesuada ipsum. Aenean sit amet aliquam augue, ac tincidunt lorem. Pellentesque eget ullamcorper arcu. Ut ut lectus sit amet risus vulputate sodales eu tempor ligula.</Text>
                            <Text fontSize={"md"} color="gray" mb={4} bold>Roginaldo- 43 anos - São Paulo/SP</Text>
                            <Divider mb={4}/>

                            <Text mb={5}>Maecenas eu libero id massa sollicitudin imperdiet. Curabitur ac sagittis velit, non malesuada ipsum. Aenean sit amet aliquam augue, ac tincidunt lorem. Pellentesque eget ullamcorper arcu. Ut ut lectus sit amet risus vulputate sodales eu tempor ligula.</Text>
                            <Text fontSize={"md"} color="gray" mb={4} bold>Rogério- 58 anos - Votuporanga/SP</Text>
                            <Divider mb={4}/>

                            <Text mb={5}>Maecenas eu libero id massa sollicitudin imperdiet. Curabitur ac sagittis velit, non malesuada ipsum. Aenean sit amet aliquam augue, ac tincidunt lorem. Pellentesque eget ullamcorper arcu. Ut ut lectus sit amet risus vulputate sodales eu tempor ligula.</Text>
                            <Text fontSize={"md"} color="gray" mb={4} bold>Roberto- 37 anos - São Bernardo/SP</Text>
                            <Divider mb={4}/>

                            <Text mb={5}>Maecenas eu libero id massa sollicitudin imperdiet. Curabitur ac sagittis velit, non malesuada ipsum. Aenean sit amet aliquam augue, ac tincidunt lorem. Pellentesque eget ullamcorper arcu. Ut ut lectus sit amet risus vulputate sodales eu tempor ligula.</Text>
                            <Text fontSize={"md"} color="gray" mb={4} bold>Sidnei- 41 anos - São José do Rio Preto/SP</Text>
                            <Divider mb={4}/>
                        </VStack>

                


                </VStack>
            </ScrollView>
        )
    }