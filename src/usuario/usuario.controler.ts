/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsuarioRepository } from "./usuario.repository";
import { CriaUsuarioDTO } from "./dto/CriaUsuario.dto";

@Controller('/usuarios')


export class UsuarioController{

    constructor(private usuarioRepository: UsuarioRepository){}

    @Post()
    async criaUsuario(@Body() dadosDoUsuario:CriaUsuarioDTO){
        this.usuarioRepository.salvar(dadosDoUsuario)
        return dadosDoUsuario
  }
 @Get()
  async listUsuarios(){
    return this.usuarioRepository.listar();
  }
}