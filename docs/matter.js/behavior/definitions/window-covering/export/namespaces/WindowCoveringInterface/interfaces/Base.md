[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/window-covering/export](../../../README.md) / [WindowCoveringInterface](../README.md) / Base

# Interface: Base

## Methods

### downOrClose()

> **downOrClose**(): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

Upon receipt of this command, the Window Covering will adjust its position so the physical lift/slide and
tilt is at the maximum closed/down position. This will happen as fast as possible. The server attributes
supported shall be updated as follows:

if Position Aware feature is supported:

  • TargetPositionLiftPercent100ths attribute shall be set to 100.00%.

  • TargetPositionTiltPercent100ths attribute shall be set to 100.00%.

The server positioning attributes will follow the movements, once the movement has successfully finished,
the server attributes shall be updated as follows:

if Position Aware feature is supported:

  • CurrentPositionLiftPercent100ths attribute shall be 100.00%.

  • CurrentPositionLiftPercentage attribute shall be 100%.

  • CurrentPositionTiltPercent100ths attribute shall be 100.00%.

  • CurrentPositionTiltPercentage attribute shall be 100%. if Absolute Position feature is supported:

  • CurrentPositionLift attribute shall be equal to the InstalledClosedLimitLift attribute.

  • CurrentPositionTilt attribute shall be equal to the InstalledClosedLimitTilt attribute.

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Cluster § 5.3.6.2

#### Source

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts:140](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts#L140)

***

### stopMotion()

> **stopMotion**(): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

Upon receipt of this command, the Window Covering will stop any adjusting to the physical tilt and
lift/slide that is currently occurring. The server attributes supported shall be updated as follows:

  • TargetPositionLiftPercent100ths attribute will be set to CurrentPositionLiftPercent100ths attribute
    value.

  • TargetPositionTiltPercent100ths attribute will be set to CurrentPositionTiltPercent100ths attribute
    value.

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Cluster § 5.3.6.3

#### Source

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts:154](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts#L154)

***

### upOrOpen()

> **upOrOpen**(): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

Upon receipt of this command, the Window Covering will adjust its position so the physical lift/slide and
tilt is at the maximum open/up position. This will happen as fast as possible. The server attributes shall
be updated as follows:

if Position Aware feature is supported:

  • TargetPositionLiftPercent100ths attribute shall be set to 0.00%.

  • TargetPositionTiltPercent100ths attribute shall be set to 0.00%.

The server positioning attributes will follow the movements, once the movement has successfully finished,
the server attributes shall be updated as follows:

if Position Aware feature is supported:

  • CurrentPositionLiftPercent100ths attribute shall be 0.00%.

  • CurrentPositionLiftPercentage attribute shall be 0%.

  • CurrentPositionTiltPercent100ths attribute shall be 0.00%.

  • CurrentPositionTiltPercentage attribute shall be 0%. if Absolute Position feature is supported:

  • CurrentPositionLift attribute shall be equal to the InstalledOpenLimitLift attribute.

  • CurrentPositionTilt attribute shall be equal to the InstalledOpenLimitTilt attribute.

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Cluster § 5.3.6.1

#### Source

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts:108](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts#L108)
