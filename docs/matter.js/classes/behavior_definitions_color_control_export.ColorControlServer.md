[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/color-control/export](../modules/behavior_definitions_color_control_export.md) / ColorControlServer

# Class: ColorControlServer

[behavior/definitions/color-control/export](../modules/behavior_definitions_color_control_export.md).ColorControlServer

## Hierarchy

- [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior-1.md)\<`this`\> & `Omit`\<[`ColorControlServerLogic`](behavior_definitions_color_control_export.ColorControlServerLogic-1.md), ``"state"`` \| ``"initialize"`` \| typeof `asyncDispose` \| ``"events"`` \| ``"cluster"`` \| ``"colorLoopSet"`` \| ``"stopMoveStep"`` \| keyof HueSaturation \| keyof Xy \| keyof ColorTemperature \| keyof EnhancedHue \| ``"moveToHueLogic"`` \| ``"moveHueLogic"`` \| ``"stopHueAndSaturationMovement"`` \| ``"stepHueLogic"`` \| ``"moveToSaturationLogic"`` \| ``"moveSaturationLogic"`` \| ``"stepSaturationLogic"`` \| ``"moveToHueAndSaturationLogic"`` \| ``"moveToColorLogic"`` \| ``"stopAllColorMovement"`` \| ``"moveColorLogic"`` \| ``"stepColorLogic"`` \| ``"moveToColorTemperatureLogic"`` \| ``"moveToEnhancedHueAndSaturationLogic"`` \| ``"stopColorLoopLogic"`` \| ``"startColorLoopLogic"`` \| ``"stopMoveStepLogic"`` \| ``"moveColorTemperatureLogic"`` \| ``"stepColorTemperatureLogic"`` \| ``"switchColorMode"`` \| ``"setColorMode"`` \| ``"setEnhancedColorMode"`` \| ``"syncColorTemperatureWithLevelLogic"``\> & `Omit`\<{} & {}, `never`\> & \{ `moveColorLogic`: (`rateX`: `number`, `rateY`: `number`) => [`MaybePromise`](../modules/util_export.md#maybepromise) ; `moveColorTemperatureLogic`: (`moveMode`: [`MoveMode`](../enums/cluster_export.ColorControl.MoveMode.md), `rate`: `number`, `colorTemperatureMinimumMireds`: `number`, `colorTemperatureMaximumMireds`: `number`) => [`MaybePromise`](../modules/util_export.md#maybepromise) ; `moveHueLogic`: (`moveMode`: [`MoveMode`](../enums/cluster_export.ColorControl.MoveMode.md), `rate`: `number`, `isEnhancedHue`: `boolean`) => [`MaybePromise`](../modules/util_export.md#maybepromise) ; `moveSaturationLogic`: (`moveMode`: [`MoveMode`](../enums/cluster_export.ColorControl.MoveMode.md), `rate`: `number`) => [`MaybePromise`](../modules/util_export.md#maybepromise) ; `moveToColorLogic`: (`targetX`: `number`, `targetY`: `number`, `transitionTime`: `number`) => [`MaybePromise`](../modules/util_export.md#maybepromise) ; `moveToColorTemperatureLogic`: (`targetMireds`: `number`, `transitionTime`: `number`) => [`MaybePromise`](../modules/util_export.md#maybepromise) ; `moveToEnhancedHueAndSaturationLogic`: (`targetEnhancedHue`: `number`, `targetSaturation`: `number`, `transitionTime`: `number`) => [`MaybePromise`](../modules/util_export.md#maybepromise) ; `moveToHueAndSaturationLogic`: (`targetHue`: `number`, `targetSaturation`: `number`, `transitionTime`: `number`) => [`MaybePromise`](../modules/util_export.md#maybepromise) ; `moveToHueLogic`: (`targetHue`: `number`, `direction`: [`ColorControlDirection`](../enums/cluster_export.ColorControl.ColorControlDirection.md), `transitionTime`: `number`, `isEnhancedHue`: `boolean`) => [`MaybePromise`](../modules/util_export.md#maybepromise) ; `moveToSaturationLogic`: (`targetSaturation`: `number`, `transitionTime`: `number`) => [`MaybePromise`](../modules/util_export.md#maybepromise) ; `setColorMode`: (`mode`: [`ColorMode`](../enums/cluster_export.ColorControl.ColorMode.md)) => [`MaybePromise`](../modules/util_export.md#maybepromise) ; `setEnhancedColorMode`: (`mode`: [`EnhancedColorMode`](../enums/cluster_export.ColorControl.EnhancedColorMode.md)) => [`MaybePromise`](../modules/util_export.md#maybepromise) ; `startColorLoopLogic`: (`startHue`: `number`) => [`MaybePromise`](../modules/util_export.md#maybepromise) ; `stepColorLogic`: (`stepX`: `number`, `stepY`: `number`, `transitionTime`: `number`) => [`MaybePromise`](../modules/util_export.md#maybepromise) ; `stepColorTemperatureLogic`: (`stepMode`: [`StepMode`](../enums/cluster_export.ColorControl.StepMode.md), `stepSize`: `number`, `transitionTime`: `number`, `colorTemperatureMinimumMireds`: `number`, `colorTemperatureMaximumMireds`: `number`) => [`MaybePromise`](../modules/util_export.md#maybepromise) ; `stepHueLogic`: (`stepMode`: [`StepMode`](../enums/cluster_export.ColorControl.StepMode.md), `stepSize`: `number`, `transitionTime`: `number`, `isEnhancedHue`: `boolean`) => [`MaybePromise`](../modules/util_export.md#maybepromise) ; `stepSaturationLogic`: (`stepMode`: [`StepMode`](../enums/cluster_export.ColorControl.StepMode.md), `stepSize`: `number`, `transitionTime`: `number`) => [`MaybePromise`](../modules/util_export.md#maybepromise) ; `stopAllColorMovement`: () => [`MaybePromise`](../modules/util_export.md#maybepromise) ; `stopColorLoopLogic`: () => [`MaybePromise`](../modules/util_export.md#maybepromise) ; `stopHueAndSaturationMovement`: () => [`MaybePromise`](../modules/util_export.md#maybepromise) ; `stopMoveStepLogic`: () => [`MaybePromise`](../modules/util_export.md#maybepromise) ; `switchColorMode`: (`oldMode`: [`ColorMode`](../enums/cluster_export.ColorControl.ColorMode.md), `newMode`: [`ColorMode`](../enums/cluster_export.ColorControl.ColorMode.md)) => [`MaybePromise`](../modules/util_export.md#maybepromise) ; `syncColorTemperatureWithLevelLogic`: (`level`: `number`) => [`MaybePromise`](../modules/util_export.md#maybepromise)  } & \{ `cluster`: [`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `colorCapabilities`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `colorLoop`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `colorTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `enhancedHue`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hueSaturation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `xy`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `colorMode`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`ColorMode`](../enums/cluster_export.ColorControl.ColorMode.md), `any`\> ; `colorPointBIntensity`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `colorPointBx`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointBy`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointGIntensity`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `colorPointGx`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointGy`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointRIntensity`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `colorPointRx`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointRy`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `compensationText`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`string`, `any`\> ; `driftCompensation`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`DriftCompensation`](../enums/cluster_export.ColorControl.DriftCompensation.md), `any`\> ; `enhancedColorMode`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`EnhancedColorMode`](../enums/cluster_export.ColorControl.EnhancedColorMode.md), `any`\> ; `numberOfPrimaries`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `options`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `primary1Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary1X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary1Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary2Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary2X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary2Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary3Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary3X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary3Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary4Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary4X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary4Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary5Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary5X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary5Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary6Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary6X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary6Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `remainingTime`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `whitePointX`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `whitePointY`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `currentHue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `currentSaturation`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>  } ; `commands`: \{ `moveHue`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<...\>, `void`, `any`\> ; `moveSaturation`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<...\>, `void`, `any`\> ; `moveToHue`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<...\>, `void`, `any`\> ; `moveToHueAndSaturation`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<...\>, `void`, `any`\> ; `moveToSaturation`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<...\>, `void`, `any`\> ; `stepHue`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<...\>, `void`, `any`\> ; `stepSaturation`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<...\>, `void`, `any`\>  }  } = HueSaturationComponent; `flags`: \{ `hueSaturation`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentX`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `currentY`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>  } ; `commands`: \{ `moveColor`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<...\>, `void`, `any`\> ; `moveToColor`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<...\>, `void`, `any`\> ; `stepColor`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<...\>, `void`, `any`\>  }  } = XyComponent; `flags`: \{ `xy`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `colorTempPhysicalMaxMireds`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `colorTempPhysicalMinMireds`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `colorTemperatureMireds`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `coupleColorTempToLevelMinMireds`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `startUpColorTemperatureMireds`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<... \| ..., `any`\>  } ; `commands`: \{ `moveColorTemperature`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<...\>, `void`, `any`\> ; `moveToColorTemperature`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<...\>, `void`, `any`\> ; `stepColorTemperature`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<...\>, `void`, `any`\>  }  } = ColorTemperatureComponent; `flags`: \{ `colorTemperature`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `enhancedCurrentHue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>  } ; `commands`: \{ `enhancedMoveHue`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<...\>, `void`, `any`\> ; `enhancedMoveToHue`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<...\>, `void`, `any`\> ; `enhancedMoveToHueAndSaturation`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<...\>, `void`, `any`\> ; `enhancedStepHue`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<...\>, `void`, `any`\>  }  } = EnhancedHueComponent; `flags`: \{ `enhancedHue`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `colorLoopActive`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`ColorLoopActive`](../enums/cluster_export.ColorControl.ColorLoopActive.md), `any`\> ; `colorLoopDirection`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`ColorLoopDirection`](../enums/cluster_export.ColorControl.ColorLoopDirection.md), `any`\> ; `colorLoopStartEnhancedHue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `colorLoopStoredEnhancedHue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `colorLoopTime`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>  } ; `commands`: \{ `colorLoopSet`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<...\>, `void`, `any`\>  }  } = ColorLoopComponent; `flags`: \{ `colorLoop`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `stopMoveStep`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<...\>, `void`, `any`\>  }  } = HueSaturationOrXyOrColorTemperatureComponent; `flags`: \{ `hueSaturation`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `stopMoveStep`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<...\>, `void`, `any`\>  }  } = HueSaturationOrXyOrColorTemperatureComponent; `flags`: \{ `xy`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `stopMoveStep`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<...\>, `void`, `any`\>  }  } = HueSaturationOrXyOrColorTemperatureComponent; `flags`: \{ `colorTemperature`: ``true`` = true }  }] ; `features`: \{ `colorLoop`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `colorTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `enhancedHue`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hueSaturation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `xy`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``768`` = 0x300; `name`: ``"ColorControl"`` = "ColorControl"; `revision`: ``5`` = 5 }\> ; `events`: [`ClusterEvents`](../modules/behavior_cluster_export.md#clusterevents)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `colorCapabilities`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `colorLoop`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `colorTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `enhancedHue`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hueSaturation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `xy`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `colorMode`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`ColorMode`](../enums/cluster_export.ColorControl.ColorMode.md), `any`\> ; `colorPointBIntensity`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `colorPointBx`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointBy`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointGIntensity`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `colorPointGx`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointGy`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointRIntensity`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `colorPointRx`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointRy`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `compensationText`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`string`, `any`\> ; `driftCompensation`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`DriftCompensation`](../enums/cluster_export.ColorControl.DriftCompensation.md), `any`\> ; `enhancedColorMode`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`EnhancedColorMode`](../enums/cluster_export.ColorControl.EnhancedColorMode.md), `any`\> ; `numberOfPrimaries`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `options`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `primary1Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary1X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary1Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary2Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary2X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary2Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary3Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary3X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary3Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary4Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary4X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary4Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary5Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary5X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary5Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary6Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary6X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary6Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `remainingTime`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `whitePointX`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `whitePointY`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `currentHue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\> ; `currentSaturation`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\>  } ; `commands`: \{ `moveHue`: [`Command`](../interfaces/cluster_export.Command.md)\<..., ..., ...\> ; `moveSaturation`: [`Command`](../interfaces/cluster_export.Command.md)\<..., ..., ...\> ; `moveToHue`: [`Command`](../interfaces/cluster_export.Command.md)\<..., ..., ...\> ; `moveToHueAndSaturation`: [`Command`](../interfaces/cluster_export.Command.md)\<..., ..., ...\> ; `moveToSaturation`: [`Command`](../interfaces/cluster_export.Command.md)\<..., ..., ...\> ; `stepHue`: [`Command`](../interfaces/cluster_export.Command.md)\<..., ..., ...\> ; `stepSaturation`: [`Command`](../interfaces/cluster_export.Command.md)\<..., ..., ...\>  }  } = HueSaturationComponent; `flags`: \{ `hueSaturation`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentX`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\> ; `currentY`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\>  } ; `commands`: \{ `moveColor`: [`Command`](../interfaces/cluster_export.Command.md)\<..., ..., ...\> ; `moveToColor`: [`Command`](../interfaces/cluster_export.Command.md)\<..., ..., ...\> ; `stepColor`: [`Command`](../interfaces/cluster_export.Command.md)\<..., ..., ...\>  }  } = XyComponent; `flags`: \{ `xy`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `colorTempPhysicalMaxMireds`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\> ; `colorTempPhysicalMinMireds`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\> ; `colorTemperatureMireds`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\> ; `coupleColorTempToLevelMinMireds`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<..., ...\> ; `startUpColorTemperatureMireds`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<..., ...\>  } ; `commands`: \{ `moveColorTemperature`: [`Command`](../interfaces/cluster_export.Command.md)\<..., ..., ...\> ; `moveToColorTemperature`: [`Command`](../interfaces/cluster_export.Command.md)\<..., ..., ...\> ; `stepColorTemperature`: [`Command`](../interfaces/cluster_export.Command.md)\<..., ..., ...\>  }  } = ColorTemperatureComponent; `flags`: \{ `colorTemperature`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `enhancedCurrentHue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\>  } ; `commands`: \{ `enhancedMoveHue`: [`Command`](../interfaces/cluster_export.Command.md)\<..., ..., ...\> ; `enhancedMoveToHue`: [`Command`](../interfaces/cluster_export.Command.md)\<..., ..., ...\> ; `enhancedMoveToHueAndSaturation`: [`Command`](../interfaces/cluster_export.Command.md)\<..., ..., ...\> ; `enhancedStepHue`: [`Command`](../interfaces/cluster_export.Command.md)\<..., ..., ...\>  }  } = EnhancedHueComponent; `flags`: \{ `enhancedHue`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `colorLoopActive`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\> ; `colorLoopDirection`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\> ; `colorLoopStartEnhancedHue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\> ; `colorLoopStoredEnhancedHue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\> ; `colorLoopTime`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\>  } ; `commands`: \{ `colorLoopSet`: [`Command`](../interfaces/cluster_export.Command.md)\<..., ..., ...\>  }  } = ColorLoopComponent; `flags`: \{ `colorLoop`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `stopMoveStep`: [`Command`](../interfaces/cluster_export.Command.md)\<..., ..., ...\>  }  } = HueSaturationOrXyOrColorTemperatureComponent; `flags`: \{ `hueSaturation`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `stopMoveStep`: [`Command`](../interfaces/cluster_export.Command.md)\<..., ..., ...\>  }  } = HueSaturationOrXyOrColorTemperatureComponent; `flags`: \{ `xy`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `stopMoveStep`: [`Command`](../interfaces/cluster_export.Command.md)\<..., ..., ...\>  }  } = HueSaturationOrXyOrColorTemperatureComponent; `flags`: \{ `colorTemperature`: ``true`` = true }  }] ; `features`: \{ `colorLoop`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `colorTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `enhancedHue`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hueSaturation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `xy`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``768`` = 0x300; `name`: ``"ColorControl"`` = "ColorControl"; `revision`: ``5`` = 5 }\>, typeof [`ColorControlServerLogic`](../modules/behavior_definitions_color_control_export.ColorControlServerLogic.md)\> ; `features`: {} ; `state`: [`ClusterState`](../modules/behavior_cluster_export.md#clusterstate)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `colorCapabilities`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `colorLoop`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `colorTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `enhancedHue`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hueSaturation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `xy`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `colorMode`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`ColorMode`](../enums/cluster_export.ColorControl.ColorMode.md), `any`\> ; `colorPointBIntensity`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `colorPointBx`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointBy`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointGIntensity`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `colorPointGx`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointGy`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointRIntensity`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `colorPointRx`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointRy`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `compensationText`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`string`, `any`\> ; `driftCompensation`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`DriftCompensation`](../enums/cluster_export.ColorControl.DriftCompensation.md), `any`\> ; `enhancedColorMode`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`EnhancedColorMode`](../enums/cluster_export.ColorControl.EnhancedColorMode.md), `any`\> ; `numberOfPrimaries`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `options`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `primary1Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary1X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary1Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary2Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary2X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary2Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary3Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary3X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary3Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary4Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary4X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary4Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary5Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary5X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary5Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary6Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary6X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary6Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `remainingTime`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `whitePointX`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `whitePointY`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `currentHue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\> ; `currentSaturation`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\>  } ; `commands`: \{ `moveHue`: [`Command`](../interfaces/cluster_export.Command.md)\<..., ..., ...\> ; `moveSaturation`: [`Command`](../interfaces/cluster_export.Command.md)\<..., ..., ...\> ; `moveToHue`: [`Command`](../interfaces/cluster_export.Command.md)\<..., ..., ...\> ; `moveToHueAndSaturation`: [`Command`](../interfaces/cluster_export.Command.md)\<..., ..., ...\> ; `moveToSaturation`: [`Command`](../interfaces/cluster_export.Command.md)\<..., ..., ...\> ; `stepHue`: [`Command`](../interfaces/cluster_export.Command.md)\<..., ..., ...\> ; `stepSaturation`: [`Command`](../interfaces/cluster_export.Command.md)\<..., ..., ...\>  }  } = HueSaturationComponent; `flags`: \{ `hueSaturation`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentX`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\> ; `currentY`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\>  } ; `commands`: \{ `moveColor`: [`Command`](../interfaces/cluster_export.Command.md)\<..., ..., ...\> ; `moveToColor`: [`Command`](../interfaces/cluster_export.Command.md)\<..., ..., ...\> ; `stepColor`: [`Command`](../interfaces/cluster_export.Command.md)\<..., ..., ...\>  }  } = XyComponent; `flags`: \{ `xy`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `colorTempPhysicalMaxMireds`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\> ; `colorTempPhysicalMinMireds`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\> ; `colorTemperatureMireds`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\> ; `coupleColorTempToLevelMinMireds`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<..., ...\> ; `startUpColorTemperatureMireds`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<..., ...\>  } ; `commands`: \{ `moveColorTemperature`: [`Command`](../interfaces/cluster_export.Command.md)\<..., ..., ...\> ; `moveToColorTemperature`: [`Command`](../interfaces/cluster_export.Command.md)\<..., ..., ...\> ; `stepColorTemperature`: [`Command`](../interfaces/cluster_export.Command.md)\<..., ..., ...\>  }  } = ColorTemperatureComponent; `flags`: \{ `colorTemperature`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `enhancedCurrentHue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\>  } ; `commands`: \{ `enhancedMoveHue`: [`Command`](../interfaces/cluster_export.Command.md)\<..., ..., ...\> ; `enhancedMoveToHue`: [`Command`](../interfaces/cluster_export.Command.md)\<..., ..., ...\> ; `enhancedMoveToHueAndSaturation`: [`Command`](../interfaces/cluster_export.Command.md)\<..., ..., ...\> ; `enhancedStepHue`: [`Command`](../interfaces/cluster_export.Command.md)\<..., ..., ...\>  }  } = EnhancedHueComponent; `flags`: \{ `enhancedHue`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `colorLoopActive`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\> ; `colorLoopDirection`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\> ; `colorLoopStartEnhancedHue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\> ; `colorLoopStoredEnhancedHue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\> ; `colorLoopTime`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\>  } ; `commands`: \{ `colorLoopSet`: [`Command`](../interfaces/cluster_export.Command.md)\<..., ..., ...\>  }  } = ColorLoopComponent; `flags`: \{ `colorLoop`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `stopMoveStep`: [`Command`](../interfaces/cluster_export.Command.md)\<..., ..., ...\>  }  } = HueSaturationOrXyOrColorTemperatureComponent; `flags`: \{ `hueSaturation`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `stopMoveStep`: [`Command`](../interfaces/cluster_export.Command.md)\<..., ..., ...\>  }  } = HueSaturationOrXyOrColorTemperatureComponent; `flags`: \{ `xy`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `stopMoveStep`: [`Command`](../interfaces/cluster_export.Command.md)\<..., ..., ...\>  }  } = HueSaturationOrXyOrColorTemperatureComponent; `flags`: \{ `colorTemperature`: ``true`` = true }  }] ; `features`: \{ `colorLoop`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `colorTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `enhancedHue`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hueSaturation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `xy`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``768`` = 0x300; `name`: ``"ColorControl"`` = "ColorControl"; `revision`: ``5`` = 5 }\>, typeof [`ColorControlServerLogic`](../modules/behavior_definitions_color_control_export.ColorControlServerLogic.md)\> ; `[asyncDispose]`: () => [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>  }

  ↳ **`ColorControlServer`**

## Table of contents

### Constructors

- [constructor](behavior_definitions_color_control_export.ColorControlServer.md#constructor)

### Properties

- [#agent](behavior_definitions_color_control_export.ColorControlServer.md##agent)
- [[reference]](behavior_definitions_color_control_export.ColorControlServer.md#[reference])
- [agent](behavior_definitions_color_control_export.ColorControlServer.md#agent)
- [cluster](behavior_definitions_color_control_export.ColorControlServer.md#cluster)
- [colorPointBx](behavior_definitions_color_control_export.ColorControlServer.md#colorpointbx)
- [colorPointGx](behavior_definitions_color_control_export.ColorControlServer.md#colorpointgx)
- [colorPointGy](behavior_definitions_color_control_export.ColorControlServer.md#colorpointgy)
- [colorPointRx](behavior_definitions_color_control_export.ColorControlServer.md#colorpointrx)
- [colorPointRy](behavior_definitions_color_control_export.ColorControlServer.md#colorpointry)
- [context](behavior_definitions_color_control_export.ColorControlServer.md#context)
- [endpoint](behavior_definitions_color_control_export.ColorControlServer.md#endpoint)
- [enhancedHue](behavior_definitions_color_control_export.ColorControlServer.md#enhancedhue)
- [events](behavior_definitions_color_control_export.ColorControlServer.md#events)
- [features](behavior_definitions_color_control_export.ColorControlServer.md#features)
- [hue](behavior_definitions_color_control_export.ColorControlServer.md#hue)
- [kelvin](behavior_definitions_color_control_export.ColorControlServer.md#kelvin)
- [maximumColorTemperatureMireds](behavior_definitions_color_control_export.ColorControlServer.md#maximumcolortemperaturemireds)
- [minimumColorTemperatureMireds](behavior_definitions_color_control_export.ColorControlServer.md#minimumcolortemperaturemireds)
- [mireds](behavior_definitions_color_control_export.ColorControlServer.md#mireds)
- [saturation](behavior_definitions_color_control_export.ColorControlServer.md#saturation)
- [session](behavior_definitions_color_control_export.ColorControlServer.md#session)
- [state](behavior_definitions_color_control_export.ColorControlServer.md#state)
- [whitePointX](behavior_definitions_color_control_export.ColorControlServer.md#whitepointx)
- [whitePointY](behavior_definitions_color_control_export.ColorControlServer.md#whitepointy)
- [x](behavior_definitions_color_control_export.ColorControlServer.md#x)
- [y](behavior_definitions_color_control_export.ColorControlServer.md#y)
- [Events](behavior_definitions_color_control_export.ColorControlServer.md#events-1)
- [ExtensionInterface](behavior_definitions_color_control_export.ColorControlServer.md#extensioninterface)
- [Interface](behavior_definitions_color_control_export.ColorControlServer.md#interface)
- [Internal](behavior_definitions_color_control_export.ColorControlServer.md#internal)
- [State](behavior_definitions_color_control_export.ColorControlServer.md#state-1)
- [cluster](behavior_definitions_color_control_export.ColorControlServer.md#cluster-1)
- [defaults](behavior_definitions_color_control_export.ColorControlServer.md#defaults)
- [dependencies](behavior_definitions_color_control_export.ColorControlServer.md#dependencies)
- [early](behavior_definitions_color_control_export.ColorControlServer.md#early)
- [id](behavior_definitions_color_control_export.ColorControlServer.md#id)
- [name](behavior_definitions_color_control_export.ColorControlServer.md#name)
- [schema](behavior_definitions_color_control_export.ColorControlServer.md#schema)
- [supervisor](behavior_definitions_color_control_export.ColorControlServer.md#supervisor)
- [supports](behavior_definitions_color_control_export.ColorControlServer.md#supports)

### Methods

- [[asyncDispose]](behavior_definitions_color_control_export.ColorControlServer.md#[asyncdispose])
- [asAdmin](behavior_definitions_color_control_export.ColorControlServer.md#asadmin)
- [assertAttributeEnabled](behavior_definitions_color_control_export.ColorControlServer.md#assertattributeenabled)
- [callback](behavior_definitions_color_control_export.ColorControlServer.md#callback)
- [initialize](behavior_definitions_color_control_export.ColorControlServer.md#initialize)
- [moveColorLogic](behavior_definitions_color_control_export.ColorControlServer.md#movecolorlogic)
- [moveColorTemperatureLogic](behavior_definitions_color_control_export.ColorControlServer.md#movecolortemperaturelogic)
- [moveHueLogic](behavior_definitions_color_control_export.ColorControlServer.md#movehuelogic)
- [moveSaturationLogic](behavior_definitions_color_control_export.ColorControlServer.md#movesaturationlogic)
- [moveToColorLogic](behavior_definitions_color_control_export.ColorControlServer.md#movetocolorlogic)
- [moveToColorTemperatureLogic](behavior_definitions_color_control_export.ColorControlServer.md#movetocolortemperaturelogic)
- [moveToEnhancedHueAndSaturationLogic](behavior_definitions_color_control_export.ColorControlServer.md#movetoenhancedhueandsaturationlogic)
- [moveToHueAndSaturationLogic](behavior_definitions_color_control_export.ColorControlServer.md#movetohueandsaturationlogic)
- [moveToHueLogic](behavior_definitions_color_control_export.ColorControlServer.md#movetohuelogic)
- [moveToSaturationLogic](behavior_definitions_color_control_export.ColorControlServer.md#movetosaturationlogic)
- [reactTo](behavior_definitions_color_control_export.ColorControlServer.md#reactto)
- [requireAttributeEnabled](behavior_definitions_color_control_export.ColorControlServer.md#requireattributeenabled)
- [setColorMode](behavior_definitions_color_control_export.ColorControlServer.md#setcolormode)
- [setEnhancedColorMode](behavior_definitions_color_control_export.ColorControlServer.md#setenhancedcolormode)
- [startColorLoopLogic](behavior_definitions_color_control_export.ColorControlServer.md#startcolorlooplogic)
- [stepColorLogic](behavior_definitions_color_control_export.ColorControlServer.md#stepcolorlogic)
- [stepColorTemperatureLogic](behavior_definitions_color_control_export.ColorControlServer.md#stepcolortemperaturelogic)
- [stepHueLogic](behavior_definitions_color_control_export.ColorControlServer.md#stephuelogic)
- [stepSaturationLogic](behavior_definitions_color_control_export.ColorControlServer.md#stepsaturationlogic)
- [stopAllColorMovement](behavior_definitions_color_control_export.ColorControlServer.md#stopallcolormovement)
- [stopColorLoopLogic](behavior_definitions_color_control_export.ColorControlServer.md#stopcolorlooplogic)
- [stopHueAndSaturationMovement](behavior_definitions_color_control_export.ColorControlServer.md#stophueandsaturationmovement)
- [stopMoveStepLogic](behavior_definitions_color_control_export.ColorControlServer.md#stopmovesteplogic)
- [switchColorMode](behavior_definitions_color_control_export.ColorControlServer.md#switchcolormode)
- [syncColorTemperatureWithLevel](behavior_definitions_color_control_export.ColorControlServer.md#synccolortemperaturewithlevel)
- [syncColorTemperatureWithLevelLogic](behavior_definitions_color_control_export.ColorControlServer.md#synccolortemperaturewithlevellogic)
- [toString](behavior_definitions_color_control_export.ColorControlServer.md#tostring)
- [alter](behavior_definitions_color_control_export.ColorControlServer.md#alter)
- [enable](behavior_definitions_color_control_export.ColorControlServer.md#enable)
- [for](behavior_definitions_color_control_export.ColorControlServer.md#for)
- [set](behavior_definitions_color_control_export.ColorControlServer.md#set)
- [with](behavior_definitions_color_control_export.ColorControlServer.md#with)

## Constructors

### constructor

• **new ColorControlServer**(`agent`, `backing`): [`ColorControlServer`](behavior_definitions_color_control_export.ColorControlServer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `agent` | [`Agent`](endpoint_export.Agent-1.md) |
| `backing` | [`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md) |

#### Returns

[`ColorControlServer`](behavior_definitions_color_control_export.ColorControlServer.md)

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).constructor

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:201](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L201)

## Properties

### #agent

• `Private` **#agent**: [`Agent`](endpoint_export.Agent-1.md)

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).#agent

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L51)

___

### [reference]

• **[reference]**: [`Datasource`](../interfaces/behavior_cluster_export._internal_.Datasource-1.md)\<[`StateType`](../interfaces/behavior_cluster_export._internal_.StateType.md)\>

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).[reference]

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L274)

___

### agent

• **agent**: [`Agent`](endpoint_export.Agent-1.md)

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).agent

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L80)

___

### cluster

• **cluster**: `never`

The implemented cluster.

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).cluster

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:306](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L306)

___

### colorPointBx

• **colorPointBx**: `undefined` \| `number`

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).colorPointBx

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:338](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L338)

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:346](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L346)

___

### colorPointGx

• **colorPointGx**: `undefined` \| `number`

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).colorPointGx

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:312](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L312)

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:320](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L320)

___

### colorPointGy

• **colorPointGy**: `undefined` \| `number`

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).colorPointGy

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:325](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L325)

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:333](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L333)

___

### colorPointRx

• **colorPointRx**: `undefined` \| `number`

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).colorPointRx

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:286](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L286)

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:294](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L294)

___

### colorPointRy

• **colorPointRy**: `undefined` \| `number`

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).colorPointRy

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:299](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L299)

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:307](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L307)

___

### context

• **context**: [`ActionContext`](../interfaces/behavior_cluster_export._internal_.ActionContext.md)

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).context

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L94)

___

### endpoint

• **endpoint**: [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).endpoint

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L87)

___

### enhancedHue

• **enhancedHue**: `number`

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).enhancedHue

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:186](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L186)

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:193](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L193)

___

### events

• `Readonly` **events**: [`EventEmitter`](util_export.EventEmitter-1.md) & `Omit`\<[`ClusterEvents`](../modules/behavior_cluster_export.md#clusterevents)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.ColorControl.Cluster.md), readonly [[`HueSaturation`](../enums/cluster_export.ColorControl.Feature.md#huesaturation), [`EnhancedHue`](../enums/cluster_export.ColorControl.Feature.md#enhancedhue), [`ColorLoop`](../enums/cluster_export.ColorControl.Feature.md#colorloop), [`Xy`](../enums/cluster_export.ColorControl.Feature.md#xy), [`ColorTemperature`](../enums/cluster_export.ColorControl.Feature.md#colortemperature)]\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.ColorControl.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`ColorControlInterface`](../modules/behavior_definitions_color_control_export.md#colorcontrolinterface)\>, [`ColorControlInterface`](../modules/behavior_definitions_color_control_export.md#colorcontrolinterface)\>\>, ``"colorMode$Changing"`` \| ``"options$Changing"`` \| ``"numberOfPrimaries$Changing"`` \| ``"enhancedColorMode$Changing"`` \| ``"colorCapabilities$Changing"`` \| ``"remainingTime$Changing"`` \| ``"driftCompensation$Changing"`` \| ``"compensationText$Changing"`` \| ``"primary1X$Changing"`` \| ``"primary1Y$Changing"`` \| ``"primary1Intensity$Changing"`` \| ``"primary2X$Changing"`` \| ``"primary2Y$Changing"`` \| ``"primary2Intensity$Changing"`` \| ``"primary3X$Changing"`` \| ``"primary3Y$Changing"`` \| ``"primary3Intensity$Changing"`` \| ``"primary4X$Changing"`` \| ``"primary4Y$Changing"`` \| ``"primary4Intensity$Changing"`` \| ``"primary5X$Changing"`` \| ``"primary5Y$Changing"`` \| ``"primary5Intensity$Changing"`` \| ``"primary6X$Changing"`` \| ``"primary6Y$Changing"`` \| ``"primary6Intensity$Changing"`` \| ``"whitePointX$Changing"`` \| ``"whitePointY$Changing"`` \| ``"colorPointRx$Changing"`` \| ``"colorPointRy$Changing"`` \| ``"colorPointRIntensity$Changing"`` \| ``"colorPointGx$Changing"`` \| ``"colorPointGy$Changing"`` \| ``"colorPointGIntensity$Changing"`` \| ``"colorPointBx$Changing"`` \| ``"colorPointBy$Changing"`` \| ``"colorPointBIntensity$Changing"`` \| ``"colorMode$Changed"`` \| ``"options$Changed"`` \| ``"numberOfPrimaries$Changed"`` \| ``"enhancedColorMode$Changed"`` \| ``"colorCapabilities$Changed"`` \| ``"remainingTime$Changed"`` \| ``"driftCompensation$Changed"`` \| ``"compensationText$Changed"`` \| ``"primary1X$Changed"`` \| ``"primary1Y$Changed"`` \| ``"primary1Intensity$Changed"`` \| ``"primary2X$Changed"`` \| ``"primary2Y$Changed"`` \| ``"primary2Intensity$Changed"`` \| ``"primary3X$Changed"`` \| ``"primary3Y$Changed"`` \| ``"primary3Intensity$Changed"`` \| ``"primary4X$Changed"`` \| ``"primary4Y$Changed"`` \| ``"primary4Intensity$Changed"`` \| ``"primary5X$Changed"`` \| ``"primary5Y$Changed"`` \| ``"primary5Intensity$Changed"`` \| ``"primary6X$Changed"`` \| ``"primary6Y$Changed"`` \| ``"primary6Intensity$Changed"`` \| ``"whitePointX$Changed"`` \| ``"whitePointY$Changed"`` \| ``"colorPointRx$Changed"`` \| ``"colorPointRy$Changed"`` \| ``"colorPointRIntensity$Changed"`` \| ``"colorPointGx$Changed"`` \| ``"colorPointGy$Changed"`` \| ``"colorPointGIntensity$Changed"`` \| ``"colorPointBx$Changed"`` \| ``"colorPointBy$Changed"`` \| ``"colorPointBIntensity$Changed"`` \| ``"colorTemperatureMireds$Changing"`` \| ``"currentHue$Changing"`` \| ``"currentSaturation$Changing"`` \| ``"currentX$Changing"`` \| ``"currentY$Changing"`` \| ``"colorTempPhysicalMinMireds$Changing"`` \| ``"colorTempPhysicalMaxMireds$Changing"`` \| ``"enhancedCurrentHue$Changing"`` \| ``"colorLoopActive$Changing"`` \| ``"colorLoopDirection$Changing"`` \| ``"colorLoopTime$Changing"`` \| ``"colorLoopStartEnhancedHue$Changing"`` \| ``"colorLoopStoredEnhancedHue$Changing"`` \| ``"coupleColorTempToLevelMinMireds$Changing"`` \| ``"startUpColorTemperatureMireds$Changing"`` \| ``"colorTemperatureMireds$Changed"`` \| ``"currentHue$Changed"`` \| ``"currentSaturation$Changed"`` \| ``"currentX$Changed"`` \| ``"currentY$Changed"`` \| ``"colorTempPhysicalMinMireds$Changed"`` \| ``"colorTempPhysicalMaxMireds$Changed"`` \| ``"enhancedCurrentHue$Changed"`` \| ``"colorLoopActive$Changed"`` \| ``"colorLoopDirection$Changed"`` \| ``"colorLoopTime$Changed"`` \| ``"colorLoopStartEnhancedHue$Changed"`` \| ``"colorLoopStoredEnhancedHue$Changed"`` \| ``"coupleColorTempToLevelMinMireds$Changed"`` \| ``"startUpColorTemperatureMireds$Changed"``\> & \{ `colorCapabilities$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `colorLoop`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `colorTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `enhancedHue`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hueSaturation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `xy`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>\> ; `colorMode$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`ColorMode`](../enums/cluster_export.ColorControl.ColorMode.md), `any`\>\> ; `enhancedColorMode$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`EnhancedColorMode`](../enums/cluster_export.ColorControl.EnhancedColorMode.md), `any`\>\> ; `numberOfPrimaries$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>\> ; `options$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>\>  } & \{ `colorPointBIntensity$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\>\> ; `colorPointBx$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `colorPointBy$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `colorPointGIntensity$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\>\> ; `colorPointGx$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `colorPointGy$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `colorPointRIntensity$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\>\> ; `colorPointRx$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `colorPointRy$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `compensationText$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`string`, `any`\>\> ; `driftCompensation$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`DriftCompensation`](../enums/cluster_export.ColorControl.DriftCompensation.md), `any`\>\> ; `primary1Intensity$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\>\> ; `primary1X$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary1Y$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary2Intensity$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\>\> ; `primary2X$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary2Y$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary3Intensity$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\>\> ; `primary3X$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary3Y$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary4Intensity$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\>\> ; `primary4X$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary4Y$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary5Intensity$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\>\> ; `primary5X$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary5Y$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary6Intensity$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\>\> ; `primary6X$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary6Y$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `remainingTime$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>\> ; `whitePointX$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `whitePointY$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\>  } & \{ `colorCapabilities$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `colorLoop`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `colorTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `enhancedHue`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hueSaturation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `xy`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>\> ; `colorMode$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`ColorMode`](../enums/cluster_export.ColorControl.ColorMode.md), `any`\>\> ; `enhancedColorMode$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`EnhancedColorMode`](../enums/cluster_export.ColorControl.EnhancedColorMode.md), `any`\>\> ; `numberOfPrimaries$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>\> ; `options$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>\>  } & \{ `colorPointBIntensity$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\>\> ; `colorPointBx$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `colorPointBy$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `colorPointGIntensity$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\>\> ; `colorPointGx$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `colorPointGy$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `colorPointRIntensity$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\>\> ; `colorPointRx$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `colorPointRy$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `compensationText$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`string`, `any`\>\> ; `driftCompensation$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`DriftCompensation`](../enums/cluster_export.ColorControl.DriftCompensation.md), `any`\>\> ; `primary1Intensity$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\>\> ; `primary1X$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary1Y$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary2Intensity$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\>\> ; `primary2X$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary2Y$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary3Intensity$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\>\> ; `primary3X$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary3Y$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary4Intensity$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\>\> ; `primary4X$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary4Y$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary5Intensity$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\>\> ; `primary5X$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary5Y$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary6Intensity$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\>\> ; `primary6X$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary6Y$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `remainingTime$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>\> ; `whitePointX$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `whitePointY$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\>  } & {} & {}

Access the behavior's events.

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).events

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:145](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L145)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:316](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L316)

___

### features

• **features**: [`FeaturesAsFlags`](../modules/cluster_export.ClusterComposer.md#featuresasflags)\<[`Cluster`](../interfaces/cluster_export.ColorControl.Cluster.md), readonly [[`HueSaturation`](../enums/cluster_export.ColorControl.Feature.md#huesaturation), [`EnhancedHue`](../enums/cluster_export.ColorControl.Feature.md#enhancedhue), [`ColorLoop`](../enums/cluster_export.ColorControl.Feature.md#colorloop), [`Xy`](../enums/cluster_export.ColorControl.Feature.md#xy), [`ColorTemperature`](../enums/cluster_export.ColorControl.Feature.md#colortemperature)]\>

Supported features as a flag object.

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).features

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:321](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L321)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:321](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L321)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:321](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L321)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:321](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L321)

___

### hue

• **hue**: `number`

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).hue

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:174](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L174)

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:181](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L181)

___

### kelvin

• **kelvin**: `number`

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).kelvin

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:230](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L230)

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:235](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L235)

___

### maximumColorTemperatureMireds

• **maximumColorTemperatureMireds**: `number`

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).maximumColorTemperatureMireds

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:253](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L253)

___

### minimumColorTemperatureMireds

• **minimumColorTemperatureMireds**: `number`

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).minimumColorTemperatureMireds

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:243](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L243)

___

### mireds

• **mireds**: `number`

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).mireds

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:214](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L214)

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:221](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L221)

___

### saturation

• **saturation**: `number`

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).saturation

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:198](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L198)

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:205](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L205)

___

### session

• **session**: [`SecureSession`](session_export.SecureSession.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).session

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L101)

___

### state

• `Readonly` **state**: `Omit`\<[`State`](behavior_definitions_color_control_export.ColorControlServerLogic.State.md), ``"options"`` \| ``"remainingTime"`` \| ``"colorTemperatureMireds"`` \| ``"currentHue"`` \| ``"currentSaturation"`` \| ``"currentX"`` \| ``"currentY"`` \| ``"colorTempPhysicalMinMireds"`` \| ``"colorTempPhysicalMaxMireds"`` \| ``"coupleColorTempToLevelMinMireds"`` \| ``"startUpColorTemperatureMireds"`` \| ``"enhancedCurrentHue"`` \| ``"colorLoopActive"`` \| ``"colorLoopDirection"`` \| ``"colorLoopTime"`` \| ``"colorLoopStartEnhancedHue"`` \| ``"colorLoopStoredEnhancedHue"`` \| ``"driftCompensation"`` \| ``"compensationText"`` \| ``"colorMode"`` \| ``"numberOfPrimaries"`` \| ``"primary1X"`` \| ``"primary1Y"`` \| ``"primary1Intensity"`` \| ``"primary2X"`` \| ``"primary2Y"`` \| ``"primary2Intensity"`` \| ``"primary3X"`` \| ``"primary3Y"`` \| ``"primary3Intensity"`` \| ``"primary4X"`` \| ``"primary4Y"`` \| ``"primary4Intensity"`` \| ``"primary5X"`` \| ``"primary5Y"`` \| ``"primary5Intensity"`` \| ``"primary6X"`` \| ``"primary6Y"`` \| ``"primary6Intensity"`` \| ``"whitePointX"`` \| ``"whitePointY"`` \| ``"colorPointRx"`` \| ``"colorPointRy"`` \| ``"colorPointRIntensity"`` \| ``"colorPointGx"`` \| ``"colorPointGy"`` \| ``"colorPointGIntensity"`` \| ``"colorPointBx"`` \| ``"colorPointBy"`` \| ``"colorPointBIntensity"`` \| ``"enhancedColorMode"`` \| ``"colorCapabilities"``\> & \{ `colorCapabilities`: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `colorLoop`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `colorTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `enhancedHue`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hueSaturation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `xy`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\> ; `colorMode`: [`ColorMode`](../enums/cluster_export.ColorControl.ColorMode.md) ; `enhancedColorMode`: [`EnhancedColorMode`](../enums/cluster_export.ColorControl.EnhancedColorMode.md) ; `options`: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>  } & \{ `colorPointBIntensity?`: ``null`` \| `number` ; `colorPointBx?`: `number` ; `colorPointBy?`: `number` ; `colorPointGIntensity?`: ``null`` \| `number` ; `colorPointGx?`: `number` ; `colorPointGy?`: `number` ; `colorPointRIntensity?`: ``null`` \| `number` ; `colorPointRx?`: `number` ; `colorPointRy?`: `number` ; `compensationText?`: `string` ; `driftCompensation?`: [`DriftCompensation`](../enums/cluster_export.ColorControl.DriftCompensation.md) ; `remainingTime?`: `number` ; `whitePointX?`: `number` ; `whitePointY?`: `number`  } & \{ `numberOfPrimaries`: ``null`` \| `number`  } & \{ `primary1Intensity?`: ``null`` \| `number` ; `primary1X?`: `number` ; `primary1Y?`: `number` ; `primary2Intensity?`: ``null`` \| `number` ; `primary2X?`: `number` ; `primary2Y?`: `number` ; `primary3Intensity?`: ``null`` \| `number` ; `primary3X?`: `number` ; `primary3Y?`: `number` ; `primary4Intensity?`: ``null`` \| `number` ; `primary4X?`: `number` ; `primary4Y?`: `number` ; `primary5Intensity?`: ``null`` \| `number` ; `primary5X?`: `number` ; `primary5Y?`: `number` ; `primary6Intensity?`: ``null`` \| `number` ; `primary6X?`: `number` ; `primary6Y?`: `number`  }

Access the behavior's state.

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).state

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:140](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L140)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:311](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L311)

___

### whitePointX

• **whitePointX**: `undefined` \| `number`

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).whitePointX

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:260](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L260)

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:268](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L268)

___

### whitePointY

• **whitePointY**: `undefined` \| `number`

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).whitePointY

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:273](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L273)

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:281](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L281)

___

### x

• **x**: `number`

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).x

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:146](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L146)

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:154](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L154)

___

### y

• **y**: `number`

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).y

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:159](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L159)

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:167](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L167)

___

### Events

▪ `Static` `Readonly` **Events**: [`Type`](../modules/behavior_cluster_export.ClusterEvents.md#type)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `colorCapabilities`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `colorLoop`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `colorTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `enhancedHue`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hueSaturation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `xy`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `colorMode`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`ColorMode`](../enums/cluster_export.ColorControl.ColorMode.md), `any`\> ; `colorPointBIntensity`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `colorPointBx`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointBy`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointGIntensity`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `colorPointGx`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointGy`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointRIntensity`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `colorPointRx`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointRy`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `compensationText`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`string`, `any`\> ; `driftCompensation`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`DriftCompensation`](../enums/cluster_export.ColorControl.DriftCompensation.md), `any`\> ; `enhancedColorMode`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`EnhancedColorMode`](../enums/cluster_export.ColorControl.EnhancedColorMode.md), `any`\> ; `numberOfPrimaries`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `options`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `primary1Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary1X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary1Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary2Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary2X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary2Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary3Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary3X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary3Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary4Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary4X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary4Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary5Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary5X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary5Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary6Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary6X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary6Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `remainingTime`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `whitePointX`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `whitePointY`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `currentHue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `currentSaturation`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>  } ; `commands`: \{ `moveHue`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\> ; `moveSaturation`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\> ; `moveToHue`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `direction`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `hue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\> ; `moveToHueAndSaturation`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `hue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `saturation`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\> ; `moveToSaturation`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `saturation`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\> ; `stepHue`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\> ; `stepSaturation`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = HueSaturationComponent; `flags`: \{ `hueSaturation`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentX`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `currentY`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>  } ; `commands`: \{ `moveColor`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `rateX`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `rateY`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\> ; `moveToColor`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `colorX`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `colorY`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\> ; `stepColor`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `stepX`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `stepY`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = XyComponent; `flags`: \{ `xy`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `colorTempPhysicalMaxMireds`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `colorTempPhysicalMinMireds`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `colorTemperatureMireds`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `coupleColorTempToLevelMinMireds`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `startUpColorTemperatureMireds`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `moveColorTemperature`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `colorTemperatureMaximumMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `colorTemperatureMinimumMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\> ; `moveToColorTemperature`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `colorTemperatureMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\> ; `stepColorTemperature`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `colorTemperatureMaximumMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `colorTemperatureMinimumMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = ColorTemperatureComponent; `flags`: \{ `colorTemperature`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `enhancedCurrentHue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>  } ; `commands`: \{ `enhancedMoveHue`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\> ; `enhancedMoveToHue`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `direction`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `enhancedHue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\> ; `enhancedMoveToHueAndSaturation`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `enhancedHue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `saturation`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\> ; `enhancedStepHue`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = EnhancedHueComponent; `flags`: \{ `enhancedHue`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `colorLoopActive`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`ColorLoopActive`](../enums/cluster_export.ColorControl.ColorLoopActive.md), `any`\> ; `colorLoopDirection`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`ColorLoopDirection`](../enums/cluster_export.ColorControl.ColorLoopDirection.md), `any`\> ; `colorLoopStartEnhancedHue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `colorLoopStoredEnhancedHue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `colorLoopTime`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>  } ; `commands`: \{ `colorLoopSet`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `action`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `direction`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `startHue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `time`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `updateFlags`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = ColorLoopComponent; `flags`: \{ `colorLoop`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `stopMoveStep`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = HueSaturationOrXyOrColorTemperatureComponent; `flags`: \{ `hueSaturation`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `stopMoveStep`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = HueSaturationOrXyOrColorTemperatureComponent; `flags`: \{ `xy`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `stopMoveStep`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = HueSaturationOrXyOrColorTemperatureComponent; `flags`: \{ `colorTemperature`: ``true`` = true }  }] ; `features`: \{ `colorLoop`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `colorTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `enhancedHue`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hueSaturation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `xy`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``768`` = 0x300; `name`: ``"ColorControl"`` = "ColorControl"; `revision`: ``5`` = 5 }\>, typeof [`ColorControlServerLogic`](../modules/behavior_definitions_color_control_export.ColorControlServerLogic.md)\>

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).Events

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:215](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L215)

___

### ExtensionInterface

▪ `Static` `Readonly` **ExtensionInterface**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `moveColorLogic` | (`rateX`: `number`, `rateY`: `number`) => [`MaybePromise`](../modules/util_export.md#maybepromise) |
| `moveColorTemperatureLogic` | (`moveMode`: [`MoveMode`](../enums/cluster_export.ColorControl.MoveMode.md), `rate`: `number`, `colorTemperatureMinimumMireds`: `number`, `colorTemperatureMaximumMireds`: `number`) => [`MaybePromise`](../modules/util_export.md#maybepromise) |
| `moveHueLogic` | (`moveMode`: [`MoveMode`](../enums/cluster_export.ColorControl.MoveMode.md), `rate`: `number`, `isEnhancedHue`: `boolean`) => [`MaybePromise`](../modules/util_export.md#maybepromise) |
| `moveSaturationLogic` | (`moveMode`: [`MoveMode`](../enums/cluster_export.ColorControl.MoveMode.md), `rate`: `number`) => [`MaybePromise`](../modules/util_export.md#maybepromise) |
| `moveToColorLogic` | (`targetX`: `number`, `targetY`: `number`, `transitionTime`: `number`) => [`MaybePromise`](../modules/util_export.md#maybepromise) |
| `moveToColorTemperatureLogic` | (`targetMireds`: `number`, `transitionTime`: `number`) => [`MaybePromise`](../modules/util_export.md#maybepromise) |
| `moveToEnhancedHueAndSaturationLogic` | (`targetEnhancedHue`: `number`, `targetSaturation`: `number`, `transitionTime`: `number`) => [`MaybePromise`](../modules/util_export.md#maybepromise) |
| `moveToHueAndSaturationLogic` | (`targetHue`: `number`, `targetSaturation`: `number`, `transitionTime`: `number`) => [`MaybePromise`](../modules/util_export.md#maybepromise) |
| `moveToHueLogic` | (`targetHue`: `number`, `direction`: [`ColorControlDirection`](../enums/cluster_export.ColorControl.ColorControlDirection.md), `transitionTime`: `number`, `isEnhancedHue`: `boolean`) => [`MaybePromise`](../modules/util_export.md#maybepromise) |
| `moveToSaturationLogic` | (`targetSaturation`: `number`, `transitionTime`: `number`) => [`MaybePromise`](../modules/util_export.md#maybepromise) |
| `setColorMode` | (`mode`: [`ColorMode`](../enums/cluster_export.ColorControl.ColorMode.md)) => [`MaybePromise`](../modules/util_export.md#maybepromise) |
| `setEnhancedColorMode` | (`mode`: [`EnhancedColorMode`](../enums/cluster_export.ColorControl.EnhancedColorMode.md)) => [`MaybePromise`](../modules/util_export.md#maybepromise) |
| `startColorLoopLogic` | (`startHue`: `number`) => [`MaybePromise`](../modules/util_export.md#maybepromise) |
| `stepColorLogic` | (`stepX`: `number`, `stepY`: `number`, `transitionTime`: `number`) => [`MaybePromise`](../modules/util_export.md#maybepromise) |
| `stepColorTemperatureLogic` | (`stepMode`: [`StepMode`](../enums/cluster_export.ColorControl.StepMode.md), `stepSize`: `number`, `transitionTime`: `number`, `colorTemperatureMinimumMireds`: `number`, `colorTemperatureMaximumMireds`: `number`) => [`MaybePromise`](../modules/util_export.md#maybepromise) |
| `stepHueLogic` | (`stepMode`: [`StepMode`](../enums/cluster_export.ColorControl.StepMode.md), `stepSize`: `number`, `transitionTime`: `number`, `isEnhancedHue`: `boolean`) => [`MaybePromise`](../modules/util_export.md#maybepromise) |
| `stepSaturationLogic` | (`stepMode`: [`StepMode`](../enums/cluster_export.ColorControl.StepMode.md), `stepSize`: `number`, `transitionTime`: `number`) => [`MaybePromise`](../modules/util_export.md#maybepromise) |
| `stopAllColorMovement` | () => [`MaybePromise`](../modules/util_export.md#maybepromise) |
| `stopColorLoopLogic` | () => [`MaybePromise`](../modules/util_export.md#maybepromise) |
| `stopHueAndSaturationMovement` | () => [`MaybePromise`](../modules/util_export.md#maybepromise) |
| `stopMoveStepLogic` | () => [`MaybePromise`](../modules/util_export.md#maybepromise) |
| `switchColorMode` | (`oldMode`: [`ColorMode`](../enums/cluster_export.ColorControl.ColorMode.md), `newMode`: [`ColorMode`](../enums/cluster_export.ColorControl.ColorMode.md)) => [`MaybePromise`](../modules/util_export.md#maybepromise) |
| `syncColorTemperatureWithLevelLogic` | (`level`: `number`) => [`MaybePromise`](../modules/util_export.md#maybepromise) |

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).ExtensionInterface

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:226](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L226)

___

### Interface

▪ `Static` `Readonly` **Interface**: [`ColorControlInterface`](../modules/behavior_definitions_color_control_export.md#colorcontrolinterface)

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).Interface

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:218](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L218)

___

### Internal

▪ `Static` `Readonly` **Internal**: typeof [`Internal`](behavior_definitions_color_control_export.ColorControlServerLogic.Internal.md)

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).Internal

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:217](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L217)

___

### State

▪ `Static` `Readonly` **State**: () => [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `colorCapabilities`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `colorLoop`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `colorTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `enhancedHue`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hueSaturation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `xy`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `colorMode`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`ColorMode`](../enums/cluster_export.ColorControl.ColorMode.md), `any`\> ; `colorPointBIntensity`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `colorPointBx`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointBy`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointGIntensity`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `colorPointGx`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointGy`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointRIntensity`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `colorPointRx`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointRy`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `compensationText`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`string`, `any`\> ; `driftCompensation`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`DriftCompensation`](../enums/cluster_export.ColorControl.DriftCompensation.md), `any`\> ; `enhancedColorMode`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`EnhancedColorMode`](../enums/cluster_export.ColorControl.EnhancedColorMode.md), `any`\> ; `numberOfPrimaries`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `options`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `primary1Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary1X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary1Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary2Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary2X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary2Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary3Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary3X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary3Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary4Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary4X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary4Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary5Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary5X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary5Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary6Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary6X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary6Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `remainingTime`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `whitePointX`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `whitePointY`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `currentHue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `currentSaturation`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>  } ; `commands`: \{ `moveHue`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `moveMode`: ... ; `optionsMask`: ... ; `optionsOverride`: ... ; `rate`: ...  }\>, `void`, `any`\> ; `moveSaturation`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `moveMode`: ... ; `optionsMask`: ... ; `optionsOverride`: ... ; `rate`: ...  }\>, `void`, `any`\> ; `moveToHue`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `direction`: ... ; `hue`: ... ; `optionsMask`: ... ; `optionsOverride`: ... ; `transitionTime`: ...  }\>, `void`, `any`\> ; `moveToHueAndSaturation`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `hue`: ... ; `optionsMask`: ... ; `optionsOverride`: ... ; `saturation`: ... ; `transitionTime`: ...  }\>, `void`, `any`\> ; `moveToSaturation`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: ... ; `optionsOverride`: ... ; `saturation`: ... ; `transitionTime`: ...  }\>, `void`, `any`\> ; `stepHue`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: ... ; `optionsOverride`: ... ; `stepMode`: ... ; `stepSize`: ... ; `transitionTime`: ...  }\>, `void`, `any`\> ; `stepSaturation`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: ... ; `optionsOverride`: ... ; `stepMode`: ... ; `stepSize`: ... ; `transitionTime`: ...  }\>, `void`, `any`\>  }  } = HueSaturationComponent; `flags`: \{ `hueSaturation`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentX`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `currentY`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>  } ; `commands`: \{ `moveColor`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: ... ; `optionsOverride`: ... ; `rateX`: ... ; `rateY`: ...  }\>, `void`, `any`\> ; `moveToColor`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `colorX`: ... ; `colorY`: ... ; `optionsMask`: ... ; `optionsOverride`: ... ; `transitionTime`: ...  }\>, `void`, `any`\> ; `stepColor`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: ... ; `optionsOverride`: ... ; `stepX`: ... ; `stepY`: ... ; `transitionTime`: ...  }\>, `void`, `any`\>  }  } = XyComponent; `flags`: \{ `xy`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `colorTempPhysicalMaxMireds`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `colorTempPhysicalMinMireds`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `colorTemperatureMireds`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `coupleColorTempToLevelMinMireds`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `startUpColorTemperatureMireds`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `moveColorTemperature`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `colorTemperatureMaximumMireds`: ... ; `colorTemperatureMinimumMireds`: ... ; `moveMode`: ... ; `optionsMask`: ... ; `optionsOverride`: ... ; `rate`: ...  }\>, `void`, `any`\> ; `moveToColorTemperature`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `colorTemperatureMireds`: ... ; `optionsMask`: ... ; `optionsOverride`: ... ; `transitionTime`: ...  }\>, `void`, `any`\> ; `stepColorTemperature`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `colorTemperatureMaximumMireds`: ... ; `colorTemperatureMinimumMireds`: ... ; `optionsMask`: ... ; `optionsOverride`: ... ; `stepMode`: ... ; `stepSize`: ... ; `transitionTime`: ...  }\>, `void`, `any`\>  }  } = ColorTemperatureComponent; `flags`: \{ `colorTemperature`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `enhancedCurrentHue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>  } ; `commands`: \{ `enhancedMoveHue`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `moveMode`: ... ; `optionsMask`: ... ; `optionsOverride`: ... ; `rate`: ...  }\>, `void`, `any`\> ; `enhancedMoveToHue`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `direction`: ... ; `enhancedHue`: ... ; `optionsMask`: ... ; `optionsOverride`: ... ; `transitionTime`: ...  }\>, `void`, `any`\> ; `enhancedMoveToHueAndSaturation`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `enhancedHue`: ... ; `optionsMask`: ... ; `optionsOverride`: ... ; `saturation`: ... ; `transitionTime`: ...  }\>, `void`, `any`\> ; `enhancedStepHue`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: ... ; `optionsOverride`: ... ; `stepMode`: ... ; `stepSize`: ... ; `transitionTime`: ...  }\>, `void`, `any`\>  }  } = EnhancedHueComponent; `flags`: \{ `enhancedHue`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `colorLoopActive`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`ColorLoopActive`](../enums/cluster_export.ColorControl.ColorLoopActive.md), `any`\> ; `colorLoopDirection`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`ColorLoopDirection`](../enums/cluster_export.ColorControl.ColorLoopDirection.md), `any`\> ; `colorLoopStartEnhancedHue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `colorLoopStoredEnhancedHue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `colorLoopTime`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>  } ; `commands`: \{ `colorLoopSet`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `action`: ... ; `direction`: ... ; `optionsMask`: ... ; `optionsOverride`: ... ; `startHue`: ... ; `time`: ... ; `updateFlags`: ...  }\>, `void`, `any`\>  }  } = ColorLoopComponent; `flags`: \{ `colorLoop`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `stopMoveStep`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: ... ; `optionsOverride`: ...  }\>, `void`, `any`\>  }  } = HueSaturationOrXyOrColorTemperatureComponent; `flags`: \{ `hueSaturation`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `stopMoveStep`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: ... ; `optionsOverride`: ...  }\>, `void`, `any`\>  }  } = HueSaturationOrXyOrColorTemperatureComponent; `flags`: \{ `xy`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `stopMoveStep`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: ... ; `optionsOverride`: ...  }\>, `void`, `any`\>  }  } = HueSaturationOrXyOrColorTemperatureComponent; `flags`: \{ `colorTemperature`: ``true`` = true }  }] ; `features`: \{ `colorLoop`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `colorTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `enhancedHue`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hueSaturation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `xy`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``768`` = 0x300; `name`: ``"ColorControl"`` = "ColorControl"; `revision`: ``5`` = 5 }\>, typeof [`ColorControlServerLogic`](../modules/behavior_definitions_color_control_export.ColorControlServerLogic.md)\>

#### Type declaration

• **new State**(): [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `colorCapabilities`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `colorLoop`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `colorTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `enhancedHue`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hueSaturation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `xy`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `colorMode`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`ColorMode`](../enums/cluster_export.ColorControl.ColorMode.md), `any`\> ; `colorPointBIntensity`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `colorPointBx`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointBy`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointGIntensity`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `colorPointGx`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointGy`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointRIntensity`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `colorPointRx`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointRy`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `compensationText`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`string`, `any`\> ; `driftCompensation`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`DriftCompensation`](../enums/cluster_export.ColorControl.DriftCompensation.md), `any`\> ; `enhancedColorMode`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`EnhancedColorMode`](../enums/cluster_export.ColorControl.EnhancedColorMode.md), `any`\> ; `numberOfPrimaries`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `options`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `primary1Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary1X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary1Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary2Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary2X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary2Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary3Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary3X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary3Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary4Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary4X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary4Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary5Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary5X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary5Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary6Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary6X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary6Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `remainingTime`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `whitePointX`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `whitePointY`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `currentHue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `currentSaturation`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>  } ; `commands`: \{ `moveHue`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `moveMode`: ... ; `optionsMask`: ... ; `optionsOverride`: ... ; `rate`: ...  }\>, `void`, `any`\> ; `moveSaturation`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `moveMode`: ... ; `optionsMask`: ... ; `optionsOverride`: ... ; `rate`: ...  }\>, `void`, `any`\> ; `moveToHue`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `direction`: ... ; `hue`: ... ; `optionsMask`: ... ; `optionsOverride`: ... ; `transitionTime`: ...  }\>, `void`, `any`\> ; `moveToHueAndSaturation`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `hue`: ... ; `optionsMask`: ... ; `optionsOverride`: ... ; `saturation`: ... ; `transitionTime`: ...  }\>, `void`, `any`\> ; `moveToSaturation`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: ... ; `optionsOverride`: ... ; `saturation`: ... ; `transitionTime`: ...  }\>, `void`, `any`\> ; `stepHue`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: ... ; `optionsOverride`: ... ; `stepMode`: ... ; `stepSize`: ... ; `transitionTime`: ...  }\>, `void`, `any`\> ; `stepSaturation`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: ... ; `optionsOverride`: ... ; `stepMode`: ... ; `stepSize`: ... ; `transitionTime`: ...  }\>, `void`, `any`\>  }  } = HueSaturationComponent; `flags`: \{ `hueSaturation`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentX`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `currentY`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>  } ; `commands`: \{ `moveColor`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: ... ; `optionsOverride`: ... ; `rateX`: ... ; `rateY`: ...  }\>, `void`, `any`\> ; `moveToColor`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `colorX`: ... ; `colorY`: ... ; `optionsMask`: ... ; `optionsOverride`: ... ; `transitionTime`: ...  }\>, `void`, `any`\> ; `stepColor`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: ... ; `optionsOverride`: ... ; `stepX`: ... ; `stepY`: ... ; `transitionTime`: ...  }\>, `void`, `any`\>  }  } = XyComponent; `flags`: \{ `xy`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `colorTempPhysicalMaxMireds`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `colorTempPhysicalMinMireds`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `colorTemperatureMireds`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `coupleColorTempToLevelMinMireds`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `startUpColorTemperatureMireds`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `moveColorTemperature`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `colorTemperatureMaximumMireds`: ... ; `colorTemperatureMinimumMireds`: ... ; `moveMode`: ... ; `optionsMask`: ... ; `optionsOverride`: ... ; `rate`: ...  }\>, `void`, `any`\> ; `moveToColorTemperature`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `colorTemperatureMireds`: ... ; `optionsMask`: ... ; `optionsOverride`: ... ; `transitionTime`: ...  }\>, `void`, `any`\> ; `stepColorTemperature`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `colorTemperatureMaximumMireds`: ... ; `colorTemperatureMinimumMireds`: ... ; `optionsMask`: ... ; `optionsOverride`: ... ; `stepMode`: ... ; `stepSize`: ... ; `transitionTime`: ...  }\>, `void`, `any`\>  }  } = ColorTemperatureComponent; `flags`: \{ `colorTemperature`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `enhancedCurrentHue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>  } ; `commands`: \{ `enhancedMoveHue`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `moveMode`: ... ; `optionsMask`: ... ; `optionsOverride`: ... ; `rate`: ...  }\>, `void`, `any`\> ; `enhancedMoveToHue`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `direction`: ... ; `enhancedHue`: ... ; `optionsMask`: ... ; `optionsOverride`: ... ; `transitionTime`: ...  }\>, `void`, `any`\> ; `enhancedMoveToHueAndSaturation`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `enhancedHue`: ... ; `optionsMask`: ... ; `optionsOverride`: ... ; `saturation`: ... ; `transitionTime`: ...  }\>, `void`, `any`\> ; `enhancedStepHue`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: ... ; `optionsOverride`: ... ; `stepMode`: ... ; `stepSize`: ... ; `transitionTime`: ...  }\>, `void`, `any`\>  }  } = EnhancedHueComponent; `flags`: \{ `enhancedHue`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `colorLoopActive`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`ColorLoopActive`](../enums/cluster_export.ColorControl.ColorLoopActive.md), `any`\> ; `colorLoopDirection`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`ColorLoopDirection`](../enums/cluster_export.ColorControl.ColorLoopDirection.md), `any`\> ; `colorLoopStartEnhancedHue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `colorLoopStoredEnhancedHue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `colorLoopTime`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>  } ; `commands`: \{ `colorLoopSet`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `action`: ... ; `direction`: ... ; `optionsMask`: ... ; `optionsOverride`: ... ; `startHue`: ... ; `time`: ... ; `updateFlags`: ...  }\>, `void`, `any`\>  }  } = ColorLoopComponent; `flags`: \{ `colorLoop`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `stopMoveStep`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: ... ; `optionsOverride`: ...  }\>, `void`, `any`\>  }  } = HueSaturationOrXyOrColorTemperatureComponent; `flags`: \{ `hueSaturation`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `stopMoveStep`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: ... ; `optionsOverride`: ...  }\>, `void`, `any`\>  }  } = HueSaturationOrXyOrColorTemperatureComponent; `flags`: \{ `xy`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `stopMoveStep`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: ... ; `optionsOverride`: ...  }\>, `void`, `any`\>  }  } = HueSaturationOrXyOrColorTemperatureComponent; `flags`: \{ `colorTemperature`: ``true`` = true }  }] ; `features`: \{ `colorLoop`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `colorTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `enhancedHue`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hueSaturation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `xy`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``768`` = 0x300; `name`: ``"ColorControl"`` = "ColorControl"; `revision`: ``5`` = 5 }\>, typeof [`ColorControlServerLogic`](../modules/behavior_definitions_color_control_export.ColorControlServerLogic.md)\>

##### Returns

[`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `colorCapabilities`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `colorLoop`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `colorTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `enhancedHue`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hueSaturation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `xy`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `colorMode`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`ColorMode`](../enums/cluster_export.ColorControl.ColorMode.md), `any`\> ; `colorPointBIntensity`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `colorPointBx`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointBy`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointGIntensity`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `colorPointGx`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointGy`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointRIntensity`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `colorPointRx`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointRy`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `compensationText`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`string`, `any`\> ; `driftCompensation`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`DriftCompensation`](../enums/cluster_export.ColorControl.DriftCompensation.md), `any`\> ; `enhancedColorMode`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`EnhancedColorMode`](../enums/cluster_export.ColorControl.EnhancedColorMode.md), `any`\> ; `numberOfPrimaries`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `options`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `primary1Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary1X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary1Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary2Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary2X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary2Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary3Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary3X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary3Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary4Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary4X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary4Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary5Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary5X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary5Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary6Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary6X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary6Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `remainingTime`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `whitePointX`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `whitePointY`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `currentHue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `currentSaturation`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>  } ; `commands`: \{ `moveHue`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `moveMode`: ... ; `optionsMask`: ... ; `optionsOverride`: ... ; `rate`: ...  }\>, `void`, `any`\> ; `moveSaturation`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `moveMode`: ... ; `optionsMask`: ... ; `optionsOverride`: ... ; `rate`: ...  }\>, `void`, `any`\> ; `moveToHue`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `direction`: ... ; `hue`: ... ; `optionsMask`: ... ; `optionsOverride`: ... ; `transitionTime`: ...  }\>, `void`, `any`\> ; `moveToHueAndSaturation`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `hue`: ... ; `optionsMask`: ... ; `optionsOverride`: ... ; `saturation`: ... ; `transitionTime`: ...  }\>, `void`, `any`\> ; `moveToSaturation`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: ... ; `optionsOverride`: ... ; `saturation`: ... ; `transitionTime`: ...  }\>, `void`, `any`\> ; `stepHue`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: ... ; `optionsOverride`: ... ; `stepMode`: ... ; `stepSize`: ... ; `transitionTime`: ...  }\>, `void`, `any`\> ; `stepSaturation`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: ... ; `optionsOverride`: ... ; `stepMode`: ... ; `stepSize`: ... ; `transitionTime`: ...  }\>, `void`, `any`\>  }  } = HueSaturationComponent; `flags`: \{ `hueSaturation`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentX`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `currentY`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>  } ; `commands`: \{ `moveColor`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: ... ; `optionsOverride`: ... ; `rateX`: ... ; `rateY`: ...  }\>, `void`, `any`\> ; `moveToColor`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `colorX`: ... ; `colorY`: ... ; `optionsMask`: ... ; `optionsOverride`: ... ; `transitionTime`: ...  }\>, `void`, `any`\> ; `stepColor`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: ... ; `optionsOverride`: ... ; `stepX`: ... ; `stepY`: ... ; `transitionTime`: ...  }\>, `void`, `any`\>  }  } = XyComponent; `flags`: \{ `xy`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `colorTempPhysicalMaxMireds`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `colorTempPhysicalMinMireds`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `colorTemperatureMireds`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `coupleColorTempToLevelMinMireds`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `startUpColorTemperatureMireds`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `moveColorTemperature`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `colorTemperatureMaximumMireds`: ... ; `colorTemperatureMinimumMireds`: ... ; `moveMode`: ... ; `optionsMask`: ... ; `optionsOverride`: ... ; `rate`: ...  }\>, `void`, `any`\> ; `moveToColorTemperature`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `colorTemperatureMireds`: ... ; `optionsMask`: ... ; `optionsOverride`: ... ; `transitionTime`: ...  }\>, `void`, `any`\> ; `stepColorTemperature`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `colorTemperatureMaximumMireds`: ... ; `colorTemperatureMinimumMireds`: ... ; `optionsMask`: ... ; `optionsOverride`: ... ; `stepMode`: ... ; `stepSize`: ... ; `transitionTime`: ...  }\>, `void`, `any`\>  }  } = ColorTemperatureComponent; `flags`: \{ `colorTemperature`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `enhancedCurrentHue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>  } ; `commands`: \{ `enhancedMoveHue`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `moveMode`: ... ; `optionsMask`: ... ; `optionsOverride`: ... ; `rate`: ...  }\>, `void`, `any`\> ; `enhancedMoveToHue`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `direction`: ... ; `enhancedHue`: ... ; `optionsMask`: ... ; `optionsOverride`: ... ; `transitionTime`: ...  }\>, `void`, `any`\> ; `enhancedMoveToHueAndSaturation`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `enhancedHue`: ... ; `optionsMask`: ... ; `optionsOverride`: ... ; `saturation`: ... ; `transitionTime`: ...  }\>, `void`, `any`\> ; `enhancedStepHue`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: ... ; `optionsOverride`: ... ; `stepMode`: ... ; `stepSize`: ... ; `transitionTime`: ...  }\>, `void`, `any`\>  }  } = EnhancedHueComponent; `flags`: \{ `enhancedHue`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `colorLoopActive`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`ColorLoopActive`](../enums/cluster_export.ColorControl.ColorLoopActive.md), `any`\> ; `colorLoopDirection`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`ColorLoopDirection`](../enums/cluster_export.ColorControl.ColorLoopDirection.md), `any`\> ; `colorLoopStartEnhancedHue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `colorLoopStoredEnhancedHue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `colorLoopTime`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>  } ; `commands`: \{ `colorLoopSet`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `action`: ... ; `direction`: ... ; `optionsMask`: ... ; `optionsOverride`: ... ; `startHue`: ... ; `time`: ... ; `updateFlags`: ...  }\>, `void`, `any`\>  }  } = ColorLoopComponent; `flags`: \{ `colorLoop`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `stopMoveStep`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: ... ; `optionsOverride`: ...  }\>, `void`, `any`\>  }  } = HueSaturationOrXyOrColorTemperatureComponent; `flags`: \{ `hueSaturation`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `stopMoveStep`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: ... ; `optionsOverride`: ...  }\>, `void`, `any`\>  }  } = HueSaturationOrXyOrColorTemperatureComponent; `flags`: \{ `xy`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `stopMoveStep`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: ... ; `optionsOverride`: ...  }\>, `void`, `any`\>  }  } = HueSaturationOrXyOrColorTemperatureComponent; `flags`: \{ `colorTemperature`: ``true`` = true }  }] ; `features`: \{ `colorLoop`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `colorTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `enhancedHue`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hueSaturation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `xy`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``768`` = 0x300; `name`: ``"ColorControl"`` = "ColorControl"; `revision`: ``5`` = 5 }\>, typeof [`ColorControlServerLogic`](../modules/behavior_definitions_color_control_export.ColorControlServerLogic.md)\>

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).State

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:216](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L216)

___

### cluster

▪ `Static` `Readonly` **cluster**: [`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `colorCapabilities`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `colorLoop`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `colorTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `enhancedHue`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hueSaturation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `xy`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `colorMode`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`ColorMode`](../enums/cluster_export.ColorControl.ColorMode.md), `any`\> ; `colorPointBIntensity`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `colorPointBx`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointBy`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointGIntensity`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `colorPointGx`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointGy`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointRIntensity`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `colorPointRx`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointRy`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `compensationText`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`string`, `any`\> ; `driftCompensation`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`DriftCompensation`](../enums/cluster_export.ColorControl.DriftCompensation.md), `any`\> ; `enhancedColorMode`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`EnhancedColorMode`](../enums/cluster_export.ColorControl.EnhancedColorMode.md), `any`\> ; `numberOfPrimaries`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `options`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `primary1Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary1X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary1Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary2Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary2X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary2Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary3Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary3X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary3Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary4Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary4X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary4Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary5Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary5X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary5Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary6Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary6X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary6Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `remainingTime`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `whitePointX`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `whitePointY`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `currentHue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `currentSaturation`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>  } ; `commands`: \{ `moveHue`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MoveMode`](../enums/cluster_export.ColorControl.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `moveSaturation`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MoveMode`](../enums/cluster_export.ColorControl.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `moveToHue`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `direction`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ColorControlDirection`](../enums/cluster_export.ColorControl.ColorControlDirection.md)\> ; `hue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `moveToHueAndSaturation`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `hue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `saturation`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `moveToSaturation`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `saturation`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `stepHue`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StepMode`](../enums/cluster_export.ColorControl.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `stepSaturation`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StepMode`](../enums/cluster_export.ColorControl.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  }  } = HueSaturationComponent; `flags`: \{ `hueSaturation`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentX`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `currentY`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>  } ; `commands`: \{ `moveColor`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `rateX`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `rateY`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `moveToColor`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `colorX`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `colorY`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `stepColor`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `stepX`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `stepY`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  }  } = XyComponent; `flags`: \{ `xy`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `colorTempPhysicalMaxMireds`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `colorTempPhysicalMinMireds`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `colorTemperatureMireds`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `coupleColorTempToLevelMinMireds`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `startUpColorTemperatureMireds`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `moveColorTemperature`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `colorTemperatureMaximumMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `colorTemperatureMinimumMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MoveMode`](../enums/cluster_export.ColorControl.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `moveToColorTemperature`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `colorTemperatureMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `stepColorTemperature`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `colorTemperatureMaximumMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `colorTemperatureMinimumMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StepMode`](../enums/cluster_export.ColorControl.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  }  } = ColorTemperatureComponent; `flags`: \{ `colorTemperature`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `enhancedCurrentHue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>  } ; `commands`: \{ `enhancedMoveHue`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MoveMode`](../enums/cluster_export.ColorControl.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `enhancedMoveToHue`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `direction`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ColorControlDirection`](../enums/cluster_export.ColorControl.ColorControlDirection.md)\> ; `enhancedHue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `enhancedMoveToHueAndSaturation`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `enhancedHue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `saturation`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `enhancedStepHue`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StepMode`](../enums/cluster_export.ColorControl.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  }  } = EnhancedHueComponent; `flags`: \{ `enhancedHue`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `colorLoopActive`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`ColorLoopActive`](../enums/cluster_export.ColorControl.ColorLoopActive.md), `any`\> ; `colorLoopDirection`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`ColorLoopDirection`](../enums/cluster_export.ColorControl.ColorLoopDirection.md), `any`\> ; `colorLoopStartEnhancedHue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `colorLoopStoredEnhancedHue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `colorLoopTime`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>  } ; `commands`: \{ `colorLoopSet`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `action`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Action`](../enums/cluster_export.ColorControl.Action.md)\> ; `direction`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ColorLoopSetDirection`](../enums/cluster_export.ColorControl.ColorLoopSetDirection.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `startHue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `time`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `updateFlags`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\>  }\>, `void`, `any`\>  }  } = ColorLoopComponent; `flags`: \{ `colorLoop`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `stopMoveStep`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\>  }\>, `void`, `any`\>  }  } = HueSaturationOrXyOrColorTemperatureComponent; `flags`: \{ `hueSaturation`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `stopMoveStep`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\>  }\>, `void`, `any`\>  }  } = HueSaturationOrXyOrColorTemperatureComponent; `flags`: \{ `xy`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `stopMoveStep`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\>  }\>, `void`, `any`\>  }  } = HueSaturationOrXyOrColorTemperatureComponent; `flags`: \{ `colorTemperature`: ``true`` = true }  }] ; `features`: \{ `colorLoop`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `colorTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `enhancedHue`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hueSaturation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `xy`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``768`` = 0x300; `name`: ``"ColorControl"`` = "ColorControl"; `revision`: ``5`` = 5 }\>

Base cluster state include all attribute values but may be extended by subclasses.

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).cluster

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:213](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L213)

___

### defaults

▪ `Static` `Readonly` **defaults**: [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `colorCapabilities`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `colorLoop`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `colorTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `enhancedHue`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hueSaturation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `xy`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `colorMode`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`ColorMode`](../enums/cluster_export.ColorControl.ColorMode.md), `any`\> ; `colorPointBIntensity`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `colorPointBx`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointBy`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointGIntensity`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `colorPointGx`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointGy`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointRIntensity`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `colorPointRx`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `colorPointRy`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `compensationText`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`string`, `any`\> ; `driftCompensation`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`DriftCompensation`](../enums/cluster_export.ColorControl.DriftCompensation.md), `any`\> ; `enhancedColorMode`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`EnhancedColorMode`](../enums/cluster_export.ColorControl.EnhancedColorMode.md), `any`\> ; `numberOfPrimaries`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `options`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `primary1Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary1X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary1Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary2Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary2X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary2Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary3Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary3X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary3Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary4Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary4X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary4Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary5Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary5X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary5Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary6Intensity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `primary6X`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `primary6Y`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `remainingTime`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `whitePointX`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `whitePointY`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `currentHue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `currentSaturation`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>  } ; `commands`: \{ `moveHue`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\> ; `moveSaturation`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\> ; `moveToHue`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `direction`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `hue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\> ; `moveToHueAndSaturation`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `hue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `saturation`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\> ; `moveToSaturation`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `saturation`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\> ; `stepHue`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\> ; `stepSaturation`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = HueSaturationComponent; `flags`: \{ `hueSaturation`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentX`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `currentY`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>  } ; `commands`: \{ `moveColor`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `rateX`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `rateY`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\> ; `moveToColor`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `colorX`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `colorY`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\> ; `stepColor`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `stepX`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `stepY`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = XyComponent; `flags`: \{ `xy`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `colorTempPhysicalMaxMireds`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `colorTempPhysicalMinMireds`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `colorTemperatureMireds`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `coupleColorTempToLevelMinMireds`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `startUpColorTemperatureMireds`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `moveColorTemperature`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `colorTemperatureMaximumMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `colorTemperatureMinimumMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\> ; `moveToColorTemperature`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `colorTemperatureMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\> ; `stepColorTemperature`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `colorTemperatureMaximumMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `colorTemperatureMinimumMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = ColorTemperatureComponent; `flags`: \{ `colorTemperature`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `enhancedCurrentHue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>  } ; `commands`: \{ `enhancedMoveHue`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\> ; `enhancedMoveToHue`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `direction`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `enhancedHue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\> ; `enhancedMoveToHueAndSaturation`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `enhancedHue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `saturation`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\> ; `enhancedStepHue`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = EnhancedHueComponent; `flags`: \{ `enhancedHue`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `colorLoopActive`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`ColorLoopActive`](../enums/cluster_export.ColorControl.ColorLoopActive.md), `any`\> ; `colorLoopDirection`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`ColorLoopDirection`](../enums/cluster_export.ColorControl.ColorLoopDirection.md), `any`\> ; `colorLoopStartEnhancedHue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `colorLoopStoredEnhancedHue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `colorLoopTime`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>  } ; `commands`: \{ `colorLoopSet`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `action`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `direction`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `startHue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `time`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `updateFlags`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = ColorLoopComponent; `flags`: \{ `colorLoop`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `stopMoveStep`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = HueSaturationOrXyOrColorTemperatureComponent; `flags`: \{ `hueSaturation`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `stopMoveStep`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = HueSaturationOrXyOrColorTemperatureComponent; `flags`: \{ `xy`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `stopMoveStep`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = HueSaturationOrXyOrColorTemperatureComponent; `flags`: \{ `colorTemperature`: ``true`` = true }  }] ; `features`: \{ `colorLoop`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `colorTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `enhancedHue`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hueSaturation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `xy`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``768`` = 0x300; `name`: ``"ColorControl"`` = "ColorControl"; `revision`: ``5`` = 5 }\>, typeof [`ColorControlServerLogic`](../modules/behavior_definitions_color_control_export.ColorControlServerLogic.md)\>

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).defaults

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:222](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L222)

___

### dependencies

▪ `Static` `Optional` `Readonly` **dependencies**: `Iterable`\<[`Type`](../interfaces/behavior_export.Behavior.Type.md)\>

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).dependencies

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:224](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L224)

___

### early

▪ `Static` `Readonly` **early**: `boolean`

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).early

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:221](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L221)

___

### id

▪ `Static` `Readonly` **id**: ``"colorControl"``

The behavior ID for ClusterBehaviors is the name of the cluster.

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).id

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:208](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L208)

___

### name

▪ `Static` `Readonly` **name**: `string`

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).name

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:203](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L203)

___

### schema

▪ `Static` `Optional` `Readonly` **schema**: [`Schema`](../modules/behavior_cluster_export._internal_.md#schema)

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).schema

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:220](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L220)

___

### supervisor

▪ `Static` `Readonly` **supervisor**: [`RootSupervisor`](behavior_cluster_export._internal_.RootSupervisor.md)

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).supervisor

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:223](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L223)

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

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).supports

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:225](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L225)

## Methods

### [asyncDispose]

▸ **[asyncDispose]**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

Release resources.  This is the public API for releasing application resources held by behaviors in internal
state.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).[asyncDispose]

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:198](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L198)

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

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).asAdmin

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:125](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L125)

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

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).assertAttributeEnabled

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:183](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L183)

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

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).callback

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:226](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L226)

___

### initialize

▸ **initialize**(`_options?`): [`MaybePromise`](../modules/util_export.md#maybepromise)

Behaviors are ephemeral and should not perform initialization in their constructor.  They can override this
method instead.

This method may be synchronous or asyncronous.  If asynchronous, the behavior will not be available for external
use until initialization completes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options?` | `Object` |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).initialize

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:192](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L192)

___

### moveColorLogic

▸ **moveColorLogic**(`rateX`, `rateY`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rateX` | `number` |
| `rateY` | `number` |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).moveColorLogic

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2202](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2202)

