[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / behavior/definitions/identify/export

# behavior/definitions/identify/export

## Index

### Modules

- [\<internal\>](-internal-/README.md)

### Namespaces

- [IdentifyBehavior](namespaces/IdentifyBehavior/README.md)
- [IdentifyInterface](namespaces/IdentifyInterface/README.md)
- [IdentifyServer](namespaces/IdentifyServer/README.md)

### Classes

- [IdentifyServer](classes/IdentifyServer.md)

### Interfaces

- [IdentifyBehavior](interfaces/IdentifyBehavior.md)

## Type Aliases

### IdentifyInterface

> **IdentifyInterface**: `object`

#### Type declaration

##### components

> **components**: [`object`, `object`]

#### Source

[packages/matter.js/src/behavior/definitions/identify/IdentifyInterface.ts:39](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/identify/IdentifyInterface.ts#L39)

***

### IdentifyQueryResponse

> **IdentifyQueryResponse**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvIdentifyQueryResponse`](../../../../cluster/export/namespaces/Identify/README.md#tlvidentifyqueryresponse)\>

This command is generated in response to receiving an IdentifyQuery command, see IdentifyQuery Command, in the case
that the device is currently identifying itself.

#### See

MatterSpecification.v11.Cluster § 1.2.6.4

#### Source

[packages/matter.js/src/behavior/definitions/identify/IdentifyInterface.ts:37](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/identify/IdentifyInterface.ts#L37)

***

### IdentifyRequest

> **IdentifyRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvIdentifyRequest`](../../../../cluster/export/namespaces/Identify/README.md#tlvidentifyrequest)\>

This command starts or stops the receiving device identifying itself.

#### See

MatterSpecification.v11.Cluster § 1.2.6.1

#### Source

[packages/matter.js/src/behavior/definitions/identify/IdentifyInterface.ts:18](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/identify/IdentifyInterface.ts#L18)

***

### TriggerEffectRequest

> **TriggerEffectRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvTriggerEffectRequest`](../../../../cluster/export/namespaces/Identify/README.md#tlvtriggereffectrequest)\>

This command allows the support of feedback to the user, such as a certain light effect. It is used to allow an
implementation to provide visual feedback to the user under certain circumstances such as a color light turning
green when it has successfully connected to a network. The use of this command and the effects themselves are
entirely up to the implementer to use whenever a visual feedback is useful but it is not the same as and does not
replace the identify mechanism used during commissioning.

#### See

MatterSpecification.v11.Cluster § 1.2.6.3

#### Source

[packages/matter.js/src/behavior/definitions/identify/IdentifyInterface.ts:29](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/identify/IdentifyInterface.ts#L29)

## Variables

### IdentifyBehavior

> `const` **IdentifyBehavior**: [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../cluster/export/namespaces/Identify/interfaces/Cluster.md), [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../cluster/export/namespaces/ClusterBehavior/README.md), [`IdentifyInterface`](README.md#identifyinterface)\>, [`IdentifyInterface`](README.md#identifyinterface)\>

IdentifyBehavior is the base class for objects that support interaction with [Identify.Cluster](../../../../cluster/export/namespaces/Identify/README.md#cluster).

This class does not have optional features of Identify.Cluster enabled. You can enable additional features using
IdentifyBehavior.with.

#### Source

[packages/matter.js/src/behavior/definitions/identify/IdentifyBehavior.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/identify/IdentifyBehavior.ts#L19)
