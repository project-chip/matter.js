# TODO List

The matter.js package is still in huge development phase and a lot of details are still missing or needs to be optimized.
It basically can already be used, but there will be (also potentially breaking) changes in the near future until anything 
stabilizes.

The following are things on my (@Apollon77) TODO list for the project right now (and not complete). If someone would like to take over such a topic just open an issue and describe what you plan and I'm happy to support!

## Cluster Definitions
* Complete all missing cluster definitions
* How to get all attributes/commands for automatic usage and generation? AllCLusterMap -> AllAttributeMap?
* Add FabricScopedAttribute (Readonly) - or use getter? see GroupKeyCluster

## Generic Cluster Handlers
* Add generic cluster handlers for all clusters that are not yet covered

## Core topics
* (!) Return correct error in subscribe when endpoint/cluster is unknown (in comparison to attributes)
* (!) Make sure to always return correct responses for requests and not have "dead return" states
* Finalize all interactions regarding Timed, Fabrics and such
* Implement Timed interactions
* Monitor subscriptions and remove/resubscribe them when the device did not answer withing maxInterval, how notify device?
* DataReport chunking when sending too long arrays
* Add support for group casts and groups in general (after Multicast refactor)
* Check and rework commissioning flows, add failsafe timer and pase sessions to 1! (see 5.5 core)
* Adjust Fabric storage with sub contexts
* Rename index.ts to exports.ts to exclude from being used internally
* All errors MatterError!
* Update subscribes when structure gets updated (e.g. new endpoint added)
* Move announcements and durations into Broadcaster class

## New API

### General
* How to generically get default command handlers for cluster?
* How to generically get Clusters by Feature Combination? Also Handlers?
* Restructure everything to get rid of MatterDevice and MatterController classes and use the new API instead
* Add Ansi Logging and allow to CLI specify Loglevel
* ts-node and project references - try other ts-config

### Device usage
* Experiment with Bindung cluster and add logic
* check TODOs in the device classes and adjust accordingly
* Investigate/Check specs on how to add new devices to a bridge (check Matter Core specs) to enhance bridge "on the fly"
* Check bridge and composed devices with tuya, smartthings and Alexa again; and test composed device with google
* Allow to fill Action cluster for rooms/zones and such

### Controller usage
* The new Controller (pairable node) API is still WIP in some places to optimize again
  * Automatic subscribe to anything
  * Instantiate correct device classes based on features
  * use more attribute infos to create paired device objects with correct features/commands/attributes
* check TODOs in the device classes and adjust accordingly

### Multi Node feature
* Restructure and combine InteractionClient/Server

## Testing
* Find out how we can do ESM based tests in Browser (currently karma uses cjs files)
* Add a low level Payload testing suite to simulate pairing and operation behaviour of ios, Amazon, Google and such to better make sure changes do not break anything
