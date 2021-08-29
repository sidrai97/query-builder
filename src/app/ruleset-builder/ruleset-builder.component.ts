import { Component, OnInit } from '@angular/core';
import { Rule, RuleSet, RuleType, ConditionType, OperandType, Conditional } from '../interfaces/interfaces';
import { RulesService } from '../services/rules.service';

@Component({
  selector: 'app-ruleset-builder',
  templateUrl: './ruleset-builder.component.html',
  styleUrls: ['./ruleset-builder.component.scss']
})
export class RulesetBuilderComponent implements OnInit {

  conditionals: Conditional[] = [];

  constructor(private rulesService: RulesService) { }

  ngOnInit(): void {
    this.addNewConditional();
  }

  addNewConditional() {
    this.conditionals.push(this.rulesService.newConditional());
  }

  removeConditional(index: number) {
    this.conditionals.splice(index, 1);
  }
}
