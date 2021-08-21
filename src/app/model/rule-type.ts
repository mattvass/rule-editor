import { Rule } from "./rule";

export class RuleType {
    private _id!: string;

    private _name!: string;

    private _subType!: string;

    private _description!: string;

    private _applicabilityRule!: Rule;

    public get id(): string {
        return this._id;
    }

    public set id(value: string) {
        this._id = value;
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get subType(): string {
        return this._subType;
    }

    public set subType(value: string) {
        this._subType = value;
    }

    public get description(): string {
        return this._description;
    }

    public set description(value: string) {
        this._description = value;
    }

    public get applicabilityRule(): Rule {
        return this._applicabilityRule;
    }

    public set applicabilityRule(value: Rule) {
        this._applicabilityRule = value;
    }
}
