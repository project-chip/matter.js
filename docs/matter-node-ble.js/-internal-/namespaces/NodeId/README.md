[**@project-chip/matter-node-ble.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../../../globals.md) / [\<internal\>](../../README.md) / NodeId

# Namespace: NodeId

## Variables

### UNSPECIFIED\_NODE\_ID

> `const` **UNSPECIFIED\_NODE\_ID**: [`NodeId`](../../README.md#nodeid-5)

The Unspecified Node ID (0x0000_0000_0000_0000) is a reserved value that never appears in messages or protocol
usage. It exists to mark or detect the presence of uninitialized, missing, or invalid Node IDs.

#### Source

matter.js/dist/esm/datatype/NodeId.d.ts:22

## Functions

### extractAsCaseAuthenticatedTag()

> **extractAsCaseAuthenticatedTag**(`nodeId`): [`CaseAuthenticatedTag`](../../README.md#caseauthenticatedtag)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../../README.md#nodeid-5) |

#### Returns

[`CaseAuthenticatedTag`](../../README.md#caseauthenticatedtag)

#### Source

matter.js/dist/esm/datatype/NodeId.d.ts:48

***

### fromCaseAuthenticatedTag()

> **fromCaseAuthenticatedTag**(`id`): [`NodeId`](../../README.md#nodeid-5)

This subrange of Node ID is used to assign an access control subject to a group of peer nodes that share a
single CASE session as specified in Section 6.6.2.1.2, “Subjects identified by CASE Authenticated Tag”.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | [`CaseAuthenticatedTag`](../../README.md#caseauthenticatedtag) |

#### Returns

[`NodeId`](../../README.md#nodeid-5)

#### Source

matter.js/dist/esm/datatype/NodeId.d.ts:46

***

### fromGroupNodeId()

> **fromGroupNodeId**(`groupId`): [`NodeId`](../../README.md#nodeid-5)

A Group Node ID is a 64-bit Node ID that contains a particular Group ID in the lower half of the Node ID.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `groupId` | `number` |

#### Returns

[`NodeId`](../../README.md#nodeid-5)

#### Source

matter.js/dist/esm/datatype/NodeId.d.ts:35

***

### fromTemporaryLocalNodeId()

> **fromTemporaryLocalNodeId**(`id`): [`NodeId`](../../README.md#nodeid-5)

A Temporary Local Node ID is a 64-bit Node ID that contains an implementation-dependent value in its lower
32 bits. This allows implementations to keep track of connections or transport-layer links and similar
housekeeping internal usage purposes in contexts where an Operational Node ID is unavailable.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

[`NodeId`](../../README.md#nodeid-5)

#### Source

matter.js/dist/esm/datatype/NodeId.d.ts:41

***

### getFromPakeKeyIdentifier()

> **getFromPakeKeyIdentifier**(`id`): [`NodeId`](../../README.md#nodeid-5)

This subrange of Node ID is used to assign an access control subject to a particular PAKE key as specified in
Section 6.6.2.1.1, “PASE and Group Subjects”. An example usage would be to create an ACL entry to provide
administrative access to any commissioner communicating via a PASE session established with a particular pincode.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

[`NodeId`](../../README.md#nodeid-5)

#### Source

matter.js/dist/esm/datatype/NodeId.d.ts:54

***

### isCaseAuthenticatedTag()

> **isCaseAuthenticatedTag**(`nodeId`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../../README.md#nodeid-5) |

#### Returns

`boolean`

#### Source

matter.js/dist/esm/datatype/NodeId.d.ts:47

***

### isOperationalNodeId()

> **isOperationalNodeId**(`nodeId`): `boolean`

Returns whether the given Node ID is an Operational Node ID.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../../README.md#nodeid-5) |

#### Returns

`boolean`

#### Source

matter.js/dist/esm/datatype/NodeId.d.ts:33

***

### randomOperationalNodeId()

> **randomOperationalNodeId**(): [`NodeId`](../../README.md#nodeid-5)

An Operational Node ID is a 64-bit number that uniquely identifies an individual Node on a Fabric. All messages
must have an Operational Node ID as the source address. All unicast messages must have an Operational Node ID
as the destination address.

#### Returns

[`NodeId`](../../README.md#nodeid-5)

#### Source

matter.js/dist/esm/datatype/NodeId.d.ts:29

***

### toHexString()

> **toHexString**(`nodeId`): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../../README.md#nodeid-5) |

#### Returns

`string`

#### Source

matter.js/dist/esm/datatype/NodeId.d.ts:23
