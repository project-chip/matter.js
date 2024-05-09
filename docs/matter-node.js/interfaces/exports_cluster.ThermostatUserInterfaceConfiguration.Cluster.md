[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ThermostatUserInterfaceConfiguration](../modules/exports_cluster.ThermostatUserInterfaceConfiguration.md) / Cluster

# Interface: Cluster

[exports/cluster](../modules/exports_cluster.md).[ThermostatUserInterfaceConfiguration](../modules/exports_cluster.ThermostatUserInterfaceConfiguration.md).Cluster

Thermostat User Interface Configuration

This cluster provides an interface to allow configuration of the user interface for a thermostat, or a
thermostat controller device, that supports a keypad and LCD screen.

**`See`**

MatterSpecification.v11.Cluster § 4.5

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ClusterInstance`](../modules/exports_cluster.ThermostatUserInterfaceConfiguration.md#clusterinstance)\>

  ↳ **`Cluster`**

## Table of contents

### Properties

- [attributes](exports_cluster.ThermostatUserInterfaceConfiguration.Cluster.md#attributes)
- [base](exports_cluster.ThermostatUserInterfaceConfiguration.Cluster.md#base)
- [commands](exports_cluster.ThermostatUserInterfaceConfiguration.Cluster.md#commands)
- [events](exports_cluster.ThermostatUserInterfaceConfiguration.Cluster.md#events)
- [extensions](exports_cluster.ThermostatUserInterfaceConfiguration.Cluster.md#extensions)
- [features](exports_cluster.ThermostatUserInterfaceConfiguration.Cluster.md#features)
- [id](exports_cluster.ThermostatUserInterfaceConfiguration.Cluster.md#id)
- [name](exports_cluster.ThermostatUserInterfaceConfiguration.Cluster.md#name)
- [revision](exports_cluster.ThermostatUserInterfaceConfiguration.Cluster.md#revision)
- [supportedFeatures](exports_cluster.ThermostatUserInterfaceConfiguration.Cluster.md#supportedfeatures)
- [unknown](exports_cluster.ThermostatUserInterfaceConfiguration.Cluster.md#unknown)

### Methods

- [alter](exports_cluster.ThermostatUserInterfaceConfiguration.Cluster.md#alter)
- [enable](exports_cluster.ThermostatUserInterfaceConfiguration.Cluster.md#enable)
- [set](exports_cluster.ThermostatUserInterfaceConfiguration.Cluster.md#set)
- [with](exports_cluster.ThermostatUserInterfaceConfiguration.Cluster.md#with)

## Properties

### attributes

• **attributes**: [`Merge`](../modules/util_export.md#merge)\<\{ `keypadLockout`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`KeypadLockout`](../enums/exports_cluster.ThermostatUserInterfaceConfiguration.KeypadLockout.md), `any`\> ; `scheduleProgrammingVisibility`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<[`ScheduleProgrammingVisibility`](../enums/exports_cluster.ThermostatUserInterfaceConfiguration.ScheduleProgrammingVisibility.md), `any`\> ; `temperatureDisplayMode`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TemperatureDisplayMode`](../enums/exports_cluster.ThermostatUserInterfaceConfiguration.TemperatureDisplayMode.md), `any`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes)\<{}\>\>

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

#### Inherited from

Identity.features

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:42

___

### id

