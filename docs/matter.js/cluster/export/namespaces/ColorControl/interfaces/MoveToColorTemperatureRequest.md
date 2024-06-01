[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [ColorControl](../README.md) / MoveToColorTemperatureRequest

# Interface: MoveToColorTemperatureRequest

Input to the ColorControl moveToColorTemperature command

## See

MatterSpecification.v11.Cluster § 3.2.11.14

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvMoveToColorTemperatureRequest`](../README.md#tlvmovetocolortemperaturerequest)\>

## Properties

### colorTemperatureMireds

> **colorTemperatureMireds**: `number`

#### Inherited from

`TypeFromSchema.colorTemperatureMireds`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:387](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L387)

***

### optionsMask

> **optionsMask**: [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

#### Inherited from

`TypeFromSchema.optionsMask`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:389](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L389)

***

### optionsOverride

> **optionsOverride**: [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

#### Inherited from

`TypeFromSchema.optionsOverride`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:390](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L390)

***

### transitionTime

> **transitionTime**: `number`

#### Inherited from

`TypeFromSchema.transitionTime`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:388](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L388)
