// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Quote{
    string private quote;
    event quoteUploaded(string newQuote);
    event quoteUploadedByUser(string _time, string _quote, string _user, address _userAddress);

    // mapping(address => string) public users;

    struct userQuoteTime {
        mapping(address => string) u;
        string _quote;
        string _time ;        
        
    
    }
    function compareStrings (string memory a, string memory b) public view returns (bool) {
    return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))));
    }
    struct newUser {
        string userName;
        address walletAddress;
    }

    struct newQuote {
        string time;
        string newQuoteNew;
        string byUser;
        address userAddress;
    }

    mapping (uint256 => newUser) public users;

    mapping (uint256 => newQuote) public quotes;

    uint256 public userCount;
    uint256 public quoteCount;


    function setQuoteLatest(string memory _time, string memory _quote) public {
        // quote = _quote;
        newQuote memory Quote;
        Quote.time = _time;
        Quote.newQuoteNew = _quote;

        string memory _userName = exists1(msg.sender);
        bool result = compareStrings(_userName, "Undefined");
        if (result != true){
            quotes[quoteCount] = newQuote(_time, _quote, _userName, msg.sender);
            quoteCount++;
            emit quoteUploadedByUser(_time, _quote, _userName, msg.sender);
        } else {
            revert("You need To SignIn");
        }

    }

    function getQuoteByUser() public view returns(newQuote[] memory){
        newQuote[] memory id = new newQuote[](quoteCount);
        for (uint i = 0; i < quoteCount; i++) {
            newQuote storage quoteQ = quotes[i];
            id[i] = quoteQ;
        }
        return id;
    }
    



    function addNewUser(address _walletAddress, string memory _userName) public {
        string memory result = exists1(_walletAddress);

        
        if (compareStrings(result, "Undefined")) {
            newUser memory User;
            User.userName = _userName;
            User.walletAddress = _walletAddress;

            users[userCount] = newUser(_userName, _walletAddress);
            userCount++;
        }
    }



    function exists1(address num) public view returns (string memory) {


        for (uint i = 0; i < userCount; i++) {
            if (users[i].walletAddress == num) {
                return (users[i].userName);
            }
        }

        return "Undefined";
    }


}