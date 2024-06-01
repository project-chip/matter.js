[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [DoorLock](../README.md) / CredentialStruct

# Interface: CredentialStruct

The CredentialStruct is used in LockOperation event and Get User Record Response command and shall indicate the
credential types and their corresponding indices (if any) for the event or user record.

## See

MatterSpecification.v11.Cluster § 5.2.6.3

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvCredentialStruct`](../README.md#tlvcredentialstruct)\>

## Properties

### credentialIndex

> **credentialIndex**: `number`

This is the index of the specific credential used to authorize the lock operation in the list of credentials
identified by CredentialType (e.g. schedule, PIN, RFID, etc.). This shall be set to 0 if CredentialType is
ProgrammingPIN or does not correspond to a list that can be indexed into.

#### See

MatterSpecification.v11.Cluster § 5.2.6.3.2

#### Inherited from

`TypeFromSchema.credentialIndex`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:264

***

### credentialType

> **credentialType**: [`CredentialType`](../enumerations/CredentialType.md)

The credential type used to authorize the lock operation.

#### See

MatterSpecification.v11.Cluster § 5.2.6.3.1

#### Inherited from

`TypeFromSchema.credentialType`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:256