___

### moveColorTemperatureLogic

▸ **moveColorTemperatureLogic**(`moveMode`, `rate`, `colorTemperatureMinimumMireds`, `colorTemperatureMaximumMireds`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `moveMode` | [`MoveMode`](../enums/cluster_export.ColorControl.MoveMode.md) |
| `rate` | `number` |
| `colorTemperatureMinimumMireds` | `number` |
| `colorTemperatureMaximumMireds` | `number` |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).moveColorTemperatureLogic

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2213](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2213)

___

### moveHueLogic

▸ **moveHueLogic**(`moveMode`, `rate`, `isEnhancedHue`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `moveMode` | [`MoveMode`](../enums/cluster_export.ColorControl.MoveMode.md) |
| `rate` | `number` |
| `isEnhancedHue` | `boolean` |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).moveHueLogic

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2188](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2188)

___

### moveSaturationLogic

▸ **moveSaturationLogic**(`moveMode`, `rate`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `moveMode` | [`MoveMode`](../enums/cluster_export.ColorControl.MoveMode.md) |
| `rate` | `number` |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).moveSaturationLogic

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2197](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2197)

___

### moveToColorLogic

▸ **moveToColorLogic**(`targetX`, `targetY`, `transitionTime`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetX` | `number` |
| `targetY` | `number` |
| `transitionTime` | `number` |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).moveToColorLogic

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2200](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2200)

___

### moveToColorTemperatureLogic

▸ **moveToColorTemperatureLogic**(`targetMireds`, `transitionTime`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetMireds` | `number` |
| `transitionTime` | `number` |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).moveToColorTemperatureLogic

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2204](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2204)

