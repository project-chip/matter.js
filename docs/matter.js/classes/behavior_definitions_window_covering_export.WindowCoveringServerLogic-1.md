[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/window-covering/export](../modules/behavior_definitions_window_covering_export.md) / WindowCoveringServerLogic

# Class: WindowCoveringServerLogic

[behavior/definitions/window-covering/export](../modules/behavior_definitions_window_covering_export.md).WindowCoveringServerLogic

This is the default server implementation of [WindowCoveringBehavior](../modules/behavior_definitions_window_covering_export.md#windowcoveringbehavior).

This implementation includes all features of [WindowCovering.Cluster](../modules/cluster_export.WindowCovering.md#cluster) and implements all mandatory commands.
You should use [WindowCoveringServer.with](behavior_definitions_window_covering_export.WindowCoveringServer.md#with) to specialize the class for the features your implementation
supports.

If you enable position awareness (positionAware* features), the default logic automatically syncs current positions
and operational state when the currentPosition*Percent100ths attributes change. You should update
currentPosition*Percent100ths with the actual position from your device.  This updates other attributes
automatically.

When targetPosition*Percent100ths attributes change, operational state updates bases on the current and target
values.

If you do not override [handleMovement](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md#handlemovement) the default implementation updates current position to the target
position immediately.

In addition to Matter attributes, [WindowCoveringServerLogic.State](behavior_definitions_window_covering_export.WindowCoveringServerLogic.State.md) includes the following configuration
properties:

  * supportsCalibration (default false): Set to true if the device supports calibration. You must implement
    [WindowCoveringServerLogic.executeCalibration](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md#executecalibration) to perform actual calibration.

  * supportsMaintenanceMode (default true): Set to false if the device has no maintenance mode

When developing for specific hardware you should extend [WindowCoveringServer](behavior_definitions_window_covering_export.WindowCoveringServer.md) and implement the following
methods to map movement to your device. The default implementation maps Matter commands to these methods. The benefit
of this structure is that basic data validations and option checks are already done and you can focus on the actual
hardware interaction:

  * [WindowCoveringServerLogic.handleMovement](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md#handlemovement) Logic to actually move the device. Via Parameters the movement
    type (Lift/Tilt), direction, target percentage and information if motor is configured reversed are provided. When
    the device moves the current Positions (if supported by the device) are updated with the movement. The
    operational state is automatically updated by the default implementation based on current and target values of
    the cluster state.

  * [WindowCoveringServerLogic.handleStopMovement](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md#handlestopmovement) Logic to stop any movement of the device. You can use the
    super.handleStopMovement() to set the target positions to the current positions or do this yourself.

  * [WindowCoveringServerLogic.executeCalibration](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md#executecalibration) If supported, override this method to implement the
    calibration process. The default implementation returns an error to indicate calibration is unsupported. If
    unsupported you should also add a Changing event handler to the mode attribute to ensure calibration mode is not
    set (needs to throw an ConstraintError).

IMPORTANT NOTE:

This default implementation could have pitfalls when the calibration process and/or movement is handled via long
running promises. There could be edge cases not correctly handled by the current implementation when it comes to long
running movements or calibration processes - especially when these processes are long running async JS operations.

A movement coming in while another movement is still running is assumed to be handled by the device. It is not
handled here. If this causes you trouble please provide feedback and we can discuss how to improve the default
implementation.

## Hierarchy

- [`WindowCoveringServerBase`](../modules/behavior_definitions_window_covering_export._internal_.md#windowcoveringserverbase)

  ↳ **`WindowCoveringServerLogic`**

## Table of contents

### Constructors

- [constructor](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md#constructor)

### Properties

- [#agent](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md##agent)
- [[reference]](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md#[reference])
- [agent](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md#agent)
- [cluster](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md#cluster)
- [context](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md#context)
- [endpoint](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md#endpoint)
- [events](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md#events)
- [features](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md#features)
- [internal](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md#internal)
- [session](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md#session)
- [state](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md#state)
- [Events](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md#events-1)
- [Interface](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md#interface)
- [cluster](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md#cluster-1)
- [defaults](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md#defaults)
- [dependencies](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md#dependencies)
- [early](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md#early)
- [id](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md#id)
- [name](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md#name)
- [schema](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md#schema)
- [supervisor](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md#supervisor)
- [supports](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md#supports)

### Methods

- [#assertMotionLockStatus](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md##assertmotionlockstatus)
- [#computeOperationalState](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md##computeoperationalstate)
- [#convertValue](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md##convertvalue)
- [#executeCalibrationAndMove](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md##executecalibrationandmove)
- [#handleLiftTargetPositionChanging](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md##handlelifttargetpositionchanging)
- [#handleModeChanging](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md##handlemodechanging)
- [#handleOperationalStatusChanging](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md##handleoperationalstatuschanging)
- [#handleTiltTargetPositionChanging](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md##handletilttargetpositionchanging)
- [#liftToPercent100ths](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md##lifttopercent100ths)
- [#percent100thsToLift](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md##percent100thstolift)
- [#percent100thsToTilt](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md##percent100thstotilt)
- [#percent100thsToValue](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md##percent100thstovalue)
- [#prepareMovement](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md##preparemovement)
- [#syncLiftCurrentPositions](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md##syncliftcurrentpositions)
- [#syncTiltCurrentPositions](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md##synctiltcurrentpositions)
- [#tiltToPercent100ths](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md##tilttopercent100ths)
- [#triggerLiftMotion](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md##triggerliftmotion)
- [#triggerTiltMotion](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md##triggertiltmotion)
- [#valueToPercent100ths](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md##valuetopercent100ths)
- [[asyncDispose]](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md#[asyncdispose])
- [asAdmin](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md#asadmin)
- [assertAttributeEnabled](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md#assertattributeenabled)
- [callback](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md#callback)
- [downOrClose](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md#downorclose)
- [executeCalibration](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md#executecalibration)
- [goToLiftPercentage](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md#gotoliftpercentage)
- [goToLiftValue](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md#gotoliftvalue)
- [goToTiltPercentage](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md#gototiltpercentage)
- [goToTiltValue](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md#gototiltvalue)
- [handleMovement](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md#handlemovement)
- [handleStopMovement](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md#handlestopmovement)
- [initialize](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md#initialize)
- [reactTo](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md#reactto)
- [requireAttributeEnabled](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md#requireattributeenabled)
- [stopMotion](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md#stopmotion)
- [toString](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md#tostring)
- [upOrOpen](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md#uporopen)
- [alter](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md#alter)
- [enable](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md#enable)
- [for](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md#for)
- [set](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md#set)
- [with](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md#with)

## Constructors

### constructor

• **new WindowCoveringServerLogic**(`agent`, `backing`): [`WindowCoveringServerLogic`](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `agent` | [`Agent`](endpoint_export.Agent-1.md) |
| `backing` | [`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md) |

#### Returns

[`WindowCoveringServerLogic`](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md)

#### Inherited from

WindowCoveringServerBase.constructor

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:201](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L201)

## Properties

### #agent

• `Private` **#agent**: [`Agent`](endpoint_export.Agent-1.md)

#### Inherited from

WindowCoveringServerBase.#agent

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L51)

___

### [reference]

• **[reference]**: [`Datasource`](../interfaces/behavior_cluster_export._internal_.Datasource-1.md)\<[`StateType`](../interfaces/behavior_cluster_export._internal_.StateType.md)\>

#### Inherited from

WindowCoveringServerBase.[reference]

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L274)

___

### agent

• **agent**: [`Agent`](endpoint_export.Agent-1.md)

#### Inherited from

WindowCoveringServerBase.agent

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L80)

___

### cluster

• **cluster**: `never`

The implemented cluster.

#### Inherited from

WindowCoveringServerBase.cluster

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:306](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L306)

___

### context

• **context**: [`ActionContext`](../interfaces/behavior_cluster_export._internal_.ActionContext.md)

#### Inherited from

WindowCoveringServerBase.context

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L94)

___

### endpoint

• **endpoint**: [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Inherited from

WindowCoveringServerBase.endpoint

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L87)

___

### events

• `Readonly` **events**: [`EventEmitter`](util_export.EventEmitter-1.md) & `Omit`\<[`ClusterEvents`](../modules/behavior_cluster_export.md#clusterevents)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `configStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `liftEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftMovementReversed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `onlineReserved`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `operational`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `endProductType`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`EndProductType`](../enums/cluster_export.WindowCovering.EndProductType.md), `any`\> ; `mode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `calibrationMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `ledFeedback`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `maintenanceMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorDirectionReversed`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `operationalStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `global`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `lift`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `tilt`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\>  }\>, `any`\> ; `safetyStatus`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `failedCommunication`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hardwareFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `manualOperation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorJammed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `obstacleDetected`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `power`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `protection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remoteLockout`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `stopInput`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tamperDetection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `thermalProtection`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `type`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`WindowCoveringType`](../enums/cluster_export.WindowCovering.WindowCoveringType.md), `any`\>  } ; `commands`: \{ `downOrClose`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `stopMotion`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `upOrOpen`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `currentPositionLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<... \| ..., `any`\> ; `installedClosedLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `installedOpenLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `physicalClosedLimitLift`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>  }  } = LiftAndPositionAwareLiftAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `lift`: ``true`` = true; `positionAwareLift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<... \| ..., `any`\> ; `installedClosedLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `installedOpenLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `physicalClosedLimitTilt`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>  }  } = TiltAndPositionAwareTiltAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `positionAwareTilt`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `goToLiftPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<...\>, `void`, `any`\>  }  } = LiftComponent; `flags`: \{ `lift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `goToTiltPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<...\>, `void`, `any`\>  }  } = TiltComponent; `flags`: \{ `tilt`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<... \| ..., `any`\> ; `currentPositionLiftPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<... \| ..., `any`\> ; `targetPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<... \| ..., `any`\>  } ; `commands`: \{ `goToLiftPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<...\>, `void`, `any`\>  }  } = LiftAndPositionAwareLiftComponent; `flags`: \{ `lift`: ``true`` = true; `positionAwareLift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<... \| ..., `any`\> ; `currentPositionTiltPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<... \| ..., `any`\> ; `targetPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<... \| ..., `any`\>  } ; `commands`: \{ `goToTiltPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<...\>, `void`, `any`\>  }  } = TiltAndPositionAwareTiltComponent; `flags`: \{ `positionAwareTilt`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `goToLiftValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<...\>, `void`, `any`\>  }  } = LiftAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `lift`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `goToTiltValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<...\>, `void`, `any`\>  }  } = TiltAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `lift`: ``false`` = false; `positionAwareLift`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `positionAwareTilt`: ``true`` = true; `tilt`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `lift`: ``false`` = false; `tilt`: ``false`` = false }  }] ; `features`: \{ `absolutePosition`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `lift`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionAwareLift`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionAwareTilt`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tilt`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``258`` = 0x102; `name`: ``"WindowCovering"`` = "WindowCovering"; `revision`: ``5`` = 5 }\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`WindowCoveringInterface`](../modules/behavior_definitions_window_covering_export.md#windowcoveringinterface)\>\>, ``"type$Changing"`` \| ``"configStatus$Changing"`` \| ``"operationalStatus$Changing"`` \| ``"endProductType$Changing"`` \| ``"mode$Changing"`` \| ``"safetyStatus$Changing"`` \| ``"type$Changed"`` \| ``"configStatus$Changed"`` \| ``"operationalStatus$Changed"`` \| ``"endProductType$Changed"`` \| ``"mode$Changed"`` \| ``"safetyStatus$Changed"``\> & \{ `configStatus$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `liftEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftMovementReversed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `onlineReserved`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `operational`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>\> ; `currentPositionLiftPercent100ths$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>\> ; `currentPositionTiltPercent100ths$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>\> ; `endProductType$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`EndProductType`](../enums/cluster_export.WindowCovering.EndProductType.md), `any`\>\> ; `installedClosedLimitLift$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>\> ; `installedClosedLimitTilt$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>\> ; `installedOpenLimitLift$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>\> ; `installedOpenLimitTilt$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>\> ; `mode$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `calibrationMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `ledFeedback`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `maintenanceMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorDirectionReversed`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>\> ; `operationalStatus$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `global`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `lift`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `tilt`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\>  }\>, `any`\>\> ; `targetPositionLiftPercent100ths$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>\> ; `targetPositionTiltPercent100ths$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>\> ; `type$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`WindowCoveringType`](../enums/cluster_export.WindowCovering.WindowCoveringType.md), `any`\>\>  } & \{ `currentPositionLift$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\>\> ; `currentPositionLiftPercentage$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\>\> ; `currentPositionTilt$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\>\> ; `currentPositionTiltPercentage$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\>\> ; `numberOfActuationsLift$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>\> ; `numberOfActuationsTilt$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>\> ; `physicalClosedLimitLift$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `physicalClosedLimitTilt$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `safetyStatus$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `failedCommunication`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hardwareFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `manualOperation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorJammed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `obstacleDetected`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `power`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `protection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remoteLockout`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `stopInput`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tamperDetection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `thermalProtection`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>\>  } & \{ `configStatus$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `liftEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftMovementReversed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `onlineReserved`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `operational`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>\> ; `currentPositionLiftPercent100ths$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>\> ; `currentPositionTiltPercent100ths$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>\> ; `endProductType$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`EndProductType`](../enums/cluster_export.WindowCovering.EndProductType.md), `any`\>\> ; `installedClosedLimitLift$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>\> ; `installedClosedLimitTilt$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>\> ; `installedOpenLimitLift$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>\> ; `installedOpenLimitTilt$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>\> ; `mode$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `calibrationMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `ledFeedback`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `maintenanceMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorDirectionReversed`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>\> ; `operationalStatus$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `global`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `lift`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `tilt`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\>  }\>, `any`\>\> ; `targetPositionLiftPercent100ths$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>\> ; `targetPositionTiltPercent100ths$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>\> ; `type$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`WindowCoveringType`](../enums/cluster_export.WindowCovering.WindowCoveringType.md), `any`\>\>  } & \{ `currentPositionLift$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\>\> ; `currentPositionLiftPercentage$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\>\> ; `currentPositionTilt$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\>\> ; `currentPositionTiltPercentage$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\>\> ; `numberOfActuationsLift$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>\> ; `numberOfActuationsTilt$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>\> ; `physicalClosedLimitLift$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `physicalClosedLimitTilt$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `safetyStatus$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `failedCommunication`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hardwareFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `manualOperation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorJammed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `obstacleDetected`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `power`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `protection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remoteLockout`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `stopInput`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tamperDetection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `thermalProtection`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>\>  } & {} & {}

Access the behavior's events.

#### Inherited from

WindowCoveringServerBase.events

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:145](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L145)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:316](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L316)

___

### features

• **features**: [`FeaturesAsFlags`](../modules/cluster_export.ClusterComposer.md#featuresasflags)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `configStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `liftEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftMovementReversed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `onlineReserved`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `operational`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `endProductType`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`EndProductType`](../enums/cluster_export.WindowCovering.EndProductType.md), `any`\> ; `mode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `calibrationMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `ledFeedback`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `maintenanceMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorDirectionReversed`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `operationalStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `global`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `lift`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `tilt`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\>  }\>, `any`\> ; `safetyStatus`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `failedCommunication`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hardwareFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `manualOperation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorJammed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `obstacleDetected`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `power`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `protection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remoteLockout`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `stopInput`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tamperDetection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `thermalProtection`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `type`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`WindowCoveringType`](../enums/cluster_export.WindowCovering.WindowCoveringType.md), `any`\>  } ; `commands`: \{ `downOrClose`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `stopMotion`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `upOrOpen`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `currentPositionLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `installedClosedLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `installedOpenLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `physicalClosedLimitLift`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>  }  } = LiftAndPositionAwareLiftAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `lift`: ``true`` = true; `positionAwareLift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `installedClosedLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `installedOpenLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `physicalClosedLimitTilt`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>  }  } = TiltAndPositionAwareTiltAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `positionAwareTilt`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `goToLiftPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = LiftComponent; `flags`: \{ `lift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `goToTiltPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = TiltComponent; `flags`: \{ `tilt`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentPositionLiftPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `targetPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `goToLiftPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = LiftAndPositionAwareLiftComponent; `flags`: \{ `lift`: ``true`` = true; `positionAwareLift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentPositionTiltPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `targetPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `goToTiltPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = TiltAndPositionAwareTiltComponent; `flags`: \{ `positionAwareTilt`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `goToLiftValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = LiftAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `lift`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `goToTiltValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = TiltAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `lift`: ``false`` = false; `positionAwareLift`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `positionAwareTilt`: ``true`` = true; `tilt`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `lift`: ``false`` = false; `tilt`: ``false`` = false }  }] ; `features`: \{ `absolutePosition`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `lift`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionAwareLift`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionAwareTilt`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tilt`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``258`` = 0x102; `name`: ``"WindowCovering"`` = "WindowCovering"; `revision`: ``5`` = 5 }\>, readonly [[`Lift`](../enums/cluster_export.WindowCovering.Feature.md#lift), [`Tilt`](../enums/cluster_export.WindowCovering.Feature.md#tilt), [`PositionAwareLift`](../enums/cluster_export.WindowCovering.Feature.md#positionawarelift), [`PositionAwareTilt`](../enums/cluster_export.WindowCovering.Feature.md#positionawaretilt), [`AbsolutePosition`](../enums/cluster_export.WindowCovering.Feature.md#absoluteposition)]\>

Supported features as a flag object.

#### Inherited from

WindowCoveringServerBase.features

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:321](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L321)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:321](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L321)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:321](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L321)

___

### internal

• `Protected` **internal**: [`Internal`](behavior_definitions_window_covering_export.WindowCoveringServerLogic.Internal.md)

#### Defined in

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:122](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L122)

___

### session

• **session**: [`SecureSession`](session_export.SecureSession.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>

#### Inherited from

WindowCoveringServerBase.session

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L101)

___

### state

• **state**: [`State`](behavior_definitions_window_covering_export.WindowCoveringServerLogic.State.md)

#### Overrides

WindowCoveringServerBase.state

#### Defined in

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:123](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L123)

___

### Events

▪ `Static` `Readonly` **Events**: [`Type`](../modules/behavior_cluster_export.ClusterEvents.md#type)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `configStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `liftEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftMovementReversed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `onlineReserved`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `operational`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `endProductType`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`EndProductType`](../enums/cluster_export.WindowCovering.EndProductType.md), `any`\> ; `mode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `calibrationMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `ledFeedback`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `maintenanceMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorDirectionReversed`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `operationalStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `global`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `lift`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `tilt`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\>  }\>, `any`\> ; `safetyStatus`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `failedCommunication`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hardwareFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `manualOperation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorJammed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `obstacleDetected`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `power`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `protection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remoteLockout`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `stopInput`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tamperDetection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `thermalProtection`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `type`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`WindowCoveringType`](../enums/cluster_export.WindowCovering.WindowCoveringType.md), `any`\>  } ; `commands`: \{ `downOrClose`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `stopMotion`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `upOrOpen`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `currentPositionLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `installedClosedLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `installedOpenLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `physicalClosedLimitLift`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>  }  } = LiftAndPositionAwareLiftAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `lift`: ``true`` = true; `positionAwareLift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `installedClosedLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `installedOpenLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `physicalClosedLimitTilt`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>  }  } = TiltAndPositionAwareTiltAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `positionAwareTilt`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `goToLiftPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftPercent100thsValue`: ...  }\>, `void`, `any`\>  }  } = LiftComponent; `flags`: \{ `lift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `goToTiltPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltPercent100thsValue`: ...  }\>, `void`, `any`\>  }  } = TiltComponent; `flags`: \{ `tilt`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentPositionLiftPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `targetPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `goToLiftPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftPercent100thsValue`: ...  }\>, `void`, `any`\>  }  } = LiftAndPositionAwareLiftComponent; `flags`: \{ `lift`: ``true`` = true; `positionAwareLift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentPositionTiltPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `targetPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `goToTiltPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltPercent100thsValue`: ...  }\>, `void`, `any`\>  }  } = TiltAndPositionAwareTiltComponent; `flags`: \{ `positionAwareTilt`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `goToLiftValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftValue`: ...  }\>, `void`, `any`\>  }  } = LiftAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `lift`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `goToTiltValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltValue`: ...  }\>, `void`, `any`\>  }  } = TiltAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `lift`: ``false`` = false; `positionAwareLift`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `positionAwareTilt`: ``true`` = true; `tilt`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `lift`: ``false`` = false; `tilt`: ``false`` = false }  }] ; `features`: \{ `absolutePosition`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `lift`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionAwareLift`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionAwareTilt`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tilt`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``258`` = 0x102; `name`: ``"WindowCovering"`` = "WindowCovering"; `revision`: ``5`` = 5 }\>, readonly [[`Lift`](../enums/cluster_export.WindowCovering.Feature.md#lift), [`Tilt`](../enums/cluster_export.WindowCovering.Feature.md#tilt), [`PositionAwareLift`](../enums/cluster_export.WindowCovering.Feature.md#positionawarelift), [`PositionAwareTilt`](../enums/cluster_export.WindowCovering.Feature.md#positionawaretilt), [`AbsolutePosition`](../enums/cluster_export.WindowCovering.Feature.md#absoluteposition)]\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `configStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `liftEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftMovementReversed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `onlineReserved`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `operational`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `endProductType`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`EndProductType`](../enums/cluster_export.WindowCovering.EndProductType.md), `any`\> ; `mode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `calibrationMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `ledFeedback`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `maintenanceMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorDirectionReversed`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `operationalStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `global`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `lift`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `tilt`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\>  }\>, `any`\> ; `safetyStatus`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `failedCommunication`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hardwareFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `manualOperation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorJammed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `obstacleDetected`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `power`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `protection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remoteLockout`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `stopInput`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tamperDetection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `thermalProtection`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `type`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`WindowCoveringType`](../enums/cluster_export.WindowCovering.WindowCoveringType.md), `any`\>  } ; `commands`: \{ `downOrClose`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `stopMotion`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `upOrOpen`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `currentPositionLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `installedClosedLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `installedOpenLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `physicalClosedLimitLift`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>  }  } = LiftAndPositionAwareLiftAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `lift`: ``true`` = true; `positionAwareLift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `installedClosedLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `installedOpenLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `physicalClosedLimitTilt`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>  }  } = TiltAndPositionAwareTiltAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `positionAwareTilt`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `goToLiftPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftPercent100thsValue`: ...  }\>, `void`, `any`\>  }  } = LiftComponent; `flags`: \{ `lift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `goToTiltPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltPercent100thsValue`: ...  }\>, `void`, `any`\>  }  } = TiltComponent; `flags`: \{ `tilt`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentPositionLiftPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `targetPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `goToLiftPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftPercent100thsValue`: ...  }\>, `void`, `any`\>  }  } = LiftAndPositionAwareLiftComponent; `flags`: \{ `lift`: ``true`` = true; `positionAwareLift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentPositionTiltPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `targetPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `goToTiltPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltPercent100thsValue`: ...  }\>, `void`, `any`\>  }  } = TiltAndPositionAwareTiltComponent; `flags`: \{ `positionAwareTilt`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `goToLiftValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftValue`: ...  }\>, `void`, `any`\>  }  } = LiftAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `lift`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `goToTiltValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltValue`: ...  }\>, `void`, `any`\>  }  } = TiltAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `lift`: ``false`` = false; `positionAwareLift`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `positionAwareTilt`: ``true`` = true; `tilt`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `lift`: ``false`` = false; `tilt`: ``false`` = false }  }] ; `features`: \{ `absolutePosition`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `lift`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionAwareLift`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionAwareTilt`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tilt`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``258`` = 0x102; `name`: ``"WindowCovering"`` = "WindowCovering"; `revision`: ``5`` = 5 }\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`WindowCoveringInterface`](../modules/behavior_definitions_window_covering_export.md#windowcoveringinterface)\>, [`WindowCoveringInterface`](../modules/behavior_definitions_window_covering_export.md#windowcoveringinterface)\>\>

#### Inherited from

WindowCoveringServerBase.Events

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:215](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L215)

___

### Interface

▪ `Static` `Readonly` **Interface**: [`WindowCoveringInterface`](../modules/behavior_definitions_window_covering_export.md#windowcoveringinterface)

#### Inherited from

WindowCoveringServerBase.Interface

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:218](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L218)

___

### cluster

▪ `Static` `Readonly` **cluster**: [`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `configStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `liftEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftMovementReversed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `onlineReserved`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `operational`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `endProductType`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`EndProductType`](../enums/cluster_export.WindowCovering.EndProductType.md), `any`\> ; `mode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `calibrationMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `ledFeedback`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `maintenanceMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorDirectionReversed`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `operationalStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `global`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `lift`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `tilt`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\>  }\>, `any`\> ; `safetyStatus`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `failedCommunication`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hardwareFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `manualOperation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorJammed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `obstacleDetected`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `power`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `protection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remoteLockout`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `stopInput`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tamperDetection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `thermalProtection`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `type`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`WindowCoveringType`](../enums/cluster_export.WindowCovering.WindowCoveringType.md), `any`\>  } ; `commands`: \{ `downOrClose`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `stopMotion`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `upOrOpen`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `currentPositionLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `installedClosedLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `installedOpenLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `physicalClosedLimitLift`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>  }  } = LiftAndPositionAwareLiftAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `lift`: ``true`` = true; `positionAwareLift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `installedClosedLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `installedOpenLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `physicalClosedLimitTilt`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>  }  } = TiltAndPositionAwareTiltAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `positionAwareTilt`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `goToLiftPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = LiftComponent; `flags`: \{ `lift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `goToTiltPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = TiltComponent; `flags`: \{ `tilt`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentPositionLiftPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `targetPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `goToLiftPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = LiftAndPositionAwareLiftComponent; `flags`: \{ `lift`: ``true`` = true; `positionAwareLift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentPositionTiltPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `targetPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `goToTiltPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = TiltAndPositionAwareTiltComponent; `flags`: \{ `positionAwareTilt`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `goToLiftValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = LiftAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `lift`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `goToTiltValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = TiltAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `lift`: ``false`` = false; `positionAwareLift`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `positionAwareTilt`: ``true`` = true; `tilt`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `lift`: ``false`` = false; `tilt`: ``false`` = false }  }] ; `features`: \{ `absolutePosition`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `lift`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionAwareLift`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionAwareTilt`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tilt`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``258`` = 0x102; `name`: ``"WindowCovering"`` = "WindowCovering"; `revision`: ``5`` = 5 }\>, readonly [[`Lift`](../enums/cluster_export.WindowCovering.Feature.md#lift), [`Tilt`](../enums/cluster_export.WindowCovering.Feature.md#tilt), [`PositionAwareLift`](../enums/cluster_export.WindowCovering.Feature.md#positionawarelift), [`PositionAwareTilt`](../enums/cluster_export.WindowCovering.Feature.md#positionawaretilt), [`AbsolutePosition`](../enums/cluster_export.WindowCovering.Feature.md#absoluteposition)]\>

Base cluster state include all attribute values but may be extended by subclasses.

#### Inherited from

WindowCoveringServerBase.cluster

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:213](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L213)

___

### defaults

▪ `Static` `Readonly` **defaults**: [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `configStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `liftEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftMovementReversed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `onlineReserved`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `operational`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `endProductType`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`EndProductType`](../enums/cluster_export.WindowCovering.EndProductType.md), `any`\> ; `mode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `calibrationMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `ledFeedback`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `maintenanceMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorDirectionReversed`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `operationalStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `global`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `lift`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `tilt`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\>  }\>, `any`\> ; `safetyStatus`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `failedCommunication`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hardwareFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `manualOperation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorJammed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `obstacleDetected`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `power`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `protection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remoteLockout`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `stopInput`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tamperDetection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `thermalProtection`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `type`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`WindowCoveringType`](../enums/cluster_export.WindowCovering.WindowCoveringType.md), `any`\>  } ; `commands`: \{ `downOrClose`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `stopMotion`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `upOrOpen`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `currentPositionLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `installedClosedLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `installedOpenLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `physicalClosedLimitLift`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>  }  } = LiftAndPositionAwareLiftAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `lift`: ``true`` = true; `positionAwareLift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `installedClosedLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `installedOpenLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `physicalClosedLimitTilt`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>  }  } = TiltAndPositionAwareTiltAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `positionAwareTilt`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `goToLiftPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftPercent100thsValue`: ...  }\>, `void`, `any`\>  }  } = LiftComponent; `flags`: \{ `lift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `goToTiltPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltPercent100thsValue`: ...  }\>, `void`, `any`\>  }  } = TiltComponent; `flags`: \{ `tilt`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentPositionLiftPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `targetPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `goToLiftPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftPercent100thsValue`: ...  }\>, `void`, `any`\>  }  } = LiftAndPositionAwareLiftComponent; `flags`: \{ `lift`: ``true`` = true; `positionAwareLift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentPositionTiltPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `targetPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `goToTiltPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltPercent100thsValue`: ...  }\>, `void`, `any`\>  }  } = TiltAndPositionAwareTiltComponent; `flags`: \{ `positionAwareTilt`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `goToLiftValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftValue`: ...  }\>, `void`, `any`\>  }  } = LiftAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `lift`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `goToTiltValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltValue`: ...  }\>, `void`, `any`\>  }  } = TiltAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `lift`: ``false`` = false; `positionAwareLift`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `positionAwareTilt`: ``true`` = true; `tilt`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `lift`: ``false`` = false; `tilt`: ``false`` = false }  }] ; `features`: \{ `absolutePosition`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `lift`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionAwareLift`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionAwareTilt`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tilt`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``258`` = 0x102; `name`: ``"WindowCovering"`` = "WindowCovering"; `revision`: ``5`` = 5 }\>, readonly [[`Lift`](../enums/cluster_export.WindowCovering.Feature.md#lift), [`Tilt`](../enums/cluster_export.WindowCovering.Feature.md#tilt), [`PositionAwareLift`](../enums/cluster_export.WindowCovering.Feature.md#positionawarelift), [`PositionAwareTilt`](../enums/cluster_export.WindowCovering.Feature.md#positionawaretilt), [`AbsolutePosition`](../enums/cluster_export.WindowCovering.Feature.md#absoluteposition)]\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `configStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `liftEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftMovementReversed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `onlineReserved`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `operational`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `endProductType`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`EndProductType`](../enums/cluster_export.WindowCovering.EndProductType.md), `any`\> ; `mode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `calibrationMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `ledFeedback`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `maintenanceMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorDirectionReversed`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `operationalStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `global`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `lift`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `tilt`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\>  }\>, `any`\> ; `safetyStatus`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `failedCommunication`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hardwareFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `manualOperation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorJammed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `obstacleDetected`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `power`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `protection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remoteLockout`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `stopInput`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tamperDetection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `thermalProtection`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `type`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`WindowCoveringType`](../enums/cluster_export.WindowCovering.WindowCoveringType.md), `any`\>  } ; `commands`: \{ `downOrClose`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `stopMotion`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `upOrOpen`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `currentPositionLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `installedClosedLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `installedOpenLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `physicalClosedLimitLift`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>  }  } = LiftAndPositionAwareLiftAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `lift`: ``true`` = true; `positionAwareLift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `installedClosedLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `installedOpenLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `physicalClosedLimitTilt`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>  }  } = TiltAndPositionAwareTiltAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `positionAwareTilt`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `goToLiftPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftPercent100thsValue`: ...  }\>, `void`, `any`\>  }  } = LiftComponent; `flags`: \{ `lift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `goToTiltPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltPercent100thsValue`: ...  }\>, `void`, `any`\>  }  } = TiltComponent; `flags`: \{ `tilt`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentPositionLiftPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `targetPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `goToLiftPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftPercent100thsValue`: ...  }\>, `void`, `any`\>  }  } = LiftAndPositionAwareLiftComponent; `flags`: \{ `lift`: ``true`` = true; `positionAwareLift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentPositionTiltPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `targetPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `goToTiltPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltPercent100thsValue`: ...  }\>, `void`, `any`\>  }  } = TiltAndPositionAwareTiltComponent; `flags`: \{ `positionAwareTilt`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `goToLiftValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftValue`: ...  }\>, `void`, `any`\>  }  } = LiftAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `lift`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `goToTiltValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltValue`: ...  }\>, `void`, `any`\>  }  } = TiltAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `lift`: ``false`` = false; `positionAwareLift`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `positionAwareTilt`: ``true`` = true; `tilt`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `lift`: ``false`` = false; `tilt`: ``false`` = false }  }] ; `features`: \{ `absolutePosition`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `lift`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionAwareLift`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionAwareTilt`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tilt`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``258`` = 0x102; `name`: ``"WindowCovering"`` = "WindowCovering"; `revision`: ``5`` = 5 }\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`WindowCoveringInterface`](../modules/behavior_definitions_window_covering_export.md#windowcoveringinterface)\>, [`WindowCoveringInterface`](../modules/behavior_definitions_window_covering_export.md#windowcoveringinterface)\>\>

#### Inherited from

WindowCoveringServerBase.defaults

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:222](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L222)

___

### dependencies

▪ `Static` `Optional` `Readonly` **dependencies**: `Iterable`\<[`Type`](../interfaces/behavior_export.Behavior.Type.md)\>

#### Inherited from

WindowCoveringServerBase.dependencies

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:224](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L224)

___

### early

▪ `Static` `Readonly` **early**: `boolean`

#### Inherited from

WindowCoveringServerBase.early

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:221](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L221)

___

### id

▪ `Static` `Readonly` **id**: ``"windowCovering"``

The behavior ID for ClusterBehaviors is the name of the cluster.

#### Inherited from

WindowCoveringServerBase.id

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:208](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L208)

___

### name

▪ `Static` `Readonly` **name**: `string`

#### Inherited from

WindowCoveringServerBase.name

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:203](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L203)

___

### schema

▪ `Static` `Optional` `Readonly` **schema**: [`Schema`](../modules/behavior_cluster_export._internal_.md#schema)

#### Inherited from

WindowCoveringServerBase.schema

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:220](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L220)

___

### supervisor

▪ `Static` `Readonly` **supervisor**: [`RootSupervisor`](behavior_cluster_export._internal_.RootSupervisor.md)

#### Inherited from

WindowCoveringServerBase.supervisor

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:223](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L223)

___

### supports

▪ `Static` **supports**: (`other`: [`Type`](../interfaces/behavior_export.Behavior.Type.md)) => `boolean`

#### Type declaration

▸ (`other`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Type`](../interfaces/behavior_export.Behavior.Type.md) |

##### Returns

`boolean`

#### Inherited from

WindowCoveringServerBase.supports

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:225](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L225)

## Methods

### #assertMotionLockStatus

▸ **#assertMotionLockStatus**(): `void`

Asserts if the device can be controlled or not because of an active Maintenance mode or a calibration is
required but not supported.

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:305](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L305)

___

### #computeOperationalState

▸ **#computeOperationalState**(`target`, `current`): [`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)

Compute the operational state based on the current and target position.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | ``null`` \| `number` |
| `current` | ``null`` \| `number` |

#### Returns

[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)

#### Defined in

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:289](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L289)

___

### #convertValue

▸ **#convertValue**(`inputLowValue`, `inputHighValue`, `outputLowValue`, `outputHighValue`, `value`): `number`

ConvertValue: Converts values from one range to another
* Range In  -> from  inputLowValue to   inputHighValue
* Range Out -> from outputLowValue to outputHighValue

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputLowValue` | `number` |
| `inputHighValue` | `number` |
| `outputLowValue` | `number` |
| `outputHighValue` | `number` |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:623](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L623)

___

### #executeCalibrationAndMove

▸ **#executeCalibrationAndMove**(`type`, `direction`, `targetPercent100ths?`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`MovementType`](../enums/behavior_definitions_window_covering_export.MovementType.md) |
| `direction` | [`MovementDirection`](../enums/behavior_definitions_window_covering_export.MovementDirection.md) |
| `targetPercent100ths?` | `number` |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Defined in

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:456](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L456)

___

### #handleLiftTargetPositionChanging

▸ **#handleLiftTargetPositionChanging**(`percent100ths`): `void`

Update the operational state when the target lift position changes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `percent100ths` | ``null`` \| `number` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:227](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L227)

___

### #handleModeChanging

▸ **#handleModeChanging**(`mode`): `void`

Sync the mode attribute with the configStatus attribute and the internal state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `calibrationMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `ledFeedback`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `maintenanceMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorDirectionReversed`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:173](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L173)

___

### #handleOperationalStatusChanging

▸ **#handleOperationalStatusChanging**(`operationalStatus`): `void`

Update the global operational status based on the lift or tilt status.

#### Parameters

| Name | Type |
| :------ | :------ |
| `operationalStatus` | [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `global`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `lift`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `tilt`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\>  }\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:211](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L211)

___

### #handleTiltTargetPositionChanging

▸ **#handleTiltTargetPositionChanging**(`percent100ths`): `void`

Update the operational state when the target tilt position changes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `percent100ths` | ``null`` \| `number` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:237](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L237)

___

### #liftToPercent100ths

▸ **#liftToPercent100ths**(`lift`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lift` | `number` |

#### Returns

`number`

#### Defined in

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:676](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L676)

___

### #percent100thsToLift

▸ **#percent100thsToLift**(`percent100ths`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `percent100ths` | `number` |

#### Returns

`number`

#### Defined in

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:683](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L683)

___

### #percent100thsToTilt

▸ **#percent100thsToTilt**(`percent100ths`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `percent100ths` | `number` |

#### Returns

`number`

#### Defined in

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:697](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L697)

___

### #percent100thsToValue

▸ **#percent100thsToValue**(`limits`, `relative`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `limits` | [`AbsoluteLimits`](../modules/behavior_definitions_window_covering_export._internal_.md#absolutelimits) |
| `relative` | `number` |

#### Returns

`number`

#### Defined in

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:666](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L666)

___

### #prepareMovement

▸ **#prepareMovement**(`type`, `direction`, `targetPercent100ths?`): `void`

Handle a movement. If calibration is supported and needed then [executeCalibration](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md#executecalibration) runs before the actual
movement. The method increases the numberOfActuations* attribute and updates the operational status.

Actual movement occurs in [handleMovement](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md#handlemovement) as a worker. Thus this method returns before actual movement
completes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`MovementType`](../enums/behavior_definitions_window_covering_export.MovementType.md) |
| `direction` | [`MovementDirection`](../enums/behavior_definitions_window_covering_export.MovementDirection.md) |
| `targetPercent100ths?` | `number` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:394](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L394)

___

### #syncLiftCurrentPositions

▸ **#syncLiftCurrentPositions**(`percent100ths`): `void`

Sync the current lift position attributes and the operational state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `percent100ths` | ``null`` \| `number` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:247](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L247)

___

### #syncTiltCurrentPositions

▸ **#syncTiltCurrentPositions**(`percent100ths`): `void`

Sync the current tilt position attributes and the operational state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `percent100ths` | ``null`` \| `number` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:268](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L268)

___

### #tiltToPercent100ths

▸ **#tiltToPercent100ths**(`tilt`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tilt` | `number` |

#### Returns

`number`

#### Defined in

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:690](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L690)

___

### #triggerLiftMotion

▸ **#triggerLiftMotion**(`direction`, `targetPercent100ths?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `direction` | [`MovementDirection`](../enums/behavior_definitions_window_covering_export.MovementDirection.md) |
| `targetPercent100ths?` | `number` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:492](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L492)

___

### #triggerTiltMotion

▸ **#triggerTiltMotion**(`direction`, `targetPercent100ths?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `direction` | [`MovementDirection`](../enums/behavior_definitions_window_covering_export.MovementDirection.md) |
| `targetPercent100ths?` | `number` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:496](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L496)

___

### #valueToPercent100ths

▸ **#valueToPercent100ths**(`limits`, `absolute`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `limits` | [`AbsoluteLimits`](../modules/behavior_definitions_window_covering_export._internal_.md#absolutelimits) |
| `absolute` | `number` |

#### Returns

`number`

#### Defined in

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:656](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L656)

___

### [asyncDispose]

▸ **[asyncDispose]**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

Release resources.  This is the public API for releasing application resources held by behaviors in internal
state.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

WindowCoveringServerBase.[asyncDispose]

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:198](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L198)

___

### asAdmin

▸ **asAdmin**(`fn`): `void`

Execute logic with elevated privileges.

The provided function executes with privileges escalated to offline mode.  This is not commonly necessary.

Elevated logic effectively ignores ACLs so should be used with care.

Note that interactions with the behavior will remain elevated until the synchronous completion of this call.
You should only elevate privileges for synchronous logic.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | () => `void` | the elevated logic |

#### Returns

`void`

#### Inherited from

WindowCoveringServerBase.asAdmin

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:125](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L125)

___

### assertAttributeEnabled

▸ **assertAttributeEnabled**\<`This`, `K`\>(`this`, `attributeName`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Behavior`](behavior_export.Behavior-1.md) |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `attributeName` | `K` |

#### Returns

`void`

#### Inherited from

WindowCoveringServerBase.assertAttributeEnabled

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:183](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L183)

___

### callback

▸ **callback**\<`A`, `R`\>(`reactor`, `options?`): (...`args`: `A`) => `undefined` \| `R`

Create a generic callback function that has the same properties as a [Reactor](../modules/behavior_export.md#reactor).

Like a reactor, the callback's "this" will be bound to an active Behavior instance.
Because of this: The reactor MUST be a real JS function - arrow functions will not work!

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends `any`[] |
| `R` | `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reactor` | [`Reactor`](../modules/behavior_export.md#reactor)\<`A`, `R`\> |
| `options?` | [`Options`](../interfaces/behavior_export.Reactor.Options.md) |

#### Returns

`fn`

▸ (`...args`): `undefined` \| `R`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `A` |

##### Returns

`undefined` \| `R`

#### Inherited from

WindowCoveringServerBase.callback

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:226](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L226)

___

### downOrClose

▸ **downOrClose**(): `void`

Move the WindowCovering down or close. For position aware devices the target position is set to 100%. The method
calls the handleMovement method to actually move the device.

#### Returns

`void`

#### Overrides

WindowCoveringServerBase.downOrClose

#### Defined in

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:528](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L528)

___

### executeCalibration

▸ **executeCalibration**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

Calibrate the device.  The default implementation takes no action. Override to implement calibration if
necessary.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Defined in

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:335](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L335)

___

### goToLiftPercentage

▸ **goToLiftPercentage**(`«destructured»`): `void`

Move the WindowCovering to a specific tilt value. The method calls the handleMovement method to actually move the
device to the defined position.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

`void`

#### Overrides

WindowCoveringServerBase.goToLiftPercentage

#### Defined in

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:573](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L573)

___

### goToLiftValue

▸ **goToLiftValue**(`«destructured»`): `void`

Move the WindowCovering to a specific lift value. The default implementation calculates the % value for the
target position. The method calls the handleMovement method to actually move the device to the defined position.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

`void`

#### Overrides

WindowCoveringServerBase.goToLiftValue

#### Defined in

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:562](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L562)

___

### goToTiltPercentage

▸ **goToTiltPercentage**(`«destructured»`): `void`

Move the WindowCovering to a specific tilt value. The method calls the handleMovement method to actually move the
device to the defined position.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

`void`

#### Overrides

WindowCoveringServerBase.goToTiltPercentage

#### Defined in

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:603](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L603)

___

### goToTiltValue

▸ **goToTiltValue**(`«destructured»`): `void`

Move the WindowCovering to a specific tilt value. The default implementation calculates the % value for the target
position. The method calls the handleMovement method to actually move the device to the defined position.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

`void`

#### Overrides

WindowCoveringServerBase.goToTiltValue

#### Defined in

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:592](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L592)

___

### handleMovement

▸ **handleMovement**(`type`, `reversed`, `direction`, `targetPercent100ths?`): `Promise`\<`void`\>

Perform actual "movement".  Override to initiate movement of your device.

The default implementation logs and immediately updates current position to the target positions.  This is
probably not desirable for a real device so do not invoke `super.handleMovement()` from your implementation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | [`MovementType`](../enums/behavior_definitions_window_covering_export.MovementType.md) | Which element should move, Lift or Tilt |
| `reversed` | `boolean` | If the motor is configured reversed |
| `direction` | [`MovementDirection`](../enums/behavior_definitions_window_covering_export.MovementDirection.md) | The direction of the movement (Open, Close, DefinedByPosition) |
| `targetPercent100ths?` | `number` | Optionally the target position in percent 100ths. It depends on the used feature set of the cluster if this is provided or not. |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:351](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L351)

___

### handleStopMovement

▸ **handleStopMovement**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

Stop device movement.  Sets the target position to the current position and updates operational state. Override
to implement the actual stop movement logic.

If you update the current positions you can include the default logic via "super.handleStopMovement()".

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Defined in

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:476](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L476)

___

### initialize

▸ **initialize**(): `void`

#### Returns

`void`

#### Overrides

WindowCoveringServerBase.initialize

#### Defined in

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:125](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L125)

___

### reactTo

▸ **reactTo**\<`O`\>(`observable`, `reactor`, `options?`): `void`

Install a [Reactor](../modules/behavior_export.md#reactor).

Important: The reactor MUST be a real JS function - arrow functions will not work!

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends [`Observable`](../interfaces/util_export.Observable.md)\<`any`[], `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `O` |
| `reactor` | [`Reactor`](../modules/behavior_export.md#reactor)\<`Parameters`\<`O`[``"emit"``]\>, `ReturnType`\<`O`[``"emit"``]\>\> |
| `options?` | [`Options`](../interfaces/behavior_export.Reactor.Options.md) |

#### Returns

`void`

#### Inherited from

WindowCoveringServerBase.reactTo

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:212](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L212)

___

### requireAttributeEnabled

▸ **requireAttributeEnabled**\<`This`, `K`\>(`this`, `attributeName`): `Exclude`\<`This`[``"state"``][`K`], `undefined`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Behavior`](behavior_export.Behavior-1.md) |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `attributeName` | `K` |

#### Returns

`Exclude`\<`This`[``"state"``][`K`], `undefined`\>

#### Inherited from

WindowCoveringServerBase.requireAttributeEnabled

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:171](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L171)

___

### stopMotion

▸ **stopMotion**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

Stop any movement of the WindowCovering. The method calls the handleStopMovement method to actually stop the
movement of the device.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Overrides

WindowCoveringServerBase.stopMotion

#### Defined in

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:552](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L552)

___

### toString

▸ **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

WindowCoveringServerBase.toString

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:203](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L203)

___

### upOrOpen

▸ **upOrOpen**(): `void`

Move the WindowCovering up or open. For position aware devices the target position is set to 0%. The method calls
the handleMovement method to actually move the device.

#### Returns

`void`

#### Overrides

WindowCoveringServerBase.upOrOpen

#### Defined in

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:504](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L504)

___

### alter

▸ **alter**\<`This`, `AlterationsT`\>(`this`, `alterations`): [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<`This`[``"cluster"``], `AlterationsT`\>, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`ClusterType`](../interfaces/cluster_export.ClusterType-1.md), [`Type`](../interfaces/behavior_export.Behavior.Type.md), [`ClusterInterface`](../modules/behavior_cluster_export.md#clusterinterface)\<{}\>\> |
| `AlterationsT` | extends [`Alterations`](../modules/cluster_export.ElementModifier.md#alterations)\<`This`[``"cluster"``]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `alterations` | `AlterationsT` |

#### Returns

[`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<`This`[``"cluster"``], `AlterationsT`\>, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Inherited from

WindowCoveringServerBase.alter

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:254](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L254)

___

### enable

▸ **enable**\<`This`, `FlagsT`\>(`this`, `flags`): [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<`This`[``"cluster"``], [`ElementFlagAlterations`](../modules/cluster_export.ElementModifier.md#elementflagalterations)\<`FlagsT`\>\>, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`ClusterType`](../interfaces/cluster_export.ClusterType-1.md), [`Type`](../interfaces/behavior_export.Behavior.Type.md), [`ClusterInterface`](../modules/behavior_cluster_export.md#clusterinterface)\<{}\>\> |
| `FlagsT` | extends [`ElementFlags`](../modules/cluster_export.ElementModifier.md#elementflags)\<`This`[``"cluster"``]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `flags` | `FlagsT` |

#### Returns

[`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<`This`[``"cluster"``], [`ElementFlagAlterations`](../modules/cluster_export.ElementModifier.md#elementflagalterations)\<`FlagsT`\>\>, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Inherited from

WindowCoveringServerBase.enable

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:264](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L264)

___

### for

▸ **for**\<`This`, `ClusterT`\>(`this`, `cluster`, `schema?`): [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<`ClusterT`, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`ClusterType`](../interfaces/cluster_export.ClusterType-1.md), [`Type`](../interfaces/behavior_export.Behavior.Type.md), [`ClusterInterface`](../modules/behavior_cluster_export.md#clusterinterface)\<{}\>\> |
| `ClusterT` | extends [`ClusterType`](../interfaces/cluster_export.ClusterType-1.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `cluster` | `ClusterT` |
| `schema?` | [`Schema`](../modules/behavior_cluster_export._internal_.md#schema) |

#### Returns

[`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<`ClusterT`, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Inherited from

WindowCoveringServerBase.for

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:240](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L240)

___

### set

▸ **set**\<`This`\>(`this`, `defaults`): `This`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Type`](../interfaces/behavior_export.Behavior.Type.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `defaults` | `Partial`\<[`RelaxTypes`](../modules/cluster_export.ClusterType.md#relaxtypes)\<`InstanceType`\<`This`[``"State"``]\>\>\> |

#### Returns

`This`

#### Inherited from

WindowCoveringServerBase.set

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:262](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L262)

___

### with

▸ **with**\<`This`, `FeaturesT`\>(`this`, `...features`): [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<`This`[``"cluster"``], `FeaturesT`\>, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`ClusterType`](../interfaces/cluster_export.ClusterType-1.md), [`Type`](../interfaces/behavior_export.Behavior.Type.md), [`ClusterInterface`](../modules/behavior_cluster_export.md#clusterinterface)\<{}\>\> |
| `FeaturesT` | extends [`FeatureSelection`](../modules/cluster_export.ClusterComposer.md#featureselection)\<`This`[``"cluster"``]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `...features` | `FeaturesT` |

#### Returns

[`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<`This`[``"cluster"``], `FeaturesT`\>, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Inherited from

WindowCoveringServerBase.with

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:246](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L246)
