[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [FanControl](../README.md) / FanMode

# Enumeration: FanMode

The value of the FanControl fanMode attribute

## See

MatterSpecification.v11.Cluster § 4.4.6.1

## Enumeration Members

### Auto

> **Auto**: `5`

Setting the attribute value to Auto shall set the values of these attributes to null:

  • PercentSetting

  • SpeedSetting (if present)

These attributes shall indicate the current state of the fan while this attribute value is Auto:

  • PercentCurrent

  • SpeedCurrent (if present)

#### See

MatterSpecification.v11.Cluster § 4.4.6.1.3

#### Source

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:113](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L113)

***

### High

> **High**: `3`

#### Source

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:95](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L95)

***

### Low

> **Low**: `1`

#### Source

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:93](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L93)

***

### Medium

> **Medium**: `2`

#### Source

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:94](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L94)

***

### Off

> **Off**: `0`

Setting the attribute value to Off shall set the values of these attributes to 0 (zero):

  • PercentSetting

  • PercentCurrent

  • SpeedSetting (if present)

  • SpeedCurrent (if present)

4.4.6.1.2. Low, Medium, High or Unsupported

If the fan only supports 1 speed then:

  • only the High attribute value shall be supported

  • SpeedMax attribute, if present, shall be 1

If the fan only supports 2 speeds then only the Low and High attribute values shall be supported.

If a client attempts to write an unsupported value (such as On), the FanMode attribute shall be set to High.

If the value is High, Medium, or Low the server shall set these percent speed attributes to a single value
in the corresponding range as defined in the percent rules:

  • PercentSetting

  • PercentCurrent

If the value is High, Medium, or Low the server shall set these speed attributes to a single value in the
corresponding range as defined in Speed Rules>:

  • SpeedSetting (if present)

  • SpeedCurrent (if present)

#### See

MatterSpecification.v11.Cluster § 4.4.6.1.1

#### Source

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:91](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L91)

***

### On

> **On**: `4`

#### Source

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:96](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L96)

***

### Smart

> **Smart**: `6`

#### Source

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:115](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L115)
