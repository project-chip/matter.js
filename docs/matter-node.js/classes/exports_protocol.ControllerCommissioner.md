[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/protocol](../modules/exports_protocol.md) / ControllerCommissioner

# Class: ControllerCommissioner

[exports/protocol](../modules/exports_protocol.md).ControllerCommissioner

Class to abstract the Device commission flow in a step wise way as defined in Specs. The specs are not 100%

## Table of contents

### Constructors

- [constructor](exports_protocol.ControllerCommissioner.md#constructor)

### Properties

- [armFailsafe](exports_protocol.ControllerCommissioner.md#armfailsafe)
- [certificateManager](exports_protocol.ControllerCommissioner.md#certificatemanager)
- [certificates](exports_protocol.ControllerCommissioner.md#certificates)
- [clusterClients](exports_protocol.ControllerCommissioner.md#clusterclients)
- [collectedCommissioningData](exports_protocol.ControllerCommissioner.md#collectedcommissioningdata)
- [commissioningExpiryTime](exports_protocol.ControllerCommissioner.md#commissioningexpirytime)
- [commissioningOptions](exports_protocol.ControllerCommissioner.md#commissioningoptions)
- [commissioningStartedTime](exports_protocol.ControllerCommissioner.md#commissioningstartedtime)
- [commissioningStepResults](exports_protocol.ControllerCommissioner.md#commissioningstepresults)
- [commissioningSteps](exports_protocol.ControllerCommissioner.md#commissioningsteps)
- [completeCommissioning](exports_protocol.ControllerCommissioner.md#completecommissioning)
- [configureAccessControlLists](exports_protocol.ControllerCommissioner.md#configureaccesscontrollists)
- [configureNetworkThread](exports_protocol.ControllerCommissioner.md#configurenetworkthread)
- [configureNetworkWifi](exports_protocol.ControllerCommissioner.md#configurenetworkwifi)
- [configureRegulatoryInformation](exports_protocol.ControllerCommissioner.md#configureregulatoryinformation)
- [deviceAttestation](exports_protocol.ControllerCommissioner.md#deviceattestation)
- [ensureGeneralCommissioningSuccess](exports_protocol.ControllerCommissioner.md#ensuregeneralcommissioningsuccess)
- [fabric](exports_protocol.ControllerCommissioner.md#fabric)
- [failSafeTimeMs](exports_protocol.ControllerCommissioner.md#failsafetimems)
- [getClusterClient](exports_protocol.ControllerCommissioner.md#getclusterclient)
- [getInitialData](exports_protocol.ControllerCommissioner.md#getinitialdata)
- [initializeCommissioningSteps](exports_protocol.ControllerCommissioner.md#initializecommissioningsteps)
- [interactionClient](exports_protocol.ControllerCommissioner.md#interactionclient)
- [lastBreadcrumb](exports_protocol.ControllerCommissioner.md#lastbreadcrumb)
- [lastFailSafeTime](exports_protocol.ControllerCommissioner.md#lastfailsafetime)
- [reconnectWithDevice](exports_protocol.ControllerCommissioner.md#reconnectwithdevice)
- [reconnectWithDeviceCallback](exports_protocol.ControllerCommissioner.md#reconnectwithdevicecallback)
- [setCommissioningStepResult](exports_protocol.ControllerCommissioner.md#setcommissioningstepresult)
- [sortSteps](exports_protocol.ControllerCommissioner.md#sortsteps)
- [synchronizeTime](exports_protocol.ControllerCommissioner.md#synchronizetime)
- [validateNetwork](exports_protocol.ControllerCommissioner.md#validatenetwork)

### Methods

- [executeCommissioning](exports_protocol.ControllerCommissioner.md#executecommissioning)
- [getCommissioningStepResult](exports_protocol.ControllerCommissioner.md#getcommissioningstepresult)

## Constructors

### constructor

• **new ControllerCommissioner**(`interactionClient`, `certificateManager`, `fabric`, `commissioningOptions`, `reconnectWithDeviceCallback`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `interactionClient` | [`InteractionClient`](exports_interaction.InteractionClient.md) |
| `certificateManager` | [`RootCertificateManager`](exports_certificate.RootCertificateManager.md) |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |
| `commissioningOptions` | [`CommissioningOptions`](../modules/exports_protocol.md#commissioningoptions) |
| `reconnectWithDeviceCallback` | (`peerNodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid)) => `Promise`<[`InteractionClient`](exports_interaction.InteractionClient.md)\> |

#### Defined in

packages/matter.js/dist/cjs/protocol/ControllerCommissioner.d.ts:65

## Properties

### armFailsafe

• `Private` **armFailsafe**: `any`

Step 3
Upon completion of PASE session establishment, the Commissionee SHALL autonomously arm the Fail-safe timer for a
timeout of 60 seconds. This is to guard against the Commissioner aborting the Commissioning process without
arming the fail-safe, which may leave the device unable to accept additional connections.
A Commissioner MAY obtain device information including guidance on the fail-safe value from the Commissionee by
reading BasicCommissioningInfo attribute (see Section 11.9.5.2, “BasicCommissioningInfo Attribute”) prior to
invoking the ArmFailSafe command.

#### Defined in

packages/matter.js/dist/cjs/protocol/ControllerCommissioner.d.ts:99

___

### certificateManager

• `Private` `Readonly` **certificateManager**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/ControllerCommissioner.d.ts:52

___

### certificates

• `Private` **certificates**: `any`

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

#### Defined in

packages/matter.js/dist/cjs/protocol/ControllerCommissioner.d.ts:136

___

### clusterClients

• `Private` `Readonly` **clusterClients**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/ControllerCommissioner.d.ts:58

___

### collectedCommissioningData

• `Private` **collectedCommissioningData**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/ControllerCommissioner.d.ts:63

___

### commissioningExpiryTime

• `Private` **commissioningExpiryTime**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/ControllerCommissioner.d.ts:60

___

### commissioningOptions

• `Private` `Readonly` **commissioningOptions**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/ControllerCommissioner.d.ts:54

___

### commissioningStartedTime

• `Private` **commissioningStartedTime**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/ControllerCommissioner.d.ts:59

___

### commissioningStepResults

• `Private` `Readonly` **commissioningStepResults**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/ControllerCommissioner.d.ts:57

___

### commissioningSteps

• `Private` `Readonly` **commissioningSteps**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/ControllerCommissioner.d.ts:56

___

### completeCommissioning

• `Private` **completeCommissioning**: `any`

Step 15
The Administrator having established a CASE session with the Commissionee over the operational network in the
previous steps SHALL invoke the CommissioningComplete command (see Section 11.9.6.6,
“CommissioningComplete Command”). A success response after invocation of the CommissioningComplete command ends
the commissioning process.

#### Defined in

packages/matter.js/dist/cjs/protocol/ControllerCommissioner.d.ts:177

___

### configureAccessControlLists

• `Private` **configureAccessControlLists**: `any`

Step 10
Commissioner MAY configure the Access Control List (see Access Control Cluster) on the Commissionee in any way
it sees fit, if the singular entry added by the AddNOC command in the previous step granting Administer
privilege over CASE authentication type for the Node ID provided with the command is not sufficient to express
its desired access control policies.

#### Defined in

packages/matter.js/dist/cjs/protocol/ControllerCommissioner.d.ts:144

___

### configureNetworkThread

• `Private` **configureNetworkThread**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/ControllerCommissioner.d.ts:159

___

### configureNetworkWifi

• `Private` **configureNetworkWifi**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/ControllerCommissioner.d.ts:158

___

### configureRegulatoryInformation

• `Private` **configureRegulatoryInformation**: `any`

Step 5 - 1
Commissioner SHALL configure regulatory information in the Commissionee if it has at least one instance of
Network Commissioning cluster on any endpoint with either the WI (i.e. Wi-Fi) or TH (i.e. Thread) feature flags
set in its FeatureMap.
The regulatory information is configured using SetRegulatoryConfig (see Section 11.9.6.4,
“SetRegulatoryConfig Command”).

#### Defined in

packages/matter.js/dist/cjs/protocol/ControllerCommissioner.d.ts:108

___

### deviceAttestation

• `Private` **deviceAttestation**: `any`

Step 6
Commissioner SHALL establish the authenticity of the Commissionee as a certified Matter device (see Section
6.2.3, “Device Attestation Procedure”).

#### Defined in

packages/matter.js/dist/cjs/protocol/ControllerCommissioner.d.ts:123

___

### ensureGeneralCommissioningSuccess

• `Private` **ensureGeneralCommissioningSuccess**: `any`

Helper method to check for errorCode/debugTest responses and throw error on failure

#### Defined in

packages/matter.js/dist/cjs/protocol/ControllerCommissioner.d.ts:85

___

### fabric

• `Private` `Readonly` **fabric**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/ControllerCommissioner.d.ts:53

___

### failSafeTimeMs

• `Private` **failSafeTimeMs**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/ControllerCommissioner.d.ts:64

___

### getClusterClient

• `Private` **getClusterClient**: `any`

Helper method to create ClusterClients. If not feature specific and for the Root Endpoint they are also reused.

#### Defined in

packages/matter.js/dist/cjs/protocol/ControllerCommissioner.d.ts:69

___

### getInitialData

• `Private` **getInitialData**: `any`

Initial Step to receive some common data used by other steps

#### Defined in

packages/matter.js/dist/cjs/protocol/ControllerCommissioner.d.ts:89

___

### initializeCommissioningSteps

• `Private` **initializeCommissioningSteps**: `any`

Initialize commissioning steps and add them in the default order

#### Defined in

packages/matter.js/dist/cjs/protocol/ControllerCommissioner.d.ts:73

___

### interactionClient

• `Private` **interactionClient**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/ControllerCommissioner.d.ts:51

___

### lastBreadcrumb

• `Private` **lastBreadcrumb**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/ControllerCommissioner.d.ts:62

___

### lastFailSafeTime

• `Private` **lastFailSafeTime**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/ControllerCommissioner.d.ts:61

___

### reconnectWithDevice

• `Private` **reconnectWithDevice**: `any`

Step 13-14
13: Finalization of the Commissioning process begins. An Administrator configured in the ACL of the Commissionee
by the Commissioner SHALL use Operational Discovery to discover the Commissionee. This Administrator MAY be
the Commissioner itself, or another Node to which the Commissioner has delegated the task.
14: The Administrator SHALL open a CASE (see Section 4.13.2, “Certificate Authenticated Session Establishment
(CASE)”) session with the Commissionee over the operational network.

#### Defined in

packages/matter.js/dist/cjs/protocol/ControllerCommissioner.d.ts:169

___

### reconnectWithDeviceCallback

• `Private` `Readonly` **reconnectWithDeviceCallback**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/ControllerCommissioner.d.ts:55

___

### setCommissioningStepResult

• `Private` **setCommissioningStepResult**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/ControllerCommissioner.d.ts:82

___

### sortSteps

• `Private` **sortSteps**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/ControllerCommissioner.d.ts:81

___

### synchronizeTime

• `Private` **synchronizeTime**: `any`

Step 5 - 2
Commissioner SHOULD configure UTC time, timezone, and DST offset, if the Commissionee supports the time cluster.
The order of configuration of this information is not critical. The UTC time is configured using SetUtcTime
command (see Section 11.16.9.1, “SetUtcTime Command”) while timezone and DST offset are set through TimeZone
(see Section 11.16.8.6, “TimeZone Attribute”) and DstOffset attribute (see Section 11.16.8.7,
“DSTOffset Attribute”), respectively.

#### Defined in

packages/matter.js/dist/cjs/protocol/ControllerCommissioner.d.ts:117

___

### validateNetwork

• `Private` **validateNetwork**: `any`

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

#### Defined in

packages/matter.js/dist/cjs/protocol/ControllerCommissioner.d.ts:157

## Methods

### executeCommissioning

▸ **executeCommissioning**(): `Promise`<`void`\>

Execute the commissioning process in the defined order. The steps are sorted before execution based on the step
number and sub step number.
If >50% of the failsafe time has passed, the failsafe timer is re-armed (50% of 60s default are 30s and each
action is allowed to take 30s at minimum based on specs)

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/protocol/ControllerCommissioner.d.ts:80

___

### getCommissioningStepResult

▸ **getCommissioningStepResult**(`stepNumber`, `subStepNumber`): `undefined` \| [`CommissioningStepResult`](../modules/export._internal_.md#commissioningstepresult)

#### Parameters

| Name | Type |
| :------ | :------ |
| `stepNumber` | `number` |
| `subStepNumber` | `number` |

#### Returns

`undefined` \| [`CommissioningStepResult`](../modules/export._internal_.md#commissioningstepresult)

#### Defined in

packages/matter.js/dist/cjs/protocol/ControllerCommissioner.d.ts:83
