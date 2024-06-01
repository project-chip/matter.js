[**@project-chip/matter-node.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../modules.md) / exports/fabric

# exports/fabric

## Index

### Enumerations

- [FabricAction](enumerations/FabricAction.md)

### Classes

- [Fabric](classes/Fabric.md)
- [FabricBuilder](classes/FabricBuilder.md)
- [FabricManager](classes/FabricManager.md)
- [FabricNotFoundError](classes/FabricNotFoundError.md)
- [FabricTableFullError](classes/FabricTableFullError.md)
- [PublicKeyError](classes/PublicKeyError.md)

## Type Aliases

### ExposedFabricInformation

> **ExposedFabricInformation**: `object`

#### Type declaration

##### fabricId

> **fabricId**: [`FabricId`](../datatype/README.md#fabricid)

##### fabricIndex

> **fabricIndex**: [`FabricIndex`](../datatype/README.md#fabricindex)

##### label

> **label**: `string`

##### nodeId

> **nodeId**: [`NodeId`](../datatype/README.md#nodeid)

##### rootNodeId

> **rootNodeId**: [`NodeId`](../datatype/README.md#nodeid)

##### rootVendorId

> **rootVendorId**: [`VendorId`](../datatype/README.md#vendorid)

#### Source

packages/matter.js/dist/esm/fabric/Fabric.d.ts:39

***

### FabricJsonObject

> **FabricJsonObject**: `object`

#### Type declaration

##### caseAuthenticatedTags?

> `optional` **caseAuthenticatedTags**: [`CaseAuthenticatedTag`](../datatype/README.md#caseauthenticatedtag)[]

##### fabricId

> **fabricId**: [`FabricId`](../datatype/README.md#fabricid)

##### fabricIndex

> **fabricIndex**: [`FabricIndex`](../datatype/README.md#fabricindex)

##### identityProtectionKey

> **identityProtectionKey**: [`ByteArray`](../../util/export/README.md#bytearray)

##### intermediateCACert

> **intermediateCACert**: [`ByteArray`](../../util/export/README.md#bytearray) \| `undefined`

##### keyPair

> **keyPair**: [`BinaryKeyPair`](../../crypto/export/README.md#binarykeypair)

##### label

> **label**: `string`

##### nodeId

> **nodeId**: [`NodeId`](../datatype/README.md#nodeid)

##### operationalCert

> **operationalCert**: [`ByteArray`](../../util/export/README.md#bytearray)

##### operationalId

> **operationalId**: [`ByteArray`](../../util/export/README.md#bytearray)

##### operationalIdentityProtectionKey

> **operationalIdentityProtectionKey**: [`ByteArray`](../../util/export/README.md#bytearray)

##### rootCert

> **rootCert**: [`ByteArray`](../../util/export/README.md#bytearray)

##### rootNodeId

> **rootNodeId**: [`NodeId`](../datatype/README.md#nodeid)

##### rootPublicKey

> **rootPublicKey**: [`ByteArray`](../../util/export/README.md#bytearray)

##### rootVendorId

> **rootVendorId**: [`VendorId`](../datatype/README.md#vendorid)

##### scopedClusterData

> **scopedClusterData**: `Map`\<`number`, `Map`\<`string`, [`SupportedStorageTypes`](../../storage/export/README.md#supportedstoragetypes)\>\>

#### Source

packages/matter.js/dist/esm/fabric/Fabric.d.ts:21