___

### moveToEnhancedHueAndSaturationLogic

▸ **moveToEnhancedHueAndSaturationLogic**(`targetEnhancedHue`, `targetSaturation`, `transitionTime`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetEnhancedHue` | `number` |
| `targetSaturation` | `number` |
| `transitionTime` | `number` |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).moveToEnhancedHueAndSaturationLogic

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2205](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2205)

___

### moveToHueAndSaturationLogic

▸ **moveToHueAndSaturationLogic**(`targetHue`, `targetSaturation`, `transitionTime`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetHue` | `number` |
| `targetSaturation` | `number` |
| `transitionTime` | `number` |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).moveToHueAndSaturationLogic

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2199](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2199)

___

### moveToHueLogic

▸ **moveToHueLogic**(`targetHue`, `direction`, `transitionTime`, `isEnhancedHue`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetHue` | `number` |
| `direction` | [`ColorControlDirection`](../enums/cluster_export.ColorControl.ColorControlDirection.md) |
| `transitionTime` | `number` |
| `isEnhancedHue` | `boolean` |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).moveToHueLogic

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2182](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2182)

___

### moveToSaturationLogic

▸ **moveToSaturationLogic**(`targetSaturation`, `transitionTime`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetSaturation` | `number` |
| `transitionTime` | `number` |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).moveToSaturationLogic

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2196](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2196)

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

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).reactTo

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:212](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L212)

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

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).requireAttributeEnabled

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:171](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L171)

