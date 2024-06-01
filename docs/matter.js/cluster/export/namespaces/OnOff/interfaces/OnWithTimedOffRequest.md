[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [OnOff](../README.md) / OnWithTimedOffRequest

# Interface: OnWithTimedOffRequest

Input to the OnOff onWithTimedOff command

## See

MatterSpecification.v11.Cluster § 1.5.7.6

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvOnWithTimedOffRequest`](../README.md#tlvonwithtimedoffrequest)\>

## Properties

### offWaitTime

> **offWaitTime**: `null` \| `number`

The OffWaitTime field is used to adjust the value of the OffWaitTime attribute.

#### See

MatterSpecification.v11.Cluster § 1.5.7.6.3

#### Inherited from

`TypeFromSchema.offWaitTime`

#### Source

[packages/matter.js/src/cluster/definitions/OnOffCluster.ts:119](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OnOffCluster.ts#L119)

***

### onOffControl

> **onOffControl**: [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

The OnOffControl field contains information on how the server is to be operated. This field shall be
formatted as illustrated in Format of the OnOffControl Field of the OnWithTimedOff Command.

The AcceptOnlyWhenOn sub-field is 1 bit in length and specifies whether the OnWithTimedOff command is to be
processed unconditionally or only when the OnOff attribute is equal to TRUE. If this sub-field is set to 1,
the OnWithTimedOff command shall only be accepted if the OnOff attribute is equal to TRUE. If this sub-field
is set to 0, the OnWithTimedOff command shall be processed unconditionally.

#### See

MatterSpecification.v11.Cluster § 1.5.7.6.1

#### Type declaration

##### acceptOnlyWhenOn

> **acceptOnlyWhenOn**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

##### reserved

> **reserved**: [`BitField`](../../../../../schema/export/README.md#bitfield)

#### Inherited from

`TypeFromSchema.onOffControl`

#### Source

[packages/matter.js/src/cluster/definitions/OnOffCluster.ts:105](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OnOffCluster.ts#L105)

***

### onTime

> **onTime**: `null` \| `number`

The OnTime field is used to adjust the value of the OnTime attribute.

#### See

MatterSpecification.v11.Cluster § 1.5.7.6.2

#### Inherited from

`TypeFromSchema.onTime`

#### Source

[packages/matter.js/src/cluster/definitions/OnOffCluster.ts:112](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OnOffCluster.ts#L112)
