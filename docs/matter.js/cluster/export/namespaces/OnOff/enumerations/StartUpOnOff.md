[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [OnOff](../README.md) / StartUpOnOff

# Enumeration: StartUpOnOff

## See

MatterSpecification.v11.Cluster § 1.5.5.1

## Enumeration Members

### Off

> **Off**: `0`

Set the OnOff attribute to FALSE

#### Source

[packages/matter.js/src/cluster/definitions/OnOffCluster.ts:29](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OnOffCluster.ts#L29)

***

### On

> **On**: `1`

Set the OnOff attribute to TRUE

#### Source

[packages/matter.js/src/cluster/definitions/OnOffCluster.ts:34](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OnOffCluster.ts#L34)

***

### Toggle

> **Toggle**: `2`

If the previous value of the OnOff attribute is equal to FALSE, set the OnOff attribute to TRUE. If the
previous value of the OnOff attribute is equal to TRUE, set the OnOff attribute to FALSE (toggle).

#### Source

[packages/matter.js/src/cluster/definitions/OnOffCluster.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OnOffCluster.ts#L40)
