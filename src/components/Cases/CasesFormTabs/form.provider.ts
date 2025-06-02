import { createFormContext } from '@mantine/form';
import { CasesFormValues } from './form.types';

export const [CasesFormProvider, useCasesFormContext, useCasesForm] =
  createFormContext<CasesFormValues>();
