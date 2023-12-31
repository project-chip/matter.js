import { Behavior } from "../../src/behavior/Behavior.js";
import { Part } from "../../src/endpoint/Part.js";
import { PartOwner } from "../../src/endpoint/part/PartOwner.js";
import { EndpointType } from "../../src/endpoint/type/EndpointType.js";
import { MockContext, MockEndpoint, MockOwner } from "../behavior/behavior-mocks.js";

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
    constructor(type: T, options?: MockPart.Options<T>) {
        super(type, options);

        let owner;
        if (options && "owner" in options) {
            if (options.owner !== undefined) {
                owner = options.owner;
            }
        } else {
            owner = new MockOwner();
        }

        // Testing logic is synchronous so we can safely initialize here
        if (owner) {
            this.owner = owner;
            this.initialize();
        }
    }

    get mockAgent() {
        return this.getAgent(new MockContext());
    }

    static createBehavior<T extends Behavior.Type>(type: T) {
        const part = new MockPart(MockEndpoint.with(type));
        return part.mockAgent.get(type);
    }
}

export namespace MockPart {
    export type Options<T extends EndpointType> =
        & Part.Options<T>
        & {
            owner?: PartOwner;
        };
}
