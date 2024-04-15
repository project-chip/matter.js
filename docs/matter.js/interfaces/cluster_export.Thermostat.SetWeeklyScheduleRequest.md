[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Thermostat](../modules/cluster_export.Thermostat.md) / SetWeeklyScheduleRequest

# Interface: SetWeeklyScheduleRequest

[cluster/export](../modules/cluster_export.md).[Thermostat](../modules/cluster_export.Thermostat.md).SetWeeklyScheduleRequest

Input to the Thermostat setWeeklySchedule command

**`See`**

MatterSpecification.v11.Cluster § 4.3.8

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvSetWeeklyScheduleRequest`](../modules/cluster_export.Thermostat.md#tlvsetweeklyschedulerequest)\>

  ↳ **`SetWeeklyScheduleRequest`**

## Table of contents

### Properties

- [dayOfWeekForSequence](cluster_export.Thermostat.SetWeeklyScheduleRequest.md#dayofweekforsequence)
- [modeForSequence](cluster_export.Thermostat.SetWeeklyScheduleRequest.md#modeforsequence)
- [numberOfTransitionsForSequence](cluster_export.Thermostat.SetWeeklyScheduleRequest.md#numberoftransitionsforsequence)
- [transitions](cluster_export.Thermostat.SetWeeklyScheduleRequest.md#transitions)

## Properties

### dayOfWeekForSequence

• **dayOfWeekForSequence**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `away`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `friday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `monday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `saturday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `sunday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `thursday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tuesday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `wednesday`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.dayOfWeekForSequence

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:112](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L112)

___

### modeForSequence

• **modeForSequence**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coolSetpointPresent`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `heatSetpointPresent`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.modeForSequence

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:113](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L113)

___

### numberOfTransitionsForSequence

• **numberOfTransitionsForSequence**: `number`

#### Inherited from

TypeFromSchema.numberOfTransitionsForSequence

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:111](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L111)

___

### transitions

• **transitions**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `coolSetpoint`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `heatSetpoint`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `transitionTime`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>[]

#### Inherited from

TypeFromSchema.transitions

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:114](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L114)
