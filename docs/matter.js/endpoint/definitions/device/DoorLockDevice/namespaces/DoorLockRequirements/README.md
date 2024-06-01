[**@project-chip/matter.js**](../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../modules.md) / [endpoint/definitions/device/DoorLockDevice](../../README.md) / DoorLockRequirements

# Namespace: DoorLockRequirements

## Variables

### DoorLockServer

> `const` **DoorLockServer**: *typeof* [`DoorLockServer`](../../../../../../behavior/definitions/door-lock/export/classes/DoorLockServer.md) = `BaseDoorLockServer`

The DoorLock cluster is required by the Matter specification

We provide this alias to the default implementation [DoorLockServer](README.md#doorlockserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/DoorLockDevice.ts:37](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/DoorLockDevice.ts#L37)

***

### IdentifyServer

> `const` **IdentifyServer**: *typeof* [`IdentifyServer`](../../../../../../behavior/definitions/identify/export/namespaces/IdentifyServer/README.md) = `BaseIdentifyServer`

The Identify cluster is required by the Matter specification

We provide this alias to the default implementation [IdentifyServer](README.md#identifyserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/DoorLockDevice.ts:30](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/DoorLockDevice.ts#L30)

***

### TimeSyncBehavior

> `const` **TimeSyncBehavior**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../../cluster/export/namespaces/TimeSync/interfaces/Cluster.md), [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), [`TimeSyncInterface`](../../../../../../behavior/definitions/time-sync/export/README.md#timesyncinterface)\>, [`TimeSyncInterface`](../../../../../../behavior/definitions/time-sync/export/README.md#timesyncinterface)\> = `BaseTimeSyncBehavior`

The TimeSync cluster is optional per the Matter specification

We provide this alias to the default implementation [TimeSyncBehavior](README.md#timesyncbehavior) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/DoorLockDevice.ts:44](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/DoorLockDevice.ts#L44)

***

### client

> `const` **client**: `object`

A definition for each client cluster supported by the endpoint per the Matter specification.

#### Type declaration

##### mandatory

> **mandatory**: `object` = `{}`

##### optional

> **optional**: `object`

##### optional.TimeSync

> **TimeSync**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../../cluster/export/namespaces/TimeSync/interfaces/Cluster.md), [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), [`TimeSyncInterface`](../../../../../../behavior/definitions/time-sync/export/README.md#timesyncinterface)\>, [`TimeSyncInterface`](../../../../../../behavior/definitions/time-sync/export/README.md#timesyncinterface)\> = `TimeSyncBehavior`

#### Source

[packages/matter.js/src/endpoint/definitions/device/DoorLockDevice.ts:54](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/DoorLockDevice.ts#L54)

***

### server

> `const` **server**: `object`

An implementation for each server cluster supported by the endpoint per the Matter specification.

#### Type declaration

##### mandatory

> **mandatory**: `object`

##### mandatory.DoorLock

> **DoorLock**: *typeof* [`DoorLockServer`](../../../../../../behavior/definitions/door-lock/export/classes/DoorLockServer.md) = `DoorLockServer`

##### mandatory.Identify

> **Identify**: *typeof* [`IdentifyServer`](../../../../../../behavior/definitions/identify/export/namespaces/IdentifyServer/README.md) = `IdentifyServer`

#### Source

[packages/matter.js/src/endpoint/definitions/device/DoorLockDevice.ts:49](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/DoorLockDevice.ts#L49)
