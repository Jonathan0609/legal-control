'use client';

import { CpfCnpjInput } from '@/components/_commons/Inputs/CpfCnpjInput';
import DateInputCommon from '@/components/_commons/Inputs/DateInputCommon';
import {
  Button,
  Grid,
  GridCol,
  Group,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { createFormContext, zodResolver } from '@mantine/form';
import { IconDisc } from '@tabler/icons-react';
import { customersformValidate } from './form.validate';
import SelectMaritalStatus from '@/components/_commons/Inputs/SelectMaritalStatus';

export enum MaritalStatus {
  Married = 'MARRIED',
  Divorced = 'DIVORCED',
  Single = 'SINGLE',
}

export enum TypeOfRelationship {
  ConsultationOnly = 'CONSULTATION_ONLY',
  RetainerAgreement = 'RETAINER_AGREEEMENT',
  OneTimeRepresentation = 'ONE_TIME_REPRESENTATION',
  LitigationSupport = 'LITIGATION_SUPPORT',
  MediationOrNegotiation = 'MEDIATION_OR_NEGOTIATION',
  ProBono = 'PRO_BONO',
  ConflictCheckOnly = 'CONFLICT_CHECK_ONLY',
}

export enum TypeOfLegalService {
  CivilLitigation = 'CIVIL_LITIGATION',
  CriminalDefense = 'CRIMINAL_DEFENSE',
  FamilyLaw = 'FAMILY_LAW',
  CorporateLaw = 'CORPORATE_LAW',
  LaborLaw = 'LABOR_LAW',
  TaxLaw = 'TAX_LAW',
  RealEstateLaw = 'REAL_ESTATE_LAW',
  ImmigrationLaw = 'IMMIGATION_LAW',
  IntellectualProperty = 'INTELLECTUAL_PROPERTY',
  ContractDrafting = 'CONFRACT_DRAFTING',
  LegalConsulting = 'LEGAL_CONSULTING',
  RegulatoryCompliance = 'REGULATORY_COMPLIANCE',
  ArbitrationOrMediation = 'ARBITRATION_OR_MEDIATION',
}

export const maritalStatusLabel = {
  [MaritalStatus.Divorced]: 'Divorciado',
  [MaritalStatus.Married]: 'Casado',
  [MaritalStatus.Single]: 'Solteiro',
};

export const typeOfLegalServiceLabel: Record<TypeOfLegalService, string> = {
  [TypeOfLegalService.CivilLitigation]: 'Ações cíveis',
  [TypeOfLegalService.CriminalDefense]: 'Defesa criminal',
  [TypeOfLegalService.FamilyLaw]: 'Direito de família',
  [TypeOfLegalService.CorporateLaw]: 'Direito empresarial',
  [TypeOfLegalService.LaborLaw]: 'Direito trabalhista',
  [TypeOfLegalService.TaxLaw]: 'Direito tributário',
  [TypeOfLegalService.RealEstateLaw]: 'Direito imobiliário',
  [TypeOfLegalService.ImmigrationLaw]: 'Direito de imigração',
  [TypeOfLegalService.IntellectualProperty]: 'Propriedade intelectual',
  [TypeOfLegalService.ContractDrafting]: 'Elaboração de contratos',
  [TypeOfLegalService.LegalConsulting]: 'Consultoria jurídica',
  [TypeOfLegalService.RegulatoryCompliance]: 'Conformidade regulatória',
  [TypeOfLegalService.ArbitrationOrMediation]: 'Arbitragem ou mediação',
};

export const typeOfRelationshipLabel: Record<TypeOfRelationship, string> = {
  [TypeOfRelationship.ConsultationOnly]: 'Apenas consulta',
  [TypeOfRelationship.RetainerAgreement]:
    'Contrato de honorários / assessoria contínua',
  [TypeOfRelationship.OneTimeRepresentation]: 'Representação pontual',
  [TypeOfRelationship.LitigationSupport]: 'Apoio em litígios',
  [TypeOfRelationship.MediationOrNegotiation]:
    'Mediação ou negociação extrajudicial',
  [TypeOfRelationship.ProBono]: 'Pro bono (gratuito)',
  [TypeOfRelationship.ConflictCheckOnly]:
    'Verificação de conflito de interesses',
};

export interface CustomersFormValues {
  name: string;
  email: string;
  cpfCnpj: string;
  rg?: string;
  birthday?: Date | null;
  address: string;
  maritalStatus?: MaritalStatus | null;
  phones: string[];

  casesInformation: {
    typeOfRelationship: TypeOfRelationship | null;
    typeOfLegalService: TypeOfLegalService | null;
    caseDescription: string; // Textarea
    serviceStartDate: Date | null;
    processNumber?: string;
    forumDistrict?: string;
  }[];

  docs: {
    documents: File[];
    scienceTerm: boolean | null;
    lgpdAccept: boolean | null;
  };
}

export const [CustomerFormProvider, useCustomerFormContext, useCustomerForm] =
  createFormContext<CustomersFormValues>();

export default function CustomersForm() {
  const form = useCustomerForm({
    mode: 'controlled',
    validate: zodResolver(customersformValidate),
    initialValues: {
      name: '',
      email: '',
      cpfCnpj: '',
      rg: '',
      birthday: null,
      address: '',
      phones: [],

      casesInformation: [
        {
          caseDescription: '',
          serviceStartDate: null,
          typeOfLegalService: null,
          typeOfRelationship: null,
        },
      ],

      docs: {
        documents: [],
        lgpdAccept: null,
        scienceTerm: null,
      },
    },
  });

  const handleSubmit = (values: CustomersFormValues) => {
    console.log(values);
  };

  return (
    <CustomerFormProvider form={form}>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <Stack gap="xs">
            <Text fz="xs" c="dimmed" fw={600}>
              Dados pessoais
            </Text>

            <Grid>
              <GridCol span={{ base: 12, md: 6, lg: 4 }}>
                <TextInput
                  label="Nome completo"
                  withAsterisk
                  {...form.getInputProps('name')}
                  key={form.key('name')}
                />
              </GridCol>

              <GridCol span={{ base: 12, md: 6, lg: 4 }}>
                <CpfCnpjInput
                  withAsterisk
                  {...form.getInputProps('cpfCnpj')}
                  key={form.key('cpfCnpj')}
                />
              </GridCol>

              <GridCol span={{ base: 12, md: 6, lg: 4 }}>
                <SelectMaritalStatus
                  clearable
                  {...form.getInputProps('maritalStatus')}
                  key={form.key('maritalStatus')}
                />
              </GridCol>

              <GridCol span={{ base: 12, md: 6, lg: 4 }}>
                <TextInput
                  label="Email"
                  withAsterisk
                  {...form.getInputProps('email')}
                  key={form.key('email')}
                />
              </GridCol>

              <GridCol span={{ base: 12, md: 6, lg: 4 }}>
                <TextInput
                  label="RG"
                  {...form.getInputProps('rg')}
                  key={form.key('rg')}
                />
              </GridCol>

              <GridCol span={{ base: 12, md: 6, lg: 4 }}>
                <DateInputCommon
                  label="Dt. aniversário"
                  {...form.getInputProps('birthday')}
                  key={form.key('birthday')}
                />
              </GridCol>

              <GridCol span={{ base: 12, md: 6, lg: 4 }}>
                <TextInput
                  label="Endereço"
                  withAsterisk
                  {...form.getInputProps('address')}
                  key={form.key('address')}
                />
              </GridCol>
            </Grid>
          </Stack>

          <Group justify="end">
            <Button
              variant="light"
              type="submit"
              leftSection={<IconDisc size={18} />}
            >
              Salvar
            </Button>
          </Group>
        </Stack>
      </form>
    </CustomerFormProvider>
  );
}
