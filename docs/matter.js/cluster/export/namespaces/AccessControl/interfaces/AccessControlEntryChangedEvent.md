[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [AccessControl](../README.md) / AccessControlEntryChangedEvent

# Interface: AccessControlEntryChangedEvent

Body of the AccessControl accessControlEntryChanged event

## See

MatterSpecification.v11.Core § 9.10.7.1

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvAccessControlEntryChangedEvent`](../README.md#tlvaccesscontrolentrychangedevent)\>

## Properties

### adminNodeId

> **adminNodeId**: `null` \| [`NodeId`](../../../../../datatype/export/README.md#nodeid)

The Node ID of the Administrator that made the change, if the change occurred via a CASE session.

Exactly one of AdminNodeID and AdminPasscodeID shall be set, depending on whether the change occurred via a
CASE or PASE session; the other shall be null.

#### See

MatterSpecification.v11.Core § 9.10.7.1.1

#### Inherited from

`TypeFromSchema.adminNodeId`

#### Source

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:282](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L282)

***

### adminPasscodeId

> **adminPasscodeId**: `null` \| `number`

The Passcode ID of the Administrator that made the change, if the change occurred via a PASE session.
Non-zero values are reserved for future use (see PasscodeId generation in PBKDFParamRequest).

Exactly one of AdminNodeID and AdminPasscodeID shall be set, depending on whether the change occurred via a
CASE or PASE session; the other shall be null.

#### See

MatterSpecification.v11.Core § 9.10.7.1.2

#### Inherited from

`TypeFromSchema.adminPasscodeId`

#### Source

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:293](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L293)

***

### changeType

> **changeType**: [`ChangeType`](../enumerations/ChangeType.md)

The type of change as appropriate.

#### See

MatterSpecification.v11.Core § 9.10.7.1.3

#### Inherited from

`TypeFromSchema.changeType`

#### Source

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:300](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L300)

***

### fabricIndex

> **fabricIndex**: [`FabricIndex`](../../../../../datatype/export/README.md#fabricindex)

#### Inherited from

`TypeFromSchema.fabricIndex`

#### Source

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:312](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L312)

***

### latestValue

> **latestValue**: `null` \| [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>

The latest value of the changed entry.

This field SHOULD be set if resources are adequate for it; otherwise it shall be set to NULL if resources
are scarce.

#### See

MatterSpecification.v11.Core § 9.10.7.1.4

#### Inherited from

`TypeFromSchema.latestValue`

#### Source

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:310](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L310)
