[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [Identify](../modules/exports_cluster.Identify.md) / Cluster

# Interface: Cluster

[exports/cluster](../modules/exports_cluster.md).[Identify](../modules/exports_cluster.Identify.md).Cluster

Identify

This cluster supports an endpoint identification state (e.g., flashing a light), that indicates to an observer
(e.g., an installer) which of several nodes and/or endpoints it is. It also supports a multicast request that
any endpoint that is identifying itself to respond to the initiator.

The state of this cluster may be shared on more than one endpoint on a node.

For Example: Two endpoints on a single node, one a temperature sensor, and one a humidity sensor, may both share
the same cluster instance and therefore identification state (e.g. single LED on the node).

Zigbee: Note that this cluster cannot be disabled, and remains functional regardless of the setting of the
DeviceEnable attribute in the Basic cluster.

IdentifyCluster supports optional features that you can enable with the IdentifyCluster.with() factory method.

**`See`**

MatterSpecification.v11.Cluster § 1.2

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ClusterInstance`](../modules/exports_cluster.Identify.md#clusterinstance)\>

  ↳ **`Cluster`**

## Table of contents

### Properties

- [attributes](exports_cluster.Identify.Cluster.md#attributes)
- [base](exports_cluster.Identify.Cluster.md#base)
- [commands](exports_cluster.Identify.Cluster.md#commands)
- [events](exports_cluster.Identify.Cluster.md#events)
- [extensions](exports_cluster.Identify.Cluster.md#extensions)
- [features](exports_cluster.Identify.Cluster.md#features)
- [id](exports_cluster.Identify.Cluster.md#id)
- [name](exports_cluster.Identify.Cluster.md#name)
- [revision](exports_cluster.Identify.Cluster.md#revision)
- [supportedFeatures](exports_cluster.Identify.Cluster.md#supportedfeatures)
- [unknown](exports_cluster.Identify.Cluster.md#unknown)

### Methods

- [alter](exports_cluster.Identify.Cluster.md#alter)
- [enable](exports_cluster.Identify.Cluster.md#enable)
- [set](exports_cluster.Identify.Cluster.md#set)
- [with](exports_cluster.Identify.Cluster.md#with)

## Properties

### attributes

• **attributes**: [`Merge`](../modules/util_export.md#merge)\<\{ `identifyTime`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `identifyType`: [`Attribute`](exports_cluster.Attribute.md)\<[`IdentifyType`](../enums/exports_cluster.Identify.IdentifyType.md), `any`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes)\<\{ `query`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>\>

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

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `identify` | [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `identifyTime`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> | This command starts or stops the receiving device identifying itself. **`See`** MatterSpecification.v11.Cluster § 1.2.6.1 |
| `triggerEffect` | [`OptionalCommand`](exports_cluster.OptionalCommand.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](exports_tlv.FieldType.md)\<[`EffectIdentifier`](../enums/exports_cluster.Identify.EffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](exports_tlv.FieldType.md)\<[`Default`](../enums/exports_cluster.Identify.EffectVariant.md#default)\>  }\>, `void`, `any`\> | This command allows the support of feedback to the user, such as a certain light effect. It is used to allow an implementation to provide visual feedback to the user under certain circumstances such as a color light turning green when it has successfully connected to a network. The use of this command and the effects themselves are entirely up to the implementer to use whenever a visual feedback is useful but it is not the same as and does not replace the identify mechanism used during commissioning. **`See`** MatterSpecification.v11.Cluster § 1.2.6.3 |

#### Inherited from

Identity.commands

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:45

___

### events

• **events**: `Object`

#### Inherited from

Identity.events

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:46

___

### extensions

• **extensions**: readonly [\{ `component`: \{ `commands`: \{ `identifyQuery`: [`Command`](exports_cluster.Command.md)\<`void`, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `timeout`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\>  }  } ; `flags`: \{ `query`: ``true``  }  }]

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
| `query` | [`BitFlag`](../modules/exports_schema.md#bitflag) | Query Multicast query for identification state |

#### Inherited from

Identity.features

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:42

___

### id

• **id**: [`Branded`](../modules/util_export.md#branded)\<``3``, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

___

### name

• **name**: ``"Identify"``

#### Inherited from

Identity.name

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:40

___

### revision

• **revision**: ``4``

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

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `identifyTime`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `identifyType`: [`Attribute`](exports_cluster.Attribute.md)\<[`IdentifyType`](../enums/exports_cluster.Identify.IdentifyType.md), `any`\>  } ; `commands`: \{ `identify`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `identifyTime`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `triggerEffect`: [`OptionalCommand`](exports_cluster.OptionalCommand.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](exports_tlv.FieldType.md)\<[`EffectIdentifier`](../enums/exports_cluster.Identify.EffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](exports_tlv.FieldType.md)\<[`Default`](../enums/exports_cluster.Identify.EffectVariant.md#default)\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `commands`: \{ `identifyQuery`: [`Command`](exports_cluster.Command.md)\<`void`, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `timeout`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `query`: ``true``  }  }] ; `features`: \{ `query`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``3`` ; `name`: ``"Identify"`` ; `revision`: ``4``  }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/exports_cluster.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/exports_cluster.ElementModifier.md#alterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `identifyTime`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `identifyType`: [`Attribute`](exports_cluster.Attribute.md)\<[`IdentifyType`](../enums/exports_cluster.Identify.IdentifyType.md), `any`\>  } ; `commands`: \{ `identify`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `identifyTime`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `triggerEffect`: [`OptionalCommand`](exports_cluster.OptionalCommand.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](exports_tlv.FieldType.md)\<[`EffectIdentifier`](../enums/exports_cluster.Identify.EffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](exports_tlv.FieldType.md)\<[`Default`](../enums/exports_cluster.Identify.EffectVariant.md#default)\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `commands`: \{ `identifyQuery`: [`Command`](exports_cluster.Command.md)\<`void`, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `timeout`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `query`: ``true``  }  }] ; `features`: \{ `query`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``3`` ; `name`: ``"Identify"`` ; `revision`: ``4``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `identifyTime`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `identifyType`: [`Attribute`](exports_cluster.Attribute.md)\<[`IdentifyType`](../enums/exports_cluster.Identify.IdentifyType.md), `any`\>  } ; `commands`: \{ `identify`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `identifyTime`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `triggerEffect`: [`OptionalCommand`](exports_cluster.OptionalCommand.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](exports_tlv.FieldType.md)\<[`EffectIdentifier`](../enums/exports_cluster.Identify.EffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](exports_tlv.FieldType.md)\<[`Default`](../enums/exports_cluster.Identify.EffectVariant.md#default)\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `commands`: \{ `identifyQuery`: [`Command`](exports_cluster.Command.md)\<`void`, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `timeout`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `query`: ``true``  }  }] ; `features`: \{ `query`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``3`` ; `name`: ``"Identify"`` ; `revision`: ``4``  }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:38

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `identifyTime`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `identifyType`: [`Attribute`](exports_cluster.Attribute.md)\<[`IdentifyType`](../enums/exports_cluster.Identify.IdentifyType.md), `any`\>  } ; `commands`: \{ `identify`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `identifyTime`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `triggerEffect`: [`OptionalCommand`](exports_cluster.OptionalCommand.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](exports_tlv.FieldType.md)\<[`EffectIdentifier`](../enums/exports_cluster.Identify.EffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](exports_tlv.FieldType.md)\<[`Default`](../enums/exports_cluster.Identify.EffectVariant.md#default)\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `commands`: \{ `identifyQuery`: [`Command`](exports_cluster.Command.md)\<`void`, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `timeout`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `query`: ``true``  }  }] ; `features`: \{ `query`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``3`` ; `name`: ``"Identify"`` ; `revision`: ``4``  }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/exports_cluster.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/exports_cluster.ElementModifier.md#elementflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `identifyTime`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `identifyType`: [`Attribute`](exports_cluster.Attribute.md)\<[`IdentifyType`](../enums/exports_cluster.Identify.IdentifyType.md), `any`\>  } ; `commands`: \{ `identify`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `identifyTime`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `triggerEffect`: [`OptionalCommand`](exports_cluster.OptionalCommand.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](exports_tlv.FieldType.md)\<[`EffectIdentifier`](../enums/exports_cluster.Identify.EffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](exports_tlv.FieldType.md)\<[`Default`](../enums/exports_cluster.Identify.EffectVariant.md#default)\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `commands`: \{ `identifyQuery`: [`Command`](exports_cluster.Command.md)\<`void`, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `timeout`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `query`: ``true``  }  }] ; `features`: \{ `query`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``3`` ; `name`: ``"Identify"`` ; `revision`: ``4``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `identifyTime`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `identifyType`: [`Attribute`](exports_cluster.Attribute.md)\<[`IdentifyType`](../enums/exports_cluster.Identify.IdentifyType.md), `any`\>  } ; `commands`: \{ `identify`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `identifyTime`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `triggerEffect`: [`OptionalCommand`](exports_cluster.OptionalCommand.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](exports_tlv.FieldType.md)\<[`EffectIdentifier`](../enums/exports_cluster.Identify.EffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](exports_tlv.FieldType.md)\<[`Default`](../enums/exports_cluster.Identify.EffectVariant.md#default)\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `commands`: \{ `identifyQuery`: [`Command`](exports_cluster.Command.md)\<`void`, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `timeout`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `query`: ``true``  }  }] ; `features`: \{ `query`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``3`` ; `name`: ``"Identify"`` ; `revision`: ``4``  }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:46

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `identifyTime`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `identifyType`: [`Attribute`](exports_cluster.Attribute.md)\<[`IdentifyType`](../enums/exports_cluster.Identify.IdentifyType.md), `any`\>  } ; `commands`: \{ `identify`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `identifyTime`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `triggerEffect`: [`OptionalCommand`](exports_cluster.OptionalCommand.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](exports_tlv.FieldType.md)\<[`EffectIdentifier`](../enums/exports_cluster.Identify.EffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](exports_tlv.FieldType.md)\<[`Default`](../enums/exports_cluster.Identify.EffectVariant.md#default)\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `commands`: \{ `identifyQuery`: [`Command`](exports_cluster.Command.md)\<`void`, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `timeout`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `query`: ``true``  }  }] ; `features`: \{ `query`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``3`` ; `name`: ``"Identify"`` ; `revision`: ``4``  }\>, `ValuesT`\>

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

[`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `identifyTime`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `identifyType`: [`Attribute`](exports_cluster.Attribute.md)\<[`IdentifyType`](../enums/exports_cluster.Identify.IdentifyType.md), `any`\>  } ; `commands`: \{ `identify`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `identifyTime`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `triggerEffect`: [`OptionalCommand`](exports_cluster.OptionalCommand.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](exports_tlv.FieldType.md)\<[`EffectIdentifier`](../enums/exports_cluster.Identify.EffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](exports_tlv.FieldType.md)\<[`Default`](../enums/exports_cluster.Identify.EffectVariant.md#default)\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `commands`: \{ `identifyQuery`: [`Command`](exports_cluster.Command.md)\<`void`, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `timeout`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `query`: ``true``  }  }] ; `features`: \{ `query`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``3`` ; `name`: ``"Identify"`` ; `revision`: ``4``  }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:42

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`WithFeatures`](../modules/exports_cluster.ClusterComposer.md#withfeatures)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `identifyTime`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `identifyType`: [`Attribute`](exports_cluster.Attribute.md)\<[`IdentifyType`](../enums/exports_cluster.Identify.IdentifyType.md), `any`\>  } ; `commands`: \{ `identify`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `identifyTime`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `triggerEffect`: [`OptionalCommand`](exports_cluster.OptionalCommand.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](exports_tlv.FieldType.md)\<[`EffectIdentifier`](../enums/exports_cluster.Identify.EffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](exports_tlv.FieldType.md)\<[`Default`](../enums/exports_cluster.Identify.EffectVariant.md#default)\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `commands`: \{ `identifyQuery`: [`Command`](exports_cluster.Command.md)\<`void`, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `timeout`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `query`: ``true``  }  }] ; `features`: \{ `query`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``3`` ; `name`: ``"Identify"`` ; `revision`: ``4``  }\>, `SelectionT`\>

Select features using [ClusterComposer.compose](../classes/exports_cluster.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/exports_cluster.ClusterComposer.md#featureselection)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `identifyTime`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `identifyType`: [`Attribute`](exports_cluster.Attribute.md)\<[`IdentifyType`](../enums/exports_cluster.Identify.IdentifyType.md), `any`\>  } ; `commands`: \{ `identify`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `identifyTime`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `triggerEffect`: [`OptionalCommand`](exports_cluster.OptionalCommand.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](exports_tlv.FieldType.md)\<[`EffectIdentifier`](../enums/exports_cluster.Identify.EffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](exports_tlv.FieldType.md)\<[`Default`](../enums/exports_cluster.Identify.EffectVariant.md#default)\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `commands`: \{ `identifyQuery`: [`Command`](exports_cluster.Command.md)\<`void`, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `timeout`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `query`: ``true``  }  }] ; `features`: \{ `query`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``3`` ; `name`: ``"Identify"`` ; `revision`: ``4``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`WithFeatures`](../modules/exports_cluster.ClusterComposer.md#withfeatures)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `identifyTime`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `identifyType`: [`Attribute`](exports_cluster.Attribute.md)\<[`IdentifyType`](../enums/exports_cluster.Identify.IdentifyType.md), `any`\>  } ; `commands`: \{ `identify`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `identifyTime`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `triggerEffect`: [`OptionalCommand`](exports_cluster.OptionalCommand.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](exports_tlv.FieldType.md)\<[`EffectIdentifier`](../enums/exports_cluster.Identify.EffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](exports_tlv.FieldType.md)\<[`Default`](../enums/exports_cluster.Identify.EffectVariant.md#default)\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `commands`: \{ `identifyQuery`: [`Command`](exports_cluster.Command.md)\<`void`, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `timeout`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `query`: ``true``  }  }] ; `features`: \{ `query`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``3`` ; `name`: ``"Identify"`` ; `revision`: ``4``  }\>, `SelectionT`\>

#### Inherited from

Identity.with

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
