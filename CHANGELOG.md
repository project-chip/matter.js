# Changelog for matter.js

This page tries to get an detailed overview of the changes between versions without the need to look into code, especially to see relevant changes while interfaces and features are still in flux.
All Changes without a GitHub Username in brackets are from the core team: @Apollon77, @mfucci and @turon

## 0.5.0 (WIP)
* Matter-Core functionality:
  * Breaking: Added support to allow to clearly model some more attribute types with internally different behaviour:
    * Added types for WritableFabricScopedAttribute and OptionalWritableFabricScopedAttribute
    * Added types for FixedAttribute and OptionalFixedAttribute
    * Added FixedAttributeServer which only allows to "get" the value but not to set it
    * Added FabricScopedAttributeServer which gets and sets the value based on the provided fabric
    * Updated ClusterServerObj and ClusterClientObj typings to respect these Attribute types
    * Updated all Cluster definitions that use such attribute types
  * Enhance: Splitted up and corrected PowerSource and PressureMeasurement Cluster based on Matter 1.1 Specs
  * Fix: Added missing PulseWidthModulationLevelControlCluster to AllCLusters
  * Fix Typing of Commands in ClusterClient if no commands were present
  * Fix: Fix equality checks in Attribute servers to check deeper then just === (and introduce new util method isDeepEqual)
  * Fix: Make sure an error received from sending subscription seed data reports is not bubbling up and activate subscription after successful seeding
* matter.js API:
  * Breaking: Adjusted some constructors of the new API and remove the option to pass an array of clusters to be added initially because this was no longer compatible to the strong typing in some places. Use addClusterServer and addClusterClient methods
  * Deprecation: The classes MatterDevice and MatterController are deprecated to be used externally to the library and will be removed in later versions.
  * Deprecation: The CLI Examples LegacyDeviceNode and LegacyControllerNode will be removed in next version! Use the new variants please.
* Misc:
  * Added Specification links for Matter Specifications 1.1

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
    * The reference implementations are moved to example directory and details moved into own [README_EXAMPLES.md](./packages/matter-node.js/README_EXAMPLES.md) file
    * the "npm run matter" command got renamed to "npm run matter-device" (same for binary usage
    * Add hints for all imports in the examples to show what the corresponding "matter-node.js" import would be (because they can not be used directly for build reasons)
    * Added the "npm run matter-*" commands also to the base package.json
    * Added parameter -clearstorage to start with an empty storage

## 0.3.0 (2023-05-03)
* Initial release of matter.js and matter-node.js packages after the code merge
* From now on we will add a changelog for each release

## < 0.3.0
* Releases of matter.js with initial Logic
