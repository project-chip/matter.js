[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [Thermostat](../modules/exports_cluster.Thermostat.md) / GetWeeklyScheduleRequest

# Interface: GetWeeklyScheduleRequest

[exports/cluster](../modules/exports_cluster.md).[Thermostat](../modules/exports_cluster.Thermostat.md).GetWeeklyScheduleRequest

Input to the Thermostat getWeeklySchedule command

**`See`**

MatterSpecification.v11.Cluster § 4.3.8

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvGetWeeklyScheduleRequest`](../modules/exports_cluster.Thermostat.md#tlvgetweeklyschedulerequest)\>

  ↳ **`GetWeeklyScheduleRequest`**

## Table of contents

### Properties

- [daysToReturn](exports_cluster.Thermostat.GetWeeklyScheduleRequest.md#daystoreturn)
- [modeToReturn](exports_cluster.Thermostat.GetWeeklyScheduleRequest.md#modetoreturn)

## Properties

### daysToReturn

• **daysToReturn**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `away`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `friday`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `monday`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `saturday`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `sunday`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `thursday`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `tuesday`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `wednesday`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.daysToReturn

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:130

___

### modeToReturn

• **modeToReturn**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `coolSetpointPresent`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `heatSetpointPresent`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.modeToReturn

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:140
