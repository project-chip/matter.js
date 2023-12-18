[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / PumpConfigurationAndControl

# Namespace: PumpConfigurationAndControl

[cluster/export](cluster_export.md).PumpConfigurationAndControl

## Table of contents

### Enumerations

- [ControlMode](../enums/cluster_export.PumpConfigurationAndControl.ControlMode.md)
- [Feature](../enums/cluster_export.PumpConfigurationAndControl.Feature.md)
- [OperationMode](../enums/cluster_export.PumpConfigurationAndControl.OperationMode.md)

### Type Aliases

- [Extension](cluster_export.PumpConfigurationAndControl.md#extension)

### Variables

- [AutomaticComponent](cluster_export.PumpConfigurationAndControl.md#automaticcomponent)
- [Base](cluster_export.PumpConfigurationAndControl.md#base)
- [Cluster](cluster_export.PumpConfigurationAndControl.md#cluster)
- [CompensatedPressureComponent](cluster_export.PumpConfigurationAndControl.md#compensatedpressurecomponent)
- [Complete](cluster_export.PumpConfigurationAndControl.md#complete)
- [ConstantFlowComponent](cluster_export.PumpConfigurationAndControl.md#constantflowcomponent)
- [ConstantPressureComponent](cluster_export.PumpConfigurationAndControl.md#constantpressurecomponent)
- [ConstantSpeedComponent](cluster_export.PumpConfigurationAndControl.md#constantspeedcomponent)
- [ConstantTemperatureComponent](cluster_export.PumpConfigurationAndControl.md#constanttemperaturecomponent)
- [PumpStatusBitmap](cluster_export.PumpConfigurationAndControl.md#pumpstatusbitmap)

## Type Aliases

### Extension

Ƭ **Extension**\<`SF`\>: `Omit`\<typeof [`Base`](cluster_export.PumpConfigurationAndControl.md#base), ``"supportedFeatures"``\> & \{ `supportedFeatures`: `SF`  } & `SF` extends \{ `constantPressure`: ``true``  } ? typeof [`ConstantPressureComponent`](cluster_export.PumpConfigurationAndControl.md#constantpressurecomponent) : {} & `SF` extends \{ `automatic`: ``true``  } ? typeof [`AutomaticComponent`](cluster_export.PumpConfigurationAndControl.md#automaticcomponent) : {} & `SF` extends \{ `compensatedPressure`: ``true``  } ? typeof [`CompensatedPressureComponent`](cluster_export.PumpConfigurationAndControl.md#compensatedpressurecomponent) : {} & `SF` extends \{ `constantSpeed`: ``true``  } ? typeof [`ConstantSpeedComponent`](cluster_export.PumpConfigurationAndControl.md#constantspeedcomponent) : {} & `SF` extends \{ `constantFlow`: ``true``  } ? typeof [`ConstantFlowComponent`](cluster_export.PumpConfigurationAndControl.md#constantflowcomponent) : {} & `SF` extends \{ `constantTemperature`: ``true``  } ? typeof [`ConstantTemperatureComponent`](cluster_export.PumpConfigurationAndControl.md#constanttemperaturecomponent) : {} & `SF` extends \{ `compensatedPressure`: ``false`` ; `constantFlow`: ``false`` ; `constantPressure`: ``false`` ; `constantSpeed`: ``false`` ; `constantTemperature`: ``false``  } ? `never` : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<typeof `Base.features`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:950](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L950)

## Variables

### AutomaticComponent

• `Const` **AutomaticComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `maxCompPressure`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)\<``null`` \| `number`, `any`\> ; `maxConstFlow`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)\<``null`` \| `number`, `any`\> ; `maxConstPressure`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)\<``null`` \| `number`, `any`\> ; `maxConstSpeed`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)\<``null`` \| `number`, `any`\> ; `maxConstTemp`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)\<``null`` \| `number`, `any`\> ; `minCompPressure`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)\<``null`` \| `number`, `any`\> ; `minConstFlow`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)\<``null`` \| `number`, `any`\> ; `minConstPressure`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)\<``null`` \| `number`, `any`\> ; `minConstSpeed`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)\<``null`` \| `number`, `any`\> ; `minConstTemp`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)\<``null`` \| `number`, `any`\>  }  }\>

A PumpConfigurationAndControlCluster supports these elements if it supports feature Automatic.

#### Defined in

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:666](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L666)

___

### Base

