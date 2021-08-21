import { Component, OnInit } from '@angular/core';
import { Rule } from '../model/rule';
import { RuleType } from '../model/rule-type';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public getRule(): RuleType {
    let ruleType: RuleType = <RuleType>JSON.parse(JSON.stringify(this.rules()));
    return ruleType;
  }

  public getKeys(obj: any) : Array<any> {
    return Object.keys(obj);
  }
  public rules(): any {
    return {
      "id": "12345",
      "name": "test rule",
      "subType": "subtype",
      "description": "test description",
      "applicabilityRule": {
        "condition": "AND",
        "rules": [
          {
            "id": "1",
            "dataType": "String",
            "operator": "EQUALS",
            "value": ["SomeValue"]
          },
          {
            "id": "2",
            "dataType": "String",
            "operator": "IN",
            "value": ["SomeValue", "SomeOtherValue"]
          },
          {
            "id": "3",
            "dataType": "String",
            "operator": "NOT_EQUALS",
            "value": ["SomeOtherValue"]
          }
        ]
      }

    };
  }

}
