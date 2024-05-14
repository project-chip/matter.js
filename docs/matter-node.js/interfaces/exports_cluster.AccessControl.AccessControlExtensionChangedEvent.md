[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [AccessControl](../modules/exports_cluster.AccessControl.md) / AccessControlExtensionChangedEvent

# Interface: AccessControlExtensionChangedEvent

[exports/cluster](../modules/exports_cluster.md).[AccessControl](../modules/exports_cluster.AccessControl.md).AccessControlExtensionChangedEvent

Body of the AccessControl accessControlExtensionChanged event

**`See`**

MatterSpecification.v11.Core § 9.10.7.2

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvAccessControlExtensionChangedEvent`](../modules/exports_cluster.AccessControl.md#tlvaccesscontrolextensionchangedevent)\>

  ↳ **`AccessControlExtensionChangedEvent`**

## Table of contents

### Properties

- [adminNodeId](exports_cluster.AccessControl.AccessControlExtensionChangedEvent.md#adminnodeid)
- [adminPasscodeId](exports_cluster.AccessControl.AccessControlExtensionChangedEvent.md#adminpasscodeid)
- [changeType](exports_cluster.AccessControl.AccessControlExtensionChangedEvent.md#changetype)
- [fabricIndex](exports_cluster.AccessControl.AccessControlExtensionChangedEvent.md#fabricindex)
- [latestValue](exports_cluster.AccessControl.AccessControlExtensionChangedEvent.md#latestvalue)

## Properties

### adminNodeId

• **adminNodeId**: ``null`` \| [`NodeId`](../modules/exports_datatype.md#nodeid)

The Node ID of the Administrator that made the change, if the change occurred via a CASE session.

Exactly one of AdminNodeID and AdminPasscodeID shall be set, depending on whether the change occurred via a
CASE or PASE session; the other shall be null.

**`See`**

MatterSpecification.v11.Core § 9.10.7.2.1

#### Inherited from

TypeFromSchema.adminNodeId

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:391

___

### adminPasscodeId

• **adminPasscodeId**: ``null`` \| `number`

The Passcode ID of the Administrator that made the change, if the change occurred via a PASE session.
Non-zero values are reserved for future use (see PasscodeId generation in PBKDFParamRequest).

Exactly one of AdminNodeID and AdminPasscodeID shall be set, depending on whether the change occurred via a
CASE or PASE session; the other shall be null.

**`See`**

MatterSpecification.v11.Core § 9.10.7.2.2

#### Inherited from

TypeFromSchema.adminPasscodeId

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:401

___

### changeType

• **changeType**: [`ChangeType`](../enums/exports_cluster.AccessControl.ChangeType.md)

The type of change as appropriate.

**`See`**

MatterSpecification.v11.Core § 9.10.7.2.3

#### Inherited from

TypeFromSchema.changeType

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:407

___

### fabricIndex

• **fabricIndex**: [`FabricIndex`](../modules/exports_datatype.md#fabricindex)

#### Inherited from

TypeFromSchema.fabricIndex

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:433

___

### latestValue

• **latestValue**: ``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\>  }\>

The latest value of the changed extension.

This field SHOULD be set if resources are adequate for it; otherwise it shall be set to NULL if resources
are scarce.

**`See`**

MatterSpecification.v11.Core § 9.10.7.2.4

#### Inherited from

TypeFromSchema.latestValue

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:416
