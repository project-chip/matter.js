[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [OnOff](../README.md) / OnWithTimedOffRequest

# Interface: OnWithTimedOffRequest

Input to the OnOff onWithTimedOff command

## See

MatterSpecification.v11.Cluster § 1.5.7.6

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvOnWithTimedOffRequest`](../README.md#tlvonwithtimedoffrequest)\>

## Properties

### offWaitTime

> **offWaitTime**: `null` \| `number`

The OffWaitTime field is used to adjust the value of the OffWaitTime attribute.

#### See

MatterSpecification.v11.Cluster § 1.5.7.6.3

#### Inherited from

`TypeFromSchema.offWaitTime`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OnOffCluster.d.ts:107

***

### onOffControl

> **onOffControl**: [`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>

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

> **acceptOnlyWhenOn**: [`BitFlag`](../../../../schema/README.md#bitflag)

##### reserved

> **reserved**: [`BitField`](../../../../schema/README.md#bitfield)

#### Inherited from

`TypeFromSchema.onOffControl`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OnOffCluster.d.ts:92

***

### onTime

> **onTime**: `null` \| `number`

The OnTime field is used to adjust the value of the OnTime attribute.

#### See

MatterSpecification.v11.Cluster § 1.5.7.6.2

#### Inherited from

`TypeFromSchema.onTime`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OnOffCluster.d.ts:101
