import { Injectable } from '@angular/core';
import { Rule, RuleSet, RuleType, ConditionType, OperandType, Conditional } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class RulesService {

  constructor() { }

  newConditional(): Conditional {
    return {
      expression: this.newRuleSet(),
      then: '' ,
      else: '',
    };
  }

  newRuleSet(): RuleSet {
    return {
      type: RuleType.ruleSet,
      condition: ConditionType.AND,
      rules: [],
    };
  }

  newRule(): Rule {
    return {
      type: RuleType.rule,
      operand1Type: OperandType.column,
      operand2Type: OperandType.value,
      operand1: '',
      operand2: '',
      operator: '',
    };
  }
}
