[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [Thermostat](../README.md) / GetWeeklyScheduleResponse

# Interface: GetWeeklyScheduleResponse

## See

MatterSpecification.v11.Cluster § 4.3.8

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvGetWeeklyScheduleResponse`](../README.md#tlvgetweeklyscheduleresponse)\>

## Properties

### dayOfWeekForSequence

> **dayOfWeekForSequence**: [`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>

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

`TypeFromSchema.dayOfWeekForSequence`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:157

***

### modeForSequence

> **modeForSequence**: [`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### coolSetpointPresent

> **coolSetpointPresent**: [`BitFlag`](../../../../schema/README.md#bitflag)

##### heatSetpointPresent

> **heatSetpointPresent**: [`BitFlag`](../../../../schema/README.md#bitflag)

#### Inherited from

`TypeFromSchema.modeForSequence`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:167

***

### numberOfTransitionsForSequence

> **numberOfTransitionsForSequence**: `number`

#### Inherited from

`TypeFromSchema.numberOfTransitionsForSequence`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:156

***

### transitions

> **transitions**: [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>[]

#### Inherited from

`TypeFromSchema.transitions`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:171
