[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / cluster

# Module: cluster

## Table of contents

### Enumerations

- [AccessLevel](../enums/cluster.AccessLevel.md)
- [ActionErrorEnum](../enums/cluster.ActionErrorEnum.md)
- [ActionStateEnum](../enums/cluster.ActionStateEnum.md)
- [ActionTypeEnum](../enums/cluster.ActionTypeEnum.md)
- [AdminCommissioningStatusCode](../enums/cluster.AdminCommissioningStatusCode.md)
- [AuthMode](../enums/cluster.AuthMode.md)
- [BatApprovedChemistryEnum](../enums/cluster.BatApprovedChemistryEnum.md)
- [BatChargeFaultEnum](../enums/cluster.BatChargeFaultEnum.md)
- [BatChargeLevelEnum](../enums/cluster.BatChargeLevelEnum.md)
- [BatChargeStateEnum](../enums/cluster.BatChargeStateEnum.md)
- [BatCommonDesignationEnum](../enums/cluster.BatCommonDesignationEnum.md)
- [BatFaultEnum](../enums/cluster.BatFaultEnum.md)
- [BatReplaceabilityEnum](../enums/cluster.BatReplaceabilityEnum.md)
- [BootReason](../enums/cluster.BootReason.md)
- [CertificateChainType](../enums/cluster.CertificateChainType.md)
- [ChangeTypeEnum](../enums/cluster.ChangeTypeEnum.md)
- [CommissioningError](../enums/cluster.CommissioningError.md)
- [CommissioningWindowStatus](../enums/cluster.CommissioningWindowStatus.md)
- [DelayedAllOffEffectVariant](../enums/cluster.DelayedAllOffEffectVariant.md)
- [DyingLightEffectVariant](../enums/cluster.DyingLightEffectVariant.md)
- [EffectIdentifier](../enums/cluster.EffectIdentifier.md)
- [EffectVariant](../enums/cluster.EffectVariant.md)
- [EndpointListType](../enums/cluster.EndpointListType.md)
- [EventPriority](../enums/cluster.EventPriority.md)
- [GroupKeyMulticastPolicy](../enums/cluster.GroupKeyMulticastPolicy.md)
- [GroupKeySecurityPolicy](../enums/cluster.GroupKeySecurityPolicy.md)
- [HardwareFault](../enums/cluster.HardwareFault.md)
- [IdentifyEffectIdentifier](../enums/cluster.IdentifyEffectIdentifier.md)
- [IdentifyType](../enums/cluster.IdentifyType.md)
- [InterfaceType](../enums/cluster.InterfaceType.md)
- [MoveMode](../enums/cluster.MoveMode.md)
- [NetworkCommissioningStatus](../enums/cluster.NetworkCommissioningStatus.md)
- [NetworkFault](../enums/cluster.NetworkFault.md)
- [OccupancySensorType](../enums/cluster.OccupancySensorType.md)
- [OperationalCertStatus](../enums/cluster.OperationalCertStatus.md)
- [PowerSourceStatusEnum](../enums/cluster.PowerSourceStatusEnum.md)
- [Privilege](../enums/cluster.Privilege.md)
- [RadioFault](../enums/cluster.RadioFault.md)
- [RegulatoryLocationType](../enums/cluster.RegulatoryLocationType.md)
- [StartUpOnOff](../enums/cluster.StartUpOnOff.md)
- [StepMode](../enums/cluster.StepMode.md)
- [WiFiBand](../enums/cluster.WiFiBand.md)
- [WiredCurrentTypeEnum](../enums/cluster.WiredCurrentTypeEnum.md)
- [WiredFaultEnum](../enums/cluster.WiredFaultEnum.md)

### Classes

- [AttributeGetterServer](../classes/cluster.AttributeGetterServer.md)
- [AttributeServer](../classes/cluster.AttributeServer.md)
- [CommandServer](../classes/cluster.CommandServer.md)
- [GroupsManager](../classes/cluster.GroupsManager.md)
- [ScenesManager](../classes/cluster.ScenesManager.md)

### Interfaces

- [Attribute](../interfaces/cluster.Attribute.md)
- [Attributes](../interfaces/cluster.Attributes.md)
- [Cluster](../interfaces/cluster.Cluster.md)
- [Command](../interfaces/cluster.Command.md)
- [Commands](../interfaces/cluster.Commands.md)
- [Event](../interfaces/cluster.Event.md)
- [Events](../interfaces/cluster.Events.md)
- [OperationalCredentialsServerConf](../interfaces/cluster.OperationalCredentialsServerConf.md)
- [OptionalAttribute](../interfaces/cluster.OptionalAttribute.md)
- [OptionalCommand](../interfaces/cluster.OptionalCommand.md)
- [OptionalEvent](../interfaces/cluster.OptionalEvent.md)
- [OptionalWritableAttribute](../interfaces/cluster.OptionalWritableAttribute.md)
- [WritableAttribute](../interfaces/cluster.WritableAttribute.md)

### Type Aliases

- [AttributeClients](cluster.md#attributeclients)
- [AttributeInitialValues](cluster.md#attributeinitialvalues)
- [AttributeJsType](cluster.md#attributejstype)
- [AttributeServerValues](cluster.md#attributeservervalues)
- [AttributeServers](cluster.md#attributeservers)
- [ClusterClientObj](cluster.md#clusterclientobj)
- [ClusterServerHandlers](cluster.md#clusterserverhandlers)
- [ClusterServerObj](cluster.md#clusterserverobj)
- [CommandHandler](cluster.md#commandhandler)
- [CommandServers](cluster.md#commandservers)
- [CommissioningSuccessFailureResponse](cluster.md#commissioningsuccessfailureresponse)
- [GlobalAttributes](cluster.md#globalattributes)
- [MandatoryAttributeNames](cluster.md#mandatoryattributenames)
- [OptionalAttributeNames](cluster.md#optionalattributenames)
- [RequestType](cluster.md#requesttype)
- [ResponseType](cluster.md#responsetype)
- [SignatureFromCommandSpec](cluster.md#signaturefromcommandspec)

### Variables

- [AccessControlCluster](cluster.md#accesscontrolcluster)
- [ActionsCluster](cluster.md#actionscluster)
- [AdminCommissioningCluster](cluster.md#admincommissioningcluster)
- [AllClustersMap](cluster.md#allclustersmap)
- [BasicAdminCommissioningCluster](cluster.md#basicadmincommissioningcluster)
- [BasicInformationCluster](cluster.md#basicinformationcluster)
- [BindingCluster](cluster.md#bindingcluster)
- [BooleanStateCluster](cluster.md#booleanstatecluster)
- [BridgedDeviceBasicInformationCluster](cluster.md#bridgeddevicebasicinformationcluster)
- [DescriptorCluster](cluster.md#descriptorcluster)
- [EthernetNetworkCommissioningCluster](cluster.md#ethernetnetworkcommissioningcluster)
- [FixedLabelCluster](cluster.md#fixedlabelcluster)
- [FlowMeasurementCluster](cluster.md#flowmeasurementcluster)
- [GeneralCommissioningCluster](cluster.md#generalcommissioningcluster)
- [GeneralCommissioningClusterHandler](cluster.md#generalcommissioningclusterhandler)
- [GeneralDiagnosticsCluster](cluster.md#generaldiagnosticscluster)
- [GroupKeyManagementCluster](cluster.md#groupkeymanagementcluster)
- [GroupsCluster](cluster.md#groupscluster)
- [IdentifyCluster](cluster.md#identifycluster)
- [IlluminanceMeasurementCluster](cluster.md#illuminancemeasurementcluster)
- [LeafWetnessMeasurementCluster](cluster.md#leafwetnessmeasurementcluster)
- [LevelControlCluster](cluster.md#levelcontrolcluster)
- [OccupancyBitmap](cluster.md#occupancybitmap)
- [OccupancySensingCluster](cluster.md#occupancysensingcluster)
- [OccupancySensorTypeBitmap](cluster.md#occupancysensortypebitmap)
- [OnOffCluster](cluster.md#onoffcluster)
- [OnOffLightingCluster](cluster.md#onofflightingcluster)
- [OperationalCredentialsCluster](cluster.md#operationalcredentialscluster)
- [PowerSourceCluster](cluster.md#powersourcecluster)
- [PowerSourceConfigurationCluster](cluster.md#powersourceconfigurationcluster)
- [PressureMeasurementCluster](cluster.md#pressuremeasurementcluster)
- [PulseWidthModulationLevelControlCluster](cluster.md#pulsewidthmodulationlevelcontrolcluster)
- [RESP\_MAX](cluster.md#resp_max)
- [RelativeHumidityCluster](cluster.md#relativehumiditycluster)
- [ScenesCluster](cluster.md#scenescluster)
- [SoilMoistureMeasurementCluster](cluster.md#soilmoisturemeasurementcluster)
- [TemperatureMeasurementCluster](cluster.md#temperaturemeasurementcluster)
- [ThreadAndEthernetNetworkCommissioningCluster](cluster.md#threadandethernetnetworkcommissioningcluster)
- [ThreadNetworkCommissioningCluster](cluster.md#threadnetworkcommissioningcluster)
- [TlvAttestation](cluster.md#tlvattestation)
- [TlvAttributeValuePair](cluster.md#tlvattributevaluepair)
- [TlvCertSigningRequest](cluster.md#tlvcertsigningrequest)
- [TlvExtensionFieldSet](cluster.md#tlvextensionfieldset)
- [TlvNoResponse](cluster.md#tlvnoresponse)
- [TlvWiFiSecurity](cluster.md#tlvwifisecurity)
- [UserLabelCluster](cluster.md#userlabelcluster)
- [WifiAndEthernetAndThreadNetworkCommissioningCluster](cluster.md#wifiandethernetandthreadnetworkcommissioningcluster)
- [WifiAndEthernetNetworkCommissioningCluster](cluster.md#wifiandethernetnetworkcommissioningcluster)
- [WifiNetworkCommissioningCluster](cluster.md#wifinetworkcommissioningcluster)

### Functions

- [AdminCommissioningHandler](cluster.md#admincommissioninghandler)
- [Attribute](cluster.md#attribute)
- [Cluster](cluster.md#cluster)
- [ClusterExtend](cluster.md#clusterextend)
- [Command](cluster.md#command)
- [Event](cluster.md#event)
- [GlobalAttributes](cluster.md#globalattributes-1)
- [GroupKeyManagementClusterHandler](cluster.md#groupkeymanagementclusterhandler)
- [GroupsClusterHandler](cluster.md#groupsclusterhandler)
- [LevelControlClusterHandler](cluster.md#levelcontrolclusterhandler)
- [NetworkCommissioningHandler](cluster.md#networkcommissioninghandler)
- [OnOffClusterHandler](cluster.md#onoffclusterhandler)
- [OperationalCredentialsClusterHandler](cluster.md#operationalcredentialsclusterhandler)
- [OptionalAttribute](cluster.md#optionalattribute)
- [OptionalCommand](cluster.md#optionalcommand)
- [OptionalEvent](cluster.md#optionalevent)
- [OptionalWritableAttribute](cluster.md#optionalwritableattribute)
- [ScenesClusterHandler](cluster.md#scenesclusterhandler)
- [UseOptionalAttributes](cluster.md#useoptionalattributes)
- [WritableAttribute](cluster.md#writableattribute)
- [createDefaultGroupsClusterServer](cluster.md#createdefaultgroupsclusterserver)
- [createDefaultIdentifyClusterServer](cluster.md#createdefaultidentifyclusterserver)
- [createDefaultOnOffClusterServer](cluster.md#createdefaultonoffclusterserver)
- [createDefaultScenesClusterServer](cluster.md#createdefaultscenesclusterserver)
- [getClusterAttributeById](cluster.md#getclusterattributebyid)
- [getClusterById](cluster.md#getclusterbyid)
- [isClusterClient](cluster.md#isclusterclient)
- [isClusterServer](cluster.md#isclusterserver)

## Type Aliases

### AttributeClients

Ƭ **AttributeClients**<`A`\>: [`Merge`](util.md#merge)<{ [P in MandatoryAttributeNames<A\>]: AttributeClient<AttributeJsType<A[P]\>\> }, { [P in OptionalAttributeNames<A\>]: AttributeClient<AttributeJsType<A[P]\> \| undefined\> }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/cluster.Attributes.md) |

#### Defined in

[packages/matter.js/src/cluster/client/ClusterClient.ts:15](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/client/ClusterClient.ts#L15)

___

### AttributeInitialValues

Ƭ **AttributeInitialValues**<`A`\>: [`Merge`](util.md#merge)<`Omit`<{ [P in MandatoryAttributeNames<A\>]: AttributeJsType<A[P]\> }, keyof [`GlobalAttributes`](cluster.md#globalattributes-1)<`any`\>\>, { [P in OptionalAttributeNames<A\>]?: AttributeJsType<A[P]\> }\>

Initial values for the cluster attribute

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/cluster.Attributes.md) |

#### Defined in

[packages/matter.js/src/cluster/server/ClusterServer.ts:39](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/ClusterServer.ts#L39)

___

### AttributeJsType

Ƭ **AttributeJsType**<`T`\>: `T` extends [`Attribute`](cluster.md#attribute)<infer JsType\> ? `JsType` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Attribute`](cluster.md#attribute)<`any`\> |

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:30](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L30)

___

### AttributeServerValues

Ƭ **AttributeServerValues**<`A`\>: [`Merge`](util.md#merge)<{ [P in MandatoryAttributeNames<A\>]: AttributeJsType<A[P]\> }, { [P in OptionalAttributeNames<A\>]?: AttributeJsType<A[P]\> }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/cluster.Attributes.md) |

#### Defined in

[packages/matter.js/src/cluster/server/ClusterServer.ts:40](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/ClusterServer.ts#L40)

___

### AttributeServers

Ƭ **AttributeServers**<`A`\>: [`Merge`](util.md#merge)<`Omit`<{ [P in MandatoryAttributeNames<A\>]: AttributeServer<AttributeJsType<A[P]\>\> }, keyof [`GlobalAttributes`](cluster.md#globalattributes-1)<`any`\>\>, { [P in OptionalAttributeNames<A\>]?: AttributeServer<AttributeJsType<A[P]\>\> }\>

Cluster attributes accessible on the cluster server

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/cluster.Attributes.md) |

#### Defined in

[packages/matter.js/src/cluster/server/ClusterServer.ts:36](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/ClusterServer.ts#L36)

___

### ClusterClientObj

Ƭ **ClusterClientObj**<`A`, `C`\>: { `_clone`: (`newInteractionClient?`: [`InteractionClient`](../classes/protocol_interaction.InteractionClient.md)) => [`ClusterClientObj`](cluster.md#clusterclientobj)<`A`, `C`\> ; `_type`: ``"ClusterClient"`` ; `attributes`: [`AttributeClients`](cluster.md#attributeclients)<`A`\> ; `commands`: { [P in keyof C]: SignatureFromCommandSpec<C[P]\> } ; `endpointId`: `number` ; `id`: `number` ; `name`: `string` ; `subscriptAllAttributes`: (`minIntervalFloorSeconds`: `number`, `maxIntervalCeilingSeconds`: `number`) => `Promise`<`void`\>  } & [`ClientAttributeGetters`](index._internal_.md#clientattributegetters)<`A`\> & [`ClientAttributeSetters`](index._internal_.md#clientattributesetters)<`A`\> & [`ClientAttributeSubscribers`](index._internal_.md#clientattributesubscribers)<`A`\> & { [P in keyof C]: SignatureFromCommandSpec<C[P]\> }

Strongly typed interface of a cluster client

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster.Commands.md) |

#### Defined in

[packages/matter.js/src/cluster/client/ClusterClient.ts:25](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/client/ClusterClient.ts#L25)

___

### ClusterServerHandlers

Ƭ **ClusterServerHandlers**<`C`\>: [`Merge`](util.md#merge)<[`CommandHandlers`](index._internal_.md#commandhandlers)<`C`[``"commands"``], [`AttributeServers`](cluster.md#attributeservers)<`C`[``"attributes"``]\>\>, [`AttributeGetters`](index._internal_.md#attributegetters)<`C`[``"attributes"``]\>\>

Handlers to process cluster commands

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Cluster`](cluster.md#cluster)<`any`, `any`, `any`, `any`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/server/ClusterServer.ts:49](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/ClusterServer.ts#L49)

___

### ClusterServerObj

Ƭ **ClusterServerObj**<`A`, `C`\>: { `_commands`: [`CommandServers`](cluster.md#commandservers)<`C`\> ; `_getSceneExtensionFieldSets`: () => [`TypeFromSchema`](tlv.md#typefromschema)<typeof [`TlvAttributeValuePair`](cluster.md#tlvattributevaluepair)\>[] ; `_setSceneExtensionFieldSets`: (`values`: [`TypeFromSchema`](tlv.md#typefromschema)<typeof [`TlvAttributeValuePair`](cluster.md#tlvattributevaluepair)\>[], `transitionTime`: `number`) => `void` ; `_setStorage`: (`storageContext`: [`StorageContext`](../classes/storage.StorageContext.md)) => `void` ; `_type`: ``"ClusterServer"`` ; `_verifySceneExtensionFieldSets`: (`values`: [`TypeFromSchema`](tlv.md#typefromschema)<typeof [`TlvAttributeValuePair`](cluster.md#tlvattributevaluepair)\>[]) => `boolean` ; `attributes`: [`AttributeServers`](cluster.md#attributeservers)<`A`\> ; `id`: `number` ; `name`: `string`  } & [`ServerAttributeGetters`](index._internal_.md#serverattributegetters)<`A`\> & [`ServerAttributeSetters`](index._internal_.md#serverattributesetters)<`A`\> & [`ServerAttributeSubscribers`](index._internal_.md#serverattributesubscribers)<`A`\>

Strongly typed interface of a cluster server

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster.Commands.md) |

#### Defined in

[packages/matter.js/src/cluster/server/ClusterServer.ts:75](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/ClusterServer.ts#L75)

___

### CommandHandler

Ƭ **CommandHandler**<`C`, `A`\>: `C` extends [`Command`](cluster.md#command)<infer RequestT, infer ResponseT\> ? (`args`: { `attributes`: `A` ; `endpoint`: [`Endpoint`](../classes/device.Endpoint.md) ; `message`: [`Message`](../interfaces/codec.Message.md) ; `request`: `RequestT` ; `session`: [`Session`](../interfaces/session.Session.md)<[`MatterDevice`](../classes/index.MatterDevice.md)\>  }) => `Promise`<`ResponseT`\> \| `ResponseT` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Command`](cluster.md#command)<`any`, `any`\> |
| `A` | extends [`AttributeServers`](cluster.md#attributeservers)<`any`\> |

#### Defined in

[packages/matter.js/src/cluster/server/ClusterServer.ts:45](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/ClusterServer.ts#L45)

___

### CommandServers

Ƭ **CommandServers**<`C`\>: [`Merge`](util.md#merge)<{ [P in MandatoryCommandNames<C\>]: CommandServer<RequestType<C[P]\>, ResponseType<C[P]\>\> }, { [P in OptionalCommandNames<C\>]?: CommandServer<RequestType<C[P]\>, ResponseType<C[P]\>\> }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Commands`](../interfaces/cluster.Commands.md) |

#### Defined in

[packages/matter.js/src/cluster/server/ClusterServer.ts:51](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/ClusterServer.ts#L51)

___

### CommissioningSuccessFailureResponse

Ƭ **CommissioningSuccessFailureResponse**: [`TypeFromSchema`](tlv.md#typefromschema)<typeof [`TlvCommissioningSuccessFailureResponse`](index._internal_.md#tlvcommissioningsuccessfailureresponse)\>

#### Defined in

[packages/matter.js/src/cluster/GeneralCommissioningCluster.ts:80](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/GeneralCommissioningCluster.ts#L80)

___

### GlobalAttributes

Ƭ **GlobalAttributes**<`F`\>: `Object`

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § 7.13

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](schema.md#bitschema) |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `acceptedCommandList` | [`Attribute`](cluster.md#attribute)<[`CommandId`](../classes/datatype.CommandId.md)[]\> | List of client generated commands which are supported by this cluster server instance. |
| `attributeList` | [`Attribute`](cluster.md#attribute)<[`AttributeId`](../classes/datatype.AttributeId.md)[]\> | List of the attribute IDs of the attributes supported by the cluster instance. |
| `clusterRevision` | [`Attribute`](cluster.md#attribute)<`number`\> | Indicates the revision of the server cluster specification supported by the cluster instance. |
| `eventList` | [`Attribute`](cluster.md#attribute)<[`EventId`](../classes/datatype.EventId.md)[]\> | List of the event IDs of the events supported by the cluster instance. |
| `featureMap` | [`Attribute`](cluster.md#attribute)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<`F`\>\> | Indicates whether the server supports zero or more optional cluster features. |
| `generatedCommandList` | [`Attribute`](cluster.md#attribute)<[`CommandId`](../classes/datatype.CommandId.md)[]\> | List of server generated commands (server to client commands). |

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:67](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L67)

[packages/matter.js/src/cluster/Cluster.ts:87](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L87)

___

### MandatoryAttributeNames

Ƭ **MandatoryAttributeNames**<`A`\>: { [K in keyof A]: A[K] extends OptionalAttribute<any\> ? never : K }[keyof `A`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/cluster.Attributes.md) |

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:37](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L37)

___

### OptionalAttributeNames

Ƭ **OptionalAttributeNames**<`A`\>: { [K in keyof A]: A[K] extends OptionalAttribute<any\> ? K : never }[keyof `A`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/cluster.Attributes.md) |

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:38](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L38)

___

### RequestType

Ƭ **RequestType**<`T`\>: `T` extends [`OptionalCommand`](cluster.md#optionalcommand)<infer RequestT, `any`\> ? `RequestT` : `T` extends [`Command`](cluster.md#command)<infer RequestT, `any`\> ? `RequestT` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Command`](cluster.md#command)<`any`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:45](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L45)

___

### ResponseType

Ƭ **ResponseType**<`T`\>: `T` extends [`OptionalCommand`](cluster.md#optionalcommand)<`any`, infer ResponseT\> ? `ResponseT` : `T` extends [`Command`](cluster.md#command)<`any`, infer ResponseT\> ? `ResponseT` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Command`](cluster.md#command)<`any`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:44](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L44)

___

### SignatureFromCommandSpec

Ƭ **SignatureFromCommandSpec**<`C`\>: (`request`: [`RequestType`](cluster.md#requesttype)<`C`\>) => `Promise`<[`ResponseType`](cluster.md#responsetype)<`C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Command`](cluster.md#command)<`any`, `any`\> |

#### Type declaration

▸ (`request`): `Promise`<[`ResponseType`](cluster.md#responsetype)<`C`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`RequestType`](cluster.md#requesttype)<`C`\> |

##### Returns

`Promise`<[`ResponseType`](cluster.md#responsetype)<`C`\>\>

#### Defined in

[packages/matter.js/src/cluster/client/ClusterClient.ts:17](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/client/ClusterClient.ts#L17)

## Variables

### AccessControlCluster

• `Const` **AccessControlCluster**: [`Cluster`](cluster.md#cluster)<[`BitSchema`](schema.md#bitschema), [`TypeFromBitSchema`](schema.md#typefrombitschema)<[`BitSchema`](schema.md#bitschema)\>, [`Merge`](util.md#merge)<{ `accessControlEntriesPerFabric`: [`Attribute`](cluster.md#attribute)<`number`\> ; `acl`: [`WritableAttribute`](cluster.md#writableattribute)<[`TypeFromFields`](tlv.md#typefromfields)<{ `authMode`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`AuthMode`](../enums/cluster.AuthMode.md)\> ; `privilege`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`Privilege`](../enums/cluster.Privilege.md)\> ; `subjects`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| [`NodeId`](../classes/datatype.NodeId.md)[]\> ; `targets`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| [`TypeFromFields`](tlv.md#typefromfields)<{ `cluster`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| [`ClusterId`](../classes/datatype.ClusterId.md)\> ; `deviceType`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| [`DeviceTypeId`](../classes/datatype.DeviceTypeId.md)\> ; `endpoint`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| [`EndpointNumber`](../classes/datatype.EndpointNumber.md)\>  }\>[]\>  }\>[]\> ; `extension`: [`OptionalWritableAttribute`](cluster.md#optionalwritableattribute)<[`TypeFromFields`](tlv.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>[]\> ; `subjectsPerAccessControlEntry`: [`Attribute`](cluster.md#attribute)<`number`\> ; `targetsPerAccessControlEntry`: [`Attribute`](cluster.md#attribute)<`number`\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<[`BitSchema`](schema.md#bitschema)\>\>, [`Commands`](../interfaces/cluster.Commands.md), { `accessControlEntryChanged`: [`Event`](cluster.md#event)<[`TypeFromFields`](tlv.md#typefromfields)<{ `adminNodeID`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| [`NodeId`](../classes/datatype.NodeId.md)\> ; `adminPasscodeID`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number`\> ; `changeType`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`ChangeTypeEnum`](../enums/cluster.ChangeTypeEnum.md)\> ; `latestValue`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| [`TypeFromFields`](tlv.md#typefromfields)<{ `authMode`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`AuthMode`](../enums/cluster.AuthMode.md)\> ; `privilege`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`Privilege`](../enums/cluster.Privilege.md)\> ; `subjects`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| [`NodeId`](../classes/datatype.NodeId.md)[]\> ; `targets`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| [`TypeFromFields`](tlv.md#typefromfields)<{ `cluster`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| [`ClusterId`](../classes/datatype.ClusterId.md)\> ; `deviceType`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| [`DeviceTypeId`](../classes/datatype.DeviceTypeId.md)\> ; `endpoint`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| [`EndpointNumber`](../classes/datatype.EndpointNumber.md)\>  }\>[]\>  }\>\>  }\>\> ; `accessControlExtensionChanged`: [`Event`](cluster.md#event)<[`TypeFromFields`](tlv.md#typefromfields)<{ `adminNodeID`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| [`NodeId`](../classes/datatype.NodeId.md)\> ; `adminPasscodeID`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number`\> ; `changeType`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`ChangeTypeEnum`](../enums/cluster.ChangeTypeEnum.md)\> ; `latestValue`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| [`TypeFromFields`](tlv.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>\>  }\>\>  }\>

The Access Control Cluster exposes a data model view of a Node’s Access Control List (ACL),
which codifies the rules used to manage and enforce Access Control for the Node’s endpoints
and their associated cluster instances. Access to this Access Control Cluster itself requires
a special Administer privilege level, such that only Nodes granted such privilege (hereafter
termed "Administrators") can manage the Access Control Cluster.
The Access Control Cluster SHALL be present on the root node endpoint of each Node, and SHALL
NOT be present on any other Endpoint of any Node.

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § 9.10

#### Defined in

[packages/matter.js/src/cluster/AccessControlCluster.ts:138](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/AccessControlCluster.ts#L138)

___

### ActionsCluster

• `Const` **ActionsCluster**: [`Cluster`](cluster.md#cluster)<[`BitSchema`](schema.md#bitschema), [`TypeFromBitSchema`](schema.md#typefrombitschema)<[`BitSchema`](schema.md#bitschema)\>, [`Merge`](util.md#merge)<{ `actionList`: [`Attribute`](cluster.md#attribute)<[`TypeFromFields`](tlv.md#typefromfields)<{ `actionID`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `endpointListId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `name`: [`FieldType`](../interfaces/tlv.FieldType.md)<`string`\> ; `state`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`ActionStateEnum`](../enums/cluster.ActionStateEnum.md)\> ; `supportedCommands`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `disableAction`: [`BitFlag`](schema.md#bitflag-1) ; `disableActionWithDuration`: [`BitFlag`](schema.md#bitflag-1) ; `enableAction`: [`BitFlag`](schema.md#bitflag-1) ; `enableActionWithDuration`: [`BitFlag`](schema.md#bitflag-1) ; `instantAction`: [`BitFlag`](schema.md#bitflag-1) ; `instantActionWithTransition`: [`BitFlag`](schema.md#bitflag-1) ; `pauseAction`: [`BitFlag`](schema.md#bitflag-1) ; `pauseActionWithDuration`: [`BitFlag`](schema.md#bitflag-1) ; `resumeAction`: [`BitFlag`](schema.md#bitflag-1) ; `startAction`: [`BitFlag`](schema.md#bitflag-1) ; `startActionWithDuration`: [`BitFlag`](schema.md#bitflag-1) ; `stopAction`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `type`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`ActionTypeEnum`](../enums/cluster.ActionTypeEnum.md)\>  }\>[]\> ; `endpointLists`: [`Attribute`](cluster.md#attribute)<[`TypeFromFields`](tlv.md#typefromfields)<{ `endpointListId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `endpoints`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`EndpointNumber`](../classes/datatype.EndpointNumber.md)[]\> ; `name`: [`FieldType`](../interfaces/tlv.FieldType.md)<`string`\> ; `type`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`EndpointListType`](../enums/cluster.EndpointListType.md)\>  }\>[]\> ; `setupURL`: [`OptionalAttribute`](cluster.md#optionalattribute)<`string`\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<[`BitSchema`](schema.md#bitschema)\>\>, { `disableAction`: [`OptionalCommand`](cluster.md#optionalcommand)<[`TypeFromFields`](tlv.md#typefromfields)<{ `actionId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>, `void`\> ; `disableActionWithDuration`: [`OptionalCommand`](cluster.md#optionalcommand)<[`TypeFromFields`](tlv.md#typefromfields)<{ `actionId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `duration`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>, `void`\> ; `enableAction`: [`OptionalCommand`](cluster.md#optionalcommand)<[`TypeFromFields`](tlv.md#typefromfields)<{ `actionId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>, `void`\> ; `enableActionWithDuration`: [`OptionalCommand`](cluster.md#optionalcommand)<[`TypeFromFields`](tlv.md#typefromfields)<{ `actionId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `duration`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>, `void`\> ; `instantAction`: [`OptionalCommand`](cluster.md#optionalcommand)<[`TypeFromFields`](tlv.md#typefromfields)<{ `actionId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>, `void`\> ; `instantActionWithTransition`: [`OptionalCommand`](cluster.md#optionalcommand)<[`TypeFromFields`](tlv.md#typefromfields)<{ `actionId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>, `void`\> ; `pauseAction`: [`OptionalCommand`](cluster.md#optionalcommand)<[`TypeFromFields`](tlv.md#typefromfields)<{ `actionId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>, `void`\> ; `pauseActionWithDuration`: [`OptionalCommand`](cluster.md#optionalcommand)<[`TypeFromFields`](tlv.md#typefromfields)<{ `actionId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `duration`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>, `void`\> ; `resumeAction`: [`OptionalCommand`](cluster.md#optionalcommand)<[`TypeFromFields`](tlv.md#typefromfields)<{ `actionId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>, `void`\> ; `startAction`: [`OptionalCommand`](cluster.md#optionalcommand)<[`TypeFromFields`](tlv.md#typefromfields)<{ `actionId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>, `void`\> ; `startActionWithDuration`: [`OptionalCommand`](cluster.md#optionalcommand)<[`TypeFromFields`](tlv.md#typefromfields)<{ `actionId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `duration`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>, `void`\> ; `stopAction`: [`OptionalCommand`](cluster.md#optionalcommand)<[`TypeFromFields`](tlv.md#typefromfields)<{ `actionId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>, `void`\>  }, { `actionFailed`: [`Event`](cluster.md#event)<[`TypeFromFields`](tlv.md#typefromfields)<{ `actionId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `error`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`ActionErrorEnum`](../enums/cluster.ActionErrorEnum.md)\> ; `invokeId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `newState`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`ActionStateEnum`](../enums/cluster.ActionStateEnum.md)\>  }\>\> ; `stateChanged`: [`Event`](cluster.md#event)<[`TypeFromFields`](tlv.md#typefromfields)<{ `actionId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `invokeId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `newState`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`ActionStateEnum`](../enums/cluster.ActionStateEnum.md)\>  }\>\>  }\>

This cluster provides a standardized way for a Node (typically a Bridge, but could be any Node) to expose
 * information about logical grouping of endpoints on the Node (example: lights in a room)
 * information about named actions that can be performed on such a group of endpoints (example: recall a
   scene for a group of lights by its name)
 * commands to trigger such actions
 * events to receive feedback on the state of such actions.

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § 9.14

#### Defined in

[packages/matter.js/src/cluster/ActionsCluster.ts:291](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/ActionsCluster.ts#L291)

___

### AdminCommissioningCluster

• `Const` **AdminCommissioningCluster**: [`Cluster`](cluster.md#cluster)<{ `basic`: [`BitFlag`](schema.md#bitflag-1)  }, { `basic`: ``false`` = false }, [`Merge`](util.md#merge)<{ `adminFabricIndex`: [`Attribute`](cluster.md#attribute)<``null`` \| [`FabricIndex`](../classes/datatype.FabricIndex.md)\> ; `adminVendorId`: [`Attribute`](cluster.md#attribute)<``null`` \| [`VendorId`](../classes/datatype.VendorId.md)\> ; `windowStatus`: [`Attribute`](cluster.md#attribute)<[`CommissioningWindowStatus`](../enums/cluster.CommissioningWindowStatus.md)\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<{ `basic`: [`BitFlag`](schema.md#bitflag-1)  }\>\>, { `openCommissioningWindow`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `commissioningTimeout`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `discriminator`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `iterations`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `pakePasscodeVerifier`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `salt`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>, `void`\> ; `revokeCommissioning`: [`Command`](cluster.md#command)<`void`, `void`\>  }, [`Events`](../interfaces/cluster.Events.md)\>

This cluster is used to trigger a Node to allow a new Administrator to commission it.

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § 11.18

#### Defined in

[packages/matter.js/src/cluster/AdminCommissioningCluster.ts:74](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/AdminCommissioningCluster.ts#L74)

___

### AllClustersMap

• `Const` **AllClustersMap**: `Object`

#### Index signature

▪ [key: [`Cluster`](cluster.md#cluster)<`any`, `any`, `any`, `any`, `any`\>[``"id"``]]: [`Cluster`](cluster.md#cluster)<`any`, `any`, `any`, `any`, `any`\>

#### Defined in

[packages/matter.js/src/cluster/ClusterHelper.ts:35](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/ClusterHelper.ts#L35)

___

### BasicAdminCommissioningCluster

• `Const` **BasicAdminCommissioningCluster**: [`Cluster`](cluster.md#cluster)<{ `basic`: [`BitFlag`](schema.md#bitflag-1)  }, [`Merge`](util.md#merge)<{ `basic`: ``false`` = false }, { `basic`: ``true`` = true }\>, [`Merge`](util.md#merge)<[`Merge`](util.md#merge)<{ `adminFabricIndex`: [`Attribute`](cluster.md#attribute)<``null`` \| [`FabricIndex`](../classes/datatype.FabricIndex.md)\> ; `adminVendorId`: [`Attribute`](cluster.md#attribute)<``null`` \| [`VendorId`](../classes/datatype.VendorId.md)\> ; `windowStatus`: [`Attribute`](cluster.md#attribute)<[`CommissioningWindowStatus`](../enums/cluster.CommissioningWindowStatus.md)\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<{ `basic`: [`BitFlag`](schema.md#bitflag-1)  }\>\>, [`Attributes`](../interfaces/cluster.Attributes.md)\>, [`Merge`](util.md#merge)<{ `openCommissioningWindow`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `commissioningTimeout`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `discriminator`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `iterations`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `pakePasscodeVerifier`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `salt`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>, `void`\> ; `revokeCommissioning`: [`Command`](cluster.md#command)<`void`, `void`\>  }, { `openBasicCommissioningWindow`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `commissioningTimeout`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>, `void`\>  }\>, [`Merge`](util.md#merge)<[`Events`](../interfaces/cluster.Events.md), [`Events`](../interfaces/cluster.Events.md)\>\>

#### Defined in

[packages/matter.js/src/cluster/AdminCommissioningCluster.ts:107](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/AdminCommissioningCluster.ts#L107)

___

### BasicInformationCluster

• `Const` **BasicInformationCluster**: [`Cluster`](cluster.md#cluster)<[`BitSchema`](schema.md#bitschema), [`TypeFromBitSchema`](schema.md#typefrombitschema)<[`BitSchema`](schema.md#bitschema)\>, [`Merge`](util.md#merge)<{ `capabilityMinima`: [`Attribute`](cluster.md#attribute)<[`TypeFromFields`](tlv.md#typefromfields)<{ `caseSessionsPerFabric`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `subscriptionsPerFabric`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>\> ; `dataModelRevision`: [`Attribute`](cluster.md#attribute)<`number`\> ; `hardwareVersion`: [`Attribute`](cluster.md#attribute)<`number`\> ; `hardwareVersionString`: [`Attribute`](cluster.md#attribute)<`string`\> ; `localConfigDisabled`: [`OptionalWritableAttribute`](cluster.md#optionalwritableattribute)<`boolean`\> ; `location`: [`WritableAttribute`](cluster.md#writableattribute)<`string`\> ; `manufacturingDate`: [`OptionalAttribute`](cluster.md#optionalattribute)<`string`\> ; `nodeLabel`: [`WritableAttribute`](cluster.md#writableattribute)<`string`\> ; `partNumber`: [`OptionalAttribute`](cluster.md#optionalattribute)<`string`\> ; `productId`: [`Attribute`](cluster.md#attribute)<`number`\> ; `productLabel`: [`OptionalAttribute`](cluster.md#optionalattribute)<`string`\> ; `productName`: [`Attribute`](cluster.md#attribute)<`string`\> ; `productURL`: [`OptionalAttribute`](cluster.md#optionalattribute)<`string`\> ; `reachable`: [`OptionalAttribute`](cluster.md#optionalattribute)<`boolean`\> ; `serialNumber`: [`OptionalAttribute`](cluster.md#optionalattribute)<`string`\> ; `softwareVersion`: [`Attribute`](cluster.md#attribute)<`number`\> ; `softwareVersionString`: [`Attribute`](cluster.md#attribute)<`string`\> ; `uniqueId`: [`OptionalAttribute`](cluster.md#optionalattribute)<`string`\> ; `vendorId`: [`Attribute`](cluster.md#attribute)<[`VendorId`](../classes/datatype.VendorId.md)\> ; `vendorName`: [`Attribute`](cluster.md#attribute)<`string`\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<[`BitSchema`](schema.md#bitschema)\>\>, [`Commands`](../interfaces/cluster.Commands.md), { `leave`: [`Event`](cluster.md#event)<[`TypeFromFields`](tlv.md#typefromfields)<{ `fabricIndex`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`FabricIndex`](../classes/datatype.FabricIndex.md)\>  }\>\> ; `reachableChanged`: [`Event`](cluster.md#event)<[`TypeFromFields`](tlv.md#typefromfields)<{ `reachableNewValue`: [`FieldType`](../interfaces/tlv.FieldType.md)<`boolean`\>  }\>\> ; `shutDown`: [`Event`](cluster.md#event)<[`TypeFromFields`](tlv.md#typefromfields)<[`TlvFields`](tlv.md#tlvfields)\>\> ; `startUp`: [`Event`](cluster.md#event)<[`TypeFromFields`](tlv.md#typefromfields)<{ `softwareVersion`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>\>  }\>

This cluster provides attributes and events for determining basic information about Nodes, which supports both
commissioning and operational determination of Node characteristics, such as Vendor ID, Product ID and serial number,
which apply to the whole Node. Also allows setting user device information such as location.

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § 11.1

#### Defined in

[packages/matter.js/src/cluster/BasicInformationCluster.ts:39](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/BasicInformationCluster.ts#L39)

___

### BindingCluster

• `Const` **BindingCluster**: [`Cluster`](cluster.md#cluster)<[`BitSchema`](schema.md#bitschema), [`TypeFromBitSchema`](schema.md#typefrombitschema)<[`BitSchema`](schema.md#bitschema)\>, [`Merge`](util.md#merge)<{ `bindingList`: [`WritableAttribute`](cluster.md#writableattribute)<[`TypeFromFields`](tlv.md#typefromfields)<{ `cluster`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`ClusterId`](../classes/datatype.ClusterId.md)\> ; `endpoint`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`EndpointNumber`](../classes/datatype.EndpointNumber.md)\> ; `group`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `node`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](../classes/datatype.NodeId.md)\>  }\>[]\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<[`BitSchema`](schema.md#bitschema)\>\>, [`Commands`](../interfaces/cluster.Commands.md), [`Events`](../interfaces/cluster.Events.md)\>

A binding represents a persistent relationship between an endpoint and one or more other local or
remote endpoints. A binding does not require that the relationship exists. It is up to the node
application to set up the relationship.

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § 9.6

#### Defined in

[packages/matter.js/src/cluster/BindingCluster.ts:46](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/BindingCluster.ts#L46)

___

### BooleanStateCluster

• `Const` **BooleanStateCluster**: [`Cluster`](cluster.md#cluster)<[`BitSchema`](schema.md#bitschema), [`TypeFromBitSchema`](schema.md#typefrombitschema)<[`BitSchema`](schema.md#bitschema)\>, [`Merge`](util.md#merge)<{ `stateValue`: [`Attribute`](cluster.md#attribute)<`boolean`\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<[`BitSchema`](schema.md#bitschema)\>\>, [`Commands`](../interfaces/cluster.Commands.md), { `stateChange`: [`Event`](cluster.md#event)<[`TypeFromFields`](tlv.md#typefromfields)<{ `stateValue`: [`FieldType`](../interfaces/tlv.FieldType.md)<`boolean`\>  }\>\>  }\>

Attributes and commands for Boolean State.

**`See`**

[MatterApplicationClusterSpecificationV1_0](../interfaces/spec.MatterApplicationClusterSpecificationV1_0.md) § 1.7

#### Defined in

[packages/matter.js/src/cluster/BooleanStateCluster.ts:17](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/BooleanStateCluster.ts#L17)

___

### BridgedDeviceBasicInformationCluster

• `Const` **BridgedDeviceBasicInformationCluster**: [`Cluster`](cluster.md#cluster)<[`BitSchema`](schema.md#bitschema), [`TypeFromBitSchema`](schema.md#typefrombitschema)<[`BitSchema`](schema.md#bitschema)\>, [`Merge`](util.md#merge)<{ `hardwareVersion`: [`OptionalAttribute`](cluster.md#optionalattribute)<`number`\> ; `hardwareVersionString`: [`OptionalAttribute`](cluster.md#optionalattribute)<`string`\> ; `manufacturingDate`: [`OptionalAttribute`](cluster.md#optionalattribute)<`string`\> ; `nodeLabel`: [`OptionalWritableAttribute`](cluster.md#optionalwritableattribute)<`string`\> ; `partNumber`: [`OptionalAttribute`](cluster.md#optionalattribute)<`string`\> ; `productLabel`: [`OptionalAttribute`](cluster.md#optionalattribute)<`string`\> ; `productName`: [`OptionalAttribute`](cluster.md#optionalattribute)<`string`\> ; `productURL`: [`OptionalAttribute`](cluster.md#optionalattribute)<`string`\> ; `reachable`: [`Attribute`](cluster.md#attribute)<`boolean`\> ; `serialNumber`: [`OptionalAttribute`](cluster.md#optionalattribute)<`string`\> ; `softwareVersion`: [`OptionalAttribute`](cluster.md#optionalattribute)<`number`\> ; `softwareVersionString`: [`OptionalAttribute`](cluster.md#optionalattribute)<`string`\> ; `uniqueId`: [`OptionalAttribute`](cluster.md#optionalattribute)<`string`\> ; `vendorId`: [`OptionalAttribute`](cluster.md#optionalattribute)<[`VendorId`](../classes/datatype.VendorId.md)\> ; `vendorName`: [`OptionalAttribute`](cluster.md#optionalattribute)<`string`\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<[`BitSchema`](schema.md#bitschema)\>\>, [`Commands`](../interfaces/cluster.Commands.md), { `leave`: [`Event`](cluster.md#event)<[`TypeFromFields`](tlv.md#typefromfields)<{ `fabricIndex`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`FabricIndex`](../classes/datatype.FabricIndex.md)\>  }\>\> ; `reachableChanged`: [`Event`](cluster.md#event)<[`TypeFromFields`](tlv.md#typefromfields)<{ `reachableNewValue`: [`FieldType`](../interfaces/tlv.FieldType.md)<`boolean`\>  }\>\> ; `shutDown`: [`Event`](cluster.md#event)<[`TypeFromFields`](tlv.md#typefromfields)<[`TlvFields`](tlv.md#tlvfields)\>\> ; `startUp`: [`Event`](cluster.md#event)<[`TypeFromFields`](tlv.md#typefromfields)<{ `softwareVersion`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>\>  }\>

This Cluster serves two purposes towards a Node communicating with a Bridge:
* indicate that the functionality on the Endpoint where it is placed (and its Parts) is bridged from a
  non-Matter technology, and
* provide a centralized collection of attributes that the Node MAY collect to aid in conveying information
  regarding the Bridged Device to a user, such as the vendor name, the model name, or user-assigned name.

This cluster is Derived from Basic Information Cluster.

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § 9.13

#### Defined in

[packages/matter.js/src/cluster/BridgedDeviceBasicInformationCluster.ts:27](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/BridgedDeviceBasicInformationCluster.ts#L27)

___

### DescriptorCluster

• `Const` **DescriptorCluster**: [`Cluster`](cluster.md#cluster)<[`BitSchema`](schema.md#bitschema), [`TypeFromBitSchema`](schema.md#typefrombitschema)<[`BitSchema`](schema.md#bitschema)\>, [`Merge`](util.md#merge)<{ `clientList`: [`Attribute`](cluster.md#attribute)<[`ClusterId`](../classes/datatype.ClusterId.md)[]\> ; `deviceTypeList`: [`Attribute`](cluster.md#attribute)<[`TypeFromFields`](tlv.md#typefromfields)<{ `deviceType`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`DeviceTypeId`](../classes/datatype.DeviceTypeId.md)\> ; `revision`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>[]\> ; `partsList`: [`Attribute`](cluster.md#attribute)<[`EndpointNumber`](../classes/datatype.EndpointNumber.md)[]\> ; `serverList`: [`Attribute`](cluster.md#attribute)<[`ClusterId`](../classes/datatype.ClusterId.md)[]\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<[`BitSchema`](schema.md#bitschema)\>\>, [`Commands`](../interfaces/cluster.Commands.md), [`Events`](../interfaces/cluster.Events.md)\>

This cluster describes an endpoint instance on the node, independently of other endpoints, but also
allows composition of endpoints to conform to complex device type patterns.
This Cluster is also meant to replace the support from the Zigbee Device Object (ZDO) for describing a node,
its endpoints and clusters.

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § 9.5

#### Defined in

[packages/matter.js/src/cluster/DescriptorCluster.ts:37](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/DescriptorCluster.ts#L37)

___

### EthernetNetworkCommissioningCluster

• `Const` **EthernetNetworkCommissioningCluster**: [`Cluster`](cluster.md#cluster)<{ `ethernet`: [`BitFlag`](schema.md#bitflag-1) ; `thread`: [`BitFlag`](schema.md#bitflag-1) ; `wifi`: [`BitFlag`](schema.md#bitflag-1)  }, { `ethernet`: ``true`` = true; `thread`: ``false`` = false; `wifi`: ``false`` = false }, [`Merge`](util.md#merge)<{ `interfaceEnabled`: [`WritableAttribute`](cluster.md#writableattribute)<`boolean`\> ; `lastConnectErrorValue`: [`Attribute`](cluster.md#attribute)<``null`` \| `number`\> ; `lastNetworkId`: [`Attribute`](cluster.md#attribute)<``null`` \| `Uint8Array`\> ; `lastNetworkingStatus`: [`Attribute`](cluster.md#attribute)<``null`` \| [`NetworkCommissioningStatus`](../enums/cluster.NetworkCommissioningStatus.md)\> ; `maxNetworks`: [`Attribute`](cluster.md#attribute)<`number`\> ; `networks`: [`Attribute`](cluster.md#attribute)<[`TypeFromFields`](tlv.md#typefromfields)<{ `connected`: [`FieldType`](../interfaces/tlv.FieldType.md)<`boolean`\> ; `networkId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>[]\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<{ `ethernet`: [`BitFlag`](schema.md#bitflag-1) ; `thread`: [`BitFlag`](schema.md#bitflag-1) ; `wifi`: [`BitFlag`](schema.md#bitflag-1)  }\>\>, [`Commands`](../interfaces/cluster.Commands.md), [`Events`](../interfaces/cluster.Events.md)\>

This cluster is used to associate a Node with or manage a Node’s one or more network interfaces.

**`See`**

MatterCoreSpecificationV1_0 § 11.8

#### Defined in

[packages/matter.js/src/cluster/NetworkCommissioningCluster.ts:227](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/NetworkCommissioningCluster.ts#L227)

___

### FixedLabelCluster

• `Const` **FixedLabelCluster**: [`Cluster`](cluster.md#cluster)<[`BitSchema`](schema.md#bitschema), [`TypeFromBitSchema`](schema.md#typefrombitschema)<[`BitSchema`](schema.md#bitschema)\>, [`Merge`](util.md#merge)<{ `labelList`: [`Attribute`](cluster.md#attribute)<[`TypeFromFields`](tlv.md#typefromfields)<{ `label`: [`FieldType`](../interfaces/tlv.FieldType.md)<`string`\> ; `value`: [`FieldType`](../interfaces/tlv.FieldType.md)<`string`\>  }\>[]\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<[`BitSchema`](schema.md#bitschema)\>\>, [`Commands`](../interfaces/cluster.Commands.md), [`Events`](../interfaces/cluster.Events.md)\>

This cluster provides a feature for the device to tag an endpoint with zero or more read only labels.
Derived from LabelCluster ([MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § 9.7)

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § 9.8

#### Defined in

[packages/matter.js/src/cluster/LabelCluster.ts:50](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/LabelCluster.ts#L50)

___

### FlowMeasurementCluster

• `Const` **FlowMeasurementCluster**: [`Cluster`](cluster.md#cluster)<[`BitSchema`](schema.md#bitschema), [`TypeFromBitSchema`](schema.md#typefrombitschema)<[`BitSchema`](schema.md#bitschema)\>, [`Merge`](util.md#merge)<{ `maxMeasuredValue`: [`Attribute`](cluster.md#attribute)<``null`` \| `number`\> ; `measuredValue`: [`Attribute`](cluster.md#attribute)<``null`` \| `number`\> ; `minMeasuredValue`: [`Attribute`](cluster.md#attribute)<``null`` \| `number`\> ; `tolerance`: [`OptionalAttribute`](cluster.md#optionalattribute)<`number`\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<[`BitSchema`](schema.md#bitschema)\>\>, [`Commands`](../interfaces/cluster.Commands.md), [`Events`](../interfaces/cluster.Events.md)\>

This cluster provides an interface to flow measurement functionality.

**`See`**

[MatterApplicationClusterSpecificationV1_0](../interfaces/spec.MatterApplicationClusterSpecificationV1_0.md) § 2.5

#### Defined in

[packages/matter.js/src/cluster/FlowMeasurementCluster.ts:17](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/FlowMeasurementCluster.ts#L17)

___

### GeneralCommissioningCluster

• `Const` **GeneralCommissioningCluster**: [`Cluster`](cluster.md#cluster)<[`BitSchema`](schema.md#bitschema), [`TypeFromBitSchema`](schema.md#typefrombitschema)<[`BitSchema`](schema.md#bitschema)\>, [`Merge`](util.md#merge)<{ `basicCommissioningInfo`: [`Attribute`](cluster.md#attribute)<[`TypeFromFields`](tlv.md#typefromfields)<{ `failSafeExpiryLengthSeconds`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `maxCumulativeFailsafeSeconds`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>\> ; `breadcrumb`: [`WritableAttribute`](cluster.md#writableattribute)<`number` \| `bigint`\> ; `locationCapability`: [`Attribute`](cluster.md#attribute)<[`RegulatoryLocationType`](../enums/cluster.RegulatoryLocationType.md)\> ; `regulatoryConfig`: [`Attribute`](cluster.md#attribute)<[`RegulatoryLocationType`](../enums/cluster.RegulatoryLocationType.md)\> ; `supportsConcurrentConnections`: [`Attribute`](cluster.md#attribute)<`boolean`\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<[`BitSchema`](schema.md#bitschema)\>\>, { `armFailSafe`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `breadcrumb`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number` \| `bigint`\> ; `expiryLengthSeconds`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `debugText`: [`FieldType`](../interfaces/tlv.FieldType.md)<`string`\> ; `errorCode`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`CommissioningError`](../enums/cluster.CommissioningError.md)\>  }\>\> ; `commissioningComplete`: [`Command`](cluster.md#command)<`void`, [`TypeFromFields`](tlv.md#typefromfields)<{ `debugText`: [`FieldType`](../interfaces/tlv.FieldType.md)<`string`\> ; `errorCode`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`CommissioningError`](../enums/cluster.CommissioningError.md)\>  }\>\> ; `setRegulatoryConfig`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `breadcrumb`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number` \| `bigint`\> ; `countryCode`: [`FieldType`](../interfaces/tlv.FieldType.md)<`string`\> ; `newRegulatoryConfig`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`RegulatoryLocationType`](../enums/cluster.RegulatoryLocationType.md)\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `debugText`: [`FieldType`](../interfaces/tlv.FieldType.md)<`string`\> ; `errorCode`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`CommissioningError`](../enums/cluster.CommissioningError.md)\>  }\>\>  }, [`Events`](../interfaces/cluster.Events.md)\>

This cluster is used to manage global aspects of the Commissioning flow.

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § 11.9

#### Defined in

[packages/matter.js/src/cluster/GeneralCommissioningCluster.ts:108](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/GeneralCommissioningCluster.ts#L108)

___

### GeneralCommissioningClusterHandler

• `Const` **GeneralCommissioningClusterHandler**: [`ClusterServerHandlers`](cluster.md#clusterserverhandlers)<typeof [`GeneralCommissioningCluster`](cluster.md#generalcommissioningcluster)\>

#### Defined in

[packages/matter.js/src/cluster/server/GeneralCommissioningServer.ts:16](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/GeneralCommissioningServer.ts#L16)

___

### GeneralDiagnosticsCluster

• `Const` **GeneralDiagnosticsCluster**: [`Cluster`](cluster.md#cluster)<[`BitSchema`](schema.md#bitschema), [`TypeFromBitSchema`](schema.md#typefrombitschema)<[`BitSchema`](schema.md#bitschema)\>, [`Merge`](util.md#merge)<{ `activeHardwareFaults`: [`OptionalAttribute`](cluster.md#optionalattribute)<[`HardwareFault`](../enums/cluster.HardwareFault.md)[]\> ; `activeNetworkFaults`: [`OptionalAttribute`](cluster.md#optionalattribute)<[`NetworkFault`](../enums/cluster.NetworkFault.md)[]\> ; `activeRadioFaults`: [`OptionalAttribute`](cluster.md#optionalattribute)<[`RadioFault`](../enums/cluster.RadioFault.md)[]\> ; `bootReason`: [`OptionalAttribute`](cluster.md#optionalattribute)<[`BootReason`](../enums/cluster.BootReason.md)\> ; `networkInterfaces`: [`Attribute`](cluster.md#attribute)<[`TypeFromFields`](tlv.md#typefromfields)<{ `hardwareAddress`: [`FieldType`](../interfaces/tlv.FieldType.md)<`string`\> ; `iPv4Addresses`: [`FieldType`](../interfaces/tlv.FieldType.md)<`string`[]\> ; `iPv6Addresse`: [`FieldType`](../interfaces/tlv.FieldType.md)<`string`[]\> ; `isOperational`: [`FieldType`](../interfaces/tlv.FieldType.md)<`boolean`\> ; `name`: [`FieldType`](../interfaces/tlv.FieldType.md)<`string`\> ; `offPremiseServicesReachableIPv4`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `boolean`\> ; `offPremiseServicesReachableIPv6`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `boolean`\> ; `type`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`InterfaceType`](../enums/cluster.InterfaceType.md)\>  }\>[]\> ; `rebootCount`: [`Attribute`](cluster.md#attribute)<`number`\> ; `testEventTriggersEnabled`: [`Attribute`](cluster.md#attribute)<`boolean`\> ; `totalOperationalHours`: [`OptionalAttribute`](cluster.md#optionalattribute)<`number`\> ; `upTime`: [`OptionalAttribute`](cluster.md#optionalattribute)<`number` \| `bigint`\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<[`BitSchema`](schema.md#bitschema)\>\>, { `testEventTrigger`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `enableKey`: [`FieldType`](../interfaces/tlv.FieldType.md)<`string`\> ; `eventTrigger`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number` \| `bigint`\>  }\>, `void`\>  }, { `bootReason`: [`Event`](cluster.md#event)<[`TypeFromFields`](tlv.md#typefromfields)<{ `bootReason`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`BootReason`](../enums/cluster.BootReason.md)\>  }\>\> ; `hardwareFaultChange`: [`Event`](cluster.md#event)<[`TypeFromFields`](tlv.md#typefromfields)<{ `current`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`HardwareFault`](../enums/cluster.HardwareFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`HardwareFault`](../enums/cluster.HardwareFault.md)[]\>  }\>\> ; `networkFaultChange`: [`Event`](cluster.md#event)<[`TypeFromFields`](tlv.md#typefromfields)<{ `current`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`HardwareFault`](../enums/cluster.HardwareFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`HardwareFault`](../enums/cluster.HardwareFault.md)[]\>  }\>\> ; `radioFaultChange`: [`Event`](cluster.md#event)<[`TypeFromFields`](tlv.md#typefromfields)<{ `current`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`HardwareFault`](../enums/cluster.HardwareFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`HardwareFault`](../enums/cluster.HardwareFault.md)[]\>  }\>\>  }\>

The General Diagnostics Cluster, along with other diagnostics clusters, provide a means to acquire
standardized diagnostics metrics that MAY be used by a Node to assist a user or Administrator in
diagnosing potential problems. The General Diagnostics Cluster attempts to centralize all metrics
that are broadly relevant to the majority of Nodes.

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § 11.11

#### Defined in

[packages/matter.js/src/cluster/GeneralDiagnosticsCluster.ts:156](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/GeneralDiagnosticsCluster.ts#L156)

___

### GroupKeyManagementCluster

• `Const` **GroupKeyManagementCluster**: [`Cluster`](cluster.md#cluster)<{ `cacheAndSync`: [`BitFlag`](schema.md#bitflag-1)  }, [`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `cacheAndSync`: [`BitFlag`](schema.md#bitflag-1)  }\>, [`Merge`](util.md#merge)<{ `groupKeyMap`: [`WritableAttribute`](cluster.md#writableattribute)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `groupKeySetId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>[]\> ; `groupTable`: [`Attribute`](cluster.md#attribute)<[`TypeFromFields`](tlv.md#typefromfields)<{ `endPoints`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`EndpointNumber`](../classes/datatype.EndpointNumber.md)[]\> ; `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `groupName`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`string`\>  }\>[]\> ; `maxGroupKeysPerFabric`: [`Attribute`](cluster.md#attribute)<`number`\> ; `maxGroupsPerFabric`: [`Attribute`](cluster.md#attribute)<`number`\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<{ `cacheAndSync`: [`BitFlag`](schema.md#bitflag-1)  }\>\>, { `keySetRead`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupKeySetId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `groupKeySet`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `GroupKeyMulticastPolicy`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupKeySecurityPolicy`](../enums/cluster.GroupKeySecurityPolicy.md)\> ; `epochKey0`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `string`\> ; `epochKey1`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `string`\> ; `epochKey2`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `string`\> ; `epochStartTime0`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number` \| `bigint`\> ; `epochStartTime1`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number` \| `bigint`\> ; `epochStartTime2`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number` \| `bigint`\> ; `groupKeySecurityPolicy`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupKeySecurityPolicy`](../enums/cluster.GroupKeySecurityPolicy.md)\> ; `groupKeySetID`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>\>  }\>\> ; `keySetReadAllIndices`: [`Command`](cluster.md#command)<`void`, [`TypeFromFields`](tlv.md#typefromfields)<{ `groupKeySetIds`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`[]\>  }\>\> ; `keySetRemove`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupKeySetId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>, `void`\> ; `keySetWrite`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupKeySet`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `GroupKeyMulticastPolicy`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupKeySecurityPolicy`](../enums/cluster.GroupKeySecurityPolicy.md)\> ; `epochKey0`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `string`\> ; `epochKey1`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `string`\> ; `epochKey2`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `string`\> ; `epochStartTime0`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number` \| `bigint`\> ; `epochStartTime1`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number` \| `bigint`\> ; `epochStartTime2`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number` \| `bigint`\> ; `groupKeySecurityPolicy`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupKeySecurityPolicy`](../enums/cluster.GroupKeySecurityPolicy.md)\> ; `groupKeySetID`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>\>  }\>, `void`\>  }, [`Events`](../interfaces/cluster.Events.md)\>

The Group Key Management Cluster is the mechanism by which group keys are managed.

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § 11.2

#### Defined in

[packages/matter.js/src/cluster/GroupKeyManagementCluster.ts:98](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/GroupKeyManagementCluster.ts#L98)

___

### GroupsCluster

• `Const` **GroupsCluster**: [`Cluster`](cluster.md#cluster)<{ `groupNames`: [`BitFlag`](schema.md#bitflag-1)  }, [`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `groupNames`: [`BitFlag`](schema.md#bitflag-1)  }\>, [`Merge`](util.md#merge)<{ `nameSupport`: [`Attribute`](cluster.md#attribute)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `groupNames`: [`BitFlag`](schema.md#bitflag-1)  }\>\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<{ `groupNames`: [`BitFlag`](schema.md#bitflag-1)  }\>\>, { `addGroup`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `groupName`: [`FieldType`](../interfaces/tlv.FieldType.md)<`string`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\> ; `addGroupIfIdentifying`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `groupName`: [`FieldType`](../interfaces/tlv.FieldType.md)<`string`\>  }\>, `void`\> ; `getGroupMembership`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupList`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)[]\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `capacity`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number`\> ; `groupList`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)[]\>  }\>\> ; `removeAllGroups`: [`Command`](cluster.md#command)<`void`, `void`\> ; `removeGroup`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\> ; `viewGroup`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `groupName`: [`FieldType`](../interfaces/tlv.FieldType.md)<`string`\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\>  }, [`Events`](../interfaces/cluster.Events.md)\>

The Groups cluster manages, per endpoint, the content of the node-wide Group
Table that is part of the underlying interaction layer.

**`See`**

[MatterApplicationClusterSpecificationV1_0](../interfaces/spec.MatterApplicationClusterSpecificationV1_0.md) § 1.3

#### Defined in

[packages/matter.js/src/cluster/GroupsCluster.ts:83](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/GroupsCluster.ts#L83)

___

### IdentifyCluster

• `Const` **IdentifyCluster**: [`Cluster`](cluster.md#cluster)<{ `query`: [`BitFlag`](schema.md#bitflag-1)  }, [`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `query`: [`BitFlag`](schema.md#bitflag-1)  }\>, [`Merge`](util.md#merge)<{ `identifyTime`: [`WritableAttribute`](cluster.md#writableattribute)<`number`\> ; `identifyType`: [`Attribute`](cluster.md#attribute)<[`IdentifyType`](../enums/cluster.IdentifyType.md)\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<{ `query`: [`BitFlag`](schema.md#bitflag-1)  }\>\>, { `identify`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `identifyTime`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>, `void`\> ; `triggerEffect`: [`OptionalCommand`](cluster.md#optionalcommand)<[`TypeFromFields`](tlv.md#typefromfields)<{ `effectIdentifier`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`IdentifyEffectIdentifier`](../enums/cluster.IdentifyEffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`Default`](../enums/cluster.EffectVariant.md#default)\>  }\>, `void`\>  }, [`Events`](../interfaces/cluster.Events.md)\>

Attributes and commands for putting a device into Identification mode (e.g. flashing a light).

**`See`**

[MatterApplicationClusterSpecificationV1_0](../interfaces/spec.MatterApplicationClusterSpecificationV1_0.md) § 1.2

#### Defined in

[packages/matter.js/src/cluster/IdentifyCluster.ts:61](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/IdentifyCluster.ts#L61)

___

### IlluminanceMeasurementCluster

• `Const` **IlluminanceMeasurementCluster**: [`Cluster`](cluster.md#cluster)<[`BitSchema`](schema.md#bitschema), [`TypeFromBitSchema`](schema.md#typefrombitschema)<[`BitSchema`](schema.md#bitschema)\>, [`Merge`](util.md#merge)<{ `lightSensorType`: [`OptionalAttribute`](cluster.md#optionalattribute)<``null`` \| `number`\> ; `maxMeasuredValue`: [`Attribute`](cluster.md#attribute)<``null`` \| `number`\> ; `measuredValue`: [`Attribute`](cluster.md#attribute)<``null`` \| `number`\> ; `minMeasuredValue`: [`Attribute`](cluster.md#attribute)<``null`` \| `number`\> ; `tolerance`: [`OptionalAttribute`](cluster.md#optionalattribute)<`number`\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<[`BitSchema`](schema.md#bitschema)\>\>, [`Commands`](../interfaces/cluster.Commands.md), [`Events`](../interfaces/cluster.Events.md)\>

The Illuminance Measurement cluster provides an interface to illuminance measurement functionality.

**`See`**

[MatterApplicationClusterSpecificationV1_0](../interfaces/spec.MatterApplicationClusterSpecificationV1_0.md) § 2.2

#### Defined in

[packages/matter.js/src/cluster/IlluminanceMeasurementCluster.ts:17](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/IlluminanceMeasurementCluster.ts#L17)

___

### LeafWetnessMeasurementCluster

• `Const` **LeafWetnessMeasurementCluster**: [`Cluster`](cluster.md#cluster)<[`BitSchema`](schema.md#bitschema), [`TypeFromBitSchema`](schema.md#typefrombitschema)<[`BitSchema`](schema.md#bitschema)\>, [`Merge`](util.md#merge)<{ `maxMeasuredValue`: [`Attribute`](cluster.md#attribute)<``null`` \| `number`\> ; `measuredValue`: [`Attribute`](cluster.md#attribute)<``null`` \| `number`\> ; `minMeasuredValue`: [`Attribute`](cluster.md#attribute)<``null`` \| `number`\> ; `tolerance`: [`OptionalAttribute`](cluster.md#optionalattribute)<`number`\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<[`BitSchema`](schema.md#bitschema)\>\>, [`Commands`](../interfaces/cluster.Commands.md), [`Events`](../interfaces/cluster.Events.md)\>

Attributes and commands for Percentage of water in plants.

**`See`**

[MatterApplicationClusterSpecificationV1_0](../interfaces/spec.MatterApplicationClusterSpecificationV1_0.md) § 2.6.3

#### Defined in

[packages/matter.js/src/cluster/WaterContentMeasurementCluster.ts:48](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/WaterContentMeasurementCluster.ts#L48)

___

### LevelControlCluster

• `Const` **LevelControlCluster**: [`Cluster`](cluster.md#cluster)<{ `frequency`: [`BitFlag`](schema.md#bitflag-1) ; `lighting`: [`BitFlag`](schema.md#bitflag-1) ; `onOff`: [`BitFlag`](schema.md#bitflag-1)  }, [`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `frequency`: [`BitFlag`](schema.md#bitflag-1) ; `lighting`: [`BitFlag`](schema.md#bitflag-1) ; `onOff`: [`BitFlag`](schema.md#bitflag-1)  }\>, [`Merge`](util.md#merge)<{ `currentLevel`: [`Attribute`](cluster.md#attribute)<``null`` \| `number`\> ; `defaultMoveRate`: [`OptionalWritableAttribute`](cluster.md#optionalwritableattribute)<``null`` \| `number`\> ; `maxLevel`: [`OptionalAttribute`](cluster.md#optionalattribute)<`number`\> ; `minLevel`: [`OptionalAttribute`](cluster.md#optionalattribute)<`number`\> ; `offTransitionTime`: [`OptionalWritableAttribute`](cluster.md#optionalwritableattribute)<``null`` \| `number`\> ; `onLevel`: [`WritableAttribute`](cluster.md#writableattribute)<``null`` \| `number`\> ; `onOffTransitionTime`: [`OptionalWritableAttribute`](cluster.md#optionalwritableattribute)<`number`\> ; `onTransitionTime`: [`OptionalWritableAttribute`](cluster.md#optionalwritableattribute)<``null`` \| `number`\> ; `options`: [`WritableAttribute`](cluster.md#writableattribute)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `remainingTime`: [`OptionalAttribute`](cluster.md#optionalattribute)<`number`\> ; `startUpCurrentLevel`: [`OptionalWritableAttribute`](cluster.md#optionalwritableattribute)<``null`` \| `number`\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<{ `frequency`: [`BitFlag`](schema.md#bitflag-1) ; `lighting`: [`BitFlag`](schema.md#bitflag-1) ; `onOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\>, { `move`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `moveMode`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`MoveMode`](../enums/cluster.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number`\>  }\>, `void`\> ; `moveToLevel`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `level`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number`\>  }\>, `void`\> ; `moveToLevelWithOnOff`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `level`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number`\>  }\>, `void`\> ; `moveWithOnOff`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `moveMode`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`MoveMode`](../enums/cluster.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number`\>  }\>, `void`\> ; `step`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StepMode`](../enums/cluster.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number`\>  }\>, `void`\> ; `stepWithOnOff`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StepMode`](../enums/cluster.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number`\>  }\>, `void`\> ; `stop`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\>  }\>, `void`\> ; `stopWithOnOff`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\>  }\>, `void`\>  }, [`Events`](../interfaces/cluster.Events.md)\>

Attributes and commands for changing the level of devices, e.g. light intensity

**`See`**

[MatterApplicationClusterSpecificationV1_0](../interfaces/spec.MatterApplicationClusterSpecificationV1_0.md) § 1.6

#### Defined in

[packages/matter.js/src/cluster/LevelControlCluster.ts:146](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/LevelControlCluster.ts#L146)

___

### OccupancyBitmap

• `Const` **OccupancyBitmap**: [`TlvWrapper`](../classes/tlv.TlvWrapper.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `occupied`: [`BitFlag`](schema.md#bitflag-1)  }\>, `number`\>

**`See`**

[MatterApplicationClusterSpecificationV1_0](../interfaces/spec.MatterApplicationClusterSpecificationV1_0.md) § 2.7.5.1

#### Defined in

[packages/matter.js/src/cluster/OccupancySensingCluster.ts:14](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/OccupancySensingCluster.ts#L14)

___

### OccupancySensingCluster

• `Const` **OccupancySensingCluster**: [`Cluster`](cluster.md#cluster)<[`BitSchema`](schema.md#bitschema), [`TypeFromBitSchema`](schema.md#typefrombitschema)<[`BitSchema`](schema.md#bitschema)\>, [`Merge`](util.md#merge)<{ `occupancy`: [`Attribute`](cluster.md#attribute)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `occupied`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `occupancySensorType`: [`Attribute`](cluster.md#attribute)<[`OccupancySensorType`](../enums/cluster.OccupancySensorType.md)\> ; `occupancySensorTypeBitmap`: [`Attribute`](cluster.md#attribute)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `PIR`: [`BitFlag`](schema.md#bitflag-1) ; `physicalContact`: [`BitFlag`](schema.md#bitflag-1) ; `ultrasonic`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `physicalContactOccupiedToUnoccupiedDelay`: [`OptionalWritableAttribute`](cluster.md#optionalwritableattribute)<``null`` \| `number`\> ; `physicalContactUnoccupiedToOccupiedDelay`: [`OptionalWritableAttribute`](cluster.md#optionalwritableattribute)<``null`` \| `number`\> ; `physicalContactUnoccupiedToOccupiedThreshold`: [`OptionalWritableAttribute`](cluster.md#optionalwritableattribute)<`number`\> ; `pirOccupiedToUnoccupiedDelay`: [`OptionalWritableAttribute`](cluster.md#optionalwritableattribute)<`number`\> ; `pirUnoccupiedToOccupiedDelay`: [`OptionalWritableAttribute`](cluster.md#optionalwritableattribute)<`number`\> ; `pirUnoccupiedToOccupiedThreshold`: [`OptionalWritableAttribute`](cluster.md#optionalwritableattribute)<`number`\> ; `ultrasonicOccupiedToUnoccupiedDelay`: [`OptionalWritableAttribute`](cluster.md#optionalwritableattribute)<`number`\> ; `ultrasonicUnoccupiedToOccupiedDelay`: [`OptionalWritableAttribute`](cluster.md#optionalwritableattribute)<`number`\> ; `ultrasonicUnoccupiedToOccupiedThreshold`: [`OptionalWritableAttribute`](cluster.md#optionalwritableattribute)<`number`\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<[`BitSchema`](schema.md#bitschema)\>\>, [`Commands`](../interfaces/cluster.Commands.md), [`Events`](../interfaces/cluster.Events.md)\>

Attributes and commands for Occupancy Detection.

**`See`**

[MatterApplicationClusterSpecificationV1_0](../interfaces/spec.MatterApplicationClusterSpecificationV1_0.md) § 2.7

#### Defined in

[packages/matter.js/src/cluster/OccupancySensingCluster.ts:38](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/OccupancySensingCluster.ts#L38)

___

### OccupancySensorTypeBitmap

• `Const` **OccupancySensorTypeBitmap**: [`TlvWrapper`](../classes/tlv.TlvWrapper.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `PIR`: [`BitFlag`](schema.md#bitflag-1) ; `physicalContact`: [`BitFlag`](schema.md#bitflag-1) ; `ultrasonic`: [`BitFlag`](schema.md#bitflag-1)  }\>, `number`\>

**`See`**

[MatterApplicationClusterSpecificationV1_0](../interfaces/spec.MatterApplicationClusterSpecificationV1_0.md) § 2.7.5.3

#### Defined in

[packages/matter.js/src/cluster/OccupancySensingCluster.ts:27](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/OccupancySensingCluster.ts#L27)

___

### OnOffCluster

• `Const` **OnOffCluster**: [`Cluster`](cluster.md#cluster)<{ `lightingLevelControl`: [`BitFlag`](schema.md#bitflag-1)  }, { `lightingLevelControl`: ``false`` = false }, [`Merge`](util.md#merge)<{ `onOff`: [`Attribute`](cluster.md#attribute)<`boolean`\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<{ `lightingLevelControl`: [`BitFlag`](schema.md#bitflag-1)  }\>\>, { `off`: [`Command`](cluster.md#command)<`void`, `void`\> ; `on`: [`Command`](cluster.md#command)<`void`, `void`\> ; `toggle`: [`Command`](cluster.md#command)<`void`, `void`\>  }, [`Events`](../interfaces/cluster.Events.md)\>

Attributes and commands for switching devices between 'On' and 'Off' states.

**`See`**

[MatterApplicationClusterSpecificationV1_0](../interfaces/spec.MatterApplicationClusterSpecificationV1_0.md) § 1.5

#### Defined in

[packages/matter.js/src/cluster/OnOffCluster.ts:91](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/OnOffCluster.ts#L91)

___

### OnOffLightingCluster

• `Const` **OnOffLightingCluster**: [`Cluster`](cluster.md#cluster)<{ `lightingLevelControl`: [`BitFlag`](schema.md#bitflag-1)  }, [`Merge`](util.md#merge)<{ `lightingLevelControl`: ``false`` = false }, { `lightingLevelControl`: ``true`` = true }\>, [`Merge`](util.md#merge)<[`Merge`](util.md#merge)<{ `onOff`: [`Attribute`](cluster.md#attribute)<`boolean`\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<{ `lightingLevelControl`: [`BitFlag`](schema.md#bitflag-1)  }\>\>, { `globalSceneControl`: [`Attribute`](cluster.md#attribute)<`boolean`\> ; `offWaitTime`: [`WritableAttribute`](cluster.md#writableattribute)<``null`` \| `number`\> ; `onTime`: [`WritableAttribute`](cluster.md#writableattribute)<``null`` \| `number`\> ; `startUpOnOff`: [`WritableAttribute`](cluster.md#writableattribute)<``null`` \| [`StartUpOnOff`](../enums/cluster.StartUpOnOff.md)\>  }\>, [`Merge`](util.md#merge)<{ `off`: [`Command`](cluster.md#command)<`void`, `void`\> ; `on`: [`Command`](cluster.md#command)<`void`, `void`\> ; `toggle`: [`Command`](cluster.md#command)<`void`, `void`\>  }, { `offWithEffect`: [`Command`](cluster.md#command)<{ `effectIdentifier`: [`DelayedAllOff`](../enums/cluster.EffectIdentifier.md#delayedalloff) ; `effectVariant`: [`DelayedAllOffEffectVariant`](../enums/cluster.DelayedAllOffEffectVariant.md)  } \| { `effectIdentifier`: [`DyingLight`](../enums/cluster.EffectIdentifier.md#dyinglight) ; `effectVariant`: [`DimUpThenFade`](../enums/cluster.DyingLightEffectVariant.md#dimupthenfade)  }, `void`\> ; `onWithRecallGlobalScene`: [`Command`](cluster.md#command)<`void`, `void`\> ; `onWithTimedOff`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `offWaitTime`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number`\> ; `onOffControl`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `acceptOnlyWhenOn`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `onTime`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number`\>  }\>, `void`\>  }\>, [`Merge`](util.md#merge)<[`Events`](../interfaces/cluster.Events.md), [`Events`](../interfaces/cluster.Events.md)\>\>

#### Defined in

[packages/matter.js/src/cluster/OnOffCluster.ts:137](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/OnOffCluster.ts#L137)

___

### OperationalCredentialsCluster

• `Const` **OperationalCredentialsCluster**: [`Cluster`](cluster.md#cluster)<[`BitSchema`](schema.md#bitschema), [`TypeFromBitSchema`](schema.md#typefrombitschema)<[`BitSchema`](schema.md#bitschema)\>, [`Merge`](util.md#merge)<{ `commissionedFabrics`: [`Attribute`](cluster.md#attribute)<`number`\> ; `currentFabricIndex`: [`Attribute`](cluster.md#attribute)<[`FabricIndex`](../classes/datatype.FabricIndex.md)\> ; `fabrics`: [`Attribute`](cluster.md#attribute)<[`TypeFromFields`](tlv.md#typefromfields)<{ `fabricId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`FabricId`](../classes/datatype.FabricId.md)\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`FabricIndex`](../classes/datatype.FabricIndex.md)\> ; `label`: [`FieldType`](../interfaces/tlv.FieldType.md)<`string`\> ; `nodeId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`NodeId`](../classes/datatype.NodeId.md)\> ; `rootPublicKey`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `vendorId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`VendorId`](../classes/datatype.VendorId.md)\>  }\>[]\> ; `nocs`: [`Attribute`](cluster.md#attribute)<[`TypeFromFields`](tlv.md#typefromfields)<{ `icac`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `Uint8Array`\> ; `noc`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>[]\> ; `supportedFabrics`: [`Attribute`](cluster.md#attribute)<`number`\> ; `trustedRootCertificates`: [`Attribute`](cluster.md#attribute)<`Uint8Array`[]\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<[`BitSchema`](schema.md#bitschema)\>\>, { `addOperationalCert`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `adminVendorId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`VendorId`](../classes/datatype.VendorId.md)\> ; `caseAdminNode`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`NodeId`](../classes/datatype.NodeId.md)\> ; `identityProtectionKey`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `intermediateCaCert`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`Uint8Array`\> ; `operationalCert`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `debugText`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`string`\> ; `fabricIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`FabricIndex`](../classes/datatype.FabricIndex.md)\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`OperationalCertStatus`](../enums/cluster.OperationalCertStatus.md)\>  }\>\> ; `addRootCert`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `certificate`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>, `void`\> ; `removeFabric`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `fabricIndex`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`FabricIndex`](../classes/datatype.FabricIndex.md)\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `debugText`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`string`\> ; `fabricIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`FabricIndex`](../classes/datatype.FabricIndex.md)\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`OperationalCertStatus`](../enums/cluster.OperationalCertStatus.md)\>  }\>\> ; `requestAttestation`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attestationNonce`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `elements`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `signature`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>\> ; `requestCertChain`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `type`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`CertificateChainType`](../enums/cluster.CertificateChainType.md)\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `certificate`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>\> ; `requestCertSigning`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `certSigningRequestNonce`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `isForUpdateNOC`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `elements`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `signature`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>\> ; `updateFabricLabel`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `label`: [`FieldType`](../interfaces/tlv.FieldType.md)<`string`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `debugText`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`string`\> ; `fabricIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`FabricIndex`](../classes/datatype.FabricIndex.md)\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`OperationalCertStatus`](../enums/cluster.OperationalCertStatus.md)\>  }\>\> ; `updateOperationalCert`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `intermediateCaCert`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`Uint8Array`\> ; `operationalCert`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `debugText`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`string`\> ; `fabricIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`FabricIndex`](../classes/datatype.FabricIndex.md)\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`OperationalCertStatus`](../enums/cluster.OperationalCertStatus.md)\>  }\>\>  }, [`Events`](../interfaces/cluster.Events.md)\>

This cluster is used to add or remove Operational Credentials on a Commissionee or Node, as well as manage the
associated Fabrics.

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § 11.17

#### Defined in

[packages/matter.js/src/cluster/OperationalCredentialsCluster.ts:245](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/OperationalCredentialsCluster.ts#L245)

___

### PowerSourceCluster

• `Const` **PowerSourceCluster**: [`Cluster`](cluster.md#cluster)<{ `battery`: [`BitFlag`](schema.md#bitflag-1) ; `rechargeable`: [`BitFlag`](schema.md#bitflag-1) ; `replaceable`: [`BitFlag`](schema.md#bitflag-1) ; `wired`: [`BitFlag`](schema.md#bitflag-1)  }, [`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `battery`: [`BitFlag`](schema.md#bitflag-1) ; `rechargeable`: [`BitFlag`](schema.md#bitflag-1) ; `replaceable`: [`BitFlag`](schema.md#bitflag-1) ; `wired`: [`BitFlag`](schema.md#bitflag-1)  }\>, [`Merge`](util.md#merge)<{ `activeBatChargeFaults`: [`OptionalAttribute`](cluster.md#optionalattribute)<[`BatChargeFaultEnum`](../enums/cluster.BatChargeFaultEnum.md)[]\> ; `activeBatFaults`: [`OptionalAttribute`](cluster.md#optionalattribute)<[`BatFaultEnum`](../enums/cluster.BatFaultEnum.md)[]\> ; `activeWiredFaults`: [`OptionalAttribute`](cluster.md#optionalattribute)<[`WiredFaultEnum`](../enums/cluster.WiredFaultEnum.md)[]\> ; `batANSIDesignation`: [`OptionalAttribute`](cluster.md#optionalattribute)<`string`\> ; `batApprovedChemistry`: [`OptionalAttribute`](cluster.md#optionalattribute)<[`BatApprovedChemistryEnum`](../enums/cluster.BatApprovedChemistryEnum.md)\> ; `batCapacity`: [`OptionalAttribute`](cluster.md#optionalattribute)<`number`\> ; `batChargeLevel`: [`OptionalAttribute`](cluster.md#optionalattribute)<[`BatChargeLevelEnum`](../enums/cluster.BatChargeLevelEnum.md)\> ; `batChargeState`: [`OptionalAttribute`](cluster.md#optionalattribute)<[`BatChargeStateEnum`](../enums/cluster.BatChargeStateEnum.md)\> ; `batChargingCurrent`: [`OptionalAttribute`](cluster.md#optionalattribute)<``null`` \| `number`\> ; `batCommonDesignation`: [`OptionalAttribute`](cluster.md#optionalattribute)<[`BatCommonDesignationEnum`](../enums/cluster.BatCommonDesignationEnum.md)\> ; `batFunctionalWhileCharging`: [`OptionalAttribute`](cluster.md#optionalattribute)<`boolean`\> ; `batIECDesignation`: [`OptionalAttribute`](cluster.md#optionalattribute)<`string`\> ; `batPercentRemaining`: [`OptionalAttribute`](cluster.md#optionalattribute)<``null`` \| `number`\> ; `batPresent`: [`OptionalAttribute`](cluster.md#optionalattribute)<`boolean`\> ; `batQuantity`: [`OptionalAttribute`](cluster.md#optionalattribute)<`number`\> ; `batReplaceability`: [`OptionalAttribute`](cluster.md#optionalattribute)<[`BatReplaceabilityEnum`](../enums/cluster.BatReplaceabilityEnum.md)\> ; `batReplacementDescription`: [`OptionalAttribute`](cluster.md#optionalattribute)<`string`\> ; `batReplacementNeeded`: [`OptionalAttribute`](cluster.md#optionalattribute)<`boolean`\> ; `batTimeRemaining`: [`OptionalAttribute`](cluster.md#optionalattribute)<``null`` \| `number`\> ; `batTimeToFullCharge`: [`OptionalAttribute`](cluster.md#optionalattribute)<``null`` \| `number`\> ; `batVoltage`: [`OptionalAttribute`](cluster.md#optionalattribute)<``null`` \| `number`\> ; `description`: [`Attribute`](cluster.md#attribute)<`string`\> ; `order`: [`Attribute`](cluster.md#attribute)<`number`\> ; `status`: [`Attribute`](cluster.md#attribute)<[`PowerSourceStatusEnum`](../enums/cluster.PowerSourceStatusEnum.md)\> ; `wiredAssessedCurrent`: [`OptionalAttribute`](cluster.md#optionalattribute)<``null`` \| `number`\> ; `wiredAssessedInputFrequency`: [`OptionalAttribute`](cluster.md#optionalattribute)<``null`` \| `number`\> ; `wiredAssessedInputVoltage`: [`OptionalAttribute`](cluster.md#optionalattribute)<``null`` \| `number`\> ; `wiredCurrentType`: [`OptionalAttribute`](cluster.md#optionalattribute)<[`WiredCurrentTypeEnum`](../enums/cluster.WiredCurrentTypeEnum.md)\> ; `wiredMaximumCurrent`: [`OptionalAttribute`](cluster.md#optionalattribute)<`number`\> ; `wiredNominalVoltage`: [`OptionalAttribute`](cluster.md#optionalattribute)<`number`\> ; `wiredPresent`: [`OptionalAttribute`](cluster.md#optionalattribute)<`boolean`\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<{ `battery`: [`BitFlag`](schema.md#bitflag-1) ; `rechargeable`: [`BitFlag`](schema.md#bitflag-1) ; `replaceable`: [`BitFlag`](schema.md#bitflag-1) ; `wired`: [`BitFlag`](schema.md#bitflag-1)  }\>\>, [`Commands`](../interfaces/cluster.Commands.md), { `batChargeFaultChange`: [`Event`](cluster.md#event)<[`TypeFromFields`](tlv.md#typefromfields)<{ `current`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`BatChargeFaultEnum`](../enums/cluster.BatChargeFaultEnum.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`BatChargeFaultEnum`](../enums/cluster.BatChargeFaultEnum.md)[]\>  }\>\> ; `batFaultChange`: [`Event`](cluster.md#event)<[`TypeFromFields`](tlv.md#typefromfields)<{ `current`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`BatFaultEnum`](../enums/cluster.BatFaultEnum.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`BatFaultEnum`](../enums/cluster.BatFaultEnum.md)[]\>  }\>\> ; `wiredFaultChange`: [`Event`](cluster.md#event)<[`TypeFromFields`](tlv.md#typefromfields)<{ `current`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`WiredFaultEnum`](../enums/cluster.WiredFaultEnum.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`WiredFaultEnum`](../enums/cluster.WiredFaultEnum.md)[]\>  }\>\>  }\>

This cluster is used to describe the configuration and capabilities of a physical power source that
provides power to the Node. In case the Node has multiple power sources, each is described by its
own Power Source cluster. The Power Source Configuration cluster referenced by the Root Node
device type for the Node provides the overview of the power source(s) of the Node.

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § 11.7

#### Defined in

[packages/matter.js/src/cluster/PowerSourceCluster.ts:294](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/PowerSourceCluster.ts#L294)

___

### PowerSourceConfigurationCluster

• `Const` **PowerSourceConfigurationCluster**: [`Cluster`](cluster.md#cluster)<[`BitSchema`](schema.md#bitschema), [`TypeFromBitSchema`](schema.md#typefrombitschema)<[`BitSchema`](schema.md#bitschema)\>, [`Merge`](util.md#merge)<{ `sources`: [`Attribute`](cluster.md#attribute)<[`EndpointNumber`](../classes/datatype.EndpointNumber.md)[]\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<[`BitSchema`](schema.md#bitschema)\>\>, [`Commands`](../interfaces/cluster.Commands.md), [`Events`](../interfaces/cluster.Events.md)\>

This cluster is used to describe the configuration and capabilities of a Device’s power system.
It provides an ordering overview as well as linking to the one or more endpoints each supporting a
PowerSource cluster.

#### Defined in

[packages/matter.js/src/cluster/PowerSourceConfigurationCluster.ts:23](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/PowerSourceConfigurationCluster.ts#L23)

___

### PressureMeasurementCluster

• `Const` **PressureMeasurementCluster**: [`Cluster`](cluster.md#cluster)<{ `extended`: [`BitFlag`](schema.md#bitflag-1)  }, [`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `extended`: [`BitFlag`](schema.md#bitflag-1)  }\>, [`Merge`](util.md#merge)<{ `maxMeasuredValue`: [`Attribute`](cluster.md#attribute)<``null`` \| `number`\> ; `maxScaledValue`: [`OptionalAttribute`](cluster.md#optionalattribute)<``null`` \| `number`\> ; `measuredValue`: [`Attribute`](cluster.md#attribute)<``null`` \| `number`\> ; `minMeasuredValue`: [`Attribute`](cluster.md#attribute)<``null`` \| `number`\> ; `minScaledValue`: [`OptionalAttribute`](cluster.md#optionalattribute)<``null`` \| `number`\> ; `scale`: [`OptionalAttribute`](cluster.md#optionalattribute)<`number`\> ; `scaledTolerance`: [`OptionalAttribute`](cluster.md#optionalattribute)<`number`\> ; `scaledValue`: [`OptionalAttribute`](cluster.md#optionalattribute)<``null`` \| `number`\> ; `tolerance`: [`OptionalAttribute`](cluster.md#optionalattribute)<`number`\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<{ `extended`: [`BitFlag`](schema.md#bitflag-1)  }\>\>, [`Commands`](../interfaces/cluster.Commands.md), [`Events`](../interfaces/cluster.Events.md)\>

This cluster provides an interface to pressure measurement functionality.

**`See`**

[MatterApplicationClusterSpecificationV1_0](../interfaces/spec.MatterApplicationClusterSpecificationV1_0.md) § 2.4

#### Defined in

[packages/matter.js/src/cluster/PressureMeasurementCluster.ts:18](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/PressureMeasurementCluster.ts#L18)

___

### PulseWidthModulationLevelControlCluster

• `Const` **PulseWidthModulationLevelControlCluster**: [`Cluster`](cluster.md#cluster)<{ `frequency`: [`BitFlag`](schema.md#bitflag-1) ; `lighting`: [`BitFlag`](schema.md#bitflag-1) ; `onOff`: [`BitFlag`](schema.md#bitflag-1)  }, [`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `frequency`: [`BitFlag`](schema.md#bitflag-1) ; `lighting`: [`BitFlag`](schema.md#bitflag-1) ; `onOff`: [`BitFlag`](schema.md#bitflag-1)  }\>, [`Merge`](util.md#merge)<{ `currentFrequency`: [`Attribute`](cluster.md#attribute)<`number`\> ; `currentLevel`: [`Attribute`](cluster.md#attribute)<``null`` \| `number`\> ; `defaultMoveRate`: [`OptionalWritableAttribute`](cluster.md#optionalwritableattribute)<``null`` \| `number`\> ; `maxFrequency`: [`Attribute`](cluster.md#attribute)<`number`\> ; `maxLevel`: [`OptionalAttribute`](cluster.md#optionalattribute)<`number`\> ; `minFrequency`: [`Attribute`](cluster.md#attribute)<`number`\> ; `minLevel`: [`OptionalAttribute`](cluster.md#optionalattribute)<`number`\> ; `offTransitionTime`: [`OptionalWritableAttribute`](cluster.md#optionalwritableattribute)<``null`` \| `number`\> ; `onLevel`: [`WritableAttribute`](cluster.md#writableattribute)<``null`` \| `number`\> ; `onOffTransitionTime`: [`OptionalWritableAttribute`](cluster.md#optionalwritableattribute)<`number`\> ; `onTransitionTime`: [`OptionalWritableAttribute`](cluster.md#optionalwritableattribute)<``null`` \| `number`\> ; `options`: [`WritableAttribute`](cluster.md#writableattribute)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<{ `frequency`: [`BitFlag`](schema.md#bitflag-1) ; `lighting`: [`BitFlag`](schema.md#bitflag-1) ; `onOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\>, { `move`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `moveMode`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`MoveMode`](../enums/cluster.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number`\>  }\>, `void`\> ; `moveToClosestFrequency`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `frequency`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>, `void`\> ; `moveToLevel`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `level`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number`\>  }\>, `void`\> ; `moveToLevelWithOnOff`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `level`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number`\>  }\>, `void`\> ; `moveWithOnOff`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `moveMode`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`MoveMode`](../enums/cluster.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number`\>  }\>, `void`\> ; `step`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StepMode`](../enums/cluster.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number`\>  }\>, `void`\> ; `stepWithOnOff`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StepMode`](../enums/cluster.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number`\>  }\>, `void`\> ; `stop`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\>  }\>, `void`\> ; `stopWithOnOff`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\>  }\>, `void`\>  }, [`Events`](../interfaces/cluster.Events.md)\>

Attributes and commands for Pulse Width Modulation (Provisional)

**`See`**

[MatterApplicationClusterSpecificationV1_0](../interfaces/spec.MatterApplicationClusterSpecificationV1_0.md) § 1.6.3

#### Defined in

[packages/matter.js/src/cluster/LevelControlCluster.ts:168](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/LevelControlCluster.ts#L168)

___

### RESP\_MAX

• `Const` **RESP\_MAX**: ``900``

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § 11.17.5.1

#### Defined in

[packages/matter.js/src/cluster/OperationalCredentialsCluster.ts:24](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/OperationalCredentialsCluster.ts#L24)

___

### RelativeHumidityCluster

• `Const` **RelativeHumidityCluster**: [`Cluster`](cluster.md#cluster)<[`BitSchema`](schema.md#bitschema), [`TypeFromBitSchema`](schema.md#typefrombitschema)<[`BitSchema`](schema.md#bitschema)\>, [`Merge`](util.md#merge)<{ `maxMeasuredValue`: [`Attribute`](cluster.md#attribute)<``null`` \| `number`\> ; `measuredValue`: [`Attribute`](cluster.md#attribute)<``null`` \| `number`\> ; `minMeasuredValue`: [`Attribute`](cluster.md#attribute)<``null`` \| `number`\> ; `tolerance`: [`OptionalAttribute`](cluster.md#optionalattribute)<`number`\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<[`BitSchema`](schema.md#bitschema)\>\>, [`Commands`](../interfaces/cluster.Commands.md), [`Events`](../interfaces/cluster.Events.md)\>

Attributes and commands for Percentage of water in the air.

**`See`**

[MatterApplicationClusterSpecificationV1_0](../interfaces/spec.MatterApplicationClusterSpecificationV1_0.md) § 2.6.3

#### Defined in

[packages/matter.js/src/cluster/WaterContentMeasurementCluster.ts:36](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/WaterContentMeasurementCluster.ts#L36)

___

### ScenesCluster

• `Const` **ScenesCluster**: [`Cluster`](cluster.md#cluster)<{ `sceneNames`: [`BitFlag`](schema.md#bitflag-1)  }, [`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `sceneNames`: [`BitFlag`](schema.md#bitflag-1)  }\>, [`Merge`](util.md#merge)<{ `currentGroup`: [`Attribute`](cluster.md#attribute)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `currentScene`: [`Attribute`](cluster.md#attribute)<`number`\> ; `lastConfiguredBy`: [`OptionalAttribute`](cluster.md#optionalattribute)<``null`` \| [`NodeId`](../classes/datatype.NodeId.md)\> ; `nameSupport`: [`Attribute`](cluster.md#attribute)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `sceneNames`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `sceneCount`: [`Attribute`](cluster.md#attribute)<`number`\> ; `sceneValid`: [`Attribute`](cluster.md#attribute)<`boolean`\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<{ `sceneNames`: [`BitFlag`](schema.md#bitflag-1)  }\>\>, { `addScene`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `extensionFieldSets`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeValueList`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`AttributeId`](../classes/datatype.AttributeId.md)\> ; `attributeValue`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TlvStream`](tlv.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`ClusterId`](../classes/datatype.ClusterId.md)\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `sceneName`: [`FieldType`](../interfaces/tlv.FieldType.md)<`string`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\> ; `copyScene`: [`OptionalCommand`](cluster.md#optionalcommand)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupIdFrom`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `groupIdTo`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `mode`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `copyAllScenes`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `sceneIdFrom`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `sceneIdTo`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `groupIdFrom`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneIdFrom`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\> ; `enhancedAddScene`: [`OptionalCommand`](cluster.md#optionalcommand)<[`TypeFromFields`](tlv.md#typefromfields)<{ `extensionFieldSets`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeValueList`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`AttributeId`](../classes/datatype.AttributeId.md)\> ; `attributeValue`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TlvStream`](tlv.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`ClusterId`](../classes/datatype.ClusterId.md)\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `sceneName`: [`FieldType`](../interfaces/tlv.FieldType.md)<`string`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\> ; `enhancedViewScene`: [`OptionalCommand`](cluster.md#optionalcommand)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `extensionFieldSets`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeValueList`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`AttributeId`](../classes/datatype.AttributeId.md)\> ; `attributeValue`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TlvStream`](tlv.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`ClusterId`](../classes/datatype.ClusterId.md)\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `sceneName`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`string`\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\> ; `transitionTime`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>\> ; `getSceneMembership`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `capacity`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number`\> ; `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneList`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`[]\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\> ; `recallScene`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `transitionTime`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `number`\>  }\>, `void`\> ; `removeAllScenes`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\> ; `removeScene`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\> ; `storeScene`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\> ; `viewScene`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `extensionFieldSets`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeValueList`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`AttributeId`](../classes/datatype.AttributeId.md)\> ; `attributeValue`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TlvStream`](tlv.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`ClusterId`](../classes/datatype.ClusterId.md)\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `sceneName`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`string`\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\> ; `transitionTime`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>\>  }, [`Events`](../interfaces/cluster.Events.md)\>

The Scenes cluster provides attributes and commands for setting up and recalling scenes.
Each scene corresponds to a set of stored values of specified attributes for one or more
clusters on the same end point as the Scenes cluster.

**`See`**

[MatterApplicationClusterSpecificationV1_0](../interfaces/spec.MatterApplicationClusterSpecificationV1_0.md) § 1.4

#### Defined in

[packages/matter.js/src/cluster/ScenesCluster.ts:185](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/ScenesCluster.ts#L185)

___

### SoilMoistureMeasurementCluster

• `Const` **SoilMoistureMeasurementCluster**: [`Cluster`](cluster.md#cluster)<[`BitSchema`](schema.md#bitschema), [`TypeFromBitSchema`](schema.md#typefrombitschema)<[`BitSchema`](schema.md#bitschema)\>, [`Merge`](util.md#merge)<{ `maxMeasuredValue`: [`Attribute`](cluster.md#attribute)<``null`` \| `number`\> ; `measuredValue`: [`Attribute`](cluster.md#attribute)<``null`` \| `number`\> ; `minMeasuredValue`: [`Attribute`](cluster.md#attribute)<``null`` \| `number`\> ; `tolerance`: [`OptionalAttribute`](cluster.md#optionalattribute)<`number`\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<[`BitSchema`](schema.md#bitschema)\>\>, [`Commands`](../interfaces/cluster.Commands.md), [`Events`](../interfaces/cluster.Events.md)\>

Attributes and commands for Percentage of water in the soil.

**`See`**

[MatterApplicationClusterSpecificationV1_0](../interfaces/spec.MatterApplicationClusterSpecificationV1_0.md) § 2.6.3

#### Defined in

[packages/matter.js/src/cluster/WaterContentMeasurementCluster.ts:60](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/WaterContentMeasurementCluster.ts#L60)

___

### TemperatureMeasurementCluster

• `Const` **TemperatureMeasurementCluster**: [`Cluster`](cluster.md#cluster)<[`BitSchema`](schema.md#bitschema), [`TypeFromBitSchema`](schema.md#typefrombitschema)<[`BitSchema`](schema.md#bitschema)\>, [`Merge`](util.md#merge)<{ `maxMeasuredValue`: [`Attribute`](cluster.md#attribute)<``null`` \| `number`\> ; `measuredValue`: [`Attribute`](cluster.md#attribute)<``null`` \| `number`\> ; `minMeasuredValue`: [`Attribute`](cluster.md#attribute)<``null`` \| `number`\> ; `tolerance`: [`OptionalAttribute`](cluster.md#optionalattribute)<`number`\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<[`BitSchema`](schema.md#bitschema)\>\>, [`Commands`](../interfaces/cluster.Commands.md), [`Events`](../interfaces/cluster.Events.md)\>

This cluster provides an interface to temperature measurement functionality.

**`See`**

[MatterApplicationClusterSpecificationV1_0](../interfaces/spec.MatterApplicationClusterSpecificationV1_0.md) § 2.3

#### Defined in

[packages/matter.js/src/cluster/TemperatureMeasurementCluster.ts:17](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/TemperatureMeasurementCluster.ts#L17)

___

### ThreadAndEthernetNetworkCommissioningCluster

• `Const` **ThreadAndEthernetNetworkCommissioningCluster**: [`Cluster`](cluster.md#cluster)<{ `ethernet`: [`BitFlag`](schema.md#bitflag-1) ; `thread`: [`BitFlag`](schema.md#bitflag-1) ; `wifi`: [`BitFlag`](schema.md#bitflag-1)  }, [`Merge`](util.md#merge)<[`Merge`](util.md#merge)<[`Merge`](util.md#merge)<{ `ethernet`: ``true`` = true; `thread`: ``false`` = false; `wifi`: ``false`` = false }, { `ethernet`: ``false`` = false; `thread`: ``false`` = false; `wifi`: ``false`` = false }\>, { `ethernet`: ``false`` = false; `thread`: ``true`` = true; `wifi`: ``false`` = false }\>, { `ethernet`: ``true`` = true; `thread`: ``true`` = true; `wifi`: ``false`` = false }\>, [`Merge`](util.md#merge)<[`Merge`](util.md#merge)<[`Merge`](util.md#merge)<[`Merge`](util.md#merge)<{ `interfaceEnabled`: [`WritableAttribute`](cluster.md#writableattribute)<`boolean`\> ; `lastConnectErrorValue`: [`Attribute`](cluster.md#attribute)<``null`` \| `number`\> ; `lastNetworkId`: [`Attribute`](cluster.md#attribute)<``null`` \| `Uint8Array`\> ; `lastNetworkingStatus`: [`Attribute`](cluster.md#attribute)<``null`` \| [`NetworkCommissioningStatus`](../enums/cluster.NetworkCommissioningStatus.md)\> ; `maxNetworks`: [`Attribute`](cluster.md#attribute)<`number`\> ; `networks`: [`Attribute`](cluster.md#attribute)<[`TypeFromFields`](tlv.md#typefromfields)<{ `connected`: [`FieldType`](../interfaces/tlv.FieldType.md)<`boolean`\> ; `networkId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>[]\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<{ `ethernet`: [`BitFlag`](schema.md#bitflag-1) ; `thread`: [`BitFlag`](schema.md#bitflag-1) ; `wifi`: [`BitFlag`](schema.md#bitflag-1)  }\>\>, { `connectMaxTimeSeconds`: [`OptionalAttribute`](cluster.md#optionalattribute)<`number`\> ; `scanMaxTimeSeconds`: [`OptionalAttribute`](cluster.md#optionalattribute)<`number`\>  }\>, [`Attributes`](../interfaces/cluster.Attributes.md)\>, [`Attributes`](../interfaces/cluster.Attributes.md)\>, [`Merge`](util.md#merge)<[`Merge`](util.md#merge)<[`Merge`](util.md#merge)<[`Commands`](../interfaces/cluster.Commands.md), { `connectNetwork`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `networkId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `debugText`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`string`\> ; `errorValue`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`NetworkCommissioningStatus`](../enums/cluster.NetworkCommissioningStatus.md)\>  }\>\> ; `removeNetwork`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `networkId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `debugText`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`string`\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`NetworkCommissioningStatus`](../enums/cluster.NetworkCommissioningStatus.md)\>  }\>\> ; `reorderNetwork`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `networkId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `networkIndex`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `debugText`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`string`\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`NetworkCommissioningStatus`](../enums/cluster.NetworkCommissioningStatus.md)\>  }\>\> ; `scanNetworks`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `ssid`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `Uint8Array`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `debugText`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`string`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`NetworkCommissioningStatus`](../enums/cluster.NetworkCommissioningStatus.md)\> ; `threadScanResults`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `channel`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `extendedAddress`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `extendedPanId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number` \| `bigint`\> ; `lqi`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `networkName`: [`FieldType`](../interfaces/tlv.FieldType.md)<`string`\> ; `panId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `rssi`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `version`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>[]\> ; `wiFiScanResults`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `bssid`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `channel`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `rssi`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `security`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `Unencrypted`: [`BitFlag`](schema.md#bitflag-1) ; `WPA-PERSONAL`: [`BitFlag`](schema.md#bitflag-1) ; `WPA2-PERSONAL`: [`BitFlag`](schema.md#bitflag-1) ; `WPA3-PERSONAL`: [`BitFlag`](schema.md#bitflag-1) ; `Wep`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `ssid`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `wiFiBand`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`WiFiBand`](../enums/cluster.WiFiBand.md)\>  }\>[]\>  }\>\>  }\>, { `addOrUpdateThreadNetwork`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `OperationalDataset`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `debugText`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`string`\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`NetworkCommissioningStatus`](../enums/cluster.NetworkCommissioningStatus.md)\>  }\>\>  }\>, [`Commands`](../interfaces/cluster.Commands.md)\>, [`Merge`](util.md#merge)<[`Merge`](util.md#merge)<[`Merge`](util.md#merge)<[`Events`](../interfaces/cluster.Events.md), [`Events`](../interfaces/cluster.Events.md)\>, [`Events`](../interfaces/cluster.Events.md)\>, [`Events`](../interfaces/cluster.Events.md)\>\>

#### Defined in

[packages/matter.js/src/cluster/NetworkCommissioningCluster.ts:337](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/NetworkCommissioningCluster.ts#L337)

___

### ThreadNetworkCommissioningCluster

• `Const` **ThreadNetworkCommissioningCluster**: [`Cluster`](cluster.md#cluster)<{ `ethernet`: [`BitFlag`](schema.md#bitflag-1) ; `thread`: [`BitFlag`](schema.md#bitflag-1) ; `wifi`: [`BitFlag`](schema.md#bitflag-1)  }, [`Merge`](util.md#merge)<[`Merge`](util.md#merge)<{ `ethernet`: ``true`` = true; `thread`: ``false`` = false; `wifi`: ``false`` = false }, { `ethernet`: ``false`` = false; `thread`: ``false`` = false; `wifi`: ``false`` = false }\>, { `ethernet`: ``false`` = false; `thread`: ``true`` = true; `wifi`: ``false`` = false }\>, [`Merge`](util.md#merge)<[`Merge`](util.md#merge)<[`Merge`](util.md#merge)<{ `interfaceEnabled`: [`WritableAttribute`](cluster.md#writableattribute)<`boolean`\> ; `lastConnectErrorValue`: [`Attribute`](cluster.md#attribute)<``null`` \| `number`\> ; `lastNetworkId`: [`Attribute`](cluster.md#attribute)<``null`` \| `Uint8Array`\> ; `lastNetworkingStatus`: [`Attribute`](cluster.md#attribute)<``null`` \| [`NetworkCommissioningStatus`](../enums/cluster.NetworkCommissioningStatus.md)\> ; `maxNetworks`: [`Attribute`](cluster.md#attribute)<`number`\> ; `networks`: [`Attribute`](cluster.md#attribute)<[`TypeFromFields`](tlv.md#typefromfields)<{ `connected`: [`FieldType`](../interfaces/tlv.FieldType.md)<`boolean`\> ; `networkId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>[]\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<{ `ethernet`: [`BitFlag`](schema.md#bitflag-1) ; `thread`: [`BitFlag`](schema.md#bitflag-1) ; `wifi`: [`BitFlag`](schema.md#bitflag-1)  }\>\>, { `connectMaxTimeSeconds`: [`OptionalAttribute`](cluster.md#optionalattribute)<`number`\> ; `scanMaxTimeSeconds`: [`OptionalAttribute`](cluster.md#optionalattribute)<`number`\>  }\>, [`Attributes`](../interfaces/cluster.Attributes.md)\>, [`Merge`](util.md#merge)<[`Merge`](util.md#merge)<[`Commands`](../interfaces/cluster.Commands.md), { `connectNetwork`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `networkId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `debugText`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`string`\> ; `errorValue`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`NetworkCommissioningStatus`](../enums/cluster.NetworkCommissioningStatus.md)\>  }\>\> ; `removeNetwork`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `networkId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `debugText`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`string`\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`NetworkCommissioningStatus`](../enums/cluster.NetworkCommissioningStatus.md)\>  }\>\> ; `reorderNetwork`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `networkId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `networkIndex`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `debugText`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`string`\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`NetworkCommissioningStatus`](../enums/cluster.NetworkCommissioningStatus.md)\>  }\>\> ; `scanNetworks`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `ssid`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `Uint8Array`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `debugText`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`string`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`NetworkCommissioningStatus`](../enums/cluster.NetworkCommissioningStatus.md)\> ; `threadScanResults`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `channel`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `extendedAddress`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `extendedPanId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number` \| `bigint`\> ; `lqi`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `networkName`: [`FieldType`](../interfaces/tlv.FieldType.md)<`string`\> ; `panId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `rssi`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `version`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>[]\> ; `wiFiScanResults`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `bssid`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `channel`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `rssi`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `security`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `Unencrypted`: [`BitFlag`](schema.md#bitflag-1) ; `WPA-PERSONAL`: [`BitFlag`](schema.md#bitflag-1) ; `WPA2-PERSONAL`: [`BitFlag`](schema.md#bitflag-1) ; `WPA3-PERSONAL`: [`BitFlag`](schema.md#bitflag-1) ; `Wep`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `ssid`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `wiFiBand`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`WiFiBand`](../enums/cluster.WiFiBand.md)\>  }\>[]\>  }\>\>  }\>, { `addOrUpdateThreadNetwork`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `OperationalDataset`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `debugText`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`string`\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`NetworkCommissioningStatus`](../enums/cluster.NetworkCommissioningStatus.md)\>  }\>\>  }\>, [`Merge`](util.md#merge)<[`Merge`](util.md#merge)<[`Events`](../interfaces/cluster.Events.md), [`Events`](../interfaces/cluster.Events.md)\>, [`Events`](../interfaces/cluster.Events.md)\>\>

#### Defined in

[packages/matter.js/src/cluster/NetworkCommissioningCluster.ts:325](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/NetworkCommissioningCluster.ts#L325)

___

### TlvAttestation

• `Const` **TlvAttestation**: [`ObjectSchema`](../classes/tlv.ObjectSchema.md)<{ `attestationNonce`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `declaration`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `firmwareInfo`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`Uint8Array`\> ; `timestamp`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § 11.17.5.4

#### Defined in

[packages/matter.js/src/cluster/OperationalCredentialsCluster.ts:211](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/OperationalCredentialsCluster.ts#L211)

___

### TlvAttributeValuePair

• `Const` **TlvAttributeValuePair**: [`ObjectSchema`](../classes/tlv.ObjectSchema.md)<{ `attributeId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`AttributeId`](../classes/datatype.AttributeId.md)\> ; `attributeValue`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TlvStream`](tlv.md#tlvstream)\>  }\>

**`See`**

[MatterApplicationClusterSpecificationV1_0](../interfaces/spec.MatterApplicationClusterSpecificationV1_0.md) § 1.4.6.1

#### Defined in

[packages/matter.js/src/cluster/ScenesCluster.ts:24](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/ScenesCluster.ts#L24)

___

### TlvCertSigningRequest

• `Const` **TlvCertSigningRequest**: [`ObjectSchema`](../classes/tlv.ObjectSchema.md)<{ `certSigningRequest`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `certSigningRequestNonce`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `vendorReserved1`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`Uint8Array`\> ; `vendorReserved2`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`Uint8Array`\> ; `vendorReserved3`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`Uint8Array`\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § 11.17.5.6

#### Defined in

[packages/matter.js/src/cluster/OperationalCredentialsCluster.ts:219](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/OperationalCredentialsCluster.ts#L219)

___

### TlvExtensionFieldSet

• `Const` **TlvExtensionFieldSet**: [`ObjectSchema`](../classes/tlv.ObjectSchema.md)<{ `attributeValueList`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`AttributeId`](../classes/datatype.AttributeId.md)\> ; `attributeValue`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TlvStream`](tlv.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`ClusterId`](../classes/datatype.ClusterId.md)\>  }\>

This data type indicates for a given cluster a set of attributes and their values. Only attributes which
have the "S" designation in the Quality column of the cluster specification SHALL be used in the
AttributeValueList field.

**`See`**

[MatterApplicationClusterSpecificationV1_0](../interfaces/spec.MatterApplicationClusterSpecificationV1_0.md) § 1.4.6.2

#### Defined in

[packages/matter.js/src/cluster/ScenesCluster.ts:44](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/ScenesCluster.ts#L44)

___

### TlvNoResponse

• `Const` **TlvNoResponse**: [`VoidSchema`](../classes/tlv.VoidSchema.md) = `TlvVoid`

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:41](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L41)

___

### TlvWiFiSecurity

• `Const` **TlvWiFiSecurity**: [`TlvWrapper`](../classes/tlv.TlvWrapper.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `Unencrypted`: [`BitFlag`](schema.md#bitflag-1) ; `WPA-PERSONAL`: [`BitFlag`](schema.md#bitflag-1) ; `WPA2-PERSONAL`: [`BitFlag`](schema.md#bitflag-1) ; `WPA3-PERSONAL`: [`BitFlag`](schema.md#bitflag-1) ; `Wep`: [`BitFlag`](schema.md#bitflag-1)  }\>, `number`\>

**`See`**

[MatterApplicationClusterSpecificationV1_0](../interfaces/spec.MatterApplicationClusterSpecificationV1_0.md) § 11.8.6.1

#### Defined in

[packages/matter.js/src/cluster/NetworkCommissioningCluster.ts:75](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/NetworkCommissioningCluster.ts#L75)

___

### UserLabelCluster

• `Const` **UserLabelCluster**: [`Cluster`](cluster.md#cluster)<[`BitSchema`](schema.md#bitschema), [`TypeFromBitSchema`](schema.md#typefrombitschema)<[`BitSchema`](schema.md#bitschema)\>, [`Merge`](util.md#merge)<{ `labelList`: [`WritableAttribute`](cluster.md#writableattribute)<[`TypeFromFields`](tlv.md#typefromfields)<{ `label`: [`FieldType`](../interfaces/tlv.FieldType.md)<`string`\> ; `value`: [`FieldType`](../interfaces/tlv.FieldType.md)<`string`\>  }\>[]\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<[`BitSchema`](schema.md#bitschema)\>\>, [`Commands`](../interfaces/cluster.Commands.md), [`Events`](../interfaces/cluster.Events.md)\>

This cluster provides a feature to tag an endpoint with zero or more labels.
Derived from LabelCluster ([MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § 9.7)

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § 9.9

#### Defined in

[packages/matter.js/src/cluster/LabelCluster.ts:32](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/LabelCluster.ts#L32)

___

### WifiAndEthernetAndThreadNetworkCommissioningCluster

• `Const` **WifiAndEthernetAndThreadNetworkCommissioningCluster**: [`Cluster`](cluster.md#cluster)<{ `ethernet`: [`BitFlag`](schema.md#bitflag-1) ; `thread`: [`BitFlag`](schema.md#bitflag-1) ; `wifi`: [`BitFlag`](schema.md#bitflag-1)  }, [`Merge`](util.md#merge)<[`Merge`](util.md#merge)<[`Merge`](util.md#merge)<[`Merge`](util.md#merge)<{ `ethernet`: ``true`` = true; `thread`: ``false`` = false; `wifi`: ``false`` = false }, { `ethernet`: ``false`` = false; `thread`: ``false`` = false; `wifi`: ``false`` = false }\>, { `ethernet`: ``false`` = false; `thread`: ``false`` = false; `wifi`: ``true`` = true }\>, { `ethernet`: ``true`` = true; `thread`: ``false`` = false; `wifi`: ``true`` = true }\>, { `ethernet`: ``true`` = true; `thread`: ``true`` = true; `wifi`: ``true`` = true }\>, [`Merge`](util.md#merge)<[`Merge`](util.md#merge)<[`Merge`](util.md#merge)<[`Merge`](util.md#merge)<[`Merge`](util.md#merge)<{ `interfaceEnabled`: [`WritableAttribute`](cluster.md#writableattribute)<`boolean`\> ; `lastConnectErrorValue`: [`Attribute`](cluster.md#attribute)<``null`` \| `number`\> ; `lastNetworkId`: [`Attribute`](cluster.md#attribute)<``null`` \| `Uint8Array`\> ; `lastNetworkingStatus`: [`Attribute`](cluster.md#attribute)<``null`` \| [`NetworkCommissioningStatus`](../enums/cluster.NetworkCommissioningStatus.md)\> ; `maxNetworks`: [`Attribute`](cluster.md#attribute)<`number`\> ; `networks`: [`Attribute`](cluster.md#attribute)<[`TypeFromFields`](tlv.md#typefromfields)<{ `connected`: [`FieldType`](../interfaces/tlv.FieldType.md)<`boolean`\> ; `networkId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>[]\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<{ `ethernet`: [`BitFlag`](schema.md#bitflag-1) ; `thread`: [`BitFlag`](schema.md#bitflag-1) ; `wifi`: [`BitFlag`](schema.md#bitflag-1)  }\>\>, { `connectMaxTimeSeconds`: [`OptionalAttribute`](cluster.md#optionalattribute)<`number`\> ; `scanMaxTimeSeconds`: [`OptionalAttribute`](cluster.md#optionalattribute)<`number`\>  }\>, [`Attributes`](../interfaces/cluster.Attributes.md)\>, [`Attributes`](../interfaces/cluster.Attributes.md)\>, [`Attributes`](../interfaces/cluster.Attributes.md)\>, [`Merge`](util.md#merge)<[`Merge`](util.md#merge)<[`Merge`](util.md#merge)<[`Merge`](util.md#merge)<[`Commands`](../interfaces/cluster.Commands.md), { `connectNetwork`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `networkId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `debugText`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`string`\> ; `errorValue`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`NetworkCommissioningStatus`](../enums/cluster.NetworkCommissioningStatus.md)\>  }\>\> ; `removeNetwork`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `networkId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `debugText`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`string`\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`NetworkCommissioningStatus`](../enums/cluster.NetworkCommissioningStatus.md)\>  }\>\> ; `reorderNetwork`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `networkId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `networkIndex`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `debugText`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`string`\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`NetworkCommissioningStatus`](../enums/cluster.NetworkCommissioningStatus.md)\>  }\>\> ; `scanNetworks`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `ssid`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `Uint8Array`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `debugText`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`string`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`NetworkCommissioningStatus`](../enums/cluster.NetworkCommissioningStatus.md)\> ; `threadScanResults`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `channel`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `extendedAddress`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `extendedPanId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number` \| `bigint`\> ; `lqi`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `networkName`: [`FieldType`](../interfaces/tlv.FieldType.md)<`string`\> ; `panId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `rssi`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `version`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>[]\> ; `wiFiScanResults`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `bssid`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `channel`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `rssi`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `security`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `Unencrypted`: [`BitFlag`](schema.md#bitflag-1) ; `WPA-PERSONAL`: [`BitFlag`](schema.md#bitflag-1) ; `WPA2-PERSONAL`: [`BitFlag`](schema.md#bitflag-1) ; `WPA3-PERSONAL`: [`BitFlag`](schema.md#bitflag-1) ; `Wep`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `ssid`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `wiFiBand`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`WiFiBand`](../enums/cluster.WiFiBand.md)\>  }\>[]\>  }\>\>  }\>, { `addOrUpdateWiFiNetwork`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `credentials`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `ssid`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `debugText`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`string`\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`NetworkCommissioningStatus`](../enums/cluster.NetworkCommissioningStatus.md)\>  }\>\>  }\>, [`Commands`](../interfaces/cluster.Commands.md)\>, { `addOrUpdateThreadNetwork`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `OperationalDataset`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `debugText`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`string`\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`NetworkCommissioningStatus`](../enums/cluster.NetworkCommissioningStatus.md)\>  }\>\>  }\>, [`Merge`](util.md#merge)<[`Merge`](util.md#merge)<[`Merge`](util.md#merge)<[`Merge`](util.md#merge)<[`Events`](../interfaces/cluster.Events.md), [`Events`](../interfaces/cluster.Events.md)\>, [`Events`](../interfaces/cluster.Events.md)\>, [`Events`](../interfaces/cluster.Events.md)\>, [`Events`](../interfaces/cluster.Events.md)\>\>

#### Defined in

[packages/matter.js/src/cluster/NetworkCommissioningCluster.ts:348](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/NetworkCommissioningCluster.ts#L348)

___

### WifiAndEthernetNetworkCommissioningCluster

• `Const` **WifiAndEthernetNetworkCommissioningCluster**: [`Cluster`](cluster.md#cluster)<{ `ethernet`: [`BitFlag`](schema.md#bitflag-1) ; `thread`: [`BitFlag`](schema.md#bitflag-1) ; `wifi`: [`BitFlag`](schema.md#bitflag-1)  }, [`Merge`](util.md#merge)<[`Merge`](util.md#merge)<[`Merge`](util.md#merge)<{ `ethernet`: ``true`` = true; `thread`: ``false`` = false; `wifi`: ``false`` = false }, { `ethernet`: ``false`` = false; `thread`: ``false`` = false; `wifi`: ``false`` = false }\>, { `ethernet`: ``false`` = false; `thread`: ``false`` = false; `wifi`: ``true`` = true }\>, { `ethernet`: ``true`` = true; `thread`: ``false`` = false; `wifi`: ``true`` = true }\>, [`Merge`](util.md#merge)<[`Merge`](util.md#merge)<[`Merge`](util.md#merge)<[`Merge`](util.md#merge)<{ `interfaceEnabled`: [`WritableAttribute`](cluster.md#writableattribute)<`boolean`\> ; `lastConnectErrorValue`: [`Attribute`](cluster.md#attribute)<``null`` \| `number`\> ; `lastNetworkId`: [`Attribute`](cluster.md#attribute)<``null`` \| `Uint8Array`\> ; `lastNetworkingStatus`: [`Attribute`](cluster.md#attribute)<``null`` \| [`NetworkCommissioningStatus`](../enums/cluster.NetworkCommissioningStatus.md)\> ; `maxNetworks`: [`Attribute`](cluster.md#attribute)<`number`\> ; `networks`: [`Attribute`](cluster.md#attribute)<[`TypeFromFields`](tlv.md#typefromfields)<{ `connected`: [`FieldType`](../interfaces/tlv.FieldType.md)<`boolean`\> ; `networkId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>[]\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<{ `ethernet`: [`BitFlag`](schema.md#bitflag-1) ; `thread`: [`BitFlag`](schema.md#bitflag-1) ; `wifi`: [`BitFlag`](schema.md#bitflag-1)  }\>\>, { `connectMaxTimeSeconds`: [`OptionalAttribute`](cluster.md#optionalattribute)<`number`\> ; `scanMaxTimeSeconds`: [`OptionalAttribute`](cluster.md#optionalattribute)<`number`\>  }\>, [`Attributes`](../interfaces/cluster.Attributes.md)\>, [`Attributes`](../interfaces/cluster.Attributes.md)\>, [`Merge`](util.md#merge)<[`Merge`](util.md#merge)<[`Merge`](util.md#merge)<[`Commands`](../interfaces/cluster.Commands.md), { `connectNetwork`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `networkId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `debugText`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`string`\> ; `errorValue`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`NetworkCommissioningStatus`](../enums/cluster.NetworkCommissioningStatus.md)\>  }\>\> ; `removeNetwork`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `networkId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `debugText`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`string`\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`NetworkCommissioningStatus`](../enums/cluster.NetworkCommissioningStatus.md)\>  }\>\> ; `reorderNetwork`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `networkId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `networkIndex`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `debugText`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`string`\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`NetworkCommissioningStatus`](../enums/cluster.NetworkCommissioningStatus.md)\>  }\>\> ; `scanNetworks`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `ssid`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `Uint8Array`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `debugText`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`string`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`NetworkCommissioningStatus`](../enums/cluster.NetworkCommissioningStatus.md)\> ; `threadScanResults`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `channel`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `extendedAddress`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `extendedPanId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number` \| `bigint`\> ; `lqi`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `networkName`: [`FieldType`](../interfaces/tlv.FieldType.md)<`string`\> ; `panId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `rssi`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `version`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>[]\> ; `wiFiScanResults`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `bssid`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `channel`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `rssi`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `security`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `Unencrypted`: [`BitFlag`](schema.md#bitflag-1) ; `WPA-PERSONAL`: [`BitFlag`](schema.md#bitflag-1) ; `WPA2-PERSONAL`: [`BitFlag`](schema.md#bitflag-1) ; `WPA3-PERSONAL`: [`BitFlag`](schema.md#bitflag-1) ; `Wep`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `ssid`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `wiFiBand`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`WiFiBand`](../enums/cluster.WiFiBand.md)\>  }\>[]\>  }\>\>  }\>, { `addOrUpdateWiFiNetwork`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `credentials`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `ssid`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `debugText`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`string`\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`NetworkCommissioningStatus`](../enums/cluster.NetworkCommissioningStatus.md)\>  }\>\>  }\>, [`Commands`](../interfaces/cluster.Commands.md)\>, [`Merge`](util.md#merge)<[`Merge`](util.md#merge)<[`Merge`](util.md#merge)<[`Events`](../interfaces/cluster.Events.md), [`Events`](../interfaces/cluster.Events.md)\>, [`Events`](../interfaces/cluster.Events.md)\>, [`Events`](../interfaces/cluster.Events.md)\>\>

#### Defined in

[packages/matter.js/src/cluster/NetworkCommissioningCluster.ts:314](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/NetworkCommissioningCluster.ts#L314)

___

### WifiNetworkCommissioningCluster

• `Const` **WifiNetworkCommissioningCluster**: [`Cluster`](cluster.md#cluster)<{ `ethernet`: [`BitFlag`](schema.md#bitflag-1) ; `thread`: [`BitFlag`](schema.md#bitflag-1) ; `wifi`: [`BitFlag`](schema.md#bitflag-1)  }, [`Merge`](util.md#merge)<[`Merge`](util.md#merge)<{ `ethernet`: ``true`` = true; `thread`: ``false`` = false; `wifi`: ``false`` = false }, { `ethernet`: ``false`` = false; `thread`: ``false`` = false; `wifi`: ``false`` = false }\>, { `ethernet`: ``false`` = false; `thread`: ``false`` = false; `wifi`: ``true`` = true }\>, [`Merge`](util.md#merge)<[`Merge`](util.md#merge)<[`Merge`](util.md#merge)<{ `interfaceEnabled`: [`WritableAttribute`](cluster.md#writableattribute)<`boolean`\> ; `lastConnectErrorValue`: [`Attribute`](cluster.md#attribute)<``null`` \| `number`\> ; `lastNetworkId`: [`Attribute`](cluster.md#attribute)<``null`` \| `Uint8Array`\> ; `lastNetworkingStatus`: [`Attribute`](cluster.md#attribute)<``null`` \| [`NetworkCommissioningStatus`](../enums/cluster.NetworkCommissioningStatus.md)\> ; `maxNetworks`: [`Attribute`](cluster.md#attribute)<`number`\> ; `networks`: [`Attribute`](cluster.md#attribute)<[`TypeFromFields`](tlv.md#typefromfields)<{ `connected`: [`FieldType`](../interfaces/tlv.FieldType.md)<`boolean`\> ; `networkId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>[]\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<{ `ethernet`: [`BitFlag`](schema.md#bitflag-1) ; `thread`: [`BitFlag`](schema.md#bitflag-1) ; `wifi`: [`BitFlag`](schema.md#bitflag-1)  }\>\>, { `connectMaxTimeSeconds`: [`OptionalAttribute`](cluster.md#optionalattribute)<`number`\> ; `scanMaxTimeSeconds`: [`OptionalAttribute`](cluster.md#optionalattribute)<`number`\>  }\>, [`Attributes`](../interfaces/cluster.Attributes.md)\>, [`Merge`](util.md#merge)<[`Merge`](util.md#merge)<[`Commands`](../interfaces/cluster.Commands.md), { `connectNetwork`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `networkId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `debugText`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`string`\> ; `errorValue`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`NetworkCommissioningStatus`](../enums/cluster.NetworkCommissioningStatus.md)\>  }\>\> ; `removeNetwork`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `networkId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `debugText`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`string`\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`NetworkCommissioningStatus`](../enums/cluster.NetworkCommissioningStatus.md)\>  }\>\> ; `reorderNetwork`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `networkId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `networkIndex`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `debugText`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`string`\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`NetworkCommissioningStatus`](../enums/cluster.NetworkCommissioningStatus.md)\>  }\>\> ; `scanNetworks`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `ssid`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `Uint8Array`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `debugText`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`string`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`NetworkCommissioningStatus`](../enums/cluster.NetworkCommissioningStatus.md)\> ; `threadScanResults`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `channel`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `extendedAddress`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `extendedPanId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number` \| `bigint`\> ; `lqi`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `networkName`: [`FieldType`](../interfaces/tlv.FieldType.md)<`string`\> ; `panId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `rssi`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `version`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>[]\> ; `wiFiScanResults`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `bssid`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `channel`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `rssi`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `security`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `Unencrypted`: [`BitFlag`](schema.md#bitflag-1) ; `WPA-PERSONAL`: [`BitFlag`](schema.md#bitflag-1) ; `WPA2-PERSONAL`: [`BitFlag`](schema.md#bitflag-1) ; `WPA3-PERSONAL`: [`BitFlag`](schema.md#bitflag-1) ; `Wep`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `ssid`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `wiFiBand`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`WiFiBand`](../enums/cluster.WiFiBand.md)\>  }\>[]\>  }\>\>  }\>, { `addOrUpdateWiFiNetwork`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `credentials`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `ssid`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `debugText`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`string`\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`NetworkCommissioningStatus`](../enums/cluster.NetworkCommissioningStatus.md)\>  }\>\>  }\>, [`Merge`](util.md#merge)<[`Merge`](util.md#merge)<[`Events`](../interfaces/cluster.Events.md), [`Events`](../interfaces/cluster.Events.md)\>, [`Events`](../interfaces/cluster.Events.md)\>\>

#### Defined in

[packages/matter.js/src/cluster/NetworkCommissioningCluster.ts:294](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/NetworkCommissioningCluster.ts#L294)

## Functions

### AdminCommissioningHandler

▸ **AdminCommissioningHandler**(`secureChannelProtocol`): [`ClusterServerHandlers`](cluster.md#clusterserverhandlers)<[`Cluster`](cluster.md#cluster)<{ `basic`: [`BitFlag`](schema.md#bitflag-1)  }, { `basic`: ``false`` = false }, [`Merge`](util.md#merge)<{ `adminFabricIndex`: [`Attribute`](cluster.md#attribute)<``null`` \| [`FabricIndex`](../classes/datatype.FabricIndex.md)\> ; `adminVendorId`: [`Attribute`](cluster.md#attribute)<``null`` \| [`VendorId`](../classes/datatype.VendorId.md)\> ; `windowStatus`: [`Attribute`](cluster.md#attribute)<[`CommissioningWindowStatus`](../enums/cluster.CommissioningWindowStatus.md)\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<{ `basic`: [`BitFlag`](schema.md#bitflag-1)  }\>\>, { `openCommissioningWindow`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `commissioningTimeout`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `discriminator`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `iterations`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `pakePasscodeVerifier`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `salt`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>, `void`\> ; `revokeCommissioning`: [`Command`](cluster.md#command)<`void`, `void`\>  }, [`Events`](../interfaces/cluster.Events.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `secureChannelProtocol` | [`SecureChannelProtocol`](../classes/protocol_securechannel.SecureChannelProtocol.md) |

#### Returns

[`ClusterServerHandlers`](cluster.md#clusterserverhandlers)<[`Cluster`](cluster.md#cluster)<{ `basic`: [`BitFlag`](schema.md#bitflag-1)  }, { `basic`: ``false`` = false }, [`Merge`](util.md#merge)<{ `adminFabricIndex`: [`Attribute`](cluster.md#attribute)<``null`` \| [`FabricIndex`](../classes/datatype.FabricIndex.md)\> ; `adminVendorId`: [`Attribute`](cluster.md#attribute)<``null`` \| [`VendorId`](../classes/datatype.VendorId.md)\> ; `windowStatus`: [`Attribute`](cluster.md#attribute)<[`CommissioningWindowStatus`](../enums/cluster.CommissioningWindowStatus.md)\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<{ `basic`: [`BitFlag`](schema.md#bitflag-1)  }\>\>, { `openCommissioningWindow`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `commissioningTimeout`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `discriminator`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `iterations`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `pakePasscodeVerifier`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `salt`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>, `void`\> ; `revokeCommissioning`: [`Command`](cluster.md#command)<`void`, `void`\>  }, [`Events`](../interfaces/cluster.Events.md)\>\>

#### Defined in

[packages/matter.js/src/cluster/server/AdminCommissioningServer.ts:12](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/AdminCommissioningServer.ts#L12)

___

### Attribute

▸ **Attribute**<`T`, `V`\>(`id`, `schema`, `«destructured»?`): [`Attribute`](cluster.md#attribute)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `schema` | [`TlvSchema`](../classes/tlv.TlvSchema.md)<`T`\> |
| `«destructured»` | [`AttributeOptions`](../interfaces/index._internal_.AttributeOptions.md)<`V`\> |

#### Returns

[`Attribute`](cluster.md#attribute)<`T`\>

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:32](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L32)

___

### Cluster

▸ **Cluster**<`F`, `SF`, `A`, `C`, `E`\>(`«destructured»`): [`Cluster`](cluster.md#cluster)<`F`, `SF`, [`Merge`](util.md#merge)<`A`, [`GlobalAttributes`](cluster.md#globalattributes-1)<`F`\>\>, `C`, `E`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](schema.md#bitschema) |
| `SF` | extends [`TypeFromBitSchema`](schema.md#typefrombitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster.Commands.md) |
| `E` | extends [`Events`](../interfaces/cluster.Events.md) |

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

[`Cluster`](cluster.md#cluster)<`F`, `SF`, [`Merge`](util.md#merge)<`A`, [`GlobalAttributes`](cluster.md#globalattributes-1)<`F`\>\>, `C`, `E`\>

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:106](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L106)

___

### ClusterExtend

▸ **ClusterExtend**<`F`, `SF_BASE`, `A_BASE`, `C_BASE`, `E_BASE`, `SF_EXTEND`, `A_EXTEND`, `C_EXTEND`, `E_EXTEND`\>(`«destructured»`, `«destructured»`): [`Cluster`](cluster.md#cluster)<`F`, [`Merge`](util.md#merge)<`SF_BASE`, `SF_EXTEND`\>, [`Merge`](util.md#merge)<`A_BASE`, `A_EXTEND`\>, [`Merge`](util.md#merge)<`C_BASE`, `C_EXTEND`\>, [`Merge`](util.md#merge)<`E_BASE`, `E_EXTEND`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](schema.md#bitschema) |
| `SF_BASE` | extends [`TypeFromBitSchema`](schema.md#typefrombitschema)<`F`\> |
| `A_BASE` | extends [`Attributes`](../interfaces/cluster.Attributes.md) |
| `C_BASE` | extends [`Commands`](../interfaces/cluster.Commands.md) |
| `E_BASE` | extends [`Events`](../interfaces/cluster.Events.md) |
| `SF_EXTEND` | extends [`TypeFromBitSchema`](schema.md#typefrombitschema)<`F`\> |
| `A_EXTEND` | extends [`Attributes`](../interfaces/cluster.Attributes.md) |
| `C_EXTEND` | extends [`Commands`](../interfaces/cluster.Commands.md) |
| `E_EXTEND` | extends [`Events`](../interfaces/cluster.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Cluster`](cluster.md#cluster)<`F`, `SF_BASE`, `A_BASE`, `C_BASE`, `E_BASE`\> |
| `«destructured»` | [`ClusterExtend`](index._internal_.md#clusterextend-1)<`F`, `SF_EXTEND`, `A_EXTEND`, `C_EXTEND`, `E_EXTEND`\> |

#### Returns

[`Cluster`](cluster.md#cluster)<`F`, [`Merge`](util.md#merge)<`SF_BASE`, `SF_EXTEND`\>, [`Merge`](util.md#merge)<`A_BASE`, `A_EXTEND`\>, [`Merge`](util.md#merge)<`C_BASE`, `C_EXTEND`\>, [`Merge`](util.md#merge)<`E_BASE`, `E_EXTEND`\>\>

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:145](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L145)

___

### Command

▸ **Command**<`RequestT`, `ResponseT`\>(`requestId`, `requestSchema`, `responseId`, `responseSchema`): [`Command`](cluster.md#command)<`RequestT`, `ResponseT`\>

#### Type parameters

| Name |
| :------ |
| `RequestT` |
| `ResponseT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestId` | `number` |
| `requestSchema` | [`TlvSchema`](../classes/tlv.TlvSchema.md)<`RequestT`\> |
| `responseId` | `number` |
| `responseSchema` | [`TlvSchema`](../classes/tlv.TlvSchema.md)<`ResponseT`\> |

#### Returns

[`Command`](cluster.md#command)<`RequestT`, `ResponseT`\>

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:47](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L47)

___

### Event

▸ **Event**<`FT`\>(`id`, `priority`, `data?`): [`Event`](cluster.md#event)<[`TypeFromFields`](tlv.md#typefromfields)<`FT`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FT` | extends [`TlvFields`](tlv.md#tlvfields) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `priority` | [`EventPriority`](../enums/cluster.EventPriority.md) |
| `data` | `FT` |

#### Returns

[`Event`](cluster.md#event)<[`TypeFromFields`](tlv.md#typefromfields)<`FT`\>\>

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:57](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L57)

___

### GlobalAttributes

▸ **GlobalAttributes**<`F`\>(`features`): [`GlobalAttributes`](cluster.md#globalattributes-1)<`F`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](schema.md#bitschema) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `features` | `F` |

#### Returns

[`GlobalAttributes`](cluster.md#globalattributes-1)<`F`\>

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:87](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L87)

___

### GroupKeyManagementClusterHandler

▸ **GroupKeyManagementClusterHandler**(): [`ClusterServerHandlers`](cluster.md#clusterserverhandlers)<[`Cluster`](cluster.md#cluster)<{ `cacheAndSync`: [`BitFlag`](schema.md#bitflag-1)  }, [`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `cacheAndSync`: [`BitFlag`](schema.md#bitflag-1)  }\>, [`Merge`](util.md#merge)<{ `groupKeyMap`: [`WritableAttribute`](cluster.md#writableattribute)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `groupKeySetId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>[]\> ; `groupTable`: [`Attribute`](cluster.md#attribute)<[`TypeFromFields`](tlv.md#typefromfields)<{ `endPoints`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`EndpointNumber`](../classes/datatype.EndpointNumber.md)[]\> ; `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `groupName`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`string`\>  }\>[]\> ; `maxGroupKeysPerFabric`: [`Attribute`](cluster.md#attribute)<`number`\> ; `maxGroupsPerFabric`: [`Attribute`](cluster.md#attribute)<`number`\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<{ `cacheAndSync`: [`BitFlag`](schema.md#bitflag-1)  }\>\>, { `keySetRead`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupKeySetId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `groupKeySet`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `GroupKeyMulticastPolicy`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupKeySecurityPolicy`](../enums/cluster.GroupKeySecurityPolicy.md)\> ; `epochKey0`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `string`\> ; `epochKey1`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `string`\> ; `epochKey2`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `string`\> ; `epochStartTime0`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number` \| `bigint`\> ; `epochStartTime1`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number` \| `bigint`\> ; `epochStartTime2`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number` \| `bigint`\> ; `groupKeySecurityPolicy`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupKeySecurityPolicy`](../enums/cluster.GroupKeySecurityPolicy.md)\> ; `groupKeySetID`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>\>  }\>\> ; `keySetReadAllIndices`: [`Command`](cluster.md#command)<`void`, [`TypeFromFields`](tlv.md#typefromfields)<{ `groupKeySetIds`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`[]\>  }\>\> ; `keySetRemove`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupKeySetId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>, `void`\> ; `keySetWrite`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupKeySet`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `GroupKeyMulticastPolicy`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupKeySecurityPolicy`](../enums/cluster.GroupKeySecurityPolicy.md)\> ; `epochKey0`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `string`\> ; `epochKey1`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `string`\> ; `epochKey2`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `string`\> ; `epochStartTime0`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number` \| `bigint`\> ; `epochStartTime1`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number` \| `bigint`\> ; `epochStartTime2`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number` \| `bigint`\> ; `groupKeySecurityPolicy`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupKeySecurityPolicy`](../enums/cluster.GroupKeySecurityPolicy.md)\> ; `groupKeySetID`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>\>  }\>, `void`\>  }, [`Events`](../interfaces/cluster.Events.md)\>\>

#### Returns

[`ClusterServerHandlers`](cluster.md#clusterserverhandlers)<[`Cluster`](cluster.md#cluster)<{ `cacheAndSync`: [`BitFlag`](schema.md#bitflag-1)  }, [`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `cacheAndSync`: [`BitFlag`](schema.md#bitflag-1)  }\>, [`Merge`](util.md#merge)<{ `groupKeyMap`: [`WritableAttribute`](cluster.md#writableattribute)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `groupKeySetId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>[]\> ; `groupTable`: [`Attribute`](cluster.md#attribute)<[`TypeFromFields`](tlv.md#typefromfields)<{ `endPoints`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`EndpointNumber`](../classes/datatype.EndpointNumber.md)[]\> ; `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `groupName`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`string`\>  }\>[]\> ; `maxGroupKeysPerFabric`: [`Attribute`](cluster.md#attribute)<`number`\> ; `maxGroupsPerFabric`: [`Attribute`](cluster.md#attribute)<`number`\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<{ `cacheAndSync`: [`BitFlag`](schema.md#bitflag-1)  }\>\>, { `keySetRead`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupKeySetId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `groupKeySet`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `GroupKeyMulticastPolicy`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupKeySecurityPolicy`](../enums/cluster.GroupKeySecurityPolicy.md)\> ; `epochKey0`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `string`\> ; `epochKey1`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `string`\> ; `epochKey2`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `string`\> ; `epochStartTime0`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number` \| `bigint`\> ; `epochStartTime1`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number` \| `bigint`\> ; `epochStartTime2`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number` \| `bigint`\> ; `groupKeySecurityPolicy`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupKeySecurityPolicy`](../enums/cluster.GroupKeySecurityPolicy.md)\> ; `groupKeySetID`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>\>  }\>\> ; `keySetReadAllIndices`: [`Command`](cluster.md#command)<`void`, [`TypeFromFields`](tlv.md#typefromfields)<{ `groupKeySetIds`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`[]\>  }\>\> ; `keySetRemove`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupKeySetId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>, `void`\> ; `keySetWrite`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupKeySet`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `GroupKeyMulticastPolicy`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupKeySecurityPolicy`](../enums/cluster.GroupKeySecurityPolicy.md)\> ; `epochKey0`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `string`\> ; `epochKey1`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `string`\> ; `epochKey2`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `string`\> ; `epochStartTime0`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number` \| `bigint`\> ; `epochStartTime1`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number` \| `bigint`\> ; `epochStartTime2`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number` \| `bigint`\> ; `groupKeySecurityPolicy`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupKeySecurityPolicy`](../enums/cluster.GroupKeySecurityPolicy.md)\> ; `groupKeySetID`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>\>  }\>, `void`\>  }, [`Events`](../interfaces/cluster.Events.md)\>\>

#### Defined in

[packages/matter.js/src/cluster/server/GroupKeyManagementServer.ts:12](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/GroupKeyManagementServer.ts#L12)

___

### GroupsClusterHandler

▸ **GroupsClusterHandler**(): [`ClusterServerHandlers`](cluster.md#clusterserverhandlers)<[`Cluster`](cluster.md#cluster)<{ `groupNames`: [`BitFlag`](schema.md#bitflag-1)  }, [`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `groupNames`: [`BitFlag`](schema.md#bitflag-1)  }\>, [`Merge`](util.md#merge)<{ `nameSupport`: [`Attribute`](cluster.md#attribute)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `groupNames`: [`BitFlag`](schema.md#bitflag-1)  }\>\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<{ `groupNames`: [`BitFlag`](schema.md#bitflag-1)  }\>\>, { `addGroup`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `groupName`: [`FieldType`](../interfaces/tlv.FieldType.md)<`string`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\> ; `addGroupIfIdentifying`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `groupName`: [`FieldType`](../interfaces/tlv.FieldType.md)<`string`\>  }\>, `void`\> ; `getGroupMembership`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupList`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)[]\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `capacity`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number`\> ; `groupList`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)[]\>  }\>\> ; `removeAllGroups`: [`Command`](cluster.md#command)<`void`, `void`\> ; `removeGroup`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\> ; `viewGroup`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `groupName`: [`FieldType`](../interfaces/tlv.FieldType.md)<`string`\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\>  }, [`Events`](../interfaces/cluster.Events.md)\>\>

#### Returns

[`ClusterServerHandlers`](cluster.md#clusterserverhandlers)<[`Cluster`](cluster.md#cluster)<{ `groupNames`: [`BitFlag`](schema.md#bitflag-1)  }, [`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `groupNames`: [`BitFlag`](schema.md#bitflag-1)  }\>, [`Merge`](util.md#merge)<{ `nameSupport`: [`Attribute`](cluster.md#attribute)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `groupNames`: [`BitFlag`](schema.md#bitflag-1)  }\>\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<{ `groupNames`: [`BitFlag`](schema.md#bitflag-1)  }\>\>, { `addGroup`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `groupName`: [`FieldType`](../interfaces/tlv.FieldType.md)<`string`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\> ; `addGroupIfIdentifying`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `groupName`: [`FieldType`](../interfaces/tlv.FieldType.md)<`string`\>  }\>, `void`\> ; `getGroupMembership`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupList`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)[]\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `capacity`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number`\> ; `groupList`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)[]\>  }\>\> ; `removeAllGroups`: [`Command`](cluster.md#command)<`void`, `void`\> ; `removeGroup`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\> ; `viewGroup`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `groupName`: [`FieldType`](../interfaces/tlv.FieldType.md)<`string`\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\>  }, [`Events`](../interfaces/cluster.Events.md)\>\>

#### Defined in

[packages/matter.js/src/cluster/server/GroupsServer.ts:74](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/GroupsServer.ts#L74)

___

### LevelControlClusterHandler

▸ **LevelControlClusterHandler**(): [`ClusterServerHandlers`](cluster.md#clusterserverhandlers)<[`Cluster`](cluster.md#cluster)<{ `frequency`: [`BitFlag`](schema.md#bitflag-1) ; `lighting`: [`BitFlag`](schema.md#bitflag-1) ; `onOff`: [`BitFlag`](schema.md#bitflag-1)  }, [`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `frequency`: [`BitFlag`](schema.md#bitflag-1) ; `lighting`: [`BitFlag`](schema.md#bitflag-1) ; `onOff`: [`BitFlag`](schema.md#bitflag-1)  }\>, [`Merge`](util.md#merge)<{ `currentLevel`: [`Attribute`](cluster.md#attribute)<``null`` \| `number`\> ; `defaultMoveRate`: [`OptionalWritableAttribute`](cluster.md#optionalwritableattribute)<``null`` \| `number`\> ; `maxLevel`: [`OptionalAttribute`](cluster.md#optionalattribute)<`number`\> ; `minLevel`: [`OptionalAttribute`](cluster.md#optionalattribute)<`number`\> ; `offTransitionTime`: [`OptionalWritableAttribute`](cluster.md#optionalwritableattribute)<``null`` \| `number`\> ; `onLevel`: [`WritableAttribute`](cluster.md#writableattribute)<``null`` \| `number`\> ; `onOffTransitionTime`: [`OptionalWritableAttribute`](cluster.md#optionalwritableattribute)<`number`\> ; `onTransitionTime`: [`OptionalWritableAttribute`](cluster.md#optionalwritableattribute)<``null`` \| `number`\> ; `options`: [`WritableAttribute`](cluster.md#writableattribute)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `remainingTime`: [`OptionalAttribute`](cluster.md#optionalattribute)<`number`\> ; `startUpCurrentLevel`: [`OptionalWritableAttribute`](cluster.md#optionalwritableattribute)<``null`` \| `number`\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<{ `frequency`: [`BitFlag`](schema.md#bitflag-1) ; `lighting`: [`BitFlag`](schema.md#bitflag-1) ; `onOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\>, { `move`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `moveMode`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`MoveMode`](../enums/cluster.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number`\>  }\>, `void`\> ; `moveToLevel`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `level`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number`\>  }\>, `void`\> ; `moveToLevelWithOnOff`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `level`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number`\>  }\>, `void`\> ; `moveWithOnOff`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `moveMode`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`MoveMode`](../enums/cluster.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number`\>  }\>, `void`\> ; `step`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StepMode`](../enums/cluster.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number`\>  }\>, `void`\> ; `stepWithOnOff`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StepMode`](../enums/cluster.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number`\>  }\>, `void`\> ; `stop`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\>  }\>, `void`\> ; `stopWithOnOff`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\>  }\>, `void`\>  }, [`Events`](../interfaces/cluster.Events.md)\>\>

#### Returns

[`ClusterServerHandlers`](cluster.md#clusterserverhandlers)<[`Cluster`](cluster.md#cluster)<{ `frequency`: [`BitFlag`](schema.md#bitflag-1) ; `lighting`: [`BitFlag`](schema.md#bitflag-1) ; `onOff`: [`BitFlag`](schema.md#bitflag-1)  }, [`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `frequency`: [`BitFlag`](schema.md#bitflag-1) ; `lighting`: [`BitFlag`](schema.md#bitflag-1) ; `onOff`: [`BitFlag`](schema.md#bitflag-1)  }\>, [`Merge`](util.md#merge)<{ `currentLevel`: [`Attribute`](cluster.md#attribute)<``null`` \| `number`\> ; `defaultMoveRate`: [`OptionalWritableAttribute`](cluster.md#optionalwritableattribute)<``null`` \| `number`\> ; `maxLevel`: [`OptionalAttribute`](cluster.md#optionalattribute)<`number`\> ; `minLevel`: [`OptionalAttribute`](cluster.md#optionalattribute)<`number`\> ; `offTransitionTime`: [`OptionalWritableAttribute`](cluster.md#optionalwritableattribute)<``null`` \| `number`\> ; `onLevel`: [`WritableAttribute`](cluster.md#writableattribute)<``null`` \| `number`\> ; `onOffTransitionTime`: [`OptionalWritableAttribute`](cluster.md#optionalwritableattribute)<`number`\> ; `onTransitionTime`: [`OptionalWritableAttribute`](cluster.md#optionalwritableattribute)<``null`` \| `number`\> ; `options`: [`WritableAttribute`](cluster.md#writableattribute)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `remainingTime`: [`OptionalAttribute`](cluster.md#optionalattribute)<`number`\> ; `startUpCurrentLevel`: [`OptionalWritableAttribute`](cluster.md#optionalwritableattribute)<``null`` \| `number`\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<{ `frequency`: [`BitFlag`](schema.md#bitflag-1) ; `lighting`: [`BitFlag`](schema.md#bitflag-1) ; `onOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\>, { `move`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `moveMode`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`MoveMode`](../enums/cluster.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number`\>  }\>, `void`\> ; `moveToLevel`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `level`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number`\>  }\>, `void`\> ; `moveToLevelWithOnOff`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `level`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number`\>  }\>, `void`\> ; `moveWithOnOff`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `moveMode`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`MoveMode`](../enums/cluster.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number`\>  }\>, `void`\> ; `step`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StepMode`](../enums/cluster.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number`\>  }\>, `void`\> ; `stepWithOnOff`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StepMode`](../enums/cluster.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number`\>  }\>, `void`\> ; `stop`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\>  }\>, `void`\> ; `stopWithOnOff`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema.md#bitflag-1)  }\>\>  }\>, `void`\>  }, [`Events`](../interfaces/cluster.Events.md)\>\>

#### Defined in

[packages/matter.js/src/cluster/server/LevelControlServer.ts:13](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/LevelControlServer.ts#L13)

___

### NetworkCommissioningHandler

▸ **NetworkCommissioningHandler**(): [`ClusterServerHandlers`](cluster.md#clusterserverhandlers)<[`Cluster`](cluster.md#cluster)<{ `ethernet`: [`BitFlag`](schema.md#bitflag-1) ; `thread`: [`BitFlag`](schema.md#bitflag-1) ; `wifi`: [`BitFlag`](schema.md#bitflag-1)  }, { `ethernet`: ``true`` = true; `thread`: ``false`` = false; `wifi`: ``false`` = false }, [`Merge`](util.md#merge)<{ `interfaceEnabled`: [`WritableAttribute`](cluster.md#writableattribute)<`boolean`\> ; `lastConnectErrorValue`: [`Attribute`](cluster.md#attribute)<``null`` \| `number`\> ; `lastNetworkId`: [`Attribute`](cluster.md#attribute)<``null`` \| `Uint8Array`\> ; `lastNetworkingStatus`: [`Attribute`](cluster.md#attribute)<``null`` \| [`NetworkCommissioningStatus`](../enums/cluster.NetworkCommissioningStatus.md)\> ; `maxNetworks`: [`Attribute`](cluster.md#attribute)<`number`\> ; `networks`: [`Attribute`](cluster.md#attribute)<[`TypeFromFields`](tlv.md#typefromfields)<{ `connected`: [`FieldType`](../interfaces/tlv.FieldType.md)<`boolean`\> ; `networkId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>[]\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<{ `ethernet`: [`BitFlag`](schema.md#bitflag-1) ; `thread`: [`BitFlag`](schema.md#bitflag-1) ; `wifi`: [`BitFlag`](schema.md#bitflag-1)  }\>\>, [`Commands`](../interfaces/cluster.Commands.md), [`Events`](../interfaces/cluster.Events.md)\>\>

#### Returns

[`ClusterServerHandlers`](cluster.md#clusterserverhandlers)<[`Cluster`](cluster.md#cluster)<{ `ethernet`: [`BitFlag`](schema.md#bitflag-1) ; `thread`: [`BitFlag`](schema.md#bitflag-1) ; `wifi`: [`BitFlag`](schema.md#bitflag-1)  }, { `ethernet`: ``true`` = true; `thread`: ``false`` = false; `wifi`: ``false`` = false }, [`Merge`](util.md#merge)<{ `interfaceEnabled`: [`WritableAttribute`](cluster.md#writableattribute)<`boolean`\> ; `lastConnectErrorValue`: [`Attribute`](cluster.md#attribute)<``null`` \| `number`\> ; `lastNetworkId`: [`Attribute`](cluster.md#attribute)<``null`` \| `Uint8Array`\> ; `lastNetworkingStatus`: [`Attribute`](cluster.md#attribute)<``null`` \| [`NetworkCommissioningStatus`](../enums/cluster.NetworkCommissioningStatus.md)\> ; `maxNetworks`: [`Attribute`](cluster.md#attribute)<`number`\> ; `networks`: [`Attribute`](cluster.md#attribute)<[`TypeFromFields`](tlv.md#typefromfields)<{ `connected`: [`FieldType`](../interfaces/tlv.FieldType.md)<`boolean`\> ; `networkId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>[]\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<{ `ethernet`: [`BitFlag`](schema.md#bitflag-1) ; `thread`: [`BitFlag`](schema.md#bitflag-1) ; `wifi`: [`BitFlag`](schema.md#bitflag-1)  }\>\>, [`Commands`](../interfaces/cluster.Commands.md), [`Events`](../interfaces/cluster.Events.md)\>\>

#### Defined in

[packages/matter.js/src/cluster/server/NetworkCommissioningServer.ts:10](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/NetworkCommissioningServer.ts#L10)

___

### OnOffClusterHandler

▸ **OnOffClusterHandler**(): [`ClusterServerHandlers`](cluster.md#clusterserverhandlers)<[`Cluster`](cluster.md#cluster)<{ `lightingLevelControl`: [`BitFlag`](schema.md#bitflag-1)  }, { `lightingLevelControl`: ``false`` = false }, [`Merge`](util.md#merge)<{ `onOff`: [`Attribute`](cluster.md#attribute)<`boolean`\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<{ `lightingLevelControl`: [`BitFlag`](schema.md#bitflag-1)  }\>\>, { `off`: [`Command`](cluster.md#command)<`void`, `void`\> ; `on`: [`Command`](cluster.md#command)<`void`, `void`\> ; `toggle`: [`Command`](cluster.md#command)<`void`, `void`\>  }, [`Events`](../interfaces/cluster.Events.md)\>\>

#### Returns

[`ClusterServerHandlers`](cluster.md#clusterserverhandlers)<[`Cluster`](cluster.md#cluster)<{ `lightingLevelControl`: [`BitFlag`](schema.md#bitflag-1)  }, { `lightingLevelControl`: ``false`` = false }, [`Merge`](util.md#merge)<{ `onOff`: [`Attribute`](cluster.md#attribute)<`boolean`\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<{ `lightingLevelControl`: [`BitFlag`](schema.md#bitflag-1)  }\>\>, { `off`: [`Command`](cluster.md#command)<`void`, `void`\> ; `on`: [`Command`](cluster.md#command)<`void`, `void`\> ; `toggle`: [`Command`](cluster.md#command)<`void`, `void`\>  }, [`Events`](../interfaces/cluster.Events.md)\>\>

#### Defined in

[packages/matter.js/src/cluster/server/OnOffServer.ts:25](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/OnOffServer.ts#L25)

___

### OperationalCredentialsClusterHandler

▸ **OperationalCredentialsClusterHandler**(`conf`): [`ClusterServerHandlers`](cluster.md#clusterserverhandlers)<[`Cluster`](cluster.md#cluster)<[`BitSchema`](schema.md#bitschema), [`TypeFromBitSchema`](schema.md#typefrombitschema)<[`BitSchema`](schema.md#bitschema)\>, [`Merge`](util.md#merge)<{ `commissionedFabrics`: [`Attribute`](cluster.md#attribute)<`number`\> ; `currentFabricIndex`: [`Attribute`](cluster.md#attribute)<[`FabricIndex`](../classes/datatype.FabricIndex.md)\> ; `fabrics`: [`Attribute`](cluster.md#attribute)<[`TypeFromFields`](tlv.md#typefromfields)<{ `fabricId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`FabricId`](../classes/datatype.FabricId.md)\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`FabricIndex`](../classes/datatype.FabricIndex.md)\> ; `label`: [`FieldType`](../interfaces/tlv.FieldType.md)<`string`\> ; `nodeId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`NodeId`](../classes/datatype.NodeId.md)\> ; `rootPublicKey`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `vendorId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`VendorId`](../classes/datatype.VendorId.md)\>  }\>[]\> ; `nocs`: [`Attribute`](cluster.md#attribute)<[`TypeFromFields`](tlv.md#typefromfields)<{ `icac`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `Uint8Array`\> ; `noc`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>[]\> ; `supportedFabrics`: [`Attribute`](cluster.md#attribute)<`number`\> ; `trustedRootCertificates`: [`Attribute`](cluster.md#attribute)<`Uint8Array`[]\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<[`BitSchema`](schema.md#bitschema)\>\>, { `addOperationalCert`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `adminVendorId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`VendorId`](../classes/datatype.VendorId.md)\> ; `caseAdminNode`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`NodeId`](../classes/datatype.NodeId.md)\> ; `identityProtectionKey`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `intermediateCaCert`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`Uint8Array`\> ; `operationalCert`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `debugText`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`string`\> ; `fabricIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`FabricIndex`](../classes/datatype.FabricIndex.md)\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`OperationalCertStatus`](../enums/cluster.OperationalCertStatus.md)\>  }\>\> ; `addRootCert`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `certificate`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>, `void`\> ; `removeFabric`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `fabricIndex`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`FabricIndex`](../classes/datatype.FabricIndex.md)\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `debugText`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`string`\> ; `fabricIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`FabricIndex`](../classes/datatype.FabricIndex.md)\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`OperationalCertStatus`](../enums/cluster.OperationalCertStatus.md)\>  }\>\> ; `requestAttestation`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attestationNonce`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `elements`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `signature`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>\> ; `requestCertChain`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `type`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`CertificateChainType`](../enums/cluster.CertificateChainType.md)\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `certificate`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>\> ; `requestCertSigning`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `certSigningRequestNonce`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `isForUpdateNOC`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `elements`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `signature`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>\> ; `updateFabricLabel`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `label`: [`FieldType`](../interfaces/tlv.FieldType.md)<`string`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `debugText`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`string`\> ; `fabricIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`FabricIndex`](../classes/datatype.FabricIndex.md)\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`OperationalCertStatus`](../enums/cluster.OperationalCertStatus.md)\>  }\>\> ; `updateOperationalCert`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `intermediateCaCert`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`Uint8Array`\> ; `operationalCert`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `debugText`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`string`\> ; `fabricIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`FabricIndex`](../classes/datatype.FabricIndex.md)\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`OperationalCertStatus`](../enums/cluster.OperationalCertStatus.md)\>  }\>\>  }, [`Events`](../interfaces/cluster.Events.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conf` | [`OperationalCredentialsServerConf`](../interfaces/cluster.OperationalCredentialsServerConf.md) |

#### Returns

[`ClusterServerHandlers`](cluster.md#clusterserverhandlers)<[`Cluster`](cluster.md#cluster)<[`BitSchema`](schema.md#bitschema), [`TypeFromBitSchema`](schema.md#typefrombitschema)<[`BitSchema`](schema.md#bitschema)\>, [`Merge`](util.md#merge)<{ `commissionedFabrics`: [`Attribute`](cluster.md#attribute)<`number`\> ; `currentFabricIndex`: [`Attribute`](cluster.md#attribute)<[`FabricIndex`](../classes/datatype.FabricIndex.md)\> ; `fabrics`: [`Attribute`](cluster.md#attribute)<[`TypeFromFields`](tlv.md#typefromfields)<{ `fabricId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`FabricId`](../classes/datatype.FabricId.md)\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`FabricIndex`](../classes/datatype.FabricIndex.md)\> ; `label`: [`FieldType`](../interfaces/tlv.FieldType.md)<`string`\> ; `nodeId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`NodeId`](../classes/datatype.NodeId.md)\> ; `rootPublicKey`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `vendorId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`VendorId`](../classes/datatype.VendorId.md)\>  }\>[]\> ; `nocs`: [`Attribute`](cluster.md#attribute)<[`TypeFromFields`](tlv.md#typefromfields)<{ `icac`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `Uint8Array`\> ; `noc`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>[]\> ; `supportedFabrics`: [`Attribute`](cluster.md#attribute)<`number`\> ; `trustedRootCertificates`: [`Attribute`](cluster.md#attribute)<`Uint8Array`[]\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<[`BitSchema`](schema.md#bitschema)\>\>, { `addOperationalCert`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `adminVendorId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`VendorId`](../classes/datatype.VendorId.md)\> ; `caseAdminNode`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`NodeId`](../classes/datatype.NodeId.md)\> ; `identityProtectionKey`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `intermediateCaCert`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`Uint8Array`\> ; `operationalCert`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `debugText`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`string`\> ; `fabricIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`FabricIndex`](../classes/datatype.FabricIndex.md)\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`OperationalCertStatus`](../enums/cluster.OperationalCertStatus.md)\>  }\>\> ; `addRootCert`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `certificate`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>, `void`\> ; `removeFabric`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `fabricIndex`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`FabricIndex`](../classes/datatype.FabricIndex.md)\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `debugText`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`string`\> ; `fabricIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`FabricIndex`](../classes/datatype.FabricIndex.md)\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`OperationalCertStatus`](../enums/cluster.OperationalCertStatus.md)\>  }\>\> ; `requestAttestation`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attestationNonce`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `elements`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `signature`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>\> ; `requestCertChain`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `type`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`CertificateChainType`](../enums/cluster.CertificateChainType.md)\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `certificate`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>\> ; `requestCertSigning`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `certSigningRequestNonce`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `isForUpdateNOC`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `elements`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `signature`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>\> ; `updateFabricLabel`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `label`: [`FieldType`](../interfaces/tlv.FieldType.md)<`string`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `debugText`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`string`\> ; `fabricIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`FabricIndex`](../classes/datatype.FabricIndex.md)\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`OperationalCertStatus`](../enums/cluster.OperationalCertStatus.md)\>  }\>\> ; `updateOperationalCert`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `intermediateCaCert`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`Uint8Array`\> ; `operationalCert`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `debugText`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`string`\> ; `fabricIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`FabricIndex`](../classes/datatype.FabricIndex.md)\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`OperationalCertStatus`](../enums/cluster.OperationalCertStatus.md)\>  }\>\>  }, [`Events`](../interfaces/cluster.Events.md)\>\>

#### Defined in

[packages/matter.js/src/cluster/server/OperationalCredentialsServer.ts:30](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/OperationalCredentialsServer.ts#L30)

___

### OptionalAttribute

▸ **OptionalAttribute**<`T`, `V`\>(`id`, `schema`, `«destructured»?`): [`OptionalAttribute`](cluster.md#optionalattribute)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `schema` | [`TlvSchema`](../classes/tlv.TlvSchema.md)<`T`\> |
| `«destructured»` | [`AttributeOptions`](../interfaces/index._internal_.AttributeOptions.md)<`V`\> |

#### Returns

[`OptionalAttribute`](cluster.md#optionalattribute)<`T`\>

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:33](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L33)

___

### OptionalCommand

▸ **OptionalCommand**<`RequestT`, `ResponseT`\>(`requestId`, `requestSchema`, `responseId`, `responseSchema`): [`OptionalCommand`](cluster.md#optionalcommand)<`RequestT`, `ResponseT`\>

#### Type parameters

| Name |
| :------ |
| `RequestT` |
| `ResponseT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestId` | `number` |
| `requestSchema` | [`TlvSchema`](../classes/tlv.TlvSchema.md)<`RequestT`\> |
| `responseId` | `number` |
| `responseSchema` | [`TlvSchema`](../classes/tlv.TlvSchema.md)<`ResponseT`\> |

#### Returns

[`OptionalCommand`](cluster.md#optionalcommand)<`RequestT`, `ResponseT`\>

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:48](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L48)

___

### OptionalEvent

▸ **OptionalEvent**<`FT`\>(`id`, `priority`, `data?`): [`Event`](cluster.md#event)<[`TypeFromFields`](tlv.md#typefromfields)<`FT`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FT` | extends [`TlvFields`](tlv.md#tlvfields) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `priority` | [`EventPriority`](../enums/cluster.EventPriority.md) |
| `data` | `FT` |

#### Returns

[`Event`](cluster.md#event)<[`TypeFromFields`](tlv.md#typefromfields)<`FT`\>\>

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:58](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L58)

___

### OptionalWritableAttribute

▸ **OptionalWritableAttribute**<`T`, `V`\>(`id`, `schema`, `«destructured»?`): [`OptionalWritableAttribute`](cluster.md#optionalwritableattribute)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `schema` | [`TlvSchema`](../classes/tlv.TlvSchema.md)<`T`\> |
| `«destructured»` | [`AttributeOptions`](../interfaces/index._internal_.AttributeOptions.md)<`V`\> |

#### Returns

[`OptionalWritableAttribute`](cluster.md#optionalwritableattribute)<`T`\>

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:35](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L35)

___

### ScenesClusterHandler

▸ **ScenesClusterHandler**(): [`ClusterServerHandlers`](cluster.md#clusterserverhandlers)<[`Cluster`](cluster.md#cluster)<{ `sceneNames`: [`BitFlag`](schema.md#bitflag-1)  }, [`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `sceneNames`: [`BitFlag`](schema.md#bitflag-1)  }\>, [`Merge`](util.md#merge)<{ `currentGroup`: [`Attribute`](cluster.md#attribute)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `currentScene`: [`Attribute`](cluster.md#attribute)<`number`\> ; `lastConfiguredBy`: [`OptionalAttribute`](cluster.md#optionalattribute)<``null`` \| [`NodeId`](../classes/datatype.NodeId.md)\> ; `nameSupport`: [`Attribute`](cluster.md#attribute)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `sceneNames`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `sceneCount`: [`Attribute`](cluster.md#attribute)<`number`\> ; `sceneValid`: [`Attribute`](cluster.md#attribute)<`boolean`\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<{ `sceneNames`: [`BitFlag`](schema.md#bitflag-1)  }\>\>, { `addScene`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `extensionFieldSets`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeValueList`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`AttributeId`](../classes/datatype.AttributeId.md)\> ; `attributeValue`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TlvStream`](tlv.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`ClusterId`](../classes/datatype.ClusterId.md)\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `sceneName`: [`FieldType`](../interfaces/tlv.FieldType.md)<`string`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\> ; `copyScene`: [`OptionalCommand`](cluster.md#optionalcommand)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupIdFrom`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `groupIdTo`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `mode`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `copyAllScenes`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `sceneIdFrom`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `sceneIdTo`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `groupIdFrom`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneIdFrom`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\> ; `enhancedAddScene`: [`OptionalCommand`](cluster.md#optionalcommand)<[`TypeFromFields`](tlv.md#typefromfields)<{ `extensionFieldSets`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeValueList`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`AttributeId`](../classes/datatype.AttributeId.md)\> ; `attributeValue`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TlvStream`](tlv.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`ClusterId`](../classes/datatype.ClusterId.md)\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `sceneName`: [`FieldType`](../interfaces/tlv.FieldType.md)<`string`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\> ; `enhancedViewScene`: [`OptionalCommand`](cluster.md#optionalcommand)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `extensionFieldSets`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeValueList`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`AttributeId`](../classes/datatype.AttributeId.md)\> ; `attributeValue`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TlvStream`](tlv.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`ClusterId`](../classes/datatype.ClusterId.md)\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `sceneName`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`string`\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\> ; `transitionTime`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>\> ; `getSceneMembership`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `capacity`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number`\> ; `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneList`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`[]\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\> ; `recallScene`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `transitionTime`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `number`\>  }\>, `void`\> ; `removeAllScenes`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\> ; `removeScene`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\> ; `storeScene`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\> ; `viewScene`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `extensionFieldSets`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeValueList`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`AttributeId`](../classes/datatype.AttributeId.md)\> ; `attributeValue`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TlvStream`](tlv.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`ClusterId`](../classes/datatype.ClusterId.md)\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `sceneName`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`string`\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\> ; `transitionTime`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>\>  }, [`Events`](../interfaces/cluster.Events.md)\>\>

#### Returns

[`ClusterServerHandlers`](cluster.md#clusterserverhandlers)<[`Cluster`](cluster.md#cluster)<{ `sceneNames`: [`BitFlag`](schema.md#bitflag-1)  }, [`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `sceneNames`: [`BitFlag`](schema.md#bitflag-1)  }\>, [`Merge`](util.md#merge)<{ `currentGroup`: [`Attribute`](cluster.md#attribute)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `currentScene`: [`Attribute`](cluster.md#attribute)<`number`\> ; `lastConfiguredBy`: [`OptionalAttribute`](cluster.md#optionalattribute)<``null`` \| [`NodeId`](../classes/datatype.NodeId.md)\> ; `nameSupport`: [`Attribute`](cluster.md#attribute)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `sceneNames`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `sceneCount`: [`Attribute`](cluster.md#attribute)<`number`\> ; `sceneValid`: [`Attribute`](cluster.md#attribute)<`boolean`\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<{ `sceneNames`: [`BitFlag`](schema.md#bitflag-1)  }\>\>, { `addScene`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `extensionFieldSets`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeValueList`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`AttributeId`](../classes/datatype.AttributeId.md)\> ; `attributeValue`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TlvStream`](tlv.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`ClusterId`](../classes/datatype.ClusterId.md)\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `sceneName`: [`FieldType`](../interfaces/tlv.FieldType.md)<`string`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\> ; `copyScene`: [`OptionalCommand`](cluster.md#optionalcommand)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupIdFrom`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `groupIdTo`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `mode`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `copyAllScenes`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `sceneIdFrom`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `sceneIdTo`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `groupIdFrom`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneIdFrom`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\> ; `enhancedAddScene`: [`OptionalCommand`](cluster.md#optionalcommand)<[`TypeFromFields`](tlv.md#typefromfields)<{ `extensionFieldSets`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeValueList`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`AttributeId`](../classes/datatype.AttributeId.md)\> ; `attributeValue`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TlvStream`](tlv.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`ClusterId`](../classes/datatype.ClusterId.md)\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `sceneName`: [`FieldType`](../interfaces/tlv.FieldType.md)<`string`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\> ; `enhancedViewScene`: [`OptionalCommand`](cluster.md#optionalcommand)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `extensionFieldSets`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeValueList`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`AttributeId`](../classes/datatype.AttributeId.md)\> ; `attributeValue`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TlvStream`](tlv.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`ClusterId`](../classes/datatype.ClusterId.md)\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `sceneName`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`string`\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\> ; `transitionTime`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>\> ; `getSceneMembership`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `capacity`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number`\> ; `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneList`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`[]\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\> ; `recallScene`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `transitionTime`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `number`\>  }\>, `void`\> ; `removeAllScenes`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\> ; `removeScene`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\> ; `storeScene`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\> ; `viewScene`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `extensionFieldSets`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeValueList`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`AttributeId`](../classes/datatype.AttributeId.md)\> ; `attributeValue`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TlvStream`](tlv.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`ClusterId`](../classes/datatype.ClusterId.md)\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `sceneName`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`string`\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\> ; `transitionTime`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>\>  }, [`Events`](../interfaces/cluster.Events.md)\>\>

#### Defined in

[packages/matter.js/src/cluster/server/ScenesServer.ts:128](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/ScenesServer.ts#L128)

___

### UseOptionalAttributes

▸ **UseOptionalAttributes**<`C`, `A`\>(`cluster`, `conf`): [`UseOptionalAttributes`](index._internal_.md#useoptionalattributes-1)<`C`, `A`\>

Forces the presence of the specified optional attributes, so they can be used in the command handlers

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Cluster`](cluster.md#cluster)<`any`, `any`, `any`, `any`, `any`, `C`\> |
| `A` | extends [`OptionalAttributeConf`](index._internal_.md#optionalattributeconf)<`C`[``"attributes"``]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | `C` |
| `conf` | `A` |

#### Returns

[`UseOptionalAttributes`](index._internal_.md#useoptionalattributes-1)<`C`, `A`\>

#### Defined in

[packages/matter.js/src/cluster/server/ClusterServer.ts:67](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/ClusterServer.ts#L67)

___

### WritableAttribute

▸ **WritableAttribute**<`T`, `V`\>(`id`, `schema`, `«destructured»?`): [`WritableAttribute`](cluster.md#writableattribute)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `schema` | [`TlvSchema`](../classes/tlv.TlvSchema.md)<`T`\> |
| `«destructured»` | [`AttributeOptions`](../interfaces/index._internal_.AttributeOptions.md)<`V`\> |

#### Returns

[`WritableAttribute`](cluster.md#writableattribute)<`T`\>

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:34](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L34)

___

### createDefaultGroupsClusterServer

▸ **createDefaultGroupsClusterServer**(): [`ClusterServerObj`](cluster.md#clusterserverobj)<[`Merge`](util.md#merge)<{ `nameSupport`: [`Attribute`](cluster.md#attribute)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `groupNames`: [`BitFlag`](schema.md#bitflag-1)  }\>\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<{ `groupNames`: [`BitFlag`](schema.md#bitflag-1)  }\>\>, { `addGroup`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `groupName`: [`FieldType`](../interfaces/tlv.FieldType.md)<`string`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\> ; `addGroupIfIdentifying`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `groupName`: [`FieldType`](../interfaces/tlv.FieldType.md)<`string`\>  }\>, `void`\> ; `getGroupMembership`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupList`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)[]\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `capacity`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number`\> ; `groupList`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)[]\>  }\>\> ; `removeAllGroups`: [`Command`](cluster.md#command)<`void`, `void`\> ; `removeGroup`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\> ; `viewGroup`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `groupName`: [`FieldType`](../interfaces/tlv.FieldType.md)<`string`\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\>  }\>

#### Returns

[`ClusterServerObj`](cluster.md#clusterserverobj)<[`Merge`](util.md#merge)<{ `nameSupport`: [`Attribute`](cluster.md#attribute)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `groupNames`: [`BitFlag`](schema.md#bitflag-1)  }\>\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<{ `groupNames`: [`BitFlag`](schema.md#bitflag-1)  }\>\>, { `addGroup`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `groupName`: [`FieldType`](../interfaces/tlv.FieldType.md)<`string`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\> ; `addGroupIfIdentifying`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `groupName`: [`FieldType`](../interfaces/tlv.FieldType.md)<`string`\>  }\>, `void`\> ; `getGroupMembership`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupList`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)[]\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `capacity`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number`\> ; `groupList`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)[]\>  }\>\> ; `removeAllGroups`: [`Command`](cluster.md#command)<`void`, `void`\> ; `removeGroup`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\> ; `viewGroup`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `groupName`: [`FieldType`](../interfaces/tlv.FieldType.md)<`string`\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\>  }\>

#### Defined in

[packages/matter.js/src/cluster/server/GroupsServer.ts:195](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/GroupsServer.ts#L195)

___

### createDefaultIdentifyClusterServer

▸ **createDefaultIdentifyClusterServer**(`handlers`): [`ClusterServerObj`](cluster.md#clusterserverobj)<[`Merge`](util.md#merge)<{ `identifyTime`: [`WritableAttribute`](cluster.md#writableattribute)<`number`\> ; `identifyType`: [`Attribute`](cluster.md#attribute)<[`IdentifyType`](../enums/cluster.IdentifyType.md)\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<{ `query`: [`BitFlag`](schema.md#bitflag-1)  }\>\>, { `identify`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `identifyTime`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>, `void`\> ; `triggerEffect`: [`OptionalCommand`](cluster.md#optionalcommand)<[`TypeFromFields`](tlv.md#typefromfields)<{ `effectIdentifier`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`IdentifyEffectIdentifier`](../enums/cluster.IdentifyEffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`Default`](../enums/cluster.EffectVariant.md#default)\>  }\>, `void`\>  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `handlers` | [`ClusterServerHandlers`](cluster.md#clusterserverhandlers)<[`Cluster`](cluster.md#cluster)<{ `query`: [`BitFlag`](schema.md#bitflag-1)  }, [`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `query`: [`BitFlag`](schema.md#bitflag-1)  }\>, [`Merge`](util.md#merge)<{ `identifyTime`: [`WritableAttribute`](cluster.md#writableattribute)<`number`\> ; `identifyType`: [`Attribute`](cluster.md#attribute)<[`IdentifyType`](../enums/cluster.IdentifyType.md)\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<{ `query`: [`BitFlag`](schema.md#bitflag-1)  }\>\>, { `identify`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `identifyTime`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>, `void`\> ; `triggerEffect`: [`OptionalCommand`](cluster.md#optionalcommand)<[`TypeFromFields`](tlv.md#typefromfields)<{ `effectIdentifier`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`IdentifyEffectIdentifier`](../enums/cluster.IdentifyEffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`Default`](../enums/cluster.EffectVariant.md#default)\>  }\>, `void`\>  }, [`Events`](../interfaces/cluster.Events.md)\>\> |

#### Returns

[`ClusterServerObj`](cluster.md#clusterserverobj)<[`Merge`](util.md#merge)<{ `identifyTime`: [`WritableAttribute`](cluster.md#writableattribute)<`number`\> ; `identifyType`: [`Attribute`](cluster.md#attribute)<[`IdentifyType`](../enums/cluster.IdentifyType.md)\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<{ `query`: [`BitFlag`](schema.md#bitflag-1)  }\>\>, { `identify`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `identifyTime`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>, `void`\> ; `triggerEffect`: [`OptionalCommand`](cluster.md#optionalcommand)<[`TypeFromFields`](tlv.md#typefromfields)<{ `effectIdentifier`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`IdentifyEffectIdentifier`](../enums/cluster.IdentifyEffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`Default`](../enums/cluster.EffectVariant.md#default)\>  }\>, `void`\>  }\>

#### Defined in

[packages/matter.js/src/cluster/server/IdentifyServer.ts:10](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/IdentifyServer.ts#L10)

___

### createDefaultOnOffClusterServer

▸ **createDefaultOnOffClusterServer**(`attributeInitialValues?`): [`ClusterServerObj`](cluster.md#clusterserverobj)<[`Merge`](util.md#merge)<{ `onOff`: [`Attribute`](cluster.md#attribute)<`boolean`\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<{ `lightingLevelControl`: [`BitFlag`](schema.md#bitflag-1)  }\>\>, { `off`: [`Command`](cluster.md#command)<`void`, `void`\> ; `on`: [`Command`](cluster.md#command)<`void`, `void`\> ; `toggle`: [`Command`](cluster.md#command)<`void`, `void`\>  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributeInitialValues?` | [`AttributeInitialValues`](cluster.md#attributeinitialvalues)<[`Merge`](util.md#merge)<{ `onOff`: [`Attribute`](cluster.md#attribute)<`boolean`\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<{ `lightingLevelControl`: [`BitFlag`](schema.md#bitflag-1)  }\>\>\> |

#### Returns

[`ClusterServerObj`](cluster.md#clusterserverobj)<[`Merge`](util.md#merge)<{ `onOff`: [`Attribute`](cluster.md#attribute)<`boolean`\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<{ `lightingLevelControl`: [`BitFlag`](schema.md#bitflag-1)  }\>\>, { `off`: [`Command`](cluster.md#command)<`void`, `void`\> ; `on`: [`Command`](cluster.md#command)<`void`, `void`\> ; `toggle`: [`Command`](cluster.md#command)<`void`, `void`\>  }\>

#### Defined in

[packages/matter.js/src/cluster/server/OnOffServer.ts:41](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/OnOffServer.ts#L41)

___

### createDefaultScenesClusterServer

▸ **createDefaultScenesClusterServer**(): [`ClusterServerObj`](cluster.md#clusterserverobj)<[`Merge`](util.md#merge)<{ `currentGroup`: [`Attribute`](cluster.md#attribute)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `currentScene`: [`Attribute`](cluster.md#attribute)<`number`\> ; `lastConfiguredBy`: [`OptionalAttribute`](cluster.md#optionalattribute)<``null`` \| [`NodeId`](../classes/datatype.NodeId.md)\> ; `nameSupport`: [`Attribute`](cluster.md#attribute)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `sceneNames`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `sceneCount`: [`Attribute`](cluster.md#attribute)<`number`\> ; `sceneValid`: [`Attribute`](cluster.md#attribute)<`boolean`\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<{ `sceneNames`: [`BitFlag`](schema.md#bitflag-1)  }\>\>, { `addScene`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `extensionFieldSets`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeValueList`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`AttributeId`](../classes/datatype.AttributeId.md)\> ; `attributeValue`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TlvStream`](tlv.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`ClusterId`](../classes/datatype.ClusterId.md)\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `sceneName`: [`FieldType`](../interfaces/tlv.FieldType.md)<`string`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\> ; `copyScene`: [`OptionalCommand`](cluster.md#optionalcommand)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupIdFrom`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `groupIdTo`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `mode`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `copyAllScenes`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `sceneIdFrom`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `sceneIdTo`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `groupIdFrom`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneIdFrom`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\> ; `enhancedAddScene`: [`OptionalCommand`](cluster.md#optionalcommand)<[`TypeFromFields`](tlv.md#typefromfields)<{ `extensionFieldSets`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeValueList`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`AttributeId`](../classes/datatype.AttributeId.md)\> ; `attributeValue`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TlvStream`](tlv.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`ClusterId`](../classes/datatype.ClusterId.md)\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `sceneName`: [`FieldType`](../interfaces/tlv.FieldType.md)<`string`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\> ; `enhancedViewScene`: [`OptionalCommand`](cluster.md#optionalcommand)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `extensionFieldSets`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeValueList`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`AttributeId`](../classes/datatype.AttributeId.md)\> ; `attributeValue`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TlvStream`](tlv.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`ClusterId`](../classes/datatype.ClusterId.md)\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `sceneName`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`string`\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\> ; `transitionTime`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>\> ; `getSceneMembership`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `capacity`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number`\> ; `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneList`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`[]\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\> ; `recallScene`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `transitionTime`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `number`\>  }\>, `void`\> ; `removeAllScenes`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\> ; `removeScene`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\> ; `storeScene`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\> ; `viewScene`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `extensionFieldSets`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeValueList`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`AttributeId`](../classes/datatype.AttributeId.md)\> ; `attributeValue`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TlvStream`](tlv.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`ClusterId`](../classes/datatype.ClusterId.md)\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `sceneName`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`string`\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\> ; `transitionTime`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>\>  }\>

#### Returns

[`ClusterServerObj`](cluster.md#clusterserverobj)<[`Merge`](util.md#merge)<{ `currentGroup`: [`Attribute`](cluster.md#attribute)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `currentScene`: [`Attribute`](cluster.md#attribute)<`number`\> ; `lastConfiguredBy`: [`OptionalAttribute`](cluster.md#optionalattribute)<``null`` \| [`NodeId`](../classes/datatype.NodeId.md)\> ; `nameSupport`: [`Attribute`](cluster.md#attribute)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `sceneNames`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `sceneCount`: [`Attribute`](cluster.md#attribute)<`number`\> ; `sceneValid`: [`Attribute`](cluster.md#attribute)<`boolean`\>  }, [`GlobalAttributes`](cluster.md#globalattributes-1)<{ `sceneNames`: [`BitFlag`](schema.md#bitflag-1)  }\>\>, { `addScene`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `extensionFieldSets`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeValueList`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`AttributeId`](../classes/datatype.AttributeId.md)\> ; `attributeValue`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TlvStream`](tlv.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`ClusterId`](../classes/datatype.ClusterId.md)\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `sceneName`: [`FieldType`](../interfaces/tlv.FieldType.md)<`string`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\> ; `copyScene`: [`OptionalCommand`](cluster.md#optionalcommand)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupIdFrom`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `groupIdTo`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `mode`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<{ `copyAllScenes`: [`BitFlag`](schema.md#bitflag-1)  }\>\> ; `sceneIdFrom`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `sceneIdTo`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `groupIdFrom`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneIdFrom`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\> ; `enhancedAddScene`: [`OptionalCommand`](cluster.md#optionalcommand)<[`TypeFromFields`](tlv.md#typefromfields)<{ `extensionFieldSets`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeValueList`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`AttributeId`](../classes/datatype.AttributeId.md)\> ; `attributeValue`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TlvStream`](tlv.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`ClusterId`](../classes/datatype.ClusterId.md)\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `sceneName`: [`FieldType`](../interfaces/tlv.FieldType.md)<`string`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\> ; `enhancedViewScene`: [`OptionalCommand`](cluster.md#optionalcommand)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `extensionFieldSets`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeValueList`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`AttributeId`](../classes/datatype.AttributeId.md)\> ; `attributeValue`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TlvStream`](tlv.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`ClusterId`](../classes/datatype.ClusterId.md)\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `sceneName`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`string`\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\> ; `transitionTime`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>\> ; `getSceneMembership`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `capacity`: [`FieldType`](../interfaces/tlv.FieldType.md)<``null`` \| `number`\> ; `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneList`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`[]\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\> ; `recallScene`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `transitionTime`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `number`\>  }\>, `void`\> ; `removeAllScenes`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\> ; `removeScene`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\> ; `storeScene`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\> ; `viewScene`: [`Command`](cluster.md#command)<[`TypeFromFields`](tlv.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv.md#typefromfields)<{ `extensionFieldSets`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeValueList`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`AttributeId`](../classes/datatype.AttributeId.md)\> ; `attributeValue`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TlvStream`](tlv.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`ClusterId`](../classes/datatype.ClusterId.md)\>  }\>[]\> ; `groupId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`GroupId`](../classes/datatype.GroupId.md)\> ; `sceneId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `sceneName`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`string`\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\> ; `transitionTime`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>\>  }\>

#### Defined in

[packages/matter.js/src/cluster/server/ScenesServer.ts:439](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/ScenesServer.ts#L439)

___

### getClusterAttributeById

▸ **getClusterAttributeById**(`clusterDef`, `attributeId`): [`CachedAttributeInfo`](../interfaces/index._internal_.CachedAttributeInfo.md) \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `clusterDef` | [`Cluster`](cluster.md#cluster)<`any`, `any`, `any`, `any`, `any`\> |
| `attributeId` | `number` |

#### Returns

[`CachedAttributeInfo`](../interfaces/index._internal_.CachedAttributeInfo.md) \| `undefined`

#### Defined in

[packages/matter.js/src/cluster/ClusterHelper.ts:78](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/ClusterHelper.ts#L78)

___

### getClusterById

▸ **getClusterById**(`clusterId`): [`Cluster`](cluster.md#cluster)<`any`, `any`, `any`, `any`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `clusterId` | `number` |

#### Returns

[`Cluster`](cluster.md#cluster)<`any`, `any`, `any`, `any`, `any`\>

#### Defined in

[packages/matter.js/src/cluster/ClusterHelper.ts:74](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/ClusterHelper.ts#L74)

___

### isClusterClient

▸ **isClusterClient**<`A`, `C`\>(`obj`): obj is ClusterClientObj<A, C\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster.Commands.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`ClusterClientObj`](cluster.md#clusterclientobj)<`A`, `C`\> \| [`ClusterServerObj`](cluster.md#clusterserverobj)<`A`, `C`\> |

#### Returns

obj is ClusterClientObj<A, C\>

#### Defined in

[packages/matter.js/src/cluster/client/ClusterClient.ts:41](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/client/ClusterClient.ts#L41)

___

### isClusterServer

▸ **isClusterServer**<`A`, `C`\>(`obj`): obj is ClusterServerObj<A, C\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster.Commands.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`ClusterClientObj`](cluster.md#clusterclientobj)<`A`, `C`\> \| [`ClusterServerObj`](cluster.md#clusterserverobj)<`A`, `C`\> |

#### Returns

obj is ClusterServerObj<A, C\>

#### Defined in

[packages/matter.js/src/cluster/server/ClusterServer.ts:126](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/ClusterServer.ts#L126)
