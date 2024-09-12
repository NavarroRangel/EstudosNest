/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, IsUrl } from "class-validator";


export class ImagemProdutoDTO{
    @IsUrl()
    url: string;

    @IsString()
    @IsNotEmpty({message: "DESCRICÇÂO DE IMAGEM NAO PODE SER VAZIA"})
    descricao: string;
}