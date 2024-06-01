[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [SoftwareDiagnostics](../README.md) / SoftwareFaultEvent

# Interface: SoftwareFaultEvent

Body of the SoftwareDiagnostics softwareFault event

## See

MatterSpecification.v11.Core § 11.12.8.1

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvSoftwareFaultEvent`](../README.md#tlvsoftwarefaultevent)\>

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

[packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts:111](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts#L111)

***

### id

> **id**: `number` \| `bigint`

The ID field shall be set to the ID of the software thread in which the last software fault occurred.

#### See

MatterSpecification.v11.Core § 11.12.8.1.1

#### Inherited from

`TypeFromSchema.id`

#### Source

[packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts:94](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts#L94)

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

[packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts:102](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts#L102)
