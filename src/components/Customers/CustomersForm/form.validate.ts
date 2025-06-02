import z from 'zod';
import { TypeOfLegalService, TypeOfRelationship } from '.';

export const customersformValidate = z.object({
  name: z.string().min(1, 'Informe o nome completo'),
  email: z.string().email('Email inválido'),
  cpfCnpj: z.string().min(11, 'CPF/CNPJ Inválido').max(14, 'CPF/CNPJ Inválido'),
  rg: z.string().min(1, 'Informe um RG'),
  birthday: z.string().date('Data inválida'),
  address: z.string().min(1, 'Informe um endereço'),
  phones: z.array(z.string()).min(1, 'Informe ao menos 1 telefone'),

  casesInformation: z.array(
    z.object({
      typeOfRelationship: z
        .nativeEnum(TypeOfRelationship)
        .nullable()
        .refine((val) => val !== null, {
          message: 'Informe um tipo de relacionamento',
        }),

      typeOfLegalService: z
        .nativeEnum(TypeOfLegalService)
        .nullable()
        .refine((val) => val !== null, {
          message: 'Informe um tipo de serviço jurídico',
        }),

      caseDescription: z.string().min(1, 'Informe uma descrição do caso'),
      serviceStartDate: z
        .string()
        .date('Informe uma data de inicio do serviço'),
    })
  ),
});
