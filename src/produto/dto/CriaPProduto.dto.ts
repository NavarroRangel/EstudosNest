/* eslint-disable prettier/prettier */
import { ArrayMinSize, IsArray, IsNotEmpty, IsNumber, IsString, IsUUID, Min, ValidateNested } from "class-validator";
import { CaracteristicaProdutoDTO } from "./CaracteristicaProduto.dto";
import { Type } from "class-transformer";
import { ImagemProdutoDTO } from "./ImagemProduto.dto";


export class CriaProdutoDTO{
    @IsUUID(undefined, { message: "id de usuario inválido"})
    usuarioId:string

    @IsString()
    @IsNotEmpty({message:"NOME DO PRODUTO NAO PODE SER VAZIO"})
    nome:string;

    @IsNumber()
    @Min(0, {message: "quantidade mínima inválida"})
    quantidade: number;

    @IsString()
    @IsNotEmpty({message: "DESCRIÇÃO NAO PODE SER VAZIA"})
    descricao: string;

    @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
    @Min(1, { message: 'O valor precisa ser maior que zero' })
    valor: number;
    
    @ValidateNested()
    @IsArray()
    @ArrayMinSize(1)
    @Type(()=> CaracteristicaProdutoDTO)
    caracteristicas: CaracteristicaProdutoDTO[];

    @ValidateNested()
    @IsArray()
    @ArrayMinSize(1)
    @Type(()=> ImagemProdutoDTO)
    imagens: ImagemProdutoDTO[];

    @IsString()
    @IsNotEmpty({message: "CATEGORIA DO PRODUTO NAO PODE SER VAZIA"})
    categoria: string;
}