# Cluster Implementation Status for certification

This document provides an overview about our current Status regarding the implemented (and missing)
functionality in the relevant mandatory clusters and also some optional ones that are needed for several
device types.

## Mandatory Root Endpoint Cluster
The following Clusters are included by Default by CommissioningServer

### BasicInformationCluster
#### Status
Attribute wise the developer needs to define all attributes as needed in CommissioningServer constructor!
There are no commands.

#### Todo
* Trigger "startUp" Event (included in upcoming Event support PR)

### OperationalCredentialsCluster
#### Status
The Basic process and commands is implemented and works.
The developer can override the certificates (DAC, DAC-Private-Key, PAI, DC) by providing them to constructor.

#### Todo
* Create ACL with caseAdminNode on addOperationalCert command
* getFabrics: Support Fabric scoped request
* updateOperationalCert needs to be implemented
* Test outstanding that replacing all certs with "official ones" will work

### GeneralCommissioningCluster
#### Status
The cluster initial attribute values can be provided by developer in ComissioningServer constructor.
This also includes options to specify if country code is allowed to be changed including a whitelist.

#### Todo
* armFailsafe is missing the real timer based implementation and most likely checks and error cases
* commissioningComplete is missing error case checks

### NetworkCommissioningCluster
#### Status
We add an Ethernet NetworkCommissioningCluster with some dummy values by default which is ok I assume. If we need to
make any of the attributes configurable we need to know which
If other Network types are needed the developer needs to override them with it's own implementation!

#### Todo
Nothing

### AccessControlCluster
#### Status
Set attributes are stored, but nothing else is implemented.

#### Todo
* Implement needed logic based on the attributes - in all relevant places (read(write/invoke/...)
* Implement the two events

### GroupKeyManagementCluster
#### Status
Nothing is implemented.

#### Todo
* Implement all logic and commands

### GeneralDiagnosticsCluster
#### Status
All Attributes are implemented, but kind of empty (and hard coded)
The testTrigger command is implemented and available as commandHandler on CommissioningServer for the developer to implement himself!

#### Todo
* Implement all attributes and/or make them configurable
* Implement the needed Events

### AdminCommissioningCluster
#### Status
It is implemented basically, but things are missing

#### Todo
* Implement the Commissioning Window times and attributes correctly
* (if needed) implement support for Basic Commissioning Window
* Implement revoke Commissioning

## Endpoint Cluster
### DescriptorCluster
#### Status
The cluster is implemented and works.All data are handled automatically including dynamic bridge updates.

#### Todo
Nothing

### FixedLabelCluster (OPTIONAL added when first Label is added)
#### Status
The attributes can be set via addFixedLabel call on the Device class.

#### Todo
* Check and prevent that duplicates are added
* maybe check needed logic and such

### UserLabelCluster (OPTIONAL added when first Label is added)
#### Status
The attributes can be set via addUserLabel call on the Device class.

#### Todo
* Check and prevent that duplicates are added
* maybe check needed logic and such


## Aggregator/Bridge Endpoint Cluster

### BridgedBasicInformationCluster
#### Status
The cluster is implemented and works. The developer needs to set the attributes in the addBridgedDevice call.
Events are missing right now

#### Todo
* reachableChanged Event needs to be triggered (will come in Event support PR)

### ActionsCluster (OPTIONAL)
#### Status
Right now missing, but can be useful on Bridges to transport more data like Rooms/Zones and such. 

#### Todo
* Implement for Bridges

## Base Device class Clusters

### BindingCluster (OPTIONAL?! only if a "Simple" or "Client" device type is added)
#### Status
Only has one attribute.
But in fact nothing else happens when it is used, so the device is not doing anything with it.

#### Todo
* Check if logic is needed for it, but I assume not for now (as Device)
* Device classes should add logic when bindung exists and provide changes to the application

## OnOff Device Type Clusters

The following Clusters are included by Default for an OnOff Device Type

### IdentifyCluster
#### Status
Basically implemented but the default attributes can not be set by te developer right now and we have no identify support 
formally (when looking at the default attribute values).
The identify command is exposed to the device class via command Handler and can be implemented by the developer.

#### Todo
* Implement the default attribute values as configurable

### GroupsCluster
#### Status
Basically implemented including tests. Needs a refactoring, but in general should be fine. But general Groupcase support is missing.

#### Todo
* Rework Groups logic and storage
* Implement Groupcast support on protocol, encryption and transport layer, together with GroupKeyManagementCluster

### ScenesCluster
#### Status
Basically implemented including tests. Cluster required but provisional, so maybe no certification tests existing.

#### Todo
Nothing known

### OnOffCluster
#### Status
OnOff Cluster is implemented, but without Lighting feature.

#### Todo
* Implement Lighting feature relevant logics and commands

### LevelControlCluster
#### Status
Not implemented, also mainly commands can only be exposed (will come in a PR) and developer needs to implement them.

#### Todo
* Implement all logic and commands
* Implement logic when used together with OnOffCluster

### WindowCoveringCluster
#### Status
Cluster is implemented, logics not, but needs to be done custom anyway

#### Todo
* Create Device if needed
