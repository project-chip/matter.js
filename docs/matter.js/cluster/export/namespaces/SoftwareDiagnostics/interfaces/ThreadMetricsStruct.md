[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [SoftwareDiagnostics](../README.md) / ThreadMetricsStruct

# Interface: ThreadMetricsStruct

## See

MatterSpecification.v11.Core § 11.12.5.1

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvThreadMetricsStruct`](../README.md#tlvthreadmetricsstruct)\>

## Properties

### id

> **id**: `number` \| `bigint`

The Id field shall be a server-assigned per-thread unique ID that is constant for the duration of the
thread. Efforts SHOULD be made to avoid reusing ID values when possible.

#### See

MatterSpecification.v11.Core § 11.12.5.1.1

#### Inherited from

`TypeFromSchema.id`

#### Source

[packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts#L40)

***

### name?

> `optional` **name**: `string`

The Name field shall be set to a vendor defined name or prefix of the software thread that is static for the
duration of the thread.

#### See

MatterSpecification.v11.Core § 11.12.5.1.2

#### Inherited from

`TypeFromSchema.name`

#### Source

[packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts#L48)

***

### stackFreeCurrent?

> `optional` **stackFreeCurrent**: `number`

The StackFreeCurrent field shall indicate the current amount of stack memory, in bytes, that are not being
utilized on the respective thread.

#### See

MatterSpecification.v11.Core § 11.12.5.1.3

#### Inherited from

`TypeFromSchema.stackFreeCurrent`

#### Source

[packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts:56](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts#L56)

***

### stackFreeMinimum?

> `optional` **stackFreeMinimum**: `number`

The StackFreeMinimum field shall indicate the minimum amount of stack memory, in bytes, that has been
available at any point between the current time and this attribute being reset or initialized on the
respective thread. This value shall only be reset upon a Node reboot or upon receiving of the
ResetWatermarks command.

#### See

MatterSpecification.v11.Core § 11.12.5.1.4

#### Inherited from

`TypeFromSchema.stackFreeMinimum`

#### Source

[packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts:66](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts#L66)

***

### stackSize?

> `optional` **stackSize**: `number`

The StackSize field shall indicate the amount of stack memory, in bytes, that has been allocated

for use by the respective thread.

#### See

MatterSpecification.v11.Core § 11.12.5.1.5

#### Inherited from

`TypeFromSchema.stackSize`

#### Source

[packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts:75](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts#L75)
