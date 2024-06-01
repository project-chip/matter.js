[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/identify/export](../../../README.md) / [IdentifyBehavior](../README.md) / State

# Interface: State

## Extends

- [`StateType`](../../../-internal-/README.md#statetype)

## Properties

### identifyTime

> **identifyTime**: `number`

This attribute specifies the remaining length of time, in seconds, that the endpoint will continue to
identify itself.

If this attribute is set to a value other than 0 then the device shall enter its identification state,
in order to indicate to an observer which of several nodes and/or endpoints it is. It is RECOMMENDED
that this state consists of flashing a light with a period of 0.5 seconds. The IdentifyTime attribute
shall be decremented every second while in this state.

If this attribute reaches or is set to the value 0 then the device shall terminate its identification
state.

#### See

MatterSpecification.v11.Cluster § 1.2.5.1

#### Inherited from

`StateType.identifyTime`

#### Source

[packages/matter.js/src/cluster/definitions/IdentifyCluster.ts:255](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/IdentifyCluster.ts#L255)

***

### identifyType

> **identifyType**: [`IdentifyType`](../../../../../../../cluster/export/namespaces/Identify/enumerations/IdentifyType.md)

This attribute specifies how the identification state is presented to the user. This field shall contain
one of the values listed below:

Table 2. Values of the IdentifyType attribute

#### See

MatterSpecification.v11.Cluster § 1.2.5.2

#### Inherited from

`StateType.identifyType`

#### Source

[packages/matter.js/src/cluster/definitions/IdentifyCluster.ts:265](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/IdentifyCluster.ts#L265)
