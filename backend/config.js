module.exports = {
    AVALANCHE_NODE: "https://avalanche-fuji-c-chain-rpc.publicnode.com",
    CONTRACT_ADDRESS: "0xa1940Ac51C7bF051dD63edC1Fcb01c05a1E65c5A",
    ABI: [
        {
          type: "constructor",
          inputs: [
            { name: "_router", type: "address", internalType: "address" },
            { name: "_vrfCoordinator", type: "address", internalType: "address" },
            { name: "_vrfSubscriptionId", type: "uint256", internalType: "uint256" },
            { name: "_functionSubscriptionId", type: "uint64", internalType: "uint64" },
            { name: "_keyHash", type: "bytes32", internalType: "bytes32" },
            { name: "_donID", type: "bytes32", internalType: "bytes32" },
          ],
          stateMutability: "nonpayable",
        },
        { type: "fallback", stateMutability: "payable" },
        { type: "receive", stateMutability: "payable" },
        {
          type: "function",
          name: "acceptOwnership",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "addCircuit",
          inputs: [
            {
              name: "factors",
              type: "tuple",
              internalType: "struct IRacing.ExternalFactors",
              components: [
                { name: "weather", type: "uint8", internalType: "uint8" },
                { name: "crashes", type: "uint8", internalType: "uint8" },
                { name: "full_Throttle", type: "uint16", internalType: "uint16" },
                { name: "downforce", type: "uint8", internalType: "uint8" },
                { name: "top_Speed", type: "uint16", internalType: "uint16" },
              ],
            },
            { name: "name", type: "string", internalType: "string" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "addressToPlayer",
          inputs: [{ name: "", type: "address", internalType: "address" }],
          outputs: [
            {
              name: "attributes",
              type: "tuple",
              internalType: "struct IRacing.PlayerAttributes",
              components: [
                { name: "reliability", type: "uint8", internalType: "uint8" },
                { name: "maniability", type: "uint8", internalType: "uint8" },
                { name: "speed", type: "uint8", internalType: "uint8" },
                { name: "breaks", type: "uint8", internalType: "uint8" },
                { name: "car_balance", type: "uint8", internalType: "uint8" },
                { name: "aerodynamics", type: "uint8", internalType: "uint8" },
                { name: "driver_skills", type: "uint8", internalType: "uint8" },
                { name: "luck", type: "uint8", internalType: "uint8" },
              ],
            },
            { name: "playerAddress", type: "address", internalType: "address" },
            { name: "ELO", type: "uint16", internalType: "uint16" },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "betAmount",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "circuits",
          inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          outputs: [
            {
              name: "factors",
              type: "tuple",
              internalType: "struct IRacing.ExternalFactors",
              components: [
                { name: "weather", type: "uint8", internalType: "uint8" },
                { name: "crashes", type: "uint8", internalType: "uint8" },
                { name: "full_Throttle", type: "uint16", internalType: "uint16" },
                { name: "downforce", type: "uint8", internalType: "uint8" },
                { name: "top_Speed", type: "uint16", internalType: "uint16" },
              ],
            },
            { name: "index", type: "uint256", internalType: "uint256" },
            { name: "name", type: "string", internalType: "string" },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "currentPrizePool",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "emergencyWithdraw",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "freeRaceCounter",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getFreeRaceFromRaceID",
          inputs: [{ name: "raceId", type: "uint256", internalType: "uint256" }],
          outputs: [
            {
              name: "",
              type: "tuple",
              internalType: "struct IRacing.Race",
              components: [
                { name: "circuit", type: "uint256", internalType: "uint256" },
                { name: "mode", type: "uint8", internalType: "enum IRacing.RaceMode" },
                { name: "state", type: "uint8", internalType: "enum IRacing.RaceState" },
                { name: "player1", type: "address", internalType: "address" },
                { name: "player2", type: "address", internalType: "address" },
                { name: "player1Time", type: "uint40", internalType: "uint40" },
                { name: "player2Time", type: "uint40", internalType: "uint40" },
              ],
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getFunctionsRequestFromID",
          inputs: [{ name: "id", type: "bytes32", internalType: "bytes32" }],
          outputs: [
            {
              name: "",
              type: "tuple",
              internalType: "struct IRacing.FunctionsRequests",
              components: [
                { name: "fulfilled", type: "bool", internalType: "bool" },
                { name: "exists", type: "bool", internalType: "bool" },
                { name: "results", type: "uint256[]", internalType: "uint256[]" },
              ],
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getRaceFromRaceID",
          inputs: [{ name: "raceId", type: "uint256", internalType: "uint256" }],
          outputs: [
            {
              name: "",
              type: "tuple",
              internalType: "struct IRacing.Race",
              components: [
                { name: "circuit", type: "uint256", internalType: "uint256" },
                { name: "mode", type: "uint8", internalType: "enum IRacing.RaceMode" },
                { name: "state", type: "uint8", internalType: "enum IRacing.RaceState" },
                { name: "player1", type: "address", internalType: "address" },
                { name: "player2", type: "address", internalType: "address" },
                { name: "player1Time", type: "uint40", internalType: "uint40" },
                { name: "player2Time", type: "uint40", internalType: "uint40" },
              ],
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getRandomRequestFromID",
          inputs: [{ name: "id", type: "uint256", internalType: "uint256" }],
          outputs: [
            {
              name: "",
              type: "tuple",
              internalType: "struct IRacing.RandomRequests",
              components: [
                { name: "fulfilled", type: "bool", internalType: "bool" },
                { name: "exists", type: "bool", internalType: "bool" },
                { name: "randomWords", type: "uint256[]", internalType: "uint256[]" },
              ],
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getSoloRaceFromRaceID",
          inputs: [{ name: "raceId", type: "uint256", internalType: "uint256" }],
          outputs: [
            {
              name: "",
              type: "tuple",
              internalType: "struct IRacing.Race",
              components: [
                { name: "circuit", type: "uint256", internalType: "uint256" },
                { name: "mode", type: "uint8", internalType: "enum IRacing.RaceMode" },
                { name: "state", type: "uint8", internalType: "enum IRacing.RaceState" },
                { name: "player1", type: "address", internalType: "address" },
                { name: "player2", type: "address", internalType: "address" },
                { name: "player1Time", type: "uint40", internalType: "uint40" },
                { name: "player2Time", type: "uint40", internalType: "uint40" },
              ],
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "handleOracleFulfillment",
          inputs: [
            { name: "requestId", type: "bytes32", internalType: "bytes32" },
            { name: "response", type: "bytes", internalType: "bytes" },
            { name: "err", type: "bytes", internalType: "bytes" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "joinFreeRace",
          inputs: [
            {
              name: "attributes",
              type: "tuple",
              internalType: "struct IRacing.PlayerAttributes",
              components: [
                { name: "reliability", type: "uint8", internalType: "uint8" },
                { name: "maniability", type: "uint8", internalType: "uint8" },
                { name: "speed", type: "uint8", internalType: "uint8" },
                { name: "breaks", type: "uint8", internalType: "uint8" },
                { name: "car_balance", type: "uint8", internalType: "uint8" },
                { name: "aerodynamics", type: "uint8", internalType: "uint8" },
                { name: "driver_skills", type: "uint8", internalType: "uint8" },
                { name: "luck", type: "uint8", internalType: "uint8" },
              ],
            },
            { name: "circuitId", type: "uint256", internalType: "uint256" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "joinRace",
          inputs: [
            {
              name: "attributes",
              type: "tuple",
              internalType: "struct IRacing.PlayerAttributes",
              components: [
                { name: "reliability", type: "uint8", internalType: "uint8" },
                { name: "maniability", type: "uint8", internalType: "uint8" },
                { name: "speed", type: "uint8", internalType: "uint8" },
                { name: "breaks", type: "uint8", internalType: "uint8" },
                { name: "car_balance", type: "uint8", internalType: "uint8" },
                { name: "aerodynamics", type: "uint8", internalType: "uint8" },
                { name: "driver_skills", type: "uint8", internalType: "uint8" },
                { name: "luck", type: "uint8", internalType: "uint8" },
              ],
            },
            { name: "circuitId", type: "uint256", internalType: "uint256" },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "joinSoloRace",
          inputs: [
            {
              name: "attributes1",
              type: "tuple",
              internalType: "struct IRacing.PlayerAttributes",
              components: [
                { name: "reliability", type: "uint8", internalType: "uint8" },
                { name: "maniability", type: "uint8", internalType: "uint8" },
                { name: "speed", type: "uint8", internalType: "uint8" },
                { name: "breaks", type: "uint8", internalType: "uint8" },
                { name: "car_balance", type: "uint8", internalType: "uint8" },
                { name: "aerodynamics", type: "uint8", internalType: "uint8" },
                { name: "driver_skills", type: "uint8", internalType: "uint8" },
                { name: "luck", type: "uint8", internalType: "uint8" },
              ],
            },
            {
              name: "attributes2",
              type: "tuple",
              internalType: "struct IRacing.PlayerAttributes",
              components: [
                { name: "reliability", type: "uint8", internalType: "uint8" },
                { name: "maniability", type: "uint8", internalType: "uint8" },
                { name: "speed", type: "uint8", internalType: "uint8" },
                { name: "breaks", type: "uint8", internalType: "uint8" },
                { name: "car_balance", type: "uint8", internalType: "uint8" },
                { name: "aerodynamics", type: "uint8", internalType: "uint8" },
                { name: "driver_skills", type: "uint8", internalType: "uint8" },
                { name: "luck", type: "uint8", internalType: "uint8" },
              ],
            },
            { name: "circuitId", type: "uint256", internalType: "uint256" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "lastPrizeDistribution",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [{ name: "", type: "address", internalType: "address" }],
          stateMutability: "view",
        },
        { type: "function", name: "pause", inputs: [], outputs: [], stateMutability: "nonpayable" },
        {
          type: "function",
          name: "paused",
          inputs: [],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "playersCounter",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "raceCounter",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "rawFulfillRandomWords",
          inputs: [
            { name: "requestId", type: "uint256", internalType: "uint256" },
            { name: "randomWords", type: "uint256[]", internalType: "uint256[]" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "s_vrfCoordinator",
          inputs: [],
          outputs: [{ name: "", type: "address", internalType: "contract IVRFCoordinatorV2Plus" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "setBetAmount",
          inputs: [{ name: "_betAmount", type: "uint256", internalType: "uint256" }],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setCoordinator",
          inputs: [{ name: "_vrfCoordinator", type: "address", internalType: "address" }],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "soloRaceCounter",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "tournamentPlayersCounter",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [{ name: "to", type: "address", internalType: "address" }],
          outputs: [],
          stateMutability: "nonpayable",
        },
        { type: "function", name: "unpause", inputs: [], outputs: [], stateMutability: "nonpayable" },
        {
          type: "function",
          name: "updateWeatherDataForCircuit",
          inputs: [
            { name: "circuitIndex", type: "uint256", internalType: "uint256" },
            { name: "data", type: "uint256", internalType: "uint256" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "weeklyTournamentCounter",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "event",
          name: "BetAmountUpdated",
          inputs: [
            { name: "newBetAmount", type: "uint256", indexed: false, internalType: "uint256" },
            { name: "oldBetAmount", type: "uint256", indexed: false, internalType: "uint256" },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "CoordinatorSet",
          inputs: [{ name: "vrfCoordinator", type: "address", indexed: false, internalType: "address" }],
          anonymous: false,
        },
        {
          type: "event",
          name: "FinishedRace",
          inputs: [
            { name: "raceId", type: "uint256", indexed: false, internalType: "uint256" },
            { name: "winner", type: "address", indexed: false, internalType: "address" },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "FreeRaceStarted",
          inputs: [{ name: "raceId", type: "uint256", indexed: false, internalType: "uint256" }],
          anonymous: false,
        },
        {
          type: "event",
          name: "JoinedRace",
          inputs: [
            { name: "player", type: "address", indexed: true, internalType: "address" },
            { name: "raceId", type: "uint256", indexed: false, internalType: "uint256" },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "OwnershipTransferRequested",
          inputs: [
            { name: "from", type: "address", indexed: true, internalType: "address" },
            { name: "to", type: "address", indexed: true, internalType: "address" },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "OwnershipTransferred",
          inputs: [
            { name: "from", type: "address", indexed: true, internalType: "address" },
            { name: "to", type: "address", indexed: true, internalType: "address" },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Paused",
          inputs: [{ name: "account", type: "address", indexed: false, internalType: "address" }],
          anonymous: false,
        },
        {
          type: "event",
          name: "PlayerCreated",
          inputs: [
            { name: "player", type: "address", indexed: true, internalType: "address" },
            {
              name: "attributes",
              type: "tuple",
              indexed: false,
              internalType: "struct IRacing.PlayerAttributes",
              components: [
                { name: "reliability", type: "uint8", internalType: "uint8" },
                { name: "maniability", type: "uint8", internalType: "uint8" },
                { name: "speed", type: "uint8", internalType: "uint8" },
                { name: "breaks", type: "uint8", internalType: "uint8" },
                { name: "car_balance", type: "uint8", internalType: "uint8" },
                { name: "aerodynamics", type: "uint8", internalType: "uint8" },
                { name: "driver_skills", type: "uint8", internalType: "uint8" },
                { name: "luck", type: "uint8", internalType: "uint8" },
              ],
            },
            { name: "playerId", type: "uint256", indexed: false, internalType: "uint256" },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RaceResultFulfilled",
          inputs: [
            { name: "requestId", type: "bytes32", indexed: true, internalType: "bytes32" },
            { name: "values", type: "uint256[]", indexed: false, internalType: "uint256[]" },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RaceStarted",
          inputs: [{ name: "raceId", type: "uint256", indexed: false, internalType: "uint256" }],
          anonymous: false,
        },
        {
          type: "event",
          name: "RandomnessReceived",
          inputs: [
            { name: "requestId", type: "uint256", indexed: false, internalType: "uint256" },
            { name: "randomWords", type: "uint256[]", indexed: false, internalType: "uint256[]" },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RequestFulfilled",
          inputs: [{ name: "id", type: "bytes32", indexed: true, internalType: "bytes32" }],
          anonymous: false,
        },
        {
          type: "event",
          name: "RequestSent",
          inputs: [{ name: "id", type: "bytes32", indexed: true, internalType: "bytes32" }],
          anonymous: false,
        },
        {
          type: "event",
          name: "RequestedRandomness",
          inputs: [
            { name: "requestId", type: "uint256", indexed: false, internalType: "uint256" },
            { name: "numWords", type: "uint32", indexed: false, internalType: "uint32" },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "SoloRaceStarted",
          inputs: [
            { name: "player", type: "address", indexed: true, internalType: "address" },
            { name: "raceId", type: "uint256", indexed: false, internalType: "uint256" },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Unpaused",
          inputs: [{ name: "account", type: "address", indexed: false, internalType: "address" }],
          anonymous: false,
        },
        { type: "error", name: "ChainlinkFeed__InvalidCircuitIndex", inputs: [] },
        { type: "error", name: "ChainlinkFeed__InvalidFunctionRequestId", inputs: [] },
        { type: "error", name: "ChainlinkFeed__InvalidRandomRequestId", inputs: [] },
        { type: "error", name: "EmptyArgs", inputs: [] },
        { type: "error", name: "EmptySource", inputs: [] },
        { type: "error", name: "EnforcedPause", inputs: [] },
        { type: "error", name: "ExpectedPause", inputs: [] },
        { type: "error", name: "NoInlineSecrets", inputs: [] },
        {
          type: "error",
          name: "OnlyCoordinatorCanFulfill",
          inputs: [
            { name: "have", type: "address", internalType: "address" },
            { name: "want", type: "address", internalType: "address" },
          ],
        },
        {
          type: "error",
          name: "OnlyOwnerOrCoordinator",
          inputs: [
            { name: "have", type: "address", internalType: "address" },
            { name: "owner", type: "address", internalType: "address" },
            { name: "coordinator", type: "address", internalType: "address" },
          ],
        },
        { type: "error", name: "OnlyRouterCanFulfill", inputs: [] },
        { type: "error", name: "Racing__CircuitNotFound", inputs: [] },
        { type: "error", name: "Racing__EmergencyWithdrawFailed", inputs: [] },
        { type: "error", name: "Racing__InvalidAttribute", inputs: [] },
        { type: "error", name: "Racing__InvalidAttributesSum", inputs: [] },
        { type: "error", name: "Racing__InvalidBetAmount", inputs: [] },
        { type: "error", name: "Racing__WeeklyPaymentFailed", inputs: [] },
        { type: "error", name: "Racing__WeeklyPaymentInsufficientBalance", inputs: [] },
        { type: "error", name: "Racing__WinnerPaymentFailed", inputs: [] },
        { type: "error", name: "ReentrancyGuardReentrantCall", inputs: [] },
        { type: "error", name: "ZeroAddress", inputs: [] },
    ],

}