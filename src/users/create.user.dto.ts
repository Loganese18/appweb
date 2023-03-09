import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @MaxLength(70, { message: 'Max characters lenght reached' })
  userName: string;

  @MaxLength(50, { message: 'Max characters lenght reached' })
  firstName: string;

  @MaxLength(50, { message: 'Max characters lenght reached' })
  lastName: string;

  age: number;

  @MaxLength(1, { message: 'x, m or f' })
  gender: string;

  @IsNotEmpty()
  @MaxLength(100, { message: 'Max characters lenght reached' })
  email: string;

  @MaxLength(8, { message: 'Max characters lenght reached' })
  suscription: string;
}
