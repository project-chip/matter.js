[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [DoorLock](../README.md) / SetCredentialRequest

# Interface: SetCredentialRequest

Input to the DoorLock setCredential command

## See

MatterSpecification.v11.Cluster § 5.2.4

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvSetCredentialRequest`](../README.md#tlvsetcredentialrequest)\>

## Properties

### credential

> **credential**: [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>

#### Type declaration

##### credentialIndex

> **credentialIndex**: [`FieldType`](../../../../tlv/interfaces/FieldType.md)\<`number`\>

This is the index of the specific credential used to authorize the lock operation in the list of credentials
identified by CredentialType (e.g. schedule, PIN, RFID, etc.). This shall be set to 0 if CredentialType is
ProgrammingPIN or does not correspond to a list that can be indexed into.

###### See

MatterSpecification.v11.Cluster § 5.2.6.3.2

##### credentialType

> **credentialType**: [`FieldType`](../../../../tlv/interfaces/FieldType.md)\<[`CredentialType`](../enumerations/CredentialType.md)\>

The credential type used to authorize the lock operation.

###### See

MatterSpecification.v11.Cluster § 5.2.6.3.1

#### Inherited from

`TypeFromSchema.credential`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:331

***

### credentialData

> **credentialData**: `Uint8Array`

#### Inherited from

`TypeFromSchema.credentialData`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:347

***

### operationType

> **operationType**: [`DataOperationType`](../enumerations/DataOperationType.md)

#### Inherited from

`TypeFromSchema.operationType`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:330

***

### userIndex

> **userIndex**: `null` \| `number`

#### Inherited from

`TypeFromSchema.userIndex`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:348

***

### userStatus

> **userStatus**: `null` \| [`UserStatus`](../enumerations/UserStatus.md)

#### Inherited from

`TypeFromSchema.userStatus`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:349

***

### userType

> **userType**: `null` \| [`UserType`](../enumerations/UserType.md)

#### Inherited from

`TypeFromSchema.userType`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:350
