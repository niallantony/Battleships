import Screen from "./screen.js"
import { Ship } from "./ship.js"
import { SHIP_IMAGES } from "./screen.js"

export const PlacementBoard = (gameboard) => {
    let placing = false;
    const shipBar = document.getElementById('ship-bar');

    const ships = {
        carrier:{
            coords:[],
            horizontal:true,
            length:5,
            placed:false,
        },
        battleship:{
            coords:[],
            horizontal:true,
            length:4,
            placed:false,
        },
        cruiser:{
            coords:[],
            horizontal:true,
            length:3,
            placed:false,
        },
        submarine:{
            coords:[],
            horizontal:true,
            length:3,
            placed:false,
        },
        destroyer:{
            coords:[],
            horizontal:true,
            length:2,
            placed:false,
        }
    }

    const setShips = () => {
        Object.keys(ships).forEach((ship) => {
            const newShip = Ship(ship);
            gameboard.placeShip(newShip,ships[ship].coords[0],ships[ship].coords[1],ships[ship].horizontal);
        })
    }

    const checkForUnplaced = () => {
        return Object.keys(ships).some((ship) => {return !ships[ship].placed})
    }

    const drawPlacementBoard = () => {
        const zoneDom = document.getElementById("left")
        const board = document.createElement('div');
        board.id = gameboard.id;
        zoneDom.appendChild(board);
        const size = gameboard.getLength();
        for (let i = 0 ; i < size ; i++ ) {
            const rowContainer = document.createElement('div');
            rowContainer.classList.add('row');
            board.appendChild(rowContainer);
            for (let j = 0 ; j < size ; j++ ) {
                const tile = document.createElement('button');
                tile.classList.add('tile');
                tile.id = `${j}-${i}`;
                tile.setAttribute('style','position:relative;')
                tile.classList.add(gameboard.squareStatus(j,i));
                rowContainer.appendChild(tile);
            }
        }
    }

    const renderPlacementScreen = () => {
        drawPlacementBoard();
        drawNextShipButton();
    }

    const drawNextShipButton = () => {
        const button = makeNextShipButton();
        button.addEventListener('click',() => {
            shipBar.removeChild(button);
            const ship = makeShip(button);
            shipPlacement(ship,ships[ship]);
        });
        shipBar.appendChild(button);
    }

    const clearShipBar = () => {
        const existing = document.querySelector('.place-ship');
        if (existing) existing.parentNode.removeChild(existing);
    }

    const makeNextShipButton = () => {
        clearShipBar();
        for (let key in ships) {
            if (ships[key].placed) continue;
            const buttonText = String('Place '+ key).toUpperCase();
            const button = document.createElement('button');
            button.classList.add('place-ship');
            button.id = key;
            button.textContent = buttonText;
            return button;
        }   
        return renderSubmitButton();
    }

    const makeShip = (button) => {
        const ship = Ship(button.id);
        ship.rotate();
        return ship
    }

    const createTemplate = (ship) => {
        const template = document.createElement('button');
        template.classList.add('placeholder');
        template.id = ship.name;
        template.style.position = 'absolute';
        template.style.top = '0px';
        template.style.left = '0px';
        template.style.backgroundImage = `url(${SHIP_IMAGES[ship.name]}`;
        return template;
    }

    const clearRotateButton = () => {
        shipBar.querySelectorAll('.rotate').forEach((button) => shipBar.removeChild(button));
    }

    const createRotateButton = () => {
        clearRotateButton();
        const button = document.createElement('button');
        button.classList.add('rotate');
        button.textContent = 'Rotate';
        shipBar.appendChild(button);
        return button;
    }


    const shipPlacement = (ship) => {
        placing = true;
        const tiles = document.querySelectorAll('.tile');
        const template = createTemplate(ship);
        const board = document.getElementById('left');
        board.appendChild(template);
        renderShip(template,tiles[0].offsetWidth,ship);
        const illegalSquares = findIllegalSquares(ship);
        TEMPconsoleIllegalTiles(illegalSquares);
        const rotate = createRotateButton();
        rotate.addEventListener('click',() => {
            removeMarker(template);
            rotateShip(ship);
        })
        tiles.forEach((tile) => {
            hoverImage(tile,template);
            if (illegalSquares.includes(tile.id)) {
                tile.classList.add('illegal');
                return;
            } else {
                tile.classList.remove('illegal');
            }
            tile.addEventListener('click',(e) => {
                placeTemplate(e.target.closest('.tile'),template,ship);
            });
        });
    }

    const findIllegalSquares = (ship) => {
        const illegalSquares = [];
        // Find out of bound squares
        for ( let i = 0 ; i < gameboard.getLength() ; i++ ) {
            for ( let j = gameboard.getLength() - (ship.length - 1); j < gameboard.getLength() ; j++ ) {
                const oobMove = ship.orientation ? [j,i] : [i,j] ;
                illegalSquares.push(oobMove.join('-'));
            }
        }
        //Get spaces that are obstructed by another ship
        for (let key in ships) {
            const spaceSet = new Set();
            if (!ships[key].placed) continue;
            const illMoves = getOccupiedSpaces(ships[key]);
            const arrayPointer = ship.orientation ? 0 : 1; 
            illMoves.forEach((space) => {
                spaceSet.add(space.join('-'));
                for( let i = 0 ; i < ship.length ; i++ ) {
                    const nextSpace = [...space];
                    nextSpace[arrayPointer] = nextSpace[arrayPointer] - i;
                    if (nextSpace[arrayPointer] < 0) continue ; 
                    spaceSet.add(nextSpace.join('-'));
                }
            });
            spaceSet.forEach((coord) => illegalSquares.push(coord));
        }
        return illegalSquares;
    }

    const getOccupiedSpaces = (marker) => {
        const spaces = new Set();
        const arrayPointer = marker.horizontal ? 0 : 1 ;
        for ( let i = 0 ; i < marker.length ; i++ ) {
            const currentCoord = [...marker.coords];
            currentCoord[arrayPointer] = currentCoord[arrayPointer] + i;
            spaces.add(currentCoord);
        }
        return spaces;
    }

    const renderShip = (image,unit,ship) => {
        const width = ship.orientation ? (unit*ship.length)+'px' : unit+'px';
        const height = ship.orientation ? unit +'px': (unit*ship.length)+'px';
        image.style.width = width;
        image.style.height = height;
    }

    const removeMarker = (template) => {
        template.parentNode.removeChild(template);
        const tiles = document.querySelectorAll('.tile');
        tiles.forEach((tile) => {
            tile.replaceWith(tile.cloneNode(true));
        })
    }

    const rotateShip = (ship) => {
        ship.rotate();
        shipPlacement(ship);
    }

    const moveShip = (template,ship) => {
        if (placing) return;
        clearShipBar();
        template.parentNode.removeChild(template);
        ships[ship.name].placed = false;
        shipPlacement(ship);
    }

    const placeTemplate = (tile,template,ship) => {
        clearRotateButton();
        const coords = Screen.getTarget(tile);
        const position = calculateTemplatePosition(tile.offsetWidth,coords);
        template.style.top = position.top;
        template.style.left = position.left;
        template.style.zIndex = 10;
        ships[template.id].coords = coords;
        ships[template.id].horizontal = ship.orientation;
        ships[template.id].placed = true;
        template.addEventListener('click',(e) => moveShip(e.target.closest('.placeholder'),ship));
        const tiles = document.querySelectorAll('.tile');
        tiles.forEach((tile) => {
            tile.replaceWith(tile.cloneNode(true));
        })
        placing = false;
        drawNextShipButton();
    }

    const calculateTemplatePosition = (unit,coords) => {
        const left = (coords[0]*unit)+'px';
        const top = (coords[1]*unit)+'px';
        return {
            left,
            top
        }
    }

    const renderSubmitButton = () => {
        const submitButton = document.createElement('button');
        submitButton.classList.add('submit-placement');
        submitButton.textContent = 'Submit';
        return submitButton
    }

    const TEMPconsoleIllegalTiles = (illegal) => {
        const consoleString = ['']
        for (let i = 0 ; i < 10 ; i++) {
            for (let j = 0 ; j < 10 ; j++ ) {
                if (illegal.includes(`${j}-${i}`)) {
                    consoleString.push('X');
                } else {
                    consoleString.push('O');
                }
            }
            consoleString.push('\n');
        }
        console.log(consoleString.join(' '));
    }

    const hoverImage = (element,img) => {
        const event = element.addEventListener('mouseover',(e) => {
            const tile = e.target.closest('.tile');
            const coords = Screen.getTarget(tile);
            const pos = calculateTemplatePosition(tile.offsetWidth,coords);
            if(tile.classList.contains('illegal')) {
                img.classList.add('out-of-bounds');
            } else {
                img.classList.remove('out-of-bounds');
            }
            img.style.top = pos.top;
            img.style.left = pos.left;
        })
        return event;
    }

    return {
        renderPlacementScreen,
    }
}