[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [DoorLock](../modules/exports_cluster.DoorLock.md) / GetCredentialStatusResponse

# Interface: GetCredentialStatusResponse

[exports/cluster](../modules/exports_cluster.md).[DoorLock](../modules/exports_cluster.DoorLock.md).GetCredentialStatusResponse

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvGetCredentialStatusResponse`](../modules/exports_cluster.DoorLock.md#tlvgetcredentialstatusresponse)\>

  ↳ **`GetCredentialStatusResponse`**

## Table of contents

### Properties

- [creatorFabricIndex](exports_cluster.DoorLock.GetCredentialStatusResponse.md#creatorfabricindex)
- [credentialExists](exports_cluster.DoorLock.GetCredentialStatusResponse.md#credentialexists)
- [lastModifiedFabricIndex](exports_cluster.DoorLock.GetCredentialStatusResponse.md#lastmodifiedfabricindex)
- [nextCredentialIndex](exports_cluster.DoorLock.GetCredentialStatusResponse.md#nextcredentialindex)
- [userIndex](exports_cluster.DoorLock.GetCredentialStatusResponse.md#userindex)

## Properties

### creatorFabricIndex

• **creatorFabricIndex**: ``null`` \| [`FabricIndex`](../modules/exports_datatype.md#fabricindex)

#### Inherited from

TypeFromSchema.creatorFabricIndex

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:417

___

### credentialExists

• **credentialExists**: `boolean`

#### Inherited from

TypeFromSchema.credentialExists

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:415

___

### lastModifiedFabricIndex

• **lastModifiedFabricIndex**: ``null`` \| [`FabricIndex`](../modules/exports_datatype.md#fabricindex)

#### Inherited from

TypeFromSchema.lastModifiedFabricIndex

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:418

___

### nextCredentialIndex

• **nextCredentialIndex**: ``null`` \| `number`

#### Inherited from

TypeFromSchema.nextCredentialIndex

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:419

___

### userIndex

• **userIndex**: ``null`` \| `number`

#### Inherited from

TypeFromSchema.userIndex

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:416
