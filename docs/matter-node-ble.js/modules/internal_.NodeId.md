[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](internal_.md) / NodeId

# Namespace: NodeId

[\<internal\>](internal_.md).NodeId

## Table of contents

### Variables

- [UNSPECIFIED\_NODE\_ID](internal_.NodeId.md#unspecified_node_id)

### Functions

- [extractAsCaseAuthenticatedTag](internal_.NodeId.md#extractascaseauthenticatedtag)
- [fromCaseAuthenticatedTag](internal_.NodeId.md#fromcaseauthenticatedtag)
- [fromGroupNodeId](internal_.NodeId.md#fromgroupnodeid)
- [fromTemporaryLocalNodeId](internal_.NodeId.md#fromtemporarylocalnodeid)
- [getFromPakeKeyIdentifier](internal_.NodeId.md#getfrompakekeyidentifier)
- [isCaseAuthenticatedTag](internal_.NodeId.md#iscaseauthenticatedtag)
- [isOperationalNodeId](internal_.NodeId.md#isoperationalnodeid)
- [randomOperationalNodeId](internal_.NodeId.md#randomoperationalnodeid)
- [toHexString](internal_.NodeId.md#tohexstring)

## Variables

### UNSPECIFIED\_NODE\_ID

• `Const` **UNSPECIFIED\_NODE\_ID**: [`NodeId`](internal_.md#nodeid)

The Unspecified Node ID (0x0000_0000_0000_0000) is a reserved value that never appears in messages or protocol
usage. It exists to mark or detect the presence of uninitialized, missing, or invalid Node IDs.

#### Defined in

matter.js/dist/esm/datatype/NodeId.d.ts:22

## Functions

### extractAsCaseAuthenticatedTag

▸ **extractAsCaseAuthenticatedTag**(`nodeId`): [`CaseAuthenticatedTag`](internal_.md#caseauthenticatedtag)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](internal_.md#nodeid) |

#### Returns

[`CaseAuthenticatedTag`](internal_.md#caseauthenticatedtag)

#### Defined in

matter.js/dist/esm/datatype/NodeId.d.ts:48

___

### fromCaseAuthenticatedTag

▸ **fromCaseAuthenticatedTag**(`id`): [`NodeId`](internal_.md#nodeid)

This subrange of Node ID is used to assign an access control subject to a group of peer nodes that share a
single CASE session as specified in Section 6.6.2.1.2, “Subjects identified by CASE Authenticated Tag”.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`CaseAuthenticatedTag`](internal_.md#caseauthenticatedtag) |

#### Returns

[`NodeId`](internal_.md#nodeid)

#### Defined in

matter.js/dist/esm/datatype/NodeId.d.ts:46

___

### fromGroupNodeId

▸ **fromGroupNodeId**(`groupId`): [`NodeId`](internal_.md#nodeid)

A Group Node ID is a 64-bit Node ID that contains a particular Group ID in the lower half of the Node ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupId` | `number` |

#### Returns

[`NodeId`](internal_.md#nodeid)

#### Defined in

matter.js/dist/esm/datatype/NodeId.d.ts:35

___

### fromTemporaryLocalNodeId

▸ **fromTemporaryLocalNodeId**(`id`): [`NodeId`](internal_.md#nodeid)

A Temporary Local Node ID is a 64-bit Node ID that contains an implementation-dependent value in its lower
32 bits. This allows implementations to keep track of connections or transport-layer links and similar
housekeeping internal usage purposes in contexts where an Operational Node ID is unavailable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

[`NodeId`](internal_.md#nodeid)

#### Defined in

matter.js/dist/esm/datatype/NodeId.d.ts:41

___

### getFromPakeKeyIdentifier

▸ **getFromPakeKeyIdentifier**(`id`): [`NodeId`](internal_.md#nodeid)

This subrange of Node ID is used to assign an access control subject to a particular PAKE key as specified in
Section 6.6.2.1.1, “PASE and Group Subjects”. An example usage would be to create an ACL entry to provide
administrative access to any commissioner communicating via a PASE session established with a particular pincode.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

[`NodeId`](internal_.md#nodeid)

#### Defined in

matter.js/dist/esm/datatype/NodeId.d.ts:54

___

### isCaseAuthenticatedTag

▸ **isCaseAuthenticatedTag**(`nodeId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](internal_.md#nodeid) |

#### Returns

`boolean`

#### Defined in

matter.js/dist/esm/datatype/NodeId.d.ts:47

___

### isOperationalNodeId

▸ **isOperationalNodeId**(`nodeId`): `boolean`

Returns whether the given Node ID is an Operational Node ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](internal_.md#nodeid) |

#### Returns

`boolean`

#### Defined in

matter.js/dist/esm/datatype/NodeId.d.ts:33

___

### randomOperationalNodeId

▸ **randomOperationalNodeId**(): [`NodeId`](internal_.md#nodeid)

An Operational Node ID is a 64-bit number that uniquely identifies an individual Node on a Fabric. All messages
must have an Operational Node ID as the source address. All unicast messages must have an Operational Node ID
as the destination address.

#### Returns

[`NodeId`](internal_.md#nodeid)

#### Defined in

matter.js/dist/esm/datatype/NodeId.d.ts:29

___

### toHexString

▸ **toHexString**(`nodeId`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](internal_.md#nodeid) |

#### Returns

`string`

#### Defined in

matter.js/dist/esm/datatype/NodeId.d.ts:23