___

### setColorMode

▸ **setColorMode**(`mode`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`ColorMode`](../enums/cluster_export.ColorControl.ColorMode.md) |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).setColorMode

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2227](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2227)

___

### setEnhancedColorMode

▸ **setEnhancedColorMode**(`mode`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`EnhancedColorMode`](../enums/cluster_export.ColorControl.EnhancedColorMode.md) |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).setEnhancedColorMode

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2228](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2228)

___

### startColorLoopLogic

▸ **startColorLoopLogic**(`startHue`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `startHue` | `number` |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).startColorLoopLogic

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2211](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2211)

___

### stepColorLogic

▸ **stepColorLogic**(`stepX`, `stepY`, `transitionTime`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `stepX` | `number` |
| `stepY` | `number` |
| `transitionTime` | `number` |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).stepColorLogic

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2203](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2203)

___

### stepColorTemperatureLogic

▸ **stepColorTemperatureLogic**(`stepMode`, `stepSize`, `transitionTime`, `colorTemperatureMinimumMireds`, `colorTemperatureMaximumMireds`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `stepMode` | [`StepMode`](../enums/cluster_export.ColorControl.StepMode.md) |
| `stepSize` | `number` |
| `transitionTime` | `number` |
| `colorTemperatureMinimumMireds` | `number` |
| `colorTemperatureMaximumMireds` | `number` |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).stepColorTemperatureLogic

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2219](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2219)

