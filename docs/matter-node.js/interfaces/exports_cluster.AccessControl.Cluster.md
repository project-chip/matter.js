[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [AccessControl](../modules/exports_cluster.AccessControl.md) / Cluster

# Interface: Cluster

[exports/cluster](../modules/exports_cluster.md).[AccessControl](../modules/exports_cluster.AccessControl.md).Cluster

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

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ClusterInstance`](../modules/exports_cluster.AccessControl.md#clusterinstance)\>

  ↳ **`Cluster`**

## Table of contents

### Properties

- [attributes](exports_cluster.AccessControl.Cluster.md#attributes)
- [base](exports_cluster.AccessControl.Cluster.md#base)
- [commands](exports_cluster.AccessControl.Cluster.md#commands)
- [events](exports_cluster.AccessControl.Cluster.md#events)
- [extensions](exports_cluster.AccessControl.Cluster.md#extensions)
- [features](exports_cluster.AccessControl.Cluster.md#features)
- [id](exports_cluster.AccessControl.Cluster.md#id)
- [name](exports_cluster.AccessControl.Cluster.md#name)
- [revision](exports_cluster.AccessControl.Cluster.md#revision)
- [supportedFeatures](exports_cluster.AccessControl.Cluster.md#supportedfeatures)
- [unknown](exports_cluster.AccessControl.Cluster.md#unknown)

### Methods

- [alter](exports_cluster.AccessControl.Cluster.md#alter)
- [enable](exports_cluster.AccessControl.Cluster.md#enable)
- [set](exports_cluster.AccessControl.Cluster.md#set)
- [with](exports_cluster.AccessControl.Cluster.md#with)

## Properties

### attributes

• **attributes**: [`Merge`](../modules/util_export.md#merge)\<\{ `accessControlEntriesPerFabric`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `acl`: [`WritableFabricScopedAttribute`](exports_cluster.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `authMode`: [`FieldType`](exports_tlv.FieldType.md)\<[`AccessControlEntryAuthMode`](../enums/exports_cluster.AccessControl.AccessControlEntryAuthMode.md)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `privilege`: [`FieldType`](exports_tlv.FieldType.md)\<[`AccessControlEntryPrivilege`](../enums/exports_cluster.AccessControl.AccessControlEntryPrivilege.md)\> ; `subjects`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`NodeId`](../modules/exports_datatype.md#nodeid)[]\> ; `targets`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `cluster`: ... ; `deviceType`: ... ; `endpoint`: ...  }\>[]\>  }\>[], `any`\> ; `extension`: [`OptionalWritableFabricScopedAttribute`](exports_cluster.OptionalWritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\>  }\>[], `any`\> ; `subjectsPerAccessControlEntry`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `targetsPerAccessControlEntry`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes)\<{}\>\>

#### Inherited from

Identity.attributes

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:44

___

### base

• **base**: `undefined`

#### Inherited from

Identity.base

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:48

___

### commands

• **commands**: `Object`

#### Inherited from

Identity.commands

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:45

___

### events

• **events**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `accessControlEntryChanged` | [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `adminNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\> ; `changeType`: [`FieldType`](exports_tlv.FieldType.md)\<[`ChangeType`](../enums/exports_cluster.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `latestValue`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `authMode`: [`FieldType`](exports_tlv.FieldType.md)\<[`AccessControlEntryAuthMode`](../enums/exports_cluster.AccessControl.AccessControlEntryAuthMode.md)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `privilege`: [`FieldType`](exports_tlv.FieldType.md)\<[`AccessControlEntryPrivilege`](../enums/exports_cluster.AccessControl.AccessControlEntryPrivilege.md)\> ; `subjects`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| ...[]\> ; `targets`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| ...[]\>  }\>\>  }\>, `any`\> | The cluster shall send AccessControlEntryChanged events whenever its ACL attribute data is changed by an Administrator. • Each added entry shall generate an event with ChangeType Added. • Each changed entry shall generate an event with ChangeType Changed. • Each removed entry shall generate an event with ChangeType Removed. **`See`** MatterSpecification.v11.Core § 9.10.7.1 |
| `accessControlExtensionChanged` | [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `adminNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\> ; `changeType`: [`FieldType`](exports_tlv.FieldType.md)\<[`ChangeType`](../enums/exports_cluster.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `latestValue`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\>  }\>\>  }\>, `any`\> | The cluster shall send AccessControlExtensionChanged events whenever its extension attribute data is changed by an Administrator. • Each added extension shall generate an event with ChangeType Added. • Each changed extension shall generate an event with ChangeType Changed. • Each removed extension shall generate an event with ChangeType Removed. The Node ID of the Administrator that made the change, if the change occurred via a CASE session. Exactly one of AdminNodeID and AdminPasscodeID shall be set, depending on whether the change occurred via a CASE or PASE session; the other shall be null. The Passcode ID of the Administrator that made the change, if the change occurred via a PASE session. Non-zero values are reserved for future use (see PasscodeId generation in PBKDFParamRequest). Exactly one of AdminNodeID and AdminPasscodeID shall be set, depending on whether the change occurred via a CASE or PASE session; the other shall be null. The type of change as appropriate. The latest value of the changed extension. This field SHOULD be set if resources are adequate for it; otherwise it shall be set to NULL if resources are scarce. **`See`** MatterSpecification.v11.Core § 9.10.7.2 |

#### Inherited from

Identity.events

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:46

___

### extensions

• **extensions**: `undefined`

#### Inherited from

Identity.extensions

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:49

___

### features

• **features**: `Object`

#### Inherited from

Identity.features

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:42

___

### id

• **id**: [`Branded`](../modules/util_export.md#branded)\<``31``, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

___

### name

• **name**: ``"AccessControl"``

#### Inherited from

Identity.name

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:40

___

### revision

• **revision**: ``1``

#### Inherited from

Identity.revision

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:41

___

### supportedFeatures

• **supportedFeatures**: `Object`

#### Inherited from

Identity.supportedFeatures

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:43

___

### unknown

• **unknown**: ``false``

#### Inherited from

Identity.unknown

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:47

## Methods

### alter

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `accessControlEntriesPerFabric`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `acl`: [`WritableFabricScopedAttribute`](exports_cluster.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `authMode`: [`FieldType`](exports_tlv.FieldType.md)\<[`AccessControlEntryAuthMode`](../enums/exports_cluster.AccessControl.AccessControlEntryAuthMode.md)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `privilege`: [`FieldType`](exports_tlv.FieldType.md)\<[`AccessControlEntryPrivilege`](../enums/exports_cluster.AccessControl.AccessControlEntryPrivilege.md)\> ; `subjects`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| ...[]\> ; `targets`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| ...[]\>  }\>[], `any`\> ; `extension`: [`OptionalWritableFabricScopedAttribute`](exports_cluster.OptionalWritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\>  }\>[], `any`\> ; `subjectsPerAccessControlEntry`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `targetsPerAccessControlEntry`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `accessControlEntryChanged`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `adminNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\> ; `changeType`: [`FieldType`](exports_tlv.FieldType.md)\<[`ChangeType`](../enums/exports_cluster.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `latestValue`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `authMode`: ... ; `fabricIndex`: ... ; `privilege`: ... ; `subjects`: ... ; `targets`: ...  }\>\>  }\>, `any`\> ; `accessControlExtensionChanged`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `adminNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\> ; `changeType`: [`FieldType`](exports_tlv.FieldType.md)\<[`ChangeType`](../enums/exports_cluster.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `latestValue`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: ... ; `fabricIndex`: ...  }\>\>  }\>, `any`\>  } ; `id`: ``31`` ; `name`: ``"AccessControl"`` ; `revision`: ``1``  }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/exports_cluster.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/exports_cluster.ElementModifier.md#alterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `accessControlEntriesPerFabric`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `acl`: [`WritableFabricScopedAttribute`](exports_cluster.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `authMode`: [`FieldType`](exports_tlv.FieldType.md)\<[`AccessControlEntryAuthMode`](../enums/exports_cluster.AccessControl.AccessControlEntryAuthMode.md)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `privilege`: [`FieldType`](exports_tlv.FieldType.md)\<[`AccessControlEntryPrivilege`](../enums/exports_cluster.AccessControl.AccessControlEntryPrivilege.md)\> ; `subjects`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| ...[]\> ; `targets`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| ...[]\>  }\>[], `any`\> ; `extension`: [`OptionalWritableFabricScopedAttribute`](exports_cluster.OptionalWritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\>  }\>[], `any`\> ; `subjectsPerAccessControlEntry`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `targetsPerAccessControlEntry`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `accessControlEntryChanged`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `adminNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\> ; `changeType`: [`FieldType`](exports_tlv.FieldType.md)\<[`ChangeType`](../enums/exports_cluster.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `latestValue`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `authMode`: ... ; `fabricIndex`: ... ; `privilege`: ... ; `subjects`: ... ; `targets`: ...  }\>\>  }\>, `any`\> ; `accessControlExtensionChanged`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `adminNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\> ; `changeType`: [`FieldType`](exports_tlv.FieldType.md)\<[`ChangeType`](../enums/exports_cluster.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `latestValue`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: ... ; `fabricIndex`: ...  }\>\>  }\>, `any`\>  } ; `id`: ``31`` ; `name`: ``"AccessControl"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `accessControlEntriesPerFabric`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `acl`: [`WritableFabricScopedAttribute`](exports_cluster.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `authMode`: [`FieldType`](exports_tlv.FieldType.md)\<[`AccessControlEntryAuthMode`](../enums/exports_cluster.AccessControl.AccessControlEntryAuthMode.md)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `privilege`: [`FieldType`](exports_tlv.FieldType.md)\<[`AccessControlEntryPrivilege`](../enums/exports_cluster.AccessControl.AccessControlEntryPrivilege.md)\> ; `subjects`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| ...[]\> ; `targets`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| ...[]\>  }\>[], `any`\> ; `extension`: [`OptionalWritableFabricScopedAttribute`](exports_cluster.OptionalWritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\>  }\>[], `any`\> ; `subjectsPerAccessControlEntry`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `targetsPerAccessControlEntry`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `accessControlEntryChanged`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `adminNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\> ; `changeType`: [`FieldType`](exports_tlv.FieldType.md)\<[`ChangeType`](../enums/exports_cluster.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `latestValue`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `authMode`: ... ; `fabricIndex`: ... ; `privilege`: ... ; `subjects`: ... ; `targets`: ...  }\>\>  }\>, `any`\> ; `accessControlExtensionChanged`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `adminNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\> ; `changeType`: [`FieldType`](exports_tlv.FieldType.md)\<[`ChangeType`](../enums/exports_cluster.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `latestValue`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: ... ; `fabricIndex`: ...  }\>\>  }\>, `any`\>  } ; `id`: ``31`` ; `name`: ``"AccessControl"`` ; `revision`: ``1``  }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:38

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `accessControlEntriesPerFabric`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `acl`: [`WritableFabricScopedAttribute`](exports_cluster.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `authMode`: [`FieldType`](exports_tlv.FieldType.md)\<[`AccessControlEntryAuthMode`](../enums/exports_cluster.AccessControl.AccessControlEntryAuthMode.md)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `privilege`: [`FieldType`](exports_tlv.FieldType.md)\<[`AccessControlEntryPrivilege`](../enums/exports_cluster.AccessControl.AccessControlEntryPrivilege.md)\> ; `subjects`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| ...[]\> ; `targets`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| ...[]\>  }\>[], `any`\> ; `extension`: [`OptionalWritableFabricScopedAttribute`](exports_cluster.OptionalWritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\>  }\>[], `any`\> ; `subjectsPerAccessControlEntry`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `targetsPerAccessControlEntry`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `accessControlEntryChanged`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `adminNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\> ; `changeType`: [`FieldType`](exports_tlv.FieldType.md)\<[`ChangeType`](../enums/exports_cluster.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `latestValue`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `authMode`: ... ; `fabricIndex`: ... ; `privilege`: ... ; `subjects`: ... ; `targets`: ...  }\>\>  }\>, `any`\> ; `accessControlExtensionChanged`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `adminNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\> ; `changeType`: [`FieldType`](exports_tlv.FieldType.md)\<[`ChangeType`](../enums/exports_cluster.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `latestValue`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: ... ; `fabricIndex`: ...  }\>\>  }\>, `any`\>  } ; `id`: ``31`` ; `name`: ``"AccessControl"`` ; `revision`: ``1``  }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/exports_cluster.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/exports_cluster.ElementModifier.md#elementflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `accessControlEntriesPerFabric`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `acl`: [`WritableFabricScopedAttribute`](exports_cluster.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `authMode`: [`FieldType`](exports_tlv.FieldType.md)\<[`AccessControlEntryAuthMode`](../enums/exports_cluster.AccessControl.AccessControlEntryAuthMode.md)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `privilege`: [`FieldType`](exports_tlv.FieldType.md)\<[`AccessControlEntryPrivilege`](../enums/exports_cluster.AccessControl.AccessControlEntryPrivilege.md)\> ; `subjects`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| ...[]\> ; `targets`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| ...[]\>  }\>[], `any`\> ; `extension`: [`OptionalWritableFabricScopedAttribute`](exports_cluster.OptionalWritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\>  }\>[], `any`\> ; `subjectsPerAccessControlEntry`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `targetsPerAccessControlEntry`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `accessControlEntryChanged`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `adminNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\> ; `changeType`: [`FieldType`](exports_tlv.FieldType.md)\<[`ChangeType`](../enums/exports_cluster.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `latestValue`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `authMode`: ... ; `fabricIndex`: ... ; `privilege`: ... ; `subjects`: ... ; `targets`: ...  }\>\>  }\>, `any`\> ; `accessControlExtensionChanged`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `adminNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\> ; `changeType`: [`FieldType`](exports_tlv.FieldType.md)\<[`ChangeType`](../enums/exports_cluster.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `latestValue`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: ... ; `fabricIndex`: ...  }\>\>  }\>, `any`\>  } ; `id`: ``31`` ; `name`: ``"AccessControl"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `accessControlEntriesPerFabric`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `acl`: [`WritableFabricScopedAttribute`](exports_cluster.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `authMode`: [`FieldType`](exports_tlv.FieldType.md)\<[`AccessControlEntryAuthMode`](../enums/exports_cluster.AccessControl.AccessControlEntryAuthMode.md)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `privilege`: [`FieldType`](exports_tlv.FieldType.md)\<[`AccessControlEntryPrivilege`](../enums/exports_cluster.AccessControl.AccessControlEntryPrivilege.md)\> ; `subjects`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| ...[]\> ; `targets`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| ...[]\>  }\>[], `any`\> ; `extension`: [`OptionalWritableFabricScopedAttribute`](exports_cluster.OptionalWritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\>  }\>[], `any`\> ; `subjectsPerAccessControlEntry`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `targetsPerAccessControlEntry`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `accessControlEntryChanged`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `adminNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\> ; `changeType`: [`FieldType`](exports_tlv.FieldType.md)\<[`ChangeType`](../enums/exports_cluster.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `latestValue`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `authMode`: ... ; `fabricIndex`: ... ; `privilege`: ... ; `subjects`: ... ; `targets`: ...  }\>\>  }\>, `any`\> ; `accessControlExtensionChanged`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `adminNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\> ; `changeType`: [`FieldType`](exports_tlv.FieldType.md)\<[`ChangeType`](../enums/exports_cluster.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `latestValue`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: ... ; `fabricIndex`: ...  }\>\>  }\>, `any`\>  } ; `id`: ``31`` ; `name`: ``"AccessControl"`` ; `revision`: ``1``  }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:46

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `accessControlEntriesPerFabric`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `acl`: [`WritableFabricScopedAttribute`](exports_cluster.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `authMode`: [`FieldType`](exports_tlv.FieldType.md)\<[`AccessControlEntryAuthMode`](../enums/exports_cluster.AccessControl.AccessControlEntryAuthMode.md)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `privilege`: [`FieldType`](exports_tlv.FieldType.md)\<[`AccessControlEntryPrivilege`](../enums/exports_cluster.AccessControl.AccessControlEntryPrivilege.md)\> ; `subjects`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| ...[]\> ; `targets`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| ...[]\>  }\>[], `any`\> ; `extension`: [`OptionalWritableFabricScopedAttribute`](exports_cluster.OptionalWritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\>  }\>[], `any`\> ; `subjectsPerAccessControlEntry`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `targetsPerAccessControlEntry`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `accessControlEntryChanged`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `adminNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\> ; `changeType`: [`FieldType`](exports_tlv.FieldType.md)\<[`ChangeType`](../enums/exports_cluster.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `latestValue`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `authMode`: ... ; `fabricIndex`: ... ; `privilege`: ... ; `subjects`: ... ; `targets`: ...  }\>\>  }\>, `any`\> ; `accessControlExtensionChanged`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `adminNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\> ; `changeType`: [`FieldType`](exports_tlv.FieldType.md)\<[`ChangeType`](../enums/exports_cluster.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `latestValue`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: ... ; `fabricIndex`: ...  }\>\>  }\>, `any`\>  } ; `id`: ``31`` ; `name`: ``"AccessControl"`` ; `revision`: ``1``  }\>, `ValuesT`\>

Modify elements using [ElementModifier.set](../classes/exports_cluster.ElementModifier-1.md#set).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ValuesT` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `ValuesT` |

