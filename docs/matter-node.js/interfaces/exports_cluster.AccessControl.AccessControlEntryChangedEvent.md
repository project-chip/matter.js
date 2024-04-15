[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [AccessControl](../modules/exports_cluster.AccessControl.md) / AccessControlEntryChangedEvent

# Interface: AccessControlEntryChangedEvent

[exports/cluster](../modules/exports_cluster.md).[AccessControl](../modules/exports_cluster.AccessControl.md).AccessControlEntryChangedEvent

Body of the AccessControl accessControlEntryChanged event

**`See`**

MatterSpecification.v11.Core § 9.10.7.1

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvAccessControlEntryChangedEvent`](../modules/exports_cluster.AccessControl.md#tlvaccesscontrolentrychangedevent)\>

  ↳ **`AccessControlEntryChangedEvent`**

## Table of contents

### Properties

- [adminNodeId](exports_cluster.AccessControl.AccessControlEntryChangedEvent.md#adminnodeid)
- [adminPasscodeId](exports_cluster.AccessControl.AccessControlEntryChangedEvent.md#adminpasscodeid)
- [changeType](exports_cluster.AccessControl.AccessControlEntryChangedEvent.md#changetype)
- [fabricIndex](exports_cluster.AccessControl.AccessControlEntryChangedEvent.md#fabricindex)
- [latestValue](exports_cluster.AccessControl.AccessControlEntryChangedEvent.md#latestvalue)

## Properties

### adminNodeId

• **adminNodeId**: ``null`` \| [`NodeId`](../modules/exports_datatype.md#nodeid)

The Node ID of the Administrator that made the change, if the change occurred via a CASE session.

Exactly one of AdminNodeID and AdminPasscodeID shall be set, depending on whether the change occurred via a
CASE or PASE session; the other shall be null.

**`See`**

MatterSpecification.v11.Core § 9.10.7.1.1

#### Inherited from

TypeFromSchema.adminNodeId

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:245

___

### adminPasscodeId

• **adminPasscodeId**: ``null`` \| `number`

The Passcode ID of the Administrator that made the change, if the change occurred via a PASE session.
Non-zero values are reserved for future use (see PasscodeId generation in PBKDFParamRequest).

Exactly one of AdminNodeID and AdminPasscodeID shall be set, depending on whether the change occurred via a
CASE or PASE session; the other shall be null.

**`See`**

MatterSpecification.v11.Core § 9.10.7.1.2

#### Inherited from

TypeFromSchema.adminPasscodeId

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:255

___

### changeType

• **changeType**: [`ChangeType`](../enums/exports_cluster.AccessControl.ChangeType.md)

The type of change as appropriate.

**`See`**

MatterSpecification.v11.Core § 9.10.7.1.3

#### Inherited from

TypeFromSchema.changeType

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:261

___

### fabricIndex

• **fabricIndex**: [`FabricIndex`](../modules/exports_datatype.md#fabricindex)

#### Inherited from

TypeFromSchema.fabricIndex

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:368

___

### latestValue

• **latestValue**: ``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `authMode`: [`FieldType`](exports_tlv.FieldType.md)\<[`AccessControlEntryAuthMode`](../enums/exports_cluster.AccessControl.AccessControlEntryAuthMode.md)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `privilege`: [`FieldType`](exports_tlv.FieldType.md)\<[`AccessControlEntryPrivilege`](../enums/exports_cluster.AccessControl.AccessControlEntryPrivilege.md)\> ; `subjects`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`NodeId`](../modules/exports_datatype.md#nodeid)[]\> ; `targets`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `cluster`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`ClusterId`](../modules/exports_datatype.md#clusterid)\<...\>\> ; `deviceType`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`DeviceTypeId`](../modules/exports_datatype.md#devicetypeid)\<...\>\> ; `endpoint`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\>  }\>[]\>  }\>

The latest value of the changed entry.

This field SHOULD be set if resources are adequate for it; otherwise it shall be set to NULL if resources
are scarce.

**`See`**

MatterSpecification.v11.Core § 9.10.7.1.4

#### Inherited from

TypeFromSchema.latestValue

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:270
