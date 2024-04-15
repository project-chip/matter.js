[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [OnOff](../modules/cluster_export.OnOff.md) / OnWithTimedOffRequest

# Interface: OnWithTimedOffRequest

[cluster/export](../modules/cluster_export.md).[OnOff](../modules/cluster_export.OnOff.md).OnWithTimedOffRequest

Input to the OnOff onWithTimedOff command

**`See`**

MatterSpecification.v11.Cluster § 1.5.7.6

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvOnWithTimedOffRequest`](../modules/cluster_export.OnOff.md#tlvonwithtimedoffrequest)\>

  ↳ **`OnWithTimedOffRequest`**

## Table of contents

### Properties

- [offWaitTime](cluster_export.OnOff.OnWithTimedOffRequest.md#offwaittime)
- [onOffControl](cluster_export.OnOff.OnWithTimedOffRequest.md#onoffcontrol)
- [onTime](cluster_export.OnOff.OnWithTimedOffRequest.md#ontime)

## Properties

### offWaitTime

• **offWaitTime**: ``null`` \| `number`

The OffWaitTime field is used to adjust the value of the OffWaitTime attribute.

**`See`**

MatterSpecification.v11.Cluster § 1.5.7.6.3

#### Inherited from

TypeFromSchema.offWaitTime

#### Defined in

[packages/matter.js/src/cluster/definitions/OnOffCluster.ts:119](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OnOffCluster.ts#L119)

___

### onOffControl

• **onOffControl**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `acceptOnlyWhenOn`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `reserved`: [`BitField`](../modules/schema_export.md#bitfield)  }\>

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

[packages/matter.js/src/cluster/definitions/OnOffCluster.ts:105](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OnOffCluster.ts#L105)

___

### onTime

• **onTime**: ``null`` \| `number`

The OnTime field is used to adjust the value of the OnTime attribute.

**`See`**

MatterSpecification.v11.Cluster § 1.5.7.6.2

#### Inherited from

TypeFromSchema.onTime

#### Defined in

[packages/matter.js/src/cluster/definitions/OnOffCluster.ts:112](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OnOffCluster.ts#L112)
