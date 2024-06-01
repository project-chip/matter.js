[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [Thermostat](../README.md) / SetpointRaiseLowerRequest

# Interface: SetpointRaiseLowerRequest

Input to the Thermostat setpointRaiseLower command

## See

MatterSpecification.v11.Cluster § 4.3.8

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvSetpointRaiseLowerRequest`](../README.md#tlvsetpointraiselowerrequest)\>

## Properties

### amount

> **amount**: `number`

#### Inherited from

`TypeFromSchema.amount`

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:545](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L545)

***

### mode

> **mode**: [`SetpointAdjustMode`](../enumerations/SetpointAdjustMode.md)

#### Inherited from

`TypeFromSchema.mode`

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:544](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L544)
