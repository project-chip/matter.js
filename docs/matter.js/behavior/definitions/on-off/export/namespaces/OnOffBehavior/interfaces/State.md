[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/on-off/export](../../../README.md) / [OnOffBehavior](../README.md) / State

# Interface: State

## Extends

- [`StateType`](../../../-internal-/README.md#statetype)

## Properties

### onOff

> **onOff**: `boolean`

The OnOff attribute indicates whether the device type implemented on the endpoint is turned off or
turned on, in these cases the value of the OnOff attribute equals FALSE, or TRUE respectively.

#### See

MatterSpecification.v11.Cluster § 1.5.6.1

#### Inherited from

`StateType.onOff`

#### Source

[packages/matter.js/src/cluster/definitions/OnOffCluster.ts:263](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OnOffCluster.ts#L263)
