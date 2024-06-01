[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [OtaSoftwareUpdateRequestor](../README.md) / StateTransitionEvent

# Interface: StateTransitionEvent

Body of the OtaSoftwareUpdateRequestor stateTransition event

## See

MatterSpecification.v11.Core § 11.19.7.7.1

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvStateTransitionEvent`](../README.md#tlvstatetransitionevent)\>

## Properties

### newState

> **newState**: [`UpdateState`](../enumerations/UpdateState.md)

#### Inherited from

`TypeFromSchema.newState`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:141

***

### previousState

> **previousState**: [`UpdateState`](../enumerations/UpdateState.md)

#### Inherited from

`TypeFromSchema.previousState`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:140

***

### reason

> **reason**: [`ChangeReason`](../enumerations/ChangeReason.md)

#### Inherited from

`TypeFromSchema.reason`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:142

***

### targetSoftwareVersion

> **targetSoftwareVersion**: `null` \| `number`

#### Inherited from

`TypeFromSchema.targetSoftwareVersion`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:143
