[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [ColorControl](../README.md) / EnhancedMoveHueRequest

# Interface: EnhancedMoveHueRequest

Input to the ColorControl enhancedMoveHue command

## See

MatterSpecification.v11.Cluster § 3.2.11.16

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvEnhancedMoveHueRequest`](../README.md#tlvenhancedmovehuerequest)\>

## Properties

### moveMode

> **moveMode**: [`MoveMode`](../enumerations/MoveMode.md)

This field is identical to the MoveMode field of the MoveHue command of the Color Control cluster (see
sub-clause MoveHue Command). If the MoveMode field is equal to 0 (Stop), the Rate field shall be ignored.

#### See

MatterSpecification.v11.Cluster § 3.2.11.16.1

#### Inherited from

`TypeFromSchema.moveMode`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:591](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L591)

***

### optionsMask

> **optionsMask**: [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

#### Inherited from

`TypeFromSchema.optionsMask`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:603](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L603)

***

### optionsOverride

> **optionsOverride**: [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

#### Inherited from

`TypeFromSchema.optionsOverride`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:604](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L604)

***

### rate

> **rate**: `number`

The Rate field specifies the rate of movement in steps per second. A step is a change in the extended hue of
a device by one unit. If the MoveMode field is set to 1 (up) or 3 (down) and the Rate field has a value of
zero, the command has no effect and a response command shall be sent in response, with the status code set
to INVALID_COMMAND. If the MoveMode field is set to 0 (stop) the Rate field shall be ignored.

#### See

MatterSpecification.v11.Cluster § 3.2.11.16.2

#### Inherited from

`TypeFromSchema.rate`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:601](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L601)
