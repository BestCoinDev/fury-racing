// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import "../src/interface/IRacing.sol";
import "./mocks/MockRacing.sol";
import { Test, console2 } from "forge-std/Test.sol";

contract RacingTest is Test, IRacing {
    MockRacing public racing;

    address public owner = address(0x1);
    address public player1 = address(0x2);
    address public player2 = address(0x3);
    address public player3 = address(0x4);

    PlayerAttributes public attributes1;
    PlayerAttributes public attributes2;

    function setUp() public {
        vm.deal(owner, 10 ether);
        vm.deal(player1, 10 ether);
        vm.deal(player2, 10 ether);
        vm.deal(player3, 10 ether);

        vm.startPrank(owner);
        racing = new MockRacing(
            address(0xA9d587a00A31A52Ed70D6026794a8FC5E2F5dCb0), // router
            address(0x5C210eF41CD1a72de73bF76eC39637bB0d3d7BEE), // vrfCoordinator
            4734827867964001365405830055140988844088387107361042566903892685164165989088, // vrfSubscriptionId
            8170, // functionSubscriptionId
            bytes32(0xc799bd1e3bd4d1a41cd4968997a4e03dfd2a3c7c04b695881138580163f42887), // keyHash
            bytes32("fun-avalanche-fuji-1") // donID
        );
        vm.stopPrank();

        attributes1 = PlayerAttributes({
            reliability: 5,
            maniability: 5,
            speed: 5,
            breaks: 5,
            car_balance: 5,
            aerodynamics: 5,
            driver_skills: 5,
            luck: 5
        });

        attributes2 = PlayerAttributes({
            reliability: 8,
            maniability: 7,
            speed: 6,
            breaks: 5,
            car_balance: 4,
            aerodynamics: 3,
            driver_skills: 3,
            luck: 4
        });
    }

    function testJoinBetRaceInvalidAttributes() public {
        PlayerAttributes memory _attributes3 = PlayerAttributes({
            reliability: 8,
            maniability: 5,
            speed: 6,
            breaks: 5,
            car_balance: 4,
            aerodynamics: 3,
            driver_skills: 3,
            luck: 4
        });

        vm.startPrank(player3);
        vm.expectRevert(Racing__InvalidAttributesSum.selector);
        racing.joinRace{ value: 0.1 ether }(_attributes3);
        vm.stopPrank();
    }

    function testJoinFreeRace() public {
        vm.startPrank(player1);
        racing.joinFreeRace(attributes1);
        vm.stopPrank();

        (PlayerAttributes memory attributes, address player1Address, uint16 player1ELO) =
            racing.addressToPlayer(player1);
        assertEq(player1Address, player1);
        assertEq(player1ELO, 1200);
    }

    // function testJoinBetRace() public {
    //     vm.startPrank(player1);
    //     racing.joinRace{ value: 0.1 ether }(attributes1);
    //     vm.stopPrank();

    //     vm.startPrank(player2);
    //     racing.joinRace{ value: 0.1 ether }(attributes2);
    //     vm.stopPrank();

    //     (PlayerAttributes memory _attributes1, address player1Address, uint16 player1ELO) =
    //         racing.addressToPlayer(player1);
    //     assertEq(player1Address, player1);
    //     assertEq(player1ELO, 1200);

    //     (PlayerAttributes memory _attributes2, address player2Address, uint16 player2ELO) =
    //         racing.addressToPlayer(player2);
    //     assertEq(player2Address, player2);
    //     assertEq(player2ELO, 1200);
    // }
}
