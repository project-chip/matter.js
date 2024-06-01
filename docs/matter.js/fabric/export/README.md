[**@project-chip/matter.js**](../../README.md) • **Docs**

***

[@project-chip/matter.js](../../modules.md) / fabric/export

# fabric/export

## Index

### Modules

- [\<internal\>](-internal-/README.md)

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

> **fabricId**: [`FabricId`](../../datatype/export/README.md#fabricid)

##### fabricIndex

> **fabricIndex**: [`FabricIndex`](../../datatype/export/README.md#fabricindex)

##### label

> **label**: `string`

##### nodeId

> **nodeId**: [`NodeId`](../../datatype/export/README.md#nodeid)

##### rootNodeId

> **rootNodeId**: [`NodeId`](../../datatype/export/README.md#nodeid)

##### rootVendorId

> **rootVendorId**: [`VendorId`](../../datatype/export/README.md#vendorid)

#### Source

[packages/matter.js/src/fabric/Fabric.ts:95](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L95)

***

### FabricJsonObject

> **FabricJsonObject**: `object`

#### Type declaration

##### caseAuthenticatedTags?

> `optional` **caseAuthenticatedTags**: [`CaseAuthenticatedTag`](../../datatype/export/README.md#caseauthenticatedtag)[]

##### fabricId

> **fabricId**: [`FabricId`](../../datatype/export/README.md#fabricid)

##### fabricIndex

> **fabricIndex**: [`FabricIndex`](../../datatype/export/README.md#fabricindex)

##### identityProtectionKey

> **identityProtectionKey**: [`ByteArray`](../../util/export/README.md#bytearray)

##### intermediateCACert

> **intermediateCACert**: [`ByteArray`](../../util/export/README.md#bytearray) \| `undefined`

##### keyPair

> **keyPair**: [`BinaryKeyPair`](../../crypto/export/README.md#binarykeypair)

##### label

> **label**: `string`

##### nodeId

> **nodeId**: [`NodeId`](../../datatype/export/README.md#nodeid)

##### operationalCert

> **operationalCert**: [`ByteArray`](../../util/export/README.md#bytearray)

##### operationalId

> **operationalId**: [`ByteArray`](../../util/export/README.md#bytearray)

##### operationalIdentityProtectionKey

> **operationalIdentityProtectionKey**: [`ByteArray`](../../util/export/README.md#bytearray)

##### rootCert

> **rootCert**: [`ByteArray`](../../util/export/README.md#bytearray)

##### rootNodeId

> **rootNodeId**: [`NodeId`](../../datatype/export/README.md#nodeid)

##### rootPublicKey

> **rootPublicKey**: [`ByteArray`](../../util/export/README.md#bytearray)

##### rootVendorId

> **rootVendorId**: [`VendorId`](../../datatype/export/README.md#vendorid)

##### scopedClusterData

> **scopedClusterData**: `Map`\<`number`, `Map`\<`string`, [`SupportedStorageTypes`](../../storage/export/README.md#supportedstoragetypes)\>\>

#### Source

[packages/matter.js/src/fabric/Fabric.ts:38](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L38)
