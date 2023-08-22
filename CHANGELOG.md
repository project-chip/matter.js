# Changelog for matter.js

This page tries to get an detailed overview of the changes between versions without the need to look into code, especially to see relevant changes while interfaces and features are still in flux.
All Changes without a GitHub Username in brackets are from the core team: @Apollon77, @mfucci and @turon

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
