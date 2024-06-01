[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / behavior/definitions/electrical-measurement/export

# behavior/definitions/electrical-measurement/export

## Index

### Modules

- [\<internal\>](-internal-/README.md)

### Namespaces

- [ElectricalMeasurementBehavior](namespaces/ElectricalMeasurementBehavior/README.md)
- [ElectricalMeasurementInterface](namespaces/ElectricalMeasurementInterface/README.md)

### Classes

- [ElectricalMeasurementServer](classes/ElectricalMeasurementServer.md)

### Interfaces

- [ElectricalMeasurementBehavior](interfaces/ElectricalMeasurementBehavior.md)

## Type Aliases

### ElectricalMeasurementInterface

> **ElectricalMeasurementInterface**: `object`

#### Type declaration

##### components

> **components**: [`object`]

#### Source

[packages/matter.js/src/behavior/definitions/electrical-measurement/ElectricalMeasurementInterface.ts:15](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/electrical-measurement/ElectricalMeasurementInterface.ts#L15)

***

### GetMeasurementProfileCommandRequest

> **GetMeasurementProfileCommandRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvGetMeasurementProfileCommandRequest`](../../../../cluster/export/namespaces/ElectricalMeasurement/README.md#tlvgetmeasurementprofilecommandrequest)\>

#### Source

[packages/matter.js/src/behavior/definitions/electrical-measurement/ElectricalMeasurementInterface.ts:13](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/electrical-measurement/ElectricalMeasurementInterface.ts#L13)

## Variables

### ElectricalMeasurementBehavior

> `const` **ElectricalMeasurementBehavior**: [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../cluster/export/namespaces/ElectricalMeasurement/interfaces/Cluster.md), [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../cluster/export/namespaces/ClusterBehavior/README.md), [`ElectricalMeasurementInterface`](README.md#electricalmeasurementinterface)\>, [`ElectricalMeasurementInterface`](README.md#electricalmeasurementinterface)\>

ElectricalMeasurementBehavior is the base class for objects that support interaction with ElectricalMeasurement.Cluster.

#### Source

[packages/matter.js/src/behavior/definitions/electrical-measurement/ElectricalMeasurementBehavior.ts:17](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/electrical-measurement/ElectricalMeasurementBehavior.ts#L17)
