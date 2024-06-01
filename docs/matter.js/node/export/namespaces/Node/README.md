[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [node/export](../../README.md) / Node

# Namespace: Node

## Index

### Interfaces

- [NodeOptions](interfaces/NodeOptions.md)

## Type Aliases

### Configuration\<T\>

> **Configuration**\<`T`\>: [`Configuration`](../../../../endpoint/export/namespaces/Endpoint/README.md#configurationto)\<`T`, [`NodeOptions`](interfaces/NodeOptions.md)\>

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* [`RootEndpoint`](../../../../endpoint/definitions/system/RootEndpoint/interfaces/RootEndpoint.md) | [`RootEndpoint`](../../../../endpoint/definitions/system/RootEndpoint/interfaces/RootEndpoint.md) |

#### Source

[packages/matter.js/src/node/Node.ts:144](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/node/Node.ts#L144)

***

### Options\<T\>

> **Options**\<`T`\>: [`Options`](../../../../endpoint/export/namespaces/Endpoint/README.md#optionsto)\<`T`, [`NodeOptions`](interfaces/NodeOptions.md)\>

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* [`RootEndpoint`](../../../../endpoint/definitions/system/RootEndpoint/interfaces/RootEndpoint.md) | [`RootEndpoint`](../../../../endpoint/definitions/system/RootEndpoint/interfaces/RootEndpoint.md) |

#### Source

[packages/matter.js/src/node/Node.ts:142](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/node/Node.ts#L142)

## Functions

### nodeConfigFor()

> **nodeConfigFor**\<`T`\>(`defaultType`, `configuration`, `options`?): [`Configuration`](README.md#configurationt)\<`T`\>

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`RootEndpoint`](../../../../endpoint/definitions/system/RootEndpoint/interfaces/RootEndpoint.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `defaultType` | `T` |
| `configuration` | `undefined` \| `T` \| [`Configuration`](README.md#configurationt)\<`T`\> |
| `options`? | [`Options`](README.md#optionst)\<`T`\> |

#### Returns

[`Configuration`](README.md#configurationt)\<`T`\>

#### Source

[packages/matter.js/src/node/Node.ts:146](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/node/Node.ts#L146)
