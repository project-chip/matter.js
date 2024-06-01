[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/window-covering/export](../../../README.md) / [WindowCoveringInterface](../README.md) / Tilt

# Interface: Tilt

## Methods

### goToTiltPercentage()

> **goToTiltPercentage**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

Upon receipt of this command, the server will adjust the window covering to the tilt percentage specified in
the payload of this command.

If the command includes TiltPercent100thsValue, then TargetPositionTiltPercent100ths attribute

shall be set to TiltPercent100thsValue. Otherwise the TargetPositionTiltPercent100ths attribute shall be set
to TiltPercentageValue * 100.

If a client includes TiltPercent100thsValue in the command, the TiltPercentageValue shall be set to to
TiltPercent100thsValue / 100, so a legacy server which only supports TiltPercentageValue (not
TiltPercent100thsValue) has a value to set the target position.

If the server does not support the Position Aware feature, then a zero percentage shall be treated as a
UpOrOpen command and a non-zero percentage shall be treated as an DownOrClose command. If the device is only
a tilt control device, then the command SHOULD be ignored and a UNSUPPORTED_COMMAND status SHOULD be
returned.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Cluster § 5.3.6.7

#### Source

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts:201](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts#L201)
