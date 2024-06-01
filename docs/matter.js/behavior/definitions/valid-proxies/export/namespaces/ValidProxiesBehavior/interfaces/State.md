[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/valid-proxies/export](../../../README.md) / [ValidProxiesBehavior](../README.md) / State

# Interface: State

## Extends

- [`StateType`](../../../-internal-/README.md#statetype)

## Properties

### validProxyList

> **validProxyList**: [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]

List of valid proxies that can proxy this Node. Each entry in this list is fabric-scoped.

#### See

MatterSpecification.v11.Core § 9.15.15.5.1

#### Inherited from

`StateType.validProxyList`

#### Source

[packages/matter.js/src/cluster/definitions/ValidProxiesCluster.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ValidProxiesCluster.ts#L48)
