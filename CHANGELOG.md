# Changelog for matter.js

This page tries to get an detailed overview of the changes between versions without the need to look into code, especially to see relevant changes while interfaces and features are still in flux.
All Changes without a GitHub Username in brackets are from the core team: @Apollon77, @mfucci and @turon

## 0.4.0 (WIP)
* Matter-Core functionality:
  * Feature: Generate global Attributes attributeList, acceptedCommandList and generatedCommandList when generating cluster servers (when used with New API!)
  * Feature: (@digitaldan) Added decoding of Pairingcodes to determine discriminator and pin for Controller usage
  * Feature: Provide the Endpoint as data field for command Handlers to allow to access the endpoint data and other clusters on that endpoint if needed
  * Feature: Add Implementations of Scenes and Groups-Clusters (still to be tested with Controllers in depth!)
  * Feature: Add ClusterExtend to allow building Feature-based conditional cluster definitions (and do that for OnOff/Network-Commissioning)
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
  * Introduce NamedHandler util class for an event style typed and named handler/callback approach
  * Use NamedHandler as commandHandler to forward command calls like identify to the Device classes and testEvenTriggered for commissionable node class
  * Add constructor value to hand over initial values of the onoff Cluster when initialing the default cluster
  * make sure BridgedBasicInformation cluster is always set when adding a bridged device and no data parameters were provided
  * (@lauckhart) Enhance Logging framework to also allow ANSI and HTML colored output and added some features, details see #129
* matter-node.js:
  * Autoregister Crypto, Time and Network in their Node.js variants when including packages from @project-chip/matter-node.js root package but only if not yet registered (so can be overridden by the developer)
  * Examples/Reference implementations:
    * The reference implementations are moved to example directory and details moved into own [README_EXAMPLES.md](./packages/matter-node.js/README_EXAMPLES.md) file
    * the "npm run matter" command got renamed to "npm run matter-device" (same for binary usage
    * Add hints for all imports in the examples to show what the corresponding "matter-node.js" import would be (because they can not be used directly for build reasons)
    * Added the "npm run matter-*" commands also to the base package.json

## 0.3.0 (2023-05-03)
* Initial release of matter.js and matter-node.js packages after the code merge
* From now on we will add a changelog for each release

## < 0.3.0
* Releases of matter.js with initial Logic
