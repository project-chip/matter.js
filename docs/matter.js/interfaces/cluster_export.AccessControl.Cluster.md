[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [AccessControl](../modules/cluster_export.AccessControl.md) / Cluster

# Interface: Cluster

[cluster/export](../modules/cluster_export.md).[AccessControl](../modules/cluster_export.AccessControl.md).Cluster

Access Control

The Access Control Cluster exposes a data model view of a Node’s Access Control List (ACL), which codifies the
rules used to manage and enforce Access Control for the Node’s endpoints and their associated cluster instances.
Access to this Access Control Cluster itself requires a special Administer privilege level, such that only Nodes
granted such privilege (hereafter termed "Administrators") can manage the Access Control Cluster.

The Access Control Cluster shall be present on the root node endpoint of each Node, and shall NOT be present on
any other Endpoint of any Node.

**`See`**

MatterSpecification.v11.Core § 9.10

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ClusterInstance`](../modules/cluster_export.AccessControl.md#clusterinstance)\>

  ↳ **`Cluster`**

## Table of contents

### Properties

- [attributes](cluster_export.AccessControl.Cluster.md#attributes)
- [base](cluster_export.AccessControl.Cluster.md#base)
- [commands](cluster_export.AccessControl.Cluster.md#commands)
- [events](cluster_export.AccessControl.Cluster.md#events)
- [extensions](cluster_export.AccessControl.Cluster.md#extensions)
- [features](cluster_export.AccessControl.Cluster.md#features)
- [id](cluster_export.AccessControl.Cluster.md#id)
- [name](cluster_export.AccessControl.Cluster.md#name)
- [revision](cluster_export.AccessControl.Cluster.md#revision)
- [supportedFeatures](cluster_export.AccessControl.Cluster.md#supportedfeatures)
- [unknown](cluster_export.AccessControl.Cluster.md#unknown)

### Methods

- [alter](cluster_export.AccessControl.Cluster.md#alter)
- [enable](cluster_export.AccessControl.Cluster.md#enable)
- [set](cluster_export.AccessControl.Cluster.md#set)
- [with](cluster_export.AccessControl.Cluster.md#with)

## Properties

### attributes

• **attributes**: [`Merge`](../modules/util_export.md#merge)\<\{ `accessControlEntriesPerFabric`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `acl`: [`WritableFabricScopedAttribute`](cluster_export.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `authMode`: [`FieldType`](tlv_export.FieldType.md)\<[`AccessControlEntryAuthMode`](../enums/cluster_export.AccessControl.AccessControlEntryAuthMode.md)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `privilege`: [`FieldType`](tlv_export.FieldType.md)\<[`AccessControlEntryPrivilege`](../enums/cluster_export.AccessControl.AccessControlEntryPrivilege.md)\> ; `subjects`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`NodeId`](../modules/datatype_export.md#nodeid)[]\> ; `targets`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `cluster`: ... ; `deviceType`: ... ; `endpoint`: ...  }\>[]\>  }\>[], `any`\> ; `extension`: [`OptionalWritableFabricScopedAttribute`](cluster_export.OptionalWritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\>  }\>[], `any`\> ; `subjectsPerAccessControlEntry`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `targetsPerAccessControlEntry`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\>  }, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes)\<{}\>\>

#### Inherited from

Identity.attributes

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:86](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L86)

___

### base

• **base**: `undefined`

#### Inherited from

Identity.base

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:92](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L92)

___

### commands

• **commands**: `Object`

#### Inherited from

Identity.commands

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:89](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L89)

___

### events

• **events**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `accessControlEntryChanged` | [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `adminNodeId`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`NodeId`](../modules/datatype_export.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `changeType`: [`FieldType`](tlv_export.FieldType.md)\<[`ChangeType`](../enums/cluster_export.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `latestValue`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `authMode`: [`FieldType`](tlv_export.FieldType.md)\<[`AccessControlEntryAuthMode`](../enums/cluster_export.AccessControl.AccessControlEntryAuthMode.md)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `privilege`: [`FieldType`](tlv_export.FieldType.md)\<[`AccessControlEntryPrivilege`](../enums/cluster_export.AccessControl.AccessControlEntryPrivilege.md)\> ; `subjects`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| ...[]\> ; `targets`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| ...[]\>  }\>\>  }\>, `any`\> | The cluster shall send AccessControlEntryChanged events whenever its ACL attribute data is changed by an Administrator. • Each added entry shall generate an event with ChangeType Added. • Each changed entry shall generate an event with ChangeType Changed. • Each removed entry shall generate an event with ChangeType Removed. **`See`** MatterSpecification.v11.Core § 9.10.7.1 |
| `accessControlExtensionChanged` | [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `adminNodeId`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`NodeId`](../modules/datatype_export.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `changeType`: [`FieldType`](tlv_export.FieldType.md)\<[`ChangeType`](../enums/cluster_export.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `latestValue`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\>  }\>\>  }\>, `any`\> | The cluster shall send AccessControlExtensionChanged events whenever its extension attribute data is changed by an Administrator. • Each added extension shall generate an event with ChangeType Added. • Each changed extension shall generate an event with ChangeType Changed. • Each removed extension shall generate an event with ChangeType Removed. The Node ID of the Administrator that made the change, if the change occurred via a CASE session. Exactly one of AdminNodeID and AdminPasscodeID shall be set, depending on whether the change occurred via a CASE or PASE session; the other shall be null. The Passcode ID of the Administrator that made the change, if the change occurred via a PASE session. Non-zero values are reserved for future use (see PasscodeId generation in PBKDFParamRequest). Exactly one of AdminNodeID and AdminPasscodeID shall be set, depending on whether the change occurred via a CASE or PASE session; the other shall be null. The type of change as appropriate. The latest value of the changed extension. This field SHOULD be set if resources are adequate for it; otherwise it shall be set to NULL if resources are scarce. **`See`** MatterSpecification.v11.Core § 9.10.7.2 |

#### Inherited from

Identity.events

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:90](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L90)

___

### extensions

• **extensions**: `undefined`

#### Inherited from

Identity.extensions

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:93](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L93)

___

### features

• **features**: `Object`

#### Inherited from

Identity.features

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L84)

___

### id

• **id**: [`Branded`](../modules/util_export.md#branded)\<``31``, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L81)

___

### name

• **name**: ``"AccessControl"``

#### Inherited from

Identity.name

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:82](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L82)

___

### revision

• **revision**: ``1``

#### Inherited from

Identity.revision

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:83](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L83)

___

### supportedFeatures

• **supportedFeatures**: `Object`

#### Inherited from

Identity.supportedFeatures

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:85](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L85)

___

### unknown

• **unknown**: ``false``

#### Inherited from

Identity.unknown

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:91](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L91)

## Methods

### alter

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `accessControlEntriesPerFabric`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `acl`: [`WritableFabricScopedAttribute`](cluster_export.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `authMode`: [`FieldType`](tlv_export.FieldType.md)\<[`AccessControlEntryAuthMode`](../enums/cluster_export.AccessControl.AccessControlEntryAuthMode.md)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `privilege`: [`FieldType`](tlv_export.FieldType.md)\<[`AccessControlEntryPrivilege`](../enums/cluster_export.AccessControl.AccessControlEntryPrivilege.md)\> ; `subjects`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| ...[]\> ; `targets`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| ...[]\>  }\>[], `any`\> ; `extension`: [`OptionalWritableFabricScopedAttribute`](cluster_export.OptionalWritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\>  }\>[], `any`\> ; `subjectsPerAccessControlEntry`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `targetsPerAccessControlEntry`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `accessControlEntryChanged`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `adminNodeId`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`NodeId`](../modules/datatype_export.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `changeType`: [`FieldType`](tlv_export.FieldType.md)\<[`ChangeType`](../enums/cluster_export.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `latestValue`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `authMode`: ... ; `fabricIndex`: ... ; `privilege`: ... ; `subjects`: ... ; `targets`: ...  }\>\>  }\>, `any`\> ; `accessControlExtensionChanged`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `adminNodeId`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`NodeId`](../modules/datatype_export.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `changeType`: [`FieldType`](tlv_export.FieldType.md)\<[`ChangeType`](../enums/cluster_export.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `latestValue`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: ... ; `fabricIndex`: ...  }\>\>  }\>, `any`\>  } ; `id`: ``31`` = 0x1f; `name`: ``"AccessControl"`` = "AccessControl"; `revision`: ``1`` = 1 }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/cluster_export.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/cluster_export.ElementModifier.md#alterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `accessControlEntriesPerFabric`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `acl`: [`WritableFabricScopedAttribute`](cluster_export.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `authMode`: [`FieldType`](tlv_export.FieldType.md)\<[`AccessControlEntryAuthMode`](../enums/cluster_export.AccessControl.AccessControlEntryAuthMode.md)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `privilege`: [`FieldType`](tlv_export.FieldType.md)\<[`AccessControlEntryPrivilege`](../enums/cluster_export.AccessControl.AccessControlEntryPrivilege.md)\> ; `subjects`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| ...[]\> ; `targets`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| ...[]\>  }\>[], `any`\> ; `extension`: [`OptionalWritableFabricScopedAttribute`](cluster_export.OptionalWritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\>  }\>[], `any`\> ; `subjectsPerAccessControlEntry`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `targetsPerAccessControlEntry`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `accessControlEntryChanged`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `adminNodeId`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`NodeId`](../modules/datatype_export.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `changeType`: [`FieldType`](tlv_export.FieldType.md)\<[`ChangeType`](../enums/cluster_export.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `latestValue`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `authMode`: ... ; `fabricIndex`: ... ; `privilege`: ... ; `subjects`: ... ; `targets`: ...  }\>\>  }\>, `any`\> ; `accessControlExtensionChanged`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `adminNodeId`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`NodeId`](../modules/datatype_export.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `changeType`: [`FieldType`](tlv_export.FieldType.md)\<[`ChangeType`](../enums/cluster_export.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `latestValue`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: ... ; `fabricIndex`: ...  }\>\>  }\>, `any`\>  } ; `id`: ``31`` = 0x1f; `name`: ``"AccessControl"`` = "AccessControl"; `revision`: ``1`` = 1 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `accessControlEntriesPerFabric`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `acl`: [`WritableFabricScopedAttribute`](cluster_export.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `authMode`: [`FieldType`](tlv_export.FieldType.md)\<[`AccessControlEntryAuthMode`](../enums/cluster_export.AccessControl.AccessControlEntryAuthMode.md)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `privilege`: [`FieldType`](tlv_export.FieldType.md)\<[`AccessControlEntryPrivilege`](../enums/cluster_export.AccessControl.AccessControlEntryPrivilege.md)\> ; `subjects`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| ...[]\> ; `targets`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| ...[]\>  }\>[], `any`\> ; `extension`: [`OptionalWritableFabricScopedAttribute`](cluster_export.OptionalWritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\>  }\>[], `any`\> ; `subjectsPerAccessControlEntry`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `targetsPerAccessControlEntry`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `accessControlEntryChanged`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `adminNodeId`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`NodeId`](../modules/datatype_export.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `changeType`: [`FieldType`](tlv_export.FieldType.md)\<[`ChangeType`](../enums/cluster_export.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `latestValue`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `authMode`: ... ; `fabricIndex`: ... ; `privilege`: ... ; `subjects`: ... ; `targets`: ...  }\>\>  }\>, `any`\> ; `accessControlExtensionChanged`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `adminNodeId`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`NodeId`](../modules/datatype_export.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `changeType`: [`FieldType`](tlv_export.FieldType.md)\<[`ChangeType`](../enums/cluster_export.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `latestValue`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: ... ; `fabricIndex`: ...  }\>\>  }\>, `any`\>  } ; `id`: ``31`` = 0x1f; `name`: ``"AccessControl"`` = "AccessControl"; `revision`: ``1`` = 1 }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:74](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L74)

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/cluster_export.ElementModifier.md#withflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `accessControlEntriesPerFabric`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `acl`: [`WritableFabricScopedAttribute`](cluster_export.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `authMode`: [`FieldType`](tlv_export.FieldType.md)\<[`AccessControlEntryAuthMode`](../enums/cluster_export.AccessControl.AccessControlEntryAuthMode.md)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `privilege`: [`FieldType`](tlv_export.FieldType.md)\<[`AccessControlEntryPrivilege`](../enums/cluster_export.AccessControl.AccessControlEntryPrivilege.md)\> ; `subjects`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| ...[]\> ; `targets`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| ...[]\>  }\>[], `any`\> ; `extension`: [`OptionalWritableFabricScopedAttribute`](cluster_export.OptionalWritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\>  }\>[], `any`\> ; `subjectsPerAccessControlEntry`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `targetsPerAccessControlEntry`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `accessControlEntryChanged`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `adminNodeId`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`NodeId`](../modules/datatype_export.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `changeType`: [`FieldType`](tlv_export.FieldType.md)\<[`ChangeType`](../enums/cluster_export.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `latestValue`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `authMode`: ... ; `fabricIndex`: ... ; `privilege`: ... ; `subjects`: ... ; `targets`: ...  }\>\>  }\>, `any`\> ; `accessControlExtensionChanged`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `adminNodeId`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`NodeId`](../modules/datatype_export.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `changeType`: [`FieldType`](tlv_export.FieldType.md)\<[`ChangeType`](../enums/cluster_export.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `latestValue`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: ... ; `fabricIndex`: ...  }\>\>  }\>, `any`\>  } ; `id`: ``31`` = 0x1f; `name`: ``"AccessControl"`` = "AccessControl"; `revision`: ``1`` = 1 }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/cluster_export.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/cluster_export.ElementModifier.md#elementflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `accessControlEntriesPerFabric`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `acl`: [`WritableFabricScopedAttribute`](cluster_export.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `authMode`: [`FieldType`](tlv_export.FieldType.md)\<[`AccessControlEntryAuthMode`](../enums/cluster_export.AccessControl.AccessControlEntryAuthMode.md)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `privilege`: [`FieldType`](tlv_export.FieldType.md)\<[`AccessControlEntryPrivilege`](../enums/cluster_export.AccessControl.AccessControlEntryPrivilege.md)\> ; `subjects`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| ...[]\> ; `targets`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| ...[]\>  }\>[], `any`\> ; `extension`: [`OptionalWritableFabricScopedAttribute`](cluster_export.OptionalWritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\>  }\>[], `any`\> ; `subjectsPerAccessControlEntry`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `targetsPerAccessControlEntry`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `accessControlEntryChanged`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `adminNodeId`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`NodeId`](../modules/datatype_export.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `changeType`: [`FieldType`](tlv_export.FieldType.md)\<[`ChangeType`](../enums/cluster_export.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `latestValue`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `authMode`: ... ; `fabricIndex`: ... ; `privilege`: ... ; `subjects`: ... ; `targets`: ...  }\>\>  }\>, `any`\> ; `accessControlExtensionChanged`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `adminNodeId`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`NodeId`](../modules/datatype_export.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `changeType`: [`FieldType`](tlv_export.FieldType.md)\<[`ChangeType`](../enums/cluster_export.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `latestValue`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: ... ; `fabricIndex`: ...  }\>\>  }\>, `any`\>  } ; `id`: ``31`` = 0x1f; `name`: ``"AccessControl"`` = "AccessControl"; `revision`: ``1`` = 1 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/cluster_export.ElementModifier.md#withflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `accessControlEntriesPerFabric`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `acl`: [`WritableFabricScopedAttribute`](cluster_export.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `authMode`: [`FieldType`](tlv_export.FieldType.md)\<[`AccessControlEntryAuthMode`](../enums/cluster_export.AccessControl.AccessControlEntryAuthMode.md)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `privilege`: [`FieldType`](tlv_export.FieldType.md)\<[`AccessControlEntryPrivilege`](../enums/cluster_export.AccessControl.AccessControlEntryPrivilege.md)\> ; `subjects`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| ...[]\> ; `targets`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| ...[]\>  }\>[], `any`\> ; `extension`: [`OptionalWritableFabricScopedAttribute`](cluster_export.OptionalWritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\>  }\>[], `any`\> ; `subjectsPerAccessControlEntry`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `targetsPerAccessControlEntry`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `accessControlEntryChanged`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `adminNodeId`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`NodeId`](../modules/datatype_export.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `changeType`: [`FieldType`](tlv_export.FieldType.md)\<[`ChangeType`](../enums/cluster_export.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `latestValue`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `authMode`: ... ; `fabricIndex`: ... ; `privilege`: ... ; `subjects`: ... ; `targets`: ...  }\>\>  }\>, `any`\> ; `accessControlExtensionChanged`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `adminNodeId`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`NodeId`](../modules/datatype_export.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `changeType`: [`FieldType`](tlv_export.FieldType.md)\<[`ChangeType`](../enums/cluster_export.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `latestValue`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: ... ; `fabricIndex`: ...  }\>\>  }\>, `any`\>  } ; `id`: ``31`` = 0x1f; `name`: ``"AccessControl"`` = "AccessControl"; `revision`: ``1`` = 1 }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:88](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L88)

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/cluster_export.ElementModifier.md#withvalues)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `accessControlEntriesPerFabric`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `acl`: [`WritableFabricScopedAttribute`](cluster_export.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `authMode`: [`FieldType`](tlv_export.FieldType.md)\<[`AccessControlEntryAuthMode`](../enums/cluster_export.AccessControl.AccessControlEntryAuthMode.md)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `privilege`: [`FieldType`](tlv_export.FieldType.md)\<[`AccessControlEntryPrivilege`](../enums/cluster_export.AccessControl.AccessControlEntryPrivilege.md)\> ; `subjects`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| ...[]\> ; `targets`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| ...[]\>  }\>[], `any`\> ; `extension`: [`OptionalWritableFabricScopedAttribute`](cluster_export.OptionalWritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\>  }\>[], `any`\> ; `subjectsPerAccessControlEntry`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `targetsPerAccessControlEntry`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `accessControlEntryChanged`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `adminNodeId`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`NodeId`](../modules/datatype_export.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `changeType`: [`FieldType`](tlv_export.FieldType.md)\<[`ChangeType`](../enums/cluster_export.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `latestValue`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `authMode`: ... ; `fabricIndex`: ... ; `privilege`: ... ; `subjects`: ... ; `targets`: ...  }\>\>  }\>, `any`\> ; `accessControlExtensionChanged`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `adminNodeId`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`NodeId`](../modules/datatype_export.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `changeType`: [`FieldType`](tlv_export.FieldType.md)\<[`ChangeType`](../enums/cluster_export.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `latestValue`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: ... ; `fabricIndex`: ...  }\>\>  }\>, `any`\>  } ; `id`: ``31`` = 0x1f; `name`: ``"AccessControl"`` = "AccessControl"; `revision`: ``1`` = 1 }\>, `ValuesT`\>

Modify elements using [ElementModifier.set](../classes/cluster_export.ElementModifier-1.md#set).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ValuesT` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `ValuesT` |

#### Returns

[`WithValues`](../modules/cluster_export.ElementModifier.md#withvalues)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `accessControlEntriesPerFabric`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `acl`: [`WritableFabricScopedAttribute`](cluster_export.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `authMode`: [`FieldType`](tlv_export.FieldType.md)\<[`AccessControlEntryAuthMode`](../enums/cluster_export.AccessControl.AccessControlEntryAuthMode.md)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `privilege`: [`FieldType`](tlv_export.FieldType.md)\<[`AccessControlEntryPrivilege`](../enums/cluster_export.AccessControl.AccessControlEntryPrivilege.md)\> ; `subjects`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| ...[]\> ; `targets`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| ...[]\>  }\>[], `any`\> ; `extension`: [`OptionalWritableFabricScopedAttribute`](cluster_export.OptionalWritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\>  }\>[], `any`\> ; `subjectsPerAccessControlEntry`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `targetsPerAccessControlEntry`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `accessControlEntryChanged`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `adminNodeId`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`NodeId`](../modules/datatype_export.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `changeType`: [`FieldType`](tlv_export.FieldType.md)\<[`ChangeType`](../enums/cluster_export.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `latestValue`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `authMode`: ... ; `fabricIndex`: ... ; `privilege`: ... ; `subjects`: ... ; `targets`: ...  }\>\>  }\>, `any`\> ; `accessControlExtensionChanged`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `adminNodeId`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`NodeId`](../modules/datatype_export.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `changeType`: [`FieldType`](tlv_export.FieldType.md)\<[`ChangeType`](../enums/cluster_export.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `latestValue`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: ... ; `fabricIndex`: ...  }\>\>  }\>, `any`\>  } ; `id`: ``31`` = 0x1f; `name`: ``"AccessControl"`` = "AccessControl"; `revision`: ``1`` = 1 }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L81)

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `accessControlEntriesPerFabric`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `acl`: [`WritableFabricScopedAttribute`](cluster_export.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `authMode`: [`FieldType`](tlv_export.FieldType.md)\<[`AccessControlEntryAuthMode`](../enums/cluster_export.AccessControl.AccessControlEntryAuthMode.md)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `privilege`: [`FieldType`](tlv_export.FieldType.md)\<[`AccessControlEntryPrivilege`](../enums/cluster_export.AccessControl.AccessControlEntryPrivilege.md)\> ; `subjects`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`NodeId`](../modules/datatype_export.md#nodeid)[]\> ; `targets`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<...\>[]\>  }\>[], `any`\> ; `extension`: [`OptionalWritableFabricScopedAttribute`](cluster_export.OptionalWritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\>  }\>[], `any`\> ; `subjectsPerAccessControlEntry`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `targetsPerAccessControlEntry`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `accessControlEntryChanged`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `adminNodeId`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`NodeId`](../modules/datatype_export.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `changeType`: [`FieldType`](tlv_export.FieldType.md)\<[`ChangeType`](../enums/cluster_export.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `latestValue`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `authMode`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `privilege`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `subjects`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `targets`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>, `any`\> ; `accessControlExtensionChanged`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `adminNodeId`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`NodeId`](../modules/datatype_export.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `changeType`: [`FieldType`](tlv_export.FieldType.md)\<[`ChangeType`](../enums/cluster_export.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `latestValue`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>, `any`\>  } ; `id`: ``31`` = 0x1f; `name`: ``"AccessControl"`` = "AccessControl"; `revision`: ``1`` = 1 }\>

Select features using [ClusterComposer.compose](../classes/cluster_export.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/cluster_export.ClusterComposer.md#featureselection)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `accessControlEntriesPerFabric`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `acl`: [`WritableFabricScopedAttribute`](cluster_export.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `authMode`: [`FieldType`](tlv_export.FieldType.md)\<[`AccessControlEntryAuthMode`](../enums/cluster_export.AccessControl.AccessControlEntryAuthMode.md)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `privilege`: [`FieldType`](tlv_export.FieldType.md)\<[`AccessControlEntryPrivilege`](../enums/cluster_export.AccessControl.AccessControlEntryPrivilege.md)\> ; `subjects`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| ...[]\> ; `targets`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| ...[]\>  }\>[], `any`\> ; `extension`: [`OptionalWritableFabricScopedAttribute`](cluster_export.OptionalWritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\>  }\>[], `any`\> ; `subjectsPerAccessControlEntry`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `targetsPerAccessControlEntry`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `accessControlEntryChanged`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `adminNodeId`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`NodeId`](../modules/datatype_export.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `changeType`: [`FieldType`](tlv_export.FieldType.md)\<[`ChangeType`](../enums/cluster_export.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `latestValue`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `authMode`: ... ; `fabricIndex`: ... ; `privilege`: ... ; `subjects`: ... ; `targets`: ...  }\>\>  }\>, `any`\> ; `accessControlExtensionChanged`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `adminNodeId`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`NodeId`](../modules/datatype_export.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `changeType`: [`FieldType`](tlv_export.FieldType.md)\<[`ChangeType`](../enums/cluster_export.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `latestValue`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: ... ; `fabricIndex`: ...  }\>\>  }\>, `any`\>  } ; `id`: ``31`` = 0x1f; `name`: ``"AccessControl"`` = "AccessControl"; `revision`: ``1`` = 1 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `accessControlEntriesPerFabric`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `acl`: [`WritableFabricScopedAttribute`](cluster_export.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `authMode`: [`FieldType`](tlv_export.FieldType.md)\<[`AccessControlEntryAuthMode`](../enums/cluster_export.AccessControl.AccessControlEntryAuthMode.md)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `privilege`: [`FieldType`](tlv_export.FieldType.md)\<[`AccessControlEntryPrivilege`](../enums/cluster_export.AccessControl.AccessControlEntryPrivilege.md)\> ; `subjects`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`NodeId`](../modules/datatype_export.md#nodeid)[]\> ; `targets`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<...\>[]\>  }\>[], `any`\> ; `extension`: [`OptionalWritableFabricScopedAttribute`](cluster_export.OptionalWritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\>  }\>[], `any`\> ; `subjectsPerAccessControlEntry`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `targetsPerAccessControlEntry`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `accessControlEntryChanged`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `adminNodeId`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`NodeId`](../modules/datatype_export.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `changeType`: [`FieldType`](tlv_export.FieldType.md)\<[`ChangeType`](../enums/cluster_export.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `latestValue`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `authMode`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `privilege`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `subjects`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `targets`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>, `any`\> ; `accessControlExtensionChanged`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `adminNodeId`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`NodeId`](../modules/datatype_export.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `changeType`: [`FieldType`](tlv_export.FieldType.md)\<[`ChangeType`](../enums/cluster_export.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `latestValue`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>, `any`\>  } ; `id`: ``31`` = 0x1f; `name`: ``"AccessControl"`` = "AccessControl"; `revision`: ``1`` = 1 }\>

#### Inherited from

Identity.with

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:67](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L67)
