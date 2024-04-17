[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [AccessControl](../modules/cluster_export.AccessControl.md) / AccessControlEntryChangedEvent

# Interface: AccessControlEntryChangedEvent

[cluster/export](../modules/cluster_export.md).[AccessControl](../modules/cluster_export.AccessControl.md).AccessControlEntryChangedEvent

Body of the AccessControl accessControlEntryChanged event

**`See`**

MatterSpecification.v11.Core § 9.10.7.1

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvAccessControlEntryChangedEvent`](../modules/cluster_export.AccessControl.md#tlvaccesscontrolentrychangedevent)\>

  ↳ **`AccessControlEntryChangedEvent`**

## Table of contents

### Properties

- [adminNodeId](cluster_export.AccessControl.AccessControlEntryChangedEvent.md#adminnodeid)
- [adminPasscodeId](cluster_export.AccessControl.AccessControlEntryChangedEvent.md#adminpasscodeid)
- [changeType](cluster_export.AccessControl.AccessControlEntryChangedEvent.md#changetype)
- [fabricIndex](cluster_export.AccessControl.AccessControlEntryChangedEvent.md#fabricindex)
- [latestValue](cluster_export.AccessControl.AccessControlEntryChangedEvent.md#latestvalue)

## Properties

### adminNodeId

• **adminNodeId**: ``null`` \| [`NodeId`](../modules/datatype_export.md#nodeid)

The Node ID of the Administrator that made the change, if the change occurred via a CASE session.

Exactly one of AdminNodeID and AdminPasscodeID shall be set, depending on whether the change occurred via a
CASE or PASE session; the other shall be null.

**`See`**

MatterSpecification.v11.Core § 9.10.7.1.1

#### Inherited from

TypeFromSchema.adminNodeId

#### Defined in

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:282](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L282)

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

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:293](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L293)

___

### changeType

• **changeType**: [`ChangeType`](../enums/cluster_export.AccessControl.ChangeType.md)

The type of change as appropriate.

**`See`**

MatterSpecification.v11.Core § 9.10.7.1.3

#### Inherited from

TypeFromSchema.changeType

#### Defined in

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:300](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L300)

___

### fabricIndex

• **fabricIndex**: [`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Inherited from

TypeFromSchema.fabricIndex

#### Defined in

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:312](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L312)

___

### latestValue

• **latestValue**: ``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `authMode`: [`FieldType`](tlv_export.FieldType.md)\<[`AccessControlEntryAuthMode`](../enums/cluster_export.AccessControl.AccessControlEntryAuthMode.md)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `privilege`: [`FieldType`](tlv_export.FieldType.md)\<[`AccessControlEntryPrivilege`](../enums/cluster_export.AccessControl.AccessControlEntryPrivilege.md)\> ; `subjects`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`NodeId`](../modules/datatype_export.md#nodeid)[]\> ; `targets`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `cluster`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`ClusterId`](../modules/datatype_export.md#clusterid)\<...\>\> ; `deviceType`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`DeviceTypeId`](../modules/datatype_export.md#devicetypeid)\<...\>\> ; `endpoint`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\>  }\>[]\>  }\>

The latest value of the changed entry.

This field SHOULD be set if resources are adequate for it; otherwise it shall be set to NULL if resources
are scarce.

**`See`**

MatterSpecification.v11.Core § 9.10.7.1.4

#### Inherited from

TypeFromSchema.latestValue

#### Defined in

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:310](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L310)
