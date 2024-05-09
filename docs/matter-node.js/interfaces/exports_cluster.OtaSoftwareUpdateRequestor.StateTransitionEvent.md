[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [OtaSoftwareUpdateRequestor](../modules/exports_cluster.OtaSoftwareUpdateRequestor.md) / StateTransitionEvent

# Interface: StateTransitionEvent

[exports/cluster](../modules/exports_cluster.md).[OtaSoftwareUpdateRequestor](../modules/exports_cluster.OtaSoftwareUpdateRequestor.md).StateTransitionEvent

Body of the OtaSoftwareUpdateRequestor stateTransition event

**`See`**

MatterSpecification.v11.Core § 11.19.7.7.1

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvStateTransitionEvent`](../modules/exports_cluster.OtaSoftwareUpdateRequestor.md#tlvstatetransitionevent)\>

  ↳ **`StateTransitionEvent`**

## Table of contents

### Properties

- [newState](exports_cluster.OtaSoftwareUpdateRequestor.StateTransitionEvent.md#newstate)
- [previousState](exports_cluster.OtaSoftwareUpdateRequestor.StateTransitionEvent.md#previousstate)
- [reason](exports_cluster.OtaSoftwareUpdateRequestor.StateTransitionEvent.md#reason)
- [targetSoftwareVersion](exports_cluster.OtaSoftwareUpdateRequestor.StateTransitionEvent.md#targetsoftwareversion)

## Properties

### newState

• **newState**: [`UpdateState`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.UpdateState.md)

#### Inherited from

TypeFromSchema.newState

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:143

___

### previousState

• **previousState**: [`UpdateState`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.UpdateState.md)

#### Inherited from

TypeFromSchema.previousState

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:142

___

### reason

• **reason**: [`ChangeReason`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.ChangeReason.md)

#### Inherited from

TypeFromSchema.reason

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:144

___

### targetSoftwareVersion

• **targetSoftwareVersion**: ``null`` \| `number`

#### Inherited from

TypeFromSchema.targetSoftwareVersion

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:145