• `Const` **Base**: [`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `capacity`: [`Attribute`](cluster_export.md#attribute)\<``null`` \| `number`, `any`\> ; `controlMode`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<[`ControlMode`](../enums/cluster_export.PumpConfigurationAndControl.ControlMode.md), `any`\> ; `effectiveControlMode`: [`Attribute`](cluster_export.md#attribute)\<[`ControlMode`](../enums/cluster_export.PumpConfigurationAndControl.ControlMode.md), `any`\> ; `effectiveOperationMode`: [`Attribute`](cluster_export.md#attribute)\<[`OperationMode`](../enums/cluster_export.PumpConfigurationAndControl.OperationMode.md), `any`\> ; `lifetimeEnergyConsumed`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<``null`` \| `number`, `any`\> ; `lifetimeRunningHours`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<``null`` \| `number`, `any`\> ; `maxFlow`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<``null`` \| `number`, `any`\> ; `maxPressure`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<``null`` \| `number`, `any`\> ; `maxSpeed`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<``null`` \| `number`, `any`\> ; `operationMode`: [`WritableAttribute`](cluster_export.md#writableattribute)\<[`OperationMode`](../enums/cluster_export.PumpConfigurationAndControl.OperationMode.md), `any`\> ; `power`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<``null`` \| `number`, `any`\> ; `pumpStatus`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `deviceFault`: [`BitFlag`](schema_export.md#bitflag-1) ; `localOverride`: [`BitFlag`](schema_export.md#bitflag-1) ; `remoteFlow`: [`BitFlag`](schema_export.md#bitflag-1) ; `remotePressure`: [`BitFlag`](schema_export.md#bitflag-1) ; `remoteTemperature`: [`BitFlag`](schema_export.md#bitflag-1) ; `running`: [`BitFlag`](schema_export.md#bitflag-1) ; `speedHigh`: [`BitFlag`](schema_export.md#bitflag-1) ; `speedLow`: [`BitFlag`](schema_export.md#bitflag-1) ; `supplyFault`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `speed`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<``null`` \| `number`, `any`\>  } ; `events`: \{ `airDetection`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `dryRunning`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `electronicFatalFailure`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `electronicNonFatalFailure`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `electronicTemperatureHigh`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `generalFault`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `leakage`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `motorTemperatureHigh`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `powerMissingPhase`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `pumpBlocked`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `pumpMotorFatalFailure`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `sensorFailure`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `supplyVoltageHigh`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `supplyVoltageLow`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `systemPressureHigh`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `systemPressureLow`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `turbineOperation`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\>  } ; `features`: \{ `automatic`: [`BitFlag`](schema_export.md#bitflag-1) ; `compensatedPressure`: [`BitFlag`](schema_export.md#bitflag-1) ; `constantFlow`: [`BitFlag`](schema_export.md#bitflag-1) ; `constantPressure`: [`BitFlag`](schema_export.md#bitflag-1) ; `constantSpeed`: [`BitFlag`](schema_export.md#bitflag-1) ; `constantTemperature`: [`BitFlag`](schema_export.md#bitflag-1) ; `localOperation`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: ``512`` = 0x200; `name`: ``"PumpConfigurationAndControl"`` = "PumpConfigurationAndControl"; `revision`: ``4`` = 4 }\>

These elements and properties are present in all PumpConfigurationAndControl clusters.

#### Defined in

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:271](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L271)

___

### Cluster

• `Const` **Cluster**: \{ `attributes`: [`Merge`](util_export.md#merge)\<[`Merge`](util_export.md#merge)\<\{ `capacity`: [`Attribute`](cluster_export.md#attribute)\<``null`` \| `number`, `any`\> ; `controlMode`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<[`ControlMode`](../enums/cluster_export.PumpConfigurationAndControl.ControlMode.md), `any`\> ; `effectiveControlMode`: [`Attribute`](cluster_export.md#attribute)\<[`ControlMode`](../enums/cluster_export.PumpConfigurationAndControl.ControlMode.md), `any`\> ; `effectiveOperationMode`: [`Attribute`](cluster_export.md#attribute)\<[`OperationMode`](../enums/cluster_export.PumpConfigurationAndControl.OperationMode.md), `any`\> ; `lifetimeEnergyConsumed`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<``null`` \| `number`, `any`\> ; `lifetimeRunningHours`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<``null`` \| `number`, `any`\> ; `maxFlow`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<``null`` \| `number`, `any`\> ; `maxPressure`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<``null`` \| `number`, `any`\> ; `maxSpeed`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<``null`` \| `number`, `any`\> ; `operationMode`: [`WritableAttribute`](cluster_export.md#writableattribute)\<[`OperationMode`](../enums/cluster_export.PumpConfigurationAndControl.OperationMode.md), `any`\> ; `power`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<``null`` \| `number`, `any`\> ; `pumpStatus`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `deviceFault`: [`BitFlag`](schema_export.md#bitflag-1) ; `localOverride`: [`BitFlag`](schema_export.md#bitflag-1) ; `remoteFlow`: [`BitFlag`](schema_export.md#bitflag-1) ; `remotePressure`: [`BitFlag`](schema_export.md#bitflag-1) ; `remoteTemperature`: [`BitFlag`](schema_export.md#bitflag-1) ; `running`: [`BitFlag`](schema_export.md#bitflag-1) ; `speedHigh`: [`BitFlag`](schema_export.md#bitflag-1) ; `speedLow`: [`BitFlag`](schema_export.md#bitflag-1) ; `supplyFault`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `speed`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<``null`` \| `number`, `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)\<\{ `automatic`: [`BitFlag`](schema_export.md#bitflag-1) ; `compensatedPressure`: [`BitFlag`](schema_export.md#bitflag-1) ; `constantFlow`: [`BitFlag`](schema_export.md#bitflag-1) ; `constantPressure`: [`BitFlag`](schema_export.md#bitflag-1) ; `constantSpeed`: [`BitFlag`](schema_export.md#bitflag-1) ; `constantTemperature`: [`BitFlag`](schema_export.md#bitflag-1) ; `localOperation`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, [`GlobalAttributes`](cluster_export.md#globalattributes-1)\<\{ `automatic`: [`BitFlag`](schema_export.md#bitflag-1) ; `compensatedPressure`: [`BitFlag`](schema_export.md#bitflag-1) ; `constantFlow`: [`BitFlag`](schema_export.md#bitflag-1) ; `constantPressure`: [`BitFlag`](schema_export.md#bitflag-1) ; `constantSpeed`: [`BitFlag`](schema_export.md#bitflag-1) ; `constantTemperature`: [`BitFlag`](schema_export.md#bitflag-1) ; `localOperation`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `commands`: {} ; `events`: \{ `airDetection`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `dryRunning`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `electronicFatalFailure`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `electronicNonFatalFailure`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `electronicTemperatureHigh`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `generalFault`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `leakage`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `motorTemperatureHigh`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `powerMissingPhase`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `pumpBlocked`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `pumpMotorFatalFailure`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `sensorFailure`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `supplyVoltageHigh`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `supplyVoltageLow`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `systemPressureHigh`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `systemPressureLow`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `turbineOperation`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\>  } ; `features`: \{ `automatic`: [`BitFlag`](schema_export.md#bitflag-1) ; `compensatedPressure`: [`BitFlag`](schema_export.md#bitflag-1) ; `constantFlow`: [`BitFlag`](schema_export.md#bitflag-1) ; `constantPressure`: [`BitFlag`](schema_export.md#bitflag-1) ; `constantSpeed`: [`BitFlag`](schema_export.md#bitflag-1) ; `constantTemperature`: [`BitFlag`](schema_export.md#bitflag-1) ; `localOperation`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: [`Branded`](util_export.md#branded)\<``512`` & [`Brand`](util_export.md#brand)\<``"ClusterId"``\>, ``"ClusterId"``\> ; `name`: ``"PumpConfigurationAndControl"`` ; `revision`: ``4`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`\<[`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `capacity`: [`Attribute`](cluster_export.md#attribute)\<``null`` \| `number`, `any`\> ; `controlMode`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<[`ControlMode`](../enums/cluster_export.PumpConfigurationAndControl.ControlMode.md), `any`\> ; `effectiveControlMode`: [`Attribute`](cluster_export.md#attribute)\<[`ControlMode`](../enums/cluster_export.PumpConfigurationAndControl.ControlMode.md), `any`\> ; `effectiveOperationMode`: [`Attribute`](cluster_export.md#attribute)\<[`OperationMode`](../enums/cluster_export.PumpConfigurationAndControl.OperationMode.md), `any`\> ; `lifetimeEnergyConsumed`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<``null`` \| `number`, `any`\> ; `lifetimeRunningHours`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<``null`` \| `number`, `any`\> ; `maxFlow`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<``null`` \| `number`, `any`\> ; `maxPressure`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<``null`` \| `number`, `any`\> ; `maxSpeed`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<``null`` \| `number`, `any`\> ; `operationMode`: [`WritableAttribute`](cluster_export.md#writableattribute)\<[`OperationMode`](../enums/cluster_export.PumpConfigurationAndControl.OperationMode.md), `any`\> ; `power`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<``null`` \| `number`, `any`\> ; `pumpStatus`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `deviceFault`: [`BitFlag`](schema_export.md#bitflag-1) ; `localOverride`: [`BitFlag`](schema_export.md#bitflag-1) ; `remoteFlow`: [`BitFlag`](schema_export.md#bitflag-1) ; `remotePressure`: [`BitFlag`](schema_export.md#bitflag-1) ; `remoteTemperature`: [`BitFlag`](schema_export.md#bitflag-1) ; `running`: [`BitFlag`](schema_export.md#bitflag-1) ; `speedHigh`: [`BitFlag`](schema_export.md#bitflag-1) ; `speedLow`: [`BitFlag`](schema_export.md#bitflag-1) ; `supplyFault`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `speed`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<``null`` \| `number`, `any`\>  } ; `events`: \{ `airDetection`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `dryRunning`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `electronicFatalFailure`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `electronicNonFatalFailure`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `electronicTemperatureHigh`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `generalFault`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `leakage`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `motorTemperatureHigh`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `powerMissingPhase`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `pumpBlocked`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `pumpMotorFatalFailure`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `sensorFailure`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `supplyVoltageHigh`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `supplyVoltageLow`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `systemPressureHigh`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `systemPressureLow`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `turbineOperation`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\>  } ; `features`: \{ `automatic`: [`BitFlag`](schema_export.md#bitflag-1) ; `compensatedPressure`: [`BitFlag`](schema_export.md#bitflag-1) ; `constantFlow`: [`BitFlag`](schema_export.md#bitflag-1) ; `constantPressure`: [`BitFlag`](schema_export.md#bitflag-1) ; `constantSpeed`: [`BitFlag`](schema_export.md#bitflag-1) ; `constantTemperature`: [`BitFlag`](schema_export.md#bitflag-1) ; `localOperation`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: ``512`` = 0x200; `name`: ``"PumpConfigurationAndControl"`` = "PumpConfigurationAndControl"; `revision`: ``4`` = 4 }\>, ``"attributes"``\> & \{ `with`: \<T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.PumpConfigurationAndControl.md#extension)\<[`BitFlags`](schema_export.md#bitflags)\<\{ `automatic`: [`BitFlag`](schema_export.md#bitflag-1) ; `compensatedPressure`: [`BitFlag`](schema_export.md#bitflag-1) ; `constantFlow`: [`BitFlag`](schema_export.md#bitflag-1) ; `constantPressure`: [`BitFlag`](schema_export.md#bitflag-1) ; `constantSpeed`: [`BitFlag`](schema_export.md#bitflag-1) ; `constantTemperature`: [`BitFlag`](schema_export.md#bitflag-1) ; `localOperation`: [`BitFlag`](schema_export.md#bitflag-1)  }, `T`\>\> = extender }

Pump Configuration and Control

The Pump Configuration and Control cluster provides an interface for the setup and control of pump devices, and
the automatic reporting of pump status information. Note that control of pump speed is not included – speed is
controlled by the On/Off and Level Control clusters.

PumpConfigurationAndControlCluster supports optional features that you can enable with the
PumpConfigurationAndControlCluster.with() factory method.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.2

#### Defined in

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:910](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L910)

___

### CompensatedPressureComponent

• `Const` **CompensatedPressureComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `maxCompPressure`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<``null`` \| `number`, `any`\> ; `minCompPressure`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<``null`` \| `number`, `any`\>  }  }\>

