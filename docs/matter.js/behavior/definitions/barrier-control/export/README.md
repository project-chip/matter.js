[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / behavior/definitions/barrier-control/export

# behavior/definitions/barrier-control/export

## Index

### Modules

- [\<internal\>](-internal-/README.md)

### Namespaces

- [BarrierControlBehavior](namespaces/BarrierControlBehavior/README.md)
- [BarrierControlInterface](namespaces/BarrierControlInterface/README.md)

### Classes

- [BarrierControlServer](classes/BarrierControlServer.md)

### Interfaces

- [BarrierControlBehavior](interfaces/BarrierControlBehavior.md)

## Type Aliases

### BarrierControlGoToPercentRequest

> **BarrierControlGoToPercentRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvBarrierControlGoToPercentRequest`](../../../../cluster/export/namespaces/BarrierControl/README.md#tlvbarriercontrolgotopercentrequest)\>

#### Source

[packages/matter.js/src/behavior/definitions/barrier-control/BarrierControlInterface.ts:13](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/barrier-control/BarrierControlInterface.ts#L13)

***

### BarrierControlInterface

> **BarrierControlInterface**: `object`

#### Type declaration

##### components

> **components**: [`object`]

#### Source

[packages/matter.js/src/behavior/definitions/barrier-control/BarrierControlInterface.ts:15](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/barrier-control/BarrierControlInterface.ts#L15)

## Variables

### BarrierControlBehavior

> `const` **BarrierControlBehavior**: [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../cluster/export/namespaces/BarrierControl/interfaces/Cluster.md), [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../cluster/export/namespaces/ClusterBehavior/README.md), [`BarrierControlInterface`](README.md#barriercontrolinterface)\>, [`BarrierControlInterface`](README.md#barriercontrolinterface)\>

BarrierControlBehavior is the base class for objects that support interaction with [BarrierControl.Cluster](../../../../cluster/export/namespaces/BarrierControl/README.md#cluster).

#### Source

[packages/matter.js/src/behavior/definitions/barrier-control/BarrierControlBehavior.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/barrier-control/BarrierControlBehavior.ts#L16)
