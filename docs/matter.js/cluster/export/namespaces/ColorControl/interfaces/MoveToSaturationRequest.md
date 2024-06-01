[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [ColorControl](../README.md) / MoveToSaturationRequest

# Interface: MoveToSaturationRequest

Input to the ColorControl moveToSaturation command

## See

MatterSpecification.v11.Cluster § 3.2.11.7

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvMoveToSaturationRequest`](../README.md#tlvmovetosaturationrequest)\>

## Properties

### optionsMask

> **optionsMask**: [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

#### Inherited from

`TypeFromSchema.optionsMask`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:191](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L191)

***

### optionsOverride

> **optionsOverride**: [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

#### Inherited from

`TypeFromSchema.optionsOverride`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:192](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L192)

***

### saturation

> **saturation**: `number`

#### Inherited from

`TypeFromSchema.saturation`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:189](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L189)

***

### transitionTime

> **transitionTime**: `number`

#### Inherited from

`TypeFromSchema.transitionTime`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:190](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L190)
