[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / AccessControl

# Namespace: AccessControl

[cluster/export](cluster_export.md).AccessControl

## Table of contents

### Enumerations

- [AccessControlEntryAuthMode](../enums/cluster_export.AccessControl.AccessControlEntryAuthMode.md)
- [AccessControlEntryPrivilege](../enums/cluster_export.AccessControl.AccessControlEntryPrivilege.md)
- [ChangeType](../enums/cluster_export.AccessControl.ChangeType.md)

### Variables

- [Cluster](cluster_export.AccessControl.md#cluster)
- [TlvAccessControlEntryChangedEvent](cluster_export.AccessControl.md#tlvaccesscontrolentrychangedevent)
- [TlvAccessControlEntryStruct](cluster_export.AccessControl.md#tlvaccesscontrolentrystruct)
- [TlvAccessControlExtensionChangedEvent](cluster_export.AccessControl.md#tlvaccesscontrolextensionchangedevent)
- [TlvAccessControlExtensionStruct](cluster_export.AccessControl.md#tlvaccesscontrolextensionstruct)
- [TlvAccessControlTargetStruct](cluster_export.AccessControl.md#tlvaccesscontroltargetstruct)

## Variables

### Cluster

• `Const` **Cluster**: [`Cluster`](cluster_export.md#cluster)<[`BitSchema`](schema_export.md#bitschema), [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<[`BitSchema`](schema_export.md#bitschema)\>, [`Merge`](util_export.md#merge)<{ `accessControlEntriesPerFabric`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `acl`: [`WritableFabricScopedAttribute`](cluster_export.md#writablefabricscopedattribute)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `authMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`AccessControlEntryAuthMode`](../enums/cluster_export.AccessControl.AccessControlEntryAuthMode.md)\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `privilege`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`AccessControlEntryPrivilege`](../enums/cluster_export.AccessControl.AccessControlEntryPrivilege.md)\> ; `subjects`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`NodeId`](datatype_export.md#nodeid)[]\> ; `targets`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `cluster`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`ClusterId`](datatype_export.md#clusterid)\> ; `deviceType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`DeviceTypeId`](datatype_export.md#devicetypeid)\> ; `endpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`EndpointNumber`](datatype_export.md#endpointnumber)\>  }\>[]\>  }\>[], `any`\> ; `extension`: [`OptionalWritableFabricScopedAttribute`](cluster_export.md#optionalwritablefabricscopedattribute)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`FabricIndex`](datatype_export.md#fabricindex)\>  }\>[], `any`\> ; `subjectsPerAccessControlEntry`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `targetsPerAccessControlEntry`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<[`BitSchema`](schema_export.md#bitschema)\>\>, {}, { `accessControlEntryChanged`: [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `adminNodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\> ; `changeType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ChangeType`](../enums/cluster_export.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `latestValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `authMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`AccessControlEntryAuthMode`](../enums/cluster_export.AccessControl.AccessControlEntryAuthMode.md)\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `privilege`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`AccessControlEntryPrivilege`](../enums/cluster_export.AccessControl.AccessControlEntryPrivilege.md)\> ; `subjects`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`NodeId`](datatype_export.md#nodeid)[]\> ; `targets`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `cluster`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`ClusterId`](datatype_export.md#clusterid)\> ; `deviceType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`DeviceTypeId`](datatype_export.md#devicetypeid)\> ; `endpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`EndpointNumber`](datatype_export.md#endpointnumber)\>  }\>[]\>  }\>\>  }\>, `any`\> ; `accessControlExtensionChanged`: [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `adminNodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\> ; `changeType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ChangeType`](../enums/cluster_export.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `latestValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`FabricIndex`](datatype_export.md#fabricindex)\>  }\>\>  }\>, `any`\>  }\>

Access Control

The Access Control Cluster exposes a data model view of a Node’s Access Control List (ACL), which codifies the
rules used to manage and enforce Access Control for the Node’s endpoints and their associated cluster instances.
Access to this Access Control Cluster itself requires a special Administer privilege level, such that only Nodes
granted such privilege (hereafter termed "Administrators") can manage the Access Control Cluster.

The Access Control Cluster shall be present on the root node endpoint of each Node, and shall NOT be present on
any other Endpoint of any Node.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.10

#### Defined in

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:324](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L324)

___

### TlvAccessControlEntryChangedEvent

• `Const` **TlvAccessControlEntryChangedEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `adminNodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\> ; `changeType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ChangeType`](../enums/cluster_export.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `latestValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `authMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`AccessControlEntryAuthMode`](../enums/cluster_export.AccessControl.AccessControlEntryAuthMode.md)\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `privilege`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`AccessControlEntryPrivilege`](../enums/cluster_export.AccessControl.AccessControlEntryPrivilege.md)\> ; `subjects`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`NodeId`](datatype_export.md#nodeid)[]\> ; `targets`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `cluster`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`ClusterId`](datatype_export.md#clusterid)\> ; `deviceType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`DeviceTypeId`](datatype_export.md#devicetypeid)\> ; `endpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`EndpointNumber`](datatype_export.md#endpointnumber)\>  }\>[]\>  }\>\>  }\>

Body of the AccessControl accessControlEntryChanged event

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.10.7.1

#### Defined in

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:256](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L256)

___

### TlvAccessControlEntryStruct

• `Const` **TlvAccessControlEntryStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `authMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`AccessControlEntryAuthMode`](../enums/cluster_export.AccessControl.AccessControlEntryAuthMode.md)\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `privilege`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`AccessControlEntryPrivilege`](../enums/cluster_export.AccessControl.AccessControlEntryPrivilege.md)\> ; `subjects`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`NodeId`](datatype_export.md#nodeid)[]\> ; `targets`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `cluster`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`ClusterId`](datatype_export.md#clusterid)\> ; `deviceType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`DeviceTypeId`](datatype_export.md#devicetypeid)\> ; `endpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`EndpointNumber`](datatype_export.md#endpointnumber)\>  }\>[]\>  }\>

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.10.4.5

#### Defined in

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:110](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L110)

___

### TlvAccessControlExtensionChangedEvent

• `Const` **TlvAccessControlExtensionChangedEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `adminNodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`NodeId`](datatype_export.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\> ; `changeType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ChangeType`](../enums/cluster_export.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `latestValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`FabricIndex`](datatype_export.md#fabricindex)\>  }\>\>  }\>

Body of the AccessControl accessControlExtensionChanged event

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.10.7.2

#### Defined in

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:303](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L303)

___

### TlvAccessControlExtensionStruct

• `Const` **TlvAccessControlExtensionStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `data`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`FabricIndex`](datatype_export.md#fabricindex)\>  }\>

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.10.4.6

#### Defined in

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:212](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L212)

___

### TlvAccessControlTargetStruct

• `Const` **TlvAccessControlTargetStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `cluster`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`ClusterId`](datatype_export.md#clusterid)\> ; `deviceType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`DeviceTypeId`](datatype_export.md#devicetypeid)\> ; `endpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`EndpointNumber`](datatype_export.md#endpointnumber)\>  }\>

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.10.4.4

#### Defined in

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:101](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L101)
