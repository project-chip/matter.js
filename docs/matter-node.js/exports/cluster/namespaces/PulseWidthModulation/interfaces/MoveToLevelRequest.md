[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [PulseWidthModulation](../README.md) / MoveToLevelRequest

# Interface: MoveToLevelRequest

Input to the PulseWidthModulation moveToLevel command

## See

MatterSpecification.v11.Cluster § 1.6.6.1

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvMoveToLevelRequest`](../README.md#tlvmovetolevelrequest)\>

## Properties

### level

> **level**: `number`

#### Inherited from

`TypeFromSchema.level`

#### Source

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:43

***

### optionsMask

> **optionsMask**: [`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### coupleColorTempToLevel

> **coupleColorTempToLevel**: [`BitFlag`](../../../../schema/README.md#bitflag)

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../schema/README.md#bitflag)

#### Inherited from

`TypeFromSchema.optionsMask`

#### Source

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:45

***

### optionsOverride

> **optionsOverride**: [`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### coupleColorTempToLevel

> **coupleColorTempToLevel**: [`BitFlag`](../../../../schema/README.md#bitflag)

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../schema/README.md#bitflag)

#### Inherited from

`TypeFromSchema.optionsOverride`

#### Source

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:49

***

### transitionTime

> **transitionTime**: `null` \| `number`

#### Inherited from

`TypeFromSchema.transitionTime`

#### Source

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:44
