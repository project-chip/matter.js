[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [SoftwareDiagnostics](../modules/cluster_export.SoftwareDiagnostics.md) / ThreadMetricsStruct

# Interface: ThreadMetricsStruct

[cluster/export](../modules/cluster_export.md).[SoftwareDiagnostics](../modules/cluster_export.SoftwareDiagnostics.md).ThreadMetricsStruct

**`See`**

MatterSpecification.v11.Core § 11.12.5.1

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvThreadMetricsStruct`](../modules/cluster_export.SoftwareDiagnostics.md#tlvthreadmetricsstruct)\>

  ↳ **`ThreadMetricsStruct`**

## Table of contents

### Properties

- [id](cluster_export.SoftwareDiagnostics.ThreadMetricsStruct.md#id)
- [name](cluster_export.SoftwareDiagnostics.ThreadMetricsStruct.md#name)
- [stackFreeCurrent](cluster_export.SoftwareDiagnostics.ThreadMetricsStruct.md#stackfreecurrent)
- [stackFreeMinimum](cluster_export.SoftwareDiagnostics.ThreadMetricsStruct.md#stackfreeminimum)
- [stackSize](cluster_export.SoftwareDiagnostics.ThreadMetricsStruct.md#stacksize)

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

[packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts:40](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts#L40)

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

[packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts#L48)

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

[packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts:56](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts#L56)

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

[packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts:66](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts#L66)

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

[packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts:75](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts#L75)
