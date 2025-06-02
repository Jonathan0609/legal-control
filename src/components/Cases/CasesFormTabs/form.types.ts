export enum CaseStatus {
  Open = 'OPEN',
  InProgress = 'IN_PROGRESS',
  Closed = 'CLOSED',
  Archived = 'ARCHIVED',
}

export const caseStatusLabel = {
  [CaseStatus.Open]: 'Aberto',
  [CaseStatus.InProgress]: 'Em progresso',
  [CaseStatus.Archived]: 'Arquivado',
  [CaseStatus.Closed]: 'Fechado',
};

export enum CaseType {
  Consultive = 'CONSULTIVE',
  Litigation = 'LITIGATION',
  Compliance = 'COMPLIANCE',
  Extrajucicial = 'EXTRAJUDICIAL',
  Other = 'OTHER',
}

export const caseTypeLabel = {
  [CaseType.Consultive]: 'Consultivo',
  [CaseType.Litigation]: 'Litígio',
  [CaseType.Compliance]: 'Conformidade',
  [CaseType.Extrajucicial]: 'Extra judicial',
  [CaseType.Other]: 'Outro',
};

export enum ProcessInstance {
  First = 'FIRST',
  Second = 'SECOND',
  Superior = 'SUPERIOR',
  Supreme = 'SUPREME',
}

export const processInstanceLabel = {
  [ProcessInstance.First]: '1st',
  [ProcessInstance.Second]: '2st',
  [ProcessInstance.Superior]: 'Superior',
  [ProcessInstance.Supreme]: 'Suprema',
};

export enum ProcessStatus {
  Active = 'ACTIVE',
  Suspended = 'SUSPENDED',
  Archived = 'ARCHIVED',
  Closed = 'CLOSED',
}

export const processStatusLabel = {
  [ProcessStatus.Active]: 'Ativo',
  [ProcessStatus.Suspended]: 'Suspenso',
  [ProcessStatus.Archived]: 'Arquivado',
  [ProcessStatus.Closed]: 'Fechado',
};

export enum ProcessType {
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

export const processTypeLabel: Record<ProcessType, string> = {
  [ProcessType.CivilLitigation]: 'Ações cíveis',
  [ProcessType.CriminalDefense]: 'Defesa criminal',
  [ProcessType.FamilyLaw]: 'Direito de família',
  [ProcessType.CorporateLaw]: 'Direito empresarial',
  [ProcessType.LaborLaw]: 'Direito trabalhista',
  [ProcessType.TaxLaw]: 'Direito tributário',
  [ProcessType.RealEstateLaw]: 'Direito imobiliário',
  [ProcessType.ImmigrationLaw]: 'Direito de imigração',
  [ProcessType.IntellectualProperty]: 'Propriedade intelectual',
  [ProcessType.ContractDrafting]: 'Elaboração de contratos',
  [ProcessType.LegalConsulting]: 'Consultoria jurídica',
  [ProcessType.RegulatoryCompliance]: 'Conformidade regulatória',
  [ProcessType.ArbitrationOrMediation]: 'Arbitragem ou mediação',
};

export enum ProcessTag {
  Urgent = 'URGENT',
  Confidential = 'CONFIDENTIAL',
  Vip = 'VIP',
  ProBono = 'PRO_BONO',
  Recurrent = 'RECURRENT',
  Strategic = 'STRATEGIC',
  Compliance = 'COMPLIANCE',
  Other = 'OTHER',
}

export interface Process {
  number: string; // Número CNJ
  jurisdiction: string; // Vara ou comarca
  judgeName?: string;
  status: ProcessStatus | null;
  court: string; // Nome do tribunal
  instance: ProcessInstance | null; // Instância judicial
  type: ProcessType | null;
  startDate: Date | null;
  endDate?: Date | null;
}

export interface CasesFormValues {
  title: string; // Ex: "Revisão Contratual - Cliente XPTO"
  customerId: string;
  lawyerId: string;
  coLawyerIds?: string[];
  type: CaseType | null;
  status: CaseStatus | null;
  description?: string;
  tags?: ProcessTag[];

  // Relações
  processes?: Process[];
}
