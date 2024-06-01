[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [endpoint/export](../../README.md) / Agent

# Namespace: Agent

## Index

### Interfaces

- [Internal](interfaces/Internal.md)
- [Type](interfaces/Type.md)

## Type Aliases

### Instance\<T\>

> **Instance**\<`T`\>: [`Agent`](../../classes/Agent.md) & `{ readonly [K in keyof T["behaviors"] & string]: InstanceType<T["behaviors"][K]> }`

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* [`EndpointType`](../../../../behavior/cluster/export/-internal-/interfaces/EndpointType.md) | [`Empty`](../../../../behavior/cluster/export/-internal-/interfaces/Empty.md) |

#### Source

[packages/matter.js/src/endpoint/Agent.ts:166](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Agent.ts#L166)
