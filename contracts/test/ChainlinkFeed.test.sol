// SPDX-License-Identifier: BSL-1.1
pragma solidity 0.8.24;

import "../src/Errors.sol";
import { BaseTestSetup } from "./BaseTestSetup.sol";
import { FunctionsRequest } from "@chainlink/v0.8/functions/v1_0_0/libraries/FunctionsRequest.sol";
import { Strings } from "@openzeppelin/contracts/utils/Strings.sol";
import { Test, console2 } from "forge-std/Test.sol";

contract ChainlinkFeedTest is BaseTestSetup {
    using Strings for uint8;
    using FunctionsRequest for FunctionsRequest.Request;

    function setUp() public {
        setUpBase();
    }

    function testRequestRandomNumber() public {
        vm.startPrank(player1);
        uint256 raceId = 1;
        RaceMode raceMode = RaceMode.TOURNAMENT;

        uint256 requestId = racing.requestRandomNumber(raceId, raceMode);

        RandomRequests memory request = racing.getRandomRequestFromID(requestId);
        assert(request.exists);
        assert(!request.fulfilled);
        assertEq(request.randomWords.length, 0);

        RaceMode mode = racing.requestIdToRaceMode(bytes32(requestId));
        uint256 storedRaceId = racing.requestIdToRaceId(bytes32(requestId));
        assertEq(uint256(mode), uint256(raceMode));
        assertEq(storedRaceId, raceId);

        vm.stopPrank();
    }

    function testFulfillRandomWords() public {
        uint256 circuitId = 1;
        vm.startPrank(player1);
        racing.joinRace{ value: 0.1 ether }(attributes1, circuitId);
        vm.stopPrank();

        vm.startPrank(player2);
        racing.joinRace{ value: 0.1 ether }(attributes2, circuitId);
        vm.stopPrank();

        uint256 raceId = 1;
        RaceMode mode = RaceMode.TOURNAMENT;

        uint256 requestId = racing.requestRandomNumber(raceId, mode);
        uint256[] memory randomWords = new uint256[](2);
        randomWords[0] = uint256(keccak256(abi.encodePacked("random_word_1")));
        randomWords[1] = uint256(keccak256(abi.encodePacked("random_word_2")));

        racing._fulfillRandomWords(requestId, randomWords);

        RandomRequests memory request = racing.getRandomRequestFromID(requestId);
        assert(request.exists);
        assert(request.fulfilled);
        assertEq(request.randomWords[0], randomWords[0]);
        assertEq(request.randomWords[1], randomWords[1]);

        vm.stopPrank();
    }

    function testFormatFunctionsArgs() public view {
        uint256 circuit = 1;
        uint256 weather = 17;
        PlayerAttributes[] memory attributes = new PlayerAttributes[](2);
        attributes[0] = attributesAfterLuck1;
        attributes[1] = attributesAfterLuck2;

        string memory expectedArg = string(
            abi.encodePacked(
                racing._formatCircuitIndex(circuit),
                Strings.toString(weather),
                racing._formatPlayerAttributes(attributes[0]),
                racing._formatPlayerAttributes(attributes[1])
            )
        );

        string memory manualArg = "001750505050505050508070605040303040";
        string memory arg = racing.formatFunctionsArgs(circuit, weather, attributes);
        assertEq(expectedArg, manualArg);
        assertEq(arg, manualArg);
    }

    function testFormatPlayerAttributes() public view {
        string memory formattedAttributes = racing._formatPlayerAttributes(attributesAfterLuck1);

        string memory expected = string(
            abi.encodePacked(
                Strings.toString(attributesAfterLuck1.reliability),
                Strings.toString(attributesAfterLuck1.maniability),
                Strings.toString(attributesAfterLuck1.speed),
                Strings.toString(attributesAfterLuck1.breaks),
                Strings.toString(attributesAfterLuck1.car_balance),
                Strings.toString(attributesAfterLuck1.aerodynamics),
                Strings.toString(attributesAfterLuck1.driver_skills),
                Strings.toString(attributesAfterLuck1.luck)
            )
        );

        string memory manualString = "5050505050505050";
        assertEq(formattedAttributes, manualString);
        assertEq(formattedAttributes, expected);
    }

    function testFormatCircuitIndex() public view {
        // Test for single-digit circuit indices
        string memory formattedIndex1 = racing._formatCircuitIndex(1);
        string memory expectedIndex1 = "00";
        assertEq(formattedIndex1, expectedIndex1);

        string memory formattedIndex2 = racing._formatCircuitIndex(2);
        string memory expectedIndex2 = "01";
        assertEq(formattedIndex2, expectedIndex2);

        string memory formattedIndex9 = racing._formatCircuitIndex(10);
        string memory expectedIndex9 = "09";
        assertEq(formattedIndex9, expectedIndex9);

        // Test for double-digit circuit indices
        string memory formattedIndex10 = racing._formatCircuitIndex(11);
        string memory expectedIndex10 = "10";
        assertEq(formattedIndex10, expectedIndex10);

        string memory formattedIndex15 = racing._formatCircuitIndex(16);
        string memory expectedIndex15 = "15";
        assertEq(formattedIndex15, expectedIndex15);
    }

    function testFulfillRequest() public {
        vm.startPrank(player1);
        uint256 circuit = 1;
        uint256 weather = 17;
        PlayerAttributes[] memory attributes = new PlayerAttributes[](2);
        attributes[0] = attributesAfterLuck1;
        attributes[1] = attributesAfterLuck2;

        uint256 raceId = 1;
        RaceMode mode = RaceMode.FREE;

        bytes32 requestId = racing.requestRaceResult(circuit, raceId, weather, mode, attributes);

        uint256[] memory raceResults = new uint256[](2);
        raceResults[0] = 100;
        raceResults[1] = 200;

        // Fulfill the request
        racing._fulfillRequest(requestId, abi.encode(raceResults), "");

        // Verify the function behavior
        FunctionsRequests memory request = racing.getFunctionsRequestFromID(requestId);
        assert(request.exists);
        assert(request.fulfilled);
        assertEq(request.results[0], raceResults[0]);
        assertEq(request.results[1], raceResults[1]);

        vm.stopPrank();
    }

    // function testInitializeRequest() public {
    //     uint256 circuit = 1;
    //     PlayerAttributes[] memory attributes = new PlayerAttributes[](2);
    //     attributes[0] = attributesAfterLuck1;
    //     attributes[1] = attributesAfterLuck2;
    //     FunctionsRequest.Request memory req = racing.initializeRequest(circuit, weather,
    // attributes);

    //     // Verify the request initialization
    //     assertEq(req.location, FunctionsRequest.Location.Inline);
    //     assertEq(req.codeLanguage, FunctionsRequest.CodeLanguage.JavaScript);
    //     assertEq(req.sourceCode, racing.SOURCE_CODE());

    //     // Verify the arguments
    //     string[] memory expectedArgs = new string[](1);
    //     expectedArgs[0] = racing.formatFunctionsArgs(circuit, weather, attributes);
    //     assertEq(req.args, expectedArgs);
    // }
}
