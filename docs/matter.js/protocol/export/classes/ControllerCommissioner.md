[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [protocol/export](../README.md) / ControllerCommissioner

# Class: ControllerCommissioner

Class to abstract the Device commission flow in a step wise way as defined in Specs. The specs are not 100%

## Constructors

### new ControllerCommissioner()

> **new ControllerCommissioner**(`interactionClient`, `certificateManager`, `fabric`, `commissioningOptions`, `nodeId`, `adminVendorId`, `reconnectWithDeviceCallback`): [`ControllerCommissioner`](ControllerCommissioner.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `interactionClient` | [`InteractionClient`](../../interaction/export/classes/InteractionClient.md) |
| `certificateManager` | [`RootCertificateManager`](../../../certificate/export/classes/RootCertificateManager.md) |
| `fabric` | [`Fabric`](../../../fabric/export/classes/Fabric.md) |
| `commissioningOptions` | [`CommissioningOptions`](../README.md#commissioningoptions) |
| `nodeId` | [`NodeId`](../../../datatype/export/README.md#nodeid) |
| `adminVendorId` | [`VendorId`](../../../datatype/export/README.md#vendorid) |
| `reconnectWithDeviceCallback` | () => `Promise`\<[`InteractionClient`](../../interaction/export/classes/InteractionClient.md)\> |

#### Returns

[`ControllerCommissioner`](ControllerCommissioner.md)

#### Source

[packages/matter.js/src/protocol/ControllerCommissioner.ts:139](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ControllerCommissioner.ts#L139)

## Properties

### adminVendorId

> `private` `readonly` **adminVendorId**: [`VendorId`](../../../datatype/export/README.md#vendorid)

#### Source

[packages/matter.js/src/protocol/ControllerCommissioner.ts:145](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ControllerCommissioner.ts#L145)

***

### certificateManager

> `private` `readonly` **certificateManager**: [`RootCertificateManager`](../../../certificate/export/classes/RootCertificateManager.md)

#### Source

[packages/matter.js/src/protocol/ControllerCommissioner.ts:141](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ControllerCommissioner.ts#L141)

***

### clusterClients

> `private` `readonly` **clusterClients**: `Map`\<[`ClusterId`](../../../datatype/export/README.md#clusterid), [`ClusterClientObj`](../../../cluster/export/README.md#clusterclientobjface)\<`any`, [`Attributes`](../../../cluster/export/interfaces/Attributes.md), [`Commands`](../../../cluster/export/interfaces/Commands.md), [`Events`](../../../cluster/export/interfaces/Events.md)\>\>

#### Source

[packages/matter.js/src/protocol/ControllerCommissioner.ts:131](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ControllerCommissioner.ts#L131)

***

### collectedCommissioningData

> `private` **collectedCommissioningData**: [`CollectedCommissioningData`](../-internal-/README.md#collectedcommissioningdata) = `{}`

#### Source

[packages/matter.js/src/protocol/ControllerCommissioner.ts:136](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ControllerCommissioner.ts#L136)

***

### commissioningExpiryTime

> `private` **commissioningExpiryTime**: `undefined` \| `number`

#### Source

[packages/matter.js/src/protocol/ControllerCommissioner.ts:133](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ControllerCommissioner.ts#L133)

***

### commissioningOptions

> `private` `readonly` **commissioningOptions**: [`CommissioningOptions`](../README.md#commissioningoptions)

#### Source

[packages/matter.js/src/protocol/ControllerCommissioner.ts:143](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ControllerCommissioner.ts#L143)

***

### commissioningStartedTime

> `private` **commissioningStartedTime**: `undefined` \| `number`

#### Source

[packages/matter.js/src/protocol/ControllerCommissioner.ts:132](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ControllerCommissioner.ts#L132)

***

### commissioningStepResults

> `private` `readonly` **commissioningStepResults**: `Map`\<`string`, [`CommissioningStepResult`](../-internal-/README.md#commissioningstepresult)\>

#### Source

[packages/matter.js/src/protocol/ControllerCommissioner.ts:130](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ControllerCommissioner.ts#L130)

***

### commissioningSteps

> `private` `readonly` **commissioningSteps**: [`CommissioningStep`](../-internal-/README.md#commissioningstep)[]

#### Source

[packages/matter.js/src/protocol/ControllerCommissioner.ts:129](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ControllerCommissioner.ts#L129)

***

### fabric

> `private` `readonly` **fabric**: [`Fabric`](../../../fabric/export/classes/Fabric.md)

#### Source

[packages/matter.js/src/protocol/ControllerCommissioner.ts:142](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ControllerCommissioner.ts#L142)

***

### failSafeTimeMs

> `private` **failSafeTimeMs**: `number` = `DEFAULT_FAILSAFE_TIME_MS`

#### Source

[packages/matter.js/src/protocol/ControllerCommissioner.ts:137](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ControllerCommissioner.ts#L137)

***

### interactionClient

> `private` **interactionClient**: [`InteractionClient`](../../interaction/export/classes/InteractionClient.md)

#### Source

[packages/matter.js/src/protocol/ControllerCommissioner.ts:140](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ControllerCommissioner.ts#L140)

***

### lastBreadcrumb

> `private` **lastBreadcrumb**: `number` = `1`

#### Source

[packages/matter.js/src/protocol/ControllerCommissioner.ts:135](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ControllerCommissioner.ts#L135)

***

### lastFailSafeTime

> `private` **lastFailSafeTime**: `undefined` \| `number`

#### Source

[packages/matter.js/src/protocol/ControllerCommissioner.ts:134](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ControllerCommissioner.ts#L134)

***

### nodeId

> `private` `readonly` **nodeId**: [`NodeId`](../../../datatype/export/README.md#nodeid)

#### Source

[packages/matter.js/src/protocol/ControllerCommissioner.ts:144](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ControllerCommissioner.ts#L144)

***

### reconnectWithDeviceCallback()

> `private` `readonly` **reconnectWithDeviceCallback**: () => `Promise`\<[`InteractionClient`](../../interaction/export/classes/InteractionClient.md)\>

#### Returns

`Promise`\<[`InteractionClient`](../../interaction/export/classes/InteractionClient.md)\>

#### Source

[packages/matter.js/src/protocol/ControllerCommissioner.ts:146](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ControllerCommissioner.ts#L146)

## Methods

### armFailsafe()

> `private` **armFailsafe**(): `Promise`\<`object`\>

Step 3
Upon completion of PASE session establishment, the Commissionee SHALL autonomously arm the Fail-safe timer for a
timeout of 60 seconds. This is to guard against the Commissioner aborting the Commissioning process without
arming the fail-safe, which may leave the device unable to accept additional connections.
A Commissioner MAY obtain device information including guidance on the fail-safe value from the Commissionee by
reading BasicCommissioningInfo attribute (see Section 11.9.5.2, “BasicCommissioningInfo Attribute”) prior to
invoking the ArmFailSafe command.

#### Returns

`Promise`\<`object`\>

##### breadcrumb

> **breadcrumb**: `number`

##### code

> **code**: [`CommissioningStepResultCode`](../-internal-/enumerations/CommissioningStepResultCode.md) = `CommissioningStepResultCode.Success`

#### Source

[packages/matter.js/src/protocol/ControllerCommissioner.ts:471](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ControllerCommissioner.ts#L471)

***

### certificates()

> `private` **certificates**(): `Promise`\<`object`\>

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

`Promise`\<`object`\>

##### breadcrumb

> **breadcrumb**: `number`

##### code

> **code**: [`CommissioningStepResultCode`](../-internal-/enumerations/CommissioningStepResultCode.md) = `CommissioningStepResultCode.Success`

#### Source

[packages/matter.js/src/protocol/ControllerCommissioner.ts:659](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ControllerCommissioner.ts#L659)

***

### completeCommissioning()

> `private` **completeCommissioning**(): `Promise`\<`object`\>

Step 15
The Administrator having established a CASE session with the Commissionee over the operational network in the
previous steps SHALL invoke the CommissioningComplete command (see Section 11.9.6.6,
“CommissioningComplete Command”). A success response after invocation of the CommissioningComplete command ends
the commissioning process.

#### Returns

`Promise`\<`object`\>

##### breadcrumb

> **breadcrumb**: `number`

##### code

> **code**: [`CommissioningStepResultCode`](../-internal-/enumerations/CommissioningStepResultCode.md) = `CommissioningStepResultCode.Success`

#### Source

[packages/matter.js/src/protocol/ControllerCommissioner.ts:1077](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ControllerCommissioner.ts#L1077)

***

### configureAccessControlLists()

> `private` **configureAccessControlLists**(): `Promise`\<`object`\>

Step 10
Commissioner MAY configure the Access Control List (see Access Control Cluster) on the Commissionee in any way
it sees fit, if the singular entry added by the AddNOC command in the previous step granting Administer
privilege over CASE authentication type for the Node ID provided with the command is not sufficient to express
its desired access control policies.

#### Returns

`Promise`\<`object`\>

##### breadcrumb

> **breadcrumb**: `number`

##### code

> **code**: [`CommissioningStepResultCode`](../-internal-/enumerations/CommissioningStepResultCode.md) = `CommissioningStepResultCode.Skipped`

#### Source

[packages/matter.js/src/protocol/ControllerCommissioner.ts:712](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ControllerCommissioner.ts#L712)

***

### configureNetworkThread()

> `private` **configureNetworkThread**(): `Promise`\<`object`\>

#### Returns

`Promise`\<`object`\>

##### breadcrumb

> **breadcrumb**: `number`

##### code

> **code**: [`CommissioningStepResultCode`](../-internal-/enumerations/CommissioningStepResultCode.md) = `CommissioningStepResultCode.Skipped`

#### Source

[packages/matter.js/src/protocol/ControllerCommissioner.ts:901](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ControllerCommissioner.ts#L901)

***

### configureNetworkWifi()

> `private` **configureNetworkWifi**(): `Promise`\<`object`\>

#### Returns

`Promise`\<`object`\>

##### breadcrumb

> **breadcrumb**: `number`

##### code

> **code**: [`CommissioningStepResultCode`](../-internal-/enumerations/CommissioningStepResultCode.md) = `CommissioningStepResultCode.Skipped`

#### Source

[packages/matter.js/src/protocol/ControllerCommissioner.ts:768](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ControllerCommissioner.ts#L768)

***

### configureRegulatoryInformation()

> `private` **configureRegulatoryInformation**(): `Promise`\<`object`\>

Step 5 - 1
Commissioner SHALL configure regulatory information in the Commissionee if it has at least one instance of
Network Commissioning cluster on any endpoint with either the WI (i.e. Wi-Fi) or TH (i.e. Thread) feature flags
set in its FeatureMap.
The regulatory information is configured using SetRegulatoryConfig (see Section 11.9.6.4,
“SetRegulatoryConfig Command”).

#### Returns

`Promise`\<`object`\>

##### breadcrumb

> **breadcrumb**: `number`

##### code

> **code**: [`CommissioningStepResultCode`](../-internal-/enumerations/CommissioningStepResultCode.md) = `CommissioningStepResultCode.Success`

#### Source

[packages/matter.js/src/protocol/ControllerCommissioner.ts:515](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ControllerCommissioner.ts#L515)

***

### deviceAttestation()

> `private` **deviceAttestation**(): `Promise`\<`object`\>

Step 6
Commissioner SHALL establish the authenticity of the Commissionee as a certified Matter device (see Section
6.2.3, “Device Attestation Procedure”).

#### Returns

`Promise`\<`object`\>

##### breadcrumb

> **breadcrumb**: `number`

##### code

> **code**: [`CommissioningStepResultCode`](../-internal-/enumerations/CommissioningStepResultCode.md) = `CommissioningStepResultCode.Success`

#### Source

[packages/matter.js/src/protocol/ControllerCommissioner.ts:606](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ControllerCommissioner.ts#L606)

***

### ensureGeneralCommissioningSuccess()

> `private` **ensureGeneralCommissioningSuccess**(`context`, `__namedParameters`): `void`

Helper method to check for errorCode/debugTest responses and throw error on failure

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `context` | `string` |
| `__namedParameters` | [`CommissioningSuccessFailureResponse`](../-internal-/README.md#commissioningsuccessfailureresponse) |

#### Returns

`void`

#### Source

[packages/matter.js/src/protocol/ControllerCommissioner.ts:386](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ControllerCommissioner.ts#L386)

***

### ensureOperationalCredentialsSuccess()

> `private` **ensureOperationalCredentialsSuccess**(`context`, `__namedParameters`): `void`

Helper method to check for errorCode/debugTest responses and throw error on failure

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `context` | `string` |
| `__namedParameters` | [`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

`void`

#### Source

[packages/matter.js/src/protocol/ControllerCommissioner.ts:367](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ControllerCommissioner.ts#L367)

***

### executeCommissioning()

> **executeCommissioning**(): `Promise`\<`void`\>

Execute the commissioning process in the defined order. The steps are sorted before execution based on the step
number and sub step number.
If >50% of the failsafe time has passed, the failsafe timer is re-armed (50% of 60s default are 30s and each
action is allowed to take 30s at minimum based on specs).

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/protocol/ControllerCommissioner.ts:280](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ControllerCommissioner.ts#L280)

***

### getClusterClient()

> `private` **getClusterClient**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`, `endpointId`, `isFeatureSpecific`): [`ClusterClientObj`](../../../cluster/export/README.md#clusterclientobjface)\<`F`, `A`, `C`, `E`\>

Helper method to create ClusterClients. If not feature specific and for the Root Endpoint they are also reused.

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../../schema/export/README.md#bitschema) |
| `SF` *extends* [`TypeFromPartialBitSchema`](../../../schema/export/README.md#typefrompartialbitschemat)\<`F`\> |
| `A` *extends* [`Attributes`](../../../cluster/export/interfaces/Attributes.md) |
| `C` *extends* [`Commands`](../../../cluster/export/interfaces/Commands.md) |
| `E` *extends* [`Events`](../../../cluster/export/interfaces/Events.md) |

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `cluster` | [`Cluster`](../../../cluster/export/interfaces/Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> | `undefined` |
| `endpointId` | [`EndpointNumber`](../../../datatype/export/README.md#endpointnumber) | `undefined` |
| `isFeatureSpecific` | `boolean` | `false` |

#### Returns

[`ClusterClientObj`](../../../cluster/export/README.md#clusterclientobjface)\<`F`, `A`, `C`, `E`\>

#### Source

[packages/matter.js/src/protocol/ControllerCommissioner.ts:155](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ControllerCommissioner.ts#L155)

***

### getCommissioningStepResult()

> **getCommissioningStepResult**(`stepNumber`, `subStepNumber`): `undefined` \| [`CommissioningStepResult`](../-internal-/README.md#commissioningstepresult)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `stepNumber` | `number` |
| `subStepNumber` | `number` |

#### Returns

`undefined` \| [`CommissioningStepResult`](../-internal-/README.md#commissioningstepresult)

#### Source

[packages/matter.js/src/protocol/ControllerCommissioner.ts:362](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ControllerCommissioner.ts#L362)

***

### getInitialData()

> `private` **getInitialData**(): `Promise`\<`object`\>

Initial Step to receive some common data used by other steps

#### Returns

`Promise`\<`object`\>

##### breadcrumb

> **breadcrumb**: `number`

##### code

> **code**: [`CommissioningStepResultCode`](../-internal-/enumerations/CommissioningStepResultCode.md) = `CommissioningStepResultCode.Success`

#### Source

[packages/matter.js/src/protocol/ControllerCommissioner.ts:399](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ControllerCommissioner.ts#L399)

***

### initializeCommissioningSteps()

> `private` **initializeCommissioningSteps**(): `void`

Initialize commissioning steps and add them in the default order

#### Returns

`void`

#### Source

[packages/matter.js/src/protocol/ControllerCommissioner.ts:186](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ControllerCommissioner.ts#L186)

***

### reconnectWithDevice()

> `private` **reconnectWithDevice**(): `Promise`\<`object`\>

Step 13-14
13: Finalization of the Commissioning process begins. An Administrator configured in the ACL of the Commissionee
by the Commissioner SHALL use Operational Discovery to discover the Commissionee. This Administrator MAY be
the Commissioner itself, or another Node to which the Commissioner has delegated the task.
14: The Administrator SHALL open a CASE (see Section 4.13.2, “Certificate Authenticated Session Establishment
(CASE)”) session with the Commissionee over the operational network.

#### Returns

`Promise`\<`object`\>

##### breadcrumb

> **breadcrumb**: `number`

##### code

> **code**: [`CommissioningStepResultCode`](../-internal-/enumerations/CommissioningStepResultCode.md) = `CommissioningStepResultCode.Success`

#### Source

[packages/matter.js/src/protocol/ControllerCommissioner.ts:1058](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ControllerCommissioner.ts#L1058)

***

### resetFailsafeTimer()

> `private` **resetFailsafeTimer**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/protocol/ControllerCommissioner.ts:495](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ControllerCommissioner.ts#L495)

***

### setCommissioningStepResult()

> `private` **setCommissioningStepResult**(`step`, `result`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `step` | [`CommissioningStep`](../-internal-/README.md#commissioningstep) |
| `result` | [`CommissioningStepResult`](../-internal-/README.md#commissioningstepresult) |

#### Returns

`void`

#### Source

[packages/matter.js/src/protocol/ControllerCommissioner.ts:358](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ControllerCommissioner.ts#L358)

***

### sortSteps()

> `private` **sortSteps**(): `void`

#### Returns

`void`

#### Source

[packages/matter.js/src/protocol/ControllerCommissioner.ts:351](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ControllerCommissioner.ts#L351)

***

### synchronizeTime()

> `private` **synchronizeTime**(): `Promise`\<`object`\>

Step 5 - 2
Commissioner SHOULD configure UTC time, timezone, and DST offset, if the Commissionee supports the time cluster.
The order of configuration of this information is not critical. The UTC time is configured using SetUtcTime
command (see Section 11.16.9.1, “SetUtcTime Command”) while timezone and DST offset are set through TimeZone
(see Section 11.16.8.6, “TimeZone Attribute”) and DstOffset attribute (see Section 11.16.8.7,
“DSTOffset Attribute”), respectively.

#### Returns

`Promise`\<`object`\>

##### breadcrumb

> **breadcrumb**: `number`

##### code

> **code**: [`CommissioningStepResultCode`](../-internal-/enumerations/CommissioningStepResultCode.md) = `CommissioningStepResultCode.Skipped`

#### Source

[packages/matter.js/src/protocol/ControllerCommissioner.ts:587](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ControllerCommissioner.ts#L587)

***

### validateNetwork()

> `private` **validateNetwork**(): `Promise`\<`object`\>

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

`Promise`\<`object`\>

##### breadcrumb

> **breadcrumb**: `number`

##### code

> **code**: [`CommissioningStepResultCode`](../-internal-/enumerations/CommissioningStepResultCode.md) = `CommissioningStepResultCode.Success`

#### Source

[packages/matter.js/src/protocol/ControllerCommissioner.ts:733](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ControllerCommissioner.ts#L733)
