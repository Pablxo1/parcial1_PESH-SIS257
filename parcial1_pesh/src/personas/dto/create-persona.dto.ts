import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
export class CreatePersonaDto {
  @IsNotEmpty({ message: 'El campo nombre es obligatorio' })
  @IsString({ message: 'El campo nombre debe ser de tipo cadena' })
  @MaxLength(50, { message: 'El campo ci no debe ser mayor a 50 caracteres' })
  readonly ci: string;

  @IsNotEmpty({ message: 'El campo nombre es obligatorio' })
  @IsString({ message: 'El campo nombre debe ser de tipo cadena' })
  @MaxLength(50, { message: 'El campo nombre no debe ser mayor a 50 caracteres' })
  readonly nombres: string;

  @IsNotEmpty({ message: 'El campo primerApellido es obligatorio' })
  @IsString({ message: 'El campo primerApellido debe ser de tipo cadena' })
  @MaxLength(30, { message: 'El campo primerApellido no debe ser mayor a 30 caracteres' })
  readonly primerApellido: string;

  @IsNotEmpty({ message: 'El campo segundoApellido es obligatorio' })
  @IsString({ message: 'El campo segundoApellido debe ser de tipo cadena' })
  @MaxLength(30, { message: 'El campo segundoApellido no debe ser mayor a 30 caracteres' })
  readonly segundoApellido: string;

  @IsNotEmpty({ message: 'El campo fechaNacimiento es obligatorio' })
  @IsString({ message: 'El campo fechaNacimiento debe ser de tipo date' })
  @MaxLength(30, { message: 'El campo fechaNacimiento no debe ser mayor a 30 caracteres' })
  readonly fechaNacimiento: Date;
}
