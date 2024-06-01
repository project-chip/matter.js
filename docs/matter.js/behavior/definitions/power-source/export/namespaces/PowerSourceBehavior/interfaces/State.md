[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/power-source/export](../../../README.md) / [PowerSourceBehavior](../README.md) / State

# Interface: State

## Extends

- [`StateType`](../../../-internal-/README.md#statetype)

## Properties

### description

> **description**: `string`

This attribute shall provide a user-facing description of this source, used to distinguish it from other
power sources, e.g. "DC Power", "Primary Battery" or "Battery back-up". This attribute shall NOT be used
to convey information such as battery form factor, or chemistry.

#### See

MatterSpecification.v11.Core § 11.7.6.3

#### Inherited from

`StateType.description`

#### Source

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:1327](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L1327)

***

### order

> **order**: `number`

This attribute shall indicate the relative preference with which the Node will select this source to
provide power. A source with a lower order shall be selected by the Node to provide power before any
other source with a higher order, if the lower order source is available (see Status).

Note, Order is read-only and therefore NOT intended to allow clients control over power source selection.

#### See

MatterSpecification.v11.Core § 11.7.6.2

#### Inherited from

`StateType.order`

#### Source

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:1318](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L1318)

***

### status

> **status**: [`PowerSourceStatus`](../../../../../../../cluster/export/namespaces/PowerSource/enumerations/PowerSourceStatus.md)

This attribute shall indicate the participation of this power source in providing power to the Node as
specified in PowerSourceStatusEnum.

#### See

MatterSpecification.v11.Core § 11.7.6.1

#### Inherited from

`StateType.status`

#### Source

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:1307](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L1307)
