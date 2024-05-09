[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [node/export](node_export.md) / Node

# Namespace: Node

[node/export](node_export.md).Node

## Table of contents

### Interfaces

- [NodeOptions](../interfaces/node_export.Node.NodeOptions.md)

### Type Aliases

- [Configuration](node_export.Node.md#configuration)
- [Options](node_export.Node.md#options)

### Functions

- [nodeConfigFor](node_export.Node.md#nodeconfigfor)

## Type Aliases

### Configuration

Ƭ **Configuration**\<`T`\>: [`Configuration`](endpoint_export.Endpoint.md#configuration)\<`T`, [`NodeOptions`](../interfaces/node_export.Node.NodeOptions.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`RootEndpoint`](../interfaces/endpoint_definitions_system_RootEndpoint.RootEndpoint.md) = [`RootEndpoint`](../interfaces/endpoint_definitions_system_RootEndpoint.RootEndpoint.md) |

#### Defined in

[packages/matter.js/src/node/Node.ts:144](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/node/Node.ts#L144)

___

### Options

Ƭ **Options**\<`T`\>: [`Options`](endpoint_export.Endpoint.md#options)\<`T`, [`NodeOptions`](../interfaces/node_export.Node.NodeOptions.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`RootEndpoint`](../interfaces/endpoint_definitions_system_RootEndpoint.RootEndpoint.md) = [`RootEndpoint`](../interfaces/endpoint_definitions_system_RootEndpoint.RootEndpoint.md) |

#### Defined in

[packages/matter.js/src/node/Node.ts:142](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/node/Node.ts#L142)

## Functions

### nodeConfigFor

▸ **nodeConfigFor**\<`T`\>(`defaultType`, `configuration`, `options?`): [`Configuration`](node_export.Node.md#configuration)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`RootEndpoint`](../interfaces/endpoint_definitions_system_RootEndpoint.RootEndpoint.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaultType` | `T` |
| `configuration` | `undefined` \| `T` \| [`Configuration`](node_export.Node.md#configuration)\<`T`\> |
| `options?` | [`Options`](node_export.Node.md#options)\<`T`\> |

#### Returns

[`Configuration`](node_export.Node.md#configuration)\<`T`\>

#### Defined in

[packages/matter.js/src/node/Node.ts:146](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/node/Node.ts#L146)
