[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / behavior/definitions/on-off/export

# behavior/definitions/on-off/export

## Index

### Modules

- [\<internal\>](-internal-/README.md)

### Namespaces

- [OnOffBehavior](namespaces/OnOffBehavior/README.md)
- [OnOffInterface](namespaces/OnOffInterface/README.md)
- [OnOffServer](namespaces/OnOffServer/README.md)

### Classes

- [OnOffServer](classes/OnOffServer.md)

### Interfaces

- [OnOffBehavior](interfaces/OnOffBehavior.md)

## Type Aliases

### OffWithEffectRequest

> **OffWithEffectRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvOffWithEffectRequest`](../../../../cluster/export/namespaces/OnOff/README.md#tlvoffwitheffectrequest)\>

The OffWithEffect command allows devices to be turned off using enhanced ways of fading.

#### See

MatterSpecification.v11.Cluster § 1.5.7.4

#### Source

[packages/matter.js/src/behavior/definitions/on-off/OnOffInterface.ts:18](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/on-off/OnOffInterface.ts#L18)

***

### OnOffInterface

> **OnOffInterface**: `object`

#### Type declaration

##### components

> **components**: [`object`, `object`]

#### Source

[packages/matter.js/src/behavior/definitions/on-off/OnOffInterface.ts:31](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/on-off/OnOffInterface.ts#L31)

***

### OnWithTimedOffRequest

> **OnWithTimedOffRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvOnWithTimedOffRequest`](../../../../cluster/export/namespaces/OnOff/README.md#tlvonwithtimedoffrequest)\>

The OnWithTimedOff command allows devices to be turned on for a specific duration with a guarded off duration so
that SHOULD the device be subsequently turned off, further OnWithTimedOff commands, received during this time, are
prevented from turning the devices back on. Further

OnWithTimedOff commands received while the server is turned on, will update the period that the device is turned on.

#### See

MatterSpecification.v11.Cluster § 1.5.7.6

#### Source

[packages/matter.js/src/behavior/definitions/on-off/OnOffInterface.ts:29](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/on-off/OnOffInterface.ts#L29)

## Variables

### OnOffBehavior

> `const` **OnOffBehavior**: [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../cluster/export/namespaces/OnOff/interfaces/Cluster.md), [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../cluster/export/namespaces/ClusterBehavior/README.md), [`OnOffInterface`](README.md#onoffinterface)\>, [`OnOffInterface`](README.md#onoffinterface)\>

OnOffBehavior is the base class for objects that support interaction with [OnOff.Cluster](../../../../cluster/export/namespaces/OnOff/README.md#cluster).

This class does not have optional features of OnOff.Cluster enabled. You can enable additional features using
OnOffBehavior.with.

#### Source

[packages/matter.js/src/behavior/definitions/on-off/OnOffBehavior.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/on-off/OnOffBehavior.ts#L19)
