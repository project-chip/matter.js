[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [OperationalCredentials](../modules/cluster_export.OperationalCredentials.md) / FabricDescriptorStruct

# Interface: FabricDescriptorStruct

[cluster/export](../modules/cluster_export.md).[OperationalCredentials](../modules/cluster_export.OperationalCredentials.md).FabricDescriptorStruct

This structure encodes a Fabric Reference for a fabric within which a given Node is currently commissioned.

**`See`**

MatterSpecification.v11.Core § 11.17.4.5

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvFabricDescriptorStruct`](../modules/cluster_export.OperationalCredentials.md#tlvfabricdescriptorstruct)\>

  ↳ **`FabricDescriptorStruct`**

## Table of contents

### Properties

- [fabricId](cluster_export.OperationalCredentials.FabricDescriptorStruct.md#fabricid)
- [fabricIndex](cluster_export.OperationalCredentials.FabricDescriptorStruct.md#fabricindex)
- [label](cluster_export.OperationalCredentials.FabricDescriptorStruct.md#label)
- [nodeId](cluster_export.OperationalCredentials.FabricDescriptorStruct.md#nodeid)
- [rootPublicKey](cluster_export.OperationalCredentials.FabricDescriptorStruct.md#rootpublickey)
- [vendorId](cluster_export.OperationalCredentials.FabricDescriptorStruct.md#vendorid)

## Properties

### fabricId

• **fabricId**: [`FabricId`](../modules/datatype_export.md#fabricid)

This field shall contain the FabricID allocated to the fabric referenced by FabricIndex. This field shall
match the value found in the matter-fabric-id field from the operational certificate providing the
operational identity under this Fabric.

**`See`**

MatterSpecification.v11.Core § 11.17.4.5.3

#### Inherited from

TypeFromSchema.fabricId

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:107](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L107)

___

### fabricIndex

• **fabricIndex**: [`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Inherited from

TypeFromSchema.fabricIndex

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:126](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L126)

___

### label

• **label**: `string`

This field shall contain a commissioner-set label for the fabric referenced by FabricIndex. This label is
set by the UpdateFabricLabel command.

**`See`**

MatterSpecification.v11.Core § 11.17.4.5.5

#### Inherited from

TypeFromSchema.label

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:124](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L124)

___

### nodeId

• **nodeId**: [`NodeId`](../modules/datatype_export.md#nodeid)

This field shall contain the NodeID in use within the fabric referenced by FabricIndex. This field shall
match the value found in the matter-node-id field from the operational certificate providing this
operational identity.

**`See`**

MatterSpecification.v11.Core § 11.17.4.5.4

#### Inherited from

TypeFromSchema.nodeId

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:116](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L116)

___

### rootPublicKey

• **rootPublicKey**: `Uint8Array`

This field shall contain the public key for the trusted root that scopes the fabric referenced by
FabricIndex and its associated operational credential (see Section 6.4.5.3, “Trusted Root CA Certificates”).
The format for the key shall be the same as that used in the ec-pub-key field of the Matter Certificate
Encoding for the root in the operational certificate chain.

**`See`**

MatterSpecification.v11.Core § 11.17.4.5.1

#### Inherited from

TypeFromSchema.rootPublicKey

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:86](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L86)

___

### vendorId

• **vendorId**: [`VendorId`](../modules/datatype_export.md#vendorid)

This field shall contain the value of AdminVendorID provided in the AddNOC command that led to the creation
of this FabricDescriptorStruct. The set of allowed values is defined in Section 11.17.6.8.3, “AdminVendorID
Field”.

The intent is to provide some measure of user transparency about which entities have Administer privileges
on the Node.

**`See`**

MatterSpecification.v11.Core § 11.17.4.5.2

#### Inherited from

TypeFromSchema.vendorId

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:98](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L98)
