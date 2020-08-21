// import Head from 'next/head'

import {
  Grid,
  Flex,
  Heading,
  Link,
  Button,
  Text,
  InputGroup,
} from '@chakra-ui/core';
import {
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/core/dist/InputElement';

import { FaGithub } from 'react-icons/fa';

import Divider from '../components/Divider';
import Input from '../components/Input';
import Icon from '../components/Icon';

export default function Login() {
  return (
    <Grid
      as='main'
      height='100vh'
      templateColumns='1fr 480px 480px 1fr'
      templateRows='1fr 480px 1fr'
      templateAreas="
        '. . . .'
        '. logo form .'
        '. . . .'
      "
      justifyContent='center'
      alignItems='center'>
      <Flex gridArea='logo' flexDir='column' alignItems='flex-start'>
        <Heading size='lg' color='purple.500'>
          Fernando Logo
        </Heading>

        <Heading size='2xl' lineHeight='shorter' marginTop={16}>
          Faça seu login na plataforma
        </Heading>
      </Flex>
      <Flex
        gridArea='form'
        height='100%'
        backgroundColor='gray.700'
        borderRadius='md'
        flexDir='column'
        alignItems='stretch'
        padding={16}>
        <InputGroup>
          <InputLeftElement children={<Icon name='email' />} />
          <Input type='email' placeholder='E-mail' />
        </InputGroup>
        <InputGroup marginTop={2}>
          <InputLeftElement children={<Icon name='lock' />} />
          <Input type='password' placeholder='Senha' />
          <InputRightElement children={<Icon name='view' />} />
        </InputGroup>
        <Link
          alignSelf='flex-start'
          marginTop={2}
          fontSize='sm'
          color='purple.600'
          fontWeight='bold'
          _hover={{ color: 'purple.500' }}>
          Esqueci minha senha
        </Link>
        <Button
          marginTop={6}
          backgroundColor='purple.500'
          height='50px'
          borderRadius='sm'
          _hover={{ backgroundColor: 'purple.600' }}>
          ENTRAR
        </Button>
        <Text textAlign='center' fontSize='sm' color='gray.300' marginTop={6}>
          Não tem uma conta?{' '}
          <Link
            href='/register'
            color='purple.600'
            fontWeight='bold'
            _hover={{ color: 'purple.500' }}>
            Registre-se
          </Link>
        </Text>
        <Divider />
        <Flex alignItems='center'>
          <Text fontSize='sm'>Ou entre com</Text>
          <Button
            height='50px'
            flex='1'
            backgroundColor='gray.600'
            marginLeft={6}
            borderRadius='sm'
            _hover={{ backgroundColor: 'purple.500' }}>
            <FaGithub size={24} className='icon' /> GITHUB
          </Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
