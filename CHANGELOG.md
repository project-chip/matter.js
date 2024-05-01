# Changelog for matter.js

This page shows a detailed overview of the changes between versions without the need to look into code, especially to see relevant changes while interfaces and features are still in flux.

The main work (all changes without a GitHub username in brackets in the below list) is done by the core team of this project completely in their free time (see their individual profiles for sponsoring options): @Apollon77, @lauckhart, @turon and @mfucci 

<!--
	Placeholder for the next version (at the beginning of the line):
	## __WORK IN PROGRESS__
-->

### __WORK IN PROGRESS__
* Matter-Core functionality:
  * Feature: cluster default implementations for the following clusters were added/updated:
    * BooleanState: Automatically emit the StateChange event when enabled for the cluster and the stateValue changes
    * LevelControl: Implemented all non-Frequency command handlers as defined by specification with an optional transition logic managed by matter.js
    * LocalizationConfiguration: Implemented activeLocale validation
    * LowPower: Implemented event `enterLowPowerMode` to be emitted when the sleep command gets called
    * ModeSelect: Implemented all features and commands as defined by specification
    * Switch: Implement all features and events including debouncing (optional), switch-release, long- and multi-press detections
    * TimeFormatLocalization: Implemented activeTimeFormat validation
    * WindowCovering: Implemented all features and commands as defined by specification
  * Enhancement: Adjusted handling of TlvList order to match better with matter specification and ensure field orders are preserved
  * Enhancement: Adds Certificate validation and cryptographic verification during commissioning and CASE session establishment
  * Enhancement: Adds additional logging information for PASE and CASE to better understand errors without debug logging
  * Enhancement: Adds several Optimizations and adjustments for Obervers (e.g. Observable.isObserved)
  * Fix: Corrects returned errors for two commands on OperationalCredentials cluster 
* matter.js New API code flows:
  * Breaking: The name of the *$Change Events for attributes and such are changed to *$Changed . Please adjust your code!
  * Breaking: Introduced ExtensionInterface to define extensible/custom methods for behavior/Cluster-Server implementation to be available when extending this class (needed because of a TS bug 27965)
  * Enhancement: Optimized constraint validations and conformance error messages
  * Enhancement: Conditionally enables the ReachableChanged event on the Root Endpoint BasicInformation cluster if the reachable attribute is defined in the defaults
  * Enhancement: Allow to register events directly when initializing endpoints like in legacy API
  * Enhancement: Allows for cluster implementations to dynamically add/enable state attributes and events
  * Enhancement: Added "fieldName$Changing" event handlers that emit in transaction pre-commit and allow for state mutation and will cycle for a limited number of times until state is stable
  * Enhancement: Allows "fieldName$Changed" and "fieldName$Changing" event handlers to be async
  * Enhancement: Adds Conformance validation for enums
  * Enhancement: Makes various config variables apply dynamically
  * Fix: Fixes some issues around event handling in the new API and makes sure events are not de-registered on factory resets
  * Fix: Corrects the returned status error code when an Enum value is set to an invalid value
  * Fix: Fixes a floating promise in FailsafeTimer; it tended to kill a test run without an easy way to identify the cause
  * Fix: Fixes bounds check with references to null fields
* Chip testing:
  * Enhancement: Adds automatic CI testing for all clusters listed in [matter.js Readme](./packages/matter.js/README.md)
* matter.js tooling:
  * Enhancement: Migrates cluster identification to the pattern used in the newer device code. It now scans the entire document rather than attempting to navigate via the index.  This is simpler and more resilient
  * Enhancement: Various other small changes improve resiliency
  * Enhancement: Removes the "main" closure from codegen scripts that added a bit of friction to debugging
  * Enhancement: Adds proper CLI support to codegen scripts to override various behaviors and provide information on the script
  * Enhancement: We now version the intermediate models.  In the future we can use this to add informational revision information to model elements and make the API adaptive based on the targeted Matter version
  * Fix: Fixes a bug that was causing field-level prose to be incorrectly associated with the containing element in malformed portions of the core spec

### 0.8.1 (2024-04-15)
* Matter-Core functionality:
  * Cluster default implementations for the following clusters were added/updated:
    * (GreydonDesu) Feature: DoorLock: Implemented bare minimal commands to lock/unlock the door
    * Enhancement: Enhanced Identify cluster default implementation by additional state `isIdentifying` and events `startIdentifying` and `stopIdentifying`
  * Enhancement: Diagnostic and logging information, also on SIGUSR2 signal for node.js
  * Fix: Updates subscribed events on structure updates to make sure also new events are reported correctly
  * Fix: Removed invalid length assumption in Sigma2
