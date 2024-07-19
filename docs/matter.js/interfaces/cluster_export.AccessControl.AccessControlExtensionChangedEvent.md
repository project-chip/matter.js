[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [AccessControl](../modules/cluster_export.AccessControl.md) / AccessControlExtensionChangedEvent

# Interface: AccessControlExtensionChangedEvent

[cluster/export](../modules/cluster_export.md).[AccessControl](../modules/cluster_export.AccessControl.md).AccessControlExtensionChangedEvent

Body of the AccessControl accessControlExtensionChanged event

**`See`**

MatterSpecification.v11.Core § 9.10.7.2

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvAccessControlExtensionChangedEvent`](../modules/cluster_export.AccessControl.md#tlvaccesscontrolextensionchangedevent)\>

  ↳ **`AccessControlExtensionChangedEvent`**

## Table of contents

### Properties

- [adminNodeId](cluster_export.AccessControl.AccessControlExtensionChangedEvent.md#adminnodeid)
- [adminPasscodeId](cluster_export.AccessControl.AccessControlExtensionChangedEvent.md#adminpasscodeid)
- [changeType](cluster_export.AccessControl.AccessControlExtensionChangedEvent.md#changetype)
- [fabricIndex](cluster_export.AccessControl.AccessControlExtensionChangedEvent.md#fabricindex)
- [latestValue](cluster_export.AccessControl.AccessControlExtensionChangedEvent.md#latestvalue)

## Properties

### adminNodeId

• **adminNodeId**: ``null`` \| [`NodeId`](../modules/datatype_export.md#nodeid)

The Node ID of the Administrator that made the change, if the change occurred via a CASE session.

Exactly one of AdminNodeID and AdminPasscodeID shall be set, depending on whether the change occurred via a
CASE or PASE session; the other shall be null.

**`See`**

MatterSpecification.v11.Core § 9.10.7.2.1

#### Inherited from

TypeFromSchema.adminNodeId

#### Defined in

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:336](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L336)

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

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:347](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L347)

___

### changeType

• **changeType**: [`ChangeType`](../enums/cluster_export.AccessControl.ChangeType.md)

The type of change as appropriate.

**`See`**

MatterSpecification.v11.Core § 9.10.7.2.3

#### Inherited from

TypeFromSchema.changeType

#### Defined in

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:354](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L354)

___

### fabricIndex

• **fabricIndex**: [`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Inherited from

TypeFromSchema.fabricIndex

#### Defined in

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:366](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L366)

___

### latestValue

• **latestValue**: ``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\>  }\>

The latest value of the changed extension.

This field SHOULD be set if resources are adequate for it; otherwise it shall be set to NULL if resources
are scarce.

**`See`**

MatterSpecification.v11.Core § 9.10.7.2.4

#### Inherited from

TypeFromSchema.latestValue

#### Defined in

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:364](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L364)
