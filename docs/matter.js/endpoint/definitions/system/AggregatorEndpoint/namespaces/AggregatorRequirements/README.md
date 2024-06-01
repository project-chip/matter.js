[**@project-chip/matter.js**](../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../modules.md) / [endpoint/definitions/system/AggregatorEndpoint](../../README.md) / AggregatorRequirements

# Namespace: AggregatorRequirements

## Variables

### ActionsServer

> `const` **ActionsServer**: *typeof* [`ActionsServer`](../../../../../../behavior/definitions/actions/export/classes/ActionsServer.md) = `BaseActionsServer`

The Actions cluster is optional per the Matter specification

We provide this alias to the default implementation [ActionsServer](README.md#actionsserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/system/AggregatorEndpoint.ts:38](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/system/AggregatorEndpoint.ts#L38)

***

### server

> `const` **server**: `object`

An implementation for each server cluster supported by the endpoint per the Matter specification.

#### Type declaration

##### mandatory

> **mandatory**: `object`

##### mandatory.Index

> **Index**: *typeof* [`IndexBehavior`](../../../../../../node/export/-internal-/namespaces/IndexBehavior/README.md) = `IndexBehavior`

##### mandatory.Parts

> **Parts**: *typeof* [`PartsBehavior`](../../../../../../node/export/-internal-/classes/PartsBehavior.md) = `PartsBehavior`

##### optional

> **optional**: `object`

##### optional.Actions

> **Actions**: *typeof* [`ActionsServer`](../../../../../../behavior/definitions/actions/export/classes/ActionsServer.md) = `ActionsServer`

#### Source

[packages/matter.js/src/endpoint/definitions/system/AggregatorEndpoint.ts:43](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/system/AggregatorEndpoint.ts#L43)
