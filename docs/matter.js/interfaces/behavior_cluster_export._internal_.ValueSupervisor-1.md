[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/cluster/export](../modules/behavior_cluster_export.md) / [\<internal\>](../modules/behavior_cluster_export._internal_.md) / ValueSupervisor

# Interface: ValueSupervisor

[behavior/cluster/export](../modules/behavior_cluster_export.md).[\<internal\>](../modules/behavior_cluster_export._internal_.md).ValueSupervisor

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

## Implemented by

- [`RootSupervisor`](../classes/behavior_cluster_export._internal_.RootSupervisor.md)

## Table of contents

### Properties

- [access](behavior_cluster_export._internal_.ValueSupervisor-1.md#access)
- [manage](behavior_cluster_export._internal_.ValueSupervisor-1.md#manage)
- [owner](behavior_cluster_export._internal_.ValueSupervisor-1.md#owner)
- [patch](behavior_cluster_export._internal_.ValueSupervisor-1.md#patch)
- [schema](behavior_cluster_export._internal_.ValueSupervisor-1.md#schema)
- [validate](behavior_cluster_export._internal_.ValueSupervisor-1.md#validate)

## Properties

### access

• `Readonly` **access**: [`AccessControl`](behavior_export.AccessControl-1.md)

Consolidated access control information for the schema.

#### Defined in

[packages/matter.js/src/behavior/supervision/ValueSupervisor.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/supervision/ValueSupervisor.ts#L48)

___

### manage

• `Readonly` **manage**: [`Manage`](../modules/behavior_cluster_export._internal_.ValueSupervisor.md#manage)

Create a managed instance of a value.

#### Defined in

[packages/matter.js/src/behavior/supervision/ValueSupervisor.ts:58](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/supervision/ValueSupervisor.ts#L58)

___

### owner

• `Readonly` **owner**: [`RootSupervisor`](../classes/behavior_cluster_export._internal_.RootSupervisor.md)

The schema manager that owns this ValueSupervisor.

#### Defined in

[packages/matter.js/src/behavior/supervision/ValueSupervisor.ts:38](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/supervision/ValueSupervisor.ts#L38)

___

### patch

• `Readonly` **patch**: [`Patch`](../modules/behavior_cluster_export._internal_.ValueSupervisor.md#patch)

Apply changes.  Does not validate perform validation.

#### Defined in

[packages/matter.js/src/behavior/supervision/ValueSupervisor.ts:63](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/supervision/ValueSupervisor.ts#L63)

___

### schema

• `Readonly` **schema**: [`Schema`](../modules/behavior_cluster_export._internal_.md#schema)

The logical schema that controls the value's behavior.

#### Defined in

[packages/matter.js/src/behavior/supervision/ValueSupervisor.ts:43](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/supervision/ValueSupervisor.ts#L43)

___

### validate

• `Readonly` **validate**: `undefined` \| [`Validate`](../modules/behavior_cluster_export._internal_.ValueSupervisor.md#validate)

Perform validation.

#### Defined in

[packages/matter.js/src/behavior/supervision/ValueSupervisor.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/supervision/ValueSupervisor.ts#L53)
