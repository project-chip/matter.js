[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / behavior/definitions/mode-select/export

# behavior/definitions/mode-select/export

## Index

### Modules

- [\<internal\>](-internal-/README.md)

### Namespaces

- [ModeSelectBehavior](namespaces/ModeSelectBehavior/README.md)
- [ModeSelectInterface](namespaces/ModeSelectInterface/README.md)

### Classes

- [ModeSelectServer](classes/ModeSelectServer.md)
- [ModeSelectServerLogic](classes/ModeSelectServerLogic.md)

### Interfaces

- [ModeSelectBehavior](interfaces/ModeSelectBehavior.md)

## Type Aliases

### ChangeToModeRequest

> **ChangeToModeRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvChangeToModeRequest`](../../../../cluster/export/namespaces/ModeSelect/README.md#tlvchangetomoderequest)\>

On receipt of this command, if the NewMode field indicates a valid mode transition within the supported list, the
server shall set the CurrentMode attribute to the NewMode value, otherwise, the

server shall respond with an INVALID_COMMAND status response.

#### See

MatterSpecification.v11.Cluster § 1.8.6.1

#### Source

[packages/matter.js/src/behavior/definitions/mode-select/ModeSelectInterface.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/mode-select/ModeSelectInterface.ts#L21)

***

### ModeSelectInterface

> **ModeSelectInterface**: `object`

#### Type declaration

##### components

> **components**: [`object`]

#### Source

[packages/matter.js/src/behavior/definitions/mode-select/ModeSelectInterface.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/mode-select/ModeSelectInterface.ts#L23)

## Variables

### ModeSelectBehavior

> `const` **ModeSelectBehavior**: [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../cluster/export/namespaces/ModeSelect/interfaces/Cluster.md), [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../cluster/export/namespaces/ClusterBehavior/README.md), [`ModeSelectInterface`](README.md#modeselectinterface)\>, [`ModeSelectInterface`](README.md#modeselectinterface)\>

ModeSelectBehavior is the base class for objects that support interaction with [ModeSelect.Cluster](../../../../cluster/export/namespaces/ModeSelect/README.md#cluster).

This class does not have optional features of ModeSelect.Cluster enabled. You can enable additional features using
ModeSelectBehavior.with.

#### Source

[packages/matter.js/src/behavior/definitions/mode-select/ModeSelectBehavior.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/mode-select/ModeSelectBehavior.ts#L19)
