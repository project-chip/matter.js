[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [log/export](../README.md) / Diagnostic

# Interface: Diagnostic

Logged values may implement this interface to customize presentation.

You can use the utility functions such as [Diagnostic.dict](../namespaces/Diagnostic/README.md#dict) to create
Diagnostics from common value types.

## Constructors

## Properties

### \[presentation\]?

> `optional` `readonly` **\[presentation\]**: [`Status`](../../../common/export/namespaces/Lifecycle/enumerations/Status.md) \| [`Presentation`](../namespaces/Diagnostic/enumerations/Presentation.md)

#### Source

[packages/matter.js/src/log/Diagnostic.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Diagnostic.ts#L16)

***

### \[value\]?

> `optional` `readonly` **\[value\]**: `unknown`

#### Source

[packages/matter.js/src/log/Diagnostic.ts:17](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Diagnostic.ts#L17)
