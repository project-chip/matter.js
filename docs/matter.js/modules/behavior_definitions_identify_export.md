[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / behavior/definitions/identify/export

# Module: behavior/definitions/identify/export

## Table of contents

### Modules

- [\<internal\>](behavior_definitions_identify_export._internal_.md)

### Namespaces

- [IdentifyBehavior](behavior_definitions_identify_export.IdentifyBehavior.md)
- [IdentifyInterface](behavior_definitions_identify_export.IdentifyInterface.md)
- [IdentifyServer](behavior_definitions_identify_export.IdentifyServer.md)

### Classes

- [IdentifyServer](../classes/behavior_definitions_identify_export.IdentifyServer-1.md)

### Interfaces

- [IdentifyBehavior](../interfaces/behavior_definitions_identify_export.IdentifyBehavior-1.md)

### Type Aliases

- [IdentifyInterface](behavior_definitions_identify_export.md#identifyinterface)
- [IdentifyQueryResponse](behavior_definitions_identify_export.md#identifyqueryresponse)
- [IdentifyRequest](behavior_definitions_identify_export.md#identifyrequest)
- [TriggerEffectRequest](behavior_definitions_identify_export.md#triggereffectrequest)

### Variables

- [IdentifyBehavior](behavior_definitions_identify_export.md#identifybehavior)

## Type Aliases

### IdentifyInterface

Ƭ **IdentifyInterface**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `components` | [\{ `flags`: {} ; `methods`: [`Base`](../interfaces/behavior_definitions_identify_export.IdentifyInterface.Base.md)  }, \{ `flags`: \{ `query`: ``true``  } ; `methods`: [`Query`](../interfaces/behavior_definitions_identify_export.IdentifyInterface.Query.md)  }] |

#### Defined in

[packages/matter.js/src/behavior/definitions/identify/IdentifyInterface.ts:39](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/identify/IdentifyInterface.ts#L39)

[packages/matter.js/src/behavior/definitions/identify/IdentifyInterface.ts:73](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/identify/IdentifyInterface.ts#L73)

___

### IdentifyQueryResponse

Ƭ **IdentifyQueryResponse**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvIdentifyQueryResponse`](cluster_export.Identify.md#tlvidentifyqueryresponse)\>

This command is generated in response to receiving an IdentifyQuery command, see IdentifyQuery Command, in the case
that the device is currently identifying itself.

**`See`**

MatterSpecification.v11.Cluster § 1.2.6.4

#### Defined in

[packages/matter.js/src/behavior/definitions/identify/IdentifyInterface.ts:37](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/identify/IdentifyInterface.ts#L37)

___

### IdentifyRequest

Ƭ **IdentifyRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvIdentifyRequest`](cluster_export.Identify.md#tlvidentifyrequest)\>

This command starts or stops the receiving device identifying itself.

**`See`**

MatterSpecification.v11.Cluster § 1.2.6.1

#### Defined in

[packages/matter.js/src/behavior/definitions/identify/IdentifyInterface.ts:18](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/identify/IdentifyInterface.ts#L18)

___

### TriggerEffectRequest

Ƭ **TriggerEffectRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvTriggerEffectRequest`](cluster_export.Identify.md#tlvtriggereffectrequest)\>

This command allows the support of feedback to the user, such as a certain light effect. It is used to allow an
implementation to provide visual feedback to the user under certain circumstances such as a color light turning
green when it has successfully connected to a network. The use of this command and the effects themselves are
entirely up to the implementer to use whenever a visual feedback is useful but it is not the same as and does not
replace the identify mechanism used during commissioning.

**`See`**

MatterSpecification.v11.Cluster § 1.2.6.3

#### Defined in

[packages/matter.js/src/behavior/definitions/identify/IdentifyInterface.ts:29](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/identify/IdentifyInterface.ts#L29)

## Variables

### IdentifyBehavior

• `Const` **IdentifyBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.Identify.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`IdentifyInterface`](behavior_definitions_identify_export.md#identifyinterface)\>, [`IdentifyInterface`](behavior_definitions_identify_export.md#identifyinterface)\>

IdentifyBehavior is the base class for objects that support interaction with [Identify.Cluster](cluster_export.Identify.md#cluster).

This class does not have optional features of Identify.Cluster enabled. You can enable additional features using
IdentifyBehavior.with.

#### Defined in

[packages/matter.js/src/behavior/definitions/identify/IdentifyBehavior.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/identify/IdentifyBehavior.ts#L19)

[packages/matter.js/src/behavior/definitions/identify/IdentifyBehavior.ts:24](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/identify/IdentifyBehavior.ts#L24)

[packages/matter.js/src/behavior/definitions/identify/IdentifyBehavior.ts:26](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/identify/IdentifyBehavior.ts#L26)
