/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";


export class CaracteristicaProdutoDTO{
    @IsString()
    @IsNotEmpty({message: "NOME DA CARACTERÍSTICA NAO PODE SER VAZIO"})
    nome: string;

    @IsString()
    @IsNotEmpty({message: "DESCRIÇÃO NAO PODE SER VAZIA"})
    descricao: string;
}