[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/protocol](../README.md) / ControllerCommissioner

# Class: ControllerCommissioner

Class to abstract the Device commission flow in a step wise way as defined in Specs. The specs are not 100%

## Constructors

### new ControllerCommissioner()

> **new ControllerCommissioner**(`interactionClient`, `certificateManager`, `fabric`, `commissioningOptions`, `nodeId`, `adminVendorId`, `reconnectWithDeviceCallback`): [`ControllerCommissioner`](ControllerCommissioner.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `interactionClient` | [`InteractionClient`](../../interaction/classes/InteractionClient.md) |
| `certificateManager` | [`RootCertificateManager`](../../certificate/classes/RootCertificateManager.md) |
| `fabric` | [`Fabric`](../../fabric/classes/Fabric.md) |
| `commissioningOptions` | [`CommissioningOptions`](../README.md#commissioningoptions) |
| `nodeId` | [`NodeId`](../../datatype/README.md#nodeid) |
| `adminVendorId` | [`VendorId`](../../datatype/README.md#vendorid) |
| `reconnectWithDeviceCallback` | () => `Promise`\<[`InteractionClient`](../../interaction/classes/InteractionClient.md)\> |

#### Returns

[`ControllerCommissioner`](ControllerCommissioner.md)

#### Source

packages/matter.js/dist/esm/protocol/ControllerCommissioner.d.ts:70

## Properties

### adminVendorId

> `private` `readonly` **adminVendorId**: `any`

#### Source

packages/matter.js/dist/esm/protocol/ControllerCommissioner.d.ts:59

***

### armFailsafe

> `private` **armFailsafe**: `any`

Step 3
Upon completion of PASE session establishment, the Commissionee SHALL autonomously arm the Fail-safe timer for a
timeout of 60 seconds. This is to guard against the Commissioner aborting the Commissioning process without
arming the fail-safe, which may leave the device unable to accept additional connections.
A Commissioner MAY obtain device information including guidance on the fail-safe value from the Commissionee by
reading BasicCommissioningInfo attribute (see Section 11.9.5.2, “BasicCommissioningInfo Attribute”) prior to
invoking the ArmFailSafe command.

#### Source

packages/matter.js/dist/esm/protocol/ControllerCommissioner.d.ts:106

***

### certificateManager

> `private` `readonly` **certificateManager**: `any`

#### Source

packages/matter.js/dist/esm/protocol/ControllerCommissioner.d.ts:55

***

### certificates

> `private` **certificates**: `any`

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

#### Source

packages/matter.js/dist/esm/protocol/ControllerCommissioner.d.ts:144

***

### clusterClients

> `private` `readonly` **clusterClients**: `any`

#### Source

packages/matter.js/dist/esm/protocol/ControllerCommissioner.d.ts:63

***

### collectedCommissioningData

> `private` **collectedCommissioningData**: `any`

#### Source

packages/matter.js/dist/esm/protocol/ControllerCommissioner.d.ts:68

***

### commissioningExpiryTime

> `private` **commissioningExpiryTime**: `any`

#### Source

packages/matter.js/dist/esm/protocol/ControllerCommissioner.d.ts:65

***

### commissioningOptions

> `private` `readonly` **commissioningOptions**: `any`

#### Source

packages/matter.js/dist/esm/protocol/ControllerCommissioner.d.ts:57

***

### commissioningStartedTime

> `private` **commissioningStartedTime**: `any`

#### Source

packages/matter.js/dist/esm/protocol/ControllerCommissioner.d.ts:64

***

### commissioningStepResults

> `private` `readonly` **commissioningStepResults**: `any`

#### Source

packages/matter.js/dist/esm/protocol/ControllerCommissioner.d.ts:62

***

### commissioningSteps

> `private` `readonly` **commissioningSteps**: `any`

#### Source

packages/matter.js/dist/esm/protocol/ControllerCommissioner.d.ts:61

***

### completeCommissioning

> `private` **completeCommissioning**: `any`

Step 15
The Administrator having established a CASE session with the Commissionee over the operational network in the
previous steps SHALL invoke the CommissioningComplete command (see Section 11.9.6.6,
“CommissioningComplete Command”). A success response after invocation of the CommissioningComplete command ends
the commissioning process.

#### Source

packages/matter.js/dist/esm/protocol/ControllerCommissioner.d.ts:185

***

### configureAccessControlLists

> `private` **configureAccessControlLists**: `any`

Step 10
Commissioner MAY configure the Access Control List (see Access Control Cluster) on the Commissionee in any way
it sees fit, if the singular entry added by the AddNOC command in the previous step granting Administer
privilege over CASE authentication type for the Node ID provided with the command is not sufficient to express
its desired access control policies.

#### Source

packages/matter.js/dist/esm/protocol/ControllerCommissioner.d.ts:152

***

### configureNetworkThread

> `private` **configureNetworkThread**: `any`

#### Source

packages/matter.js/dist/esm/protocol/ControllerCommissioner.d.ts:167

***

### configureNetworkWifi

> `private` **configureNetworkWifi**: `any`

#### Source

packages/matter.js/dist/esm/protocol/ControllerCommissioner.d.ts:166

***

### configureRegulatoryInformation

> `private` **configureRegulatoryInformation**: `any`

Step 5 - 1
Commissioner SHALL configure regulatory information in the Commissionee if it has at least one instance of
Network Commissioning cluster on any endpoint with either the WI (i.e. Wi-Fi) or TH (i.e. Thread) feature flags
set in its FeatureMap.
The regulatory information is configured using SetRegulatoryConfig (see Section 11.9.6.4,
“SetRegulatoryConfig Command”).

#### Source

packages/matter.js/dist/esm/protocol/ControllerCommissioner.d.ts:116

***

### deviceAttestation

> `private` **deviceAttestation**: `any`

Step 6
Commissioner SHALL establish the authenticity of the Commissionee as a certified Matter device (see Section
6.2.3, “Device Attestation Procedure”).

#### Source

packages/matter.js/dist/esm/protocol/ControllerCommissioner.d.ts:131

***

### ensureGeneralCommissioningSuccess

> `private` **ensureGeneralCommissioningSuccess**: `any`

Helper method to check for errorCode/debugTest responses and throw error on failure

#### Source

packages/matter.js/dist/esm/protocol/ControllerCommissioner.d.ts:92

***

### ensureOperationalCredentialsSuccess

> `private` **ensureOperationalCredentialsSuccess**: `any`

Helper method to check for errorCode/debugTest responses and throw error on failure

#### Source

packages/matter.js/dist/esm/protocol/ControllerCommissioner.d.ts:90

***

### fabric

> `private` `readonly` **fabric**: `any`

#### Source

packages/matter.js/dist/esm/protocol/ControllerCommissioner.d.ts:56

***

### failSafeTimeMs

> `private` **failSafeTimeMs**: `any`

#### Source

packages/matter.js/dist/esm/protocol/ControllerCommissioner.d.ts:69

***

### getClusterClient

> `private` **getClusterClient**: `any`

Helper method to create ClusterClients. If not feature specific and for the Root Endpoint they are also reused.

#### Source

packages/matter.js/dist/esm/protocol/ControllerCommissioner.d.ts:74

***

### getInitialData

> `private` **getInitialData**: `any`

Initial Step to receive some common data used by other steps

#### Source

packages/matter.js/dist/esm/protocol/ControllerCommissioner.d.ts:96

***

### initializeCommissioningSteps

> `private` **initializeCommissioningSteps**: `any`

Initialize commissioning steps and add them in the default order

#### Source

packages/matter.js/dist/esm/protocol/ControllerCommissioner.d.ts:78

***

### interactionClient

> `private` **interactionClient**: `any`

#### Source

packages/matter.js/dist/esm/protocol/ControllerCommissioner.d.ts:54

***

### lastBreadcrumb

> `private` **lastBreadcrumb**: `any`

#### Source

packages/matter.js/dist/esm/protocol/ControllerCommissioner.d.ts:67

***

### lastFailSafeTime

> `private` **lastFailSafeTime**: `any`

#### Source

packages/matter.js/dist/esm/protocol/ControllerCommissioner.d.ts:66

***

### nodeId

> `private` `readonly` **nodeId**: `any`

#### Source

packages/matter.js/dist/esm/protocol/ControllerCommissioner.d.ts:58

***

### reconnectWithDevice

> `private` **reconnectWithDevice**: `any`

Step 13-14
13: Finalization of the Commissioning process begins. An Administrator configured in the ACL of the Commissionee
by the Commissioner SHALL use Operational Discovery to discover the Commissionee. This Administrator MAY be
the Commissioner itself, or another Node to which the Commissioner has delegated the task.
14: The Administrator SHALL open a CASE (see Section 4.13.2, “Certificate Authenticated Session Establishment
(CASE)”) session with the Commissionee over the operational network.

#### Source

packages/matter.js/dist/esm/protocol/ControllerCommissioner.d.ts:177

***

### reconnectWithDeviceCallback

> `private` `readonly` **reconnectWithDeviceCallback**: `any`

#### Source

packages/matter.js/dist/esm/protocol/ControllerCommissioner.d.ts:60

***

### resetFailsafeTimer

> `private` **resetFailsafeTimer**: `any`

#### Source

packages/matter.js/dist/esm/protocol/ControllerCommissioner.d.ts:107

***

### setCommissioningStepResult

> `private` **setCommissioningStepResult**: `any`

#### Source

packages/matter.js/dist/esm/protocol/ControllerCommissioner.d.ts:87

***

### sortSteps

> `private` **sortSteps**: `any`

#### Source

packages/matter.js/dist/esm/protocol/ControllerCommissioner.d.ts:86

***

### synchronizeTime

> `private` **synchronizeTime**: `any`

Step 5 - 2
Commissioner SHOULD configure UTC time, timezone, and DST offset, if the Commissionee supports the time cluster.
The order of configuration of this information is not critical. The UTC time is configured using SetUtcTime
command (see Section 11.16.9.1, “SetUtcTime Command”) while timezone and DST offset are set through TimeZone
(see Section 11.16.8.6, “TimeZone Attribute”) and DstOffset attribute (see Section 11.16.8.7,
“DSTOffset Attribute”), respectively.

#### Source

packages/matter.js/dist/esm/protocol/ControllerCommissioner.d.ts:125

***

### validateNetwork

> `private` **validateNetwork**: `any`

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

#### Source

packages/matter.js/dist/esm/protocol/ControllerCommissioner.d.ts:165

## Methods

### executeCommissioning()

> **executeCommissioning**(): `Promise`\<`void`\>

Execute the commissioning process in the defined order. The steps are sorted before execution based on the step
number and sub step number.
If >50% of the failsafe time has passed, the failsafe timer is re-armed (50% of 60s default are 30s and each
action is allowed to take 30s at minimum based on specs).

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/protocol/ControllerCommissioner.d.ts:85

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

packages/matter.js/dist/esm/protocol/ControllerCommissioner.d.ts:88
