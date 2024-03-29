[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [Switch](../modules/exports_cluster.Switch.md) / Complete

# Interface: Complete

[exports/cluster](../modules/exports_cluster.md).[Switch](../modules/exports_cluster.Switch.md).Complete

This cluster supports all Switch features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`CompleteInstance`](../modules/exports_cluster.Switch.md#completeinstance)\>

  ↳ **`Complete`**

## Table of contents

### Properties

- [attributes](exports_cluster.Switch.Complete.md#attributes)
- [base](exports_cluster.Switch.Complete.md#base)
- [commands](exports_cluster.Switch.Complete.md#commands)
- [events](exports_cluster.Switch.Complete.md#events)
- [extensions](exports_cluster.Switch.Complete.md#extensions)
- [features](exports_cluster.Switch.Complete.md#features)
- [id](exports_cluster.Switch.Complete.md#id)
- [name](exports_cluster.Switch.Complete.md#name)
- [revision](exports_cluster.Switch.Complete.md#revision)
- [supportedFeatures](exports_cluster.Switch.Complete.md#supportedfeatures)
- [unknown](exports_cluster.Switch.Complete.md#unknown)

### Methods

- [alter](exports_cluster.Switch.Complete.md#alter)
- [enable](exports_cluster.Switch.Complete.md#enable)
- [set](exports_cluster.Switch.Complete.md#set)
- [with](exports_cluster.Switch.Complete.md#with)

## Properties

### attributes

• **attributes**: [`Merge`](../modules/util_export.md#merge)\<\{ `currentPosition`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `multiPressMax`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchMultiPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `numberOfPositions`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes)\<\{ `latchingSwitch`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitch`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitchLongPress`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitchMultiPress`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitchRelease`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>\>

#### Inherited from

Identity.attributes

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:44

___

### base

• **base**: `undefined`

#### Inherited from

Identity.base

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:48

___

### commands

• **commands**: `Object`

#### Inherited from

Identity.commands

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:45

___

### events

• **events**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `initialPress` | [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitch`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } |
| `longPress` | [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchLongPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } |
| `longRelease` | [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchLongPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } |
| `multiPressComplete` | [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `totalNumberOfPressesCounted`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchMultiPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } |
| `multiPressOngoing` | [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `currentNumberOfPressesCounted`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `newPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchMultiPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } |
| `shortRelease` | [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchRelease`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } |
| `switchLatched` | [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `latchingSwitch`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } |

#### Inherited from

Identity.events

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:46

___

### extensions

• **extensions**: `undefined`

#### Inherited from

Identity.extensions

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:49

___

### features

• **features**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `latchingSwitch` | [`BitFlag`](../modules/exports_schema.md#bitflag) | LatchingSwitch |
| `momentarySwitch` | [`BitFlag`](../modules/exports_schema.md#bitflag) | MomentarySwitch |
| `momentarySwitchLongPress` | [`BitFlag`](../modules/exports_schema.md#bitflag) | MomentarySwitchLongPress |
| `momentarySwitchMultiPress` | [`BitFlag`](../modules/exports_schema.md#bitflag) | MomentarySwitchMultiPress |
| `momentarySwitchRelease` | [`BitFlag`](../modules/exports_schema.md#bitflag) | MomentarySwitchRelease |

#### Inherited from

Identity.features

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:42

___

### id

• **id**: [`Branded`](../modules/util_export.md#branded)\<``59``, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

___

### name

• **name**: ``"Switch"``

#### Inherited from

Identity.name

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:40

___

### revision

• **revision**: ``1``

#### Inherited from

Identity.revision

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:41

___

### supportedFeatures

• **supportedFeatures**: `Object`

#### Inherited from

Identity.supportedFeatures

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:43

___

### unknown

• **unknown**: ``false``

#### Inherited from

Identity.unknown

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:47

## Methods

### alter

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentPosition`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `multiPressMax`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchMultiPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `numberOfPositions`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `initialPress`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitch`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `longPress`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchLongPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `longRelease`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchLongPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `multiPressComplete`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `totalNumberOfPressesCounted`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchMultiPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `multiPressOngoing`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `currentNumberOfPressesCounted`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `newPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchMultiPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `shortRelease`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchRelease`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `switchLatched`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `latchingSwitch`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  }  } ; `features`: \{ `latchingSwitch`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitch`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitchLongPress`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitchMultiPress`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitchRelease`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``59`` ; `name`: ``"Switch"`` ; `revision`: ``1``  }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/exports_cluster.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/exports_cluster.ElementModifier.md#alterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentPosition`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `multiPressMax`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchMultiPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `numberOfPositions`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `initialPress`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitch`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `longPress`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchLongPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `longRelease`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchLongPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `multiPressComplete`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `totalNumberOfPressesCounted`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchMultiPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `multiPressOngoing`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `currentNumberOfPressesCounted`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `newPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchMultiPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `shortRelease`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchRelease`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `switchLatched`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `latchingSwitch`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  }  } ; `features`: \{ `latchingSwitch`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitch`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitchLongPress`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitchMultiPress`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitchRelease`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``59`` ; `name`: ``"Switch"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentPosition`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `multiPressMax`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchMultiPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `numberOfPositions`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `initialPress`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitch`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `longPress`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchLongPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `longRelease`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchLongPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `multiPressComplete`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `totalNumberOfPressesCounted`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchMultiPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `multiPressOngoing`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `currentNumberOfPressesCounted`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `newPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchMultiPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `shortRelease`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchRelease`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `switchLatched`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `latchingSwitch`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  }  } ; `features`: \{ `latchingSwitch`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitch`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitchLongPress`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitchMultiPress`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitchRelease`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``59`` ; `name`: ``"Switch"`` ; `revision`: ``1``  }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:38

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentPosition`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `multiPressMax`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchMultiPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `numberOfPositions`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `initialPress`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitch`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `longPress`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchLongPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `longRelease`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchLongPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `multiPressComplete`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `totalNumberOfPressesCounted`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchMultiPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `multiPressOngoing`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `currentNumberOfPressesCounted`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `newPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchMultiPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `shortRelease`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchRelease`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `switchLatched`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `latchingSwitch`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  }  } ; `features`: \{ `latchingSwitch`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitch`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitchLongPress`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitchMultiPress`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitchRelease`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``59`` ; `name`: ``"Switch"`` ; `revision`: ``1``  }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/exports_cluster.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/exports_cluster.ElementModifier.md#elementflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentPosition`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `multiPressMax`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchMultiPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `numberOfPositions`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `initialPress`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitch`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `longPress`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchLongPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `longRelease`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchLongPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `multiPressComplete`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `totalNumberOfPressesCounted`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchMultiPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `multiPressOngoing`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `currentNumberOfPressesCounted`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `newPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchMultiPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `shortRelease`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchRelease`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `switchLatched`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `latchingSwitch`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  }  } ; `features`: \{ `latchingSwitch`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitch`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitchLongPress`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitchMultiPress`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitchRelease`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``59`` ; `name`: ``"Switch"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentPosition`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `multiPressMax`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchMultiPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `numberOfPositions`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `initialPress`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitch`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `longPress`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchLongPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `longRelease`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchLongPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `multiPressComplete`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `totalNumberOfPressesCounted`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchMultiPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `multiPressOngoing`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `currentNumberOfPressesCounted`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `newPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchMultiPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `shortRelease`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchRelease`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `switchLatched`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `latchingSwitch`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  }  } ; `features`: \{ `latchingSwitch`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitch`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitchLongPress`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitchMultiPress`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitchRelease`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``59`` ; `name`: ``"Switch"`` ; `revision`: ``1``  }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:46

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentPosition`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `multiPressMax`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchMultiPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `numberOfPositions`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `initialPress`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitch`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `longPress`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchLongPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `longRelease`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchLongPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `multiPressComplete`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `totalNumberOfPressesCounted`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchMultiPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `multiPressOngoing`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `currentNumberOfPressesCounted`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `newPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchMultiPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `shortRelease`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchRelease`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `switchLatched`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `latchingSwitch`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  }  } ; `features`: \{ `latchingSwitch`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitch`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitchLongPress`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitchMultiPress`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitchRelease`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``59`` ; `name`: ``"Switch"`` ; `revision`: ``1``  }\>, `ValuesT`\>

Modify elements using [ElementModifier.set](../classes/exports_cluster.ElementModifier-1.md#set).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ValuesT` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `ValuesT` |

#### Returns

[`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentPosition`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `multiPressMax`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchMultiPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `numberOfPositions`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `initialPress`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitch`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `longPress`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchLongPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `longRelease`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchLongPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `multiPressComplete`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `totalNumberOfPressesCounted`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchMultiPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `multiPressOngoing`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `currentNumberOfPressesCounted`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `newPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchMultiPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `shortRelease`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchRelease`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `switchLatched`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `latchingSwitch`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  }  } ; `features`: \{ `latchingSwitch`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitch`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitchLongPress`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitchMultiPress`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitchRelease`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``59`` ; `name`: ``"Switch"`` ; `revision`: ``1``  }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:42

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentPosition`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `multiPressMax`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchMultiPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `numberOfPositions`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `initialPress`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitch`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `longPress`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchLongPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `longRelease`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchLongPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `multiPressComplete`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `totalNumberOfPressesCounted`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchMultiPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `multiPressOngoing`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `currentNumberOfPressesCounted`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `newPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchMultiPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `shortRelease`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchRelease`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `switchLatched`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `latchingSwitch`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  }  } ; `features`: \{ `latchingSwitch`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitch`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitchLongPress`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitchMultiPress`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitchRelease`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``59`` ; `name`: ``"Switch"`` ; `revision`: ``1``  }\>

Select features using [ClusterComposer.compose](../classes/exports_cluster.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/exports_cluster.ClusterComposer.md#featureselection)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentPosition`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `multiPressMax`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchMultiPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `numberOfPositions`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `initialPress`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitch`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `longPress`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchLongPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `longRelease`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchLongPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `multiPressComplete`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `totalNumberOfPressesCounted`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchMultiPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `multiPressOngoing`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `currentNumberOfPressesCounted`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `newPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchMultiPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `shortRelease`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchRelease`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `switchLatched`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `latchingSwitch`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  }  } ; `features`: \{ `latchingSwitch`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitch`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitchLongPress`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitchMultiPress`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitchRelease`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``59`` ; `name`: ``"Switch"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentPosition`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `multiPressMax`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchMultiPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `numberOfPositions`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `initialPress`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitch`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `longPress`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchLongPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `longRelease`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchLongPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `multiPressComplete`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `totalNumberOfPressesCounted`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchMultiPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `multiPressOngoing`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `currentNumberOfPressesCounted`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `newPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchMultiPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `shortRelease`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchRelease`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `switchLatched`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newPosition`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `latchingSwitch`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  }  } ; `features`: \{ `latchingSwitch`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitch`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitchLongPress`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitchMultiPress`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitchRelease`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``59`` ; `name`: ``"Switch"`` ; `revision`: ``1``  }\>

#### Inherited from

Identity.with

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
