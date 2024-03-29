[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Thermostat](../modules/cluster_export.Thermostat.md) / GetWeeklyScheduleRequest

# Interface: GetWeeklyScheduleRequest

[cluster/export](../modules/cluster_export.md).[Thermostat](../modules/cluster_export.Thermostat.md).GetWeeklyScheduleRequest

Input to the Thermostat getWeeklySchedule command

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.3.8

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvGetWeeklyScheduleRequest`](../modules/cluster_export.Thermostat.md#tlvgetweeklyschedulerequest)\>

  ↳ **`GetWeeklyScheduleRequest`**

## Table of contents

### Properties

- [daysToReturn](cluster_export.Thermostat.GetWeeklyScheduleRequest.md#daystoreturn)
- [modeToReturn](cluster_export.Thermostat.GetWeeklyScheduleRequest.md#modetoreturn)

## Properties

### daysToReturn

• **daysToReturn**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `away`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `friday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `monday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `saturday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `sunday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `thursday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tuesday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `wednesday`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.daysToReturn

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:131](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L131)

___

### modeToReturn

• **modeToReturn**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coolSetpointPresent`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `heatSetpointPresent`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.modeToReturn

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:132](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L132)