• **id**: [`Branded`](../modules/util_export.md#branded)\<``516``, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

___

### name

• **name**: ``"ThermostatUserInterfaceConfiguration"``

#### Inherited from

Identity.name

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:40

___

### revision

• **revision**: ``2``

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

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `keypadLockout`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`KeypadLockout`](../enums/exports_cluster.ThermostatUserInterfaceConfiguration.KeypadLockout.md), `any`\> ; `scheduleProgrammingVisibility`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<[`ScheduleProgrammingVisibility`](../enums/exports_cluster.ThermostatUserInterfaceConfiguration.ScheduleProgrammingVisibility.md), `any`\> ; `temperatureDisplayMode`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TemperatureDisplayMode`](../enums/exports_cluster.ThermostatUserInterfaceConfiguration.TemperatureDisplayMode.md), `any`\>  } ; `id`: ``516`` ; `name`: ``"ThermostatUserInterfaceConfiguration"`` ; `revision`: ``2``  }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/exports_cluster.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/exports_cluster.ElementModifier.md#alterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `keypadLockout`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`KeypadLockout`](../enums/exports_cluster.ThermostatUserInterfaceConfiguration.KeypadLockout.md), `any`\> ; `scheduleProgrammingVisibility`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<[`ScheduleProgrammingVisibility`](../enums/exports_cluster.ThermostatUserInterfaceConfiguration.ScheduleProgrammingVisibility.md), `any`\> ; `temperatureDisplayMode`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TemperatureDisplayMode`](../enums/exports_cluster.ThermostatUserInterfaceConfiguration.TemperatureDisplayMode.md), `any`\>  } ; `id`: ``516`` ; `name`: ``"ThermostatUserInterfaceConfiguration"`` ; `revision`: ``2``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `keypadLockout`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`KeypadLockout`](../enums/exports_cluster.ThermostatUserInterfaceConfiguration.KeypadLockout.md), `any`\> ; `scheduleProgrammingVisibility`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<[`ScheduleProgrammingVisibility`](../enums/exports_cluster.ThermostatUserInterfaceConfiguration.ScheduleProgrammingVisibility.md), `any`\> ; `temperatureDisplayMode`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TemperatureDisplayMode`](../enums/exports_cluster.ThermostatUserInterfaceConfiguration.TemperatureDisplayMode.md), `any`\>  } ; `id`: ``516`` ; `name`: ``"ThermostatUserInterfaceConfiguration"`` ; `revision`: ``2``  }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:38

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `keypadLockout`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`KeypadLockout`](../enums/exports_cluster.ThermostatUserInterfaceConfiguration.KeypadLockout.md), `any`\> ; `scheduleProgrammingVisibility`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<[`ScheduleProgrammingVisibility`](../enums/exports_cluster.ThermostatUserInterfaceConfiguration.ScheduleProgrammingVisibility.md), `any`\> ; `temperatureDisplayMode`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TemperatureDisplayMode`](../enums/exports_cluster.ThermostatUserInterfaceConfiguration.TemperatureDisplayMode.md), `any`\>  } ; `id`: ``516`` ; `name`: ``"ThermostatUserInterfaceConfiguration"`` ; `revision`: ``2``  }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/exports_cluster.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/exports_cluster.ElementModifier.md#elementflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `keypadLockout`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`KeypadLockout`](../enums/exports_cluster.ThermostatUserInterfaceConfiguration.KeypadLockout.md), `any`\> ; `scheduleProgrammingVisibility`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<[`ScheduleProgrammingVisibility`](../enums/exports_cluster.ThermostatUserInterfaceConfiguration.ScheduleProgrammingVisibility.md), `any`\> ; `temperatureDisplayMode`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TemperatureDisplayMode`](../enums/exports_cluster.ThermostatUserInterfaceConfiguration.TemperatureDisplayMode.md), `any`\>  } ; `id`: ``516`` ; `name`: ``"ThermostatUserInterfaceConfiguration"`` ; `revision`: ``2``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `keypadLockout`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`KeypadLockout`](../enums/exports_cluster.ThermostatUserInterfaceConfiguration.KeypadLockout.md), `any`\> ; `scheduleProgrammingVisibility`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<[`ScheduleProgrammingVisibility`](../enums/exports_cluster.ThermostatUserInterfaceConfiguration.ScheduleProgrammingVisibility.md), `any`\> ; `temperatureDisplayMode`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TemperatureDisplayMode`](../enums/exports_cluster.ThermostatUserInterfaceConfiguration.TemperatureDisplayMode.md), `any`\>  } ; `id`: ``516`` ; `name`: ``"ThermostatUserInterfaceConfiguration"`` ; `revision`: ``2``  }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:46

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `keypadLockout`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`KeypadLockout`](../enums/exports_cluster.ThermostatUserInterfaceConfiguration.KeypadLockout.md), `any`\> ; `scheduleProgrammingVisibility`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<[`ScheduleProgrammingVisibility`](../enums/exports_cluster.ThermostatUserInterfaceConfiguration.ScheduleProgrammingVisibility.md), `any`\> ; `temperatureDisplayMode`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TemperatureDisplayMode`](../enums/exports_cluster.ThermostatUserInterfaceConfiguration.TemperatureDisplayMode.md), `any`\>  } ; `id`: ``516`` ; `name`: ``"ThermostatUserInterfaceConfiguration"`` ; `revision`: ``2``  }\>, `ValuesT`\>

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

[`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `keypadLockout`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`KeypadLockout`](../enums/exports_cluster.ThermostatUserInterfaceConfiguration.KeypadLockout.md), `any`\> ; `scheduleProgrammingVisibility`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<[`ScheduleProgrammingVisibility`](../enums/exports_cluster.ThermostatUserInterfaceConfiguration.ScheduleProgrammingVisibility.md), `any`\> ; `temperatureDisplayMode`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TemperatureDisplayMode`](../enums/exports_cluster.ThermostatUserInterfaceConfiguration.TemperatureDisplayMode.md), `any`\>  } ; `id`: ``516`` ; `name`: ``"ThermostatUserInterfaceConfiguration"`` ; `revision`: ``2``  }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:42

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `keypadLockout`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`KeypadLockout`](../enums/exports_cluster.ThermostatUserInterfaceConfiguration.KeypadLockout.md), `any`\> ; `scheduleProgrammingVisibility`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<[`ScheduleProgrammingVisibility`](../enums/exports_cluster.ThermostatUserInterfaceConfiguration.ScheduleProgrammingVisibility.md), `any`\> ; `temperatureDisplayMode`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TemperatureDisplayMode`](../enums/exports_cluster.ThermostatUserInterfaceConfiguration.TemperatureDisplayMode.md), `any`\>  } ; `id`: ``516`` ; `name`: ``"ThermostatUserInterfaceConfiguration"`` ; `revision`: ``2``  }\>

