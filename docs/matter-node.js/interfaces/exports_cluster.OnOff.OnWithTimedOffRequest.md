[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [OnOff](../modules/exports_cluster.OnOff.md) / OnWithTimedOffRequest

# Interface: OnWithTimedOffRequest

[exports/cluster](../modules/exports_cluster.md).[OnOff](../modules/exports_cluster.OnOff.md).OnWithTimedOffRequest

Input to the OnOff onWithTimedOff command

**`See`**

MatterSpecification.v11.Cluster § 1.5.7.6

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvOnWithTimedOffRequest`](../modules/exports_cluster.OnOff.md#tlvonwithtimedoffrequest)\>

  ↳ **`OnWithTimedOffRequest`**

## Table of contents

### Properties

- [offWaitTime](exports_cluster.OnOff.OnWithTimedOffRequest.md#offwaittime)
- [onOffControl](exports_cluster.OnOff.OnWithTimedOffRequest.md#onoffcontrol)
- [onTime](exports_cluster.OnOff.OnWithTimedOffRequest.md#ontime)

## Properties

### offWaitTime

• **offWaitTime**: ``null`` \| `number`

The OffWaitTime field is used to adjust the value of the OffWaitTime attribute.

**`See`**

MatterSpecification.v11.Cluster § 1.5.7.6.3

#### Inherited from

TypeFromSchema.offWaitTime

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OnOffCluster.d.ts:107

___

### onOffControl

• **onOffControl**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `acceptOnlyWhenOn`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `reserved`: [`BitField`](../modules/exports_schema.md#bitfield)  }\>

The OnOffControl field contains information on how the server is to be operated. This field shall be
formatted as illustrated in Format of the OnOffControl Field of the OnWithTimedOff Command.

The AcceptOnlyWhenOn sub-field is 1 bit in length and specifies whether the OnWithTimedOff command is to be
processed unconditionally or only when the OnOff attribute is equal to TRUE. If this sub-field is set to 1,
the OnWithTimedOff command shall only be accepted if the OnOff attribute is equal to TRUE. If this sub-field
is set to 0, the OnWithTimedOff command shall be processed unconditionally.

**`See`**

MatterSpecification.v11.Cluster § 1.5.7.6.1

#### Inherited from

TypeFromSchema.onOffControl

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OnOffCluster.d.ts:92

___

### onTime

• **onTime**: ``null`` \| `number`

The OnTime field is used to adjust the value of the OnTime attribute.

**`See`**

MatterSpecification.v11.Cluster § 1.5.7.6.2

#### Inherited from

TypeFromSchema.onTime

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OnOffCluster.d.ts:101
