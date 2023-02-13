import { useState, useContext, useEffect } from "react";
import { BsPencilFill } from "react-icons/bs";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import styled from "styled-components";
import { Typography } from '@mui/material';
import { Paper } from '@mui/material';

import {
  Button,
  FormControl,
  TextField,
  Container,
  MenuItem,
  Select,
  Box
} from "@mui/material";

export const TextFieldStyled = styled(TextField)`
    margin-bottom: 30px!important;
`;
export const SubmitButton = styled(Button)`
    margin-bottom: 9px;
`;
export const SelectStyled = styled(Select)`
    margin-bottom: 9px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const schema = yup.object({
   
    nome: yup.string().required(),
    dataInicial: yup.string().required(),
    dataFinal: yup.string().required(),
    infosPropriedadeId: yup.string().required(),
    infosPropriedadeNome: yup.string().required(),
    cnpj: yup.string().required(),
    laboratorioId: yup.string().required(),
    laboratorioNome: yup.string().required(),
    observacoes: yup.string().required(),

  }).required();

function App ({ aoEnviar }) {
    
    const [nome, setNome] = useState('');
    const [dataInicial, setDataInicial] = useState('');
    const [dataValue, setDataValue ] = useState([null,null]);
    const [dataFinal, setDataFinal] = useState('');
    const [infosPropriedadeId, setInfosPropriedadeId] = useState('');
    const [infosPropriedadeNome, setInfosPropriedadeNome] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [laboratorioId, setLaboratorioId] = useState('');
    const [laboratorioNome, setLaboratorioNome] = useState('');
    const [observacoes, setObservacoes] = useState('');

  const { 
    register, 
    handleSubmit,
    formState: { errors } 
  } = useForm({resolver: yupResolver(schema)});

  function onSubmit(data) {
    console.log(data)
    aoEnviar({ 
      nome, 
      dataInicial,
      dataFinal,
      infosPropriedadeId,
      infosPropriedadeNome,
      cnpj,
      laboratorioId,
      laboratorioNome,
      observacoes
    });
  }
  
  return (
    <>
      <Container style={{display: 'block'}}>
      <Form onSubmit={handleSubmit(onSubmit)}>
      <Paper variant="outlined" style={{padding: '20px',marginTop: '30px'}}>
        <Box style={{height: '60px',display: 'flex',justifyContent: 'space-between'}}>
          <Typography variant='h4'>Teste front end</Typography>
          <FormControl>
            <SubmitButton size="small" variant="text" color="inherit" type="submit" style={{ fontWeight: 'bold'}}>
              Enviar
            </SubmitButton>
          </FormControl>
        </Box>
        

        <Box display="flex" justifyContent="flex-start">
          <FormControl fullWidth>
            <TextFieldStyled
              {...register("nome", { required: true })}
              style={{paddingRight: '10px'}}
              label="Nome"
              id="nome"
              name="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              variant="filled"
              type="text"
              margin="normal"
              required
              helperText={errors.nome?.message}
              InputProps={{
                  endAdornment: (
                      <BsPencilFill />
                  ),
              }}
            />
          </FormControl>

          <FormControl fullWidth>
            <TextFieldStyled
              {...register("dataInicial", { required: true })}
              style={{paddingRight: '10px'}}
              id="dataInicial"
              name="dataInicial"
              value={dataInicial}
              onChange={(e) => setDataInicial(e.target.value)}
              variant="filled"
              type="date"
              margin="normal"
              required
              helperText={errors.dataInicial?.message}
            />
          </FormControl>
          
          <FormControl fullWidth>
            <TextFieldStyled
              {...register("dataFinal", { required: true })}
              id="dataFinal"
              name="dataFinal"
              value={dataFinal}
              onChange={(e) => setDataFinal(e.target.value)}
              variant="filled"
              type="date"
              fullWidth
              margin="normal"
              required
              helperText={errors.dataFinal?.message}
            />
          </FormControl>
          </Box>

          <Box display="flex" justifyContent="flex-start">

          <FormControl style={{width: '50%'}}>
            <TextFieldStyled
            style={{marginRight: '10px',paddingRight: '10px'}}
              id="infosPropriedadeNome"
              label="Propriedades"
              name="infosPropriedadeNome"
              select
              value={infosPropriedadeNome}
              onChange={(e) => setInfosPropriedadeNome(e.target.value)}
              variant="outlined"
              
              required
            >
              <MenuItem value="ADMIN">Agrotis 1</MenuItem>
              <MenuItem value="USER">Agrotis 2</MenuItem>
              <MenuItem value="ADMIN">Agrotis 3</MenuItem>
              <MenuItem value="USER">Agrotis 4</MenuItem>
            </TextFieldStyled>
          </FormControl>

          <FormControl style={{width: '50%'}}>
            <TextFieldStyled
              id="laboratorioNome"
              label="Laboratório"
              name="laboratorioNome"
              select
              value={laboratorioNome}
              onChange={(e) => setLaboratorioNome(e.target.value)}
              variant="outlined"
              
              required
            >
              <MenuItem value="ADMIN">Agro Skynet</MenuItem>
              <MenuItem value="USER">Umbrela Agro</MenuItem>
              <MenuItem value="ADMIN">Osborn Agro</MenuItem>
              <MenuItem value="USER">Skyrim Agro</MenuItem>
              <MenuItem value="USER">Agro Brasil</MenuItem>
            </TextFieldStyled>
          </FormControl>

          </Box>
          
          <FormControl fullWidth>
            <TextFieldStyled
              {...register("observacoes", { required: true })}
              label="Observações"
              id="observacoes"
              name="observacoes"
              value={observacoes}
              onChange={(e) => setObservacoes(e.target.value)}
              variant="filled"
              fullWidth
              type="text"
              margin="normal"
              required
              helperText={errors.observacoes?.message}
              InputProps={{
                  endAdornment: (
                      <BsPencilFill />
                  ),
              }}
            />
          </FormControl>
        </Paper>
    
        </Form>
      </Container>
    </>
  );
};

export default App;



