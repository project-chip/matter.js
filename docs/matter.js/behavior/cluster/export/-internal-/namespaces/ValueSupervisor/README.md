[**@project-chip/matter.js**](../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../modules.md) / [behavior/cluster/export](../../../README.md) / [\<internal\>](../../README.md) / ValueSupervisor

# Namespace: ValueSupervisor

## References

### Session

Re-exports [Session](../../interfaces/Session.md)

## Type Aliases

### Manage()

> **Manage**: (`reference`, `session`) => [`Val`](../../README.md#val)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reference` | [`Reference`](../Val/interfaces/Reference.md) |
| `session` | [`Session`](../../interfaces/Session.md) |

#### Returns

[`Val`](../../README.md#val)

#### Source

[packages/matter.js/src/behavior/supervision/ValueSupervisor.ts:91](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/supervision/ValueSupervisor.ts#L91)

***

### Patch()

> **Patch**: (`changes`, `target`, `path`) => [`Val`](../../README.md#val)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `changes` | [`Collection`](../Val/README.md#collection) |
| `target` | [`Collection`](../Val/README.md#collection) |
| `path` | [`DataModelPath`](../../interfaces/DataModelPath.md) |

#### Returns

[`Val`](../../README.md#val)

#### Source

[packages/matter.js/src/behavior/supervision/ValueSupervisor.ts:93](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/supervision/ValueSupervisor.ts#L93)

***

### Validate()

> **Validate**: (`value`, `session`, `location`) => `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | [`Val`](../../README.md#val) |
| `session` | [`Session`](../../interfaces/Session.md) |
| `location` | [`ValidationLocation`](../../interfaces/ValidationLocation.md) |

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/supervision/ValueSupervisor.ts:89](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/supervision/ValueSupervisor.ts#L89)
