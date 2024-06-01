[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [Thermostat](../README.md) / GetWeeklyScheduleRequest

# Interface: GetWeeklyScheduleRequest

Input to the Thermostat getWeeklySchedule command

## See

MatterSpecification.v11.Cluster § 4.3.8

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvGetWeeklyScheduleRequest`](../README.md#tlvgetweeklyschedulerequest)\>

## Properties

### daysToReturn

> **daysToReturn**: [`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### away

> **away**: [`BitFlag`](../../../../schema/README.md#bitflag)

##### friday

> **friday**: [`BitFlag`](../../../../schema/README.md#bitflag)

##### monday

> **monday**: [`BitFlag`](../../../../schema/README.md#bitflag)

##### saturday

> **saturday**: [`BitFlag`](../../../../schema/README.md#bitflag)

##### sunday

> **sunday**: [`BitFlag`](../../../../schema/README.md#bitflag)

##### thursday

> **thursday**: [`BitFlag`](../../../../schema/README.md#bitflag)

##### tuesday

> **tuesday**: [`BitFlag`](../../../../schema/README.md#bitflag)

##### wednesday

> **wednesday**: [`BitFlag`](../../../../schema/README.md#bitflag)

#### Inherited from

`TypeFromSchema.daysToReturn`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:130

***

### modeToReturn

> **modeToReturn**: [`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### coolSetpointPresent

> **coolSetpointPresent**: [`BitFlag`](../../../../schema/README.md#bitflag)

##### heatSetpointPresent

> **heatSetpointPresent**: [`BitFlag`](../../../../schema/README.md#bitflag)

#### Inherited from

`TypeFromSchema.modeToReturn`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:140
