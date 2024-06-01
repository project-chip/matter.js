[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [ApplicationLauncher](../README.md) / Complete

# Interface: Complete

This cluster supports all ApplicationLauncher features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

## Extends

- [`Identity`](../../../../../util/export/README.md#identityt)\<*typeof* [`CompleteInstance`](../README.md#completeinstance)\>

## Properties

### attributes

> **attributes**: [`Merge`](../../../../../util/export/README.md#mergeab)\<`object`, [`GlobalAttributes`](../../../README.md#globalattributesf)\<`object`\>\>

#### Type declaration

##### acceptedCommandList

> `readonly` **acceptedCommandList**: [`Attribute`](../../../interfaces/Attribute.md)\<[`CommandId`](../../../../datatype/README.md#commandid)[], `never`\>

##### attributeList

> `readonly` **attributeList**: [`Attribute`](../../../interfaces/Attribute.md)\<[`AttributeId`](../../../../datatype/README.md#attributeid)[], `never`\>

##### catalogList

> `readonly` **catalogList**: [`Attribute`](../../../interfaces/Attribute.md)\<`number`[], `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

This command shall be generated in response to LaunchApp/StopApp/HideApp commands.

###### See

MatterSpecification.v11.Cluster § 6.4.4.4

##### clusterRevision

> `readonly` **clusterRevision**: [`Attribute`](../../../interfaces/Attribute.md)\<`number`, `never`\>

##### currentApp

> `readonly` **currentApp**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`null` \| [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

##### eventList

> `readonly` **eventList**: [`Attribute`](../../../interfaces/Attribute.md)\<[`EventId`](../../../../datatype/README.md#eventid)[], `never`\>

##### featureMap

> `readonly` **featureMap**: [`Attribute`](../../../interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>, `never`\>

##### generatedCommandList

> `readonly` **generatedCommandList**: [`Attribute`](../../../interfaces/Attribute.md)\<[`CommandId`](../../../../datatype/README.md#commandid)[], `never`\>

#### Inherited from

`Identity.attributes`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:44

***

### base

> **base**: `undefined`

#### Inherited from

`Identity.base`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:48

***

### commands

> **commands**: `object`

#### hideApp

> `readonly` **hideApp**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

Upon receipt of this command, the server shall hide the application. The application shall be either

  • the specified application, if the Application Platform feature is supported;

  • otherwise the application corresponding to the endpoint.

The endpoint may decide to stop the application based on manufacturer specific behavior or resource
constraints if any. The Status attribute shall be updated to ACTIVE_HIDDEN or STOPPED, depending on the
action taken, on the Application Basic cluster of the Endpoint corresponding to the application on which
the action was taken. The Status attribute shall be updated on any other application whose Status may
have changed as a result of this command.

This command returns a Launcher Response.

##### See

MatterSpecification.v11.Cluster § 6.4.4.3

#### launchApp

> `readonly` **launchApp**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

Upon receipt of this command, the server shall launch the application with optional data. The
application shall be either

  • the specified application, if the Application Platform feature is supported;

  • otherwise the application corresponding to the endpoint.

The endpoint shall launch and bring to foreground the requisite application if the application is not
already launched and in foreground. The Status attribute shall be updated to ACTIVE_VISIBLE_FOCUS on the
Application Basic cluster of the Endpoint corresponding to the launched application. The Status
attribute shall be updated on any other application whose Status may have changed as a result of this
command. The CurrentApp attribute, if supported, shall be updated to reflect the new application in the
foreground.

This command returns a Launcher Response.

##### See

MatterSpecification.v11.Cluster § 6.4.4.1

#### stopApp

> `readonly` **stopApp**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

Upon receipt of this command, the server shall stop the application if it is running. The application
shall be either

  • the specified application, if the Application Platform feature is supported;

  • otherwise the application corresponding to the endpoint.

The Status attribute shall be updated to STOPPED on the Application Basic cluster of the Endpoint
corresponding to the stopped application. The Status attribute shall be updated on any other application
whose Status may have changed as a result of this command.

This command returns a Launcher Response.

##### See

MatterSpecification.v11.Cluster § 6.4.4.2

#### Inherited from

`Identity.commands`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:45

***

### events

> **events**: `object`

#### Inherited from

`Identity.events`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:46

***

### extensions

> **extensions**: `undefined`

#### Inherited from

`Identity.extensions`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:49

***

### features

> **features**: `object`

#### applicationPlatform

> `readonly` **applicationPlatform**: [`BitFlag`](../../../../schema/README.md#bitflag)

ApplicationPlatform

Support for attributes and commands required for endpoint to support launching any application within
the supported application catalogs

#### Inherited from

`Identity.features`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:42

***

### id

> **id**: [`Branded`](../../../../../util/export/README.md#brandedtb)\<[`Branded`](../../../../../util/export/README.md#brandedtb)\<`1292`, `"ClusterId"`\>, `"ClusterId"`\>

#### Inherited from

`Identity.id`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

***

### name

> **name**: `"ApplicationLauncher"`

#### Inherited from

`Identity.name`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:40

***

### revision

> **revision**: `1`

#### Inherited from

`Identity.revision`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:41

***

### supportedFeatures

> **supportedFeatures**: `object`

#### Inherited from

`Identity.supportedFeatures`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:43

***

### unknown

> **unknown**: `false`

#### Inherited from

`Identity.unknown`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:47

## Methods

### alter()

> **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../../ElementModifier/README.md#withalterationstalterationst)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../../../classes/ElementModifier.md#alter).

#### Type parameters

| Type parameter |
| :------ |
| `AlterationsT` *extends* [`Alterations`](../../ElementModifier/README.md#alterationsoriginalt)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../../ElementModifier/README.md#withalterationstalterationst)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `AlterationsT`\>

#### Inherited from

`Identity.alter`

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:38

***

### enable()

> **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../../ElementModifier/README.md#withflagstflagst)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../../../classes/ElementModifier.md#enable).

#### Type parameters

| Type parameter |
| :------ |
| `FlagsT` *extends* [`ElementFlags`](../../ElementModifier/README.md#elementflagsclustert)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../../ElementModifier/README.md#withflagstflagst)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `FlagsT`\>

#### Inherited from

`Identity.enable`

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:46

***

### set()

> **set**\<`ValuesT`\>(`values`): [`WithValues`](../../ElementModifier/README.md#withvaluestvaluest)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `ValuesT`\>

Modify elements using [ElementModifier.set](../../../classes/ElementModifier.md#set).

#### Type parameters

| Type parameter |
| :------ |
| `ValuesT` *extends* `object` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `values` | `ValuesT` |

#### Returns

[`WithValues`](../../ElementModifier/README.md#withvaluestvaluest)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `ValuesT`\>

#### Inherited from

`Identity.set`

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:42

***

### with()

> **with**\<`SelectionT`\>(...`selection`): [`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>

Select features using [ClusterComposer.compose](../../../classes/ClusterComposer.md#compose).

#### Type parameters

| Type parameter |
| :------ |
| `SelectionT` *extends* [`FeatureSelection`](../../ClusterComposer/README.md#featureselectiont)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`selection` | `SelectionT` |

#### Returns

[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>

##### attributes

> `readonly` **attributes**: `object`

##### attributes.acceptedCommandList

> `readonly` **acceptedCommandList**: [`Attribute`](../../../interfaces/Attribute.md)\<[`CommandId`](../../../../datatype/README.md#commandid)[], `never`\>

##### attributes.attributeList

> `readonly` **attributeList**: [`Attribute`](../../../interfaces/Attribute.md)\<[`AttributeId`](../../../../datatype/README.md#attributeid)[], `never`\>

##### attributes.catalogList

> `readonly` **catalogList**: [`Attribute`](../../../interfaces/Attribute.md)\<`number`[], `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

This command shall be generated in response to LaunchApp/StopApp/HideApp commands.

###### See

MatterSpecification.v11.Cluster § 6.4.4.4

##### attributes.clusterRevision

> `readonly` **clusterRevision**: [`Attribute`](../../../interfaces/Attribute.md)\<`number`, `never`\>

##### attributes.currentApp

> `readonly` **currentApp**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`null` \| [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

##### attributes.eventList

> `readonly` **eventList**: [`Attribute`](../../../interfaces/Attribute.md)\<[`EventId`](../../../../datatype/README.md#eventid)[], `never`\>

##### attributes.featureMap

> `readonly` **featureMap**: [`Attribute`](../../../interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>, `never`\>

##### attributes.generatedCommandList

> `readonly` **generatedCommandList**: [`Attribute`](../../../interfaces/Attribute.md)\<[`CommandId`](../../../../datatype/README.md#commandid)[], `never`\>

##### commands

> `readonly` **commands**: `object`

##### commands.hideApp

> `readonly` **hideApp**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

Upon receipt of this command, the server shall hide the application. The application shall be either

  • the specified application, if the Application Platform feature is supported;

  • otherwise the application corresponding to the endpoint.

The endpoint may decide to stop the application based on manufacturer specific behavior or resource
constraints if any. The Status attribute shall be updated to ACTIVE_HIDDEN or STOPPED, depending on the
action taken, on the Application Basic cluster of the Endpoint corresponding to the application on which
the action was taken. The Status attribute shall be updated on any other application whose Status may
have changed as a result of this command.

This command returns a Launcher Response.

###### See

MatterSpecification.v11.Cluster § 6.4.4.3

##### commands.launchApp

> `readonly` **launchApp**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

Upon receipt of this command, the server shall launch the application with optional data. The
application shall be either

  • the specified application, if the Application Platform feature is supported;

  • otherwise the application corresponding to the endpoint.

The endpoint shall launch and bring to foreground the requisite application if the application is not
already launched and in foreground. The Status attribute shall be updated to ACTIVE_VISIBLE_FOCUS on the
Application Basic cluster of the Endpoint corresponding to the launched application. The Status
attribute shall be updated on any other application whose Status may have changed as a result of this
command. The CurrentApp attribute, if supported, shall be updated to reflect the new application in the
foreground.

This command returns a Launcher Response.

###### See

MatterSpecification.v11.Cluster § 6.4.4.1

##### commands.stopApp

> `readonly` **stopApp**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

Upon receipt of this command, the server shall stop the application if it is running. The application
shall be either

  • the specified application, if the Application Platform feature is supported;

  • otherwise the application corresponding to the endpoint.

The Status attribute shall be updated to STOPPED on the Application Basic cluster of the Endpoint
corresponding to the stopped application. The Status attribute shall be updated on any other application
whose Status may have changed as a result of this command.

This command returns a Launcher Response.

###### See

MatterSpecification.v11.Cluster § 6.4.4.2

##### features

> `readonly` **features**: `object`

##### features.applicationPlatform

> `readonly` **applicationPlatform**: [`BitFlag`](../../../../schema/README.md#bitflag)

ApplicationPlatform

Support for attributes and commands required for endpoint to support launching any application within
the supported application catalogs

##### id

> `readonly` **id**: [`Branded`](../../../../../util/export/README.md#brandedtb)\<`1292`, `"ClusterId"`\>

##### name

> `readonly` **name**: `"ApplicationLauncher"`

##### revision

> `readonly` **revision**: `1`

#### Inherited from

`Identity.with`

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
