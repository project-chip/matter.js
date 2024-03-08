import { Behavior } from "../../src/behavior/Behavior.js";
import { Endpoint } from "../../src/endpoint/Endpoint.js";
import { EndpointType } from "../../src/endpoint/type/EndpointType.js";
import { MockEndpointType } from "../behavior/mock-behavior.js";
import { MockServerNode } from "../node/mock-server-node.js";

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

const activeParts = new Set<MockEndpoint<any>>();

// I think we can get by without this
// afterEach(async () => {
//     while (activeParts.size) {
//         await activeParts[Symbol.iterator]().next().value?.close();
//     }
// });

export class MockEndpoint<T extends EndpointType> extends Endpoint<T> {
    constructor(definition: T | Endpoint.Configuration<T>);

    constructor(type: T, options: Endpoint.Options<T>);

    constructor(definition: T | Endpoint.Configuration<T>, options?: Endpoint.Options<T>) {
        const config = Endpoint.configurationFor(definition, options);

        if (!("owner" in config)) {
            config.owner = new MockServerNode();
        }

        super(config);

        activeParts.add(this);
    }

    override async close() {
        activeParts.delete(this);
        await super.close();
    }

    static create<const T extends EndpointType>(definition: T | Endpoint.Configuration<T>): Promise<MockEndpoint<T>>;

    static create<const T extends EndpointType>(type: T, options: Endpoint.Configuration<T>): Promise<MockEndpoint<T>>;

    static async create(definition: EndpointType | Endpoint.Configuration, options?: Endpoint.Options) {
        const endpoint = new MockEndpoint(Endpoint.configurationFor(definition, options));
        return await endpoint.construction;
    }

    static async createWith<T extends Behavior.Type>(type: T) {
        return await MockEndpoint.create(MockEndpointType.with(type));
    }
}
