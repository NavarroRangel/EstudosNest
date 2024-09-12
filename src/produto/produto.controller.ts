/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProdutoRepository } from "./produto.repository";
import { CriaProdutoDTO } from "./dto/CriaPProduto.dto";

@Controller('/produtos')

export class ProdutoController{
    constructor(private produtoRepository: ProdutoRepository){}
    @Post()
    async criaProduto(@Body() dadosDoProduto: CriaProdutoDTO){
        this.produtoRepository.salvar(dadosDoProduto)
        return dadosDoProduto;
    }
    @Get()
    async listProdutos(){
        return this.produtoRepository;
    }

}