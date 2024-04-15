[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [DoorLock](../modules/exports_cluster.DoorLock.md) / CredentialStruct

# Interface: CredentialStruct

[exports/cluster](../modules/exports_cluster.md).[DoorLock](../modules/exports_cluster.DoorLock.md).CredentialStruct

The CredentialStruct is used in LockOperation event and Get User Record Response command and shall indicate the
credential types and their corresponding indices (if any) for the event or user record.

**`See`**

MatterSpecification.v11.Cluster § 5.2.6.3

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvCredentialStruct`](../modules/exports_cluster.DoorLock.md#tlvcredentialstruct)\>

  ↳ **`CredentialStruct`**

## Table of contents

### Properties

- [credentialIndex](exports_cluster.DoorLock.CredentialStruct.md#credentialindex)
- [credentialType](exports_cluster.DoorLock.CredentialStruct.md#credentialtype)

## Properties

### credentialIndex

• **credentialIndex**: `number`

This is the index of the specific credential used to authorize the lock operation in the list of credentials
identified by CredentialType (e.g. schedule, PIN, RFID, etc.). This shall be set to 0 if CredentialType is
ProgrammingPIN or does not correspond to a list that can be indexed into.

**`See`**

MatterSpecification.v11.Cluster § 5.2.6.3.2

#### Inherited from

TypeFromSchema.credentialIndex

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:264

___

### credentialType

• **credentialType**: [`CredentialType`](../enums/exports_cluster.DoorLock.CredentialType.md)

The credential type used to authorize the lock operation.

**`See`**

MatterSpecification.v11.Cluster § 5.2.6.3.1

#### Inherited from

TypeFromSchema.credentialType

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:256
