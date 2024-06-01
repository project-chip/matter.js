[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [SoftwareDiagnostics](../README.md) / SoftwareFaultEvent

# Interface: SoftwareFaultEvent

Body of the SoftwareDiagnostics softwareFault event

## See

MatterSpecification.v11.Core § 11.12.8.1

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvSoftwareFaultEvent`](../README.md#tlvsoftwarefaultevent)\>

## Properties

### faultRecording?

> `optional` **faultRecording**: `Uint8Array`

The FaultRecording field shall be a manufacturer-specified payload intended to convey information to assist
in further diagnosing or debugging a software fault. The FaultRecording field may be used to convey
information such as, but not limited to, thread backtraces or register contents.

#### See

MatterSpecification.v11.Core § 11.12.8.1.3

#### Inherited from

`TypeFromSchema.faultRecording`

#### Source

packages/matter.js/dist/esm/cluster/definitions/SoftwareDiagnosticsCluster.d.ts:87

***

### id

> **id**: `number` \| `bigint`

The ID field shall be set to the ID of the software thread in which the last software fault occurred.

#### See

MatterSpecification.v11.Core § 11.12.8.1.1

#### Inherited from

`TypeFromSchema.id`

#### Source

packages/matter.js/dist/esm/cluster/definitions/SoftwareDiagnosticsCluster.d.ts:72

***

### name?

> `optional` **name**: `string`

The Name field shall be set to a manufacturer-specified name or prefix of the software thread in which the
last software fault occurred.

#### See

MatterSpecification.v11.Core § 11.12.8.1.2

#### Inherited from

`TypeFromSchema.name`

#### Source

packages/matter.js/dist/esm/cluster/definitions/SoftwareDiagnosticsCluster.d.ts:79
