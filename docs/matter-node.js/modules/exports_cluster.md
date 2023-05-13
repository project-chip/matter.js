[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / exports/cluster

# Module: exports/cluster

## Table of contents

### Enumerations

- [AccessLevel](../enums/exports_cluster.AccessLevel.md)
- [ActionErrorEnum](../enums/exports_cluster.ActionErrorEnum.md)
- [ActionStateEnum](../enums/exports_cluster.ActionStateEnum.md)
- [ActionTypeEnum](../enums/exports_cluster.ActionTypeEnum.md)
- [AdminCommissioningStatusCode](../enums/exports_cluster.AdminCommissioningStatusCode.md)
- [AuthMode](../enums/exports_cluster.AuthMode.md)
- [BatApprovedChemistryEnum](../enums/exports_cluster.BatApprovedChemistryEnum.md)
- [BatChargeFaultEnum](../enums/exports_cluster.BatChargeFaultEnum.md)
- [BatChargeLevelEnum](../enums/exports_cluster.BatChargeLevelEnum.md)
- [BatChargeStateEnum](../enums/exports_cluster.BatChargeStateEnum.md)
- [BatCommonDesignationEnum](../enums/exports_cluster.BatCommonDesignationEnum.md)
- [BatFaultEnum](../enums/exports_cluster.BatFaultEnum.md)
- [BatReplaceabilityEnum](../enums/exports_cluster.BatReplaceabilityEnum.md)
- [BootReason](../enums/exports_cluster.BootReason.md)
- [CertificateChainType](../enums/exports_cluster.CertificateChainType.md)
- [ChangeTypeEnum](../enums/exports_cluster.ChangeTypeEnum.md)
- [CommissioningError](../enums/exports_cluster.CommissioningError.md)
- [CommissioningWindowStatus](../enums/exports_cluster.CommissioningWindowStatus.md)
- [DelayedAllOffEffectVariant](../enums/exports_cluster.DelayedAllOffEffectVariant.md)
- [DyingLightEffectVariant](../enums/exports_cluster.DyingLightEffectVariant.md)
- [EffectIdentifier](../enums/exports_cluster.EffectIdentifier.md)
- [EffectVariant](../enums/exports_cluster.EffectVariant.md)
- [EndpointListType](../enums/exports_cluster.EndpointListType.md)
- [EventPriority](../enums/exports_cluster.EventPriority.md)
- [GroupKeyMulticastPolicy](../enums/exports_cluster.GroupKeyMulticastPolicy.md)
- [GroupKeySecurityPolicy](../enums/exports_cluster.GroupKeySecurityPolicy.md)
- [HardwareFault](../enums/exports_cluster.HardwareFault.md)
- [IdentifyEffectIdentifier](../enums/exports_cluster.IdentifyEffectIdentifier.md)
- [IdentifyType](../enums/exports_cluster.IdentifyType.md)
- [InterfaceType](../enums/exports_cluster.InterfaceType.md)
- [MoveMode](../enums/exports_cluster.MoveMode.md)
- [NetworkCommissioningStatus](../enums/exports_cluster.NetworkCommissioningStatus.md)
- [NetworkFault](../enums/exports_cluster.NetworkFault.md)
- [OccupancySensorType](../enums/exports_cluster.OccupancySensorType.md)
- [OperationalCertStatus](../enums/exports_cluster.OperationalCertStatus.md)
- [PowerSourceStatusEnum](../enums/exports_cluster.PowerSourceStatusEnum.md)
- [Privilege](../enums/exports_cluster.Privilege.md)
- [RadioFault](../enums/exports_cluster.RadioFault.md)
- [RegulatoryLocationType](../enums/exports_cluster.RegulatoryLocationType.md)
- [StartUpOnOff](../enums/exports_cluster.StartUpOnOff.md)
- [StepMode](../enums/exports_cluster.StepMode.md)
- [WiFiBand](../enums/exports_cluster.WiFiBand.md)
- [WiredCurrentTypeEnum](../enums/exports_cluster.WiredCurrentTypeEnum.md)
- [WiredFaultEnum](../enums/exports_cluster.WiredFaultEnum.md)

### Classes

- [AttributeGetterServer](../classes/exports_cluster.AttributeGetterServer.md)
- [AttributeServer](../classes/exports_cluster.AttributeServer.md)
- [CommandServer](../classes/exports_cluster.CommandServer.md)
- [GroupsManager](../classes/exports_cluster.GroupsManager.md)
- [ScenesManager](../classes/exports_cluster.ScenesManager.md)

### Interfaces

- [Attribute](../interfaces/exports_cluster.Attribute.md)
- [Attributes](../interfaces/exports_cluster.Attributes.md)
- [Cluster](../interfaces/exports_cluster.Cluster.md)
- [Command](../interfaces/exports_cluster.Command.md)
- [Commands](../interfaces/exports_cluster.Commands.md)
- [Event](../interfaces/exports_cluster.Event.md)
- [Events](../interfaces/exports_cluster.Events.md)
- [OperationalCredentialsServerConf](../interfaces/exports_cluster.OperationalCredentialsServerConf.md)
- [OptionalAttribute](../interfaces/exports_cluster.OptionalAttribute.md)
- [OptionalCommand](../interfaces/exports_cluster.OptionalCommand.md)
- [OptionalEvent](../interfaces/exports_cluster.OptionalEvent.md)
- [OptionalWritableAttribute](../interfaces/exports_cluster.OptionalWritableAttribute.md)
- [WritableAttribute](../interfaces/exports_cluster.WritableAttribute.md)

### Type Aliases

- [AttributeClients](exports_cluster.md#attributeclients)
- [AttributeInitialValues](exports_cluster.md#attributeinitialvalues)
- [AttributeJsType](exports_cluster.md#attributejstype)
- [AttributeServerValues](exports_cluster.md#attributeservervalues)
- [AttributeServers](exports_cluster.md#attributeservers)
- [ClusterClientObj](exports_cluster.md#clusterclientobj)
- [ClusterServerHandlers](exports_cluster.md#clusterserverhandlers)
- [ClusterServerObj](exports_cluster.md#clusterserverobj)
- [CommandHandler](exports_cluster.md#commandhandler)
- [CommandServers](exports_cluster.md#commandservers)
- [CommissioningSuccessFailureResponse](exports_cluster.md#commissioningsuccessfailureresponse)
- [GlobalAttributes](exports_cluster.md#globalattributes)
- [MandatoryAttributeNames](exports_cluster.md#mandatoryattributenames)
- [OptionalAttributeNames](exports_cluster.md#optionalattributenames)
- [RequestType](exports_cluster.md#requesttype)
- [ResponseType](exports_cluster.md#responsetype)
- [SignatureFromCommandSpec](exports_cluster.md#signaturefromcommandspec)

### Variables

- [AccessControlCluster](exports_cluster.md#accesscontrolcluster)
- [ActionsCluster](exports_cluster.md#actionscluster)
- [AdminCommissioningCluster](exports_cluster.md#admincommissioningcluster)
- [AllClustersMap](exports_cluster.md#allclustersmap)
- [BasicAdminCommissioningCluster](exports_cluster.md#basicadmincommissioningcluster)
- [BasicInformationCluster](exports_cluster.md#basicinformationcluster)
- [BindingCluster](exports_cluster.md#bindingcluster)
- [BooleanStateCluster](exports_cluster.md#booleanstatecluster)
- [BridgedDeviceBasicInformationCluster](exports_cluster.md#bridgeddevicebasicinformationcluster)
- [DescriptorCluster](exports_cluster.md#descriptorcluster)
- [EthernetNetworkCommissioningCluster](exports_cluster.md#ethernetnetworkcommissioningcluster)
- [FixedLabelCluster](exports_cluster.md#fixedlabelcluster)
- [FlowMeasurementCluster](exports_cluster.md#flowmeasurementcluster)
- [GeneralCommissioningCluster](exports_cluster.md#generalcommissioningcluster)
- [GeneralCommissioningClusterHandler](exports_cluster.md#generalcommissioningclusterhandler)
- [GeneralDiagnosticsCluster](exports_cluster.md#generaldiagnosticscluster)
- [GroupKeyManagementCluster](exports_cluster.md#groupkeymanagementcluster)
- [GroupsCluster](exports_cluster.md#groupscluster)
- [IdentifyCluster](exports_cluster.md#identifycluster)
- [IlluminanceMeasurementCluster](exports_cluster.md#illuminancemeasurementcluster)
- [LeafWetnessMeasurementCluster](exports_cluster.md#leafwetnessmeasurementcluster)
- [LevelControlCluster](exports_cluster.md#levelcontrolcluster)
- [OccupancyBitmap](exports_cluster.md#occupancybitmap)
- [OccupancySensingCluster](exports_cluster.md#occupancysensingcluster)
- [OccupancySensorTypeBitmap](exports_cluster.md#occupancysensortypebitmap)
- [OnOffCluster](exports_cluster.md#onoffcluster)
- [OnOffLightingCluster](exports_cluster.md#onofflightingcluster)
- [OperationalCredentialsCluster](exports_cluster.md#operationalcredentialscluster)
- [PowerSourceCluster](exports_cluster.md#powersourcecluster)
- [PowerSourceConfigurationCluster](exports_cluster.md#powersourceconfigurationcluster)
- [PressureMeasurementCluster](exports_cluster.md#pressuremeasurementcluster)
- [PulseWidthModulationLevelControlCluster](exports_cluster.md#pulsewidthmodulationlevelcontrolcluster)
- [RESP\_MAX](exports_cluster.md#resp_max)
- [RelativeHumidityCluster](exports_cluster.md#relativehumiditycluster)
- [ScenesCluster](exports_cluster.md#scenescluster)
- [SoilMoistureMeasurementCluster](exports_cluster.md#soilmoisturemeasurementcluster)
- [TemperatureMeasurementCluster](exports_cluster.md#temperaturemeasurementcluster)
- [ThreadAndEthernetNetworkCommissioningCluster](exports_cluster.md#threadandethernetnetworkcommissioningcluster)
- [ThreadNetworkCommissioningCluster](exports_cluster.md#threadnetworkcommissioningcluster)
- [TlvAttestation](exports_cluster.md#tlvattestation)
- [TlvAttributeValuePair](exports_cluster.md#tlvattributevaluepair)
- [TlvCertSigningRequest](exports_cluster.md#tlvcertsigningrequest)
- [TlvExtensionFieldSet](exports_cluster.md#tlvextensionfieldset)
- [TlvNoResponse](exports_cluster.md#tlvnoresponse)
- [TlvWiFiSecurity](exports_cluster.md#tlvwifisecurity)
- [UserLabelCluster](exports_cluster.md#userlabelcluster)
- [WifiAndEthernetAndThreadNetworkCommissioningCluster](exports_cluster.md#wifiandethernetandthreadnetworkcommissioningcluster)
- [WifiAndEthernetNetworkCommissioningCluster](exports_cluster.md#wifiandethernetnetworkcommissioningcluster)
- [WifiNetworkCommissioningCluster](exports_cluster.md#wifinetworkcommissioningcluster)

### Functions

- [AdminCommissioningHandler](exports_cluster.md#admincommissioninghandler)
- [Attribute](exports_cluster.md#attribute)
- [Cluster](exports_cluster.md#cluster)
- [ClusterExtend](exports_cluster.md#clusterextend)
- [Command](exports_cluster.md#command)
- [Event](exports_cluster.md#event)
- [GlobalAttributes](exports_cluster.md#globalattributes-1)
- [GroupKeyManagementClusterHandler](exports_cluster.md#groupkeymanagementclusterhandler)
- [GroupsClusterHandler](exports_cluster.md#groupsclusterhandler)
- [LevelControlClusterHandler](exports_cluster.md#levelcontrolclusterhandler)
- [NetworkCommissioningHandler](exports_cluster.md#networkcommissioninghandler)
- [OnOffClusterHandler](exports_cluster.md#onoffclusterhandler)
- [OperationalCredentialsClusterHandler](exports_cluster.md#operationalcredentialsclusterhandler)
- [OptionalAttribute](exports_cluster.md#optionalattribute)
- [OptionalCommand](exports_cluster.md#optionalcommand)
- [OptionalEvent](exports_cluster.md#optionalevent)
- [OptionalWritableAttribute](exports_cluster.md#optionalwritableattribute)
- [ScenesClusterHandler](exports_cluster.md#scenesclusterhandler)
- [UseOptionalAttributes](exports_cluster.md#useoptionalattributes)
- [WritableAttribute](exports_cluster.md#writableattribute)
- [createDefaultGroupsClusterServer](exports_cluster.md#createdefaultgroupsclusterserver)
- [createDefaultIdentifyClusterServer](exports_cluster.md#createdefaultidentifyclusterserver)
- [createDefaultOnOffClusterServer](exports_cluster.md#createdefaultonoffclusterserver)
- [createDefaultScenesClusterServer](exports_cluster.md#createdefaultscenesclusterserver)
- [getClusterAttributeById](exports_cluster.md#getclusterattributebyid)
- [getClusterById](exports_cluster.md#getclusterbyid)
- [isClusterClient](exports_cluster.md#isclusterclient)
- [isClusterServer](exports_cluster.md#isclusterserver)

## Type Aliases

### AttributeClients

Ƭ **AttributeClients**<`A`\>: [`Merge`](util.md#merge)<{ [P in MandatoryAttributeNames<A\>]: AttributeClient<AttributeJsType<A[P]\>\> }, { [P in OptionalAttributeNames<A\>]: AttributeClient<AttributeJsType<A[P]\> \| undefined\> }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |

#### Defined in

packages/matter.js/dist/cjs/cluster/client/ClusterClient.d.ts:11

___

### AttributeInitialValues

Ƭ **AttributeInitialValues**<`A`\>: [`Merge`](util.md#merge)<`Omit`<{ [P in MandatoryAttributeNames<A\>]: AttributeJsType<A[P]\> }, keyof [`GlobalAttributes`](exports_cluster.md#globalattributes-1)<`any`\>\>, { [P in OptionalAttributeNames<A\>]?: AttributeJsType<A[P]\> }\>

Initial values for the cluster attribute

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |

#### Defined in

packages/matter.js/dist/cjs/cluster/server/ClusterServer.d.ts:25

___

### AttributeJsType

Ƭ **AttributeJsType**<`T`\>: `T` extends [`Attribute`](exports_cluster.md#attribute)<infer JsType\> ? `JsType` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Attribute`](exports_cluster.md#attribute)<`any`\> |

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:39

___

### AttributeServerValues

Ƭ **AttributeServerValues**<`A`\>: [`Merge`](util.md#merge)<{ [P in MandatoryAttributeNames<A\>]: AttributeJsType<A[P]\> }, { [P in OptionalAttributeNames<A\>]?: AttributeJsType<A[P]\> }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |

#### Defined in

packages/matter.js/dist/cjs/cluster/server/ClusterServer.d.ts:30

___

### AttributeServers

Ƭ **AttributeServers**<`A`\>: [`Merge`](util.md#merge)<`Omit`<{ [P in MandatoryAttributeNames<A\>]: AttributeServer<AttributeJsType<A[P]\>\> }, keyof [`GlobalAttributes`](exports_cluster.md#globalattributes-1)<`any`\>\>, { [P in OptionalAttributeNames<A\>]?: AttributeServer<AttributeJsType<A[P]\>\> }\>

Cluster attributes accessible on the cluster server

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |

#### Defined in

packages/matter.js/dist/cjs/cluster/server/ClusterServer.d.ts:19

___

### ClusterClientObj

Ƭ **ClusterClientObj**<`A`, `C`\>: { `_clone`: (`newInteractionClient?`: [`InteractionClient`](../classes/exports_interaction.InteractionClient.md)) => [`ClusterClientObj`](exports_cluster.md#clusterclientobj)<`A`, `C`\> ; `_type`: ``"ClusterClient"`` ; `attributes`: [`AttributeClients`](exports_cluster.md#attributeclients)<`A`\> ; `commands`: { [P in keyof C]: SignatureFromCommandSpec<C[P]\> } ; `endpointId`: `number` ; `id`: `number` ; `name`: `string` ; `subscriptAllAttributes`: (`minIntervalFloorSeconds`: `number`, `maxIntervalCeilingSeconds`: `number`) => `Promise`<`void`\>  } & [`ClientAttributeGetters`](index._internal_.md#clientattributegetters)<`A`\> & [`ClientAttributeSetters`](index._internal_.md#clientattributesetters)<`A`\> & [`ClientAttributeSubscribers`](index._internal_.md#clientattributesubscribers)<`A`\> & { [P in keyof C]: SignatureFromCommandSpec<C[P]\> }

Strongly typed interface of a cluster client

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/exports_cluster.Commands.md) |

#### Defined in

packages/matter.js/dist/cjs/cluster/client/ClusterClient.d.ts:33

___

### ClusterServerHandlers

Ƭ **ClusterServerHandlers**<`C`\>: [`Merge`](util.md#merge)<[`CommandHandlers`](index._internal_.md#commandhandlers)<`C`[``"commands"``], [`AttributeServers`](exports_cluster.md#attributeservers)<`C`[``"attributes"``]\>\>, [`AttributeGetters`](index._internal_.md#attributegetters)<`C`[``"attributes"``]\>\>

Handlers to process cluster commands

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Cluster`](exports_cluster.md#cluster)<`any`, `any`, `any`, `any`, `any`\> |

#### Defined in

packages/matter.js/dist/cjs/cluster/server/ClusterServer.d.ts:61

___

### ClusterServerObj

Ƭ **ClusterServerObj**<`A`, `C`\>: { `_commands`: [`CommandServers`](exports_cluster.md#commandservers)<`C`\> ; `_getSceneExtensionFieldSets`: () => [`TypeFromSchema`](exports_tlv.md#typefromschema)<typeof [`TlvAttributeValuePair`](exports_cluster.md#tlvattributevaluepair)\>[] ; `_setSceneExtensionFieldSets`: (`values`: [`TypeFromSchema`](exports_tlv.md#typefromschema)<typeof [`TlvAttributeValuePair`](exports_cluster.md#tlvattributevaluepair)\>[], `transitionTime`: `number`) => `void` ; `_setStorage`: (`storageContext`: [`StorageContext`](../classes/storage.StorageContext.md)) => `void` ; `_type`: ``"ClusterServer"`` ; `_verifySceneExtensionFieldSets`: (`values`: [`TypeFromSchema`](exports_tlv.md#typefromschema)<typeof [`TlvAttributeValuePair`](exports_cluster.md#tlvattributevaluepair)\>[]) => `boolean` ; `attributes`: [`AttributeServers`](exports_cluster.md#attributeservers)<`A`\> ; `id`: `number` ; `name`: `string`  } & [`ServerAttributeGetters`](index._internal_.md#serverattributegetters)<`A`\> & [`ServerAttributeSetters`](index._internal_.md#serverattributesetters)<`A`\> & [`ServerAttributeSubscribers`](index._internal_.md#serverattributesubscribers)<`A`\>

Strongly typed interface of a cluster server

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/exports_cluster.Commands.md) |

#### Defined in

packages/matter.js/dist/cjs/cluster/server/ClusterServer.d.ts:89

___

### CommandHandler

Ƭ **CommandHandler**<`C`, `A`\>: `C` extends [`Command`](exports_cluster.md#command)<infer RequestT, infer ResponseT\> ? (`args`: { `attributes`: `A` ; `endpoint`: [`Endpoint`](../classes/exports_device.Endpoint.md) ; `message`: [`Message`](../interfaces/exports_codec.Message.md) ; `request`: `RequestT` ; `session`: [`Session`](../interfaces/exports_session.Session.md)<[`MatterDevice`](../classes/index.MatterDevice.md)\>  }) => `Promise`<`ResponseT`\> \| `ResponseT` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Command`](exports_cluster.md#command)<`any`, `any`\> |
| `A` | extends [`AttributeServers`](exports_cluster.md#attributeservers)<`any`\> |

#### Defined in

packages/matter.js/dist/cjs/cluster/server/ClusterServer.d.ts:48

___

### CommandServers

Ƭ **CommandServers**<`C`\>: [`Merge`](util.md#merge)<{ [P in MandatoryCommandNames<C\>]: CommandServer<RequestType<C[P]\>, ResponseType<C[P]\>\> }, { [P in OptionalCommandNames<C\>]?: CommandServer<RequestType<C[P]\>, ResponseType<C[P]\>\> }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Commands`](../interfaces/exports_cluster.Commands.md) |

#### Defined in

packages/matter.js/dist/cjs/cluster/server/ClusterServer.d.ts:62

___

### CommissioningSuccessFailureResponse

Ƭ **CommissioningSuccessFailureResponse**: [`TypeFromSchema`](exports_tlv.md#typefromschema)<typeof [`TlvCommissioningSuccessFailureResponse`](index._internal_.md#tlvcommissioningsuccessfailureresponse)\>

#### Defined in

packages/matter.js/dist/cjs/cluster/GeneralCommissioningCluster.d.ts:50

___

### GlobalAttributes

Ƭ **GlobalAttributes**<`F`\>: `Object`

**`See`**

MatterCoreSpecificationV1_0 § 7.13

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](exports_schema.md#bitschema) |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `acceptedCommandList` | [`Attribute`](exports_cluster.md#attribute)<[`CommandId`](../classes/exports_datatype.CommandId.md)[]\> | List of client generated commands which are supported by this cluster server instance. |
| `attributeList` | [`Attribute`](exports_cluster.md#attribute)<[`AttributeId`](../classes/exports_datatype.AttributeId.md)[]\> | List of the attribute IDs of the attributes supported by the cluster instance. |
| `clusterRevision` | [`Attribute`](exports_cluster.md#attribute)<`number`\> | Indicates the revision of the server cluster specification supported by the cluster instance. |
| `eventList` | [`Attribute`](exports_cluster.md#attribute)<[`EventId`](../classes/exports_datatype.EventId.md)[]\> | List of the event IDs of the events supported by the cluster instance. |
| `featureMap` | [`Attribute`](exports_cluster.md#attribute)<[`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<`F`\>\> | Indicates whether the server supports zero or more optional cluster features. |
| `generatedCommandList` | [`Attribute`](exports_cluster.md#attribute)<[`CommandId`](../classes/exports_datatype.CommandId.md)[]\> | List of server generated commands (server to client commands). |

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:98

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:112

___

### MandatoryAttributeNames

Ƭ **MandatoryAttributeNames**<`A`\>: { [K in keyof A]: A[K] extends OptionalAttribute<any\> ? never : K }[keyof `A`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:52

___

### OptionalAttributeNames

Ƭ **OptionalAttributeNames**<`A`\>: { [K in keyof A]: A[K] extends OptionalAttribute<any\> ? K : never }[keyof `A`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:55

___

### RequestType

Ƭ **RequestType**<`T`\>: `T` extends [`OptionalCommand`](exports_cluster.md#optionalcommand)<infer RequestT, `any`\> ? `RequestT` : `T` extends [`Command`](exports_cluster.md#command)<infer RequestT, `any`\> ? `RequestT` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Command`](exports_cluster.md#command)<`any`, `any`\> |

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:70

___

### ResponseType

Ƭ **ResponseType**<`T`\>: `T` extends [`OptionalCommand`](exports_cluster.md#optionalcommand)<`any`, infer ResponseT\> ? `ResponseT` : `T` extends [`Command`](exports_cluster.md#command)<`any`, infer ResponseT\> ? `ResponseT` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Command`](exports_cluster.md#command)<`any`, `any`\> |

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:69

___

### SignatureFromCommandSpec

Ƭ **SignatureFromCommandSpec**<`C`\>: (`request`: [`RequestType`](exports_cluster.md#requesttype)<`C`\>) => `Promise`<[`ResponseType`](exports_cluster.md#responsetype)<`C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Command`](exports_cluster.md#command)<`any`, `any`\> |

#### Type declaration

▸ (`request`): `Promise`<[`ResponseType`](exports_cluster.md#responsetype)<`C`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`RequestType`](exports_cluster.md#requesttype)<`C`\> |

##### Returns

`Promise`<[`ResponseType`](exports_cluster.md#responsetype)<`C`\>\>

#### Defined in

packages/matter.js/dist/cjs/cluster/client/ClusterClient.d.ts:16

## Variables

### AccessControlCluster

• `Const` **AccessControlCluster**: [`Cluster`](exports_cluster.md#cluster)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), { `accessControlEntryChanged`: [`Event`](exports_cluster.md#event)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)\> ; `accessControlExtensionChanged`: [`Event`](exports_cluster.md#event)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)\>  }\>

The Access Control Cluster exposes a data model view of a Node’s Access Control List (ACL),
which codifies the rules used to manage and enforce Access Control for the Node’s endpoints
and their associated cluster instances. Access to this Access Control Cluster itself requires
a special Administer privilege level, such that only Nodes granted such privilege (hereafter
termed "Administrators") can manage the Access Control Cluster.
The Access Control Cluster SHALL be present on the root node endpoint of each Node, and SHALL
NOT be present on any other Endpoint of any Node.

**`See`**

MatterCoreSpecificationV1_0 § 9.10

#### Defined in

packages/matter.js/dist/cjs/cluster/AccessControlCluster.d.ts:57

___

### ActionsCluster

• `Const` **ActionsCluster**: [`Cluster`](exports_cluster.md#cluster)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `disableAction`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`\> ; `disableActionWithDuration`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`\> ; `enableAction`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`\> ; `enableActionWithDuration`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`\> ; `instantAction`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`\> ; `instantActionWithTransition`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`\> ; `pauseAction`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`\> ; `pauseActionWithDuration`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`\> ; `resumeAction`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`\> ; `startAction`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`\> ; `startActionWithDuration`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`\> ; `stopAction`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`\>  }, { `actionFailed`: [`Event`](exports_cluster.md#event)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)\> ; `stateChanged`: [`Event`](exports_cluster.md#event)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)\>  }\>

This cluster provides a standardized way for a Node (typically a Bridge, but could be any Node) to expose
 * information about logical grouping of endpoints on the Node (example: lights in a room)
 * information about named actions that can be performed on such a group of endpoints (example: recall a
   scene for a group of lights by its name)
 * commands to trigger such actions
 * events to receive feedback on the state of such actions.

**`See`**

MatterCoreSpecificationV1_0 § 9.14

#### Defined in

packages/matter.js/dist/cjs/cluster/ActionsCluster.d.ts:78

___

### AdminCommissioningCluster

• `Const` **AdminCommissioningCluster**: [`Cluster`](exports_cluster.md#cluster)<{ `basic`: [`BitFlag`](exports_schema.md#bitflag-1)  }, { `basic`: ``false``  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `openCommissioningWindow`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`\> ; `revokeCommissioning`: [`Command`](exports_cluster.md#command)<`void`, `void`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

This cluster is used to trigger a Node to allow a new Administrator to commission it.

**`See`**

MatterCoreSpecificationV1_0 § 11.18

#### Defined in

packages/matter.js/dist/cjs/cluster/AdminCommissioningCluster.d.ts:31

___

### AllClustersMap

• `Const` **AllClustersMap**: `Object`

#### Index signature

▪ [key: [`Cluster`](exports_cluster.md#cluster)<`any`, `any`, `any`, `any`, `any`\>[``"id"``]]: [`Cluster`](exports_cluster.md#cluster)<`any`, `any`, `any`, `any`, `any`\>

#### Defined in

packages/matter.js/dist/cjs/cluster/ClusterHelper.d.ts:7

___

### BasicAdminCommissioningCluster

• `Const` **BasicAdminCommissioningCluster**: [`Cluster`](exports_cluster.md#cluster)<{ `basic`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md)\>

#### Defined in

packages/matter.js/dist/cjs/cluster/AdminCommissioningCluster.d.ts:63

___

### BasicInformationCluster

• `Const` **BasicInformationCluster**: [`Cluster`](exports_cluster.md#cluster)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), { `leave`: [`Event`](exports_cluster.md#event)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)\> ; `reachableChanged`: [`Event`](exports_cluster.md#event)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)\> ; `shutDown`: [`Event`](exports_cluster.md#event)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)\> ; `startUp`: [`Event`](exports_cluster.md#event)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)\>  }\>

This cluster provides attributes and events for determining basic information about Nodes, which supports both
commissioning and operational determination of Node characteristics, such as Vendor ID, Product ID and serial number,
which apply to the whole Node. Also allows setting user device information such as location.

**`See`**

MatterCoreSpecificationV1_0 § 11.1

#### Defined in

packages/matter.js/dist/cjs/cluster/BasicInformationCluster.d.ts:14

___

### BindingCluster

• `Const` **BindingCluster**: [`Cluster`](exports_cluster.md#cluster)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A binding represents a persistent relationship between an endpoint and one or more other local or
remote endpoints. A binding does not require that the relationship exists. It is up to the node
application to set up the relationship.

**`See`**

MatterCoreSpecificationV1_0 § 9.6

#### Defined in

packages/matter.js/dist/cjs/cluster/BindingCluster.d.ts:14

___

### BooleanStateCluster

• `Const` **BooleanStateCluster**: [`Cluster`](exports_cluster.md#cluster)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), { `stateChange`: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)  }\>

Attributes and commands for Boolean State.

**`See`**

MatterApplicationClusterSpecificationV1_0 § 1.7

#### Defined in

packages/matter.js/dist/cjs/cluster/BooleanStateCluster.d.ts:12

___

### BridgedDeviceBasicInformationCluster

• `Const` **BridgedDeviceBasicInformationCluster**: [`Cluster`](exports_cluster.md#cluster)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), { `leave`: [`Event`](exports_cluster.md#event)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)\> ; `reachableChanged`: [`Event`](exports_cluster.md#event)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)\> ; `shutDown`: [`Event`](exports_cluster.md#event)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)\> ; `startUp`: [`Event`](exports_cluster.md#event)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)\>  }\>

This Cluster serves two purposes towards a Node communicating with a Bridge:
* indicate that the functionality on the Endpoint where it is placed (and its Parts) is bridged from a
  non-Matter technology, and
* provide a centralized collection of attributes that the Node MAY collect to aid in conveying information
  regarding the Bridged Device to a user, such as the vendor name, the model name, or user-assigned name.

This cluster is Derived from Basic Information Cluster.

**`See`**

MatterCoreSpecificationV1_0 § 9.13

#### Defined in

packages/matter.js/dist/cjs/cluster/BridgedDeviceBasicInformationCluster.d.ts:18

___

### DescriptorCluster

• `Const` **DescriptorCluster**: [`Cluster`](exports_cluster.md#cluster)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

This cluster describes an endpoint instance on the node, independently of other endpoints, but also
allows composition of endpoints to conform to complex device type patterns.
This Cluster is also meant to replace the support from the Zigbee Device Object (ZDO) for describing a node,
its endpoints and clusters.

**`See`**

MatterCoreSpecificationV1_0 § 9.5

#### Defined in

packages/matter.js/dist/cjs/cluster/DescriptorCluster.d.ts:15

___

### EthernetNetworkCommissioningCluster

• `Const` **EthernetNetworkCommissioningCluster**: [`Cluster`](exports_cluster.md#cluster)<{ `ethernet`: [`BitFlag`](exports_schema.md#bitflag-1) ; `thread`: [`BitFlag`](exports_schema.md#bitflag-1) ; `wifi`: [`BitFlag`](exports_schema.md#bitflag-1)  }, { `ethernet`: ``true`` ; `thread`: ``false`` ; `wifi`: ``false``  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

This cluster is used to associate a Node with or manage a Node’s one or more network interfaces.

**`See`**

MatterCoreSpecificationV1_0 § 11.8

#### Defined in

packages/matter.js/dist/cjs/cluster/NetworkCommissioningCluster.d.ts:63

___

### FixedLabelCluster

• `Const` **FixedLabelCluster**: [`Cluster`](exports_cluster.md#cluster)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

This cluster provides a feature for the device to tag an endpoint with zero or more read only labels.
Derived from LabelCluster (MatterCoreSpecificationV1_0 § 9.7)

**`See`**

MatterCoreSpecificationV1_0 § 9.8

#### Defined in

packages/matter.js/dist/cjs/cluster/LabelCluster.d.ts:28

___

### FlowMeasurementCluster

• `Const` **FlowMeasurementCluster**: [`Cluster`](exports_cluster.md#cluster)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

This cluster provides an interface to flow measurement functionality.

**`See`**

MatterApplicationClusterSpecificationV1_0 § 2.5

#### Defined in

packages/matter.js/dist/cjs/cluster/FlowMeasurementCluster.d.ts:12

___

### GeneralCommissioningCluster

• `Const` **GeneralCommissioningCluster**: [`Cluster`](exports_cluster.md#cluster)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `armFailSafe`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)\> ; `commissioningComplete`: [`Command`](exports_cluster.md#command)<`void`, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)\> ; `setRegulatoryConfig`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

This cluster is used to manage global aspects of the Commissioning flow.

**`See`**

MatterCoreSpecificationV1_0 § 11.9

#### Defined in

packages/matter.js/dist/cjs/cluster/GeneralCommissioningCluster.d.ts:56

___

### GeneralCommissioningClusterHandler

• `Const` **GeneralCommissioningClusterHandler**: [`ClusterServerHandlers`](exports_cluster.md#clusterserverhandlers)<typeof [`GeneralCommissioningCluster`](exports_cluster.md#generalcommissioningcluster)\>

#### Defined in

packages/matter.js/dist/cjs/cluster/server/GeneralCommissioningServer.d.ts:8

___

### GeneralDiagnosticsCluster

• `Const` **GeneralDiagnosticsCluster**: [`Cluster`](exports_cluster.md#cluster)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `testEventTrigger`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`\>  }, { `bootReason`: [`Event`](exports_cluster.md#event)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)\> ; `hardwareFaultChange`: [`Event`](exports_cluster.md#event)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)\> ; `networkFaultChange`: [`Event`](exports_cluster.md#event)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)\> ; `radioFaultChange`: [`Event`](exports_cluster.md#event)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)\>  }\>

The General Diagnostics Cluster, along with other diagnostics clusters, provide a means to acquire
standardized diagnostics metrics that MAY be used by a Node to assist a user or Administrator in
diagnosing potential problems. The General Diagnostics Cluster attempts to centralize all metrics
that are broadly relevant to the majority of Nodes.

**`See`**

MatterCoreSpecificationV1_0 § 11.11

#### Defined in

packages/matter.js/dist/cjs/cluster/GeneralDiagnosticsCluster.d.ts:64

___

### GroupKeyManagementCluster

• `Const` **GroupKeyManagementCluster**: [`Cluster`](exports_cluster.md#cluster)<{ `cacheAndSync`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `keySetRead`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)\> ; `keySetReadAllIndices`: [`Command`](exports_cluster.md#command)<`void`, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)\> ; `keySetRemove`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`\> ; `keySetWrite`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

The Group Key Management Cluster is the mechanism by which group keys are managed.

**`See`**

MatterCoreSpecificationV1_0 § 11.2

#### Defined in

packages/matter.js/dist/cjs/cluster/GroupKeyManagementCluster.d.ts:27

___

### GroupsCluster

• `Const` **GroupsCluster**: [`Cluster`](exports_cluster.md#cluster)<{ `groupNames`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `addGroup`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)\> ; `addGroupIfIdentifying`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`\> ; `getGroupMembership`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)\> ; `removeAllGroups`: [`Command`](exports_cluster.md#command)<`void`, `void`\> ; `removeGroup`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)\> ; `viewGroup`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

The Groups cluster manages, per endpoint, the content of the node-wide Group
Table that is part of the underlying interaction layer.

**`See`**

MatterApplicationClusterSpecificationV1_0 § 1.3

#### Defined in

packages/matter.js/dist/cjs/cluster/GroupsCluster.d.ts:15

___

### IdentifyCluster

• `Const` **IdentifyCluster**: [`Cluster`](exports_cluster.md#cluster)<{ `query`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `identify`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`\> ; `triggerEffect`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

Attributes and commands for putting a device into Identification mode (e.g. flashing a light).

**`See`**

MatterApplicationClusterSpecificationV1_0 § 1.2

#### Defined in

packages/matter.js/dist/cjs/cluster/IdentifyCluster.d.ts:36

___

### IlluminanceMeasurementCluster

• `Const` **IlluminanceMeasurementCluster**: [`Cluster`](exports_cluster.md#cluster)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

The Illuminance Measurement cluster provides an interface to illuminance measurement functionality.

**`See`**

MatterApplicationClusterSpecificationV1_0 § 2.2

#### Defined in

packages/matter.js/dist/cjs/cluster/IlluminanceMeasurementCluster.d.ts:12

___

### LeafWetnessMeasurementCluster

• `Const` **LeafWetnessMeasurementCluster**: [`Cluster`](exports_cluster.md#cluster)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

Attributes and commands for Percentage of water in plants.

**`See`**

MatterApplicationClusterSpecificationV1_0 § 2.6.3

#### Defined in

packages/matter.js/dist/cjs/cluster/WaterContentMeasurementCluster.d.ts:30

___

### LevelControlCluster

• `Const` **LevelControlCluster**: [`Cluster`](exports_cluster.md#cluster)<{ `frequency`: [`BitFlag`](exports_schema.md#bitflag-1) ; `lighting`: [`BitFlag`](exports_schema.md#bitflag-1) ; `onOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `move`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`\> ; `moveToLevel`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`\> ; `moveToLevelWithOnOff`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`\> ; `moveWithOnOff`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`\> ; `step`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`\> ; `stepWithOnOff`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`\> ; `stop`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`\> ; `stopWithOnOff`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

Attributes and commands for changing the level of devices, e.g. light intensity

**`See`**

MatterApplicationClusterSpecificationV1_0 § 1.6

#### Defined in

packages/matter.js/dist/cjs/cluster/LevelControlCluster.d.ts:23

___

### OccupancyBitmap

• `Const` **OccupancyBitmap**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvWrapper"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvWrapper_.md)

**`See`**

MatterApplicationClusterSpecificationV1_0 § 2.7.5.1

#### Defined in

packages/matter.js/dist/cjs/cluster/OccupancySensingCluster.d.ts:9

___

### OccupancySensingCluster

• `Const` **OccupancySensingCluster**: [`Cluster`](exports_cluster.md#cluster)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

Attributes and commands for Occupancy Detection.

**`See`**

MatterApplicationClusterSpecificationV1_0 § 2.7

#### Defined in

packages/matter.js/dist/cjs/cluster/OccupancySensingCluster.d.ts:30

___

### OccupancySensorTypeBitmap

• `Const` **OccupancySensorTypeBitmap**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvWrapper"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvWrapper_.md)

**`See`**

MatterApplicationClusterSpecificationV1_0 § 2.7.5.3

#### Defined in

packages/matter.js/dist/cjs/cluster/OccupancySensingCluster.d.ts:20

___

### OnOffCluster

• `Const` **OnOffCluster**: [`Cluster`](exports_cluster.md#cluster)<{ `lightingLevelControl`: [`BitFlag`](exports_schema.md#bitflag-1)  }, { `lightingLevelControl`: ``false``  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `off`: [`Command`](exports_cluster.md#command)<`void`, `void`\> ; `on`: [`Command`](exports_cluster.md#command)<`void`, `void`\> ; `toggle`: [`Command`](exports_cluster.md#command)<`void`, `void`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

Attributes and commands for switching devices between 'On' and 'Off' states.

**`See`**

MatterApplicationClusterSpecificationV1_0 § 1.5

#### Defined in

packages/matter.js/dist/cjs/cluster/OnOffCluster.d.ts:50

___

### OnOffLightingCluster

• `Const` **OnOffLightingCluster**: [`Cluster`](exports_cluster.md#cluster)<{ `lightingLevelControl`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md)\>

#### Defined in

packages/matter.js/dist/cjs/cluster/OnOffCluster.d.ts:84

___

### OperationalCredentialsCluster

• `Const` **OperationalCredentialsCluster**: [`Cluster`](exports_cluster.md#cluster)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `addOperationalCert`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)\> ; `addRootCert`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`\> ; `removeFabric`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)\> ; `requestAttestation`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)\> ; `requestCertChain`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)\> ; `requestCertSigning`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)\> ; `updateFabricLabel`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)\> ; `updateOperationalCert`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

This cluster is used to add or remove Operational Credentials on a Commissionee or Node, as well as manage the
associated Fabrics.

**`See`**

MatterCoreSpecificationV1_0 § 11.17

#### Defined in

packages/matter.js/dist/cjs/cluster/OperationalCredentialsCluster.d.ts:68

___

### PowerSourceCluster

• `Const` **PowerSourceCluster**: [`Cluster`](exports_cluster.md#cluster)<{ `battery`: [`BitFlag`](exports_schema.md#bitflag-1) ; `rechargeable`: [`BitFlag`](exports_schema.md#bitflag-1) ; `replaceable`: [`BitFlag`](exports_schema.md#bitflag-1) ; `wired`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), { `batChargeFaultChange`: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md) ; `batFaultChange`: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md) ; `wiredFaultChange`: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)  }\>

This cluster is used to describe the configuration and capabilities of a physical power source that
provides power to the Node. In case the Node has multiple power sources, each is described by its
own Power Source cluster. The Power Source Configuration cluster referenced by the Root Node
device type for the Node provides the overview of the power source(s) of the Node.

**`See`**

MatterCoreSpecificationV1_0 § 11.7

#### Defined in

packages/matter.js/dist/cjs/cluster/PowerSourceCluster.d.ts:228

___

### PowerSourceConfigurationCluster

• `Const` **PowerSourceConfigurationCluster**: [`Cluster`](exports_cluster.md#cluster)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

This cluster is used to describe the configuration and capabilities of a Device’s power system.
It provides an ordering overview as well as linking to the one or more endpoints each supporting a
PowerSource cluster.

#### Defined in

packages/matter.js/dist/cjs/cluster/PowerSourceConfigurationCluster.d.ts:17

___

### PressureMeasurementCluster

• `Const` **PressureMeasurementCluster**: [`Cluster`](exports_cluster.md#cluster)<{ `extended`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

This cluster provides an interface to pressure measurement functionality.

**`See`**

MatterApplicationClusterSpecificationV1_0 § 2.4

#### Defined in

packages/matter.js/dist/cjs/cluster/PressureMeasurementCluster.d.ts:13

___

### PulseWidthModulationLevelControlCluster

• `Const` **PulseWidthModulationLevelControlCluster**: [`Cluster`](exports_cluster.md#cluster)<{ `frequency`: [`BitFlag`](exports_schema.md#bitflag-1) ; `lighting`: [`BitFlag`](exports_schema.md#bitflag-1) ; `onOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `move`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`\> ; `moveToClosestFrequency`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`\> ; `moveToLevel`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`\> ; `moveToLevelWithOnOff`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`\> ; `moveWithOnOff`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`\> ; `step`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`\> ; `stepWithOnOff`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`\> ; `stop`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`\> ; `stopWithOnOff`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

Attributes and commands for Pulse Width Modulation (Provisional)

**`See`**

MatterApplicationClusterSpecificationV1_0 § 1.6.3

#### Defined in

packages/matter.js/dist/cjs/cluster/LevelControlCluster.d.ts:213

___

### RESP\_MAX

• `Const` **RESP\_MAX**: ``900``

**`See`**

MatterCoreSpecificationV1_0 § 11.17.5.1

#### Defined in

packages/matter.js/dist/cjs/cluster/OperationalCredentialsCluster.d.ts:9

___

### RelativeHumidityCluster

• `Const` **RelativeHumidityCluster**: [`Cluster`](exports_cluster.md#cluster)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

Attributes and commands for Percentage of water in the air.

**`See`**

MatterApplicationClusterSpecificationV1_0 § 2.6.3

#### Defined in

packages/matter.js/dist/cjs/cluster/WaterContentMeasurementCluster.d.ts:12

___

### ScenesCluster

• `Const` **ScenesCluster**: [`Cluster`](exports_cluster.md#cluster)<{ `sceneNames`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `addScene`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)\> ; `copyScene`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)\> ; `enhancedAddScene`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)\> ; `enhancedViewScene`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)\> ; `getSceneMembership`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)\> ; `recallScene`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`\> ; `removeAllScenes`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)\> ; `removeScene`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)\> ; `storeScene`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)\> ; `viewScene`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

The Scenes cluster provides attributes and commands for setting up and recalling scenes.
Each scene corresponds to a set of stored values of specified attributes for one or more
clusters on the same end point as the Scenes cluster.

**`See`**

MatterApplicationClusterSpecificationV1_0 § 1.4

#### Defined in

packages/matter.js/dist/cjs/cluster/ScenesCluster.d.ts:50

___

### SoilMoistureMeasurementCluster

• `Const` **SoilMoistureMeasurementCluster**: [`Cluster`](exports_cluster.md#cluster)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

Attributes and commands for Percentage of water in the soil.

**`See`**

MatterApplicationClusterSpecificationV1_0 § 2.6.3

#### Defined in

packages/matter.js/dist/cjs/cluster/WaterContentMeasurementCluster.d.ts:48

___

### TemperatureMeasurementCluster

• `Const` **TemperatureMeasurementCluster**: [`Cluster`](exports_cluster.md#cluster)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

This cluster provides an interface to temperature measurement functionality.

**`See`**

MatterApplicationClusterSpecificationV1_0 § 2.3

#### Defined in

packages/matter.js/dist/cjs/cluster/TemperatureMeasurementCluster.d.ts:12

___

### ThreadAndEthernetNetworkCommissioningCluster

• `Const` **ThreadAndEthernetNetworkCommissioningCluster**: [`Cluster`](exports_cluster.md#cluster)<{ `ethernet`: [`BitFlag`](exports_schema.md#bitflag-1) ; `thread`: [`BitFlag`](exports_schema.md#bitflag-1) ; `wifi`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md)\>

#### Defined in

packages/matter.js/dist/cjs/cluster/NetworkCommissioningCluster.d.ts:537

___

### ThreadNetworkCommissioningCluster

• `Const` **ThreadNetworkCommissioningCluster**: [`Cluster`](exports_cluster.md#cluster)<{ `ethernet`: [`BitFlag`](exports_schema.md#bitflag-1) ; `thread`: [`BitFlag`](exports_schema.md#bitflag-1) ; `wifi`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md)\>

#### Defined in

packages/matter.js/dist/cjs/cluster/NetworkCommissioningCluster.d.ts:392

___

### TlvAttestation

• `Const` **TlvAttestation**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0 § 11.17.5.4

#### Defined in

packages/matter.js/dist/cjs/cluster/OperationalCredentialsCluster.d.ts:48

___

### TlvAttributeValuePair

• `Const` **TlvAttributeValuePair**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterApplicationClusterSpecificationV1_0 § 1.4.6.1

#### Defined in

packages/matter.js/dist/cjs/cluster/ScenesCluster.d.ts:11

___

### TlvCertSigningRequest

• `Const` **TlvCertSigningRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0 § 11.17.5.6

#### Defined in

packages/matter.js/dist/cjs/cluster/OperationalCredentialsCluster.d.ts:55

___

### TlvExtensionFieldSet

• `Const` **TlvExtensionFieldSet**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

This data type indicates for a given cluster a set of attributes and their values. Only attributes which
have the "S" designation in the Quality column of the cluster specification SHALL be used in the
AttributeValueList field.

**`See`**

MatterApplicationClusterSpecificationV1_0 § 1.4.6.2

#### Defined in

packages/matter.js/dist/cjs/cluster/ScenesCluster.d.ts:29

___

### TlvNoResponse

• `Const` **TlvNoResponse**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvVoid"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvVoid_.md)

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:58

___

### TlvWiFiSecurity

• `Const` **TlvWiFiSecurity**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvWrapper"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvWrapper_.md)

**`See`**

MatterApplicationClusterSpecificationV1_0 § 11.8.6.1

#### Defined in

packages/matter.js/dist/cjs/cluster/NetworkCommissioningCluster.d.ts:51

___

### UserLabelCluster

• `Const` **UserLabelCluster**: [`Cluster`](exports_cluster.md#cluster)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

This cluster provides a feature to tag an endpoint with zero or more labels.
Derived from LabelCluster (MatterCoreSpecificationV1_0 § 9.7)

**`See`**

MatterCoreSpecificationV1_0 § 9.9

#### Defined in

packages/matter.js/dist/cjs/cluster/LabelCluster.d.ts:13

___

### WifiAndEthernetAndThreadNetworkCommissioningCluster

• `Const` **WifiAndEthernetAndThreadNetworkCommissioningCluster**: [`Cluster`](exports_cluster.md#cluster)<{ `ethernet`: [`BitFlag`](exports_schema.md#bitflag-1) ; `thread`: [`BitFlag`](exports_schema.md#bitflag-1) ; `wifi`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md)\>

#### Defined in

packages/matter.js/dist/cjs/cluster/NetworkCommissioningCluster.d.ts:686

___

### WifiAndEthernetNetworkCommissioningCluster

• `Const` **WifiAndEthernetNetworkCommissioningCluster**: [`Cluster`](exports_cluster.md#cluster)<{ `ethernet`: [`BitFlag`](exports_schema.md#bitflag-1) ; `thread`: [`BitFlag`](exports_schema.md#bitflag-1) ; `wifi`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md)\>

#### Defined in

packages/matter.js/dist/cjs/cluster/NetworkCommissioningCluster.d.ts:241

___

### WifiNetworkCommissioningCluster

• `Const` **WifiNetworkCommissioningCluster**: [`Cluster`](exports_cluster.md#cluster)<{ `ethernet`: [`BitFlag`](exports_schema.md#bitflag-1) ; `thread`: [`BitFlag`](exports_schema.md#bitflag-1) ; `wifi`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md)\>

#### Defined in

packages/matter.js/dist/cjs/cluster/NetworkCommissioningCluster.d.ts:94

## Functions

### AdminCommissioningHandler

▸ **AdminCommissioningHandler**(`secureChannelProtocol`): [`ClusterServerHandlers`](exports_cluster.md#clusterserverhandlers)<[`Cluster`](exports_cluster.md#cluster)<{ `basic`: [`BitFlag`](exports_schema.md#bitflag-1)  }, { `basic`: ``false``  }, [`Merge`](util.md#merge)<{ `adminFabricIndex`: [`Attribute`](exports_cluster.md#attribute)<``null`` \| [`FabricIndex`](../classes/exports_datatype.FabricIndex.md)\> ; `adminVendorId`: [`Attribute`](exports_cluster.md#attribute)<``null`` \| [`VendorId`](../classes/exports_datatype.VendorId.md)\> ; `windowStatus`: [`Attribute`](exports_cluster.md#attribute)<[`CommissioningWindowStatus`](../enums/exports_cluster.CommissioningWindowStatus.md)\>  }, [`GlobalAttributes`](exports_cluster.md#globalattributes-1)<{ `basic`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\>, { `openCommissioningWindow`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `commissioningTimeout`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `discriminator`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `iterations`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `pakePasscodeVerifier`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\> ; `salt`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\>  }\>, `void`\> ; `revokeCommissioning`: [`Command`](exports_cluster.md#command)<`void`, `void`\>  }, [`Events`](../interfaces/exports_cluster.Events.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `secureChannelProtocol` | [`SecureChannelProtocol`](../classes/exports_securechannel.SecureChannelProtocol.md) |

#### Returns

[`ClusterServerHandlers`](exports_cluster.md#clusterserverhandlers)<[`Cluster`](exports_cluster.md#cluster)<{ `basic`: [`BitFlag`](exports_schema.md#bitflag-1)  }, { `basic`: ``false``  }, [`Merge`](util.md#merge)<{ `adminFabricIndex`: [`Attribute`](exports_cluster.md#attribute)<``null`` \| [`FabricIndex`](../classes/exports_datatype.FabricIndex.md)\> ; `adminVendorId`: [`Attribute`](exports_cluster.md#attribute)<``null`` \| [`VendorId`](../classes/exports_datatype.VendorId.md)\> ; `windowStatus`: [`Attribute`](exports_cluster.md#attribute)<[`CommissioningWindowStatus`](../enums/exports_cluster.CommissioningWindowStatus.md)\>  }, [`GlobalAttributes`](exports_cluster.md#globalattributes-1)<{ `basic`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\>, { `openCommissioningWindow`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `commissioningTimeout`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `discriminator`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `iterations`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `pakePasscodeVerifier`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\> ; `salt`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\>  }\>, `void`\> ; `revokeCommissioning`: [`Command`](exports_cluster.md#command)<`void`, `void`\>  }, [`Events`](../interfaces/exports_cluster.Events.md)\>\>

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AdminCommissioningServer.d.ts:9

___

### Attribute

▸ **Attribute**<`T`, `V`\>(`id`, `schema`, `«destructured»?`): [`Attribute`](exports_cluster.md#attribute)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `schema` | [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)<`T`\> |
| `«destructured»` | [`AttributeOptions`](../interfaces/index._internal_.AttributeOptions.md)<`V`\> |

#### Returns

[`Attribute`](exports_cluster.md#attribute)<`T`\>

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:48

___

### Cluster

▸ **Cluster**<`F`, `SF`, `A`, `C`, `E`\>(`«destructured»`): [`Cluster`](exports_cluster.md#cluster)<`F`, `SF`, [`Merge`](util.md#merge)<`A`, [`GlobalAttributes`](exports_cluster.md#globalattributes-1)<`F`\>\>, `C`, `E`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](exports_schema.md#bitschema) |
| `SF` | extends [`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/exports_cluster.Commands.md) |
| `E` | extends [`Events`](../interfaces/exports_cluster.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `attributes?` | `A` |
| › `commands?` | `C` |
| › `events?` | `E` |
| › `features?` | `F` |
| › `id` | `number` |
| › `name` | `string` |
| › `revision` | `number` |
| › `supportedFeatures?` | `SF` |

#### Returns

[`Cluster`](exports_cluster.md#cluster)<`F`, `SF`, [`Merge`](util.md#merge)<`A`, [`GlobalAttributes`](exports_cluster.md#globalattributes-1)<`F`\>\>, `C`, `E`\>

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:123

___

### ClusterExtend

▸ **ClusterExtend**<`F`, `SF_BASE`, `A_BASE`, `C_BASE`, `E_BASE`, `SF_EXTEND`, `A_EXTEND`, `C_EXTEND`, `E_EXTEND`\>(`«destructured»`, `«destructured»`): [`Cluster`](exports_cluster.md#cluster)<`F`, [`Merge`](util.md#merge)<`SF_BASE`, `SF_EXTEND`\>, [`Merge`](util.md#merge)<`A_BASE`, `A_EXTEND`\>, [`Merge`](util.md#merge)<`C_BASE`, `C_EXTEND`\>, [`Merge`](util.md#merge)<`E_BASE`, `E_EXTEND`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](exports_schema.md#bitschema) |
| `SF_BASE` | extends [`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<`F`\> |
| `A_BASE` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `C_BASE` | extends [`Commands`](../interfaces/exports_cluster.Commands.md) |
| `E_BASE` | extends [`Events`](../interfaces/exports_cluster.Events.md) |
| `SF_EXTEND` | extends [`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<`F`\> |
| `A_EXTEND` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `C_EXTEND` | extends [`Commands`](../interfaces/exports_cluster.Commands.md) |
| `E_EXTEND` | extends [`Events`](../interfaces/exports_cluster.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Cluster`](exports_cluster.md#cluster)<`F`, `SF_BASE`, `A_BASE`, `C_BASE`, `E_BASE`\> |
| `«destructured»` | [`ClusterExtend`](index._internal_.md#clusterextend-1)<`F`, `SF_EXTEND`, `A_EXTEND`, `C_EXTEND`, `E_EXTEND`\> |

#### Returns

[`Cluster`](exports_cluster.md#cluster)<`F`, [`Merge`](util.md#merge)<`SF_BASE`, `SF_EXTEND`\>, [`Merge`](util.md#merge)<`A_BASE`, `A_EXTEND`\>, [`Merge`](util.md#merge)<`C_BASE`, `C_EXTEND`\>, [`Merge`](util.md#merge)<`E_BASE`, `E_EXTEND`\>\>

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:139

___

### Command

▸ **Command**<`RequestT`, `ResponseT`\>(`requestId`, `requestSchema`, `responseId`, `responseSchema`): [`Command`](exports_cluster.md#command)<`RequestT`, `ResponseT`\>

#### Type parameters

| Name |
| :------ |
| `RequestT` |
| `ResponseT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestId` | `number` |
| `requestSchema` | [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)<`RequestT`\> |
| `responseId` | `number` |
| `responseSchema` | [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)<`ResponseT`\> |

#### Returns

[`Command`](exports_cluster.md#command)<`RequestT`, `ResponseT`\>

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:71

___

### Event

▸ **Event**<`FT`\>(`id`, `priority`, `data?`): [`Event`](exports_cluster.md#event)<[`TypeFromFields`](exports_tlv.md#typefromfields)<`FT`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FT` | extends [`TlvFields`](exports_tlv.md#tlvfields) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `priority` | [`EventPriority`](../enums/exports_cluster.EventPriority.md) |
| `data?` | `FT` |

#### Returns

[`Event`](exports_cluster.md#event)<[`TypeFromFields`](exports_tlv.md#typefromfields)<`FT`\>\>

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:86

___

### GlobalAttributes

▸ **GlobalAttributes**<`F`\>(`features`): [`GlobalAttributes`](exports_cluster.md#globalattributes-1)<`F`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](exports_schema.md#bitschema) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `features` | `F` |

#### Returns

[`GlobalAttributes`](exports_cluster.md#globalattributes-1)<`F`\>

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:112

___

### GroupKeyManagementClusterHandler

▸ **GroupKeyManagementClusterHandler**(): [`ClusterServerHandlers`](exports_cluster.md#clusterserverhandlers)<[`Cluster`](exports_cluster.md#cluster)<{ `cacheAndSync`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<{ `cacheAndSync`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`Merge`](util.md#merge)<{ `groupKeyMap`: [`WritableAttribute`](exports_cluster.md#writableattribute)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `groupKeySetId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\>  }\>[]\> ; `groupTable`: [`Attribute`](exports_cluster.md#attribute)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `endPoints`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`EndpointNumber`](../classes/exports_datatype.EndpointNumber.md)[]\> ; `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `groupName`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`string`\>  }\>[]\> ; `maxGroupKeysPerFabric`: [`Attribute`](exports_cluster.md#attribute)<`number`\> ; `maxGroupsPerFabric`: [`Attribute`](exports_cluster.md#attribute)<`number`\>  }, [`GlobalAttributes`](exports_cluster.md#globalattributes-1)<{ `cacheAndSync`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\>, { `keySetRead`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupKeySetId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupKeySet`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `GroupKeyMulticastPolicy`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupKeySecurityPolicy`](../enums/exports_cluster.GroupKeySecurityPolicy.md)\> ; `epochKey0`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<``null`` \| `string`\> ; `epochKey1`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<``null`` \| `string`\> ; `epochKey2`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<``null`` \| `string`\> ; `epochStartTime0`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<``null`` \| `number` \| `bigint`\> ; `epochStartTime1`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<``null`` \| `number` \| `bigint`\> ; `epochStartTime2`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<``null`` \| `number` \| `bigint`\> ; `groupKeySecurityPolicy`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupKeySecurityPolicy`](../enums/exports_cluster.GroupKeySecurityPolicy.md)\> ; `groupKeySetID`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\>  }\>\>  }\>\> ; `keySetReadAllIndices`: [`Command`](exports_cluster.md#command)<`void`, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupKeySetIds`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`[]\>  }\>\> ; `keySetRemove`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupKeySetId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\>  }\>, `void`\> ; `keySetWrite`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupKeySet`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `GroupKeyMulticastPolicy`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupKeySecurityPolicy`](../enums/exports_cluster.GroupKeySecurityPolicy.md)\> ; `epochKey0`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<``null`` \| `string`\> ; `epochKey1`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<``null`` \| `string`\> ; `epochKey2`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<``null`` \| `string`\> ; `epochStartTime0`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<``null`` \| `number` \| `bigint`\> ; `epochStartTime1`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<``null`` \| `number` \| `bigint`\> ; `epochStartTime2`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<``null`` \| `number` \| `bigint`\> ; `groupKeySecurityPolicy`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupKeySecurityPolicy`](../enums/exports_cluster.GroupKeySecurityPolicy.md)\> ; `groupKeySetID`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\>  }\>\>  }\>, `void`\>  }, [`Events`](../interfaces/exports_cluster.Events.md)\>\>

#### Returns

[`ClusterServerHandlers`](exports_cluster.md#clusterserverhandlers)<[`Cluster`](exports_cluster.md#cluster)<{ `cacheAndSync`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<{ `cacheAndSync`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`Merge`](util.md#merge)<{ `groupKeyMap`: [`WritableAttribute`](exports_cluster.md#writableattribute)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `groupKeySetId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\>  }\>[]\> ; `groupTable`: [`Attribute`](exports_cluster.md#attribute)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `endPoints`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`EndpointNumber`](../classes/exports_datatype.EndpointNumber.md)[]\> ; `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `groupName`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`string`\>  }\>[]\> ; `maxGroupKeysPerFabric`: [`Attribute`](exports_cluster.md#attribute)<`number`\> ; `maxGroupsPerFabric`: [`Attribute`](exports_cluster.md#attribute)<`number`\>  }, [`GlobalAttributes`](exports_cluster.md#globalattributes-1)<{ `cacheAndSync`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\>, { `keySetRead`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupKeySetId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupKeySet`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `GroupKeyMulticastPolicy`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupKeySecurityPolicy`](../enums/exports_cluster.GroupKeySecurityPolicy.md)\> ; `epochKey0`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<``null`` \| `string`\> ; `epochKey1`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<``null`` \| `string`\> ; `epochKey2`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<``null`` \| `string`\> ; `epochStartTime0`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<``null`` \| `number` \| `bigint`\> ; `epochStartTime1`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<``null`` \| `number` \| `bigint`\> ; `epochStartTime2`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<``null`` \| `number` \| `bigint`\> ; `groupKeySecurityPolicy`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupKeySecurityPolicy`](../enums/exports_cluster.GroupKeySecurityPolicy.md)\> ; `groupKeySetID`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\>  }\>\>  }\>\> ; `keySetReadAllIndices`: [`Command`](exports_cluster.md#command)<`void`, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupKeySetIds`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`[]\>  }\>\> ; `keySetRemove`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupKeySetId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\>  }\>, `void`\> ; `keySetWrite`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupKeySet`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `GroupKeyMulticastPolicy`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupKeySecurityPolicy`](../enums/exports_cluster.GroupKeySecurityPolicy.md)\> ; `epochKey0`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<``null`` \| `string`\> ; `epochKey1`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<``null`` \| `string`\> ; `epochKey2`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<``null`` \| `string`\> ; `epochStartTime0`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<``null`` \| `number` \| `bigint`\> ; `epochStartTime1`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<``null`` \| `number` \| `bigint`\> ; `epochStartTime2`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<``null`` \| `number` \| `bigint`\> ; `groupKeySecurityPolicy`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupKeySecurityPolicy`](../enums/exports_cluster.GroupKeySecurityPolicy.md)\> ; `groupKeySetID`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\>  }\>\>  }\>, `void`\>  }, [`Events`](../interfaces/exports_cluster.Events.md)\>\>

#### Defined in

packages/matter.js/dist/cjs/cluster/server/GroupKeyManagementServer.d.ts:8

___

### GroupsClusterHandler

▸ **GroupsClusterHandler**(): [`ClusterServerHandlers`](exports_cluster.md#clusterserverhandlers)<[`Cluster`](exports_cluster.md#cluster)<{ `groupNames`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<{ `groupNames`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`Merge`](util.md#merge)<{ `nameSupport`: [`Attribute`](exports_cluster.md#attribute)<[`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<{ `groupNames`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\>  }, [`GlobalAttributes`](exports_cluster.md#globalattributes-1)<{ `groupNames`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\>, { `addGroup`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `groupName`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`string`\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\> ; `addGroupIfIdentifying`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `groupName`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`string`\>  }\>, `void`\> ; `getGroupMembership`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupList`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)[]\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `capacity`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<``null`` \| `number`\> ; `groupList`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)[]\>  }\>\> ; `removeAllGroups`: [`Command`](exports_cluster.md#command)<`void`, `void`\> ; `removeGroup`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\> ; `viewGroup`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `groupName`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`string`\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\>  }, [`Events`](../interfaces/exports_cluster.Events.md)\>\>

#### Returns

[`ClusterServerHandlers`](exports_cluster.md#clusterserverhandlers)<[`Cluster`](exports_cluster.md#cluster)<{ `groupNames`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<{ `groupNames`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`Merge`](util.md#merge)<{ `nameSupport`: [`Attribute`](exports_cluster.md#attribute)<[`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<{ `groupNames`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\>  }, [`GlobalAttributes`](exports_cluster.md#globalattributes-1)<{ `groupNames`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\>, { `addGroup`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `groupName`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`string`\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\> ; `addGroupIfIdentifying`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `groupName`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`string`\>  }\>, `void`\> ; `getGroupMembership`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupList`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)[]\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `capacity`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<``null`` \| `number`\> ; `groupList`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)[]\>  }\>\> ; `removeAllGroups`: [`Command`](exports_cluster.md#command)<`void`, `void`\> ; `removeGroup`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\> ; `viewGroup`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `groupName`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`string`\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\>  }, [`Events`](../interfaces/exports_cluster.Events.md)\>\>

#### Defined in

packages/matter.js/dist/cjs/cluster/server/GroupsServer.d.ts:19

___

### LevelControlClusterHandler

▸ **LevelControlClusterHandler**(): [`ClusterServerHandlers`](exports_cluster.md#clusterserverhandlers)<[`Cluster`](exports_cluster.md#cluster)<{ `frequency`: [`BitFlag`](exports_schema.md#bitflag-1) ; `lighting`: [`BitFlag`](exports_schema.md#bitflag-1) ; `onOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<{ `frequency`: [`BitFlag`](exports_schema.md#bitflag-1) ; `lighting`: [`BitFlag`](exports_schema.md#bitflag-1) ; `onOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`Merge`](util.md#merge)<{ `currentLevel`: [`Attribute`](exports_cluster.md#attribute)<``null`` \| `number`\> ; `defaultMoveRate`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<``null`` \| `number`\> ; `maxLevel`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`\> ; `minLevel`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`\> ; `offTransitionTime`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<``null`` \| `number`\> ; `onLevel`: [`WritableAttribute`](exports_cluster.md#writableattribute)<``null`` \| `number`\> ; `onOffTransitionTime`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`\> ; `onTransitionTime`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<``null`` \| `number`\> ; `options`: [`WritableAttribute`](exports_cluster.md#writableattribute)<[`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](exports_schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\> ; `remainingTime`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`\> ; `startUpCurrentLevel`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<``null`` \| `number`\>  }, [`GlobalAttributes`](exports_cluster.md#globalattributes-1)<{ `frequency`: [`BitFlag`](exports_schema.md#bitflag-1) ; `lighting`: [`BitFlag`](exports_schema.md#bitflag-1) ; `onOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\>, { `move`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `moveMode`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`MoveMode`](../enums/exports_cluster.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](exports_schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](exports_schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\> ; `rate`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<``null`` \| `number`\>  }\>, `void`\> ; `moveToLevel`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `level`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](exports_schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](exports_schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<``null`` \| `number`\>  }\>, `void`\> ; `moveToLevelWithOnOff`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `level`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](exports_schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](exports_schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<``null`` \| `number`\>  }\>, `void`\> ; `moveWithOnOff`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `moveMode`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`MoveMode`](../enums/exports_cluster.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](exports_schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](exports_schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\> ; `rate`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<``null`` \| `number`\>  }\>, `void`\> ; `step`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](exports_schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](exports_schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`StepMode`](../enums/exports_cluster.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<``null`` \| `number`\>  }\>, `void`\> ; `stepWithOnOff`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](exports_schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](exports_schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`StepMode`](../enums/exports_cluster.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<``null`` \| `number`\>  }\>, `void`\> ; `stop`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](exports_schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](exports_schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\>  }\>, `void`\> ; `stopWithOnOff`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](exports_schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](exports_schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\>  }\>, `void`\>  }, [`Events`](../interfaces/exports_cluster.Events.md)\>\>

#### Returns

[`ClusterServerHandlers`](exports_cluster.md#clusterserverhandlers)<[`Cluster`](exports_cluster.md#cluster)<{ `frequency`: [`BitFlag`](exports_schema.md#bitflag-1) ; `lighting`: [`BitFlag`](exports_schema.md#bitflag-1) ; `onOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<{ `frequency`: [`BitFlag`](exports_schema.md#bitflag-1) ; `lighting`: [`BitFlag`](exports_schema.md#bitflag-1) ; `onOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`Merge`](util.md#merge)<{ `currentLevel`: [`Attribute`](exports_cluster.md#attribute)<``null`` \| `number`\> ; `defaultMoveRate`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<``null`` \| `number`\> ; `maxLevel`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`\> ; `minLevel`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`\> ; `offTransitionTime`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<``null`` \| `number`\> ; `onLevel`: [`WritableAttribute`](exports_cluster.md#writableattribute)<``null`` \| `number`\> ; `onOffTransitionTime`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`\> ; `onTransitionTime`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<``null`` \| `number`\> ; `options`: [`WritableAttribute`](exports_cluster.md#writableattribute)<[`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](exports_schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\> ; `remainingTime`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`\> ; `startUpCurrentLevel`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<``null`` \| `number`\>  }, [`GlobalAttributes`](exports_cluster.md#globalattributes-1)<{ `frequency`: [`BitFlag`](exports_schema.md#bitflag-1) ; `lighting`: [`BitFlag`](exports_schema.md#bitflag-1) ; `onOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\>, { `move`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `moveMode`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`MoveMode`](../enums/exports_cluster.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](exports_schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](exports_schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\> ; `rate`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<``null`` \| `number`\>  }\>, `void`\> ; `moveToLevel`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `level`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](exports_schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](exports_schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<``null`` \| `number`\>  }\>, `void`\> ; `moveToLevelWithOnOff`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `level`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](exports_schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](exports_schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<``null`` \| `number`\>  }\>, `void`\> ; `moveWithOnOff`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `moveMode`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`MoveMode`](../enums/exports_cluster.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](exports_schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](exports_schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\> ; `rate`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<``null`` \| `number`\>  }\>, `void`\> ; `step`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](exports_schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](exports_schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`StepMode`](../enums/exports_cluster.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<``null`` \| `number`\>  }\>, `void`\> ; `stepWithOnOff`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](exports_schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](exports_schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`StepMode`](../enums/exports_cluster.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<``null`` \| `number`\>  }\>, `void`\> ; `stop`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](exports_schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](exports_schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\>  }\>, `void`\> ; `stopWithOnOff`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](exports_schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](exports_schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\>  }\>, `void`\>  }, [`Events`](../interfaces/exports_cluster.Events.md)\>\>

#### Defined in

packages/matter.js/dist/cjs/cluster/server/LevelControlServer.d.ts:8

___

### NetworkCommissioningHandler

▸ **NetworkCommissioningHandler**(): [`ClusterServerHandlers`](exports_cluster.md#clusterserverhandlers)<[`Cluster`](exports_cluster.md#cluster)<{ `ethernet`: [`BitFlag`](exports_schema.md#bitflag-1) ; `thread`: [`BitFlag`](exports_schema.md#bitflag-1) ; `wifi`: [`BitFlag`](exports_schema.md#bitflag-1)  }, { `ethernet`: ``true`` ; `thread`: ``false`` ; `wifi`: ``false``  }, [`Merge`](util.md#merge)<{ `interfaceEnabled`: [`WritableAttribute`](exports_cluster.md#writableattribute)<`boolean`\> ; `lastConnectErrorValue`: [`Attribute`](exports_cluster.md#attribute)<``null`` \| `number`\> ; `lastNetworkId`: [`Attribute`](exports_cluster.md#attribute)<``null`` \| `Uint8Array`\> ; `lastNetworkingStatus`: [`Attribute`](exports_cluster.md#attribute)<``null`` \| [`NetworkCommissioningStatus`](../enums/exports_cluster.NetworkCommissioningStatus.md)\> ; `maxNetworks`: [`Attribute`](exports_cluster.md#attribute)<`number`\> ; `networks`: [`Attribute`](exports_cluster.md#attribute)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `connected`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`boolean`\> ; `networkId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\>  }\>[]\>  }, [`GlobalAttributes`](exports_cluster.md#globalattributes-1)<{ `ethernet`: [`BitFlag`](exports_schema.md#bitflag-1) ; `thread`: [`BitFlag`](exports_schema.md#bitflag-1) ; `wifi`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\>, [`Commands`](../interfaces/exports_cluster.Commands.md), [`Events`](../interfaces/exports_cluster.Events.md)\>\>

#### Returns

[`ClusterServerHandlers`](exports_cluster.md#clusterserverhandlers)<[`Cluster`](exports_cluster.md#cluster)<{ `ethernet`: [`BitFlag`](exports_schema.md#bitflag-1) ; `thread`: [`BitFlag`](exports_schema.md#bitflag-1) ; `wifi`: [`BitFlag`](exports_schema.md#bitflag-1)  }, { `ethernet`: ``true`` ; `thread`: ``false`` ; `wifi`: ``false``  }, [`Merge`](util.md#merge)<{ `interfaceEnabled`: [`WritableAttribute`](exports_cluster.md#writableattribute)<`boolean`\> ; `lastConnectErrorValue`: [`Attribute`](exports_cluster.md#attribute)<``null`` \| `number`\> ; `lastNetworkId`: [`Attribute`](exports_cluster.md#attribute)<``null`` \| `Uint8Array`\> ; `lastNetworkingStatus`: [`Attribute`](exports_cluster.md#attribute)<``null`` \| [`NetworkCommissioningStatus`](../enums/exports_cluster.NetworkCommissioningStatus.md)\> ; `maxNetworks`: [`Attribute`](exports_cluster.md#attribute)<`number`\> ; `networks`: [`Attribute`](exports_cluster.md#attribute)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `connected`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`boolean`\> ; `networkId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\>  }\>[]\>  }, [`GlobalAttributes`](exports_cluster.md#globalattributes-1)<{ `ethernet`: [`BitFlag`](exports_schema.md#bitflag-1) ; `thread`: [`BitFlag`](exports_schema.md#bitflag-1) ; `wifi`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\>, [`Commands`](../interfaces/exports_cluster.Commands.md), [`Events`](../interfaces/exports_cluster.Events.md)\>\>

#### Defined in

packages/matter.js/dist/cjs/cluster/server/NetworkCommissioningServer.d.ts:8

___

### OnOffClusterHandler

▸ **OnOffClusterHandler**(): [`ClusterServerHandlers`](exports_cluster.md#clusterserverhandlers)<[`Cluster`](exports_cluster.md#cluster)<{ `lightingLevelControl`: [`BitFlag`](exports_schema.md#bitflag-1)  }, { `lightingLevelControl`: ``false``  }, [`Merge`](util.md#merge)<{ `onOff`: [`Attribute`](exports_cluster.md#attribute)<`boolean`\>  }, [`GlobalAttributes`](exports_cluster.md#globalattributes-1)<{ `lightingLevelControl`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\>, { `off`: [`Command`](exports_cluster.md#command)<`void`, `void`\> ; `on`: [`Command`](exports_cluster.md#command)<`void`, `void`\> ; `toggle`: [`Command`](exports_cluster.md#command)<`void`, `void`\>  }, [`Events`](../interfaces/exports_cluster.Events.md)\>\>

#### Returns

[`ClusterServerHandlers`](exports_cluster.md#clusterserverhandlers)<[`Cluster`](exports_cluster.md#cluster)<{ `lightingLevelControl`: [`BitFlag`](exports_schema.md#bitflag-1)  }, { `lightingLevelControl`: ``false``  }, [`Merge`](util.md#merge)<{ `onOff`: [`Attribute`](exports_cluster.md#attribute)<`boolean`\>  }, [`GlobalAttributes`](exports_cluster.md#globalattributes-1)<{ `lightingLevelControl`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\>, { `off`: [`Command`](exports_cluster.md#command)<`void`, `void`\> ; `on`: [`Command`](exports_cluster.md#command)<`void`, `void`\> ; `toggle`: [`Command`](exports_cluster.md#command)<`void`, `void`\>  }, [`Events`](../interfaces/exports_cluster.Events.md)\>\>

#### Defined in

packages/matter.js/dist/cjs/cluster/server/OnOffServer.d.ts:8

___

### OperationalCredentialsClusterHandler

▸ **OperationalCredentialsClusterHandler**(`conf`): [`ClusterServerHandlers`](exports_cluster.md#clusterserverhandlers)<[`Cluster`](exports_cluster.md#cluster)<[`BitSchema`](exports_schema.md#bitschema), [`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<[`BitSchema`](exports_schema.md#bitschema)\>, [`Merge`](util.md#merge)<{ `commissionedFabrics`: [`Attribute`](exports_cluster.md#attribute)<`number`\> ; `currentFabricIndex`: [`Attribute`](exports_cluster.md#attribute)<[`FabricIndex`](../classes/exports_datatype.FabricIndex.md)\> ; `fabrics`: [`Attribute`](exports_cluster.md#attribute)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `fabricId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`FabricId`](../classes/exports_datatype.FabricId.md)\> ; `fabricIndex`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`FabricIndex`](../classes/exports_datatype.FabricIndex.md)\> ; `label`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`string`\> ; `nodeId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`NodeId`](../classes/exports_datatype.NodeId.md)\> ; `rootPublicKey`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\> ; `vendorId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`VendorId`](../classes/exports_datatype.VendorId.md)\>  }\>[]\> ; `nocs`: [`Attribute`](exports_cluster.md#attribute)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `icac`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<``null`` \| `Uint8Array`\> ; `noc`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\>  }\>[]\> ; `supportedFabrics`: [`Attribute`](exports_cluster.md#attribute)<`number`\> ; `trustedRootCertificates`: [`Attribute`](exports_cluster.md#attribute)<`Uint8Array`[]\>  }, [`GlobalAttributes`](exports_cluster.md#globalattributes-1)<[`BitSchema`](exports_schema.md#bitschema)\>\>, { `addOperationalCert`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `adminVendorId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`VendorId`](../classes/exports_datatype.VendorId.md)\> ; `caseAdminNode`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`NodeId`](../classes/exports_datatype.NodeId.md)\> ; `identityProtectionKey`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\> ; `intermediateCaCert`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`Uint8Array`\> ; `operationalCert`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `debugText`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`string`\> ; `fabricIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`FabricIndex`](../classes/exports_datatype.FabricIndex.md)\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`OperationalCertStatus`](../enums/exports_cluster.OperationalCertStatus.md)\>  }\>\> ; `addRootCert`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `certificate`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\>  }\>, `void`\> ; `removeFabric`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `fabricIndex`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`FabricIndex`](../classes/exports_datatype.FabricIndex.md)\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `debugText`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`string`\> ; `fabricIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`FabricIndex`](../classes/exports_datatype.FabricIndex.md)\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`OperationalCertStatus`](../enums/exports_cluster.OperationalCertStatus.md)\>  }\>\> ; `requestAttestation`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `attestationNonce`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `elements`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\> ; `signature`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\>  }\>\> ; `requestCertChain`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `type`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`CertificateChainType`](../enums/exports_cluster.CertificateChainType.md)\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `certificate`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\>  }\>\> ; `requestCertSigning`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `certSigningRequestNonce`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\> ; `isForUpdateNOC`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `elements`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\> ; `signature`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\>  }\>\> ; `updateFabricLabel`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `label`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`string`\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `debugText`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`string`\> ; `fabricIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`FabricIndex`](../classes/exports_datatype.FabricIndex.md)\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`OperationalCertStatus`](../enums/exports_cluster.OperationalCertStatus.md)\>  }\>\> ; `updateOperationalCert`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `intermediateCaCert`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`Uint8Array`\> ; `operationalCert`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `debugText`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`string`\> ; `fabricIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`FabricIndex`](../classes/exports_datatype.FabricIndex.md)\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`OperationalCertStatus`](../enums/exports_cluster.OperationalCertStatus.md)\>  }\>\>  }, [`Events`](../interfaces/exports_cluster.Events.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conf` | [`OperationalCredentialsServerConf`](../interfaces/exports_cluster.OperationalCredentialsServerConf.md) |

#### Returns

[`ClusterServerHandlers`](exports_cluster.md#clusterserverhandlers)<[`Cluster`](exports_cluster.md#cluster)<[`BitSchema`](exports_schema.md#bitschema), [`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<[`BitSchema`](exports_schema.md#bitschema)\>, [`Merge`](util.md#merge)<{ `commissionedFabrics`: [`Attribute`](exports_cluster.md#attribute)<`number`\> ; `currentFabricIndex`: [`Attribute`](exports_cluster.md#attribute)<[`FabricIndex`](../classes/exports_datatype.FabricIndex.md)\> ; `fabrics`: [`Attribute`](exports_cluster.md#attribute)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `fabricId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`FabricId`](../classes/exports_datatype.FabricId.md)\> ; `fabricIndex`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`FabricIndex`](../classes/exports_datatype.FabricIndex.md)\> ; `label`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`string`\> ; `nodeId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`NodeId`](../classes/exports_datatype.NodeId.md)\> ; `rootPublicKey`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\> ; `vendorId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`VendorId`](../classes/exports_datatype.VendorId.md)\>  }\>[]\> ; `nocs`: [`Attribute`](exports_cluster.md#attribute)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `icac`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<``null`` \| `Uint8Array`\> ; `noc`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\>  }\>[]\> ; `supportedFabrics`: [`Attribute`](exports_cluster.md#attribute)<`number`\> ; `trustedRootCertificates`: [`Attribute`](exports_cluster.md#attribute)<`Uint8Array`[]\>  }, [`GlobalAttributes`](exports_cluster.md#globalattributes-1)<[`BitSchema`](exports_schema.md#bitschema)\>\>, { `addOperationalCert`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `adminVendorId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`VendorId`](../classes/exports_datatype.VendorId.md)\> ; `caseAdminNode`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`NodeId`](../classes/exports_datatype.NodeId.md)\> ; `identityProtectionKey`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\> ; `intermediateCaCert`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`Uint8Array`\> ; `operationalCert`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `debugText`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`string`\> ; `fabricIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`FabricIndex`](../classes/exports_datatype.FabricIndex.md)\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`OperationalCertStatus`](../enums/exports_cluster.OperationalCertStatus.md)\>  }\>\> ; `addRootCert`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `certificate`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\>  }\>, `void`\> ; `removeFabric`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `fabricIndex`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`FabricIndex`](../classes/exports_datatype.FabricIndex.md)\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `debugText`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`string`\> ; `fabricIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`FabricIndex`](../classes/exports_datatype.FabricIndex.md)\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`OperationalCertStatus`](../enums/exports_cluster.OperationalCertStatus.md)\>  }\>\> ; `requestAttestation`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `attestationNonce`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `elements`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\> ; `signature`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\>  }\>\> ; `requestCertChain`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `type`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`CertificateChainType`](../enums/exports_cluster.CertificateChainType.md)\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `certificate`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\>  }\>\> ; `requestCertSigning`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `certSigningRequestNonce`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\> ; `isForUpdateNOC`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `elements`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\> ; `signature`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\>  }\>\> ; `updateFabricLabel`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `label`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`string`\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `debugText`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`string`\> ; `fabricIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`FabricIndex`](../classes/exports_datatype.FabricIndex.md)\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`OperationalCertStatus`](../enums/exports_cluster.OperationalCertStatus.md)\>  }\>\> ; `updateOperationalCert`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `intermediateCaCert`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`Uint8Array`\> ; `operationalCert`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `debugText`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`string`\> ; `fabricIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`FabricIndex`](../classes/exports_datatype.FabricIndex.md)\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`OperationalCertStatus`](../enums/exports_cluster.OperationalCertStatus.md)\>  }\>\>  }, [`Events`](../interfaces/exports_cluster.Events.md)\>\>

#### Defined in

packages/matter.js/dist/cjs/cluster/server/OperationalCredentialsServer.d.ts:15

___

### OptionalAttribute

▸ **OptionalAttribute**<`T`, `V`\>(`id`, `schema`, `«destructured»?`): [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `schema` | [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)<`T`\> |
| `«destructured»` | [`AttributeOptions`](../interfaces/index._internal_.AttributeOptions.md)<`V`\> |

#### Returns

[`OptionalAttribute`](exports_cluster.md#optionalattribute)<`T`\>

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:49

___

### OptionalCommand

▸ **OptionalCommand**<`RequestT`, `ResponseT`\>(`requestId`, `requestSchema`, `responseId`, `responseSchema`): [`OptionalCommand`](exports_cluster.md#optionalcommand)<`RequestT`, `ResponseT`\>

#### Type parameters

| Name |
| :------ |
| `RequestT` |
| `ResponseT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestId` | `number` |
| `requestSchema` | [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)<`RequestT`\> |
| `responseId` | `number` |
| `responseSchema` | [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)<`ResponseT`\> |

#### Returns

[`OptionalCommand`](exports_cluster.md#optionalcommand)<`RequestT`, `ResponseT`\>

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:72

___

### OptionalEvent

▸ **OptionalEvent**<`FT`\>(`id`, `priority`, `data?`): [`Event`](exports_cluster.md#event)<[`TypeFromFields`](exports_tlv.md#typefromfields)<`FT`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FT` | extends [`TlvFields`](exports_tlv.md#tlvfields) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `priority` | [`EventPriority`](../enums/exports_cluster.EventPriority.md) |
| `data?` | `FT` |

#### Returns

[`Event`](exports_cluster.md#event)<[`TypeFromFields`](exports_tlv.md#typefromfields)<`FT`\>\>

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:87

___

### OptionalWritableAttribute

▸ **OptionalWritableAttribute**<`T`, `V`\>(`id`, `schema`, `«destructured»?`): [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `schema` | [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)<`T`\> |
| `«destructured»` | [`AttributeOptions`](../interfaces/index._internal_.AttributeOptions.md)<`V`\> |

#### Returns

[`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`T`\>

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:51

___

### ScenesClusterHandler

▸ **ScenesClusterHandler**(): [`ClusterServerHandlers`](exports_cluster.md#clusterserverhandlers)<[`Cluster`](exports_cluster.md#cluster)<{ `sceneNames`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<{ `sceneNames`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`Merge`](util.md#merge)<{ `currentGroup`: [`Attribute`](exports_cluster.md#attribute)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `currentScene`: [`Attribute`](exports_cluster.md#attribute)<`number`\> ; `lastConfiguredBy`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<``null`` \| [`NodeId`](../classes/exports_datatype.NodeId.md)\> ; `nameSupport`: [`Attribute`](exports_cluster.md#attribute)<[`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<{ `sceneNames`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\> ; `sceneCount`: [`Attribute`](exports_cluster.md#attribute)<`number`\> ; `sceneValid`: [`Attribute`](exports_cluster.md#attribute)<`boolean`\>  }, [`GlobalAttributes`](exports_cluster.md#globalattributes-1)<{ `sceneNames`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\>, { `addScene`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `extensionFieldSets`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `attributeValueList`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `attributeId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`AttributeId`](../classes/exports_datatype.AttributeId.md)\> ; `attributeValue`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TlvStream`](exports_tlv.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`ClusterId`](../classes/exports_datatype.ClusterId.md)\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `sceneName`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`string`\> ; `transitionTime`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\> ; `copyScene`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupIdFrom`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `groupIdTo`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `mode`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<{ `copyAllScenes`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\> ; `sceneIdFrom`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `sceneIdTo`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupIdFrom`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneIdFrom`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\> ; `enhancedAddScene`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `extensionFieldSets`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `attributeValueList`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `attributeId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`AttributeId`](../classes/exports_datatype.AttributeId.md)\> ; `attributeValue`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TlvStream`](exports_tlv.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`ClusterId`](../classes/exports_datatype.ClusterId.md)\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `sceneName`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`string`\> ; `transitionTime`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\> ; `enhancedViewScene`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `extensionFieldSets`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `attributeValueList`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `attributeId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`AttributeId`](../classes/exports_datatype.AttributeId.md)\> ; `attributeValue`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TlvStream`](exports_tlv.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`ClusterId`](../classes/exports_datatype.ClusterId.md)\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `sceneName`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`string`\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\> ; `transitionTime`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\>  }\>\> ; `getSceneMembership`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `capacity`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<``null`` \| `number`\> ; `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneList`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`[]\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\> ; `recallScene`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `transitionTime`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<``null`` \| `number`\>  }\>, `void`\> ; `removeAllScenes`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\> ; `removeScene`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\> ; `storeScene`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\> ; `viewScene`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `extensionFieldSets`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `attributeValueList`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `attributeId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`AttributeId`](../classes/exports_datatype.AttributeId.md)\> ; `attributeValue`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TlvStream`](exports_tlv.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`ClusterId`](../classes/exports_datatype.ClusterId.md)\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `sceneName`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`string`\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\> ; `transitionTime`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\>  }\>\>  }, [`Events`](../interfaces/exports_cluster.Events.md)\>\>

#### Returns

[`ClusterServerHandlers`](exports_cluster.md#clusterserverhandlers)<[`Cluster`](exports_cluster.md#cluster)<{ `sceneNames`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<{ `sceneNames`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`Merge`](util.md#merge)<{ `currentGroup`: [`Attribute`](exports_cluster.md#attribute)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `currentScene`: [`Attribute`](exports_cluster.md#attribute)<`number`\> ; `lastConfiguredBy`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<``null`` \| [`NodeId`](../classes/exports_datatype.NodeId.md)\> ; `nameSupport`: [`Attribute`](exports_cluster.md#attribute)<[`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<{ `sceneNames`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\> ; `sceneCount`: [`Attribute`](exports_cluster.md#attribute)<`number`\> ; `sceneValid`: [`Attribute`](exports_cluster.md#attribute)<`boolean`\>  }, [`GlobalAttributes`](exports_cluster.md#globalattributes-1)<{ `sceneNames`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\>, { `addScene`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `extensionFieldSets`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `attributeValueList`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `attributeId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`AttributeId`](../classes/exports_datatype.AttributeId.md)\> ; `attributeValue`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TlvStream`](exports_tlv.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`ClusterId`](../classes/exports_datatype.ClusterId.md)\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `sceneName`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`string`\> ; `transitionTime`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\> ; `copyScene`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupIdFrom`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `groupIdTo`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `mode`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<{ `copyAllScenes`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\> ; `sceneIdFrom`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `sceneIdTo`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupIdFrom`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneIdFrom`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\> ; `enhancedAddScene`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `extensionFieldSets`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `attributeValueList`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `attributeId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`AttributeId`](../classes/exports_datatype.AttributeId.md)\> ; `attributeValue`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TlvStream`](exports_tlv.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`ClusterId`](../classes/exports_datatype.ClusterId.md)\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `sceneName`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`string`\> ; `transitionTime`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\> ; `enhancedViewScene`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `extensionFieldSets`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `attributeValueList`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `attributeId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`AttributeId`](../classes/exports_datatype.AttributeId.md)\> ; `attributeValue`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TlvStream`](exports_tlv.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`ClusterId`](../classes/exports_datatype.ClusterId.md)\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `sceneName`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`string`\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\> ; `transitionTime`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\>  }\>\> ; `getSceneMembership`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `capacity`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<``null`` \| `number`\> ; `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneList`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`[]\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\> ; `recallScene`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `transitionTime`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<``null`` \| `number`\>  }\>, `void`\> ; `removeAllScenes`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\> ; `removeScene`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\> ; `storeScene`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\> ; `viewScene`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `extensionFieldSets`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `attributeValueList`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `attributeId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`AttributeId`](../classes/exports_datatype.AttributeId.md)\> ; `attributeValue`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TlvStream`](exports_tlv.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`ClusterId`](../classes/exports_datatype.ClusterId.md)\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `sceneName`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`string`\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\> ; `transitionTime`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\>  }\>\>  }, [`Events`](../interfaces/exports_cluster.Events.md)\>\>

#### Defined in

packages/matter.js/dist/cjs/cluster/server/ScenesServer.d.ts:41

___

### UseOptionalAttributes

▸ **UseOptionalAttributes**<`C`, `A`\>(`cluster`, `conf`): [`UseOptionalAttributes`](index._internal_.md#useoptionalattributes-1)<`C`, `A`\>

Forces the presence of the specified optional attributes, so they can be used in the command handlers

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Cluster`](exports_cluster.md#cluster)<`any`, `any`, `any`, `any`, `any`, `C`\> |
| `A` | extends [`OptionalAttributeConf`](index._internal_.md#optionalattributeconf)<`C`[``"attributes"``]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | `C` |
| `conf` | `A` |

#### Returns

[`UseOptionalAttributes`](index._internal_.md#useoptionalattributes-1)<`C`, `A`\>

#### Defined in

packages/matter.js/dist/cjs/cluster/server/ClusterServer.d.ts:77

___

### WritableAttribute

▸ **WritableAttribute**<`T`, `V`\>(`id`, `schema`, `«destructured»?`): [`WritableAttribute`](exports_cluster.md#writableattribute)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `schema` | [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)<`T`\> |
| `«destructured»` | [`AttributeOptions`](../interfaces/index._internal_.AttributeOptions.md)<`V`\> |

#### Returns

[`WritableAttribute`](exports_cluster.md#writableattribute)<`T`\>

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:50

___

### createDefaultGroupsClusterServer

▸ **createDefaultGroupsClusterServer**(): [`ClusterServerObj`](exports_cluster.md#clusterserverobj)<[`Merge`](util.md#merge)<{ `nameSupport`: [`Attribute`](exports_cluster.md#attribute)<[`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<{ `groupNames`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\>  }, [`GlobalAttributes`](exports_cluster.md#globalattributes-1)<{ `groupNames`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\>, { `addGroup`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `groupName`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`string`\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\> ; `addGroupIfIdentifying`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `groupName`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`string`\>  }\>, `void`\> ; `getGroupMembership`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupList`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)[]\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `capacity`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<``null`` \| `number`\> ; `groupList`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)[]\>  }\>\> ; `removeAllGroups`: [`Command`](exports_cluster.md#command)<`void`, `void`\> ; `removeGroup`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\> ; `viewGroup`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `groupName`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`string`\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\>  }\>

#### Returns

[`ClusterServerObj`](exports_cluster.md#clusterserverobj)<[`Merge`](util.md#merge)<{ `nameSupport`: [`Attribute`](exports_cluster.md#attribute)<[`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<{ `groupNames`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\>  }, [`GlobalAttributes`](exports_cluster.md#globalattributes-1)<{ `groupNames`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\>, { `addGroup`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `groupName`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`string`\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\> ; `addGroupIfIdentifying`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `groupName`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`string`\>  }\>, `void`\> ; `getGroupMembership`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupList`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)[]\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `capacity`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<``null`` \| `number`\> ; `groupList`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)[]\>  }\>\> ; `removeAllGroups`: [`Command`](exports_cluster.md#command)<`void`, `void`\> ; `removeGroup`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\> ; `viewGroup`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `groupName`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`string`\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\>  }\>

#### Defined in

packages/matter.js/dist/cjs/cluster/server/GroupsServer.d.ts:20

___

### createDefaultIdentifyClusterServer

▸ **createDefaultIdentifyClusterServer**(`handlers`): [`ClusterServerObj`](exports_cluster.md#clusterserverobj)<[`Merge`](util.md#merge)<{ `identifyTime`: [`WritableAttribute`](exports_cluster.md#writableattribute)<`number`\> ; `identifyType`: [`Attribute`](exports_cluster.md#attribute)<[`IdentifyType`](../enums/exports_cluster.IdentifyType.md)\>  }, [`GlobalAttributes`](exports_cluster.md#globalattributes-1)<{ `query`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\>, { `identify`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `identifyTime`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\>  }\>, `void`\> ; `triggerEffect`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `effectIdentifier`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`IdentifyEffectIdentifier`](../enums/exports_cluster.IdentifyEffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`Default`](../enums/exports_cluster.EffectVariant.md#default)\>  }\>, `void`\>  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `handlers` | [`ClusterServerHandlers`](exports_cluster.md#clusterserverhandlers)<[`Cluster`](exports_cluster.md#cluster)<{ `query`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<{ `query`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`Merge`](util.md#merge)<{ `identifyTime`: [`WritableAttribute`](exports_cluster.md#writableattribute)<`number`\> ; `identifyType`: [`Attribute`](exports_cluster.md#attribute)<[`IdentifyType`](../enums/exports_cluster.IdentifyType.md)\>  }, [`GlobalAttributes`](exports_cluster.md#globalattributes-1)<{ `query`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\>, { `identify`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `identifyTime`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\>  }\>, `void`\> ; `triggerEffect`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `effectIdentifier`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`IdentifyEffectIdentifier`](../enums/exports_cluster.IdentifyEffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`Default`](../enums/exports_cluster.EffectVariant.md#default)\>  }\>, `void`\>  }, [`Events`](../interfaces/exports_cluster.Events.md)\>\> |

#### Returns

[`ClusterServerObj`](exports_cluster.md#clusterserverobj)<[`Merge`](util.md#merge)<{ `identifyTime`: [`WritableAttribute`](exports_cluster.md#writableattribute)<`number`\> ; `identifyType`: [`Attribute`](exports_cluster.md#attribute)<[`IdentifyType`](../enums/exports_cluster.IdentifyType.md)\>  }, [`GlobalAttributes`](exports_cluster.md#globalattributes-1)<{ `query`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\>, { `identify`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `identifyTime`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\>  }\>, `void`\> ; `triggerEffect`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `effectIdentifier`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`IdentifyEffectIdentifier`](../enums/exports_cluster.IdentifyEffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`Default`](../enums/exports_cluster.EffectVariant.md#default)\>  }\>, `void`\>  }\>

#### Defined in

packages/matter.js/dist/cjs/cluster/server/IdentifyServer.d.ts:3

___

### createDefaultOnOffClusterServer

▸ **createDefaultOnOffClusterServer**(`attributeInitialValues?`): [`ClusterServerObj`](exports_cluster.md#clusterserverobj)<[`Merge`](util.md#merge)<{ `onOff`: [`Attribute`](exports_cluster.md#attribute)<`boolean`\>  }, [`GlobalAttributes`](exports_cluster.md#globalattributes-1)<{ `lightingLevelControl`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\>, { `off`: [`Command`](exports_cluster.md#command)<`void`, `void`\> ; `on`: [`Command`](exports_cluster.md#command)<`void`, `void`\> ; `toggle`: [`Command`](exports_cluster.md#command)<`void`, `void`\>  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributeInitialValues?` | [`AttributeInitialValues`](exports_cluster.md#attributeinitialvalues)<[`Merge`](util.md#merge)<{ `onOff`: [`Attribute`](exports_cluster.md#attribute)<`boolean`\>  }, [`GlobalAttributes`](exports_cluster.md#globalattributes-1)<{ `lightingLevelControl`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\>\> |

#### Returns

[`ClusterServerObj`](exports_cluster.md#clusterserverobj)<[`Merge`](util.md#merge)<{ `onOff`: [`Attribute`](exports_cluster.md#attribute)<`boolean`\>  }, [`GlobalAttributes`](exports_cluster.md#globalattributes-1)<{ `lightingLevelControl`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\>, { `off`: [`Command`](exports_cluster.md#command)<`void`, `void`\> ; `on`: [`Command`](exports_cluster.md#command)<`void`, `void`\> ; `toggle`: [`Command`](exports_cluster.md#command)<`void`, `void`\>  }\>

#### Defined in

packages/matter.js/dist/cjs/cluster/server/OnOffServer.d.ts:9

___

### createDefaultScenesClusterServer

▸ **createDefaultScenesClusterServer**(): [`ClusterServerObj`](exports_cluster.md#clusterserverobj)<[`Merge`](util.md#merge)<{ `currentGroup`: [`Attribute`](exports_cluster.md#attribute)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `currentScene`: [`Attribute`](exports_cluster.md#attribute)<`number`\> ; `lastConfiguredBy`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<``null`` \| [`NodeId`](../classes/exports_datatype.NodeId.md)\> ; `nameSupport`: [`Attribute`](exports_cluster.md#attribute)<[`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<{ `sceneNames`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\> ; `sceneCount`: [`Attribute`](exports_cluster.md#attribute)<`number`\> ; `sceneValid`: [`Attribute`](exports_cluster.md#attribute)<`boolean`\>  }, [`GlobalAttributes`](exports_cluster.md#globalattributes-1)<{ `sceneNames`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\>, { `addScene`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `extensionFieldSets`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `attributeValueList`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `attributeId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`AttributeId`](../classes/exports_datatype.AttributeId.md)\> ; `attributeValue`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TlvStream`](exports_tlv.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`ClusterId`](../classes/exports_datatype.ClusterId.md)\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `sceneName`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`string`\> ; `transitionTime`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\> ; `copyScene`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupIdFrom`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `groupIdTo`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `mode`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<{ `copyAllScenes`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\> ; `sceneIdFrom`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `sceneIdTo`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupIdFrom`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneIdFrom`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\> ; `enhancedAddScene`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `extensionFieldSets`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `attributeValueList`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `attributeId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`AttributeId`](../classes/exports_datatype.AttributeId.md)\> ; `attributeValue`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TlvStream`](exports_tlv.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`ClusterId`](../classes/exports_datatype.ClusterId.md)\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `sceneName`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`string`\> ; `transitionTime`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\> ; `enhancedViewScene`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `extensionFieldSets`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `attributeValueList`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `attributeId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`AttributeId`](../classes/exports_datatype.AttributeId.md)\> ; `attributeValue`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TlvStream`](exports_tlv.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`ClusterId`](../classes/exports_datatype.ClusterId.md)\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `sceneName`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`string`\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\> ; `transitionTime`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\>  }\>\> ; `getSceneMembership`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `capacity`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<``null`` \| `number`\> ; `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneList`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`[]\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\> ; `recallScene`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `transitionTime`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<``null`` \| `number`\>  }\>, `void`\> ; `removeAllScenes`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\> ; `removeScene`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\> ; `storeScene`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\> ; `viewScene`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `extensionFieldSets`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `attributeValueList`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `attributeId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`AttributeId`](../classes/exports_datatype.AttributeId.md)\> ; `attributeValue`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TlvStream`](exports_tlv.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`ClusterId`](../classes/exports_datatype.ClusterId.md)\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `sceneName`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`string`\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\> ; `transitionTime`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\>  }\>\>  }\>

#### Returns

[`ClusterServerObj`](exports_cluster.md#clusterserverobj)<[`Merge`](util.md#merge)<{ `currentGroup`: [`Attribute`](exports_cluster.md#attribute)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `currentScene`: [`Attribute`](exports_cluster.md#attribute)<`number`\> ; `lastConfiguredBy`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<``null`` \| [`NodeId`](../classes/exports_datatype.NodeId.md)\> ; `nameSupport`: [`Attribute`](exports_cluster.md#attribute)<[`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<{ `sceneNames`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\> ; `sceneCount`: [`Attribute`](exports_cluster.md#attribute)<`number`\> ; `sceneValid`: [`Attribute`](exports_cluster.md#attribute)<`boolean`\>  }, [`GlobalAttributes`](exports_cluster.md#globalattributes-1)<{ `sceneNames`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\>, { `addScene`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `extensionFieldSets`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `attributeValueList`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `attributeId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`AttributeId`](../classes/exports_datatype.AttributeId.md)\> ; `attributeValue`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TlvStream`](exports_tlv.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`ClusterId`](../classes/exports_datatype.ClusterId.md)\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `sceneName`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`string`\> ; `transitionTime`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\> ; `copyScene`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupIdFrom`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `groupIdTo`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `mode`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<{ `copyAllScenes`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>\> ; `sceneIdFrom`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `sceneIdTo`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupIdFrom`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneIdFrom`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\> ; `enhancedAddScene`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `extensionFieldSets`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `attributeValueList`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `attributeId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`AttributeId`](../classes/exports_datatype.AttributeId.md)\> ; `attributeValue`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TlvStream`](exports_tlv.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`ClusterId`](../classes/exports_datatype.ClusterId.md)\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `sceneName`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`string`\> ; `transitionTime`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\> ; `enhancedViewScene`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `extensionFieldSets`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `attributeValueList`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `attributeId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`AttributeId`](../classes/exports_datatype.AttributeId.md)\> ; `attributeValue`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TlvStream`](exports_tlv.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`ClusterId`](../classes/exports_datatype.ClusterId.md)\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `sceneName`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`string`\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\> ; `transitionTime`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\>  }\>\> ; `getSceneMembership`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `capacity`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<``null`` \| `number`\> ; `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneList`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`[]\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\> ; `recallScene`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `transitionTime`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<``null`` \| `number`\>  }\>, `void`\> ; `removeAllScenes`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\> ; `removeScene`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\> ; `storeScene`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\> ; `viewScene`: [`Command`](exports_cluster.md#command)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `extensionFieldSets`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `attributeValueList`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `attributeId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`AttributeId`](../classes/exports_datatype.AttributeId.md)\> ; `attributeValue`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TlvStream`](exports_tlv.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`ClusterId`](../classes/exports_datatype.ClusterId.md)\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`GroupId`](../classes/exports_datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `sceneName`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`string`\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\> ; `transitionTime`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\>  }\>\>  }\>

#### Defined in

packages/matter.js/dist/cjs/cluster/server/ScenesServer.d.ts:42

___

### getClusterAttributeById

▸ **getClusterAttributeById**(`clusterDef`, `attributeId`): [`CachedAttributeInfo`](../interfaces/index._internal_.CachedAttributeInfo.md) \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `clusterDef` | [`Cluster`](exports_cluster.md#cluster)<`any`, `any`, `any`, `any`, `any`\> |
| `attributeId` | `number` |

#### Returns

[`CachedAttributeInfo`](../interfaces/index._internal_.CachedAttributeInfo.md) \| `undefined`

#### Defined in

packages/matter.js/dist/cjs/cluster/ClusterHelper.d.ts:15

___

### getClusterById

▸ **getClusterById**(`clusterId`): [`Cluster`](exports_cluster.md#cluster)<`any`, `any`, `any`, `any`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `clusterId` | `number` |

#### Returns

[`Cluster`](exports_cluster.md#cluster)<`any`, `any`, `any`, `any`, `any`\>

#### Defined in

packages/matter.js/dist/cjs/cluster/ClusterHelper.d.ts:14

___

### isClusterClient

▸ **isClusterClient**<`A`, `C`\>(`obj`): obj is ClusterClientObj<A, C\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/exports_cluster.Commands.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`ClusterClientObj`](exports_cluster.md#clusterclientobj)<`A`, `C`\> \| [`ClusterServerObj`](exports_cluster.md#clusterserverobj)<`A`, `C`\> |

#### Returns

obj is ClusterClientObj<A, C\>

#### Defined in

packages/matter.js/dist/cjs/cluster/client/ClusterClient.d.ts:47

___

### isClusterServer

▸ **isClusterServer**<`A`, `C`\>(`obj`): obj is ClusterServerObj<A, C\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/exports_cluster.Commands.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`ClusterClientObj`](exports_cluster.md#clusterclientobj)<`A`, `C`\> \| [`ClusterServerObj`](exports_cluster.md#clusterserverobj)<`A`, `C`\> |

#### Returns

obj is ClusterServerObj<A, C\>

#### Defined in

packages/matter.js/dist/cjs/cluster/server/ClusterServer.d.ts:127
