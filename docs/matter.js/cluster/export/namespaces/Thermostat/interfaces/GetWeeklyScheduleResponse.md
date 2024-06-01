[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [Thermostat](../README.md) / GetWeeklyScheduleResponse

# Interface: GetWeeklyScheduleResponse

## See

MatterSpecification.v11.Cluster § 4.3.8

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvGetWeeklyScheduleResponse`](../README.md#tlvgetweeklyscheduleresponse)\>

## Properties

### dayOfWeekForSequence

> **dayOfWeekForSequence**: [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### away

> **away**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

##### friday

> **friday**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

##### monday

> **monday**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

##### saturday

> **saturday**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

##### sunday

> **sunday**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

##### thursday

> **thursday**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

##### tuesday

> **tuesday**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

##### wednesday

> **wednesday**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

#### Inherited from

`TypeFromSchema.dayOfWeekForSequence`

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:146](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L146)

***

### modeForSequence

> **modeForSequence**: [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### coolSetpointPresent

> **coolSetpointPresent**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

##### heatSetpointPresent

> **heatSetpointPresent**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

#### Inherited from

`TypeFromSchema.modeForSequence`

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:147](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L147)

***

### numberOfTransitionsForSequence

> **numberOfTransitionsForSequence**: `number`

#### Inherited from

`TypeFromSchema.numberOfTransitionsForSequence`

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:145](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L145)

***

### transitions

> **transitions**: [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]

#### Inherited from

`TypeFromSchema.transitions`

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:148](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L148)
