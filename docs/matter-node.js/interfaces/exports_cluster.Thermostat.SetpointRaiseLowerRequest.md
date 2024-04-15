[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [Thermostat](../modules/exports_cluster.Thermostat.md) / SetpointRaiseLowerRequest

# Interface: SetpointRaiseLowerRequest

[exports/cluster](../modules/exports_cluster.md).[Thermostat](../modules/exports_cluster.Thermostat.md).SetpointRaiseLowerRequest

Input to the Thermostat setpointRaiseLower command

**`See`**

MatterSpecification.v11.Cluster § 4.3.8

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvSetpointRaiseLowerRequest`](../modules/exports_cluster.Thermostat.md#tlvsetpointraiselowerrequest)\>

  ↳ **`SetpointRaiseLowerRequest`**

## Table of contents

### Properties

- [amount](exports_cluster.Thermostat.SetpointRaiseLowerRequest.md#amount)
- [mode](exports_cluster.Thermostat.SetpointRaiseLowerRequest.md#mode)

## Properties

### amount

• **amount**: `number`

#### Inherited from

TypeFromSchema.amount

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:521

___

### mode

• **mode**: [`SetpointAdjustMode`](../enums/exports_cluster.Thermostat.SetpointAdjustMode.md)

#### Inherited from

TypeFromSchema.mode

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:520
