[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [AccessControl](../modules/cluster_export.AccessControl.md) / AccessControlExtensionChangedEvent

# Interface: AccessControlExtensionChangedEvent

[cluster/export](../modules/cluster_export.md).[AccessControl](../modules/cluster_export.AccessControl.md).AccessControlExtensionChangedEvent

Body of the AccessControl accessControlExtensionChanged event

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 9.10.7.2

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

#### Inherited from

TypeFromSchema.adminNodeId

#### Defined in

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:329](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L329)

___

### adminPasscodeId

• **adminPasscodeId**: ``null`` \| `number`

#### Inherited from

TypeFromSchema.adminPasscodeId

#### Defined in

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:330](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L330)

___

### changeType

• **changeType**: [`ChangeType`](../enums/cluster_export.AccessControl.ChangeType.md)

#### Inherited from

TypeFromSchema.changeType

#### Defined in

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:331](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L331)

___

### fabricIndex

• **fabricIndex**: [`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Inherited from

TypeFromSchema.fabricIndex

#### Defined in

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:333](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L333)

___

### latestValue

• **latestValue**: ``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\>  }\>

#### Inherited from

TypeFromSchema.latestValue

#### Defined in

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:332](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L332)
