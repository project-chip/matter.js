[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [SoftwareDiagnostics](../modules/cluster_export.SoftwareDiagnostics.md) / SoftwareFaultEvent

# Interface: SoftwareFaultEvent

[cluster/export](../modules/cluster_export.md).[SoftwareDiagnostics](../modules/cluster_export.SoftwareDiagnostics.md).SoftwareFaultEvent

Body of the SoftwareDiagnostics softwareFault event

**`See`**

MatterSpecification.v11.Core § 11.12.8.1

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvSoftwareFaultEvent`](../modules/cluster_export.SoftwareDiagnostics.md#tlvsoftwarefaultevent)\>

  ↳ **`SoftwareFaultEvent`**

## Table of contents

### Properties

- [faultRecording](cluster_export.SoftwareDiagnostics.SoftwareFaultEvent.md#faultrecording)
- [id](cluster_export.SoftwareDiagnostics.SoftwareFaultEvent.md#id)
- [name](cluster_export.SoftwareDiagnostics.SoftwareFaultEvent.md#name)

## Properties

### faultRecording

• `Optional` **faultRecording**: `Uint8Array`

The FaultRecording field shall be a manufacturer-specified payload intended to convey information to assist
in further diagnosing or debugging a software fault. The FaultRecording field may be used to convey
information such as, but not limited to, thread backtraces or register contents.

**`See`**

MatterSpecification.v11.Core § 11.12.8.1.3

#### Inherited from

TypeFromSchema.faultRecording

#### Defined in

[packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts:111](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts#L111)

___

### id

• **id**: `number` \| `bigint`

The ID field shall be set to the ID of the software thread in which the last software fault occurred.

**`See`**

MatterSpecification.v11.Core § 11.12.8.1.1

#### Inherited from

TypeFromSchema.id

#### Defined in

[packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts:94](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts#L94)

___

### name

• `Optional` **name**: `string`

The Name field shall be set to a manufacturer-specified name or prefix of the software thread in which the
last software fault occurred.

**`See`**

MatterSpecification.v11.Core § 11.12.8.1.2

#### Inherited from

TypeFromSchema.name

#### Defined in

[packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts:102](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts#L102)
