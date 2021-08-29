import { Component, Input, OnInit } from '@angular/core';
import { Rule, RuleSet, RuleType, ConditionType, OperandType, Conditional, Column, ColumnType } from '../interfaces/interfaces';
import { RulesService } from '../services/rules.service';

@Component({
  selector: 'app-rule-builder',
  templateUrl: './rule-builder.component.html',
  styleUrls: ['./rule-builder.component.scss']
})
export class RuleBuilderComponent implements OnInit {

  @Input() rules?: (RuleSet | Rule)[];
  @Input() index?: number;
  @Input() expression: RuleSet;

  conditions: ConditionType[] = [ConditionType.AND, ConditionType.OR];
  ruleTypes: RuleType[] = [RuleType.rule, RuleType.ruleSet];
  operandTypes: OperandType[] = [OperandType.column, OperandType.value];
  columnTypes: ColumnType[] = [ColumnType.TEXT, ColumnType.WHOLE_NUMBER, ColumnType.DECIMAL_NUMBER, ColumnType.DATE_TIME];

  columns: Column[] = [
    {name: 'Account', type: ColumnType.TEXT, format: ''},
    {name: 'TradeId', type: ColumnType.WHOLE_NUMBER, format: ''},
    {name: 'TradeDate', type: ColumnType.DATE_TIME, format: 'dd/MM/yyyy'},
    {name: 'Amount', type: ColumnType.DECIMAL_NUMBER, format: ''},
    {name: 'Counterparty', type: ColumnType.TEXT, format: ''},
  ];

  stringOperators: string[] = ['EQUALS', 'NOT_EQUALS', 'IN', 'NOT_IN', 'CONTAINS', 'NOT_CONTAINS', 'LIKE', 'NOT_LIKE', 'STARTS_WITH',
    'NOT_STARTS_WITH', 'ENDS_WITH', 'NOT_ENDS_WITH'];
  numberOperators: string[] = ['EQUAL', 'NOT_EQUAL', 'GREATER_THAN', 'GREATER_THAN_EQUAL_TO', 'LESS_THAN', 'LESS_THAN_EQUAL_TO'];
  dateOperators: string[] = ['EQUAL', 'NOT_EQUAL', 'GREATER_THAN', 'LESS_THAN'];

  constructor(private rulesService: RulesService) { }

  ngOnInit(): void {
  }

  addNewRule() {
    this.expression.rules.push(this.rulesService.newRule());
  }

  addNewRuleSet() {
    this.expression.rules.push(this.rulesService.newRuleSet());
  }

  removeRule(index: number) {
    this.expression.rules.splice(index, 1);
  }

  removeRuleSet() {
    this.rules.splice(this.index, 1);
  }

  getOperatorType(rule: Rule): string[] {
    if (rule.operand1Type === OperandType.column && rule.operand1.startsWith('$')) {
      return this.getOperatorsList(this.columns.filter(item => ('$' + item.name) === rule.operand1)[0].type);
    }
    return this.stringOperators;
  }

  getOperatorsList(type: ColumnType): string[] {
    switch (type) {
      case ColumnType.TEXT: return this.stringOperators;
      case ColumnType.WHOLE_NUMBER:
      case ColumnType.DECIMAL_NUMBER: return this.numberOperators;
      case ColumnType.DATE_TIME: return this.dateOperators;
    }
  }

  operandTypeChange(rule: Rule) {
    rule.operand1 = '';
    rule.operator = '';
  }

  operandChange(rule: Rule) {
    rule.operator = '';
  }

}
