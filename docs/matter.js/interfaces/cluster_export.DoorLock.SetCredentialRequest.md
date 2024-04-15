[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [DoorLock](../modules/cluster_export.DoorLock.md) / SetCredentialRequest

# Interface: SetCredentialRequest

[cluster/export](../modules/cluster_export.md).[DoorLock](../modules/cluster_export.DoorLock.md).SetCredentialRequest

Input to the DoorLock setCredential command

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvSetCredentialRequest`](../modules/cluster_export.DoorLock.md#tlvsetcredentialrequest)\>

  ↳ **`SetCredentialRequest`**

## Table of contents

### Properties

- [credential](cluster_export.DoorLock.SetCredentialRequest.md#credential)
- [credentialData](cluster_export.DoorLock.SetCredentialRequest.md#credentialdata)
- [operationType](cluster_export.DoorLock.SetCredentialRequest.md#operationtype)
- [userIndex](cluster_export.DoorLock.SetCredentialRequest.md#userindex)
- [userStatus](cluster_export.DoorLock.SetCredentialRequest.md#userstatus)
- [userType](cluster_export.DoorLock.SetCredentialRequest.md#usertype)

## Properties

### credential

• **credential**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `credentialType`: [`FieldType`](tlv_export.FieldType.md)\<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>

#### Inherited from

TypeFromSchema.credential

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:363](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L363)

___

### credentialData

• **credentialData**: `Uint8Array`

#### Inherited from

TypeFromSchema.credentialData

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:364](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L364)

___

### operationType

• **operationType**: [`DataOperationType`](../enums/cluster_export.DoorLock.DataOperationType.md)

#### Inherited from

TypeFromSchema.operationType

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:362](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L362)

___

### userIndex

• **userIndex**: ``null`` \| `number`

#### Inherited from

TypeFromSchema.userIndex

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:365](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L365)

___

### userStatus

• **userStatus**: ``null`` \| [`UserStatus`](../enums/cluster_export.DoorLock.UserStatus.md)

#### Inherited from

TypeFromSchema.userStatus

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:366](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L366)

___

### userType

• **userType**: ``null`` \| [`UserType`](../enums/cluster_export.DoorLock.UserType.md)

#### Inherited from

TypeFromSchema.userType

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:367](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L367)
