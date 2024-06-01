[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/fan-control/export](../../../README.md) / [FanControlBehavior](../README.md) / State

# Interface: State

## Extends

- [`StateType`](../../../-internal-/README.md#statetype)

## Properties

### fanMode

> **fanMode**: [`FanMode`](../../../../../../../cluster/export/namespaces/FanControl/enumerations/FanMode.md)

This attribute shall indicate the current speed mode of the fan. This attribute may be written by the
client to indicate a new speed mode of the fan. This attribute shall be set to one of the values in the
table below.

#### See

MatterSpecification.v11.Cluster § 4.4.6.1

#### Inherited from

`StateType.fanMode`

#### Source

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:312](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L312)

***

### fanModeSequence

> **fanModeSequence**: [`FanModeSequence`](../../../../../../../cluster/export/namespaces/FanControl/enumerations/FanModeSequence.md)

This indicates the fan speed ranges that shall be supported.

#### See

MatterSpecification.v11.Cluster § 4.4.6.2

#### Inherited from

`StateType.fanModeSequence`

#### Source

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:319](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L319)

***

### percentCurrent

> **percentCurrent**: `number`

This attribute shall indicate the actual currently operating fan speed, or zero to indicate that the fan
is off. See Section 4.4.6.3.1 for more details.

#### See

MatterSpecification.v11.Cluster § 4.4.6.4

#### Inherited from

`StateType.percentCurrent`

#### Source

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:340](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L340)

***

### percentSetting

> **percentSetting**: `null` \| `number`

This attribute shall indicate the speed setting for the fan. This attribute may be written by the client
to indicate a new fan speed. If the client writes null to this attribute, the attribute value shall NOT
change. If this is set to 0, the server shall set the FanMode attribute value to Off.

#### See

MatterSpecification.v11.Cluster § 4.4.6.3

#### Inherited from

`StateType.percentSetting`

#### Source

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:332](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L332)
