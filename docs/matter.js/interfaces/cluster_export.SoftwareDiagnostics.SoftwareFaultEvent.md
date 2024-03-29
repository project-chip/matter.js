[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [SoftwareDiagnostics](../modules/cluster_export.SoftwareDiagnostics.md) / SoftwareFaultEvent

# Interface: SoftwareFaultEvent

[cluster/export](../modules/cluster_export.md).[SoftwareDiagnostics](../modules/cluster_export.SoftwareDiagnostics.md).SoftwareFaultEvent

Body of the SoftwareDiagnostics softwareFault event

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.12.8.1

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

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.12.8.1.1

#### Inherited from

TypeFromSchema.faultRecording

#### Defined in

[packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts:100](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts#L100)

___

### id

• **id**: `number` \| `bigint`

#### Inherited from

TypeFromSchema.id

#### Defined in

[packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts:90](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts#L90)

___

### name

• `Optional` **name**: `string`

#### Inherited from

TypeFromSchema.name

#### Defined in

[packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts:91](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts#L91)
