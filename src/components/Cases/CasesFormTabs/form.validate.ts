import z from 'zod';
import {
  CaseType,
  CaseStatus,
  ProcessTag,
  ProcessStatus,
  ProcessInstance,
  ProcessType,
} from './form.types';

export const casesProcessesformValidate = z.object({
  title: z.string().min(1, 'Campo obrigatório'),
  customerId: z.string().min(1, 'Campo obrigatório'),
  lawyerId: z.string().min(1, 'Campo obrigatório'),
  coLawyerIds: z.string().array().optional(),

  type: z
    .nativeEnum(CaseType)
    .nullable()
    .refine((val) => val !== null, {
      message: 'Campo obrigatório',
    }),

  status: z
    .nativeEnum(CaseStatus)
    .nullable()
    .refine((val) => val !== null, {
      message: 'Campo obrigatório',
    }),

  descrition: z.string().optional(),

  tags: z
    .nativeEnum(ProcessTag)
    .refine((val) => val !== null, {
      message: 'Campo obrigatório',
    })
    .array()
    .optional(),

  processes: z.array(
    z.object({
      number: z.string().min(1, 'Campo obrigatório'),
      jurisdiction: z.string().min(1, 'Campo obrigatório'),
      judgeName: z.string().optional(),
      court: z.string().min(1, 'Campo obrigatório'),

      status: z
        .nativeEnum(ProcessStatus)
        .nullable()
        .refine((val) => val !== null, {
          message: 'Campo obrigatório',
        }),

      instance: z
        .nativeEnum(ProcessInstance)
        .nullable()
        .refine((val) => val !== null, {
          message: 'Campo obrigatório',
        }),

      type: z
        .nativeEnum(ProcessType)
        .nullable()
        .refine((val) => val !== null, {
          message: 'Campo obrigatório',
        }),

      startDate: z.string().date(),
    })
  ),
});
