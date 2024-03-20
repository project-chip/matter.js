/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    AccessLevel,
    Attribute,
    Command,
    Event,
    EventPriority,
    TlvNoResponse,
    WritableAttribute,
    WritableFabricScopedAttribute,
} from "../../../src/cluster/Cluster.js";
import { ClusterType } from "../../../src/cluster/ClusterType.js";
import { TlvClusterId } from "../../../src/datatype/ClusterId.js";
import { TlvEndpointNumber } from "../../../src/datatype/EndpointNumber.js";
import { TlvFabricIndex } from "../../../src/datatype/FabricIndex.js";
import { TlvGroupId } from "../../../src/datatype/GroupId.js";
import { TlvNodeId } from "../../../src/datatype/NodeId.js";
import { BitFlag } from "../../../src/schema/BitmapSchema.js";
import { TlvArray } from "../../../src/tlv/TlvArray.js";
import { TlvNoArguments } from "../../../src/tlv/TlvNoArguments.js";
import { TlvUInt8 } from "../../../src/tlv/TlvNumber.js";
import { TlvField, TlvObject, TlvOptionalField } from "../../../src/tlv/TlvObject.js";
import { isObject } from "../../../src/util/Type.js";

// Metadata

export enum Feature {
    Extended = "Extended",
    Fancy = "Fancy",
    AbsolutelyFabulous = "AbsolutelyFabulous",
    BitterDisappointment = "BitterDisappointment",
    AlsoExtended = "AlsoExtended",
}

export const FEATURES = {
    extended: BitFlag(0),
    fancy: BitFlag(1),
    absolutelyFabulous: BitFlag(2),
    bitterDisappointment: BitFlag(3),
    alsoExtended: BitFlag(4),
};

export const METADATA = {
    id: 0x901,
    name: "MyCluster",
    revision: 2,
    features: FEATURES,
} as const;

export function expectMetadata(component: ClusterType) {
    expect(component.id).equal(METADATA.id);
    expect(component.name).equal(METADATA.name);
    expect(component.revision).equal(METADATA.revision);
    expect(component.features).equal(METADATA.features);
}

// First element set

export const ELEMENTS1 = {
    attributes: {
        attr1: WritableAttribute(1, TlvUInt8),
    },
    commands: {
        cmd1: Command(2, TlvNoArguments, 2, TlvNoResponse),
    },
    events: {
        ev1: Event(3, EventPriority.Debug, TlvNoArguments),
    },
};

export type Elements1ish = {
    attributes: {
        attr1: Attribute<any, any>;
    };
    commands: {
        cmd1: Command<any, any, any>;
    };
    events: {
        ev1: Event<any, any>;
    };
};

export function expectElements1(component: Elements1ish) {
    expect(component.attributes.attr1).exist;
    expect(component.attributes.attr1.id).equal(1);
    expect(component.commands.cmd1).exist;
    expect(component.commands.cmd1.requestId).equal(2);
    expect(component.events.ev1).exist;
    expect(component.events.ev1.id).equal(3);
}

// Second element set

export const ELEMENTS2 = {
    attributes: {
        attr2: Attribute(4, TlvUInt8),
    },
    commands: {
        cmd2: Command(
            5,
            TlvObject({ cmd2RequestField: TlvField(1, TlvUInt8) }),
            5,
            TlvObject({ cmd2ResponseField: TlvField(1, TlvUInt8) }),
        ),
    },
    events: {
        ev2: Event(6, EventPriority.Debug, TlvNoArguments),
    },
};

export type Elements2ish = {
    attributes: {
        attr2: Attribute<any, any>;
    };
    commands: {
        cmd2: Command<any, any, any>;
    };
    events: {
        ev2: Event<any, any>;
    };
};

export function expectElements2(component: Elements2ish) {
    expect(component.attributes.attr2).exist;
    expect(component.attributes.attr2.id).equal(4);
    expect(component.commands.cmd2).exist;
    expect(component.commands.cmd2.requestId).equal(5);
    expect(component.events.ev2).exist;
    expect(component.events.ev2.id).equal(6);
}

// Third element set

export const TlvTargetStruct = TlvObject({
    node: TlvOptionalField(1, TlvNodeId),
    group: TlvOptionalField(2, TlvGroupId),
    endpoint: TlvOptionalField(3, TlvEndpointNumber),
    cluster: TlvOptionalField(4, TlvClusterId),
    fabricIndex: TlvField(254, TlvFabricIndex),
});

export const ELEMENTS3 = {
    attributes: {
        wfs: WritableFabricScopedAttribute(7, TlvArray(TlvTargetStruct), {
            persistent: true,
            default: [],
            writeAcl: AccessLevel.Manage,
        }),
    },
};

// Composition

export const TestBase = ClusterType({
    ...METADATA,
    ...ELEMENTS1,
});

export const TestComposite = ClusterType({
    ...TestBase,

    extensions: [
        {
            flags: {
                extended: true,
            },
            component: ELEMENTS2,
        },
        {
            flags: {
                absolutelyFabulous: true,
                bitterDisappointment: true,
            },
            component: false,
        },
        {
            flags: {
                alsoExtended: true,
            },
            component: ELEMENTS3,
        },
    ],
});

// General

export function expectElementCounts(cluster: ClusterType, count: number) {
    expect(Object.keys(cluster.attributes).length).equal(count + 6);
    expect(Object.keys(cluster.commands).length).equal(count);
    expect(Object.keys(cluster.events).length).equal(count);
}

export function stripFunctions(value: any): any {
    if (typeof value === "function") {
        return undefined;
    }
    if (isObject(value)) {
        return Object.fromEntries(Object.entries(value).map(kv => [kv[0], stripFunctions(kv[1])]));
    }
    if (Array.isArray(value)) {
        return value.map(v => stripFunctions(v));
    }
    return value;
}
