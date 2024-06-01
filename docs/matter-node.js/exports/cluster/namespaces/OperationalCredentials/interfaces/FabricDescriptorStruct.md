[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [OperationalCredentials](../README.md) / FabricDescriptorStruct

# Interface: FabricDescriptorStruct

This structure encodes a Fabric Reference for a fabric within which a given Node is currently commissioned.

## See

MatterSpecification.v11.Core § 11.17.4.5

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvFabricDescriptorStruct`](../README.md#tlvfabricdescriptorstruct)\>

## Properties

### fabricId

> **fabricId**: [`FabricId`](../../../../datatype/README.md#fabricid)

This field shall contain the FabricID allocated to the fabric referenced by FabricIndex. This field shall
match the value found in the matter-fabric-id field from the operational certificate providing the
operational identity under this Fabric.

#### See

MatterSpecification.v11.Core § 11.17.4.5.3

#### Inherited from

`TypeFromSchema.fabricId`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:81

***

### fabricIndex

> **fabricIndex**: [`FabricIndex`](../../../../datatype/README.md#fabricindex)

#### Inherited from

`TypeFromSchema.fabricIndex`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:97

***

### label

> **label**: `string`

This field shall contain a commissioner-set label for the fabric referenced by FabricIndex. This label is
set by the UpdateFabricLabel command.

#### See

MatterSpecification.v11.Core § 11.17.4.5.5

#### Inherited from

`TypeFromSchema.label`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:96

***

### nodeId

> **nodeId**: [`NodeId`](../../../../datatype/README.md#nodeid)

This field shall contain the NodeID in use within the fabric referenced by FabricIndex. This field shall
match the value found in the matter-node-id field from the operational certificate providing this
operational identity.

#### See

MatterSpecification.v11.Core § 11.17.4.5.4

#### Inherited from

`TypeFromSchema.nodeId`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:89

***

### rootPublicKey

> **rootPublicKey**: `Uint8Array`

This field shall contain the public key for the trusted root that scopes the fabric referenced by
FabricIndex and its associated operational credential (see Section 6.4.5.3, “Trusted Root CA Certificates”).
The format for the key shall be the same as that used in the ec-pub-key field of the Matter Certificate
Encoding for the root in the operational certificate chain.

#### See

MatterSpecification.v11.Core § 11.17.4.5.1

#### Inherited from

`TypeFromSchema.rootPublicKey`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:62

***

### vendorId

> **vendorId**: [`VendorId`](../../../../datatype/README.md#vendorid)

This field shall contain the value of AdminVendorID provided in the AddNOC command that led to the creation
of this FabricDescriptorStruct. The set of allowed values is defined in Section 11.17.6.8.3, “AdminVendorID
Field”.

The intent is to provide some measure of user transparency about which entities have Administer privileges
on the Node.

#### See

MatterSpecification.v11.Core § 11.17.4.5.2

#### Inherited from

`TypeFromSchema.vendorId`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:73
