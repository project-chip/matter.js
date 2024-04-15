[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / behavior/definitions/window-covering/export

# Module: behavior/definitions/window-covering/export

## Table of contents

### Modules

- [\<internal\>](behavior_definitions_window_covering_export._internal_.md)

### Namespaces

- [WindowCoveringBehavior](behavior_definitions_window_covering_export.WindowCoveringBehavior.md)
- [WindowCoveringInterface](behavior_definitions_window_covering_export.WindowCoveringInterface.md)

### Classes

- [WindowCoveringServer](../classes/behavior_definitions_window_covering_export.WindowCoveringServer.md)

### Interfaces

- [WindowCoveringBehavior](../interfaces/behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md)

### Type Aliases

- [GoToLiftPercentageRequest](behavior_definitions_window_covering_export.md#gotoliftpercentagerequest)
- [GoToLiftValueRequest](behavior_definitions_window_covering_export.md#gotoliftvaluerequest)
- [GoToTiltPercentageRequest](behavior_definitions_window_covering_export.md#gototiltpercentagerequest)
- [GoToTiltValueRequest](behavior_definitions_window_covering_export.md#gototiltvaluerequest)
- [WindowCoveringInterface](behavior_definitions_window_covering_export.md#windowcoveringinterface)

### Variables

- [WindowCoveringBehavior](behavior_definitions_window_covering_export.md#windowcoveringbehavior)

## Type Aliases

### GoToLiftPercentageRequest

Ƭ **GoToLiftPercentageRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvGoToLiftPercentageRequest`](cluster_export.WindowCovering.md#tlvgotoliftpercentagerequest)\>

Upon receipt of this command, the server will adjust the window covering to the lift/slide percentage specified in
the payload of this command.

If the command includes LiftPercent100thsValue, then TargetPositionLiftPercent100ths attribute shall be set to
LiftPercent100thsValue. Otherwise the TargetPositionLiftPercent100ths attribute shall be set to LiftPercentageValue
* 100.

If a client includes LiftPercent100thsValue in the command, the LiftPercentageValue shall be set to to
LiftPercent100thsValue / 100, so a legacy server which only supports LiftPercentageValue (not
LiftPercent100thsValue) has a value to set the target position.

If the server does not support the Position Aware feature, then a zero percentage shall be treated as a UpOrOpen
command and a non-zero percentage shall be treated as an DownOrClose command. If the device is only a tilt control
device, then the command SHOULD be ignored and a UNSUPPORTED_COMMAND status SHOULD be returned.

**`See`**

MatterSpecification.v11.Cluster § 5.3.6.5

#### Defined in

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts:31](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts#L31)

___

### GoToLiftValueRequest

Ƭ **GoToLiftValueRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvGoToLiftValueRequest`](cluster_export.WindowCovering.md#tlvgotoliftvaluerequest)\>

Upon receipt of this command, the Window Covering will adjust the window so the physical lift/slide is at the value
specified in the payload of this command as long as that value is not larger than InstalledOpenLimitLift attribute
and not smaller than InstalledClosedLimitLift attribute. Once the command is received the
TargetPositionLiftPercent100ths attribute will update its value accordingly. If the value is out of bounds a
response containing the status of CONSTRAINT_ERROR will be returned.

**`See`**

MatterSpecification.v11.Cluster § 5.3.6.4

#### Defined in

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts:63](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts#L63)

___

### GoToTiltPercentageRequest

Ƭ **GoToTiltPercentageRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvGoToTiltPercentageRequest`](cluster_export.WindowCovering.md#tlvgototiltpercentagerequest)\>

Upon receipt of this command, the server will adjust the window covering to the tilt percentage specified in the
payload of this command.

If the command includes TiltPercent100thsValue, then TargetPositionTiltPercent100ths attribute

shall be set to TiltPercent100thsValue. Otherwise the TargetPositionTiltPercent100ths attribute shall be set to
TiltPercentageValue * 100.

If a client includes TiltPercent100thsValue in the command, the TiltPercentageValue shall be set to to
TiltPercent100thsValue / 100, so a legacy server which only supports TiltPercentageValue (not
TiltPercent100thsValue) has a value to set the target position.

If the server does not support the Position Aware feature, then a zero percentage shall be treated as a UpOrOpen
command and a non-zero percentage shall be treated as an DownOrClose command. If the device is only a tilt control
device, then the command SHOULD be ignored and a UNSUPPORTED_COMMAND status SHOULD be returned.

**`See`**

MatterSpecification.v11.Cluster § 5.3.6.7

#### Defined in

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts:52](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts#L52)

___

### GoToTiltValueRequest

Ƭ **GoToTiltValueRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvGoToTiltValueRequest`](cluster_export.WindowCovering.md#tlvgototiltvaluerequest)\>

Upon receipt of this command, the Window Covering will adjust the window so the physical tilt is at the tilt value
specified in the payload of this command as long as that value is not larger than InstalledOpenLimitTilt attribute
and not smaller than InstalledClosedLimitTilt attribute. Once the command is received the
TargetPositionTiltPercent100ths attribute will update its value accordingly. If the tilt value is out of bounds a
response containing the status of CONSTRAINT_ERROR will be returned.

**`See`**

MatterSpecification.v11.Cluster § 5.3.6.6

#### Defined in

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts:74](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts#L74)

___

### WindowCoveringInterface

Ƭ **WindowCoveringInterface**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `components` | [\{ `flags`: {} ; `methods`: [`Base`](../interfaces/behavior_definitions_window_covering_export.WindowCoveringInterface.Base.md)  }, \{ `flags`: \{ `lift`: ``true``  } ; `methods`: [`Lift`](../interfaces/behavior_definitions_window_covering_export.WindowCoveringInterface.Lift.md)  }, \{ `flags`: \{ `tilt`: ``true``  } ; `methods`: [`Tilt`](../interfaces/behavior_definitions_window_covering_export.WindowCoveringInterface.Tilt.md)  }, \{ `flags`: \{ `lift`: ``true`` ; `positionAwareLift`: ``true``  } ; `methods`: [`LiftAndPositionAwareLift`](../interfaces/behavior_definitions_window_covering_export.WindowCoveringInterface.LiftAndPositionAwareLift.md)  }, \{ `flags`: \{ `positionAwareTilt`: ``true`` ; `tilt`: ``true``  } ; `methods`: [`TiltAndPositionAwareTilt`](../interfaces/behavior_definitions_window_covering_export.WindowCoveringInterface.TiltAndPositionAwareTilt.md)  }, \{ `flags`: \{ `absolutePosition`: ``true`` ; `lift`: ``true``  } ; `methods`: [`LiftAndAbsolutePosition`](../interfaces/behavior_definitions_window_covering_export.WindowCoveringInterface.LiftAndAbsolutePosition.md)  }, \{ `flags`: \{ `absolutePosition`: ``true`` ; `tilt`: ``true``  } ; `methods`: [`TiltAndAbsolutePosition`](../interfaces/behavior_definitions_window_covering_export.WindowCoveringInterface.TiltAndAbsolutePosition.md)  }] |

#### Defined in

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts:76](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts#L76)

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts:278](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts#L278)

## Variables

### WindowCoveringBehavior

• `Const` **WindowCoveringBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `configStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `liftEncoderControlled`: [`BitFlag`](schema_export.md#bitflag) ; `liftMovementReversed`: [`BitFlag`](schema_export.md#bitflag) ; `liftPositionAware`: [`BitFlag`](schema_export.md#bitflag) ; `onlineReserved`: [`BitFlag`](schema_export.md#bitflag) ; `operational`: [`BitFlag`](schema_export.md#bitflag) ; `tiltEncoderControlled`: [`BitFlag`](schema_export.md#bitflag) ; `tiltPositionAware`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `endProductType`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`EndProductType`](../enums/cluster_export.WindowCovering.EndProductType.md), `any`\> ; `mode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `calibrationMode`: [`BitFlag`](schema_export.md#bitflag) ; `ledFeedback`: [`BitFlag`](schema_export.md#bitflag) ; `maintenanceMode`: [`BitFlag`](schema_export.md#bitflag) ; `motorDirectionReversed`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `operationalStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `global`: [`BitFieldEnum`](schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `lift`: [`BitFieldEnum`](schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `tilt`: [`BitFieldEnum`](schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\>  }\>, `any`\> ; `safetyStatus`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `failedCommunication`: [`BitFlag`](schema_export.md#bitflag) ; `hardwareFailure`: [`BitFlag`](schema_export.md#bitflag) ; `manualOperation`: [`BitFlag`](schema_export.md#bitflag) ; `motorJammed`: [`BitFlag`](schema_export.md#bitflag) ; `obstacleDetected`: [`BitFlag`](schema_export.md#bitflag) ; `positionFailure`: [`BitFlag`](schema_export.md#bitflag) ; `power`: [`BitFlag`](schema_export.md#bitflag) ; `protection`: [`BitFlag`](schema_export.md#bitflag) ; `remoteLockout`: [`BitFlag`](schema_export.md#bitflag) ; `stopInput`: [`BitFlag`](schema_export.md#bitflag) ; `tamperDetection`: [`BitFlag`](schema_export.md#bitflag) ; `thermalProtection`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `type`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`WindowCoveringType`](../enums/cluster_export.WindowCovering.WindowCoveringType.md), `any`\>  } ; `commands`: \{ `downOrClose`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `stopMotion`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `upOrOpen`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `currentPositionLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `installedClosedLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `installedOpenLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `physicalClosedLimitLift`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>  }  } = LiftAndPositionAwareLiftAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `lift`: ``true`` = true; `positionAwareLift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `installedClosedLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `installedOpenLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `physicalClosedLimitTilt`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>  }  } = TiltAndPositionAwareTiltAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `positionAwareTilt`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `goToLiftPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `liftPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = LiftComponent; `flags`: \{ `lift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `goToTiltPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `tiltPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = TiltComponent; `flags`: \{ `tilt`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentPositionLiftPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `targetPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `goToLiftPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `liftPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = LiftAndPositionAwareLiftComponent; `flags`: \{ `lift`: ``true`` = true; `positionAwareLift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentPositionTiltPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `targetPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `goToTiltPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `tiltPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = TiltAndPositionAwareTiltComponent; `flags`: \{ `positionAwareTilt`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `goToLiftValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `liftValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = LiftAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `lift`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `goToTiltValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `tiltValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = TiltAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `lift`: ``false`` = false; `positionAwareLift`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `positionAwareTilt`: ``true`` = true; `tilt`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `lift`: ``false`` = false; `tilt`: ``false`` = false }  }] ; `features`: \{ `absolutePosition`: [`BitFlag`](schema_export.md#bitflag) ; `lift`: [`BitFlag`](schema_export.md#bitflag) ; `positionAwareLift`: [`BitFlag`](schema_export.md#bitflag) ; `positionAwareTilt`: [`BitFlag`](schema_export.md#bitflag) ; `tilt`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``258`` = 0x102; `name`: ``"WindowCovering"`` = "WindowCovering"; `revision`: ``5`` = 5 }\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`WindowCoveringInterface`](behavior_definitions_window_covering_export.md#windowcoveringinterface)\>, [`WindowCoveringInterface`](behavior_definitions_window_covering_export.md#windowcoveringinterface)\>

WindowCoveringBehavior is the base class for objects that support interaction with [WindowCovering.Cluster](cluster_export.WindowCovering.md#cluster).

WindowCovering.Cluster requires you to enable one or more optional features. You can do so using WindowCoveringBehavior.with.

#### Defined in

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringBehavior.ts:20](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringBehavior.ts#L20)

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringBehavior.ts:25](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringBehavior.ts#L25)

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringBehavior.ts:27](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringBehavior.ts#L27)
