[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [OtaSoftwareUpdateRequestor](../modules/cluster_export.OtaSoftwareUpdateRequestor.md) / StateTransitionEvent

# Interface: StateTransitionEvent

[cluster/export](../modules/cluster_export.md).[OtaSoftwareUpdateRequestor](../modules/cluster_export.OtaSoftwareUpdateRequestor.md).StateTransitionEvent

Body of the OtaSoftwareUpdateRequestor stateTransition event

**`See`**

MatterSpecification.v11.Core § 11.19.7.7.1

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvStateTransitionEvent`](../modules/cluster_export.OtaSoftwareUpdateRequestor.md#tlvstatetransitionevent)\>

  ↳ **`StateTransitionEvent`**

## Table of contents

### Properties

- [newState](cluster_export.OtaSoftwareUpdateRequestor.StateTransitionEvent.md#newstate)
- [previousState](cluster_export.OtaSoftwareUpdateRequestor.StateTransitionEvent.md#previousstate)
- [reason](cluster_export.OtaSoftwareUpdateRequestor.StateTransitionEvent.md#reason)
- [targetSoftwareVersion](cluster_export.OtaSoftwareUpdateRequestor.StateTransitionEvent.md#targetsoftwareversion)

## Properties

### newState

• **newState**: [`UpdateState`](../enums/cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md)

#### Inherited from

TypeFromSchema.newState

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:182](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L182)

___

### previousState

• **previousState**: [`UpdateState`](../enums/cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md)

#### Inherited from

TypeFromSchema.previousState

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:181](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L181)

___

### reason

• **reason**: [`ChangeReason`](../enums/cluster_export.OtaSoftwareUpdateRequestor.ChangeReason.md)

#### Inherited from

TypeFromSchema.reason

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:183](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L183)

___

### targetSoftwareVersion

• **targetSoftwareVersion**: ``null`` \| `number`

#### Inherited from

TypeFromSchema.targetSoftwareVersion

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:184](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L184)
