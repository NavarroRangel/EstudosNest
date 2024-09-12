import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controler";
import { UsuarioRepository } from "./usuario.repository";
import { EmailUnico, EmailUnicoValidator } from "./validator/email-unico-validator";

@Module({
    controllers: [UsuarioController],
    providers: [UsuarioRepository,EmailUnicoValidator]
})


export class UsuarioModule{}