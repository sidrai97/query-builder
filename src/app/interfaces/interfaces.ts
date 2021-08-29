export enum RuleType {
  rule = 'rule',
  ruleSet = 'ruleSet',
}
export enum OperandType {
  column = 'column',
  value = 'value',
}
export enum ConditionType {
  AND = 'AND',
  OR = 'OR',
}
export enum ColumnType {
  TEXT = 'TEXT',
  WHOLE_NUMBER = 'WHOLE_NUMBER',
  DECIMAL_NUMBER = 'DECIMAL_NUMBER',
  DATE_TIME = 'DATE_TIME',
}

export interface Rule {
  type: RuleType;
  operand1Type: OperandType;
  operand2Type: OperandType;
  operand1: string;
  operand2: string;
  operator: string;
}
export interface RuleSet {
  type: RuleType;
  condition: ConditionType;
  rules: (RuleSet | Rule)[];
}
export interface Conditional {
  expression: RuleSet;
  then: string;
  else: string;
}
export interface Column {
  name: string;
  type: ColumnType;
  format: string;
}
