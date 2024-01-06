import { Behavior } from "../../src/behavior/Behavior.js";
import { Part } from "../../src/endpoint/Part.js";
import { EndpointType } from "../../src/endpoint/type/EndpointType.js";
import { AsyncConstruction } from "../../src/util/AsyncConstruction.js";
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

        super(definition, options);

        const partConstruction = this._construction;
        this._construction = AsyncConstruction(this, async () => {
            await partConstruction;
            if (!options) {
                options = {};
            }
            if (!("owner" in options)) {
                options.owner = new MockOwner();
                await (options.owner as MockOwner).construction;
            }
        });
    }

    get mockAgent() {
        return this.getAgent(new MockContext());
    }

    static async createBehavior<T extends Behavior.Type>(type: T) {
        const part = new MockPart(MockEndpoint.with(type));
        await part.construction;
        return part.mockAgent.get(type);
    }
}
