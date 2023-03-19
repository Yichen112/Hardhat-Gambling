// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./hw_2_Challenge_Engine.sol";

contract Game {
    Engine private engine;

    constructor() {
        engine = new Engine();
    }

    function playGame(uint number_1, uint number_2) public view returns (uint) {
        return engine.bitwiseAnd(number_1, number_2);
    }
}




