import { Image, Text, Box,  Checkbox, ScrollView, useToast } from 'native-base';
import { useState } from 'react';
import Logo from './assets/Logo.png';
import { Botao } from './componentes/Botao';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Titulo } from './componentes/titulo';
import { secoes } from './utils/CadastroEntradaTexto';

    export default function Cadastro({navigation} : any){
    const [numSecao, setNumeroSecao] = useState(0);
    const [dados,setDados] = useState({} as any)
    const [planos, setPlanos]= useState([] as number[])
    const toast = useToast()

    function avancarSecao() {
        if (numSecao < secoes.length - 1) {
            setNumeroSecao(numSecao + 1);
        }else{
            console.log(dados)
            console.log(planos)
        }
    }

    function voltarSecao() {
        if (numSecao > 0) {
            setNumeroSecao(numSecao - 1);
        }
    }
    
    function atualizarDados(id:string, valor:string){
        setDados({...dados, [id]:valor})
    }

    async function cadastrar() {
        const resultado = await cadastrarPaciente({
            cpf: dados.cpf,
            nome: dados.nome,
            email: dados.email,
            endereco: {
                cep: dados.cep,
                rua: dados.cep,
                numero: dados.numero,
                estado: dados.estado,
                complemento: dados.complemento
            },
            senha: dados.senha,
            telefone: dados.telefone,
            possuiPlanoSaude: dados.length > 0,
            planosSaude: planos,
            imagem: dados.imagem
        })
    };
    if(resultado){
        toast.show({
            title: 'Cadastro Realizado com Sucesso',
            description: 'Voce ja pode fazer Login',
            backgroundColor: 'green.500'
        })
        navigation.replace('login')
    }else{
        toast.show({
            title: 'Deu ruim',
            description: 'Voce fez coisa errada',
            backgroundColor: 'red.500'
        })
    }

    return (
        <ScrollView flex={1} p={5}>
            <Image source={Logo} alt='Login'></Image>
            <Titulo>
                {
                    secoes[numSecao].titulo
                }
            </Titulo>

            <Box>
                {
                    secoes[numSecao]?.entradaTexto?.map(entrada => {
                        return <EntradaTexto 
                        label={entrada.label} 
                        placeholder={entrada.placeholder} 
                        key={entrada.id} 
                        secureTextEntry={entrada.secureTextEntry}
                        value={dados[entrada.name]}
                        onChangeText={(text) => atualizarDados(entrada.name, text)}
                        />
                    })
                }
            </Box>
                {numSecao == 2 &&<Text color="blue.500" fontWeight="bold" fontSize='md' mt="2" mb={2}>
                    Selecione os planos:
                </Text>}
            <Box>
                {
                    secoes[numSecao].checkbox.map(checkbox => {
                        return (<Checkbox 
                        key={checkbox.id} 
                        value={checkbox.value}
                        onChange={() => {
                            setPlanos((planosAnteriores) => {
                                if (planosAnteriores.includes(checkbox.id)){
                                    return planosAnteriores.filter((id) => id !==checkbox.id)
                                }
                                return[...planosAnteriores,checkbox.id]
                            })
                        }}
                        isChecked={planos.includes(checkbox.id)}
                        >
                            {checkbox.value}
                            </Checkbox>
                            )
                    })
                }
            </Box>
            {numSecao > 0 && <Botao onPress={() => voltarSecao()} bg={'gray.400'}>
                Voltar
            </Botao>}
            <Botao onPress={() => avancarSecao()} mt={4}>
                Avançar
            </Botao>
        </ScrollView>
    );
    
}