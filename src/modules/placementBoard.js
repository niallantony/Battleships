import Screen from "./screen.js"
import { Ship } from "./ship.js"
import { SHIP_IMAGES } from "./screen.js"

export const PlacementBoard = (gameboard) => {
    const ships = {
        carrier:{
            coords:[],
            horizontal:true,
            placed:false,
        },
        battleship:{
            coords:[],
            horizontal:true,
            placed:false,
        },
        cruiser:{
            coords:[],
            horizontal:true,
            placed:false,
        },
        submarine:{
            coords:[],
            horizontal:true,
            placed:false,
        },
        destroyer:{
            coords:[],
            horizontal:true,
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
                tile.setAttribute('style','position:relative;')
                tile.classList.add(gameboard.squareStatus(j,i));
                rowContainer.appendChild(tile);
            }
        }
    }

    const renderPlacementScreen = () => {
        drawPlacementBoard();
        const shipBar = document.getElementById('ship-bar');
        const shipsNames = Object.keys(ships);
        shipsNames.forEach((ship) => {
            const buttonText = String('Place '+ship).toUpperCase();
            const button = document.createElement('button');
            button.classList.add('place-ship');
            button.id = ship;
            button.textContent = buttonText;
            shipBar.appendChild(button);
            button.addEventListener('click',() => {
                shipBar.removeChild(button);
                const ship = makeShip(button);
                shipPlacement(ship,ships[ship]);
            })
        });
    }

    const makeShip = (button) => {
        const ship = Ship(button.id);
        ship.rotate();
        return ship
    }



    const shipPlacement = (ship) => {
        const tiles = document.querySelectorAll('.tile');
        const template = document.createElement('button');
        template.classList.add('placeholder');
        template.id = ship.name;
        template.style.position = 'absolute';
        template.style.top = '0px';
        template.style.left = '0px';
        template.style.backgroundImage = `url(${SHIP_IMAGES[ship.name]}`;
        const board = document.getElementById('left');
        board.appendChild(template);
        rotateShip(template,tiles[0].offsetWidth,ship);
        tiles.forEach((tile) => {
            if (isOutOfBounds(ship.orientation,ship.length,tile)) return;
            hoverImage(tile,template);
            tile.addEventListener('click',(e) => {
                placeTemplate(e.target.closest('.tile'),template,ship);
            });
        });
    }

    const isOutOfBounds = (orientation,length, tile) => {
        if (orientation) {
            const row = tile.parentNode.children;
            const index = Array.prototype.indexOf.call(row,tile);
            if ((length + index) > row.length) return true;
            return false;
        } else {
            const columns = tile.parentNode.parentNode.children;
            const index = Array.prototype.indexOf.call(columns,tile.parentNode);
            if ((length + index) > columns.length) return true;
            return false;
        }
    }

    const rotateShip = (image,unit,ship) => {
        const width = ship.orientation ? (unit*ship.length)+'px' : unit+'px';
        const height = ship.orientation ? unit +'px': (unit*ship.length)+'px';
        image.style.width = width;
        image.style.height = height;
        ship.rotate();
    }

    const moveShip = (template,ship) => {
        template.parentNode.removeChild(template);
        shipPlacement(ship);
    }

    const placeTemplate = (tile,template,ship) => {
        const coords = Screen.getTarget(tile);
        const position = calculateTemplatePosition(tile.offsetWidth,coords);
        template.style.top = position.top;
        template.style.left = position.left;
        template.style.zIndex = 10;
        ships[template.id].coords = coords;
        ships[template.id].placed = true;
        template.addEventListener('click',(e) => moveShip(e.target.closest('.placeholder'),ship));
        const tiles = document.querySelectorAll('.tile');
        tiles.forEach((tile) => {
            tile.replaceWith(tile.cloneNode(true));
        })
        console.log(checkForUnplaced());
        if (!checkForUnplaced()) {
            renderSubmitButton();
        } else {
            removeSubmitButton();
        }
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
        const shipBar = document.getElementById('ship-bar');
        const submitButton = document.createElement('button');
        submitButton.classList.add('submit-placement');
        shipBar.appendChild(submitButton);
    }

    const removeSubmitButton = () => {
        const submitButton = document.querySelectorAll('.submit-placement');
        submitButton.forEach((button) => button.parentNode.removeChild(button));
    }

    const hoverImage = (element,img) => {
        const event = element.addEventListener('mouseover',(e) => {
            const coords = Screen.getTarget(e.target.closest('.tile'));
            const pos = calculateTemplatePosition(e.target.closest('.tile').offsetWidth,coords);
            img.style.top = pos.top;
            img.style.left = pos.left;
        })
        return event;
    }

    return {
        renderPlacementScreen,
    }
}