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

import Divider from '../components/Divider';
import Input from '../components/Input';
import Icon from '../components/Icon';

export default function Register() {
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
          Faça seu cadastro na plataforma
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
          <InputLeftElement children={<Icon name='at-sign' />} />
          <Input type='text' placeholder='Seu nome' />
        </InputGroup>
        <InputGroup marginTop={2}>
          <InputLeftElement children={<Icon name='email' />} />
          <Input type='email' placeholder='E-mail' />
        </InputGroup>
        <InputGroup marginTop={2}>
          <InputLeftElement children={<Icon name='phone' />} />
          <Input type='tel' placeholder='Seu contato' />
        </InputGroup>
        <InputGroup marginTop={2}>
          <InputLeftElement children={<Icon name='lock' />} />
          <Input type='password' placeholder='Senha' />
          <InputRightElement children={<Icon name='view' />} />
        </InputGroup>
        <Button
          marginTop={6}
          backgroundColor='purple.500'
          height='50px'
          borderRadius='sm'
          _hover={{ backgroundColor: 'purple.600' }}>
          CADASTRAR
        </Button>
        <Text textAlign='center' fontSize='sm' color='gray.300' marginTop={6}>
          Já tem uma conta?{' '}
          <Link
            href='/login'
            color='purple.600'
            fontWeight='bold'
            _hover={{ color: 'purple.500' }}>
            Fazer Login
          </Link>
        </Text>
        <Divider />
      </Flex>
    </Grid>
  );
}