A PumpConfigurationAndControlCluster supports these elements if it supports feature CompensatedPressure.

#### Defined in

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:784](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L784)

___

### Complete

• `Const` **Complete**: [`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](cluster_export.md#attribute)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.md#attribute)\<[`AttributeId`](datatype_export.md#attributeid)[], `never`\> ; `capacity`: [`Attribute`](cluster_export.md#attribute)\<``null`` \| `number`, `any`\> ; `clusterRevision`: [`Attribute`](cluster_export.md#attribute)\<`number`, `never`\> ; `controlMode`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<[`ControlMode`](../enums/cluster_export.PumpConfigurationAndControl.ControlMode.md), `any`\> ; `effectiveControlMode`: [`Attribute`](cluster_export.md#attribute)\<[`ControlMode`](../enums/cluster_export.PumpConfigurationAndControl.ControlMode.md), `any`\> ; `effectiveOperationMode`: [`Attribute`](cluster_export.md#attribute)\<[`OperationMode`](../enums/cluster_export.PumpConfigurationAndControl.OperationMode.md), `any`\> ; `eventList`: [`Attribute`](cluster_export.md#attribute)\<[`EventId`](datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.md#attribute)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `automatic`: [`BitFlag`](schema_export.md#bitflag-1) ; `compensatedPressure`: [`BitFlag`](schema_export.md#bitflag-1) ; `constantFlow`: [`BitFlag`](schema_export.md#bitflag-1) ; `constantPressure`: [`BitFlag`](schema_export.md#bitflag-1) ; `constantSpeed`: [`BitFlag`](schema_export.md#bitflag-1) ; `constantTemperature`: [`BitFlag`](schema_export.md#bitflag-1) ; `localOperation`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.md#attribute)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `lifetimeEnergyConsumed`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<``null`` \| `number`, `any`\> ; `lifetimeRunningHours`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<``null`` \| `number`, `any`\> ; `maxCompPressure`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `compensatedPressure`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `automatic`: `boolean` = true }]  } ; `maxConstFlow`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `constantFlow`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `automatic`: `boolean` = true }]  } ; `maxConstPressure`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `constantPressure`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `automatic`: `boolean` = true }]  } ; `maxConstSpeed`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `constantSpeed`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `automatic`: `boolean` = true }]  } ; `maxConstTemp`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `constantTemperature`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `automatic`: `boolean` = true }]  } ; `maxFlow`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<``null`` \| `number`, `any`\> ; `maxPressure`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<``null`` \| `number`, `any`\> ; `maxSpeed`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<``null`` \| `number`, `any`\> ; `minCompPressure`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `compensatedPressure`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `automatic`: `boolean` = true }]  } ; `minConstFlow`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `constantFlow`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `automatic`: `boolean` = true }]  } ; `minConstPressure`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `constantPressure`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `automatic`: `boolean` = true }]  } ; `minConstSpeed`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `constantSpeed`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `automatic`: `boolean` = true }]  } ; `minConstTemp`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `constantTemperature`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `automatic`: `boolean` = true }]  } ; `operationMode`: [`WritableAttribute`](cluster_export.md#writableattribute)\<[`OperationMode`](../enums/cluster_export.PumpConfigurationAndControl.OperationMode.md), `any`\> ; `power`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<``null`` \| `number`, `any`\> ; `pumpStatus`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `deviceFault`: [`BitFlag`](schema_export.md#bitflag-1) ; `localOverride`: [`BitFlag`](schema_export.md#bitflag-1) ; `remoteFlow`: [`BitFlag`](schema_export.md#bitflag-1) ; `remotePressure`: [`BitFlag`](schema_export.md#bitflag-1) ; `remoteTemperature`: [`BitFlag`](schema_export.md#bitflag-1) ; `running`: [`BitFlag`](schema_export.md#bitflag-1) ; `speedHigh`: [`BitFlag`](schema_export.md#bitflag-1) ; `speedLow`: [`BitFlag`](schema_export.md#bitflag-1) ; `supplyFault`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `speed`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<``null`` \| `number`, `any`\>  } ; `events`: \{ `airDetection`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `dryRunning`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `electronicFatalFailure`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `electronicNonFatalFailure`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `electronicTemperatureHigh`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `generalFault`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `leakage`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `motorTemperatureHigh`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `powerMissingPhase`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `pumpBlocked`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `pumpMotorFatalFailure`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `sensorFailure`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `supplyVoltageHigh`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `supplyVoltageLow`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `systemPressureHigh`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `systemPressureLow`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\> ; `turbineOperation`: [`OptionalEvent`](cluster_export.md#optionalevent)\<`void`, `any`\>  } = Cluster.events; `features`: \{ `automatic`: [`BitFlag`](schema_export.md#bitflag-1) ; `compensatedPressure`: [`BitFlag`](schema_export.md#bitflag-1) ; `constantFlow`: [`BitFlag`](schema_export.md#bitflag-1) ; `constantPressure`: [`BitFlag`](schema_export.md#bitflag-1) ; `constantSpeed`: [`BitFlag`](schema_export.md#bitflag-1) ; `constantTemperature`: [`BitFlag`](schema_export.md#bitflag-1) ; `localOperation`: [`BitFlag`](schema_export.md#bitflag-1)  } = Cluster.features; `id`: ``512`` & [`Brand`](util_export.md#brand)\<``"ClusterId"``\> = Cluster.id; `name`: ``"PumpConfigurationAndControl"`` = Cluster.name; `revision`: ``4`` = Cluster.revision }\>

This cluster supports all PumpConfigurationAndControl features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:974](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L974)

___

### ConstantFlowComponent

• `Const` **ConstantFlowComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `maxConstFlow`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<``null`` \| `number`, `any`\> ; `minConstFlow`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<``null`` \| `number`, `any`\>  }  }\>

A PumpConfigurationAndControlCluster supports these elements if it supports feature ConstantFlow.

#### Defined in

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:840](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L840)

___

### ConstantPressureComponent

• `Const` **ConstantPressureComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `maxConstPressure`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<``null`` \| `number`, `any`\> ; `minConstPressure`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<``null`` \| `number`, `any`\>  }  }\>

A PumpConfigurationAndControlCluster supports these elements if it supports feature ConstantPressure.

#### Defined in

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:637](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L637)

___

### ConstantSpeedComponent

• `Const` **ConstantSpeedComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `maxConstSpeed`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<``null`` \| `number`, `any`\> ; `minConstSpeed`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<``null`` \| `number`, `any`\>  }  }\>

A PumpConfigurationAndControlCluster supports these elements if it supports feature ConstantSpeed.

#### Defined in

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:813](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L813)

___

### ConstantTemperatureComponent

• `Const` **ConstantTemperatureComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `maxConstTemp`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<``null`` \| `number`, `any`\> ; `minConstTemp`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<``null`` \| `number`, `any`\>  }  }\>

A PumpConfigurationAndControlCluster supports these elements if it supports feature ConstantTemperature.

#### Defined in

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:870](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L870)

___

### PumpStatusBitmap

• `Const` **PumpStatusBitmap**: `Object`

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.2.6.1

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `deviceFault` | [`BitFlag`](schema_export.md#bitflag-1) | A fault related to the system or pump device is detected. If this bit is set, it may correspond to an event in the range 2-16, see Events. **`See`** [MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.2.6.1.1 |
| `localOverride` | [`BitFlag`](schema_export.md#bitflag-1) | Device control is overridden by hardware, such as an external STOP button or via a local HMI. While this bit is set, the EffectiveOperationMode is adjusted to Local. Any request changing OperationMode shall generate a FAILURE error status until LocalOverride is cleared on the physical device. When LocalOverride is cleared, the device shall return to the operation mode set in OperationMode. **`See`** [MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.2.6.1.3 |
| `remoteFlow` | [`BitFlag`](schema_export.md#bitflag-1) | A remote flow sensor is used as the sensor for the regulation of the pump. If this bit is set, EffectiveControlMode is ConstantFlow, and the setpoint for the pump is interpreted as a percentage of the range of the remote sensor ([MinMeasuredValue – MaxMeasuredValue]). **`See`** [MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.2.6.1.5 |
| `remotePressure` | [`BitFlag`](schema_export.md#bitflag-1) | A remote pressure sensor is used as the sensor for the regulation of the pump. If this bit is set, EffectiveControlMode is ConstantPressure and the setpoint for the pump is interpreted as a percentage of the range of the remote sensor ([MinMeasuredValue – MaxMeasuredValue]). **`See`** [MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.2.6.1.4 |
| `remoteTemperature` | [`BitFlag`](schema_export.md#bitflag-1) | A remote temperature sensor is used as the sensor for the regulation of the pump. If this bit is set, EffectiveControlMode is ConstantTemperature, and the setpoint for the pump is interpreted as a percentage of the range of the remote sensor ([MinMeasuredValue – MaxMeasuredValue]) **`See`** [MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.2.6.1.6 |
| `running` | [`BitFlag`](schema_export.md#bitflag-1) | Pump is currently running |
| `speedHigh` | [`BitFlag`](schema_export.md#bitflag-1) | Setpoint is too high to achieve. |
| `speedLow` | [`BitFlag`](schema_export.md#bitflag-1) | Setpoint is too low to achieve. |
| `supplyFault` | [`BitFlag`](schema_export.md#bitflag-1) | A fault related to the supply to the pump is detected. If this bit is set, it may correspond to an event in the range 0-1 or 13, see Events. **`See`** [MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.2.6.1.2 |

#### Defined in

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:31](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L31)
