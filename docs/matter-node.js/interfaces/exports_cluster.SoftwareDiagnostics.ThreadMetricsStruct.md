[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [SoftwareDiagnostics](../modules/exports_cluster.SoftwareDiagnostics.md) / ThreadMetricsStruct

# Interface: ThreadMetricsStruct

[exports/cluster](../modules/exports_cluster.md).[SoftwareDiagnostics](../modules/exports_cluster.SoftwareDiagnostics.md).ThreadMetricsStruct

**`See`**

MatterSpecification.v11.Core § 11.12.5.1

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvThreadMetricsStruct`](../modules/exports_cluster.SoftwareDiagnostics.md#tlvthreadmetricsstruct)\>

  ↳ **`ThreadMetricsStruct`**

## Table of contents

### Properties

- [id](exports_cluster.SoftwareDiagnostics.ThreadMetricsStruct.md#id)
- [name](exports_cluster.SoftwareDiagnostics.ThreadMetricsStruct.md#name)
- [stackFreeCurrent](exports_cluster.SoftwareDiagnostics.ThreadMetricsStruct.md#stackfreecurrent)
- [stackFreeMinimum](exports_cluster.SoftwareDiagnostics.ThreadMetricsStruct.md#stackfreeminimum)
- [stackSize](exports_cluster.SoftwareDiagnostics.ThreadMetricsStruct.md#stacksize)

## Properties

### id

• **id**: `number` \| `bigint`

The Id field shall be a server-assigned per-thread unique ID that is constant for the duration of the
thread. Efforts SHOULD be made to avoid reusing ID values when possible.

**`See`**

MatterSpecification.v11.Core § 11.12.5.1.1

#### Inherited from

TypeFromSchema.id

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SoftwareDiagnosticsCluster.d.ts:23

___

### name

• `Optional` **name**: `string`

The Name field shall be set to a vendor defined name or prefix of the software thread that is static for the
duration of the thread.

**`See`**

MatterSpecification.v11.Core § 11.12.5.1.2

#### Inherited from

TypeFromSchema.name

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SoftwareDiagnosticsCluster.d.ts:30

___

### stackFreeCurrent

• `Optional` **stackFreeCurrent**: `number`

The StackFreeCurrent field shall indicate the current amount of stack memory, in bytes, that are not being
utilized on the respective thread.

**`See`**

MatterSpecification.v11.Core § 11.12.5.1.3

#### Inherited from

TypeFromSchema.stackFreeCurrent

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SoftwareDiagnosticsCluster.d.ts:37

___

### stackFreeMinimum

• `Optional` **stackFreeMinimum**: `number`

The StackFreeMinimum field shall indicate the minimum amount of stack memory, in bytes, that has been
available at any point between the current time and this attribute being reset or initialized on the
respective thread. This value shall only be reset upon a Node reboot or upon receiving of the
ResetWatermarks command.

**`See`**

MatterSpecification.v11.Core § 11.12.5.1.4

#### Inherited from

TypeFromSchema.stackFreeMinimum

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SoftwareDiagnosticsCluster.d.ts:46

___

### stackSize

• `Optional` **stackSize**: `number`

The StackSize field shall indicate the amount of stack memory, in bytes, that has been allocated

for use by the respective thread.

**`See`**

MatterSpecification.v11.Core § 11.12.5.1.5

#### Inherited from

TypeFromSchema.stackSize

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SoftwareDiagnosticsCluster.d.ts:54
