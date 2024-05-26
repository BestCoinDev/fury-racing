module.exports = {
  AVALANCHE_NODE: "https://avalanche-fuji-c-chain-rpc.publicnode.com",
  INFURA_FUJI_NODE: "https://avalanche-fuji.infura.io/v3/fb9636a98c6546ec9d5470453e50d9ff",
  INFURA_PROJECT_ID: "bcd90c270898426da706434eb8265332",
  CONTRACT_ADDRESS: "0xba9d10112E4CEdb056FEB6700090f287AF0b66B9",
  WEATHER_CITY: "Monaco",
  ABI: [
    {
      type: "function",
      name: "getWeekAndPlayerAmount",
      inputs: [],
      outputs: [
        { name: "", type: "uint256", internalType: "uint256" },
        { name: "", type: "uint256", internalType: "uint256" },
      ],
      stateMutability: "view",
    },
  ],
  RACING_ABI: [
    {
      inputs: [
        { internalType: "address", name: "_router", type: "address" },
        { internalType: "address", name: "_vrfCoordinator", type: "address" },
        { internalType: "uint256", name: "_vrfSubscriptionId", type: "uint256" },
        { internalType: "uint64", name: "_functionSubscriptionId", type: "uint64" },
        { internalType: "bytes32", name: "_keyHash", type: "bytes32" },
        { internalType: "bytes32", name: "_donID", type: "bytes32" },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    { inputs: [], name: "ChainlinkFeed__InvalidCircuitIndex", type: "error" },
    { inputs: [], name: "ChainlinkFeed__InvalidFunctionRequestId", type: "error" },
    { inputs: [], name: "ChainlinkFeed__InvalidRandomRequestId", type: "error" },
    { inputs: [], name: "EmptyArgs", type: "error" },
    { inputs: [], name: "EmptySource", type: "error" },
    { inputs: [], name: "EnforcedPause", type: "error" },
    { inputs: [], name: "ExpectedPause", type: "error" },
    { inputs: [], name: "NoInlineSecrets", type: "error" },
    {
      inputs: [
        { internalType: "address", name: "have", type: "address" },
        { internalType: "address", name: "want", type: "address" },
      ],
      name: "OnlyCoordinatorCanFulfill",
      type: "error",
    },
    {
      inputs: [
        { internalType: "address", name: "have", type: "address" },
        { internalType: "address", name: "owner", type: "address" },
        { internalType: "address", name: "coordinator", type: "address" },
      ],
      name: "OnlyOwnerOrCoordinator",
      type: "error",
    },
    { inputs: [], name: "OnlyRouterCanFulfill", type: "error" },
    { inputs: [], name: "Racing__CircuitNotFound", type: "error" },
    { inputs: [], name: "Racing__EmergencyWithdrawFailed", type: "error" },
    { inputs: [], name: "Racing__InvalidAttribute", type: "error" },
    { inputs: [], name: "Racing__InvalidAttributesSum", type: "error" },
    { inputs: [], name: "Racing__InvalidBetAmount", type: "error" },
    { inputs: [], name: "Racing__WeeklyPaymentFailed", type: "error" },
    { inputs: [], name: "Racing__WeeklyPaymentInsufficientBalance", type: "error" },
    { inputs: [], name: "Racing__WinnerPaymentFailed", type: "error" },
    { inputs: [], name: "ReentrancyGuardReentrantCall", type: "error" },
    { inputs: [], name: "ZeroAddress", type: "error" },
    {
      anonymous: false,
      inputs: [
        { indexed: false, internalType: "uint256", name: "newBetAmount", type: "uint256" },
        { indexed: false, internalType: "uint256", name: "oldBetAmount", type: "uint256" },
      ],
      name: "BetAmountUpdated",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [{ indexed: false, internalType: "address", name: "vrfCoordinator", type: "address" }],
      name: "CoordinatorSet",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: "uint256", name: "raceId", type: "uint256" },
        { indexed: false, internalType: "address", name: "winner", type: "address" },
        { indexed: false, internalType: "address", name: "loser", type: "address" },
      ],
      name: "FinishedRace",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [{ indexed: false, internalType: "uint256", name: "raceId", type: "uint256" }],
      name: "FreeRaceStarted",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: "address", name: "player", type: "address" },
        { indexed: false, internalType: "uint256", name: "raceId", type: "uint256" },
      ],
      name: "JoinedRace",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: "address", name: "from", type: "address" },
        { indexed: true, internalType: "address", name: "to", type: "address" },
      ],
      name: "OwnershipTransferRequested",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: "address", name: "from", type: "address" },
        { indexed: true, internalType: "address", name: "to", type: "address" },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [{ indexed: false, internalType: "address", name: "account", type: "address" }],
      name: "Paused",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: "address", name: "player", type: "address" },
        {
          components: [
            { internalType: "uint8", name: "reliability", type: "uint8" },
            { internalType: "uint8", name: "maniability", type: "uint8" },
            { internalType: "uint8", name: "speed", type: "uint8" },
            { internalType: "uint8", name: "breaks", type: "uint8" },
            { internalType: "uint8", name: "car_balance", type: "uint8" },
            { internalType: "uint8", name: "aerodynamics", type: "uint8" },
            { internalType: "uint8", name: "driver_skills", type: "uint8" },
            { internalType: "uint8", name: "luck", type: "uint8" },
          ],
          indexed: false,
          internalType: "struct IRacing.PlayerAttributes",
          name: "attributes",
          type: "tuple",
        },
        { indexed: false, internalType: "uint256", name: "playerId", type: "uint256" },
      ],
      name: "PlayerCreated",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: "bytes32", name: "requestId", type: "bytes32" },
        { indexed: false, internalType: "uint256[]", name: "values", type: "uint256[]" },
      ],
      name: "RaceResultFulfilled",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [{ indexed: false, internalType: "uint256", name: "raceId", type: "uint256" }],
      name: "RaceStarted",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, internalType: "uint256", name: "requestId", type: "uint256" },
        { indexed: false, internalType: "uint256[]", name: "randomWords", type: "uint256[]" },
      ],
      name: "RandomnessReceived",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [{ indexed: true, internalType: "bytes32", name: "id", type: "bytes32" }],
      name: "RequestFulfilled",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [{ indexed: true, internalType: "bytes32", name: "id", type: "bytes32" }],
      name: "RequestSent",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, internalType: "uint256", name: "requestId", type: "uint256" },
        { indexed: false, internalType: "uint32", name: "numWords", type: "uint32" },
      ],
      name: "RequestedRandomness",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: "address", name: "player", type: "address" },
        { indexed: false, internalType: "uint256", name: "raceId", type: "uint256" },
      ],
      name: "SoloRaceStarted",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [{ indexed: false, internalType: "address", name: "account", type: "address" }],
      name: "Unpaused",
      type: "event",
    },
    { stateMutability: "payable", type: "fallback" },
    { inputs: [], name: "acceptOwnership", outputs: [], stateMutability: "nonpayable", type: "function" },
    {
      inputs: [
        {
          components: [
            { internalType: "uint8", name: "weather", type: "uint8" },
            { internalType: "uint8", name: "crashes", type: "uint8" },
            { internalType: "uint16", name: "full_Throttle", type: "uint16" },
            { internalType: "uint8", name: "downforce", type: "uint8" },
            { internalType: "uint16", name: "top_Speed", type: "uint16" },
          ],
          internalType: "struct IRacing.ExternalFactors",
          name: "factors",
          type: "tuple",
        },
        { internalType: "string", name: "name", type: "string" },
      ],
      name: "addCircuit",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "addressToPlayer",
      outputs: [
        {
          components: [
            { internalType: "uint8", name: "reliability", type: "uint8" },
            { internalType: "uint8", name: "maniability", type: "uint8" },
            { internalType: "uint8", name: "speed", type: "uint8" },
            { internalType: "uint8", name: "breaks", type: "uint8" },
            { internalType: "uint8", name: "car_balance", type: "uint8" },
            { internalType: "uint8", name: "aerodynamics", type: "uint8" },
            { internalType: "uint8", name: "driver_skills", type: "uint8" },
            { internalType: "uint8", name: "luck", type: "uint8" },
          ],
          internalType: "struct IRacing.PlayerAttributes",
          name: "attributes",
          type: "tuple",
        },
        { internalType: "address", name: "playerAddress", type: "address" },
        { internalType: "uint16", name: "ELO", type: "uint16" },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "betAmount",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      name: "circuits",
      outputs: [
        {
          components: [
            { internalType: "uint8", name: "weather", type: "uint8" },
            { internalType: "uint8", name: "crashes", type: "uint8" },
            { internalType: "uint16", name: "full_Throttle", type: "uint16" },
            { internalType: "uint8", name: "downforce", type: "uint8" },
            { internalType: "uint16", name: "top_Speed", type: "uint16" },
          ],
          internalType: "struct IRacing.ExternalFactors",
          name: "factors",
          type: "tuple",
        },
        { internalType: "uint256", name: "index", type: "uint256" },
        { internalType: "string", name: "name", type: "string" },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "currentPrizePool",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    { inputs: [], name: "emergencyWithdraw", outputs: [], stateMutability: "nonpayable", type: "function" },
    {
      inputs: [],
      name: "freeRaceCounter",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "raceId", type: "uint256" }],
      name: "getFreeRaceFromRaceID",
      outputs: [
        {
          components: [
            { internalType: "uint256", name: "circuit", type: "uint256" },
            { internalType: "enum IRacing.RaceMode", name: "mode", type: "uint8" },
            { internalType: "enum IRacing.RaceState", name: "state", type: "uint8" },
            { internalType: "address", name: "player1", type: "address" },
            { internalType: "address", name: "player2", type: "address" },
            { internalType: "uint40", name: "player1Time", type: "uint40" },
            { internalType: "uint40", name: "player2Time", type: "uint40" },
          ],
          internalType: "struct IRacing.Race",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "bytes32", name: "id", type: "bytes32" }],
      name: "getFunctionsRequestFromID",
      outputs: [
        {
          components: [
            { internalType: "bool", name: "fulfilled", type: "bool" },
            { internalType: "bool", name: "exists", type: "bool" },
            { internalType: "uint256[]", name: "results", type: "uint256[]" },
          ],
          internalType: "struct IRacing.FunctionsRequests",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "week", type: "uint256" },
        { internalType: "uint256", name: "index", type: "uint256" },
      ],
      name: "getPlayerAddressForWeeklyTournament",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "raceId", type: "uint256" }],
      name: "getRaceFromRaceID",
      outputs: [
        {
          components: [
            { internalType: "uint256", name: "circuit", type: "uint256" },
            { internalType: "enum IRacing.RaceMode", name: "mode", type: "uint8" },
            { internalType: "enum IRacing.RaceState", name: "state", type: "uint8" },
            { internalType: "address", name: "player1", type: "address" },
            { internalType: "address", name: "player2", type: "address" },
            { internalType: "uint40", name: "player1Time", type: "uint40" },
            { internalType: "uint40", name: "player2Time", type: "uint40" },
          ],
          internalType: "struct IRacing.Race",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "id", type: "uint256" }],
      name: "getRandomRequestFromID",
      outputs: [
        {
          components: [
            { internalType: "bool", name: "fulfilled", type: "bool" },
            { internalType: "bool", name: "exists", type: "bool" },
            { internalType: "uint256[]", name: "randomWords", type: "uint256[]" },
          ],
          internalType: "struct IRacing.RandomRequests",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "raceId", type: "uint256" }],
      name: "getSoloRaceFromRaceID",
      outputs: [
        {
          components: [
            { internalType: "uint256", name: "circuit", type: "uint256" },
            { internalType: "enum IRacing.RaceMode", name: "mode", type: "uint8" },
            { internalType: "enum IRacing.RaceState", name: "state", type: "uint8" },
            { internalType: "address", name: "player1", type: "address" },
            { internalType: "address", name: "player2", type: "address" },
            { internalType: "uint40", name: "player1Time", type: "uint40" },
            { internalType: "uint40", name: "player2Time", type: "uint40" },
          ],
          internalType: "struct IRacing.Race",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getWeekAndPlayerAmount",
      outputs: [
        { internalType: "uint256", name: "", type: "uint256" },
        { internalType: "uint256", name: "", type: "uint256" },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "bytes32", name: "requestId", type: "bytes32" },
        { internalType: "bytes", name: "response", type: "bytes" },
        { internalType: "bytes", name: "err", type: "bytes" },
      ],
      name: "handleOracleFulfillment",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            { internalType: "uint8", name: "reliability", type: "uint8" },
            { internalType: "uint8", name: "maniability", type: "uint8" },
            { internalType: "uint8", name: "speed", type: "uint8" },
            { internalType: "uint8", name: "breaks", type: "uint8" },
            { internalType: "uint8", name: "car_balance", type: "uint8" },
            { internalType: "uint8", name: "aerodynamics", type: "uint8" },
            { internalType: "uint8", name: "driver_skills", type: "uint8" },
            { internalType: "uint8", name: "luck", type: "uint8" },
          ],
          internalType: "struct IRacing.PlayerAttributes",
          name: "attributes",
          type: "tuple",
        },
        { internalType: "uint256", name: "circuitId", type: "uint256" },
      ],
      name: "joinFreeRace",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            { internalType: "uint8", name: "reliability", type: "uint8" },
            { internalType: "uint8", name: "maniability", type: "uint8" },
            { internalType: "uint8", name: "speed", type: "uint8" },
            { internalType: "uint8", name: "breaks", type: "uint8" },
            { internalType: "uint8", name: "car_balance", type: "uint8" },
            { internalType: "uint8", name: "aerodynamics", type: "uint8" },
            { internalType: "uint8", name: "driver_skills", type: "uint8" },
            { internalType: "uint8", name: "luck", type: "uint8" },
          ],
          internalType: "struct IRacing.PlayerAttributes",
          name: "attributes",
          type: "tuple",
        },
        { internalType: "uint256", name: "circuitId", type: "uint256" },
      ],
      name: "joinRace",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            { internalType: "uint8", name: "reliability", type: "uint8" },
            { internalType: "uint8", name: "maniability", type: "uint8" },
            { internalType: "uint8", name: "speed", type: "uint8" },
            { internalType: "uint8", name: "breaks", type: "uint8" },
            { internalType: "uint8", name: "car_balance", type: "uint8" },
            { internalType: "uint8", name: "aerodynamics", type: "uint8" },
            { internalType: "uint8", name: "driver_skills", type: "uint8" },
            { internalType: "uint8", name: "luck", type: "uint8" },
          ],
          internalType: "struct IRacing.PlayerAttributes",
          name: "attributes1",
          type: "tuple",
        },
        {
          components: [
            { internalType: "uint8", name: "reliability", type: "uint8" },
            { internalType: "uint8", name: "maniability", type: "uint8" },
            { internalType: "uint8", name: "speed", type: "uint8" },
            { internalType: "uint8", name: "breaks", type: "uint8" },
            { internalType: "uint8", name: "car_balance", type: "uint8" },
            { internalType: "uint8", name: "aerodynamics", type: "uint8" },
            { internalType: "uint8", name: "driver_skills", type: "uint8" },
            { internalType: "uint8", name: "luck", type: "uint8" },
          ],
          internalType: "struct IRacing.PlayerAttributes",
          name: "attributes2",
          type: "tuple",
        },
        { internalType: "uint256", name: "circuitId", type: "uint256" },
      ],
      name: "joinSoloRace",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "lastPrizeDistribution",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    { inputs: [], name: "pause", outputs: [], stateMutability: "nonpayable", type: "function" },
    {
      inputs: [],
      name: "paused",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "playersCounter",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "raceCounter",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "requestId", type: "uint256" },
        { internalType: "uint256[]", name: "randomWords", type: "uint256[]" },
      ],
      name: "rawFulfillRandomWords",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "s_vrfCoordinator",
      outputs: [{ internalType: "contract IVRFCoordinatorV2Plus", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "_betAmount", type: "uint256" }],
      name: "setBetAmount",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "_vrfCoordinator", type: "address" }],
      name: "setCoordinator",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "soloRaceCounter",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "tournamentPlayersCounter",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "to", type: "address" }],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    { inputs: [], name: "unpause", outputs: [], stateMutability: "nonpayable", type: "function" },
    {
      inputs: [
        { internalType: "uint256", name: "circuitIndex", type: "uint256" },
        { internalType: "uint256", name: "data", type: "uint256" },
      ],
      name: "updateWeatherDataForCircuit",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "weeklyTournamentCounter",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    { stateMutability: "payable", type: "receive" },
  ],
};
