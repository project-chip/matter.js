[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/access-control/export](../modules/behavior_definitions_access_control_export.md) / [AccessControlBehavior](../modules/behavior_definitions_access_control_export.AccessControlBehavior.md) / State

# Interface: State

[behavior/definitions/access-control/export](../modules/behavior_definitions_access_control_export.md).[AccessControlBehavior](../modules/behavior_definitions_access_control_export.AccessControlBehavior.md).State

## Hierarchy

- [`StateType`](../modules/behavior_definitions_access_control_export._internal_.md#statetype)

  ↳ **`State`**

## Table of contents

### Properties

- [accessControlEntriesPerFabric](behavior_definitions_access_control_export.AccessControlBehavior.State.md#accesscontrolentriesperfabric)
- [acl](behavior_definitions_access_control_export.AccessControlBehavior.State.md#acl)
- [extension](behavior_definitions_access_control_export.AccessControlBehavior.State.md#extension)
- [subjectsPerAccessControlEntry](behavior_definitions_access_control_export.AccessControlBehavior.State.md#subjectsperaccesscontrolentry)
- [targetsPerAccessControlEntry](behavior_definitions_access_control_export.AccessControlBehavior.State.md#targetsperaccesscontrolentry)

## Properties

### accessControlEntriesPerFabric

• **accessControlEntriesPerFabric**: `number`

This attribute shall provide the minimum number of ACL Entries per fabric that are supported by this
server.

Since reducing this value over time may invalidate ACL entries already written, this value shall NOT
decrease across time as software updates occur that could impact this value. If this is a concern for a
given implementation, it is recommended to only use the minimum value required and avoid reporting a
higher value than the required minimum.

**`See`**

MatterSpecification.v11.Core § 9.10.5.7

#### Inherited from

StateType.accessControlEntriesPerFabric

#### Defined in

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:421](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L421)

___

### acl

• **acl**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `authMode`: [`FieldType`](tlv_export.FieldType.md)\<[`AccessControlEntryAuthMode`](../enums/cluster_export.AccessControl.AccessControlEntryAuthMode.md)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `privilege`: [`FieldType`](tlv_export.FieldType.md)\<[`AccessControlEntryPrivilege`](../enums/cluster_export.AccessControl.AccessControlEntryPrivilege.md)\> ; `subjects`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`NodeId`](../modules/datatype_export.md#nodeid)[]\> ; `targets`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `cluster`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`ClusterId`](../modules/datatype_export.md#clusterid)\<...\>\> ; `deviceType`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`DeviceTypeId`](../modules/datatype_export.md#devicetypeid)\<...\>\> ; `endpoint`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\>  }\>[]\>  }\>[]

An attempt to add an Access Control Entry when no more entries are available shall result in a
RESOURCE_EXHAUSTED error being reported and the ACL attribute shall NOT have the entry

added to it. See access control limits.

See the AccessControlEntriesPerFabric attribute for the actual value of the number of entries per fabric
supported by the server.

Each Access Control Entry codifies a single grant of privilege on this Node, and is used by the Access
Control Privilege Granting algorithm to determine if a subject has privilege to interact with targets on
the Node.

**`See`**

MatterSpecification.v11.Core § 9.10.5.3

#### Inherited from

StateType.acl

#### Defined in

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:366](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L366)

___

### extension

• `Optional` **extension**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\>  }\>[]

If present, the Access Control Extensions may be used by Administrators to store arbitrary data related
to fabric’s Access Control Entries.

The Access Control Extension list shall support a single extension entry per supported fabric.

**`See`**

MatterSpecification.v11.Core § 9.10.5.4

#### Inherited from

StateType.extension

#### Defined in

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:380](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L380)

___

### subjectsPerAccessControlEntry

• **subjectsPerAccessControlEntry**: `number`

This attribute shall provide the minimum number of Subjects per entry that are supported by this server.

Since reducing this value over time may invalidate ACL entries already written, this value shall NOT
decrease across time as software updates occur that could impact this value. If this is a concern for a
given implementation, it is recommended to only use the minimum value required and avoid reporting a
higher value than the required minimum.

**`See`**

MatterSpecification.v11.Core § 9.10.5.5

#### Inherited from

StateType.subjectsPerAccessControlEntry

#### Defined in

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:396](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L396)

___

### targetsPerAccessControlEntry

• **targetsPerAccessControlEntry**: `number`

This attribute shall provide the minimum number of Targets per entry that are supported by this server.

Since reducing this value over time may invalidate ACL entries already written, this value shall NOT
decrease across time as software updates occur that could impact this value. If this is a concern for a
given implementation, it is recommended to only use the minimum value required and avoid reporting a
higher value than the required minimum.

**`See`**

MatterSpecification.v11.Core § 9.10.5.6

#### Inherited from

StateType.targetsPerAccessControlEntry

#### Defined in

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:408](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L408)