* matter.js New API code flows: 
  * Enhancement: Optimizes Node activity tracking and shutdown/startup handling

## 0.8.0 (2024-03-29)
* Packages
  * IMPORTANT: We switch away from re-exporting all matter.js functionality in matter-node.js, so please adjust your imports and make sure that you include matter.js together with matter-node.js in your dependencies in the exact same version!
  * Changed BLE library (Bleno/Noble) to another fork with better support for Windows and UART devices
* Matter-Core functionality:
  * Breaking: Storage implementations got added new methods "contexts", "values" and a multi-set valiant that need to be implemented if you have own Storage implementations. Also, storages now derive from a SyncStorage or MaybeAsyncStorage class weather they are sync or async
  * Adjustment: Cluster versions do not need to be persisted, so remove in legacy and new API
  * Fix: Decode Empty nullable data types as null when they have constrains that would require a minimum length
  * Fix: Convert Error type of Network errors and handle in case of subscription failures
  * Fix: Fixes a cryptographic issue that failed PASE establishment in 1/255 times, Replace BN/elliptic by @noble/curves library
  * Fix: Fixed ClusterClient methods set and subscribe to really return the Promise of the action 
* matter.js API:
  * IMPORTANT: Introduction of new High level API with complete Device type support for Matter 1.1 types, see [migration guide](./docs/MIGRATION_GUIDE_08.md). For now the known API that we had up top 0.7 is still included and fully working and compatible when old imports are used, but called "Legacy" for now. It will be removed in a later version not yet decided.
  * Feature: Introduced Environment concept to centralize MDNS, storage and configuration and platform specific central functionalities (Replaces MatterServer from Legacy API).
  * Feature: Enhanced Matter protocol and interaction abstractions and introduced transactional handling of actions which are rolled back completely in case onf errors.
* matter-node.js
  * Enhancement: Makes sure console.log on node.js correctly log Proxy objects with their data and not the Proxy object itself
  * Enhancement: Allows to send SIGHUP2 signal to the node.js process to print out information on running timers and promises of the process to console
* matter-node.js Examples
  * IMPORTANT: All existing example scripts got renamed to *Legacy.ts when the use the "old/until now"-API and can be used directly after changing the name (exception: DeviceNode.ts became DeviceNodeFullLegacy.ts!). They are 100% compatible to the ones before.
  * Feature: Added all examples again converted to use the new devices API and we also added some more new device types to show the new API better
  * Feature: Enhanced DeviceNodeFull example to show several more way on how to use the new API and special cases.
  * Feature: Enhanced DeviceNodeFull example to simulate a Thread Networking device to check BLE commissioning flows
* matter.js Tooling 
  * Enhanced Code generation to also generate classes for Cluster implementations and device types with full Feature configurability and TypeScript typing support for this

## 0.7.5 (2024-02-23)
* Matter-Core functionality:
  * Feature: Allowed multiple Loggers and log targets to be registered. Logging to console is still default
  * Enhancement: Implemented handling for session interval parameters as defined by Matter 1.2 specification
  * Enhancement: Improved discovery data handling and use MDNS data for Pase/Case connections session interval parameters
  * Enhancement: Storing session parameter with session resumption details to reuse on session restores
  * Enhancement: Enhanced encoding of fabricIndex field in write interactions and optimized validation for such cases 
  * Enhancement: Prevented resending the same MDNS scanner queries
  * Enhancement: Optimized MDNS Scanner queries to prevent resending of queries that are already in progress
  * Enhancement: Optimized Commissioning error handling for Controller
  * Enhancement: Enhanced ValidationError to provide the affected structure-aware fieldname in case of an error
  * Fix: Improved Standalone Ack handling for messages to match Matter 1.2 specification
  * Fix: Adjusted commands GoToLiftPercentage and GoToTiltPercentage to match with Matter SDK and work around specification issue
  * Fix: Fixed BLE commissioning for Controller
  * Fix: Makes sure to validate the data when invoking a command from a cluster client
  * Fix: Only set session active timestamp if we create a session based on an incoming message and not when we are the creator of the session to prevent too fast resubmissions
  * Fix: Correctly handle CASE Resumptions without known resumption records and fallback to a full CASE session establishment
  * Fix: Enhanced commissioning flow based on latest Matter SDK test cases and match with specification
  * Fix: Enhanced handling for fabric scoped command invokes to match with specification
  * Fix: Enhanced handling for fabric sensitive attribute reads to match with specification