#### Returns

[`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `accessControlEntriesPerFabric`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `acl`: [`WritableFabricScopedAttribute`](exports_cluster.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `authMode`: [`FieldType`](exports_tlv.FieldType.md)\<[`AccessControlEntryAuthMode`](../enums/exports_cluster.AccessControl.AccessControlEntryAuthMode.md)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `privilege`: [`FieldType`](exports_tlv.FieldType.md)\<[`AccessControlEntryPrivilege`](../enums/exports_cluster.AccessControl.AccessControlEntryPrivilege.md)\> ; `subjects`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| ...[]\> ; `targets`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| ...[]\>  }\>[], `any`\> ; `extension`: [`OptionalWritableFabricScopedAttribute`](exports_cluster.OptionalWritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\>  }\>[], `any`\> ; `subjectsPerAccessControlEntry`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `targetsPerAccessControlEntry`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `accessControlEntryChanged`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `adminNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\> ; `changeType`: [`FieldType`](exports_tlv.FieldType.md)\<[`ChangeType`](../enums/exports_cluster.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `latestValue`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `authMode`: ... ; `fabricIndex`: ... ; `privilege`: ... ; `subjects`: ... ; `targets`: ...  }\>\>  }\>, `any`\> ; `accessControlExtensionChanged`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `adminNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\> ; `changeType`: [`FieldType`](exports_tlv.FieldType.md)\<[`ChangeType`](../enums/exports_cluster.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `latestValue`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: ... ; `fabricIndex`: ...  }\>\>  }\>, `any`\>  } ; `id`: ``31`` ; `name`: ``"AccessControl"`` ; `revision`: ``1``  }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:42

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `accessControlEntriesPerFabric`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `acl`: [`WritableFabricScopedAttribute`](exports_cluster.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `authMode`: [`FieldType`](exports_tlv.FieldType.md)\<[`AccessControlEntryAuthMode`](../enums/exports_cluster.AccessControl.AccessControlEntryAuthMode.md)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `privilege`: [`FieldType`](exports_tlv.FieldType.md)\<[`AccessControlEntryPrivilege`](../enums/exports_cluster.AccessControl.AccessControlEntryPrivilege.md)\> ; `subjects`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`NodeId`](../modules/exports_datatype.md#nodeid)[]\> ; `targets`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<...\>[]\>  }\>[], `any`\> ; `extension`: [`OptionalWritableFabricScopedAttribute`](exports_cluster.OptionalWritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\>  }\>[], `any`\> ; `subjectsPerAccessControlEntry`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `targetsPerAccessControlEntry`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `accessControlEntryChanged`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `adminNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\> ; `changeType`: [`FieldType`](exports_tlv.FieldType.md)\<[`ChangeType`](../enums/exports_cluster.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `latestValue`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `authMode`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `privilege`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `subjects`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `targets`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\>  }\>, `any`\> ; `accessControlExtensionChanged`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `adminNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\> ; `changeType`: [`FieldType`](exports_tlv.FieldType.md)\<[`ChangeType`](../enums/exports_cluster.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `latestValue`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\>  }\>, `any`\>  } ; `id`: ``31`` ; `name`: ``"AccessControl"`` ; `revision`: ``1``  }\>

Select features using [ClusterComposer.compose](../classes/exports_cluster.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/exports_cluster.ClusterComposer.md#featureselection)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `accessControlEntriesPerFabric`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `acl`: [`WritableFabricScopedAttribute`](exports_cluster.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `authMode`: [`FieldType`](exports_tlv.FieldType.md)\<[`AccessControlEntryAuthMode`](../enums/exports_cluster.AccessControl.AccessControlEntryAuthMode.md)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `privilege`: [`FieldType`](exports_tlv.FieldType.md)\<[`AccessControlEntryPrivilege`](../enums/exports_cluster.AccessControl.AccessControlEntryPrivilege.md)\> ; `subjects`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| ...[]\> ; `targets`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| ...[]\>  }\>[], `any`\> ; `extension`: [`OptionalWritableFabricScopedAttribute`](exports_cluster.OptionalWritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\>  }\>[], `any`\> ; `subjectsPerAccessControlEntry`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `targetsPerAccessControlEntry`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `accessControlEntryChanged`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `adminNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\> ; `changeType`: [`FieldType`](exports_tlv.FieldType.md)\<[`ChangeType`](../enums/exports_cluster.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `latestValue`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `authMode`: ... ; `fabricIndex`: ... ; `privilege`: ... ; `subjects`: ... ; `targets`: ...  }\>\>  }\>, `any`\> ; `accessControlExtensionChanged`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `adminNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\> ; `changeType`: [`FieldType`](exports_tlv.FieldType.md)\<[`ChangeType`](../enums/exports_cluster.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `latestValue`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: ... ; `fabricIndex`: ...  }\>\>  }\>, `any`\>  } ; `id`: ``31`` ; `name`: ``"AccessControl"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `accessControlEntriesPerFabric`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `acl`: [`WritableFabricScopedAttribute`](exports_cluster.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `authMode`: [`FieldType`](exports_tlv.FieldType.md)\<[`AccessControlEntryAuthMode`](../enums/exports_cluster.AccessControl.AccessControlEntryAuthMode.md)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `privilege`: [`FieldType`](exports_tlv.FieldType.md)\<[`AccessControlEntryPrivilege`](../enums/exports_cluster.AccessControl.AccessControlEntryPrivilege.md)\> ; `subjects`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`NodeId`](../modules/exports_datatype.md#nodeid)[]\> ; `targets`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<...\>[]\>  }\>[], `any`\> ; `extension`: [`OptionalWritableFabricScopedAttribute`](exports_cluster.OptionalWritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\>  }\>[], `any`\> ; `subjectsPerAccessControlEntry`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `targetsPerAccessControlEntry`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `accessControlEntryChanged`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `adminNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\> ; `changeType`: [`FieldType`](exports_tlv.FieldType.md)\<[`ChangeType`](../enums/exports_cluster.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `latestValue`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `authMode`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `privilege`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `subjects`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `targets`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\>  }\>, `any`\> ; `accessControlExtensionChanged`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `adminNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\> ; `changeType`: [`FieldType`](exports_tlv.FieldType.md)\<[`ChangeType`](../enums/exports_cluster.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `latestValue`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\>  }\>, `any`\>  } ; `id`: ``31`` ; `name`: ``"AccessControl"`` ; `revision`: ``1``  }\>

#### Inherited from

Identity.with

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
