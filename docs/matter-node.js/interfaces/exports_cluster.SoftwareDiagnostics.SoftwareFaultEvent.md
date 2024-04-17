[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [SoftwareDiagnostics](../modules/exports_cluster.SoftwareDiagnostics.md) / SoftwareFaultEvent

# Interface: SoftwareFaultEvent

[exports/cluster](../modules/exports_cluster.md).[SoftwareDiagnostics](../modules/exports_cluster.SoftwareDiagnostics.md).SoftwareFaultEvent

Body of the SoftwareDiagnostics softwareFault event

**`See`**

MatterSpecification.v11.Core § 11.12.8.1

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvSoftwareFaultEvent`](../modules/exports_cluster.SoftwareDiagnostics.md#tlvsoftwarefaultevent)\>

  ↳ **`SoftwareFaultEvent`**

## Table of contents

### Properties

- [faultRecording](exports_cluster.SoftwareDiagnostics.SoftwareFaultEvent.md#faultrecording)
- [id](exports_cluster.SoftwareDiagnostics.SoftwareFaultEvent.md#id)
- [name](exports_cluster.SoftwareDiagnostics.SoftwareFaultEvent.md#name)

## Properties

### faultRecording

• `Optional` **faultRecording**: `Uint8Array`

The FaultRecording field shall be a manufacturer-specified payload intended to convey information to assist
in further diagnosing or debugging a software fault. The FaultRecording field may be used to convey
information such as, but not limited to, thread backtraces or register contents.

**`See`**

MatterSpecification.v11.Core § 11.12.8.1.1

#### Inherited from

TypeFromSchema.faultRecording

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SoftwareDiagnosticsCluster.d.ts:76

___

### id

• **id**: `number` \| `bigint`

#### Inherited from

TypeFromSchema.id

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SoftwareDiagnosticsCluster.d.ts:67

___

### name

• `Optional` **name**: `string`

#### Inherited from

TypeFromSchema.name

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SoftwareDiagnosticsCluster.d.ts:68
