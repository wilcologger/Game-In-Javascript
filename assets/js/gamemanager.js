let GameManager = {
    setGameStart: function (classType) {
        this.resetPlayer(classType);
        this.setPreFight();
    },
    resetPlayer: function (classType) {
        switch (classType) {
            case "Warrior":
                player = new Player(classType, 200, 0 , 200, 100, 50);
                break;
            case "Hunter":
                player = new Player(classType, 100, 0 , 100, 150, 200);
                break;
            case "Mage":
                player = new Player(classType, 80, 0 , 50, 200, 50);
                break;
            case "Rogue":
                player = new Player(classType, 150, 0 , 50, 200, 100);
                break;
        }

        let getInterface = document.querySelector('.interface');
        getInterface.innerHTML = '<img src="assets/image/' + classType.toLowerCase() + '.jpeg" alt="' + classType + '" class="img-avatar"><div><h2>' + classType + '</h2><p>Health: ' + player.health + '</p><p>Mana: ' + player.mana + '</p><p>Strenght: ' + player.strenght + '</p><p>Agility: ' + player.agility + '</p><p>Speed: ' + player.speed + '</p></div>';
    },
    setPreFight: function () {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");

        getHeader.innerHTML = '<p>Task: Find an enemy!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for enemy</a>';
        getArena.style.visibility = "visible";
    },
    setFight: function () {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");

        // create enemy!
        let enemy00 = new Enemy("Goblin", 100, 0, 50, 100, 100);
        let enemy01 = new Enemy("Troll", 200, 0, 150, 150, 150);

        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));

        console.log(chooseRandomEnemy); // Show 0 or 1

        switch (chooseRandomEnemy) {
            case 0:
                enemy = enemy00
                break;
            case 1:
                enemy = enemy01
                break;
        }

        getHeader.innerHTML = '<p>Task: Choose your move</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack</a>';
        console.log(enemy.enemyType);
        getEnemy.innerHTML = '<img src="assets/image/' + enemy.enemyType.toLowerCase() + '.jpeg" alt="' + enemy.enemyType + '" class="img-avatar"><div><h2>' + enemy.enemyType + '</h2><p>Health: ' + enemy.health + '</p><p>Mana: ' + enemy.mana + '</p><p>Strenght: ' + enemy.strenght + '</p><p>Agility: ' + enemy.agility + '</p><p>Speed: ' + enemy.speed + '</p></div>';
    }
}