___

### stepHueLogic

▸ **stepHueLogic**(`stepMode`, `stepSize`, `transitionTime`, `isEnhancedHue`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `stepMode` | [`StepMode`](../enums/cluster_export.ColorControl.StepMode.md) |
| `stepSize` | `number` |
| `transitionTime` | `number` |
| `isEnhancedHue` | `boolean` |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).stepHueLogic

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2190](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2190)

___

### stepSaturationLogic

▸ **stepSaturationLogic**(`stepMode`, `stepSize`, `transitionTime`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `stepMode` | [`StepMode`](../enums/cluster_export.ColorControl.StepMode.md) |
| `stepSize` | `number` |
| `transitionTime` | `number` |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).stepSaturationLogic

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2198](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2198)

___

### stopAllColorMovement

▸ **stopAllColorMovement**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).stopAllColorMovement

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2201](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2201)

___

### stopColorLoopLogic

▸ **stopColorLoopLogic**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).stopColorLoopLogic

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2210](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2210)

___

### stopHueAndSaturationMovement

▸ **stopHueAndSaturationMovement**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).stopHueAndSaturationMovement

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2189](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2189)

___

### stopMoveStepLogic

▸ **stopMoveStepLogic**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).stopMoveStepLogic

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2212](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2212)

___

### switchColorMode

