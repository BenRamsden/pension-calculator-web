import dayjs from "dayjs";

const {
  VITE_DEFAULT_DOB,
  VITE_DEFAULT_GENDER,
  VITE_DEFAULT_SALARY,
  VITE_DEFAULT_EMPLOYEE_CONTRIBUTION,
  VITE_DEFAULT_EMPLOYER_CONTRIBUTION,
  VITE_DEFAULT_PLANNED_RETIREMENT_AGE,
  VITE_DEFAULT_CURRENT_POT_VALUE,
  VITE_DEFAULT_LUMP_SUM_PCT,
  VITE_DEFAULT_ADVANCED_MODE,
  VITE_DEFAULT_YEARLY_INTEREST_PCT,
  VITE_DEFAULT_YEARLY_PENSION_CHARGES_PCT,
  VITE_DEFAULT_YEARLY_INFLATION_PCT,
  VITE_DEFAULT_STATE_PENSION_AGE,
  VITE_DEFAULT_STATE_PENSION_WEEKLY_AMOUNT,
  VITE_DEFAULT_SALARY_PROJECTION_ENABLED,
  VITE_DEFAULT_EARLY_DRAW_DOWN_BIAS_PCT,
} = import.meta.env;

// OPTIONAL (.env.development)
export const DEFAULT_DOB = VITE_DEFAULT_DOB ? dayjs(VITE_DEFAULT_DOB) : null;
export const DEFAULT_GENDER = VITE_DEFAULT_GENDER ?? null;
export const DEFAULT_SALARY = VITE_DEFAULT_SALARY
  ? parseInt(VITE_DEFAULT_SALARY)
  : null;
export const DEFAULT_EMPLOYEE_CONTRIBUTION = VITE_DEFAULT_EMPLOYEE_CONTRIBUTION
  ? parseInt(VITE_DEFAULT_EMPLOYEE_CONTRIBUTION)
  : null;
export const DEFAULT_EMPLOYER_CONTRIBUTION = VITE_DEFAULT_EMPLOYER_CONTRIBUTION
  ? parseInt(VITE_DEFAULT_EMPLOYER_CONTRIBUTION)
  : null;
export const DEFAULT_PLANNED_RETIREMENT_AGE =
  VITE_DEFAULT_PLANNED_RETIREMENT_AGE
    ? parseInt(VITE_DEFAULT_PLANNED_RETIREMENT_AGE)
    : null;
export const DEFAULT_CURRENT_POT_VALUE = VITE_DEFAULT_CURRENT_POT_VALUE
  ? parseInt(VITE_DEFAULT_CURRENT_POT_VALUE)
  : null;
export const DEFAULT_ADVANCED_MODE = VITE_DEFAULT_ADVANCED_MODE
  ? JSON.parse(VITE_DEFAULT_ADVANCED_MODE)
  : false;
export const DEFAULT_SALARY_PROJECTION_ENABLED =
  VITE_DEFAULT_SALARY_PROJECTION_ENABLED
    ? JSON.parse(VITE_DEFAULT_SALARY_PROJECTION_ENABLED)
    : false;

// REQUIRED (.env)
export const DEFAULT_LUMP_SUM_PCT = VITE_DEFAULT_LUMP_SUM_PCT
  ? parseFloat(VITE_DEFAULT_LUMP_SUM_PCT)
  : 0;
export const DEFAULT_YEARLY_INTEREST_PCT = VITE_DEFAULT_YEARLY_INTEREST_PCT
  ? parseFloat(VITE_DEFAULT_YEARLY_INTEREST_PCT)
  : 0;
export const DEFAULT_YEARLY_PENSION_CHARGES_PCT =
  VITE_DEFAULT_YEARLY_PENSION_CHARGES_PCT
    ? parseFloat(VITE_DEFAULT_YEARLY_PENSION_CHARGES_PCT)
    : 0;
export const DEFAULT_YEARLY_INFLATION_PCT = VITE_DEFAULT_YEARLY_INFLATION_PCT
  ? parseFloat(VITE_DEFAULT_YEARLY_INFLATION_PCT)
  : 0;
export const DEFAULT_STATE_PENSION_AGE = VITE_DEFAULT_STATE_PENSION_AGE
  ? parseInt(VITE_DEFAULT_STATE_PENSION_AGE)
  : 0;
export const DEFAULT_STATE_PENSION_WEEKLY_AMOUNT =
  VITE_DEFAULT_STATE_PENSION_WEEKLY_AMOUNT
    ? parseFloat(VITE_DEFAULT_STATE_PENSION_WEEKLY_AMOUNT)
    : 0;
export const DEFAULT_EARLY_DRAW_DOWN_BIAS_PCT =
  VITE_DEFAULT_EARLY_DRAW_DOWN_BIAS_PCT
    ? parseInt(VITE_DEFAULT_EARLY_DRAW_DOWN_BIAS_PCT)
    : 0;
