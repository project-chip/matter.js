[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / MediaInput

# Namespace: MediaInput

[cluster/export](cluster_export.md).MediaInput

## Table of contents

### Enumerations

- [Feature](../enums/cluster_export.MediaInput.Feature.md)
- [InputType](../enums/cluster_export.MediaInput.InputType.md)

### Type Aliases

- [Extension](cluster_export.MediaInput.md#extension)

### Variables

- [Base](cluster_export.MediaInput.md#base)
- [Cluster](cluster_export.MediaInput.md#cluster)
- [Complete](cluster_export.MediaInput.md#complete)
- [NameUpdatesComponent](cluster_export.MediaInput.md#nameupdatescomponent)
- [TlvInputInfoStruct](cluster_export.MediaInput.md#tlvinputinfostruct)
- [TlvRenameInputRequest](cluster_export.MediaInput.md#tlvrenameinputrequest)
- [TlvSelectInputRequest](cluster_export.MediaInput.md#tlvselectinputrequest)

## Type Aliases

### Extension

Ƭ **Extension**\<`SF`\>: `Omit`\<typeof [`Base`](cluster_export.MediaInput.md#base), ``"supportedFeatures"``\> & \{ `supportedFeatures`: `SF`  } & `SF` extends \{ `nameUpdates`: ``true``  } ? typeof [`NameUpdatesComponent`](cluster_export.MediaInput.md#nameupdatescomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<typeof `Base.features`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaInputCluster.ts:222](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/MediaInputCluster.ts#L222)

## Variables

### Base

• `Const` **Base**: [`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `currentInput`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `inputList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `description`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `inputType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`InputType`](../enums/cluster_export.MediaInput.InputType.md)\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>[], `any`\>  } ; `commands`: \{ `hideInputStatus`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `selectInput`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `showInputStatus`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `nameUpdates`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``1287`` = 0x507; `name`: ``"MediaInput"`` = "MediaInput"; `revision`: ``1`` = 1 }\>

These elements and properties are present in all MediaInput clusters.

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaInputCluster.ts:120](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/MediaInputCluster.ts#L120)

___

### Cluster

• `Const` **Cluster**: \{ `attributes`: [`Merge`](util_export.md#merge)\<[`Merge`](util_export.md#merge)\<\{ `currentInput`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `inputList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `description`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `inputType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`InputType`](../enums/cluster_export.MediaInput.InputType.md)\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>[], `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes)\<\{ `nameUpdates`: [`BitFlag`](schema_export.md#bitflag)  }\>\>, [`GlobalAttributes`](cluster_export.md#globalattributes)\<\{ `nameUpdates`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `commands`: \{ `hideInputStatus`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `selectInput`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `showInputStatus`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `events`: {} ; `features`: \{ `nameUpdates`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: [`Branded`](util_export.md#branded)\<``1287`` & [`Brand`](util_export.md#brand)\<``"ClusterId"``\>, ``"ClusterId"``\> ; `name`: ``"MediaInput"`` ; `revision`: ``1`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`\<[`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `currentInput`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `inputList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `description`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `inputType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`InputType`](../enums/cluster_export.MediaInput.InputType.md)\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>[], `any`\>  } ; `commands`: \{ `hideInputStatus`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `selectInput`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `showInputStatus`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `nameUpdates`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``1287`` = 0x507; `name`: ``"MediaInput"`` = "MediaInput"; `revision`: ``1`` = 1 }\>, ``"attributes"``\> & \{ `with`: \<T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.MediaInput.md#extension)\<[`BitFlags`](schema_export.md#bitflags)\<\{ `nameUpdates`: [`BitFlag`](schema_export.md#bitflag)  }, `T`\>\> = extender }

Media Input

This cluster provides an interface for controlling the Input Selector on a media device such as a Video Player.

MediaInputCluster supports optional features that you can enable with the MediaInputCluster.with() factory
method.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.9

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaInputCluster.ts:200](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/MediaInputCluster.ts#L200)

___

### Complete

• `Const` **Complete**: [`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: [`Merge`](util_export.md#merge)\<[`Merge`](util_export.md#merge)\<\{ `currentInput`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `inputList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `description`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `inputType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`InputType`](../enums/cluster_export.MediaInput.InputType.md)\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>[], `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes)\<\{ `nameUpdates`: [`BitFlag`](schema_export.md#bitflag)  }\>\>, [`GlobalAttributes`](cluster_export.md#globalattributes)\<\{ `nameUpdates`: [`BitFlag`](schema_export.md#bitflag)  }\>\> = Cluster.attributes; `commands`: \{ `hideInputStatus`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `renameInput`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `nameUpdates`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `selectInput`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `showInputStatus`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `nameUpdates`: [`BitFlag`](schema_export.md#bitflag)  } = Cluster.features; `id`: ``1287`` & [`Brand`](util_export.md#brand)\<``"ClusterId"``\> = Cluster.id; `name`: ``"MediaInput"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>

This cluster supports all MediaInput features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaInputCluster.ts:234](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/MediaInputCluster.ts#L234)

___

### NameUpdatesComponent

• `Const` **NameUpdatesComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `commands`: \{ `renameInput`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>, `void`, `any`\>  }  }\>

A MediaInputCluster supports these elements if it supports feature NameUpdates.

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaInputCluster.ts:178](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/MediaInputCluster.ts#L178)

___

### TlvInputInfoStruct

• `Const` **TlvInputInfoStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `description`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `inputType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`InputType`](../enums/cluster_export.MediaInput.InputType.md)\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>

This contains information about an input.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.9.5.1

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaInputCluster.ts:49](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/MediaInputCluster.ts#L49)

___

### TlvRenameInputRequest

• `Const` **TlvRenameInputRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>

Input to the MediaInput renameInput command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.9.4.4

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaInputCluster.ts:101](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/MediaInputCluster.ts#L101)

___

### TlvSelectInputRequest

• `Const` **TlvSelectInputRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the MediaInput selectInput command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.9.4.1

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaInputCluster.ts:86](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/MediaInputCluster.ts#L86)
