[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / behavior/definitions/target-navigator/export

# behavior/definitions/target-navigator/export

## Index

### Modules

- [\<internal\>](-internal-/README.md)

### Namespaces

- [TargetNavigatorBehavior](namespaces/TargetNavigatorBehavior/README.md)
- [TargetNavigatorInterface](namespaces/TargetNavigatorInterface/README.md)

### Classes

- [TargetNavigatorServer](classes/TargetNavigatorServer.md)

### Interfaces

- [TargetNavigatorBehavior](interfaces/TargetNavigatorBehavior.md)

## Type Aliases

### NavigateTargetRequest

> **NavigateTargetRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvNavigateTargetRequest`](../../../../cluster/export/namespaces/TargetNavigator/README.md#tlvnavigatetargetrequest)\>

Upon receipt, this shall navigation the UX to the target identified.

#### See

MatterSpecification.v11.Cluster § 6.11.4.1

#### Source

[packages/matter.js/src/behavior/definitions/target-navigator/TargetNavigatorInterface.ts:18](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/target-navigator/TargetNavigatorInterface.ts#L18)

***

### NavigateTargetResponse

> **NavigateTargetResponse**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvNavigateTargetResponse`](../../../../cluster/export/namespaces/TargetNavigator/README.md#tlvnavigatetargetresponse)\>

This command shall be generated in response to NavigateTarget command.

#### See

MatterSpecification.v11.Cluster § 6.11.4.2

#### Source

[packages/matter.js/src/behavior/definitions/target-navigator/TargetNavigatorInterface.ts:25](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/target-navigator/TargetNavigatorInterface.ts#L25)

***

### TargetNavigatorInterface

> **TargetNavigatorInterface**: `object`

#### Type declaration

##### components

> **components**: [`object`]

#### Source

[packages/matter.js/src/behavior/definitions/target-navigator/TargetNavigatorInterface.ts:27](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/target-navigator/TargetNavigatorInterface.ts#L27)

## Variables

### TargetNavigatorBehavior

> `const` **TargetNavigatorBehavior**: [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../cluster/export/namespaces/TargetNavigator/interfaces/Cluster.md), [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../cluster/export/namespaces/ClusterBehavior/README.md), [`TargetNavigatorInterface`](README.md#targetnavigatorinterface)\>, [`TargetNavigatorInterface`](README.md#targetnavigatorinterface)\>

TargetNavigatorBehavior is the base class for objects that support interaction with [TargetNavigator.Cluster](../../../../cluster/export/namespaces/TargetNavigator/README.md#cluster).

#### Source

[packages/matter.js/src/behavior/definitions/target-navigator/TargetNavigatorBehavior.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/target-navigator/TargetNavigatorBehavior.ts#L16)
