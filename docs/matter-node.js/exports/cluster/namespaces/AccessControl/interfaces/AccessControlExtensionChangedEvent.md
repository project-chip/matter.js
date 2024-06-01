[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [AccessControl](../README.md) / AccessControlExtensionChangedEvent

# Interface: AccessControlExtensionChangedEvent

Body of the AccessControl accessControlExtensionChanged event

## See

MatterSpecification.v11.Core § 9.10.7.2

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvAccessControlExtensionChangedEvent`](../README.md#tlvaccesscontrolextensionchangedevent)\>

## Properties

### adminNodeId

> **adminNodeId**: `null` \| [`NodeId`](../../../../datatype/README.md#nodeid)

The Node ID of the Administrator that made the change, if the change occurred via a CASE session.

Exactly one of AdminNodeID and AdminPasscodeID shall be set, depending on whether the change occurred via a
CASE or PASE session; the other shall be null.

#### See

MatterSpecification.v11.Core § 9.10.7.2.1

#### Inherited from

`TypeFromSchema.adminNodeId`

#### Source

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:391

***

### adminPasscodeId

> **adminPasscodeId**: `null` \| `number`

The Passcode ID of the Administrator that made the change, if the change occurred via a PASE session.
Non-zero values are reserved for future use (see PasscodeId generation in PBKDFParamRequest).

Exactly one of AdminNodeID and AdminPasscodeID shall be set, depending on whether the change occurred via a
CASE or PASE session; the other shall be null.

#### See

MatterSpecification.v11.Core § 9.10.7.2.2

#### Inherited from

`TypeFromSchema.adminPasscodeId`

#### Source

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:401

***

### changeType

> **changeType**: [`ChangeType`](../enumerations/ChangeType.md)

The type of change as appropriate.

#### See

MatterSpecification.v11.Core § 9.10.7.2.3

#### Inherited from

`TypeFromSchema.changeType`

#### Source

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:407

***

### fabricIndex

> **fabricIndex**: [`FabricIndex`](../../../../datatype/README.md#fabricindex)

#### Inherited from

`TypeFromSchema.fabricIndex`

#### Source

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:433

***

### latestValue

> **latestValue**: `null` \| [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>

The latest value of the changed extension.

This field SHOULD be set if resources are adequate for it; otherwise it shall be set to NULL if resources
are scarce.

#### See

MatterSpecification.v11.Core § 9.10.7.2.4

#### Inherited from

`TypeFromSchema.latestValue`

#### Source

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:416