▸ **switchColorMode**(`oldMode`, `newMode`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldMode` | [`ColorMode`](../enums/cluster_export.ColorControl.ColorMode.md) |
| `newMode` | [`ColorMode`](../enums/cluster_export.ColorControl.ColorMode.md) |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).switchColorMode

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2226](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2226)

___

### syncColorTemperatureWithLevel

▸ **syncColorTemperatureWithLevel**(`level`): [`MaybePromise`](../modules/util_export.md#maybepromise)

This method is used internally to potentially handle the dependency between the ColorControl and LevelControl
cluster.
Do not override this method! Please use the [syncColorTemperatureWithLevelLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#synccolortemperaturewithlevellogic) method instead which is
called by this method if a sync is needed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | `number` |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).syncColorTemperatureWithLevel

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1597](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1597)

___

### syncColorTemperatureWithLevelLogic

▸ **syncColorTemperatureWithLevelLogic**(`level`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | `number` |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).syncColorTemperatureWithLevelLogic

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2229](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2229)

___

### toString

▸ **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).toString

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:203](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L203)

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

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).alter

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:254](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L254)

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

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).enable

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:264](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L264)

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

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).for

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:240](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L240)

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

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).set

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:262](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L262)

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

ColorControlServerLogic.for(ClusterType(ColorControl.Base)).with

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:246](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L246)
