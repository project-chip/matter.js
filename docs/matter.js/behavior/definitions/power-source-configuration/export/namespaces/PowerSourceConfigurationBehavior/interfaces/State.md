[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/power-source-configuration/export](../../../README.md) / [PowerSourceConfigurationBehavior](../README.md) / State

# Interface: State

## Extends

- [`StateType`](../../../-internal-/README.md#statetype)

## Properties

### sources

> **sources**: [`EndpointNumber`](../../../../../../../datatype/export/README.md#endpointnumber)[]

This list shall contain the set of all power sources capable of participating in the power system of
this Node. Each entry in the list shall be the endpoint number of an endpoint having a Power Source
cluster, which corresponds to a physical power source. The endpoint number shall be unique within the
list.

The order of power sources on a Node is defined by the Order attribute of its associated Power Source
cluster provided on the endpoint. List entries shall be sorted in increasing order, that is, an entry
with a lower order shall have a lower index than any entry with a higher order. Multiple entries may
have the same order, there are no restrictions on their relative sorting.

#### See

MatterSpecification.v11.Core § 11.6.4.1

#### Inherited from

`StateType.sources`

#### Source

[packages/matter.js/src/cluster/definitions/PowerSourceConfigurationCluster.ts:39](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PowerSourceConfigurationCluster.ts#L39)
