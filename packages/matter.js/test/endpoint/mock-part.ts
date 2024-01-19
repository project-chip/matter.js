import { Behavior } from "../../src/behavior/Behavior.js";
import { Agent } from "../../src/endpoint/Agent.js";
import { Part } from "../../src/endpoint/Part.js";
import { EndpointType } from "../../src/endpoint/type/EndpointType.js";
import { MockContext, MockEndpoint } from "../behavior/mock-behavior.js";
import { MockOwner } from "./mock-part-owner.js";

export class MockBehavior1 extends Behavior {
    static override readonly id = "one";
}

export namespace MockBehavior1 {
    export class State extends Behavior.State {
        b1e = "foo";
        b1f = "bar";
    }
}

export class MockBehavior2 extends Behavior {
    static override readonly id = "two";
}

export namespace MockBehavior2 {
    export class State extends Behavior.State {
        b2e = "biz";
        b2f = "baz";
    }
}

export class MockPart<T extends EndpointType> extends Part<T> {
    constructor(definition: T | Part.Configuration<T>);

    constructor(type: T, options: Part.Options<T>);

    constructor(definition: T | Part.Configuration<T>, options?: Part.Options<T>) {
        if (Part.isConfiguration(definition)) {
            options = definition;
            definition = definition.type;
        }
        if (!options) {
            options = {};
        }
        if (!("owner" in options)) {
            options.owner = new MockOwner();
        }

        super(definition, options);
    }

    static create<const T extends EndpointType>(definition: T | Part.Configuration<T>): Promise<Agent.Instance<T["behaviors"]>>;

    static create<const T extends EndpointType>(type: T, options: Part.Options<T>): Promise<Agent.Instance<T["behaviors"]>>;

    static async create(definition: EndpointType | Part.Configuration<EndpointType>, options?: Part.Options) {
        const part = new MockPart(definition as any, options as any);
        await part.construction;
        return part.agent;
    }

    static async createBehavior<T extends Behavior.Type>(type: T) {
        const part = (await MockPart.create(MockEndpoint.with(type))).part.getAgent(new MockContext());
        return part.get(type);
    }
}
