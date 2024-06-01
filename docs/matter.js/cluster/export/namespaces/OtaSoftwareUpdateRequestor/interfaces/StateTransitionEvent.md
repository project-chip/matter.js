[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [OtaSoftwareUpdateRequestor](../README.md) / StateTransitionEvent

# Interface: StateTransitionEvent

Body of the OtaSoftwareUpdateRequestor stateTransition event

## See

MatterSpecification.v11.Core § 11.19.7.7.1

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvStateTransitionEvent`](../README.md#tlvstatetransitionevent)\>

## Properties

### newState

> **newState**: [`UpdateState`](../enumerations/UpdateState.md)

#### Inherited from

`TypeFromSchema.newState`

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:182](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L182)

***

### previousState

> **previousState**: [`UpdateState`](../enumerations/UpdateState.md)

#### Inherited from

`TypeFromSchema.previousState`

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:181](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L181)

***

### reason

> **reason**: [`ChangeReason`](../enumerations/ChangeReason.md)

#### Inherited from

`TypeFromSchema.reason`

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:183](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L183)

***

### targetSoftwareVersion

> **targetSoftwareVersion**: `null` \| `number`

#### Inherited from

`TypeFromSchema.targetSoftwareVersion`

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:184](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L184)