* matter.js API:
  * Fix (potentially Breaking): Remove NetworkCommissioningCluster (Ethernet) from default added clusters in CommissioningServer because we formally have an out-of-band network connection, re-add manually if needed!
  * Enhancement: Allowed to pass connect options when connecting a node for Controller
  * Enhancement: Stored Discovery and Basic information data for commissioned nodes and allow API access for easy determination of devices without need to connect to them
  * Enhancement: Improved OnOff/Dimmable Lighting devices and add Startup handling to match specification
  * Enhancement: Remove Scenes cluster for now from all device types because provisional and changes upcoming with Matter 1.3
  * Enhancement: Optimized Commissioning error handling
  * Enhancement: Added connection options to Controller connect methods
  * Enhancement: Enhanced CLI arguments parser to allow "--name" additionally to "-name"
  * Fix: Adjusted the Group limits in GroupKeyManagement cluster to 1 because we do not support groups yet
  * Fix: (Luligu) Corrected the Device type for bridged nodes with Power source information
  * Fix: Adjusted Commissioning logic for Controller to accept devices without network commissioning cluster by assuming out-of-band IP connection 
* matter.js shell:
  * Feature: Added support for Debug logging into a Logfile additionally to e.g. Info logging in console
  * Enhancement: Adjusted logic to output detailed node information on nodes command
  * Enhancement: Do not subscribe all attributes when connecting a node for administrative actions (unpair, open commissioning windows)
  * Enhancement: Allowed to specify the BLE HCI id as shell start parameter and store in settings
  * Enhancement: Added attribute, event and command actions in the shell based on the Cluster model (all known Matter 1.1 clusters are supported)
  * Enhancement: Enhanced the Shell Readme with many information and examples
  * Fix: Correctly quote when showing configuration values for wifi- and thread-credentials
  * Fix: Fixed issues when using quoted strings as CLI parameters (e.g. for wifi/thread credentials or JSON structs for commands/attribute writes)

## 0.7.4 (2023-12-31)
* Matter-Core functionality:
  * Enhancement: Refactor Core Session management to match specification
  * Enhancement: Refactor message duplication detection and handling to match specification
  * Feature: Upgrade Interaction protocol revision to 11 (Matter 1.2) and adjust event error handling in DataReports

## 0.7.3 (2023-12-18)
* Matter-Core functionality:
  * Feature: Added CASE Authenticated Tags support (initialization from NOC and validation only)
  * Enhancement: Added validation handling to Invoke processing
  * Fix: Fixed message size check to allow processing of two big non matter UDP messages
* matter.js API:
  * Feature: Added NodeStateInfo state "Decommissioned" to inform from about a successful decommissioning of a device
  * Feature: Added check that provided unique storageKeys are really unique
  * Fix: Makes sure to initialize all nodes in the MatterServer on startup also if errors occur on single ones
  * Fix: Only try to connect to a commissioned device in controller if it has at least one
  * Fix: Makes sure to call commissioningChanged callback when device is factory reset
  * Fix: Really remove all data in factory reset of a device

## 0.7.2 (2023-12-04)
* Matter-Core functionality:
  * Corrected default values for TemperatureMeasurement Cluster
  * Handled Message extensions and Secured extensions in matter messages correctly (means they are ignored for now but read from the data stream)
  * Handles too huge UDP messages correctly by dropping such messages

## 0.7.1 (2023-11-24)
* Matter-Core functionality:
  * Optimized Exchange deletion and change a throw to log when a already deleted Exchange should be deleted again
* matter.js API:
  * Added some convenient methods on PairedNode instance to access Clusters on Devices and also the RootEndpoint (if needed)
  * Added method to cancel a running discovery process for commissionable devices

