import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controler";
import { UsuarioRepository } from "./usuario.repository";

@Module({
    controllers: [UsuarioController],
    providers: [UsuarioRepository]
})


export class UsuarioModule{}