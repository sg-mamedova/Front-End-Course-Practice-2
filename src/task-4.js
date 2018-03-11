
export default function runRover(commandsList) {

    const coords = {
        x: 0,
        y: 0
    };

    let cuurentRoute = 'top';

    const routes = {
        top: {
            left: 'left',
            right: 'right'
        },
        left: {
            left: 'bottom',
            right: 'top'
        },
        right: {
            left: 'top',
            right: 'bottom'
        },
        bottom: {
            left: 'right',
            right: 'left'
        },
    };
    function isValid(item) {
        return ["go", "turn"].indexOf(item.command[0]) > -1 && (["left", "right"].indexOf(item.command[1]) > -1 || parseInt(item.command[1],10));
    }
    function execCommand(command) {
        if (command[0] === 'go') {
            const step = parseInt(command[1]);
            switch(cuurentRoute) {
                case 'top':
                    coords.y += step;
                    break;
                case 'bottom':
                    coords.y -= step;
                    break;
                case 'left':
                    coords.x -= step;
                    break;
                case 'right':
                    coords.x += step;
                    break;
            }
        } else if (command[0] === 'turn') {
            cuurentRoute = routes[cuurentRoute][command[1]];
        }
    }

    commandsList
        .sort(function(a, b) { //сортирую по порядку исполнения команд
            let x = a.order;
            let y = b.order;
            return x < y ? -1 : (x > y ? 1 : 0);
        })
        .map(function(item) {// для удобства команды разбиваю на масив
            if(typeof item.command.split === 'function' ) {
                item.command = item.command.split(' ', 2);
            }
            return item;
        })
        .filter(function(item){ //оставляю только правильные комманды
            if (isValid(item)){
                execCommand(item.command);
                return true;
            }
            return false;
        });

    return coords;
}

