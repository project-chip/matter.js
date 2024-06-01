[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [LevelControl](../README.md) / StopWithOnOffRequest

# Interface: StopWithOnOffRequest

Input to the LevelControl stopWithOnOff command

## See

MatterSpecification.v11.Cluster § 1.6.6

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvStopWithOnOffRequest`](../README.md#tlvstopwithonoffrequest)\>

## Properties

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

packages/matter.js/dist/esm/cluster/definitions/LevelControlCluster.d.ts:234

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

packages/matter.js/dist/esm/cluster/definitions/LevelControlCluster.d.ts:238
