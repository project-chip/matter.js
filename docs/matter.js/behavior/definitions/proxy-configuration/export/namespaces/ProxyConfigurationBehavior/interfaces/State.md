[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/proxy-configuration/export](../../../README.md) / [ProxyConfigurationBehavior](../README.md) / State

# Interface: State

## Extends

- [`StateType`](../../../-internal-/README.md#statetype)

## Properties

### configurationList

> **configurationList**: [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]

List of proxy configurations. There shall NOT be multiple entries in this list for the same fabric.

#### See

MatterSpecification.v11.Core § 9.15.14.5.1

#### Inherited from

`StateType.configurationList`

#### Source

[packages/matter.js/src/cluster/definitions/ProxyConfigurationCluster.ts:67](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ProxyConfigurationCluster.ts#L67)
