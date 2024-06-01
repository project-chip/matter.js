[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [OnOff](../README.md) / StartUpOnOff

# Enumeration: StartUpOnOff

## See

MatterSpecification.v11.Cluster § 1.5.5.1

## Enumeration Members

### Off

> **Off**: `0`

Set the OnOff attribute to FALSE

#### Source

packages/matter.js/dist/esm/cluster/definitions/OnOffCluster.d.ts:20

***

### On

> **On**: `1`

Set the OnOff attribute to TRUE

#### Source

packages/matter.js/dist/esm/cluster/definitions/OnOffCluster.d.ts:24

***

### Toggle

> **Toggle**: `2`

If the previous value of the OnOff attribute is equal to FALSE, set the OnOff attribute to TRUE. If the
previous value of the OnOff attribute is equal to TRUE, set the OnOff attribute to FALSE (toggle).

#### Source

packages/matter.js/dist/esm/cluster/definitions/OnOffCluster.d.ts:29
