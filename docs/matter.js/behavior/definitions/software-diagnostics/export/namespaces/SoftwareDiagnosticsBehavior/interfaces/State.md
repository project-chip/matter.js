[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/software-diagnostics/export](../../../README.md) / [SoftwareDiagnosticsBehavior](../README.md) / State

# Interface: State

## Extends

- [`StateType`](../../../-internal-/README.md#statetype)

## Properties

### currentHeapFree?

> `optional` **currentHeapFree**: `number` \| `bigint`

The CurrentHeapFree attribute shall indicate the current amount of heap memory, in bytes, that are free
for allocation. The effective amount may be smaller due to heap fragmentation or other reasons.

#### See

MatterSpecification.v11.Core § 11.12.6.2

#### Inherited from

`StateType.currentHeapFree`

#### Source

[packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts:206](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts#L206)

***

### currentHeapUsed?

> `optional` **currentHeapUsed**: `number` \| `bigint`

The CurrentHeapUsed attribute shall indicate the current amount of heap memory, in bytes, that is being
used.

#### See

MatterSpecification.v11.Core § 11.12.6.3

#### Inherited from

`StateType.currentHeapUsed`

#### Source

[packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts:214](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts#L214)

***

### threadMetrics?

> `optional` **threadMetrics**: [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]

The ThreadMetrics attribute shall be a list of ThreadMetricsStruct structs. Each active thread on the
Node shall be represented by a single entry within the ThreadMetrics attribute.

#### See

MatterSpecification.v11.Core § 11.12.6.1

#### Inherited from

`StateType.threadMetrics`

#### Source

[packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts:198](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts#L198)
