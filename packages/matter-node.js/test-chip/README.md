# Chip Tool Testing

This testing framework allows to run Chip tool certification tests against matter.js to validate the interoperability of 
the implementation.

The Available Tests in Chip tool are listed in the [Chip tool test catalog](https://github.com/project-chip/connectedhomeip/tree/master/src/app/tests/suites/certification).

## Prerequisits
In order to execute the tests you need to have used the connectedhomeip repository and have build a "chip-tool" binary. This binary is needed to execute the tests. This binary needs to be placed in a own folder and needs to be executable for the user that executes these tests. By default the folder is called "bin" and is assumed to be in the root directory of the matter.js repository. If you want to use a different folder you need to set the environment variable "CHIP_TOOL_BIN_PATH" to the path of the folder.
The user that executes the tests need also be allowed to add new files and directories to this folder because the tests needs to create additional files and directories in this folder!

Currently the tests are designed to work with a chip-tool compiled from the "master" of the connectedhomeip repository. Other branches might have different requirements and tests may fail! As soon as v1.2 is released we will switch to this branch.

## Execution
To execute the tests you need to run `npm run test-chip` in the packages/matter-node.js folder.

### Limiting tests to one suite
Set the environment variable LIMIT_TO_ONE_TEST to the name of the Testclass you want to run.

e.g. `LIMIT_TO_ONE_TEST=Test_TC_BINFO_1_1Test npm run test-chip`

## Executing via CI
These tests are executed against the main branch of matter.js at the following conditions:
* every night by schedule
* can also be triggered on the main branch by using the "Chip Tool tests" workflow on GitHub.
* When files are changed in some relevant folders (clusters, tlv) or in the test-chip directory itself

Additionally, the tests can be triggered when the commit contains special keywords in the commit message. The following keywords are supported:
* `[execute-chiptests]` to execute the tests on the current branch
* `[rebuild-chip]` to rebuild the chip-tool executable from the connectedhomeip repository used by the CI (Attention: this needs 20+ minutes!)

## Known manual test cases
The following test cases are currently not automated and need to be executed manually:

* TC_BINFO_3_1
* TC_BRBINFO_2_2
* TC_BRBINFO_3_1 
