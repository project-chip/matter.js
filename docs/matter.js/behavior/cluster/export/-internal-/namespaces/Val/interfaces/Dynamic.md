[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/cluster/export](../../../../README.md) / [\<internal\>](../../../README.md) / [Val](../README.md) / Dynamic

# Interface: Dynamic\<O, S\>

Unmanaged raw state classes have no contextual information.  They may implement this interface to provide an
alternate context-aware object for property read, write and validation.

## Extends

- [`Struct`](../../../README.md#struct)

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `O` | `any` |
| `S` *extends* [`Session`](../../../interfaces/Session.md) | [`Session`](../../../interfaces/Session.md) |

## Methods

### `[properties]`()

> **\[properties\]**\<`This`\>(`this`, `owner`, `session`): `Partial`\<`This`\>

Obtain a context-aware property source (and sink).  Supervision will read/write properties from here if
present.  Otherwise they're read from static state as normal.

#### Type parameters

| Type parameter |
| :------ |
| `This` *extends* [`Struct`](../../../README.md#struct) |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `this` | `This` | - |
| `owner` | `O` | the owner of the root reference of the managed value |
| `session` | `S` | the [ValueSupervisor.Session](../../../interfaces/Session.md) accessing the value |

#### Returns

`Partial`\<`This`\>

#### Source

[packages/matter.js/src/behavior/state/Val.ts:100](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/Val.ts#L100)
