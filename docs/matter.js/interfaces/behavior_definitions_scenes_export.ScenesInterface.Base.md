[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/scenes/export](../modules/behavior_definitions_scenes_export.md) / [ScenesInterface](../modules/behavior_definitions_scenes_export.ScenesInterface.md) / Base

# Interface: Base

[behavior/definitions/scenes/export](../modules/behavior_definitions_scenes_export.md).[ScenesInterface](../modules/behavior_definitions_scenes_export.ScenesInterface.md).Base

## Table of contents

### Methods

- [addScene](behavior_definitions_scenes_export.ScenesInterface.Base.md#addscene)
- [copyScene](behavior_definitions_scenes_export.ScenesInterface.Base.md#copyscene)
- [enhancedAddScene](behavior_definitions_scenes_export.ScenesInterface.Base.md#enhancedaddscene)
- [enhancedViewScene](behavior_definitions_scenes_export.ScenesInterface.Base.md#enhancedviewscene)
- [getSceneMembership](behavior_definitions_scenes_export.ScenesInterface.Base.md#getscenemembership)
- [recallScene](behavior_definitions_scenes_export.ScenesInterface.Base.md#recallscene)
- [removeAllScenes](behavior_definitions_scenes_export.ScenesInterface.Base.md#removeallscenes)
- [removeScene](behavior_definitions_scenes_export.ScenesInterface.Base.md#removescene)
- [storeScene](behavior_definitions_scenes_export.ScenesInterface.Base.md#storescene)
- [viewScene](behavior_definitions_scenes_export.ScenesInterface.Base.md#viewscene)

## Methods

### addScene

▸ **addScene**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>\>

It is not mandatory for an extension field set to be included in the command for every cluster on that
endpoint that has a defined extension field set. Extension field sets may be omitted, including the case of
no extension field sets at all.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `extensionFieldSets`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeValueList`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `attributeValue`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>[]\> ; `clusterId`: [`FieldType`](tlv_export.FieldType.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>\>  }\>[]\> ; `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `sceneName`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `transitionTime`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>\>

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.2

#### Defined in

[packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts:133](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts#L133)

___

### copyScene

▸ **copyScene**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupIdentifierFrom`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `sceneIdentifierFrom`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>\>

The CopyScene command allows a client to efficiently copy scenes from one group/scene identifier pair to
another group/scene identifier pair.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupIdentifierFrom`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupIdentifierTo`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `mode`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `copyAllScenes`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `reserved`: [`BitField`](../modules/schema_export.md#bitfield)  }\>\> ; `sceneIdentifierFrom`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `sceneIdentifierTo`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupIdentifierFrom`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `sceneIdentifierFrom`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>\>

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.11

#### Defined in

[packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts:197](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts#L197)

___

### enhancedAddScene

▸ **enhancedAddScene**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>\>

The EnhancedAddScene command allows a scene to be added using a finer scene transition time than the
AddScene command.

This command shall have the same data fields as the AddScene command, with the following difference:

The TransitionTime data field shall be measured in tenths of a second rather than in seconds.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `extensionFieldSets`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeValueList`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `attributeValue`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>[]\> ; `clusterId`: [`FieldType`](tlv_export.FieldType.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>\>  }\>[]\> ; `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `sceneName`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `transitionTime`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>\>

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.9

#### Defined in

[packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts:179](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts#L179)

___

### enhancedViewScene

▸ **enhancedViewScene**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `extensionFieldSets`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeValueList`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeId`: ... ; `attributeValue`: ...  }\>[]\> ; `clusterId`: [`FieldType`](tlv_export.FieldType.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>\>  }\>[]\> ; `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `sceneName`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\> ; `transitionTime`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\>  }\>\>

The EnhancedViewScene command allows a scene to be retrieved using a finer scene transition time than the
ViewScene command.

This command shall have the same data fields as the ViewScene command.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `extensionFieldSets`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeValueList`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeId`: ... ; `attributeValue`: ...  }\>[]\> ; `clusterId`: [`FieldType`](tlv_export.FieldType.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>\>  }\>[]\> ; `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `sceneName`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\> ; `transitionTime`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\>  }\>\>

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.10

#### Defined in

[packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts:189](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts#L189)

___

### getSceneMembership

▸ **getSceneMembership**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `capacity`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `sceneList`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`[]\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>\>

The GetSceneMembership command can be used to find an unused scene identifier within a certain group when no
commissioning tool is in the network, or for a commissioning tool to get the used scene identifiers within a
certain group, for the endpoint that implements this cluster.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `capacity`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `sceneList`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`[]\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>\>

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.8

#### Defined in

[packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts:167](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts#L167)

___

### recallScene

▸ **recallScene**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<``null`` \| `number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.7

#### Defined in

[packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts:158](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts#L158)

___

### removeAllScenes

▸ **removeAllScenes**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>\>

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.5

#### Defined in

[packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts:148](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts#L148)

___

### removeScene

▸ **removeScene**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>\>

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.4

#### Defined in

[packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts:143](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts#L143)

___

### storeScene

▸ **storeScene**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>\>

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.6

#### Defined in

[packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts:153](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts#L153)

___

### viewScene

▸ **viewScene**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `extensionFieldSets`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeValueList`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeId`: ... ; `attributeValue`: ...  }\>[]\> ; `clusterId`: [`FieldType`](tlv_export.FieldType.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>\>  }\>[]\> ; `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `sceneName`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\> ; `transitionTime`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\>  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `extensionFieldSets`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeValueList`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeId`: ... ; `attributeValue`: ...  }\>[]\> ; `clusterId`: [`FieldType`](tlv_export.FieldType.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>\>  }\>[]\> ; `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `sceneId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `sceneName`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\> ; `transitionTime`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\>  }\>\>

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.3

#### Defined in

[packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts:138](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts#L138)
