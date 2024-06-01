[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [behavior/export](../README.md) / AccessControl

# Interface: AccessControl

Enforces access control for a specific schema.

## Constructors

## Properties

### authorizeInvoke

> **authorizeInvoke**: [`Assertion`](../namespaces/AccessControl/README.md#assertion)

Assert invoke is authorized.

#### Source

[packages/matter.js/src/behavior/AccessControl.ts:53](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/AccessControl.ts#L53)

***

### authorizeRead

> **authorizeRead**: [`Assertion`](../namespaces/AccessControl/README.md#assertion)

Assert read is authorized.

#### Source

[packages/matter.js/src/behavior/AccessControl.ts:33](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/AccessControl.ts#L33)

***

### authorizeWrite

> **authorizeWrite**: [`Assertion`](../namespaces/AccessControl/README.md#assertion)

Assert write is authorized.

#### Source

[packages/matter.js/src/behavior/AccessControl.ts:43](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/AccessControl.ts#L43)

***

### limits

> **limits**: [`Limits`](../namespaces/AccessControl/interfaces/Limits.md)

Operational access control metadata.

#### Source

[packages/matter.js/src/behavior/AccessControl.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/AccessControl.ts#L28)

***

### mayInvoke

> **mayInvoke**: [`Verification`](../namespaces/AccessControl/README.md#verification)

Determine if invoke is authorized.

#### Source

[packages/matter.js/src/behavior/AccessControl.ts:58](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/AccessControl.ts#L58)

***

### mayRead

> **mayRead**: [`Verification`](../namespaces/AccessControl/README.md#verification)

Determine if read is authorized.

#### Source

[packages/matter.js/src/behavior/AccessControl.ts:38](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/AccessControl.ts#L38)

***

### mayWrite

> **mayWrite**: [`Verification`](../namespaces/AccessControl/README.md#verification)

Determine if write is authorized.

#### Source

[packages/matter.js/src/behavior/AccessControl.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/AccessControl.ts#L48)
