[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / behavior/definitions/thermostat/export

# behavior/definitions/thermostat/export

## Index

### Modules

- [\<internal\>](-internal-/README.md)

### Namespaces

- [ThermostatBehavior](namespaces/ThermostatBehavior/README.md)
- [ThermostatInterface](namespaces/ThermostatInterface/README.md)

### Classes

- [ThermostatServer](classes/ThermostatServer.md)

### Interfaces

- [ThermostatBehavior](interfaces/ThermostatBehavior.md)

## Type Aliases

### GetWeeklyScheduleRequest

> **GetWeeklyScheduleRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvGetWeeklyScheduleRequest`](../../../../cluster/export/namespaces/Thermostat/README.md#tlvgetweeklyschedulerequest)\>

#### See

MatterSpecification.v11.Cluster § 4.3.8

#### Source

[packages/matter.js/src/behavior/definitions/thermostat/ThermostatInterface.ts:26](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/thermostat/ThermostatInterface.ts#L26)

***

### GetWeeklyScheduleResponse

> **GetWeeklyScheduleResponse**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvGetWeeklyScheduleResponse`](../../../../cluster/export/namespaces/Thermostat/README.md#tlvgetweeklyscheduleresponse)\>

#### See

MatterSpecification.v11.Cluster § 4.3.8

#### Source

[packages/matter.js/src/behavior/definitions/thermostat/ThermostatInterface.ts:31](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/thermostat/ThermostatInterface.ts#L31)

***

### SetWeeklyScheduleRequest

> **SetWeeklyScheduleRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvSetWeeklyScheduleRequest`](../../../../cluster/export/namespaces/Thermostat/README.md#tlvsetweeklyschedulerequest)\>

#### See

MatterSpecification.v11.Cluster § 4.3.8

#### Source

[packages/matter.js/src/behavior/definitions/thermostat/ThermostatInterface.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/thermostat/ThermostatInterface.ts#L21)

***

### SetpointRaiseLowerRequest

> **SetpointRaiseLowerRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvSetpointRaiseLowerRequest`](../../../../cluster/export/namespaces/Thermostat/README.md#tlvsetpointraiselowerrequest)\>

#### See

MatterSpecification.v11.Cluster § 4.3.8

#### Source

[packages/matter.js/src/behavior/definitions/thermostat/ThermostatInterface.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/thermostat/ThermostatInterface.ts#L16)

***

### ThermostatInterface

> **ThermostatInterface**: `object`

#### Type declaration

##### components

> **components**: [`object`, `object`]

#### Source

[packages/matter.js/src/behavior/definitions/thermostat/ThermostatInterface.ts:33](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/thermostat/ThermostatInterface.ts#L33)

## Variables

### ThermostatBehavior

> `const` **ThermostatBehavior**: [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../cluster/export/namespaces/ClusterBehavior/README.md), [`ThermostatInterface`](README.md#thermostatinterface)\>, [`ThermostatInterface`](README.md#thermostatinterface)\>

ThermostatBehavior is the base class for objects that support interaction with [Thermostat.Cluster](../../../../cluster/export/namespaces/Thermostat/README.md#cluster).

Thermostat.Cluster requires you to enable one or more optional features. You can do so using ThermostatBehavior.with.

#### Source

[packages/matter.js/src/behavior/definitions/thermostat/ThermostatBehavior.ts:20](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/thermostat/ThermostatBehavior.ts#L20)
