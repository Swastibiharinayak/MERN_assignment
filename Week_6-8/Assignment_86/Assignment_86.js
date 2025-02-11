function angle(given) {
    if (given >= 0 && given < 90) {
        console.log("Acute angle");
    } else if (given == 90) {
        console.log("Right angle");
    } else if (given > 90 && given < 180) {
        console.log("Obtuse angle");
    } else if (given == 180) {
        console.log("Straight angle");
    } else{
        console.log("Not an angle");
    }
}

angle(55);
angle(90);
angle(138);
angle(180);
angle(1855);
