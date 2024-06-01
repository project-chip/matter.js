[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / behavior/definitions/fan-control/export

# behavior/definitions/fan-control/export

## Index

### Modules

- [\<internal\>](-internal-/README.md)

### Namespaces

- [FanControlBehavior](namespaces/FanControlBehavior/README.md)

### Classes

- [FanControlServer](classes/FanControlServer.md)

### Interfaces

- [FanControlBehavior](interfaces/FanControlBehavior.md)

## Variables

### FanControlBehavior

> `const` **FanControlBehavior**: [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../cluster/export/namespaces/FanControl/interfaces/Cluster.md), *typeof* [`ClusterBehavior`](../../../cluster/export/namespaces/ClusterBehavior/README.md), `object`\>

FanControlBehavior is the base class for objects that support interaction with [FanControl.Cluster](../../../../cluster/export/namespaces/FanControl/README.md#cluster).

This class does not have optional features of FanControl.Cluster enabled. You can enable additional features using
FanControlBehavior.with.

#### Source

[packages/matter.js/src/behavior/definitions/fan-control/FanControlBehavior.ts:18](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/fan-control/FanControlBehavior.ts#L18)
