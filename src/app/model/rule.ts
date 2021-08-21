export class Rule {

    private _condition!: string;

    private _id!: string;

    private _dataType!: string;

    private _operator!: string;

    private _value!: Array<any>;

    private _rules!: Array<Rule>;

    // constructor();
    
    // constructor(condition: string, rules: Array<Rule>);

    // constructor(
    //     condition?: string,
    //     rules?: Array<Rule>,
    //     id?: string,
    //     dataType?: string,
    //     operator?: string,
    //     value?: Array<any>,
    //     ) {

    //     if(condition !== undefined) {
    //         this._condition = condition;
    //     }

    //     if(id != undefined) {
    //         this._id = id;
    //     }

    //     if(dataType !== undefined) {
    //         this._dataType = dataType;
    //     }
        
    //     if(operator !== undefined) {
    //         this._operator = operator;
    //     }
        
    //     if(value !== undefined) {
    //         this._value = value;
    //     }

    //     if(rules !== undefined) {
    //         this._rules = rules;
    //     }
    // }

    public get condition(): string {
        return this._condition;
    }

    public set condition(value: string) {
        this._condition = value;
    }

    public get id(): string {
        return this._id;
    }

    public set id(value: string) {
        this._id = value;
    }

    public get dataType(): string {
        return this._dataType;
    }

    public set dataType(value: string) {
        this._dataType = value;
    }

    public get operator(): string {
        return this._operator;
    }

    public set operator(value: string) {
        this._operator = value;
    }

    public get value(): Array<string> {
        return this._value;
    }

    public set value(value: Array<string>) {
        this._value = value;
    }

    public get rules(): Array<Rule> {
        return this._rules;
    }

    public set rules(value: Array<Rule>) {
        this._rules = value;
    }
}
