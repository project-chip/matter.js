[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [FanControl](../modules/exports_cluster.FanControl.md) / FanMode

# Enumeration: FanMode

[exports/cluster](../modules/exports_cluster.md).[FanControl](../modules/exports_cluster.FanControl.md).FanMode

The value of the FanControl fanMode attribute

**`See`**

MatterApplicationClusterSpecificationV1_1 § 4.4.6.1

## Table of contents

### Enumeration Members

- [Auto](exports_cluster.FanControl.FanMode.md#auto)
- [High](exports_cluster.FanControl.FanMode.md#high)
- [Low](exports_cluster.FanControl.FanMode.md#low)
- [Medium](exports_cluster.FanControl.FanMode.md#medium)
- [Off](exports_cluster.FanControl.FanMode.md#off)
- [On](exports_cluster.FanControl.FanMode.md#on)
- [Smart](exports_cluster.FanControl.FanMode.md#smart)

## Enumeration Members

### Auto

• **Auto** = ``5``

Setting the attribute value to Auto shall set the values of these attributes to null:

  • PercentSetting

  • SpeedSetting (if present)

These attributes shall indicate the current state of the fan while this attribute value is Auto:

  • PercentCurrent

  • SpeedCurrent (if present)

**`See`**

MatterApplicationClusterSpecificationV1_1 § 4.4.6.1.3

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/FanControlCluster.d.ts:75

___

### High

• **High** = ``3``

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/FanControlCluster.d.ts:58

___

### Low

• **Low** = ``1``

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/FanControlCluster.d.ts:56

___

### Medium

• **Medium** = ``2``

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/FanControlCluster.d.ts:57

___

### Off

• **Off** = ``0``

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

**`See`**

MatterApplicationClusterSpecificationV1_1 § 4.4.6.1.1

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/FanControlCluster.d.ts:55

___

### On

• **On** = ``4``

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/FanControlCluster.d.ts:59

___

### Smart

• **Smart** = ``6``

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/FanControlCluster.d.ts:76
