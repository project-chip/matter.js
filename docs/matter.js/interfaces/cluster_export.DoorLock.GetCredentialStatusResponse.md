[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [DoorLock](../modules/cluster_export.DoorLock.md) / GetCredentialStatusResponse

# Interface: GetCredentialStatusResponse

[cluster/export](../modules/cluster_export.md).[DoorLock](../modules/cluster_export.DoorLock.md).GetCredentialStatusResponse

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvGetCredentialStatusResponse`](../modules/cluster_export.DoorLock.md#tlvgetcredentialstatusresponse)\>

  ↳ **`GetCredentialStatusResponse`**

## Table of contents

### Properties

- [creatorFabricIndex](cluster_export.DoorLock.GetCredentialStatusResponse.md#creatorfabricindex)
- [credentialExists](cluster_export.DoorLock.GetCredentialStatusResponse.md#credentialexists)
- [lastModifiedFabricIndex](cluster_export.DoorLock.GetCredentialStatusResponse.md#lastmodifiedfabricindex)
- [nextCredentialIndex](cluster_export.DoorLock.GetCredentialStatusResponse.md#nextcredentialindex)
- [userIndex](cluster_export.DoorLock.GetCredentialStatusResponse.md#userindex)

## Properties

### creatorFabricIndex

• **creatorFabricIndex**: ``null`` \| [`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Inherited from

TypeFromSchema.creatorFabricIndex

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:421](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L421)

___

### credentialExists

• **credentialExists**: `boolean`

#### Inherited from

TypeFromSchema.credentialExists

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:419](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L419)

___

### lastModifiedFabricIndex

• **lastModifiedFabricIndex**: ``null`` \| [`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Inherited from

TypeFromSchema.lastModifiedFabricIndex

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:422](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L422)

___

### nextCredentialIndex

• **nextCredentialIndex**: ``null`` \| `number`

#### Inherited from

TypeFromSchema.nextCredentialIndex

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:423](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L423)

___

### userIndex

• **userIndex**: ``null`` \| `number`

#### Inherited from

TypeFromSchema.userIndex

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:420](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L420)
