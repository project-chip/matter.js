import { Behavior } from "../../src/behavior/Behavior.js";
import { Part } from "../../src/endpoint/Part.js";
import { EndpointType } from "../../src/endpoint/type/EndpointType.js";
import { MockEndpoint } from "../behavior/mock-behavior.js";
import { MockNode } from "../node/mock-node.js";

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

const activeParts = new Set<MockPart<any>>();

// I think we can get by without this
// afterEach(async () => {
//     while (activeParts.size) {
//         await activeParts[Symbol.iterator]().next().value?.close();
//     }
// });

export class MockPart<T extends EndpointType> extends Part<T> {
    constructor(definition: T | Part.Configuration<T>);

    constructor(type: T, options: Part.Options<T>);

    constructor(definition: T | Part.Configuration<T>, options?: Part.Options<T>) {
        const config = Part.configurationFor(definition, options);

        if (!("owner" in config)) {
            config.owner = new MockNode();
        }

        super(config);

        activeParts.add(this);
    }

    override async close() {
        activeParts.delete(this);
        await super.close();
    }

    static create<const T extends EndpointType>(definition: T | Part.Configuration<T>): Promise<MockPart<T>>;

    static create<const T extends EndpointType>(type: T, options: Part.Configuration<T>): Promise<MockPart<T>>;

    static async create(definition: EndpointType | Part.Configuration, options?: Part.Options) {
        const part = new MockPart(Part.configurationFor(definition, options));
        return await part.construction;
    }

    static async createWith<T extends Behavior.Type>(type: T) {
        return await MockPart.create(MockEndpoint.with(type));
    }
}
