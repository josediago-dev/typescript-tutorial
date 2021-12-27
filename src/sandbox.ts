type STRING_OR_NUMBER = string | number;
type PLAYER_INFO = { name: string, jerseyNumber: number };

const shoot = (name: string, point: number, assist?: STRING_OR_NUMBER): void => {
    console.log(`${name} shot the ball from ${point} point distance. ${assist ? `${assist} with the assist!` : ''}`);
};

shoot('Steph Curry', 3, 23);
shoot('Steph Curry', 3, 'Draymond Green');
shoot('Steph Curry', 3);


const announcePointGuard = (player: PLAYER_INFO): void => {
    console.log(`Wearing jersey number ${player.jerseyNumber}. The starting point guard ${player.name}!`);
};

const announceShootingGuard = (player: PLAYER_INFO): void => {
    console.log(`Wearing jersey number ${player.jerseyNumber}. The starting shooting guard ${player.name}!`);
};

announcePointGuard({ name: 'Steph Curry', jerseyNumber: 30 });
announceShootingGuard({ name: 'Klay Thompson', jerseyNumber: 11 });