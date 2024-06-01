[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [AccessControl](../README.md) / AccessControlEntryChangedEvent

# Interface: AccessControlEntryChangedEvent

Body of the AccessControl accessControlEntryChanged event

## See

MatterSpecification.v11.Core § 9.10.7.1

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvAccessControlEntryChangedEvent`](../README.md#tlvaccesscontrolentrychangedevent)\>

## Properties

### adminNodeId

> **adminNodeId**: `null` \| [`NodeId`](../../../../datatype/README.md#nodeid)

The Node ID of the Administrator that made the change, if the change occurred via a CASE session.

Exactly one of AdminNodeID and AdminPasscodeID shall be set, depending on whether the change occurred via a
CASE or PASE session; the other shall be null.

#### See

MatterSpecification.v11.Core § 9.10.7.1.1

#### Inherited from

`TypeFromSchema.adminNodeId`

#### Source

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:245

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

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:255

***

### changeType

> **changeType**: [`ChangeType`](../enumerations/ChangeType.md)

The type of change as appropriate.

#### See

MatterSpecification.v11.Core § 9.10.7.1.3

#### Inherited from

`TypeFromSchema.changeType`

#### Source

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:261

***

### fabricIndex

> **fabricIndex**: [`FabricIndex`](../../../../datatype/README.md#fabricindex)

#### Inherited from

`TypeFromSchema.fabricIndex`

#### Source

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:368

***

### latestValue

> **latestValue**: `null` \| [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>

The latest value of the changed entry.

This field SHOULD be set if resources are adequate for it; otherwise it shall be set to NULL if resources
are scarce.

#### See

MatterSpecification.v11.Core § 9.10.7.1.4

#### Inherited from

`TypeFromSchema.latestValue`

#### Source

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:270
