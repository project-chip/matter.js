[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/thermostat/export](../../../README.md) / [ThermostatInterface](../README.md) / ScheduleConfiguration

# Interface: ScheduleConfiguration

## Methods

### clearWeeklySchedule()

> **clearWeeklySchedule**(): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Cluster § 4.3.8

#### Source

[packages/matter.js/src/behavior/definitions/thermostat/ThermostatInterface.ts:60](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/thermostat/ThermostatInterface.ts#L60)

***

### getWeeklySchedule()

> **getWeeklySchedule**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)\<[`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)\<[`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### See

MatterSpecification.v11.Cluster § 4.3.8

#### Source

[packages/matter.js/src/behavior/definitions/thermostat/ThermostatInterface.ts:55](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/thermostat/ThermostatInterface.ts#L55)

***

### setWeeklySchedule()

> **setWeeklySchedule**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Cluster § 4.3.8

#### Source

[packages/matter.js/src/behavior/definitions/thermostat/ThermostatInterface.ts:50](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/thermostat/ThermostatInterface.ts#L50)