Select features using [ClusterComposer.compose](../classes/exports_cluster.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/exports_cluster.ClusterComposer.md#featureselection)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `keypadLockout`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`KeypadLockout`](../enums/exports_cluster.ThermostatUserInterfaceConfiguration.KeypadLockout.md), `any`\> ; `scheduleProgrammingVisibility`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<[`ScheduleProgrammingVisibility`](../enums/exports_cluster.ThermostatUserInterfaceConfiguration.ScheduleProgrammingVisibility.md), `any`\> ; `temperatureDisplayMode`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TemperatureDisplayMode`](../enums/exports_cluster.ThermostatUserInterfaceConfiguration.TemperatureDisplayMode.md), `any`\>  } ; `id`: ``516`` ; `name`: ``"ThermostatUserInterfaceConfiguration"`` ; `revision`: ``2``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `keypadLockout`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`KeypadLockout`](../enums/exports_cluster.ThermostatUserInterfaceConfiguration.KeypadLockout.md), `any`\> ; `scheduleProgrammingVisibility`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<[`ScheduleProgrammingVisibility`](../enums/exports_cluster.ThermostatUserInterfaceConfiguration.ScheduleProgrammingVisibility.md), `any`\> ; `temperatureDisplayMode`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TemperatureDisplayMode`](../enums/exports_cluster.ThermostatUserInterfaceConfiguration.TemperatureDisplayMode.md), `any`\>  } ; `id`: ``516`` ; `name`: ``"ThermostatUserInterfaceConfiguration"`` ; `revision`: ``2``  }\>

#### Inherited from

Identity.with

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
