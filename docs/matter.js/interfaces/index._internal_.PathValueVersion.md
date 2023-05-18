[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / PathValueVersion

# Interface: PathValueVersion<T\>

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).PathValueVersion

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [path](index._internal_.PathValueVersion.md#path)
- [schema](index._internal_.PathValueVersion.md#schema)
- [value](index._internal_.PathValueVersion.md#value)
- [version](index._internal_.PathValueVersion.md#version)

## Properties

### path

• **path**: [`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](tlv.OptionalFieldType.md)<[`NodeId`](../classes/datatype.NodeId.md)\>  }\>

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:30](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L30)

___

### schema

• **schema**: [`TlvSchema`](../classes/tlv.TlvSchema.md)<`T`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:31](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L31)

___

### value

• **value**: `T`

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:32](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L32)

___

### version

• **version**: `number`

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:33](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L33)
