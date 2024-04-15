[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [DoorLock](../modules/exports_cluster.DoorLock.md) / SetCredentialRequest

# Interface: SetCredentialRequest

[exports/cluster](../modules/exports_cluster.md).[DoorLock](../modules/exports_cluster.DoorLock.md).SetCredentialRequest

Input to the DoorLock setCredential command

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvSetCredentialRequest`](../modules/exports_cluster.DoorLock.md#tlvsetcredentialrequest)\>

  ↳ **`SetCredentialRequest`**

## Table of contents

### Properties

- [credential](exports_cluster.DoorLock.SetCredentialRequest.md#credential)
- [credentialData](exports_cluster.DoorLock.SetCredentialRequest.md#credentialdata)
- [operationType](exports_cluster.DoorLock.SetCredentialRequest.md#operationtype)
- [userIndex](exports_cluster.DoorLock.SetCredentialRequest.md#userindex)
- [userStatus](exports_cluster.DoorLock.SetCredentialRequest.md#userstatus)
- [userType](exports_cluster.DoorLock.SetCredentialRequest.md#usertype)

## Properties

### credential

• **credential**: [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `credentialType`: [`FieldType`](exports_tlv.FieldType.md)\<[`CredentialType`](../enums/exports_cluster.DoorLock.CredentialType.md)\>  }\>

#### Inherited from

TypeFromSchema.credential

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:331

___

### credentialData

• **credentialData**: `Uint8Array`

#### Inherited from

TypeFromSchema.credentialData

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:347

___

### operationType

• **operationType**: [`DataOperationType`](../enums/exports_cluster.DoorLock.DataOperationType.md)

#### Inherited from

TypeFromSchema.operationType

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:330

___

### userIndex

• **userIndex**: ``null`` \| `number`

#### Inherited from

TypeFromSchema.userIndex

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:348

___

### userStatus

• **userStatus**: ``null`` \| [`UserStatus`](../enums/exports_cluster.DoorLock.UserStatus.md)

#### Inherited from

TypeFromSchema.userStatus

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:349

___

### userType

• **userType**: ``null`` \| [`UserType`](../enums/exports_cluster.DoorLock.UserType.md)

#### Inherited from

TypeFromSchema.userType

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:350
