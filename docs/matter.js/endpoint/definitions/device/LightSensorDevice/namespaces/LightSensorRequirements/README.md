[**@project-chip/matter.js**](../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../modules.md) / [endpoint/definitions/device/LightSensorDevice](../../README.md) / LightSensorRequirements

# Namespace: LightSensorRequirements

## Variables

### GroupsBehavior

> `const` **GroupsBehavior**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../../cluster/export/namespaces/Groups/interfaces/Cluster.md), [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), [`GroupsInterface`](../../../../../../behavior/definitions/groups/export/README.md#groupsinterface)\>, [`GroupsInterface`](../../../../../../behavior/definitions/groups/export/README.md#groupsinterface)\> = `BaseGroupsBehavior`

The Groups cluster is optional per the Matter specification

We provide this alias to the default implementation [GroupsBehavior](README.md#groupsbehavior) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/LightSensorDevice.ts:46](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/LightSensorDevice.ts#L46)

***

### IdentifyServer

> `const` **IdentifyServer**: *typeof* [`IdentifyServer`](../../../../../../behavior/definitions/identify/export/namespaces/IdentifyServer/README.md) = `BaseIdentifyServer`

The Identify cluster is required by the Matter specification

We provide this alias to the default implementation [IdentifyServer](README.md#identifyserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/LightSensorDevice.ts:32](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/LightSensorDevice.ts#L32)

***

### IlluminanceMeasurementServer

> `const` **IlluminanceMeasurementServer**: *typeof* [`IlluminanceMeasurementServer`](../../../../../../behavior/definitions/illuminance-measurement/export/classes/IlluminanceMeasurementServer.md) = `BaseIlluminanceMeasurementServer`

The IlluminanceMeasurement cluster is required by the Matter specification

We provide this alias to the default implementation [IlluminanceMeasurementServer](README.md#illuminancemeasurementserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/LightSensorDevice.ts:39](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/LightSensorDevice.ts#L39)

***

### client

> `const` **client**: `object`

A definition for each client cluster supported by the endpoint per the Matter specification.

#### Type declaration

##### mandatory

> **mandatory**: `object` = `{}`

##### optional

> **optional**: `object`

##### optional.Groups

> **Groups**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../../cluster/export/namespaces/Groups/interfaces/Cluster.md), [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), [`GroupsInterface`](../../../../../../behavior/definitions/groups/export/README.md#groupsinterface)\>, [`GroupsInterface`](../../../../../../behavior/definitions/groups/export/README.md#groupsinterface)\> = `GroupsBehavior`

#### Source

[packages/matter.js/src/endpoint/definitions/device/LightSensorDevice.ts:56](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/LightSensorDevice.ts#L56)

***

### server

> `const` **server**: `object`

An implementation for each server cluster supported by the endpoint per the Matter specification.

#### Type declaration

##### mandatory

> **mandatory**: `object`

##### mandatory.Identify

> **Identify**: *typeof* [`IdentifyServer`](../../../../../../behavior/definitions/identify/export/namespaces/IdentifyServer/README.md) = `IdentifyServer`

##### mandatory.IlluminanceMeasurement

> **IlluminanceMeasurement**: *typeof* [`IlluminanceMeasurementServer`](../../../../../../behavior/definitions/illuminance-measurement/export/classes/IlluminanceMeasurementServer.md) = `IlluminanceMeasurementServer`

#### Source

[packages/matter.js/src/endpoint/definitions/device/LightSensorDevice.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/LightSensorDevice.ts#L51)
