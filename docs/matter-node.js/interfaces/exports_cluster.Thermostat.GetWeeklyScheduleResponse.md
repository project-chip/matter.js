[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [Thermostat](../modules/exports_cluster.Thermostat.md) / GetWeeklyScheduleResponse

# Interface: GetWeeklyScheduleResponse

[exports/cluster](../modules/exports_cluster.md).[Thermostat](../modules/exports_cluster.Thermostat.md).GetWeeklyScheduleResponse

**`See`**

MatterSpecification.v11.Cluster § 4.3.8

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvGetWeeklyScheduleResponse`](../modules/exports_cluster.Thermostat.md#tlvgetweeklyscheduleresponse)\>

  ↳ **`GetWeeklyScheduleResponse`**

## Table of contents

### Properties

- [dayOfWeekForSequence](exports_cluster.Thermostat.GetWeeklyScheduleResponse.md#dayofweekforsequence)
- [modeForSequence](exports_cluster.Thermostat.GetWeeklyScheduleResponse.md#modeforsequence)
- [numberOfTransitionsForSequence](exports_cluster.Thermostat.GetWeeklyScheduleResponse.md#numberoftransitionsforsequence)
- [transitions](exports_cluster.Thermostat.GetWeeklyScheduleResponse.md#transitions)

## Properties

### dayOfWeekForSequence

• **dayOfWeekForSequence**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `away`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `friday`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `monday`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `saturday`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `sunday`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `thursday`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `tuesday`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `wednesday`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.dayOfWeekForSequence

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:157

___

### modeForSequence

• **modeForSequence**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `coolSetpointPresent`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `heatSetpointPresent`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.modeForSequence

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:167

___

### numberOfTransitionsForSequence

• **numberOfTransitionsForSequence**: `number`

#### Inherited from

TypeFromSchema.numberOfTransitionsForSequence

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:156

___

### transitions

• **transitions**: [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `coolSetpoint`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\> ; `heatSetpoint`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\> ; `transitionTime`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>[]

#### Inherited from

TypeFromSchema.transitions

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:171
