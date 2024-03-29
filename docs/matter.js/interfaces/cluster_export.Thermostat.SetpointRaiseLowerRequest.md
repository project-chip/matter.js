[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Thermostat](../modules/cluster_export.Thermostat.md) / SetpointRaiseLowerRequest

# Interface: SetpointRaiseLowerRequest

[cluster/export](../modules/cluster_export.md).[Thermostat](../modules/cluster_export.Thermostat.md).SetpointRaiseLowerRequest

Input to the Thermostat setpointRaiseLower command

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.3.8

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvSetpointRaiseLowerRequest`](../modules/cluster_export.Thermostat.md#tlvsetpointraiselowerrequest)\>

  ↳ **`SetpointRaiseLowerRequest`**

## Table of contents

### Properties

- [amount](cluster_export.Thermostat.SetpointRaiseLowerRequest.md#amount)
- [mode](cluster_export.Thermostat.SetpointRaiseLowerRequest.md#mode)

## Properties

### amount

• **amount**: `number`

#### Inherited from

TypeFromSchema.amount

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:546](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L546)

___

### mode

• **mode**: [`SetpointAdjustMode`](../enums/cluster_export.Thermostat.SetpointAdjustMode.md)

#### Inherited from

TypeFromSchema.mode

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:545](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L545)
