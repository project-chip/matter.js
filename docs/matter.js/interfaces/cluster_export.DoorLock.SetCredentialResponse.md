[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [DoorLock](../modules/cluster_export.DoorLock.md) / SetCredentialResponse

# Interface: SetCredentialResponse

[cluster/export](../modules/cluster_export.md).[DoorLock](../modules/cluster_export.DoorLock.md).SetCredentialResponse

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvSetCredentialResponse`](../modules/cluster_export.DoorLock.md#tlvsetcredentialresponse)\>

  ↳ **`SetCredentialResponse`**

## Table of contents

### Properties

- [nextCredentialIndex](cluster_export.DoorLock.SetCredentialResponse.md#nextcredentialindex)
- [status](cluster_export.DoorLock.SetCredentialResponse.md#status)
- [userIndex](cluster_export.DoorLock.SetCredentialResponse.md#userindex)

## Properties

### nextCredentialIndex

• **nextCredentialIndex**: ``null`` \| `number`

#### Inherited from

TypeFromSchema.nextCredentialIndex

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:394](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L394)

___

### status

• **status**: [`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)

#### Inherited from

TypeFromSchema.status

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:392](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L392)

___

### userIndex

• **userIndex**: ``null`` \| `number`

#### Inherited from

TypeFromSchema.userIndex

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:393](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L393)