## 0.7.0 (2023-11-13)
* General
  * Breaking: Changed ES target from ES5 to ES2018 (affected environments probably already didn't support matter.js)
  * Feature (vilic): Added project references and additional tsconfigs to support standard tsc development workflows
  * Enhance: Optimizing build speed
  * Enhance: matter-node-ble.js is published as CJS/ESM hybrid package
  * Enhance: matter-node.js-examples is published as ESM module
* Matter-Core functionality:
  * Breaking: QrCodes are not longer pre-rendered, but can be generated by QrCode.get() (from schema export),see examples 
  * Fix: Handles event data correctly on subscription initially and also on updates to trigger the listeners
  * Fix (vilic): Adjust network interface handling for Windows to use the zone id instead of network interface name
  * Enhance (vilic): Added MDNS Memberships to sockets for better operation on Windows and other platforms
  * Enhance: Refactor session management and make sure also controller handle session close requests from devices
  * Enhance: Refactor close handing for exchanges and channels to make sure they are closed correctly
  * Feature: Added detection of missing Subscription updates from a device and allow to react to such a timeout with callback
  * Feature: Added generation method for random passcodes to PaseClient
  * Feature: Generalized Discovery logic and allow discoveries via different methods (BLE+IP) in parallel
  * Feature: Added functionality to clear session contexts including data in sub-contexts or not
  * Feature: Enhance discovery methods to allow continuous discovery for operational devices
* matter.js API:
  * Breaking: Rename resetStorage() on CommissioningServer to factoryReset() and add logic to restart the device if currently running
  * Breaking: Restructure the CommissioningController to allow pairing with multiple nodes
    * Adjusts some property and structure namings to be more consistent
    * Introducing class PairedNode with the High level API for a paired Node
    * Restructured CommissioningController to handle multiple nodes and offer new high level API
    * Changed name of the unique storage id for servers or controllers added to MatterServer to "uniqueStorageKey"
    * Adjusted subscription callbacks to also provide the nodeId of the affected device reporting the changes to allow callbacks to be used generically when connecting to all nodes
    * Introduces a node state information callback to inform about the connection status but also when the node structure changed (for bridges) or such.
  * Breaking: Deprecated the option "mdnsAnnounceInterface" and replaced by "mdnsInterface" and now used to limit announcements and scanning to a specific interface
  * Breaking: Makes sure that also nodes added to a MatterServer after it was started are also started to behave the same. "add" methods are now async. 
  * Feature: Enhanced CommissioningServer API and CommissioningController for improved practical usage
  * Feature: Makes Port for CommissioningServer optional and add automatic port handling in MatterServer
  * Feature: Allows removal of Controller or Server instances from Matter server, optionally with deleting the storage
  * Enhance: Makes passcode and discriminator for CommissioningServer optional and randomly generate them if not provided 
* matter-node-shell.js
  * Feature: Completely refactored and enhances shell to support commissioning, identify and many more new commands. See Readme, try it
* matter-node.js-examples
  * Breaking: Rename parameter -announceinterface to -netinterface and use for announcements and scanning

## 0.6.0 (2023-10-08)
* Matter-Core functionality:
  * Fix: Adjusted Event Priority definition to match to specs
  * Fix: Adjusted Bleno and Noble to be optional Dependencies to allow building the Monorepo also when these are failing (e.g. on Windows)
  * Fix: Added missing MDNS announcement expiry and allowed to announce fabrics and an open commissioning window in parallel
  * Fix: Prevented crash when logging undefined/null values
  * Feature: Implemented TimedInteractions for Write/Invoke request s as required by specs
  * Feature: Added support for generic Response suppression if requested or needed for group communication
  * Feature (orlenkoo) Implemented first OnOff Cluster Lighting feature command handlers (WIP)
  * Feature: Also publishes matter-node.js packages as ESM in parallel to CJS
  * Feature: Added clear method to the storage classes to allow factory reset of the storage
  * Feature: Added ICAC (Intermediate CA Certificate) decoding
  * Feature: Implemented Array chunking for DataReport messages to allow also bigger array structures to be sent
  * Feature: Implemented Tag compression for DataReport messages (but disabled it because standard do not support it officially yet)
  * Feature: Refactor complete commissioning logic (AdministratorCommissioning, GeneralCommissioning, OperationalCredentials clusters) to match to specs and implement main logics as defined
  * Enhance: Memory footprint optimizations
  * Enhance: Introduced building and building, running and test executions scripts to not use ts-node anymore and many more optimizations to test and build processes
  * Enhance: ClusterFactory internally uses a simplified method of CLuster types that are compatible to the current ones but soon might replace them
  * Enhance: Using longer response timeouts when Failsafe timer is active during commissioning (Controller)
  * Enhance: Optimized Commissioning logic of Controller implementation regarding failsafe timers and network commissioning
  * Enhance: Added timeout handing to the Message queue to prevent reading DataReports get stuck if device do not send anymore
  * Enhance: Added support in StatusResponseError to also handle a cluster specific status code (for write and invoke)
  * Enhance: Added init and destroy methods to the Cluster-handlers to allow to build proper cluster logics and also to free resources (e.g. stop timers on cluster destroy)
  * Enhance: Re-Announce the device when a subscription was cancelled by a peer in order to have a fast reconnect of the peer
  * Enhance: Adjusted MDNS implementation to be more near to MDNS specifications and also added performance optimizations
* matter-node.js:
  * Fix: (vilic) Enhancements for windows networking and tooling
* matter.js API:
  * Breaking: Move "disableIpv4" from CommissioningController/Server options to MatterServer to also consider it for MDNS scanning and broadcasting
  * Breaking: Change MatterServer constructor second parameter to be an options object
  * Breaking: Streamline Device API and rename onOff/isOnOff -> get/setOnOff
  * Breaking: EndpointStructureLogger (method logEndpointStructure) was moved from util to device export!

## 0.5.0 (2023-08-22)
* Matter-Core functionality:
  * Breaking: Added support to allow to clearly model some more attribute types with internally different behaviour:
    * Added types for WritableFabricScopedAttribute and OptionalWritableFabricScopedAttribute
    * Added types for FixedAttribute and OptionalFixedAttribute
    * Added FixedAttributeServer which only allows to "get" the value but not to set it
    * Added FabricScopedAttributeServer which gets and sets the value based on the provided fabric
    * Updated ClusterServerObj and ClusterClientObj typings to respect these Attribute types
    * Updated all Cluster definitions that use such attribute types
  * Breaking: Add Interface for Events which requires to define the supported events when creating a ClusterServer
  * Breaking: Include Event support in InteractionClient which changes several Read/Subscribe method signatures or adds new methods
  * Breaking: GeneralCommissioningServerHandler is now a function that takes configuration for setRegulatoryConfig handling
  * Breaking: Types of specific clusters are no longer exported flat on main level. Cluster exports are now namespaces that include their types.
  * Breaking: All collection files meant to be used for exports only are renamed to export.ts and should not be used for internal imports
  * Breaking: Attribute listener methods renamed: addListener -> addValueSetListener, addMatterListener -> addValueChangeListener (also remove methods) to make it more clear what they do
  * Breaking: Change from object style to Branded types for special Datatype objects (e.g. "new VendorId(0xFFF1)" -> "VendorId(0xFFF1)")
  * Breaking: ClusterClient and ClusterServer classes were moved from "interaction" export to "cluster" export
  * Breaking: Refactor the (low level) ClusterClient API to be more convenient to use with many optional fields for read/write/subscribe
  * Breaking: Cluster*Obj and the internal representation for more correct typings
  * Breaking: The InteractionClient is no longer exchangeable in ClusterClient cases (because makes no sense and was never working)
  * Feature: Enhance CommissioningServer options to also specify GeneralCommissioningServer details and settings
  * Feature: Adjust RegulatoryConfig Handling in Device and Controller to match with specifications
  * Feature: Endpoint Structures use custom-unique-id (from EndpointOptions)/uniqueStorageKey (from BasicInformationCluster)/serialNumber (from BasicInformationCluster)/ Index (in this order) to store and restore the endpoint ID in structures
  * Feature: (@mahimamandhanaa) Add BTP (Bluetooth Transport Protocol) codec class for encoding and decoding of BTP messages
  * Feature: Enhanced BitMap typing and Schemas to allow "Partially" provided Bitmaps by suppressing the "unset" bits
  * Feature: Allow to define discoveryCapabilities structure when getting pairing code in CommissioningServer
  * Feature: Added Bluetooth package (matter-node-ble.js) to allow to use Bluetooth as transport layer for initial commissioning. Implemented device side for now
  * Feature: Global Attributes are also accessible in ClusterClient instances (e.g. to get the list of features of the cluster)
  * Feature: Refactor Controller Commissioning process and add network commissioning support
  * Feature: Correctly Handle FabricIndex fields for Read and Write requests
  * Feature: Handle subscription errors and destroy session if failing more than 3 times
  * Feature: Add full event support (Device and Controller) including triggering some default events automatically (startup, shutdown, reachabilityChanged, bootReason)
  * Feature: Added support for dataVersionFiltering and eventFilters for read and subscribe requests for Device and Controllers
  * Feature: Added more parameters to several InteractionClient methods to allow to configure more parameters of the requests
  * Feature: Allows subscripts to be updated dynamically when the endpoint structure for bridges changes by adding or removing a device
  * Feature: When used as Controller also "unknown" CLusters, Attributes, Events and DeviceTypes are generically parsed and supported and can be detected as unknown in code
  * Feature: When used as controller the read data about supported attributes, events are considered when create Attribute/EventClient objects and can be differentiated by PresentAttributeClient/UnknownPresentAttributeClient class types 
  * Enhance: Device port in MDNSBroadcaster is now dynamically set and add UDC (User directed Commissioning) Announcements
  * Enhance: Enhanced MessageCodec and check some more fields
  * Enhance: Added possibility to define conditional cluster attribute/Command/event definitions and introduce runtime checking for these. Part of Cluster Structure rework still WIP
  * Enhance: (@vves) Add Window Covering Cluster definition  
  * Enhance: Split up and corrected PowerSource and PressureMeasurement Cluster based on Matter 1.1 Specs
  * Enhance: Detailed cluster data model and related logic
  * Enhance: Generates all cluster definitions from Matter 1.1 specification and CHIP v1.1-branch automatically. This brings basic definition support for all clusters!
  * Enhance: Makes sure Fabric-Scoped requests are handled correctly for read and subscriptions 
  * Enhance: All Errors thrown by the library are now derived from the MatterError class and split up into several subclasses
  * Fix: Added missing PulseWidthModulationLevelControlCluster to AllCLusters
  * Fix Typing of Commands in ClusterClient if no commands were present
  * Fix: Fixes equality checks in Attribute servers to check deeper than just === (and introduce new util method isDeepEqual)
  * Fix: Makes sure an error received from sending subscription seed data reports is not bubbling up and activate subscription after successful seeding
  * Fix: Allows Node.js Buffer objects to be persisted to storage as a Uint8Arrays that they subclass
  * Fix: Fixes a Subscription timer duplication issue and collect attribute changes within a 50ms window to reduce the number of subscription messages
  * Fix: Returns correct Error-Status for Read-/Write-/Subscribe- and Invoke-Requests
  * Fix: Fixes TLV Encoding for strings with UTF8 relevant characters
  * Fix: Adjusted DataVersion handling to track version on ClusterInstance level as required by Specs. Stored values that might got invalid by this change are deleted and recreated on next change.
  * Refactor: Refactor Endpoint structuring and determination to allow dynamic and updating structures
* matter.js API:
  * Breaking: 
    * Adjusted some constructors of the new API and remove the option to pass an array of clusters to be added initially because this was no longer compatible to the strong typing in some places. Use addClusterServer and addClusterClient methods
    * Endpoint ID parameter got replaced by an EndpointOptions structure that also allows to define a custom unique ID for endpoint structuring
    * Composed devices objects should only be used on an Aggregator
  * Deprecation: The classes MatterDevice and MatterController are deprecated to be used externally to the library and will be removed in later versions.
  * Feature: Enhance Storage system to allow to create subcontext stores to allow better separation of data
  * Feature: Allow to also remove devices from Aggregators
  * Feature: Optionally allow to define discovery capabilities when generating Pairing code
  * Feature: Add methods to CommissioningServer/Controller class to get information on active sessions and commissioned fabrics
  * Feature: Enhance CommissioningController to allow subscribing to all attributes and events directly on startup
* Reference implementation/Examples:
  * Breaking: The storage key structure got changed to allow multi node operations within one process. This requires to change the storage key structure and to migrate or reset the storage.
    * Migration: prepend any storage key except Device.* and Controller.* with "0." in the filename
  * Deprecation: The CLI Examples LegacyDeviceNode and LegacyControllerNode is removed in this version! Use the new variants please.
  * Change: The default storage names now start with a "." at the beginning to allow to hide them in some file explorers and git.
  * Change: Example script are moved to package matter-node.js-examples
  * Feature: The Device example script got a new parameter -ble to also initialize the Bluetooth transport layer
  * Feature: The Controller example script got a new parameter -ble to also initialize the Bluetooth transport layer
  * Feature: The Controller example script got a new parameters -ble-* to provide Wi-Fi/Thread network credentials to use for device commissioning
  * Feature: Add stopping of the example scripts to allow clean shutdown and sending shutdown Event
  * Feature: Add CLI parameter to define the loglevel and log format; default log format changed to ANSI when executed in a shell/tty
  * Feature: Log the endpoint structure of the device/commissioned device on start
* Misc:
  * Added Specification links for Matter Specifications 1.1
  * Optimize typing exports for node10 TS settings
  * Add optional parameter to define a uniqueID used in serial number of examples
  * Add WIP package matter-node-shell.js with the goal to offer a node.js based shell-based controller implementation
  * Add new util class EndpointStructureLogger which logs all endpoint details 

## 0.4.0 (2023-05-16)
* Matter-Core functionality:
  * Deprecation: The classes MatterDevice and MatterController are deprecated to be used externally to the library and will be removed in later versions.
  * Deprecation: The CLI Examples LegacyDeviceNode and LegacyControllerNode will be removed in next version! Use the new variants please.
  * Feature: Generate global Attributes attributeList, acceptedCommandList and generatedCommandList when generating cluster servers (when used with New API!)
  * Feature: (@digitaldan) Added decoding of Pairingcodes to determine discriminator and pin for Controller usage
  * Feature: Provide the Endpoint as data field for command Handlers to allow to access the endpoint data and other clusters on that endpoint if needed
  * Feature: Add Implementations of Scenes and Groups-Clusters (still to be tested with Controllers in depth!)
  * Feature: Add ClusterExtend to allow building Feature-based conditional cluster definitions (and do that for OnOff/Network-Commissioning)
  * Feature: Refactored Endpoint/Fabric aware Attributes with Getter functions to use Endpoint instance
  * Feature: Added automatic API documentation generation (not included in npm package but can be build locally using npm run build-doc)
  * Feature: Improved Command Invoke Logging
  * Adjustment: Do not send empty arrays for empty subscription messages to further shorten the payload
  * Fix: Respond with Unsupported Command when a unknown command is received and log the error
  * Fix: Increase the array maximum size according to specs
  * Fix: Fixed internal TlvTag representation to allow also decoding of the internal object format of a Tlv stream
  * Fix: Adjust internal tag encoding to not use {} when empty
* matter.js API:
  * Feature: Introduce new High level API, see [API.md](./packages/matter.js/API.md) for details!
  * Breaking: Move DeviceTypes.ts from common to device directory and rename DEVICE to "DeviceTypes"
  * Breaking: ClusterClient interface names changed to get/set/subscribeNAMEAttribute to prevent overlapping with commands
  * Breaking: Revamp internal APIs and convert ClusterServer into an object approach to allow dynamic methods to be defined for get/set/subscribe and streamline the API between ClusterClient and ClusterServer
  * Feature: Introduce NamedHandler util class for an event style typed and named handler/callback approach
  * Feature: Use NamedHandler as commandHandler to forward command calls like identify to the Device classes and testEvenTriggered for commissionable node class
  * Feature: Add constructor value to hand over initial values of the onoff Cluster when initialing the default cluster
  * Feature: make sure BridgedBasicInformation cluster is always set when adding a bridged device and no data parameters were provided
  * Feature: (@lauckhart) Enhance Logging framework to also allow ANSI and HTML colored output and added some features, details see #129
* matter-node.js:
  * Breaking: Remove the exposed legacy API classes (MatterDevice/MatterController) and legacy examples from the exported lists
  * Feature: Autoregister Crypto, Time and Network in their Node.js variants when including packages from @project-chip/matter-node.js root package but only if not yet registered (so can be overridden by the developer)
  * Examples/Reference implementations:
    * The reference implementations are moved to example directory and details moved into own [README.md](./packages/matter-node.js-examples/README.md) file
    * the "npm run matter" command got renamed to "npm run matter-device" (same for binary usage
    * Add hints for all imports in the examples to show what the corresponding "matter-node.js" import would be (because they can not be used directly for build reasons)
    * Added the "npm run matter-*" commands also to the base package.json
    * Added parameter -clearstorage to start with an empty storage

## 0.3.0 (2023-05-03)
* Initial release of matter.js and matter-node.js packages after the code merge
* From now on we will add a changelog for each release

## < 0.3.0
* Releases of matter.js with initial Logic
