[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/export](../modules/protocol_export.md) / ControllerCommissioner

# Class: ControllerCommissioner

[protocol/export](../modules/protocol_export.md).ControllerCommissioner

Class to abstract the Device commission flow in a step wise way as defined in Specs. The specs are not 100%

## Table of contents

### Constructors

- [constructor](protocol_export.ControllerCommissioner.md#constructor)

### Properties

- [adminVendorId](protocol_export.ControllerCommissioner.md#adminvendorid)
- [certificateManager](protocol_export.ControllerCommissioner.md#certificatemanager)
- [clusterClients](protocol_export.ControllerCommissioner.md#clusterclients)
- [collectedCommissioningData](protocol_export.ControllerCommissioner.md#collectedcommissioningdata)
- [commissioningExpiryTime](protocol_export.ControllerCommissioner.md#commissioningexpirytime)
- [commissioningOptions](protocol_export.ControllerCommissioner.md#commissioningoptions)
- [commissioningStartedTime](protocol_export.ControllerCommissioner.md#commissioningstartedtime)
- [commissioningStepResults](protocol_export.ControllerCommissioner.md#commissioningstepresults)
- [commissioningSteps](protocol_export.ControllerCommissioner.md#commissioningsteps)
- [fabric](protocol_export.ControllerCommissioner.md#fabric)
- [failSafeTimeMs](protocol_export.ControllerCommissioner.md#failsafetimems)
- [interactionClient](protocol_export.ControllerCommissioner.md#interactionclient)
- [lastBreadcrumb](protocol_export.ControllerCommissioner.md#lastbreadcrumb)
- [lastFailSafeTime](protocol_export.ControllerCommissioner.md#lastfailsafetime)
- [nodeId](protocol_export.ControllerCommissioner.md#nodeid)
- [reconnectWithDeviceCallback](protocol_export.ControllerCommissioner.md#reconnectwithdevicecallback)

### Methods

- [armFailsafe](protocol_export.ControllerCommissioner.md#armfailsafe)
- [certificates](protocol_export.ControllerCommissioner.md#certificates)
- [completeCommissioning](protocol_export.ControllerCommissioner.md#completecommissioning)
- [configureAccessControlLists](protocol_export.ControllerCommissioner.md#configureaccesscontrollists)
- [configureNetworkThread](protocol_export.ControllerCommissioner.md#configurenetworkthread)
- [configureNetworkWifi](protocol_export.ControllerCommissioner.md#configurenetworkwifi)
- [configureRegulatoryInformation](protocol_export.ControllerCommissioner.md#configureregulatoryinformation)
- [deviceAttestation](protocol_export.ControllerCommissioner.md#deviceattestation)
- [ensureGeneralCommissioningSuccess](protocol_export.ControllerCommissioner.md#ensuregeneralcommissioningsuccess)
- [ensureOperationalCredentialsSuccess](protocol_export.ControllerCommissioner.md#ensureoperationalcredentialssuccess)
- [executeCommissioning](protocol_export.ControllerCommissioner.md#executecommissioning)
- [getClusterClient](protocol_export.ControllerCommissioner.md#getclusterclient)
- [getCommissioningStepResult](protocol_export.ControllerCommissioner.md#getcommissioningstepresult)
- [getInitialData](protocol_export.ControllerCommissioner.md#getinitialdata)
- [initializeCommissioningSteps](protocol_export.ControllerCommissioner.md#initializecommissioningsteps)
- [reconnectWithDevice](protocol_export.ControllerCommissioner.md#reconnectwithdevice)
- [resetFailsafeTimer](protocol_export.ControllerCommissioner.md#resetfailsafetimer)
- [setCommissioningStepResult](protocol_export.ControllerCommissioner.md#setcommissioningstepresult)
- [sortSteps](protocol_export.ControllerCommissioner.md#sortsteps)
- [synchronizeTime](protocol_export.ControllerCommissioner.md#synchronizetime)
- [validateNetwork](protocol_export.ControllerCommissioner.md#validatenetwork)

## Constructors

### constructor

• **new ControllerCommissioner**(`interactionClient`, `certificateManager`, `fabric`, `commissioningOptions`, `nodeId`, `adminVendorId`, `reconnectWithDeviceCallback`): [`ControllerCommissioner`](protocol_export.ControllerCommissioner.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `interactionClient` | [`InteractionClient`](protocol_interaction_export.InteractionClient.md) |
| `certificateManager` | [`RootCertificateManager`](certificate_export.RootCertificateManager.md) |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |
| `commissioningOptions` | [`CommissioningOptions`](../modules/protocol_export.md#commissioningoptions) |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `adminVendorId` | [`VendorId`](../modules/datatype_export.md#vendorid) |
| `reconnectWithDeviceCallback` | () => `Promise`\<[`InteractionClient`](protocol_interaction_export.InteractionClient.md)\> |

#### Returns

[`ControllerCommissioner`](protocol_export.ControllerCommissioner.md)

#### Defined in

[packages/matter.js/src/protocol/ControllerCommissioner.ts:139](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ControllerCommissioner.ts#L139)

## Properties

### adminVendorId

• `Private` `Readonly` **adminVendorId**: [`VendorId`](../modules/datatype_export.md#vendorid)

#### Defined in

[packages/matter.js/src/protocol/ControllerCommissioner.ts:145](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ControllerCommissioner.ts#L145)

___

### certificateManager

• `Private` `Readonly` **certificateManager**: [`RootCertificateManager`](certificate_export.RootCertificateManager.md)

#### Defined in

[packages/matter.js/src/protocol/ControllerCommissioner.ts:141](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ControllerCommissioner.ts#L141)

___

### clusterClients

• `Private` `Readonly` **clusterClients**: `Map`\<[`ClusterId`](../modules/datatype_export.md#clusterid), [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)\<`any`, [`Attributes`](../interfaces/cluster_export.Attributes.md), [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>\>

#### Defined in

[packages/matter.js/src/protocol/ControllerCommissioner.ts:131](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ControllerCommissioner.ts#L131)

___

### collectedCommissioningData

• `Private` **collectedCommissioningData**: [`CollectedCommissioningData`](../modules/protocol_export._internal_.md#collectedcommissioningdata) = `{}`

#### Defined in

[packages/matter.js/src/protocol/ControllerCommissioner.ts:136](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ControllerCommissioner.ts#L136)

___

### commissioningExpiryTime

• `Private` **commissioningExpiryTime**: `undefined` \| `number`

#### Defined in

[packages/matter.js/src/protocol/ControllerCommissioner.ts:133](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ControllerCommissioner.ts#L133)

___

### commissioningOptions

• `Private` `Readonly` **commissioningOptions**: [`CommissioningOptions`](../modules/protocol_export.md#commissioningoptions)

#### Defined in

[packages/matter.js/src/protocol/ControllerCommissioner.ts:143](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ControllerCommissioner.ts#L143)

___

### commissioningStartedTime

• `Private` **commissioningStartedTime**: `undefined` \| `number`

#### Defined in

[packages/matter.js/src/protocol/ControllerCommissioner.ts:132](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ControllerCommissioner.ts#L132)

___

### commissioningStepResults

• `Private` `Readonly` **commissioningStepResults**: `Map`\<`string`, [`CommissioningStepResult`](../modules/protocol_export._internal_.md#commissioningstepresult)\>

#### Defined in

[packages/matter.js/src/protocol/ControllerCommissioner.ts:130](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ControllerCommissioner.ts#L130)

___

### commissioningSteps

• `Private` `Readonly` **commissioningSteps**: [`CommissioningStep`](../modules/protocol_export._internal_.md#commissioningstep)[]

#### Defined in

[packages/matter.js/src/protocol/ControllerCommissioner.ts:129](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ControllerCommissioner.ts#L129)

___

### fabric

• `Private` `Readonly` **fabric**: [`Fabric`](fabric_export.Fabric.md)

#### Defined in

[packages/matter.js/src/protocol/ControllerCommissioner.ts:142](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ControllerCommissioner.ts#L142)

___

### failSafeTimeMs

• `Private` **failSafeTimeMs**: `number` = `DEFAULT_FAILSAFE_TIME_MS`

#### Defined in

[packages/matter.js/src/protocol/ControllerCommissioner.ts:137](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ControllerCommissioner.ts#L137)

___

### interactionClient

• `Private` **interactionClient**: [`InteractionClient`](protocol_interaction_export.InteractionClient.md)

#### Defined in

[packages/matter.js/src/protocol/ControllerCommissioner.ts:140](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ControllerCommissioner.ts#L140)

___

### lastBreadcrumb

• `Private` **lastBreadcrumb**: `number` = `1`

#### Defined in

[packages/matter.js/src/protocol/ControllerCommissioner.ts:135](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ControllerCommissioner.ts#L135)

___

### lastFailSafeTime

• `Private` **lastFailSafeTime**: `undefined` \| `number`

#### Defined in

[packages/matter.js/src/protocol/ControllerCommissioner.ts:134](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ControllerCommissioner.ts#L134)

___

### nodeId

• `Private` `Readonly` **nodeId**: [`NodeId`](../modules/datatype_export.md#nodeid)

#### Defined in

[packages/matter.js/src/protocol/ControllerCommissioner.ts:144](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ControllerCommissioner.ts#L144)

___

### reconnectWithDeviceCallback

• `Private` `Readonly` **reconnectWithDeviceCallback**: () => `Promise`\<[`InteractionClient`](protocol_interaction_export.InteractionClient.md)\>

#### Type declaration

▸ (): `Promise`\<[`InteractionClient`](protocol_interaction_export.InteractionClient.md)\>

##### Returns

`Promise`\<[`InteractionClient`](protocol_interaction_export.InteractionClient.md)\>

#### Defined in

[packages/matter.js/src/protocol/ControllerCommissioner.ts:146](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ControllerCommissioner.ts#L146)

## Methods

### armFailsafe

▸ **armFailsafe**(): `Promise`\<\{ `breadcrumb`: `number` ; `code`: [`CommissioningStepResultCode`](../enums/protocol_export._internal_.CommissioningStepResultCode.md) = CommissioningStepResultCode.Success }\>

Step 3
Upon completion of PASE session establishment, the Commissionee SHALL autonomously arm the Fail-safe timer for a
timeout of 60 seconds. This is to guard against the Commissioner aborting the Commissioning process without
arming the fail-safe, which may leave the device unable to accept additional connections.
A Commissioner MAY obtain device information including guidance on the fail-safe value from the Commissionee by
reading BasicCommissioningInfo attribute (see Section 11.9.5.2, “BasicCommissioningInfo Attribute”) prior to
invoking the ArmFailSafe command.

#### Returns

`Promise`\<\{ `breadcrumb`: `number` ; `code`: [`CommissioningStepResultCode`](../enums/protocol_export._internal_.CommissioningStepResultCode.md) = CommissioningStepResultCode.Success }\>

#### Defined in

[packages/matter.js/src/protocol/ControllerCommissioner.ts:471](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ControllerCommissioner.ts#L471)

___

### certificates

▸ **certificates**(): `Promise`\<\{ `breadcrumb`: `number` ; `code`: [`CommissioningStepResultCode`](../enums/protocol_export._internal_.CommissioningStepResultCode.md) = CommissioningStepResultCode.Success }\>

Step 7-9
7: Following the Device Attestation Procedure yielding a decision to proceed with commissioning, the Commissioner
SHALL request operational CSR from Commissionee using the CSRRequest command (see Section 11.17.6.5,
“CSRRequest Command”). The CSRRequest command will cause the generation of a new operational key pair at the
Commissionee.
8: Commissioner SHALL generate or otherwise obtain an Operational Certificate containing Operational ID after
receiving the CSRResponse command from the Commissionee (see Section 11.17.6.5, “CSRRequest Command”), using
implementation-specific means.
9: Commissioner SHALL install operational credentials (see Figure 38, “Node Operational Credentials flow”) on
the Commissionee using the AddTrustedRootCertificate and AddNOC commands.

#### Returns

`Promise`\<\{ `breadcrumb`: `number` ; `code`: [`CommissioningStepResultCode`](../enums/protocol_export._internal_.CommissioningStepResultCode.md) = CommissioningStepResultCode.Success }\>

#### Defined in

[packages/matter.js/src/protocol/ControllerCommissioner.ts:659](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ControllerCommissioner.ts#L659)

___

### completeCommissioning

▸ **completeCommissioning**(): `Promise`\<\{ `breadcrumb`: `number` ; `code`: [`CommissioningStepResultCode`](../enums/protocol_export._internal_.CommissioningStepResultCode.md) = CommissioningStepResultCode.Success }\>

Step 15
The Administrator having established a CASE session with the Commissionee over the operational network in the
previous steps SHALL invoke the CommissioningComplete command (see Section 11.9.6.6,
“CommissioningComplete Command”). A success response after invocation of the CommissioningComplete command ends
the commissioning process.

#### Returns

`Promise`\<\{ `breadcrumb`: `number` ; `code`: [`CommissioningStepResultCode`](../enums/protocol_export._internal_.CommissioningStepResultCode.md) = CommissioningStepResultCode.Success }\>

#### Defined in

[packages/matter.js/src/protocol/ControllerCommissioner.ts:1077](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ControllerCommissioner.ts#L1077)

___

### configureAccessControlLists

▸ **configureAccessControlLists**(): `Promise`\<\{ `breadcrumb`: `number` ; `code`: [`CommissioningStepResultCode`](../enums/protocol_export._internal_.CommissioningStepResultCode.md) = CommissioningStepResultCode.Skipped }\>

Step 10
Commissioner MAY configure the Access Control List (see Access Control Cluster) on the Commissionee in any way
it sees fit, if the singular entry added by the AddNOC command in the previous step granting Administer
privilege over CASE authentication type for the Node ID provided with the command is not sufficient to express
its desired access control policies.

#### Returns

`Promise`\<\{ `breadcrumb`: `number` ; `code`: [`CommissioningStepResultCode`](../enums/protocol_export._internal_.CommissioningStepResultCode.md) = CommissioningStepResultCode.Skipped }\>

#### Defined in

[packages/matter.js/src/protocol/ControllerCommissioner.ts:712](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ControllerCommissioner.ts#L712)

___

### configureNetworkThread

▸ **configureNetworkThread**(): `Promise`\<\{ `breadcrumb`: `number` ; `code`: [`CommissioningStepResultCode`](../enums/protocol_export._internal_.CommissioningStepResultCode.md) = CommissioningStepResultCode.Skipped }\>

#### Returns

`Promise`\<\{ `breadcrumb`: `number` ; `code`: [`CommissioningStepResultCode`](../enums/protocol_export._internal_.CommissioningStepResultCode.md) = CommissioningStepResultCode.Skipped }\>

#### Defined in

[packages/matter.js/src/protocol/ControllerCommissioner.ts:901](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ControllerCommissioner.ts#L901)

___

### configureNetworkWifi

▸ **configureNetworkWifi**(): `Promise`\<\{ `breadcrumb`: `number` ; `code`: [`CommissioningStepResultCode`](../enums/protocol_export._internal_.CommissioningStepResultCode.md) = CommissioningStepResultCode.Skipped }\>

#### Returns

`Promise`\<\{ `breadcrumb`: `number` ; `code`: [`CommissioningStepResultCode`](../enums/protocol_export._internal_.CommissioningStepResultCode.md) = CommissioningStepResultCode.Skipped }\>

#### Defined in

[packages/matter.js/src/protocol/ControllerCommissioner.ts:768](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ControllerCommissioner.ts#L768)

___

### configureRegulatoryInformation

▸ **configureRegulatoryInformation**(): `Promise`\<\{ `breadcrumb`: `number` ; `code`: [`CommissioningStepResultCode`](../enums/protocol_export._internal_.CommissioningStepResultCode.md) = CommissioningStepResultCode.Success }\>

Step 5 - 1
Commissioner SHALL configure regulatory information in the Commissionee if it has at least one instance of
Network Commissioning cluster on any endpoint with either the WI (i.e. Wi-Fi) or TH (i.e. Thread) feature flags
set in its FeatureMap.
The regulatory information is configured using SetRegulatoryConfig (see Section 11.9.6.4,
“SetRegulatoryConfig Command”).

#### Returns

`Promise`\<\{ `breadcrumb`: `number` ; `code`: [`CommissioningStepResultCode`](../enums/protocol_export._internal_.CommissioningStepResultCode.md) = CommissioningStepResultCode.Success }\>

#### Defined in

[packages/matter.js/src/protocol/ControllerCommissioner.ts:515](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ControllerCommissioner.ts#L515)

___

### deviceAttestation

▸ **deviceAttestation**(): `Promise`\<\{ `breadcrumb`: `number` ; `code`: [`CommissioningStepResultCode`](../enums/protocol_export._internal_.CommissioningStepResultCode.md) = CommissioningStepResultCode.Success }\>

Step 6
Commissioner SHALL establish the authenticity of the Commissionee as a certified Matter device (see Section
6.2.3, “Device Attestation Procedure”).

#### Returns

`Promise`\<\{ `breadcrumb`: `number` ; `code`: [`CommissioningStepResultCode`](../enums/protocol_export._internal_.CommissioningStepResultCode.md) = CommissioningStepResultCode.Success }\>

#### Defined in

[packages/matter.js/src/protocol/ControllerCommissioner.ts:606](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ControllerCommissioner.ts#L606)

___

### ensureGeneralCommissioningSuccess

▸ **ensureGeneralCommissioningSuccess**(`context`, `«destructured»`): `void`

Helper method to check for errorCode/debugTest responses and throw error on failure

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `string` |
| `«destructured»` | [`CommissioningSuccessFailureResponse`](../modules/protocol_export._internal_.md#commissioningsuccessfailureresponse) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/ControllerCommissioner.ts:386](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ControllerCommissioner.ts#L386)

___

### ensureOperationalCredentialsSuccess

▸ **ensureOperationalCredentialsSuccess**(`context`, `«destructured»`): `void`

Helper method to check for errorCode/debugTest responses and throw error on failure

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `string` |
| `«destructured»` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `fabricIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `statusCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NodeOperationalCertStatus`](../enums/cluster_export.OperationalCredentials.NodeOperationalCertStatus.md)\>  }\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/ControllerCommissioner.ts:367](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ControllerCommissioner.ts#L367)

___

### executeCommissioning

▸ **executeCommissioning**(): `Promise`\<`void`\>

Execute the commissioning process in the defined order. The steps are sorted before execution based on the step
number and sub step number.
If >50% of the failsafe time has passed, the failsafe timer is re-armed (50% of 60s default are 30s and each
action is allowed to take 30s at minimum based on specs).

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/protocol/ControllerCommissioner.ts:280](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ControllerCommissioner.ts#L280)

___

### getClusterClient

▸ **getClusterClient**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`, `endpointId?`, `isFeatureSpecific?`): [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)\<`F`, `A`, `C`, `E`\>

Helper method to create ClusterClients. If not feature specific and for the Root Endpoint they are also reused.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<`F`\> |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster_export.Commands.md) |
| `E` | extends [`Events`](../interfaces/cluster_export.Events.md) |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `cluster` | [`Cluster`](../interfaces/cluster_export.Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> | `undefined` |
| `endpointId` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) | `undefined` |
| `isFeatureSpecific` | `boolean` | `false` |

#### Returns

[`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)\<`F`, `A`, `C`, `E`\>

#### Defined in

[packages/matter.js/src/protocol/ControllerCommissioner.ts:155](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ControllerCommissioner.ts#L155)

___

### getCommissioningStepResult

▸ **getCommissioningStepResult**(`stepNumber`, `subStepNumber`): `undefined` \| [`CommissioningStepResult`](../modules/protocol_export._internal_.md#commissioningstepresult)

#### Parameters

| Name | Type |
| :------ | :------ |
| `stepNumber` | `number` |
| `subStepNumber` | `number` |

#### Returns

`undefined` \| [`CommissioningStepResult`](../modules/protocol_export._internal_.md#commissioningstepresult)

#### Defined in

[packages/matter.js/src/protocol/ControllerCommissioner.ts:362](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ControllerCommissioner.ts#L362)

___

### getInitialData

▸ **getInitialData**(): `Promise`\<\{ `breadcrumb`: `number` ; `code`: [`CommissioningStepResultCode`](../enums/protocol_export._internal_.CommissioningStepResultCode.md) = CommissioningStepResultCode.Success }\>

Initial Step to receive some common data used by other steps

#### Returns

`Promise`\<\{ `breadcrumb`: `number` ; `code`: [`CommissioningStepResultCode`](../enums/protocol_export._internal_.CommissioningStepResultCode.md) = CommissioningStepResultCode.Success }\>

#### Defined in

[packages/matter.js/src/protocol/ControllerCommissioner.ts:399](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ControllerCommissioner.ts#L399)

___

### initializeCommissioningSteps

▸ **initializeCommissioningSteps**(): `void`

Initialize commissioning steps and add them in the default order

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/ControllerCommissioner.ts:186](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ControllerCommissioner.ts#L186)

___

### reconnectWithDevice

▸ **reconnectWithDevice**(): `Promise`\<\{ `breadcrumb`: `number` ; `code`: [`CommissioningStepResultCode`](../enums/protocol_export._internal_.CommissioningStepResultCode.md) = CommissioningStepResultCode.Success }\>

Step 13-14
13: Finalization of the Commissioning process begins. An Administrator configured in the ACL of the Commissionee
by the Commissioner SHALL use Operational Discovery to discover the Commissionee. This Administrator MAY be
the Commissioner itself, or another Node to which the Commissioner has delegated the task.
14: The Administrator SHALL open a CASE (see Section 4.13.2, “Certificate Authenticated Session Establishment
(CASE)”) session with the Commissionee over the operational network.

#### Returns

`Promise`\<\{ `breadcrumb`: `number` ; `code`: [`CommissioningStepResultCode`](../enums/protocol_export._internal_.CommissioningStepResultCode.md) = CommissioningStepResultCode.Success }\>

#### Defined in

[packages/matter.js/src/protocol/ControllerCommissioner.ts:1058](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ControllerCommissioner.ts#L1058)

___

### resetFailsafeTimer

▸ **resetFailsafeTimer**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/protocol/ControllerCommissioner.ts:495](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ControllerCommissioner.ts#L495)

___

### setCommissioningStepResult

▸ **setCommissioningStepResult**(`step`, `result`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `step` | [`CommissioningStep`](../modules/protocol_export._internal_.md#commissioningstep) |
| `result` | [`CommissioningStepResult`](../modules/protocol_export._internal_.md#commissioningstepresult) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/ControllerCommissioner.ts:358](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ControllerCommissioner.ts#L358)

___

### sortSteps

▸ **sortSteps**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/ControllerCommissioner.ts:351](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ControllerCommissioner.ts#L351)

___

### synchronizeTime

▸ **synchronizeTime**(): `Promise`\<\{ `breadcrumb`: `number` ; `code`: [`CommissioningStepResultCode`](../enums/protocol_export._internal_.CommissioningStepResultCode.md) = CommissioningStepResultCode.Skipped }\>

Step 5 - 2
Commissioner SHOULD configure UTC time, timezone, and DST offset, if the Commissionee supports the time cluster.
The order of configuration of this information is not critical. The UTC time is configured using SetUtcTime
command (see Section 11.16.9.1, “SetUtcTime Command”) while timezone and DST offset are set through TimeZone
(see Section 11.16.8.6, “TimeZone Attribute”) and DstOffset attribute (see Section 11.16.8.7,
“DSTOffset Attribute”), respectively.

#### Returns

`Promise`\<\{ `breadcrumb`: `number` ; `code`: [`CommissioningStepResultCode`](../enums/protocol_export._internal_.CommissioningStepResultCode.md) = CommissioningStepResultCode.Skipped }\>

#### Defined in

[packages/matter.js/src/protocol/ControllerCommissioner.ts:587](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ControllerCommissioner.ts#L587)

___

### validateNetwork

▸ **validateNetwork**(): `Promise`\<\{ `breadcrumb`: `number` ; `code`: [`CommissioningStepResultCode`](../enums/protocol_export._internal_.CommissioningStepResultCode.md) = CommissioningStepResultCode.Success }\>

Step 11-12
11: If the Commissionee both supports it and requires it, the Commissioner SHALL configure the operational network
at the Commissionee using commands such as AddOrUpdateWiFiNetwork (see Section 11.8.7.3, “AddOrUpdateWiFiNetwork
Command”) and AddOrUpdateThreadNetwork (see Section 11.8.7.4, “AddOrUpdateThreadNetwork Command”).
A Commissionee requires network commissioning if it is not already on the desired operational network.
A Commissionee supports network commissioning if it has any NetworkCommissioning cluster instances.
A Commissioner MAY learn about the networks visible to the Commissionee using ScanNetworks command
(see Section 11.8.7.1, “ScanNetworks Command”).
12: The Commissioner SHALL trigger the Commissionee to connect to the operational network using ConnectNetwork
command (see Section 11.8.7.9, “ConnectNetwork Command”) unless the Commissionee is already on the desired operational network.

#### Returns

`Promise`\<\{ `breadcrumb`: `number` ; `code`: [`CommissioningStepResultCode`](../enums/protocol_export._internal_.CommissioningStepResultCode.md) = CommissioningStepResultCode.Success }\>

#### Defined in

[packages/matter.js/src/protocol/ControllerCommissioner.ts:733](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ControllerCommissioner.ts#L733)
