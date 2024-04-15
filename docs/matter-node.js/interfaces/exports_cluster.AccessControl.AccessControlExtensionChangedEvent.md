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

#### Inherited from

TypeFromSchema.adminNodeId

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:383

___

### adminPasscodeId

• **adminPasscodeId**: ``null`` \| `number`

#### Inherited from

TypeFromSchema.adminPasscodeId

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:384

___

### changeType

• **changeType**: [`ChangeType`](../enums/exports_cluster.AccessControl.ChangeType.md)

#### Inherited from

TypeFromSchema.changeType

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:385

___

### fabricIndex

• **fabricIndex**: [`FabricIndex`](../modules/exports_datatype.md#fabricindex)

#### Inherited from

TypeFromSchema.fabricIndex

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:403

___

### latestValue

• **latestValue**: ``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\>  }\>

#### Inherited from

TypeFromSchema.latestValue

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:386
