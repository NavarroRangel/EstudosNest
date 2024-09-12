/* eslint-disable prettier/prettier */
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UsuarioRepository } from "../usuario.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
@ValidatorConstraint({async: true})
export class EmailUnicoValidator implements ValidatorConstraintInterface {

    constructor (private usuarioRepository: UsuarioRepository){}

    async validate(value: any, validationArguments?: ValidationArguments,): Promise<boolean> {
        const usuarioComEmailExiste = await this.usuarioRepository.existeComEmail(value)
        return !usuarioComEmailExiste     }
}

export const EmailUnico = (opcoesDeValidacao:ValidationOptions) =>{
    return (objeto:Object, propriedade:string) =>{
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcoesDeValidacao,
            constraints: [],
            validator: EmailUnicoValidator
        })
    }
}