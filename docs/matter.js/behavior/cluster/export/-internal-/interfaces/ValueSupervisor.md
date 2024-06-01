[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [behavior/cluster/export](../../README.md) / [\<internal\>](../README.md) / ValueSupervisor

# Interface: ValueSupervisor

Value supervisor implements schema-based supervision of a specific value.

Supervision functions include:

  - Access controls

  - Datatype validation

  - Managed instance generation

Supervision is implemented via schema-driven runtime compilation.  We
perform as much logic as possible at startup to minimize overhead during
server operation.

This means we typically ingest schema, create a compact form of denormalized
metadata, and/or generate functions to perform required operations.

## Properties

### access

> `readonly` **access**: [`AccessControl`](../../../../export/interfaces/AccessControl.md)

Consolidated access control information for the schema.

#### Source

[packages/matter.js/src/behavior/supervision/ValueSupervisor.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/supervision/ValueSupervisor.ts#L48)

***

### manage

> `readonly` **manage**: [`Manage`](../namespaces/ValueSupervisor/README.md#manage)

Create a managed instance of a value.

#### Source

[packages/matter.js/src/behavior/supervision/ValueSupervisor.ts:58](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/supervision/ValueSupervisor.ts#L58)

***

### owner

> `readonly` **owner**: [`RootSupervisor`](../classes/RootSupervisor.md)

The schema manager that owns this ValueSupervisor.

#### Source

[packages/matter.js/src/behavior/supervision/ValueSupervisor.ts:38](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/supervision/ValueSupervisor.ts#L38)

***

### patch

> `readonly` **patch**: [`Patch`](../namespaces/ValueSupervisor/README.md#patch)

Apply changes.  Does not validate perform validation.

#### Source

[packages/matter.js/src/behavior/supervision/ValueSupervisor.ts:63](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/supervision/ValueSupervisor.ts#L63)

***

### schema

> `readonly` **schema**: [`Schema`](../README.md#schema)

The logical schema that controls the value's behavior.

#### Source

[packages/matter.js/src/behavior/supervision/ValueSupervisor.ts:43](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/supervision/ValueSupervisor.ts#L43)

***

### validate

> `readonly` **validate**: `undefined` \| [`Validate`](../namespaces/ValueSupervisor/README.md#validate)

Perform validation.

#### Source

[packages/matter.js/src/behavior/supervision/ValueSupervisor.ts:53](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/supervision/ValueSupervisor.ts#L53)
