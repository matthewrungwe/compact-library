const shapeProperties = (sidesString) => {
    sidesAsNumber = Number(sidesString)
    let properties = {};
    switch(sidesAsNumber){
        case 1: 
            properties = {
                name: "line"
            }
            break;
        case 2:
            properties = {
                name: "digon"
            }
            break;
        case 3: 
            properties = {
                name: "triangle"
            }
            break;
        case 4: 
            properties = {
                name: "quadrilateral"
            }
            break;
        case 5: 
            properties = {
                name: "pentagon"
            }
            break;
        case 6:
            properties = {
                name: "hexagon"
            }
            break;
        case 7:
            properties = {
                name: "heptagon"
            }
            break;
        case 8:
            properties = {
                name: "octagon"
            }
             break;
        case 9: 
            properties = {
                name: "nonagon"
            }
            break;
        case 10:
            properties = {
                name: "decagon"
            }
            break; 
        case 11: 
            properties = {
                name: "hendecagon"
            }
            break;
        case 12:
            properties = {
                name: "dodecagon"
            }
            break;
        case 13: 
            properties = {
                name: "tridecagon"
            }
            break; 
        case 14: 
            properties = {
                name: "tetradecagon"
            }
            break;
        case 15:
            properties = {
                name: "pentadecagon"
            }
            break;
        case 16:
            properties = {
                name: "hexadecagon"
            }
            break;
        case 17: 
            properties = {
                name: "heptadecagon"
            }
            break;
        case 18:
            properties = {
                name: "octadecagon"
            }
            break;
        case 19:
            properties = {
                name: "enneadecagon"
            }
            break;
        case 20:
            properties = {
                name: "icosagon"
            }
            break;   
    }

    return properties;
}