[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / AccessControl

# Namespace: AccessControl

[cluster/export](cluster_export.md).AccessControl

## Table of contents

### Enumerations

- [AccessControlEntryAuthMode](../enums/cluster_export.AccessControl.AccessControlEntryAuthMode.md)
- [AccessControlEntryPrivilege](../enums/cluster_export.AccessControl.AccessControlEntryPrivilege.md)
- [ChangeType](../enums/cluster_export.AccessControl.ChangeType.md)

### Interfaces

- [AccessControlEntryChangedEvent](../interfaces/cluster_export.AccessControl.AccessControlEntryChangedEvent.md)
- [AccessControlEntryStruct](../interfaces/cluster_export.AccessControl.AccessControlEntryStruct.md)
- [AccessControlExtensionChangedEvent](../interfaces/cluster_export.AccessControl.AccessControlExtensionChangedEvent.md)
- [AccessControlExtensionStruct](../interfaces/cluster_export.AccessControl.AccessControlExtensionStruct.md)
- [AccessControlTargetStruct](../interfaces/cluster_export.AccessControl.AccessControlTargetStruct.md)
- [Cluster](../interfaces/cluster_export.AccessControl.Cluster.md)

### Variables

- [Cluster](cluster_export.AccessControl.md#cluster)
- [ClusterInstance](cluster_export.AccessControl.md#clusterinstance)
- [Complete](cluster_export.AccessControl.md#complete)
- [TlvAccessControlEntryChangedEvent](cluster_export.AccessControl.md#tlvaccesscontrolentrychangedevent)
- [TlvAccessControlEntryStruct](cluster_export.AccessControl.md#tlvaccesscontrolentrystruct)
- [TlvAccessControlExtensionChangedEvent](cluster_export.AccessControl.md#tlvaccesscontrolextensionchangedevent)
- [TlvAccessControlExtensionStruct](cluster_export.AccessControl.md#tlvaccesscontrolextensionstruct)
- [TlvAccessControlTargetStruct](cluster_export.AccessControl.md#tlvaccesscontroltargetstruct)

## Variables

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.AccessControl.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:497](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L497)

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:499](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L499)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `accessControlEntriesPerFabric`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `acl`: [`WritableFabricScopedAttribute`](../interfaces/cluster_export.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `authMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`AccessControlEntryAuthMode`](../enums/cluster_export.AccessControl.AccessControlEntryAuthMode.md)\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `privilege`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`AccessControlEntryPrivilege`](../enums/cluster_export.AccessControl.AccessControlEntryPrivilege.md)\> ; `subjects`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`NodeId`](datatype_export.md#nodeid)[]\> ; `targets`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<...\>[]\>  }\>[], `any`\> ; `extension`: [`OptionalWritableFabricScopedAttribute`](../interfaces/cluster_export.OptionalWritableFabricScopedAttribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricIndex`](datatype_export.md#fabricindex)\>  }\>[], `any`\> ; `subjectsPerAccessControlEntry`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `targetsPerAccessControlEntry`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `accessControlEntryChanged`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `adminNodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `changeType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ChangeType`](../enums/cluster_export.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `latestValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `authMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `privilege`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `subjects`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `targets`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>\>  }\>, `any`\> ; `accessControlExtensionChanged`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `adminNodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `changeType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ChangeType`](../enums/cluster_export.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `latestValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>\>  }\>, `any`\>  } ; `id`: ``31`` = 0x1f; `name`: ``"AccessControl"`` = "AccessControl"; `revision`: ``1`` = 1 }\>

**`See`**

[Cluster](cluster_export.AccessControl.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:346](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L346)

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/cluster_export.AccessControl.Cluster.md) = `Cluster`

#### Defined in

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:500](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L500)

___

### TlvAccessControlEntryChangedEvent

• `Const` **TlvAccessControlEntryChangedEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `adminNodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `changeType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ChangeType`](../enums/cluster_export.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `latestValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `authMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`AccessControlEntryAuthMode`](../enums/cluster_export.AccessControl.AccessControlEntryAuthMode.md)\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `privilege`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`AccessControlEntryPrivilege`](../enums/cluster_export.AccessControl.AccessControlEntryPrivilege.md)\> ; `subjects`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`NodeId`](datatype_export.md#nodeid)[]\> ; `targets`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `cluster`: ... ; `deviceType`: ... ; `endpoint`: ...  }\>[]\>  }\>\>  }\>

Body of the AccessControl accessControlEntryChanged event

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.10.7.1

#### Defined in

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:274](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L274)

___

### TlvAccessControlEntryStruct

• `Const` **TlvAccessControlEntryStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `authMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`AccessControlEntryAuthMode`](../enums/cluster_export.AccessControl.AccessControlEntryAuthMode.md)\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `privilege`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`AccessControlEntryPrivilege`](../enums/cluster_export.AccessControl.AccessControlEntryPrivilege.md)\> ; `subjects`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`NodeId`](datatype_export.md#nodeid)[]\> ; `targets`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `cluster`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`ClusterId`](datatype_export.md#clusterid)\<`number`\>\> ; `deviceType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`DeviceTypeId`](datatype_export.md#devicetypeid)\<`number`\>\> ; `endpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`EndpointNumber`](datatype_export.md#endpointnumber)\>  }\>[]\>  }\>

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.10.4.5

#### Defined in

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:118](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L118)

___

### TlvAccessControlExtensionChangedEvent

• `Const` **TlvAccessControlExtensionChangedEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `adminNodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `changeType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ChangeType`](../enums/cluster_export.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `latestValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricIndex`](datatype_export.md#fabricindex)\>  }\>\>  }\>

Body of the AccessControl accessControlExtensionChanged event

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.10.7.2

#### Defined in

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:328](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L328)

___

### TlvAccessControlExtensionStruct

• `Const` **TlvAccessControlExtensionStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `data`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricIndex`](datatype_export.md#fabricindex)\>  }\>

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.10.4.6

#### Defined in

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:225](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L225)

___

### TlvAccessControlTargetStruct

• `Const` **TlvAccessControlTargetStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `cluster`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`ClusterId`](datatype_export.md#clusterid)\<`number`\>\> ; `deviceType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`DeviceTypeId`](datatype_export.md#devicetypeid)\<`number`\>\> ; `endpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`EndpointNumber`](datatype_export.md#endpointnumber)\>  }\>

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.10.4.4

#### Defined in

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:104](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L104)
